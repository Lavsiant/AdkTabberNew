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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdGaWx0ZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlcy9zb25nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2VzL3RhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc29uZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTBCO0FBQ1A7QUFDTDtBQUNVO0FBQ0s7QUFDUjtBQWEvQztJQUF3Qyw4QkFBNkI7SUFDakUsb0JBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU9mO1FBRUQsdUJBQWlCLEdBQUc7UUFFcEIsQ0FBQztRQUVELG1CQUFhLEdBQUcsV0FBQztZQUViLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNsQjtnQkFDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNwQixJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNqQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2FBQzlCLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxtQkFBYSxHQUFHLFdBQUM7WUFFYixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV4QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDcEIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUU5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsc0JBQWdCLEdBQUcsV0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUzQyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUU5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQseUJBQW1CLEdBQUcsV0FBQztZQUNuQixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUU5QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsVUFBVSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUM5QixDQUFDLENBQUM7UUFDWCxDQUFDO1FBSUQsbUJBQWEsR0FBRztZQUNaLE1BQU0sQ0FBQyxRQUFRLENB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QUFHLFNBQXFDO29CQUNqRCxJQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQzt3QkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3JDO29CQUNELHNCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQzs7OztDQUVyQjtBQUVNLFNBQWUsV0FBVyxDQUFDLEVBQVU7Ozs7O3dCQUM1QixxQkFBTSxLQUFLLENBQUMsZUFBZSxDQUFDOztvQkFBbEMsR0FBRyxHQUFHLFNBQTRCO29CQUN4QyxJQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQzt3QkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3JDO29CQUNELHNCQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQzs7OztDQUVyQjtBQUVNLFNBQWUsVUFBVSxDQUFDLElBQVk7Ozs7O3dCQUM3QixxQkFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUM7O29CQUFyQyxHQUFHLEdBQUcsU0FBK0I7b0JBQzNDLElBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFDO3dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDckM7eUJBQ0UsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFQLHdCQUFPO3lCQUNJLDBEQUFRO2tDQUFDLEdBQUcsQ0FBQyxNQUFNO29CQUFFLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQS9DLE1BQU0sY0FBSSwwREFBUSxhQUFhLFNBQWdCLE1BQUMsQ0FBQzt3QkFFckQsc0JBQU8sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDOzs7O0NBRXJCIiwiZmlsZSI6Im1haW4uMjg0ODAyOGNjNTdmMDNmYWFiMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IERpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zb25nJztcclxuaW1wb3J0IHsgVGFiVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBmaWx0ZXJTb25ncyhvcHRpb25zOiBhbnkpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBiYW5kOiBzdHJpbmc7XHJcbiAgICBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5VHlwZTtcclxuICAgIHRhYlR5cGU6IFRhYlR5cGU7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb25nRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGJhbmQ6ICcnLFxyXG4gICAgICAgICAgICB0YWJUeXBlOiBUYWJUeXBlLkFueSxcclxuICAgICAgICAgICAgZGlmZmljdWx0eTogRGlmZmljdWx0eVR5cGUuQW55LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTmFtZUNoYW5nZWQgPSBlID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmZpbHRlclNvbmdzKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGJhbmQ6IHRoaXMuc3RhdGUuYmFuZCxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuc3RhdGUuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgIHRhYlR5cGU6IHRoaXMuc3RhdGUudGFiVHlwZSwgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYW5kQ2hhbmdlZCA9IGUgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmFuZDogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGJhbmQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdGhpcy5zdGF0ZS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgdGFiVHlwZTogdGhpcy5zdGF0ZS50YWJUeXBlLCAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhYlR5cGVDaGFuZ2VkID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYlR5cGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmZpbHRlclNvbmdzKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYW5kOiB0aGlzLnN0YXRlLmJhbmQsXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiB0aGlzLnN0YXRlLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICAgICAgICB0YWJUeXBlOiB0aGlzLnN0YXRlLnRhYlR5cGUsICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlmZmljdWx0eUNoYW5nZWQgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlmZmljdWx0eTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGJhbmQ6IHRoaXMuc3RhdGUuYmFuZCxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuc3RhdGUuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgIHRhYlR5cGU6IHRoaXMuc3RhdGUudGFiVHlwZSwgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIGNyZWF0ZVRhYk9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zb25nLWNyZWF0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYmFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J05hbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0JhbmQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJhbmRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydEaWZpY3VsdHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGlmZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1lbnVQcm9wczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6MTYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD0nQ2hvb3NlIGRpZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EaWZmaWN1bHR5Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuQW55fT4gQW55IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuRWFzeX0+IEVhc3kgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5NZWRpdW19PiBNZWRpdW0gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5IYXJkfT4gSGFyZCA8L01lbnVJdGVtPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydUeXBlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e3N0eWxlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRpZmZpY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RhYlR5cGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBNZW51UHJvcHM6IHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21pbldpZHRoOjE2MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9J0Nob29zZSB0YWIgdHlwZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UYWJUeXBlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5Bbnl9PiBBbnkgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkd1aXRhcn0+IEd1aXRhciA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuRHJ1bXN9PiBEcnVtcyA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuUGlhbm99PiBQaWFubyA8L01lbnVJdGVtPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBhcmlhLWxhYmVsPXtcIkFkZCBzb25nXCJ9IG9uQ2xpY2s9e3RoaXMuY3JlYXRlVGFiT3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlRm9vdGVyJztcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb24nO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uQWN0aW9ucyBmcm9tICcuLi8uLi9oZWxwZXJzL3RhYmVsc1BhZ2luYXRpb25BY3Rpb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgZ2V0QWxsU29uZ3MgfSBmcm9tICcuL3NvbmdBY3Rpb25zJ1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5cclxuaW1wb3J0IFNvbmdGaWx0ZXIgZnJvbSAnLi9zb25nRmlsdGVycydcclxuaW1wb3J0IHsgVGFiVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzb25nczogSVNvbmdbXSAgICBcclxuICAgIGdldEFsbFNvbmdzKCk6IGFueVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgZmlsdGVyZWRTb25nczogYW55W107XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgICByb3dzUGVyUGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuY2xhc3MgU29uZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkU29uZ3M6IFtdLFxyXG4gICAgICAgICAgICBwYWdlOiAwLFxyXG4gICAgICAgICAgICByb3dzUGVyUGFnZTogNVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRBbGxTb25ncygpLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkU29uZ3M6IHRoaXMucHJvcHMuc29uZ3MgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBwYWdlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb3dzUGVyUGFnZTogK2V2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgb3BlbkRldGFpbHMgPSAoc29uZzogSVNvbmcpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc29uZy8nICsgc29uZy5pZFxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlclNvbmdzID0gKGZpbHRlck9wdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBzb25ncyA9IHRoaXMucHJvcHMuc29uZ3M7XHJcbiAgICAgICAgaWYgKGZpbHRlck9wdGlvbnMubmFtZSlcclxuICAgICAgICAgICAgc29uZ3MgPSBzb25ncy5maWx0ZXIoeCA9PiB4Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJPcHRpb25zLm5hbWUudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJPcHRpb25zLmJhbmQpXHJcbiAgICAgICAgICAgIHNvbmdzID0gc29uZ3MuZmlsdGVyKHggPT4geC5iYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyT3B0aW9ucy5iYW5kLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICBpZiAoZmlsdGVyT3B0aW9ucy5kaWZmaWN1bHR5ICYmIGZpbHRlck9wdGlvbnMuZGlmZmljdWx0eSAhPT0gRGlmZmljdWx0eVR5cGUuQW55KVxyXG4gICAgICAgICAgICBzb25ncyA9IHNvbmdzLmZpbHRlcih4ID0+IHguZGlmZmljdWx0eSA9PT0gZmlsdGVyT3B0aW9ucy5kaWZmaWN1bHR5KTtcclxuICAgICAgICBpZiAoZmlsdGVyT3B0aW9ucy50YWJUeXBlICYmIGZpbHRlck9wdGlvbnMudGFiVHlwZSAhPT0gVGFiVHlwZS5BbnkpXHJcbiAgICAgICAgICAgIHNvbmdzID0gc29uZ3MuZmlsdGVyKHggPT4geC50YWJzLnNvbWUodD0+dC50eXBlID09PSBmaWx0ZXJPcHRpb25zLnRhYlR5cGUpKTsgICAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJlZFNvbmdzOiBzb25ncyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyByb3dzUGVyUGFnZSwgcGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBlbXB0eVJvd3MgPSByb3dzUGVyUGFnZSAtIE1hdGgubWluKHJvd3NQZXJQYWdlLCB0aGlzLnN0YXRlLmZpbHRlcmVkU29uZ3MubGVuZ3RoIC0gcGFnZSAqIHJvd3NQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7IG1hcmdpbjonYXV0bycsIG1hcmdpbkxlZnQ6JzdweCcsIG1hcmdpblJpZ2h0Oic3cHgnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxTb25nRmlsdGVyIGZpbHRlclNvbmdzPXt0aGlzLmZpbHRlclNvbmdzfT48L1NvbmdGaWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXsndGFibGUnfSBzdHlsZT17e2hlaWdodDogNjMwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+IE5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19ID4gQmFuZCA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19ID4gRGlmaWN1bHR5IDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gbnVtZXJpYz4gVGVtcG8gPC9UYWJsZUNlbGw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbHRlcmVkU29uZ3Muc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSkubWFwKHNvbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtzb25nLmlkfSBjbGFzc05hbWU9XCJ0YWJsZS1maWVsZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3BlbkRldGFpbHMoc29uZyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0gY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb25nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fSBudW1lcmljPntzb25nLmJhbmR9PC9UYWJsZUNlbGw+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fSBudW1lcmljPntEaWZmaWN1bHR5VHlwZVtzb25nLmRpZmZpY3VsdHldfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fSBudW1lcmljPntzb25nLnRlbXBvfTwvVGFibGVDZWxsPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlSb3dzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgc3R5bGU9e3sgaGVpZ2h0OiA0OCAqIGVtcHR5Um93cyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1syLCA1LCAxMCwgMjVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3RoaXMucHJvcHMuc29uZ3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17dGhpcy5oYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc0NvbXBvbmVudD17VGFibGVQYWdpbmF0aW9uQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFByb3BzID0gKHN0YXRlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc29uZ3M6IHN0YXRlLnNvbmdSZWR1Y2VyLnNvbmdzLCAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKFxyXG4gICAge1xyXG4gICAgICAgIGdldEFsbFNvbmdzOiBnZXRBbGxTb25ncy5hY3Rpb25cclxuICAgIH0sXHJcbiAgICBkaXNwYXRjaCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMsIG1hcERpc3BhdGNoKShTb25nTGlzdCkiLCJpbXBvcnQgSVRhYiBmcm9tIFwiLi90YWJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJU29uZyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nOyAgICBcclxuICAgIGJhbmQ6IHN0cmluZztcclxuICAgIHRlbXBvOiBudW1iZXI7XHJcbiAgICB0YWJzOiBJVGFiW107XHJcbiAgICBkaWZmaWN1bHR5IDogRGlmZmljdWx0eVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpZmZpY3VsdHlUeXBle1xyXG4gICAgRWFzeSxcclxuICAgIE1lZGl1bSxcclxuICAgIEhhcmQsXHJcbiAgICBBbnlcclxufSIsImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nOyAgXHJcbiAgICB0eXBlOiBUYWJUeXBlOyAgXHJcbiAgICBpdGVyYXRpb25zOiBJVGFiSXRlcmF0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYlR5cGV7XHJcbiAgICBHdWl0YXIsXHJcbiAgICBEcnVtcyxcclxuICAgIFBpYW5vLFxyXG4gICAgQW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYkl0ZXJhdGlvbntcclxuICAgIHRpbWVTY2FsZSA6IG51bWJlcjtcclxuICAgIGlzUGxheWluZz86IGJvb2xlYW47XHJcbiAgICBpc1NlbGVjdGVkRm9yVFM/OiBib29sZWFuO1xyXG59IFxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUd1aXRhckl0ZXJhdGlvbiBleHRlbmRzIElUYWJJdGVyYXRpb257XHJcbiAgICBub3Rlcz86IElHdWl0YXJOb3RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUd1aXRhck5vdGV7XHJcbiAgICBmcmV0PzogbnVtYmVyO1xyXG4gICAgc3RyaW5nOiBudW1iZXI7XHJcbiAgICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURydW1JdGVyYXRpb24gZXh0ZW5kcyBJVGFiSXRlcmF0aW9ue1xyXG4gICAgZHJ1bXM/OiBJRHJ1bU5vdGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJ1bU5vdGV7XHJcbiAgICBkcnVtPzogRHJ1bVR5cGU7XHJcbiAgICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJ1bVR5cGV7ICAgIFxyXG4gICAgICAgIENDMiA9IDAsICAgICAgICBcclxuICAgICAgICBCRCA9IDEsICAgICAgICBcclxuICAgICAgICB4SCA9IDIsICAgICAgICBcclxuICAgICAgICBTID0gMywgICAgICAgIFxyXG4gICAgICAgIE1UID0gNCwgICAgICAgIFxyXG4gICAgICAgIExUID0gNSwgICAgICAgIFxyXG4gICAgICAgIENDMSA9IDYsICAgICAgICBcclxuICBcclxuICAgXHJcbiAgICAgICAgTEZUID0gMTBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBpYW5vSXRlcmF0aW9uIGV4dGVuZHMgSVRhYkl0ZXJhdGlvbntcclxuICAgIG5vdGVzOiBJQ29uY3JldGVOb3RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmNyZXRlTm90ZXtcclxuICAgIG5vdGUgOiBOb3RlVHlwZTtcclxuICAgIG9jdGF2ZTogT2N0YXZlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTm90ZVR5cGV7XHJcbiAgICBDID0gMSxcclxuICAgIENzaGFycCA9IDIsXHJcbiAgICBEID0gMyxcclxuICAgIERzaGFycCA9IDQsXHJcbiAgICBFID0gNSxcclxuICAgIEYgPSA2LFxyXG4gICAgRnNoYXJwID0gNyxcclxuICAgIEcgPSA4LFxyXG4gICAgR3NoYXJwID0gOSxcclxuICAgIEEgPSAxMCxcclxuICAgIEFzaGFycCA9IDExLFxyXG4gICAgSCA9IDEyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9jdGF2ZVR5cGV7XHJcbiAgICBDb250cmEgPSAxLFxyXG4gICAgR3JlYXQgPSAyLFxyXG4gICAgU21hbGwgPSAzLFxyXG4gICAgRmlyc3RMaW5lID0gNCxcclxuICAgIFNlY29uZExpbmUgPSA1LFxyXG4gICAgVGhpcmRMaW5lID0gNixcclxuICAgIEZvdXJ0aExpbmUgPSA3XHJcbn0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9oZWxwZXJzL2NvbmZpZyc7XHJcbmltcG9ydCBJVXNlciBmcm9tICcuLi9pbnRlcmZhY2VzL0lVc2VyJztcclxuaW1wb3J0IFJlc3BvbnNlIGZyb20gJy4uL2ludGVyZmFjZXMvcmVzcG9uc2UnXHJcbmltcG9ydCB7IFJlZ2lzdGVyVXNlck1vZGVsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hdXRoL3JlZ2lzdGVyVmlld01vZGVsJztcclxuaW1wb3J0IHsgTG9naW5Nb2RlbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aC9sb2dpblZpZXdNb2RlbCc7XHJcbmltcG9ydCB7QXBpRXJyb3J9IGZyb20gJy4uL2hlbHBlcnMvYXBpRXJyb3InXHJcbmltcG9ydCBJVGFiIGZyb20gJy4uL2ludGVyZmFjZXMvdGFiJztcclxuaW1wb3J0IElTb25nIGZyb20gJy4uL2ludGVyZmFjZXMvc29uZyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc29uZ1NlcnZpY2UgPSB7ICAgIFxyXG4gICAgZ2V0QWxsU29uZ3MsICAgXHJcbiAgICBnZXRTb25nLFxyXG4gICAgY3JlYXRlU29uZyAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNvbmcoaWQ6IG51bWJlcikgOiBQcm9taXNlPFJlc3BvbnNlPElTb25nPj4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc29uZy9nZXQ/aWQ9JyArIGlkKTtcclxuICAgIGlmKCFyZXMub2speyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcm5hbCBlcnJvcicpO1xyXG4gICAgfSAgICBcclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFNvbmdzKGlkOiBudW1iZXIpIDogUHJvbWlzZTxSZXNwb25zZTxJU29uZ1tdPj4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc29uZy9hbGwnKTtcclxuICAgIGlmKCFyZXMub2speyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcm5hbCBlcnJvcicpO1xyXG4gICAgfSAgICBcclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNvbmcoc29uZyA6IElTb25nKSA6IFByb21pc2U8UmVzcG9uc2U8YW55Pj4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc29uZy9jcmVhdGUnKTtcclxuICAgIGlmKCFyZXMub2speyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcm5hbCBlcnJvcicpO1xyXG4gICAgfSAgICBcclxuICAgIGlmKCFyZXMub2spe1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXMuc3RhdHVzLCBhd2FpdCByZXMudGV4dCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=