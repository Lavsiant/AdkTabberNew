webpackHotUpdate("main",{

/***/ "./src/components/song/songFilters.tsx":
/*!*********************************************!*\
  !*** ./src/components/song/songFilters.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interfaces_song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/song */ "./src/interfaces/song.ts");
/* harmony import */ var _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/tab */ "./src/interfaces/tab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SongFilter = /** @class */ (function (_super) {
    __extends(SongFilter, _super);
    function SongFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
        };
        _this.onNameChanged = function (e) {
            _this.setState({ name: e.target.value });
            _this.props.filterSongs({
                name: e.target.value,
                band: _this.state.band,
                difficulty: _this.state.difficulty,
                tabType: _this.state.tabType,
            });
        };
        _this.onBandChanged = function (e) {
            _this.setState({ band: e.target.value });
            _this.props.filterSongs({
                name: _this.state.name,
                band: e.target.value,
                difficulty: _this.state.difficulty,
                tabType: _this.state.tabType,
            });
        };
        _this.onTabTypeChanged = function (e) {
            _this.setState({ tabType: e.target.value });
            _this.props.filterSongs({
                name: _this.state.name,
                band: _this.state.band,
                difficulty: _this.state.difficulty,
                tabType: _this.state.tabType,
            });
        };
        _this.onDifficultyChanged = function (e) {
            _this.setState({ difficulty: e.target.value });
            _this.props.filterSongs({
                name: _this.state.name,
                band: _this.state.band,
                difficulty: _this.state.difficulty,
                tabType: _this.state.tabType,
            });
        };
        _this.createTabOpen = function () {
            window.location.href = "/song-create";
        };
        _this.state = {
            name: '',
            band: '',
            tabType: _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__["TabType"].Any,
            difficulty: _interfaces_song__WEBPACK_IMPORTED_MODULE_5__["DifficultyType"].Any,
        };
        return _this;
    }
    SongFilter.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter-bar", style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, { className: "filter-field", label: 'Name', margin: "normal", variant: "outlined", onChange: this.onNameChanged })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, { label: 'Band', defaultValue: "", className: "filter-field", margin: "normal", variant: "outlined", onChange: this.onBandChanged })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, { select: true, label: 'Dificulty', 
                    //className={styles.textField}
                    value: this.state.difficulty, name: 'difficulty', 
                    // SelectProps={{
                    //     MenuProps: styles
                    // }}
                    style: { minWidth: 160 }, helperText: 'Choose dificulty', margin: "normal", variant: "outlined", onChange: this.onDifficultyChanged },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_5__["DifficultyType"].Any }, " Any "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_5__["DifficultyType"].Easy }, " Easy "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_5__["DifficultyType"].Medium }, " Medium "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_5__["DifficultyType"].Hard }, " Hard "))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, { select: true, label: 'Type', 
                    //className={styles.textField}
                    value: this.state.difficulty, name: 'tabType', 
                    // SelectProps={{
                    //     MenuProps: styles
                    // }}
                    style: { minWidth: 160 }, helperText: 'Choose tab type', margin: "normal", variant: "outlined", onChange: this.onTabTypeChanged },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__["TabType"].Any }, " Any "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__["TabType"].Guitar }, " Guitar "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__["TabType"].Drums }, " Drums "),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_6__["TabType"].Piano }, " Piano "))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "filter", style: { paddingTop: 16 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, { size: "large", color: "primary", style: { float: 'right' }, "aria-label": "Add song", onClick: this.createTabOpen },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, null)))));
    };
    return SongFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (SongFilter);


/***/ }),

/***/ "./src/components/song/songList.tsx":
/*!******************************************!*\
  !*** ./src/components/song/songList.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "./node_modules/@material-ui/core/TableFooter/index.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_tabelsPaginationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/tabelsPaginationActions */ "./src/helpers/tabelsPaginationActions.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _songActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./songActions */ "./src/components/song/songActions.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _interfaces_song__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/song */ "./src/interfaces/song.ts");
/* harmony import */ var _songFilters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./songFilters */ "./src/components/song/songFilters.tsx");
/* harmony import */ var _interfaces_tab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../interfaces/tab */ "./src/interfaces/tab.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

















