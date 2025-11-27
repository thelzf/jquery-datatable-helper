function CreateDatatable(tableId, perPage = 10) {

    let selector = "#" + tableId;

    if ($.fn.DataTable.isDataTable(selector)) {
        $(selector).DataTable().destroy();
    }

    $(selector).DataTable({
        pageLength: perPage,
        ordering: true,
        searching: true,
        responsive: true,
        dom: 'Blfrtip',

        buttons: [

            {
                extend: 'excelHtml5',
                text: '<i class="far fa-file-excel"></i>',
                titleAttr: 'Exportar para Excel',
                className: 'btn btn-success me-2',
                exportOptions: { columns: ':visible' }
            },

            {
                extend: 'pdfHtml5',
                text: '<i class="far fa-file-pdf"></i>',
                titleAttr: 'Exportar para PDF',
                className: 'btn btn-danger me-2',
                exportOptions: { columns: ':visible' }
            },

            {
                extend: 'print',
                text: '<i class="fa fa-print"></i>',
                titleAttr: 'Imprimir',
                className: 'btn btn-info me-2',
                exportOptions: { columns: ':visible' }
            },

            {
                text: '<i class="fa fa-file-word"></i>',
                titleAttr: 'Exportar para Word',
                className: 'btn btn-primary me-2',
                action: function(e, dt) {

                    let tabelaHTML = dt.table().node().outerHTML;

                    let conteudo =
                        '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                        'xmlns:w="urn:schemas-microsoft-com:office:word" ' +
                        'xmlns="http://www.w3.org/TR/REC-html40">' +
                        "<head><meta charset='utf-8'><title>Relatório</title></head><body>" +
                        tabelaHTML +
                        '</body></html>';

                    let blob = new Blob(['\ufeff', conteudo], {
                        type: 'application/msword'
                    });

                    let url = URL.createObjectURL(blob);
                    let link = document.createElement('a');
                    link.href = url;
                    link.download = 'relatorio.doc';
                    link.click();
                }
            }
        ],

        language: {
            sEmptyTable: "Não há registros cadastrados",
            sZeroRecords: "Nenhum registro encontrado",
            sLoadingRecords: "Carregando...",
            sProcessing: "Processando...",
            sSearch: "",
            oPaginate: {
                sNext: "Próximo",
                sPrevious: "Anterior",
                sFirst: "Primeiro",
                sLast: "Último"
            }
        }
    });
}

module.exports = { CreateDatatable };
