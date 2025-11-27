function initDataTable(selector, options = {}) {

    const {
        paging = true,
        searching = true,
        ordering = true,
        exportButtons = ['excel', 'pdf', 'print', 'word'],
        pageLength = 10,
        responsive = true
    } = options;

    if ($.fn.DataTable.isDataTable(selector)) {
        $(selector).DataTable().destroy();
    }


    const buttons = [];

    if (exportButtons.includes('excel')) {
        buttons.push({
            extend: 'excelHtml5',
            text: '<i class="far fa-file-excel"></i>',
            titleAttr: 'Exportar para Excel',
            className: 'btn btn-success me-2',
            exportOptions: { columns: ':visible' }
        });
    }

    if (exportButtons.includes('pdf')) {
        buttons.push({
            extend: 'pdfHtml5',
            text: '<i class="far fa-file-pdf"></i>',
            titleAttr: 'Exportar para PDF',
            className: 'btn btn-danger me-2',
            exportOptions: { columns: ':visible' }
        });
    }

    if (exportButtons.includes('print')) {
        buttons.push({
            extend: 'print',
            text: '<i class="fa fa-print"></i>',
            titleAttr: 'Imprimir',
            className: 'btn btn-info me-2',
            exportOptions: { columns: ':visible' }
        });
    }

    if (exportButtons.includes('word')) {
        buttons.push({
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
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }
        });
    }


    $(selector).DataTable({
        paging: paging,
        searching: searching,
        ordering: ordering,
        pageLength: pageLength,
        responsive: responsive,
        dom: 'Blfrtip',
        buttons: buttons,
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


if (typeof module !== 'undefined' && module.exports) {

    module.exports = { initDataTable };
} else if (typeof define === 'function' && define.amd) {

    define([], function() {
        return { initDataTable };
    });
} else {

    window.dataTableHelper = { initDataTable };
}