var SongList = /** @class */ (function (_super) {
    __extends(SongList, _super);
    function SongList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangePage = function (event, page) {
            _this.setState({ page: page });
        };
        _this.handleChangeRowsPerPage = function (event) {
            _this.setState({ rowsPerPage: +event.target.value });
        };
        _this.openDetails = function (song) {
            window.location.href = '/song/' + song.id;
        };
        _this.filterSongs = function (filterOptions) {
            var songs = _this.props.songs;
            if (filterOptions.name)
                songs = songs.filter(function (x) { return x.name.toLowerCase().includes(filterOptions.name.toLowerCase()); });
            if (filterOptions.band)
                songs = songs.filter(function (x) { return x.band.toLowerCase().includes(filterOptions.band.toLowerCase()); });
            if (filterOptions.difficulty && filterOptions.difficulty !== _interfaces_song__WEBPACK_IMPORTED_MODULE_14__["DifficultyType"].Any)
                songs = songs.filter(function (x) { return x.difficulty === filterOptions.difficulty; });
            if (filterOptions.tabType && filterOptions.tabType !== _interfaces_tab__WEBPACK_IMPORTED_MODULE_16__["TabType"].Any)
                songs = songs.filter(function (x) { return x.tabs.some(function (t) { return t.type === filterOptions.tabType; }); });
            _this.setState({ filteredSongs: songs });
        };
        _this.state = {
            filteredSongs: [],
            page: 0,
            rowsPerPage: 5
        };
        return _this;
    }
    SongList.prototype.componentDidMount = function () {
        var _this = this;
        this.props.getAllSongs().then(function () {
            return _this.setState({ filteredSongs: _this.props.songs });
        });
    };
    SongList.prototype.render = function () {
        var _this = this;
        var _a = this.state, rowsPerPage = _a.rowsPerPage, page = _a.page;
        var emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.filteredSongs.length - page * rowsPerPage);
        return (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13___default.a, { style: { margin: 'auto', marginLeft: '7px', marginRight: '7px' } },
            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", { className: 'table-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_songFilters__WEBPACK_IMPORTED_MODULE_15__["default"], { filterSongs: this.filterSongs }),
                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default.a, { className: 'table', style: { height: 630 } },
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_0___default.a, null,
                        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default.a, null,
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 20 } }, " Name"),
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 20 } }, " Band "),
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 20 } }, " Dificulty "),
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 20 }, numeric: true }, " Tempo "))),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default.a, null,
                        this.state.filteredSongs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (song) {
                            return (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default.a, { key: song.id, className: "table-field", onClick: function () { return _this.openDetails(song); } },
                                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 18 }, component: "th", scope: "row" }, song.name),
                                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 18 }, numeric: true }, song.band),
                                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 18 }, numeric: true }, _interfaces_song__WEBPACK_IMPORTED_MODULE_14__["DifficultyType"][song.difficulty]),
                                react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { fontSize: 18 }, numeric: true }, song.tempo)));
                        }),
                        emptyRows > 0 && (react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default.a, { style: { height: 48 * emptyRows } },
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { colSpan: 6 })))),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_4___default.a, null,
                        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6___default.a, null,
                            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5___default.a, { rowsPerPageOptions: [2, 5, 10, 25], colSpan: 3, count: this.props.songs.length, rowsPerPage: rowsPerPage, page: page, SelectProps: {
                                    native: true,
                                }, onChangePage: this.handleChangePage, onChangeRowsPerPage: this.handleChangeRowsPerPage, ActionsComponent: _helpers_tabelsPaginationActions__WEBPACK_IMPORTED_MODULE_7__["default"] })))))));
    };
    return SongList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component));
var mapProps = function (state) {
    return {
        songs: state.songReducer.songs,
    };
};
var mapDispatch = function (dispatch) { return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    getAllSongs: _songActions__WEBPACK_IMPORTED_MODULE_11__["getAllSongs"].action
}, dispatch); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapProps, mapDispatch)(SongList));


/***/ }),

/***/ "./src/interfaces/song.ts":
/*!********************************!*\
  !*** ./src/interfaces/song.ts ***!
  \********************************/
/*! exports provided: DifficultyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifficultyType", function() { return DifficultyType; });
var DifficultyType;
(function (DifficultyType) {
    DifficultyType[DifficultyType["Easy"] = 0] = "Easy";
    DifficultyType[DifficultyType["Medium"] = 1] = "Medium";
    DifficultyType[DifficultyType["Hard"] = 2] = "Hard";
    DifficultyType[DifficultyType["Any"] = 3] = "Any";
})(DifficultyType || (DifficultyType = {}));


/***/ }),

