# jquery-datatable-helper

A simple helper to initialize jQuery DataTables with export buttons (Excel, PDF, Print, Word) and custom configuration.

[![npm version](https://img.shields.io/npm/v/@thelzf/jquery-datatable-helper)](https://www.npmjs.com/package/@thelzf/jquery-datatable-helper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Features

- Simplifies initialization of jQuery DataTables
- Supports export buttons: Excel, PDF, Print, Word
- Customizable settings for paging, searching, ordering, etc.
- Works with both ES Modules and CommonJS

---

## Installation

### 1️⃣ Via npm / GitHub Packages

```bash
npm install @thelzf/jquery-datatable-helper
```

For private packages, make sure to login first:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@thelzf
```

### 2️⃣ Directly from GitHub

```bash
npm install git+https://github.com/thelzf/jquery-datatable-helper.git
```

Works without publishing to npm/GitHub Packages. For private repositories, use SSH or a personal access token.

### 3️⃣ Using via `<script>` in HTML

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="node_modules/@thelzf/jquery-datatable-helper/index.js"></script>
```

---

## Usage

### ES Modules (import/export)

```javascript
import { initDataTable } from '@thelzf/jquery-datatable-helper';

$(document).ready(function() {
    initDataTable('#my-table', {
        paging: true,
        searching: true,
        ordering: true,
        exportButtons: ['excel', 'pdf', 'print', 'word']
    });
});
```

### CommonJS / jQuery Traditional

```javascript
const dtHelper = require('@thelzf/jquery-datatable-helper');

$(document).ready(function() {
    dtHelper.initDataTable('#my-table', {
        paging: true,
        searching: true,
        ordering: true,
        exportButtons: ['excel', 'pdf', 'print', 'word']
    });
});
```

---

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| paging | boolean | true | Enable or disable pagination |
| searching | boolean | true | Enable or disable search |
| ordering | boolean | true | Enable or disable column ordering |
| exportButtons | array | [] | Buttons to show for exporting: `excel`, `pdf`, `print`, `word` |

---

## Dependencies

This package requires:
- jQuery
- DataTables
- DataTables Buttons extension (for export functionality)

Make sure to include these in your project before using this helper.

---

## License

MIT © thelzf