/***/ "./src/interfaces/tab.ts":
/*!*******************************!*\
  !*** ./src/interfaces/tab.ts ***!
  \*******************************/
/*! exports provided: TabType, DrumType, NoteType, OctaveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabType", function() { return TabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrumType", function() { return DrumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteType", function() { return NoteType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OctaveType", function() { return OctaveType; });
var TabType;
(function (TabType) {
    TabType[TabType["Guitar"] = 0] = "Guitar";
    TabType[TabType["Drums"] = 1] = "Drums";
    TabType[TabType["Piano"] = 2] = "Piano";
    TabType[TabType["Any"] = 3] = "Any";
})(TabType || (TabType = {}));
var DrumType;
(function (DrumType) {
    DrumType[DrumType["CC2"] = 0] = "CC2";
    DrumType[DrumType["BD"] = 1] = "BD";
    DrumType[DrumType["xH"] = 2] = "xH";
    DrumType[DrumType["S"] = 3] = "S";
    DrumType[DrumType["MT"] = 4] = "MT";
    DrumType[DrumType["LT"] = 5] = "LT";
    DrumType[DrumType["CC1"] = 6] = "CC1";
    DrumType[DrumType["oH"] = 7] = "oH";
    DrumType[DrumType["LFT"] = 10] = "LFT";
})(DrumType || (DrumType = {}));
var NoteType;
(function (NoteType) {
    NoteType[NoteType["C"] = 1] = "C";
    NoteType[NoteType["Csharp"] = 2] = "Csharp";
    NoteType[NoteType["D"] = 3] = "D";
    NoteType[NoteType["Dsharp"] = 4] = "Dsharp";
    NoteType[NoteType["E"] = 5] = "E";
    NoteType[NoteType["F"] = 6] = "F";
    NoteType[NoteType["Fsharp"] = 7] = "Fsharp";
    NoteType[NoteType["G"] = 8] = "G";
    NoteType[NoteType["Gsharp"] = 9] = "Gsharp";
    NoteType[NoteType["A"] = 10] = "A";
    NoteType[NoteType["Asharp"] = 11] = "Asharp";
    NoteType[NoteType["H"] = 12] = "H";
})(NoteType || (NoteType = {}));
var OctaveType;
(function (OctaveType) {
    OctaveType[OctaveType["Contra"] = 1] = "Contra";
    OctaveType[OctaveType["Great"] = 2] = "Great";
    OctaveType[OctaveType["Small"] = 3] = "Small";
    OctaveType[OctaveType["FirstLine"] = 4] = "FirstLine";
    OctaveType[OctaveType["SecondLine"] = 5] = "SecondLine";
    OctaveType[OctaveType["ThirdLine"] = 6] = "ThirdLine";
    OctaveType[OctaveType["FourthLine"] = 7] = "FourthLine";
})(OctaveType || (OctaveType = {}));


/***/ }),

/***/ "./src/services/songService.ts":
/*!*************************************!*\
  !*** ./src/services/songService.ts ***!
  \*************************************/
/*! exports provided: songService, getSong, getAllSongs, createSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songService", function() { return songService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSong", function() { return getSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSongs", function() { return getAllSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSong", function() { return createSong; });
/* harmony import */ var _helpers_apiError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiError */ "./src/helpers/apiError.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var songService = {
    getAllSongs: getAllSongs,
    getSong: getSong,
    createSong: createSong
};
function getSong(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/song/get?id=' + id)];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        throw new Error('Internal error');
                    }
                    return [2 /*return*/, res.json()];
            }
        });
    });
}
function getAllSongs(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/song/all')];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        throw new Error('Internal error');
                    }
                    return [2 /*return*/, res.json()];
            }
        });
    });
}
function createSong(song) {
    return __awaiter(this, void 0, void 0, function () {
        var res, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch('/api/song/create')];
                case 1:
                    res = _c.sent();
                    if (!res.ok) {
                        throw new Error('Internal error');
                    }
                    if (!!res.ok) return [3 /*break*/, 3];
                    _a = _helpers_apiError__WEBPACK_IMPORTED_MODULE_0__["ApiError"].bind;
                    _b = [void 0, res.status];
                    return [4 /*yield*/, res.text()];
                case 2: throw new (_a.apply(_helpers_apiError__WEBPACK_IMPORTED_MODULE_0__["ApiError"], _b.concat([_c.sent()])))();
                case 3: return [2 /*return*/, res.json()];
            }
        });
    });
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdGaWx0ZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlcy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2VzL3RhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc29uZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTBCO0FBQ1A7QUFDTDtBQUNVO0FBQ0s7QUFDUjtBQWEvQztJQUF3Qyw4QkFBNkI7SUFDakUsb0JBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU9mO1FBRUQsdUJBQWlCLEdBQUc7UUFFcEIsQ0FBQztRQUVELG1CQUFhLEdBQUcsV0FBQztZQUViLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNsQjtnQkFDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNwQixJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNqQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2FBQzlCLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxtQkFBYSxHQUFHLFdBQUM7WUFFYixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV4QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDcEIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUU5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsc0JBQWdCLEdBQUcsV0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUzQyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUU5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQseUJBQW1CLEdBQUcsV0FBQztZQUNuQixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUU5QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUM5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBSUQsbUJBQWEsR0FBRztZQUNaLE1BQU0sQ0FBQyxRQUFRLENB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QUEzQyxHQUFHLEdBQUcsU0FBcUM7b0JBQ2pELElBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDO3dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDckM7b0JBQ0Qsc0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDOzs7O0NBRXJCO0FBRU0sU0FBZSxXQUFXLENBQUMsRUFBVTs7Ozs7d0JBQzVCLHFCQUFNLEtBQUssQ0FBQyxlQUFlLENBQUM7O29CQUFsQyxHQUFHLEdBQUcsU0FBNEI7b0JBQ3hDLElBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDO3dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDckM7b0JBQ0Qsc0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDOzs7O0NBRXJCO0FBRU0sU0FBZSxVQUFVLENBQUMsSUFBWTs7Ozs7d0JBQzdCLHFCQUFNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7b0JBQXJDLEdBQUcsR0FBRyxTQUErQjtvQkFDM0MsSUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUM7d0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUNyQzt5QkFDRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQVAsd0JBQU87eUJBQ0ksMERBQVE7a0NBQUMsR0FBRyxDQUFDLE1BQU07b0JBQUUscUJBQU0sR0FBRyxDQUFDLElBQUksRUFBRTt3QkFBL0MsTUFBTSxjQUFJLDBEQUFRLGFBQWEsU0FBZ0IsTUFBQyxDQUFDO3dCQUVyRCxzQkFBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUM7Ozs7Q0FFckIiLCJmaWxlIjoibWFpbi4zNjc1MjVmZDdmOWQ0MWNhMmU1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBUYWJUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGZpbHRlclNvbmdzKG9wdGlvbnM6IGFueSk6IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGJhbmQ6IHN0cmluZztcclxuICAgIGRpZmZpY3VsdHk6IERpZmZpY3VsdHlUeXBlO1xyXG4gICAgdGFiVHlwZTogVGFiVHlwZTsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbmdGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgYmFuZDogJycsXHJcbiAgICAgICAgICAgIHRhYlR5cGU6IFRhYlR5cGUuQW55LFxyXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5VHlwZS5BbnksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYW1lQ2hhbmdlZCA9IGUgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogdGhpcy5zdGF0ZS5iYW5kLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdGhpcy5zdGF0ZS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgdGFiVHlwZTogdGhpcy5zdGF0ZS50YWJUeXBlLCAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhbmRDaGFuZ2VkID0gZSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYW5kOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTb25ncyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiB0aGlzLnN0YXRlLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICAgICAgICB0YWJUeXBlOiB0aGlzLnN0YXRlLnRhYlR5cGUsICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFiVHlwZUNoYW5nZWQgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFiVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGJhbmQ6IHRoaXMuc3RhdGUuYmFuZCxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuc3RhdGUuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgIHRhYlR5cGU6IHRoaXMuc3RhdGUudGFiVHlwZSwgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaWZmaWN1bHR5Q2hhbmdlZCA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWZmaWN1bHR5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTb25ncyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogdGhpcy5zdGF0ZS5iYW5kLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdGhpcy5zdGF0ZS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgdGFiVHlwZTogdGhpcy5zdGF0ZS50YWJUeXBlLCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgY3JlYXRlVGFiT3BlbiA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3NvbmctY3JlYXRlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1iYXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnQmFuZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQmFuZENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RpZmljdWx0eSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgTWVudVByb3BzOiBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5XaWR0aDoxNjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PSdDaG9vc2UgZGlmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRpZmZpY3VsdHlDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5Bbnl9PiBBbnkgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5FYXN5fT4gRWFzeSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLk1lZGl1bX0+IE1lZGl1bSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkhhcmR9PiBIYXJkIDwvTWVudUl0ZW0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1R5cGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGFiVHlwZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1lbnVQcm9wczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6MTYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD0nQ2hvb3NlIHRhYiB0eXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRhYlR5cGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkFueX0+IEFueSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuR3VpdGFyfT4gR3VpdGFyIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5EcnVtc30+IERydW1zIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5QaWFub30+IFBpYW5vIDwvTWVudUl0ZW0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGFyaWEtbGFiZWw9e1wiQWRkIHNvbmdcIn0gb25DbGljaz17dGhpcy5jcmVhdGVUYWJPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVGb290ZXInO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb25BY3Rpb25zIGZyb20gJy4uLy4uL2hlbHBlcnMvdGFiZWxzUGFnaW5hdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBnZXRBbGxTb25ncyB9IGZyb20gJy4vc29uZ0FjdGlvbnMnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBJU29uZywgeyBEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc29uZyc7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBEaXNwYXRjaCc7XHJcblxyXG5pbXBvcnQgU29uZ0ZpbHRlciBmcm9tICcuL3NvbmdGaWx0ZXJzJ1xyXG5pbXBvcnQgeyBUYWJUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHNvbmdzOiBJU29uZ1tdICAgIFxyXG4gICAgZ2V0QWxsU29uZ3MoKTogYW55XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBmaWx0ZXJlZFNvbmdzOiBhbnlbXTtcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICAgIHJvd3NQZXJQYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTb25nTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlsdGVyZWRTb25nczogW10sXHJcbiAgICAgICAgICAgIHBhZ2U6IDAsXHJcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlOiA1XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdldEFsbFNvbmdzKCkudGhlbigoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRTb25nczogdGhpcy5wcm9wcy5zb25ncyB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIHBhZ2UpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3NQZXJQYWdlOiArZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRGV0YWlscyA9IChzb25nOiBJU29uZykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zb25nLycgKyBzb25nLmlkXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyU29uZ3MgPSAoZmlsdGVyT3B0aW9uczogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IHNvbmdzID0gdGhpcy5wcm9wcy5zb25ncztcclxuICAgICAgICBpZiAoZmlsdGVyT3B0aW9ucy5uYW1lKVxyXG4gICAgICAgICAgICBzb25ncyA9IHNvbmdzLmZpbHRlcih4ID0+IHgubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlck9wdGlvbnMubmFtZS50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgaWYgKGZpbHRlck9wdGlvbnMuYmFuZClcclxuICAgICAgICAgICAgc29uZ3MgPSBzb25ncy5maWx0ZXIoeCA9PiB4LmJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJPcHRpb25zLmJhbmQudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJPcHRpb25zLmRpZmZpY3VsdHkgJiYgZmlsdGVyT3B0aW9ucy5kaWZmaWN1bHR5ICE9PSBEaWZmaWN1bHR5VHlwZS5BbnkpXHJcbiAgICAgICAgICAgIHNvbmdzID0gc29uZ3MuZmlsdGVyKHggPT4geC5kaWZmaWN1bHR5ID09PSBmaWx0ZXJPcHRpb25zLmRpZmZpY3VsdHkpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJPcHRpb25zLnRhYlR5cGUgJiYgZmlsdGVyT3B0aW9ucy50YWJUeXBlICE9PSBUYWJUeXBlLkFueSlcclxuICAgICAgICAgICAgc29uZ3MgPSBzb25ncy5maWx0ZXIoeCA9PiB4LnRhYnMuc29tZSh0PT50LnR5cGUgPT09IGZpbHRlck9wdGlvbnMudGFiVHlwZSkpOyAgICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkU29uZ3M6IHNvbmdzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHJvd3NQZXJQYWdlLCBwYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5Um93cyA9IHJvd3NQZXJQYWdlIC0gTWF0aC5taW4ocm93c1BlclBhZ2UsIHRoaXMuc3RhdGUuZmlsdGVyZWRTb25ncy5sZW5ndGggLSBwYWdlICogcm93c1BlclBhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3sgbWFyZ2luOidhdXRvJywgbWFyZ2luTGVmdDonN3B4JywgbWFyZ2luUmlnaHQ6JzdweCd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPFNvbmdGaWx0ZXIgZmlsdGVyU29uZ3M9e3RoaXMuZmlsdGVyU29uZ3N9PjwvU29uZ0ZpbHRlcj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9eyd0YWJsZSd9IHN0eWxlPXt7aGVpZ2h0OiA2MzB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT4gTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gPiBCYW5kIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gPiBEaWZpY3VsdHkgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSBudW1lcmljPiBUZW1wbyA8L1RhYmxlQ2VsbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlsdGVyZWRTb25ncy5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKS5tYXAoc29uZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3NvbmcuaWR9IGNsYXNzTmFtZT1cInRhYmxlLWZpZWxkXCIgb25DbGljaz17KCkgPT4gdGhpcy5vcGVuRGV0YWlscyhzb25nKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fSBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19IG51bWVyaWM+e3NvbmcuYmFuZH08L1RhYmxlQ2VsbD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19IG51bWVyaWM+e0RpZmZpY3VsdHlUeXBlW3NvbmcuZGlmZmljdWx0eV19PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19IG51bWVyaWM+e3NvbmcudGVtcG99PC9UYWJsZUNlbGw+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbXB0eVJvd3MgPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBzdHlsZT17eyBoZWlnaHQ6IDQ4ICogZW1wdHlSb3dzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzIsIDUsIDEwLCAyNV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17dGhpcy5wcm9wcy5zb25ncy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17dGhpcy5oYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25zQ29tcG9uZW50PXtUYWJsZVBhZ2luYXRpb25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzb25nczogc3RhdGUuc29uZ1JlZHVjZXIuc29uZ3MsICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoXHJcbiAgICB7XHJcbiAgICAgICAgZ2V0QWxsU29uZ3M6IGdldEFsbFNvbmdzLmFjdGlvblxyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBQcm9wcywgbWFwRGlzcGF0Y2gpKFNvbmdMaXN0KSIsImltcG9ydCBJVGFiIGZyb20gXCIuL3RhYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElTb25nIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7ICAgIFxyXG4gICAgYmFuZDogc3RyaW5nO1xyXG4gICAgdGVtcG86IG51bWJlcjtcclxuICAgIHRhYnM6IElUYWJbXTtcclxuICAgIGRpZmZpY3VsdHkgOiBEaWZmaWN1bHR5VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlmZmljdWx0eVR5cGV7XHJcbiAgICBFYXN5LFxyXG4gICAgTWVkaXVtLFxyXG4gICAgSGFyZCxcclxuICAgIEFueVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElUYWIge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7ICBcclxuICAgIHR5cGU6IFRhYlR5cGU7ICBcclxuICAgIGl0ZXJhdGlvbnM6IElUYWJJdGVyYXRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGFiVHlwZXtcclxuICAgIEd1aXRhcixcclxuICAgIERydW1zLFxyXG4gICAgUGlhbm8sXHJcbiAgICBBbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFiSXRlcmF0aW9ue1xyXG4gICAgdGltZVNjYWxlIDogbnVtYmVyO1xyXG4gICAgaXNQbGF5aW5nPzogYm9vbGVhbjtcclxuICAgIGlzU2VsZWN0ZWRGb3JUUz86IGJvb2xlYW47XHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR3VpdGFySXRlcmF0aW9uIGV4dGVuZHMgSVRhYkl0ZXJhdGlvbntcclxuICAgIG5vdGVzPzogSUd1aXRhck5vdGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR3VpdGFyTm90ZXtcclxuICAgIGZyZXQ/OiBudW1iZXI7XHJcbiAgICBzdHJpbmc6IG51bWJlcjtcclxuICAgIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJ1bUl0ZXJhdGlvbiBleHRlbmRzIElUYWJJdGVyYXRpb257XHJcbiAgICBkcnVtczogSURydW1Ob3RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURydW1Ob3Rle1xyXG4gICAgZHJ1bTogRHJ1bVR5cGU7XHJcbiAgICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJ1bVR5cGV7ICAgIFxyXG4gICAgICAgIENDMiA9IDAsICAgICAgICBcclxuICAgICAgICBCRCA9IDEsICAgICAgICBcclxuICAgICAgICB4SCA9IDIsICAgICAgICBcclxuICAgICAgICBTID0gMywgICAgICAgIFxyXG4gICAgICAgIE1UID0gNCwgICAgICAgIFxyXG4gICAgICAgIExUID0gNSwgICAgICAgIFxyXG4gICAgICAgIENDMSA9IDYsICAgICAgICBcclxuICAgICAgICBvSCA9IDcsXHJcbiAgIFxyXG4gICAgICAgIExGVCA9IDEwXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQaWFub0l0ZXJhdGlvbiBleHRlbmRzIElUYWJJdGVyYXRpb257XHJcbiAgICBub3RlczogSUNvbmNyZXRlTm90ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25jcmV0ZU5vdGV7XHJcbiAgICBub3RlIDogTm90ZVR5cGU7XHJcbiAgICBvY3RhdmU6IE9jdGF2ZVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE5vdGVUeXBle1xyXG4gICAgQyA9IDEsXHJcbiAgICBDc2hhcnAgPSAyLFxyXG4gICAgRCA9IDMsXHJcbiAgICBEc2hhcnAgPSA0LFxyXG4gICAgRSA9IDUsXHJcbiAgICBGID0gNixcclxuICAgIEZzaGFycCA9IDcsXHJcbiAgICBHID0gOCxcclxuICAgIEdzaGFycCA9IDksXHJcbiAgICBBID0gMTAsXHJcbiAgICBBc2hhcnAgPSAxMSxcclxuICAgIEggPSAxMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPY3RhdmVUeXBle1xyXG4gICAgQ29udHJhID0gMSxcclxuICAgIEdyZWF0ID0gMixcclxuICAgIFNtYWxsID0gMyxcclxuICAgIEZpcnN0TGluZSA9IDQsXHJcbiAgICBTZWNvbmRMaW5lID0gNSxcclxuICAgIFRoaXJkTGluZSA9IDYsXHJcbiAgICBGb3VydGhMaW5lID0gN1xyXG59IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vaGVscGVycy9jb25maWcnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZXNwb25zZSBmcm9tICcuLi9pbnRlcmZhY2VzL3Jlc3BvbnNlJ1xyXG5pbXBvcnQgeyBSZWdpc3RlclVzZXJNb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aC9yZWdpc3RlclZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IExvZ2luTW9kZWwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2F1dGgvbG9naW5WaWV3TW9kZWwnO1xyXG5pbXBvcnQge0FwaUVycm9yfSBmcm9tICcuLi9oZWxwZXJzL2FwaUVycm9yJ1xyXG5pbXBvcnQgSVRhYiBmcm9tICcuLi9pbnRlcmZhY2VzL3RhYic7XHJcbmltcG9ydCBJU29uZyBmcm9tICcuLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvbmdTZXJ2aWNlID0geyAgICBcclxuICAgIGdldEFsbFNvbmdzLCAgIFxyXG4gICAgZ2V0U29uZyxcclxuICAgIGNyZWF0ZVNvbmcgICBcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTb25nKGlkOiBudW1iZXIpIDogUHJvbWlzZTxSZXNwb25zZTxJU29uZz4+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NvbmcvZ2V0P2lkPScgKyBpZCk7XHJcbiAgICBpZighcmVzLm9rKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJuYWwgZXJyb3InKTtcclxuICAgIH0gICAgXHJcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxTb25ncyhpZDogbnVtYmVyKSA6IFByb21pc2U8UmVzcG9uc2U8SVNvbmdbXT4+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NvbmcvYWxsJyk7XHJcbiAgICBpZighcmVzLm9rKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJuYWwgZXJyb3InKTtcclxuICAgIH0gICAgXHJcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTb25nKHNvbmcgOiBJU29uZykgOiBQcm9taXNlPFJlc3BvbnNlPGFueT4+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NvbmcvY3JlYXRlJyk7XHJcbiAgICBpZighcmVzLm9rKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJuYWwgZXJyb3InKTtcclxuICAgIH0gICAgXHJcbiAgICBpZighcmVzLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9