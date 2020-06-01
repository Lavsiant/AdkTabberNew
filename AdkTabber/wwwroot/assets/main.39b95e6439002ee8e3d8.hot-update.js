webpackHotUpdate("main",{

/***/ "./src/components/song/songCreate.tsx":
/*!********************************************!*\
  !*** ./src/components/song/songCreate.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _songActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songActions */ "./src/components/song/songActions.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/song */ "./src/interfaces/song.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_songService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/songService */ "./src/services/songService.ts");
/* harmony import */ var _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interfaces/tab */ "./src/interfaces/tab.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _tab_guitarTabCreate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../tab/guitarTabCreate */ "./src/components/tab/guitarTabCreate.tsx");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



















var SongList = /** @class */ (function (_super) {
    __extends(SongList, _super);
    function SongList(props) {
        var _this = _super.call(this, props) || this;
        _this.tabUpdate = function (tab) {
            var tabs = _this.state.song.tabs;
            var t = tabs.find(function (x) { return x.name == tab.name; });
            var index = tabs.indexOf(t);
            tabs[index] = tab;
            _this.setState({
                song: __assign(__assign({}, _this.state.song), { tabs: tabs })
            });
        };
        _this.handleSubmit = function (event) {
            if (!_this.state.song.name) {
                _this.setState(__assign(__assign({}, _this.state), { error: 'Type song name please' }));
            }
            else if (!_this.state.song.band) {
                _this.setState(__assign(__assign({}, _this.state), { error: 'Type band please' }));
            }
            else {
                _services_songService__WEBPACK_IMPORTED_MODULE_9__["songService"].createSong(_this.state.song).then(function (res) {
                    if (res.success) {
                        //to do
                        window.location.href = '/songs';
                    }
                    else {
                        _this.setState(__assign(__assign({}, _this.state), { error: res.errorMessage }));
                    }
                    // window.location = config.apiUrl + "/tabs";
                }).catch(function (ex) {
                    _this.setState(__assign(__assign({}, _this.state), { error: ex }));
                });
            }
        };
        _this.handleGeneralChange = function (e) {
            var _a = e.target, name = _a.name, value = _a.value;
            var song = _this.state.song;
            song[name] = value;
            _this.setState({ song: song });
        };
        _this.addTab = function () {
            var song = _this.state.song;
            var newTab;
            switch (_this.state.newTabType) {
                case _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar:
                    newTab = {
                        name: "Guitar tab " + song.tabs.filter(function (x) { return x.type == _this.state.newTabType; }).length + 1,
                        type: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar,
                        iterations: []
                    };
            }
            song.tabs.push(newTab);
            _this.setState({ song: song });
            if (song.tabs.length === 1) {
                _this.setState({
                    currentTab: song.tabs[0],
                });
            }
        };
        _this.renderTabCreate = function () {
            switch (_this.state.currentTab.type) {
                case _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar:
                    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tab_guitarTabCreate__WEBPACK_IMPORTED_MODULE_18__["default"], { tab: _this.state.currentTab, tempo: _this.state.song.tempo, tabUpdate: _this.tabUpdate });
            }
        };
        _this.getTabTypeByNumber = function (num) {
            switch (num) {
                case 0: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar;
                case 1: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums;
                case 2: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Piano;
            }
        };
        _this.state = {
            song: {
                id: 0,
                name: '',
                band: '',
                tempo: 60,
                tabs: [],
                difficulty: _interfaces_song__WEBPACK_IMPORTED_MODULE_2__["DifficultyType"].Medium
            },
            newTabType: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar,
            error: ''
        };
        return _this;
    }
    SongList.prototype.render = function () {
        var _this = this;
        var root = {
            width: '100%',
            maxWidth: '360px'
        };
        var song = this.state.song;
        return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, { className: 'tab-create', style: { marginTop: 100, paddingBottom: 20 } },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { container: true },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 12 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", { style: { color: '#3f51b5' } }, "SONG CREATE")),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 12, sm: 6 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: 'field' },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, { style: { width: '90%' }, label: "Name", type: "text", name: "name", autoComplete: "Username", margin: "normal", variant: "outlined", value: song.name, onChange: this.handleGeneralChange, required: true }))),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 12, sm: 6 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: 'field' },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, { style: { width: '90%' }, label: 'Band', type: "text", name: "band", autoComplete: "Username", margin: "normal", variant: "outlined", value: song.band, onChange: this.handleGeneralChange, required: true }))),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 6, sm: 6 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: 'field' },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, { style: { width: '90%' }, label: "Tempo", type: "text", name: "tempo", margin: "normal", variant: "outlined", value: song.tempo, onChange: this.handleGeneralChange, required: true }))),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 6, sm: 6 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: 'field' },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, { select: true, label: 'Difficulty', 
                            //className={styles.textField}
                            style: { width: '90%' }, value: song.difficulty, name: 'difficulty', 
                            // SelectProps={{
                            //     MenuProps: styles
                            // }}
                            margin: "normal", variant: "outlined", onChange: this.handleGeneralChange },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_2__["DifficultyType"].Easy }, " Easy "),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_2__["DifficultyType"].Medium }, " Medium "),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_song__WEBPACK_IMPORTED_MODULE_2__["DifficultyType"].Hard }, " Hard ")))),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 6, sm: 6 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: 'field' },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, { select: true, label: 'Select type for new tab', 
                            //className={styles.textField}
                            style: { width: '90%' }, value: this.state.newTabType, name: 'difficulty', margin: "normal", variant: "outlined", onChange: function (e) {
                                _this.setState({ newTabType: _this.getTabTypeByNumber(e.target.value) });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar }, " Guitar "),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums }, " Drums "),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Piano }, " Piano ")))),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 6, sm: 1 },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default.a, { size: "large", color: "primary", style: { margin: 'auto', marginTop: '45px', marginLeft: '-120px' }, onClick: this.addTab },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null)))),
                this.state.currentTab ?
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true, xs: 12 },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { style: { display: 'flex' } },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { style: { width: '290px', minWidth: '290px', float: 'left', border: '2px solid #3f51b5', borderRadius: '5px' } },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default.a, { component: "nav", style: root },
                                    this.state.song.tabs.map(function (tab) { return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15___default.a, { style: tab === _this.state.currentTab ? { background: 'rgba(0, 0, 0, 0.08)' } : {}, button: true, onClick: function () {
                                            _this.setState({ currentTab: tab });
                                            _this.state = __assign(__assign({}, _this.state), { currentTab: tab });
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16___default.a, { primary: tab.name }))); }),
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_17___default.a, null))),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, { style: { width: '100%', height: '-webkit-fill-available' } }, this.renderTabCreate()))) : null)));
    };
    return SongList;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component));
var mapProps = function (state) {
    return {
        user: state.authReducer.user
    };
};
var mapDispatch = function (dispatch) { return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    getAllSongs: _songActions__WEBPACK_IMPORTED_MODULE_0__["getAllSongs"].action
}, dispatch); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapProps, mapDispatch)(SongList));


/***/ }),

/***/ "./src/components/tab/guitarTabCreate.tsx":
/*!************************************************!*\
  !*** ./src/components/tab/guitarTabCreate.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/index.es.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var GuitarTabCreate = /** @class */ (function (_super) {
    __extends(GuitarTabCreate, _super);
    function GuitarTabCreate(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultWait = 1000;
        _this.init = function () {
            for (var i = 0; i < 4; i++) {
                var iter = {
                    notes: [],
                    timeScale: 1
                };
                for (var n = 1; n < 7; n++) {
                    iter.notes.push({
                        string: n,
                        isSelected: false
                    });
                }
                _this.state.tab.iterations.push(iter);
            }
            _this.state.tab.iterations[0].isPlaying = true;
        };
        _this.componentWillReceiveProps = function (props) {
            _this.setState({ tab: props.tab });
            if (!props.tab.iterations || !props.tab.iterations.length) {
                _this.init();
            }
        };
        _this.addEmptyFragment = function () {
            var iterations = _this.state.tab.iterations;
            for (var i = 0; i < 4; i++) {
                var iter = {
                    notes: [],
                    timeScale: 1
                };
                for (var n = 1; n < 7; n++) {
                    iter.notes.push({
                        string: n,
                        isSelected: false
                    });
                }
                iterations.push(iter);
            }
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations })
            }, function () { return _this.props.tabUpdate(_this.state.tab); });
        };
        _this.removeLastFragment = function () {
            var iterations = _this.state.tab.iterations;
            if (iterations.length > 4) {
                for (var i = 0; i < 4; i++) {
                    iterations.pop();
                }
            }
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations })
            }, function () { return _this.props.tabUpdate(_this.state.tab); });
        };
        _this.toggleNoteSelected = function (iterIndex, noteIndex) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            var note = iter.notes[noteIndex];
            note.isSelected = !note.isSelected;
            if (note.isSelected) {
                setTimeout(function () { return document.getElementById(iterIndex + "_" + noteIndex).focus(); }, 0);
            }
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations })
            });
        };
        _this.toggleTimeScale = function (iterIndex) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            iter.isSelectedForTS = !iter.isSelectedForTS;
            if (iter.isSelectedForTS) {
                setTimeout(function () { return document.getElementById(iterIndex + "_ts").focus(); }, 0);
            }
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations })
            });
        };
        _this.onChangeCurrentNote = function (e) {
            if (!isNaN(e.target.value)) {
                _this.setState({
                    currentNoteValue: e.target.value
                });
            }
        };
        _this.onChangeCurrentTs = function (e) {
            if (!isNaN(e.target.value)) {
                _this.setState({
                    currentTimeScaleValue: e.target.value
                });
            }
        };
        _this.changeIterNote = function (iterIndex, noteIndex) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            var note = iter.notes[noteIndex];
            var fret = _this.state.currentNoteValue;
            fret = fret < 0 ? 0 : fret > 18 ? 18 : fret;
            note.fret = fret;
            note.isSelected = false;
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations }),
                currentNoteValue: null
            }, function () { return _this.props.tabUpdate(_this.state.tab); });
        };
        _this.changeIterTimeScale = function (iterIndex) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            var timeScale = _this.state.currentTimeScaleValue;
            timeScale = timeScale < 0.25 ? 0.25 : timeScale > 2 ? 2 : timeScale;
            iter.timeScale = timeScale;
            iter.isSelectedForTS = false;
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations }),
                currentTimeScaleValue: null
            }, function () { return _this.props.tabUpdate(_this.state.tab); });
        };
        _this.changeCurrentIter = function (iterIndex) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            for (var i = 0; i < iterations.length; i++) {
                var element = iterations[i];
                element.isPlaying = false;
            }
            iter.isPlaying = true;
            _this.setState({
                tab: __assign(__assign({}, _this.state.tab), { iterations: iterations }),
                currentIterIndex: iterIndex,
            });
        };
        _this.stop = function () {
            _this.setState({ isStopRequested: true });
        };
        _this.startPlayTab = function () {
            if (_this.state.currentIterIndex < _this.state.tab.iterations.length - 1) {
                var currentIteration = _this.state.tab.iterations[_this.state.currentIterIndex];
                var audios_1 = [];
                for (var i = 0; i < currentIteration.notes.length; i++) {
                    var note = currentIteration.notes[i];
                    if (note.fret && note.fret >= 0 && note.fret <= 4) {
                        var audio = new Audio("/guitar/" + note.string + "-" + note.fret + ".mp3");
                        audios_1.push({ string: note.string, audio: audio });
                        audio.play();
                    }
                }
                setTimeout(function () {
                    return _this.playIter(_this.state.currentIterIndex + 1, audios_1);
                }, ((60 / _this.props.tempo) / _this.state.tab.iterations[_this.state.currentIterIndex].timeScale) * 1000);
            }
        };
        _this.playIter = function (index, oldAudios) {
            if (!_this.state.isStopRequested) {
                var currentIteration = _this.state.tab.iterations[index];
                for (var i = 0; i < oldAudios.length; i++) {
                    var oldAudio = oldAudios[i];
                    if (currentIteration.notes[oldAudio.string - 1].fret && currentIteration.notes[oldAudio.string - 1].fret >= 0) {
                        oldAudio.audio.pause();
                    }
                }
                _this.changeCurrentIter(index);
                var audios_2 = [];
                var _loop_1 = function (i) {
                    var note = currentIteration.notes[i];
                    if (note.fret && note.fret >= 0 && note.fret <= 4) {
                        var audio_1 = new Audio("/guitar/" + note.string + "-" + note.fret + ".mp3");
                        audios_2.push({ string: note.string, audio: audio_1 });
                        setTimeout(function () { return audio_1.play(); }, 0);
                    }
                };
                for (var i = 0; i < currentIteration.notes.length; i++) {
                    _loop_1(i);
                }
                if (_this.state.currentIterIndex < _this.state.tab.iterations.length - 1) {
                    setTimeout(function () {
                        return _this.playIter(index + 1, audios_2);
                    }, ((60 / _this.props.tempo) / _this.state.tab.iterations[_this.state.currentIterIndex].timeScale) * 1000);
                }
            }
            else {
                _this.setState({ isStopRequested: false });
            }
        };
        _this.state = {
            tab: props.tab,
            currentIterIndex: 0,
            isStopRequested: false,
        };
        _this.init();
        return _this;
    }
    GuitarTabCreate.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { height: 500, paddingLeft: '20px', maxWidth: '1100px', overflowX: 'auto', fontSize: '25px' } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, { onClick: this.startPlayTab, size: "large", color: "primary", style: { marginTop: '45px', marginLeft: '15px', marginBottom: '30px' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["PlayArrow"], null)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, { onClick: this.stop, size: "large", color: "primary", style: { marginTop: '45px', marginLeft: '15px', marginBottom: '30px' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Stop"], null))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "progress-col", style: { borderColor: 'transparent' } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "e"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "B"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "G"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "D"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "A"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "E")),
                this.state.tab.iterations.map(function (iter, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: index, className: "guitar-tab-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { onClick: function () { return _this.changeCurrentIter(index); }, className: "progress-col " + (iter.isPlaying ? ' progress-col-current' : '') }),
                    iter.notes.map(function (note, ni) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: index + " " + ni, className: "guitar-tab-col", onClick: function () { return _this.toggleNoteSelected(index, ni); } }, note.isSelected ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: index + "_" + ni, type: "text", className: "guitar-note-input", onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return _this.onChangeCurrentNote(e); }, onBlur: function () { return _this.changeIterNote(index, ni); } }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { paddingTop: '6px' } }, note.fret))); }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col", onClick: function () { return _this.toggleTimeScale(index); }, style: { backgroundColor: 'lightgreen' } }, iter.isSelectedForTS ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: index + "_ts", type: "text", style: { fontSize: '18px' }, className: "guitar-note-input", onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return _this.onChangeCurrentTs(e); }, onBlur: function () { return _this.changeIterTimeScale(index); } }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { paddingTop: '9px', fontSize: '18px' } }, iter.timeScale)))); }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'grid' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, { size: "large", color: "primary", style: { minWidth: '57px', marginTop: '15px', marginLeft: '15px' }, onClick: this.addEmptyFragment },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, null)),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, { size: "large", color: "primary", style: { minWidth: '57px', marginTop: '-90px', marginLeft: '15px' }, onClick: this.removeLastFragment },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Remove"], null))))));
    };
    return GuitarTabCreate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (GuitarTabCreate);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdDcmVhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYi9ndWl0YXJUYWJDcmVhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNqQjtBQUNvQztBQUdwQztBQUNpQjtBQUNMO0FBQ007QUFDUTtBQUNGO0FBQ007QUFFSDtBQUVYO0FBQ0c7QUFDTDtBQUNFO0FBQ1E7QUFDUTtBQUNWO0FBQ0k7QUFjcEQ7SUFBdUIsNEJBQTZCO0lBQ2hELGtCQUFZLEtBQUs7UUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FhZjtRQUVELGVBQVMsR0FBRyxVQUFDLEdBQUc7WUFDTCxnQ0FBSSxDQUFvQjtZQUMvQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBRSxRQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUMzQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJLHdCQUNHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUNsQixJQUFJLEVBQUUsSUFBSSxHQUNiO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGtCQUFZLEdBQUcsVUFBQyxLQUFLO1lBQ2pCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLHVCQUNOLEtBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLHVCQUF1QixJQUNoQzthQUNMO2lCQUNJLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxRQUFRLHVCQUNOLEtBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLGtCQUFrQixJQUMzQjthQUNMO2lCQUNJO2dCQUNELGlFQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDN0MsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNiLE9BQU87d0JBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO3FCQUNuQzt5QkFDSTt3QkFDRCxLQUFJLENBQUMsUUFBUSx1QkFDTixLQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxJQUN6QixDQUFDO3FCQUNOO29CQUNELDZDQUE2QztnQkFDakQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsRUFBRTtvQkFDUixLQUFJLENBQUMsUUFBUSx1QkFDTixLQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxFQUFFLElBQ1gsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUVOO1FBQ0wsQ0FBQztRQUVELHlCQUFtQixHQUFHLFVBQUMsQ0FBQztZQUNkLGlCQUEwQixFQUF4QixjQUFJLEVBQUUsZ0JBQWtCLENBQUM7WUFDM0IsMkJBQUksQ0FBZ0I7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNuQixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELFlBQU0sR0FBRztZQUNHLDJCQUFJLENBQWdCO1lBQzVCLElBQUksTUFBWSxDQUFDO1lBQ2pCLFFBQVEsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQzNCLEtBQUssd0RBQU8sQ0FBQyxNQUFNO29CQUNmLE1BQU0sR0FBRzt3QkFDTCxJQUFJLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUEvQixDQUErQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQ3ZGLElBQUksRUFBRSx3REFBTyxDQUFDLE1BQU07d0JBQ3BCLFVBQVUsRUFBRSxFQUFFO3FCQUNqQjthQUNSO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDO29CQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDM0IsQ0FBQzthQUNMO1FBRUwsQ0FBQztRQUVELHFCQUFlLEdBQUc7WUFDZCxRQUFRLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDaEMsS0FBSyx3REFBTyxDQUFDLE1BQU07b0JBQ2YsT0FBTywyREFBQyw2REFBZSxJQUNuQixHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQzVCLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxHQUNWO2FBQzFCO1FBQ0wsQ0FBQztRQUVELHdCQUFrQixHQUFHLFVBQUMsR0FBRztZQUNyQixRQUFRLEdBQUcsRUFBRTtnQkFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sd0RBQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyx3REFBTyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLHdEQUFPLENBQUMsS0FBSyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQztRQTdHRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxFQUFFO2dCQUNSLFVBQVUsRUFBRSwrREFBYyxDQUFDLE1BQU07YUFDcEM7WUFDRCxVQUFVLEVBQUUsd0RBQU8sQ0FBQyxNQUFNO1lBQzFCLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQzs7SUFDTixDQUFDO0lBbUdELHlCQUFNLEdBQU47UUFBQSxpQkFpTEM7UUFoTEcsSUFBTSxJQUFJLEdBQUc7WUFDVCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxPQUFPO1NBQ3BCO1FBQ08sMEJBQUksQ0FBZ0I7UUFFNUIsT0FBTyxDQUNILDJEQUFDLDhEQUFLLElBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUU7WUFDdEUsMkRBQUMsOERBQUksSUFBQyxTQUFTO2dCQUNYLDJEQUFDLDhEQUFJLElBQUMsSUFBSSxRQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNiLG1FQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQW1CLENBQy9DO2dCQUNQLDJEQUFDLDhEQUFJLElBQUMsSUFBSSxRQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBRXBCLG9FQUFLLFNBQVMsRUFBQyxPQUFPO3dCQUNsQiwyREFBQyxrRUFBUyxJQUNOLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdkIsS0FBSyxFQUFDLE1BQU0sRUFFWixJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxNQUFNLEVBQ1gsWUFBWSxFQUFDLFVBQVUsRUFDdkIsTUFBTSxFQUFDLFFBQVEsRUFDZixPQUFPLEVBQUMsVUFBVSxFQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFDbEMsUUFBUSxTQUNWLENBRUEsQ0FFSDtnQkFDUCwyREFBQyw4REFBSSxJQUFDLElBQUksUUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO29CQUNwQixvRUFBSyxTQUFTLEVBQUMsT0FBTzt3QkFDbEIsMkRBQUMsa0VBQVMsSUFDTixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQ3ZCLEtBQUssRUFBQyxNQUFNLEVBQ1osSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUMsTUFBTSxFQUNYLFlBQVksRUFBQyxVQUFVLEVBQ3ZCLE1BQU0sRUFBQyxRQUFRLEVBQ2YsT0FBTyxFQUFDLFVBQVUsRUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQ2xDLFFBQVEsU0FDVixDQUNBLENBQ0g7Z0JBRVAsMkRBQUMsOERBQUksSUFBQyxJQUFJLFFBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbkIsb0VBQUssU0FBUyxFQUFDLE9BQU87d0JBQ2xCLDJEQUFDLGtFQUFTLElBQ04sS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUN2QixLQUFLLEVBQUMsT0FBTyxFQUNiLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFDLE9BQU8sRUFDWixNQUFNLEVBQUMsUUFBUSxFQUNmLE9BQU8sRUFBQyxVQUFVLEVBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUNsQyxRQUFRLFNBQ1YsQ0FDQSxDQUNIO2dCQUVQLDJEQUFDLDhEQUFJLElBQUMsSUFBSSxRQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQ25CLG9FQUFLLFNBQVMsRUFBQyxPQUFPO3dCQUNsQiwyREFBQyxrRUFBUyxJQUNOLE1BQU0sUUFDTixLQUFLLEVBQUMsWUFBWTs0QkFDbEIsOEJBQThCOzRCQUM5QixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUN0QixJQUFJLEVBQUMsWUFBWTs0QkFDakIsaUJBQWlCOzRCQUNqQix3QkFBd0I7NEJBQ3hCLEtBQUs7NEJBQ0wsTUFBTSxFQUFDLFFBQVEsRUFDZixPQUFPLEVBQUMsVUFBVSxFQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjs0QkFFbEMsMkRBQUMsaUVBQVEsSUFBQyxLQUFLLEVBQUUsK0RBQWMsQ0FBQyxJQUFJLGFBQW1COzRCQUN2RCwyREFBQyxpRUFBUSxJQUFDLEtBQUssRUFBRSwrREFBYyxDQUFDLE1BQU0sZUFBcUI7NEJBQzNELDJEQUFDLGlFQUFRLElBQUMsS0FBSyxFQUFFLCtEQUFjLENBQUMsSUFBSSxhQUFtQixDQUMvQyxDQUVWLENBQ0g7Z0JBRVAsMkRBQUMsOERBQUksSUFBQyxJQUFJLFFBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbkIsb0VBQUssU0FBUyxFQUFDLE9BQU87d0JBQ2xCLDJEQUFDLGtFQUFTLElBQ04sTUFBTSxRQUNOLEtBQUssRUFBQyx5QkFBeUI7NEJBQy9CLDhCQUE4Qjs0QkFDOUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzVCLElBQUksRUFBQyxZQUFZLEVBQ2pCLE1BQU0sRUFBQyxRQUFRLEVBQ2YsT0FBTyxFQUFDLFVBQVUsRUFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQ0FDUixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQzFFLENBQUM7NEJBRUQsMkRBQUMsaUVBQVEsSUFBQyxLQUFLLEVBQUUsd0RBQU8sQ0FBQyxNQUFNLGVBQXFCOzRCQUNwRCwyREFBQyxpRUFBUSxJQUFDLEtBQUssRUFBRSx3REFBTyxDQUFDLEtBQUssY0FBb0I7NEJBQ2xELDJEQUFDLGlFQUFRLElBQUMsS0FBSyxFQUFFLHdEQUFPLENBQUMsS0FBSyxjQUFvQixDQUMxQyxDQUNWLENBQ0g7Z0JBRVAsMkRBQUMsOERBQUksSUFBQyxJQUFJLFFBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbkI7d0JBQ0ksMkRBQUMsNkRBQUcsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ3RILDJEQUFDLDhEQUFPLE9BQUcsQ0FDVCxDQUNKLENBQ0g7Z0JBRU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEIsMkRBQUMsOERBQUksSUFBQyxJQUFJLFFBQUMsRUFBRSxFQUFFLEVBQUU7d0JBRWIsb0VBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTs0QkFDM0Isb0VBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7Z0NBQzlHLDJEQUFDLDhEQUFJLElBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSTtvQ0FDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVMsSUFBSyxRQUNyQywyREFBQyxrRUFBUSxJQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDdkYsTUFBTSxRQUFDLE9BQU8sRUFBRTs0Q0FDWixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7NENBQ25DLEtBQUksQ0FBQyxLQUFLLHlCQUNILEtBQUksQ0FBQyxLQUFLLEtBQ2IsVUFBVSxFQUFFLEdBQUcsR0FDbEI7d0NBQ0wsQ0FBQzt3Q0FDRCwyREFBQyxzRUFBWSxJQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFJLENBQzVCLENBQ2QsRUFYd0MsQ0FXeEMsQ0FBQztvQ0FDRiwyREFBQyxpRUFBTyxPQUFHLENBQ1IsQ0FDTDs0QkFDTiwyREFBQyw4REFBSyxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLHdCQUF3QixFQUFFLElBQzVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDbkIsQ0FDTixDQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0E2QmQsQ0FDSCxDQUNaO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLENBcFNzQiw0Q0FBSyxDQUFDLFNBQVMsR0FvU3JDO0FBRUQsSUFBSSxRQUFRLEdBQUcsVUFBQyxLQUFVO0lBQ3RCLE9BQU87UUFDSCxJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO0tBQy9CO0FBQ0wsQ0FBQztBQUVELElBQU0sV0FBVyxHQUFHLFVBQUMsUUFBcUIsSUFBSyx1RUFBa0IsQ0FDN0Q7SUFDSSxXQUFXLEVBQUUsd0RBQVcsQ0FBQyxNQUFNO0NBQ2xDLEVBQ0QsUUFBUSxDQUFDLEVBSmtDLENBSWxDLENBQUM7QUFJQywwSEFBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlY3QjtBQUlBO0FBVW1CO0FBQzhEO0FBQ25FO0FBb0J4QztJQUE2QyxtQ0FBNkI7SUFJdEUseUJBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVFmO1FBWEQsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFhM0IsVUFBSSxHQUFHO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLEdBQXFCO29CQUN6QixLQUFLLEVBQUUsRUFBRTtvQkFDVCxTQUFTLEVBQUUsQ0FBQztpQkFDZixDQUFDO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNaLE1BQU0sRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNwQixDQUFDO2lCQUNMO2dCQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEQsQ0FBQztRQUVELCtCQUF5QixHQUFHLFVBQUMsS0FBSztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxJQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7Z0JBQ3JELEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1FBQ0wsQ0FBQztRQUVELHNCQUFnQixHQUFHO1lBQ1AsMkNBQVUsQ0FBb0I7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLEdBQXFCO29CQUN6QixLQUFLLEVBQUUsRUFBRTtvQkFDVCxTQUFTLEVBQUUsQ0FBQztpQkFDZixDQUFDO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNaLE1BQU0sRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNwQixDQUFDO2lCQUNMO2dCQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixHQUFHLHdCQUNJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUNqQixVQUFVLEVBQUUsVUFBVSxHQUN6QjthQUNKLEVBQUUsY0FBTSxZQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7UUFFbkQsQ0FBQztRQUVELHdCQUFrQixHQUFHO1lBQ1QsMkNBQVUsQ0FBb0I7WUFDdEMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjthQUNKO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixHQUFHLHdCQUNJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUNqQixVQUFVLEVBQUUsVUFBVSxHQUN6QjthQUNKLEVBQUUsY0FBTSxZQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7UUFFbkQsQ0FBQztRQUVELHdCQUFrQixHQUFHLFVBQUMsU0FBUyxFQUFFLFNBQVM7WUFDOUIsMkNBQVUsQ0FBb0I7WUFDdEMsSUFBTSxJQUFJLEdBQXFCLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLFVBQVUsQ0FBQyxjQUFNLGVBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBNUQsQ0FBNEQsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyRjtZQUNELEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsR0FBRyx3QkFDSSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FDakIsVUFBVSxFQUFFLFVBQVUsR0FDekI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQscUJBQWUsR0FBRyxVQUFDLFNBQVM7WUFDaEIsMkNBQVUsQ0FBb0I7WUFDdEMsSUFBTSxJQUFJLEdBQXFCLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM3QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLFVBQVUsQ0FBQyxjQUFNLGVBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFsRCxDQUFrRCxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixHQUFHLHdCQUNJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUNqQixVQUFVLEVBQUUsVUFBVSxHQUN6QjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCx5QkFBbUIsR0FBRyxVQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDO29CQUNWLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztpQkFDbkMsQ0FBQzthQUNMO1FBQ0wsQ0FBQztRQUVELHVCQUFpQixHQUFHLFVBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1YscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2lCQUN4QyxDQUFDO2FBQ0w7UUFDTCxDQUFDO1FBRUQsb0JBQWMsR0FBRyxVQUFDLFNBQVMsRUFBRSxTQUFTO1lBQzFCLDJDQUFVLENBQW9CO1lBQ3RDLElBQU0sSUFBSSxHQUFxQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUN2QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLEdBQUcsd0JBQ0ksS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQ2pCLFVBQVUsRUFBRSxVQUFVLEdBQ3pCO2dCQUNELGdCQUFnQixFQUFFLElBQUk7YUFDekIsRUFBRSxjQUFNLFlBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQseUJBQW1CLEdBQUcsVUFBQyxTQUFTO1lBQ3BCLDJDQUFVLENBQW9CO1lBQ3RDLElBQU0sSUFBSSxHQUFxQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckQsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUNqRCxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLEdBQUcsd0JBQ0ksS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQ2pCLFVBQVUsRUFBRSxVQUFVLEdBQ3pCO2dCQUNELHFCQUFxQixFQUFFLElBQUk7YUFDOUIsRUFBRSxjQUFNLFlBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsdUJBQWlCLEdBQUcsVUFBQyxTQUFTO1lBQ2xCLDJDQUFVLENBQW9CO1lBQ3RDLElBQU0sSUFBSSxHQUFxQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLEdBQUcsd0JBQ0ksS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQ2pCLFVBQVUsRUFBRSxVQUFVLEdBQ3pCO2dCQUNELGdCQUFnQixFQUFFLFNBQVM7YUFDOUIsQ0FBQztRQUNOLENBQUM7UUFFRCxVQUFJLEdBQUc7WUFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELGtCQUFZLEdBQUc7WUFDWCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BFLElBQU0sZ0JBQWdCLEdBQXFCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xHLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BELElBQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO3dCQUMvQyxJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFXLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLElBQUksU0FBTSxDQUFDLENBQUM7d0JBQ25FLFFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNoQjtpQkFDSjtnQkFDRCxVQUFVLENBQUM7b0JBQ1AsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsRUFBRSxRQUFNLENBQUM7Z0JBQXRELENBQXNELEVBQ3RELENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzVHO1FBRUwsQ0FBQztRQUVELGNBQVEsR0FBRyxVQUFDLEtBQUssRUFBRSxTQUFTO1lBQ3hCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQkFDN0IsSUFBTSxnQkFBZ0IsR0FBcUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO3dCQUMzRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUMxQjtpQkFJSjtnQkFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTlCLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQzt3Q0FFVCxDQUFDO29CQUNOLElBQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO3dCQUMvQyxJQUFNLE9BQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFXLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLElBQUksU0FBTSxDQUFDLENBQUM7d0JBQ25FLFFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsVUFBVSxDQUFDLGNBQU0sY0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLENBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDckM7O2dCQU5MLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTs0QkFBN0MsQ0FBQztpQkFPVDtnQkFDRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BFLFVBQVUsQ0FBQzt3QkFDUCxZQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBTSxDQUFDO29CQUFoQyxDQUFnQyxFQUNoQyxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDNUc7YUFDSjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQzVDO1FBRUwsQ0FBQztRQXBPRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixlQUFlLEVBQUUsS0FBSztTQUN6QixDQUFDO1FBRUYsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztJQUNoQixDQUFDO0lBK05ELGdDQUFNLEdBQU47UUFBQSxpQkFpRUM7UUFoRUcsT0FBTyxDQUNILG9FQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtZQUNyRyxvRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO2dCQUMzQiwyREFBQyw0REFBRyxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtvQkFDaEksMkRBQUMsNERBQVMsT0FBRyxDQUNYO2dCQUNOLDJEQUFDLDREQUFHLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO29CQUN4SCwyREFBQyx1REFBSSxPQUFHLENBQ04sQ0FDSjtZQUNOLG9FQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7Z0JBQzNCLG9FQUFLLFNBQVMsRUFBQyxnQkFBZ0I7b0JBQzNCLG9FQUFLLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxHQUFRO29CQUMzRSxvRUFBSyxTQUFTLEVBQUMsZ0JBQWdCLFFBQVE7b0JBQ3ZDLG9FQUFLLFNBQVMsRUFBQyxnQkFBZ0IsUUFBUTtvQkFDdkMsb0VBQUssU0FBUyxFQUFDLGdCQUFnQixRQUFRO29CQUN2QyxvRUFBSyxTQUFTLEVBQUMsZ0JBQWdCLFFBQVE7b0JBQ3ZDLG9FQUFLLFNBQVMsRUFBQyxnQkFBZ0IsUUFBUTtvQkFDdkMsb0VBQUssU0FBUyxFQUFDLGdCQUFnQixRQUFRLENBQ3JDO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFzQixFQUFFLEtBQUssSUFBSyxRQUM5RCxvRUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxnQkFBZ0I7b0JBQ3ZDLG9FQUFLLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBRSxTQUFTLEVBQUUsbUJBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsR0FBUTtvQkFDcEksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsRUFBRSxJQUFLLFFBQzFCLG9FQUFLLEdBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUMsZ0JBQWdCLEVBQ2xELE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQWxDLENBQWtDLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNqRSxzRUFBTyxFQUFFLEVBQUUsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQ3ZCLElBQUksRUFBQyxNQUFNLEVBQ1gsU0FBUyxFQUFDLG1CQUFtQixFQUM3QixPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLGVBQWUsRUFBRSxFQUFuQixDQUFtQixFQUNuQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssWUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUEzQixDQUEyQixFQUM1QyxNQUFNLEVBQUUsY0FBTSxZQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsR0FDeEMsQ0FBQyxDQUFDLENBQUMsb0VBQUssS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQU8sQ0FDakUsQ0FDVCxFQVg2QixDQVc3QixDQUFDO29CQUNGLG9FQUFLLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFFLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsSUFDL0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNuQixzRUFBTyxFQUFFLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFFcEIsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQzNCLFNBQVMsRUFBQyxtQkFBbUIsRUFDN0IsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBbkIsQ0FBbUIsRUFDbkMsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLFlBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsRUFDMUMsTUFBTSxFQUFFLGNBQU0sWUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixHQUN6QyxDQUFDLENBQUMsQ0FBQyxvRUFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFPLENBRXhGLENBR0osQ0FDVCxFQS9CaUUsQ0ErQmpFLENBQUM7Z0JBQ0Ysb0VBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtvQkFDM0IsMkRBQUMsNERBQUcsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjt3QkFDaEksMkRBQUMsNkRBQU8sT0FBRyxDQUNUO29CQUNOLDJEQUFDLDREQUFHLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ25JLDJEQUFDLHlEQUFNLE9BQUcsQ0FDUixDQUNKLENBRUosQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQTlTNEMsNENBQUssQ0FBQyxTQUFTLEdBOFMzRCIsImZpbGUiOiJtYWluLjM5Yjk1ZTY0MzkwMDJlZThlM2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxTb25ncyB9IGZyb20gJy4vc29uZ0FjdGlvbnMnXHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IElTb25nLCB7IERpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zb25nJztcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcERpc3BhdGNoJztcclxuaW1wb3J0IElVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSVVzZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgc29uZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb25nU2VydmljZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSVRhYiwgeyBUYWJUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEd1aXRhclRhYkNyZWF0ZSBmcm9tICcuLi90YWIvZ3VpdGFyVGFiQ3JlYXRlJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHVzZXI6IElVc2VyXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBzb25nOiBJU29uZztcclxuICAgIGVycm9yOiBzdHJpbmc7XHJcbiAgICBuZXdUYWJUeXBlOiBUYWJUeXBlO1xyXG4gICAgY3VycmVudFRhYj86IElUYWI7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTb25nTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc29uZzoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGJhbmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGVtcG86IDYwLFxyXG4gICAgICAgICAgICAgICAgdGFiczogW10sXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5VHlwZS5NZWRpdW1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV3VGFiVHlwZTogVGFiVHlwZS5HdWl0YXIsXHJcbiAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGFiVXBkYXRlID0gKHRhYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt0YWJzfSA9IHRoaXMuc3RhdGUuc29uZztcclxuICAgICAgICBjb25zdCB0ID0gdGFicy5maW5kKHg9PngubmFtZSA9PSB0YWIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJzLmluZGV4T2YodCk7XHJcbiAgICAgICAgdGFic1tpbmRleF0gPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNvbmc6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc29uZyxcclxuICAgICAgICAgICAgICAgIHRhYnM6IHRhYnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zb25nLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUeXBlIHNvbmcgbmFtZSBwbGVhc2UnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLnNvbmcuYmFuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1R5cGUgYmFuZCBwbGVhc2UnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb25nU2VydmljZS5jcmVhdGVTb25nKHRoaXMuc3RhdGUuc29uZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RvIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NvbmdzJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogcmVzLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlnLmFwaVVybCArIFwiL3RhYnNcIjtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBleFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlR2VuZXJhbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBzb25nW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbmc6IHNvbmcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFiID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgbmV3VGFiOiBJVGFiO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5uZXdUYWJUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5HdWl0YXI6XHJcbiAgICAgICAgICAgICAgICBuZXdUYWIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHdWl0YXIgdGFiIFwiICsgc29uZy50YWJzLmZpbHRlcih4ID0+IHgudHlwZSA9PSB0aGlzLnN0YXRlLm5ld1RhYlR5cGUpLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5HdWl0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uczogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc29uZy50YWJzLnB1c2gobmV3VGFiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbmc6IHNvbmcgfSk7XHJcbiAgICAgICAgaWYgKHNvbmcudGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiOiBzb25nLnRhYnNbMF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYWJDcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmN1cnJlbnRUYWIudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRhYlR5cGUuR3VpdGFyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHdWl0YXJUYWJDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICB0YWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbz17dGhpcy5zdGF0ZS5zb25nLnRlbXBvfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYlVwZGF0ZT17dGhpcy50YWJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICA+PC9HdWl0YXJUYWJDcmVhdGU+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYlR5cGVCeU51bWJlciA9IChudW0pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBUYWJUeXBlLkd1aXRhcjtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gVGFiVHlwZS5EcnVtcztcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gVGFiVHlwZS5QaWFubztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMzYwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT0ndGFiLWNyZWF0ZScgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAsIHBhZGRpbmdCb3R0b206IDIwIH19ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMzZjUxYjUnIH19ID5TT05HIENSRUFURTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29uZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLmJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLnRlbXBvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLmRpZmZpY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGlmZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBNZW51UHJvcHM6IHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5FYXN5fT4gRWFzeSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuTWVkaXVtfT4gTWVkaXVtIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5IYXJkfT4gSGFyZCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VsZWN0IHR5cGUgZm9yIG5ldyB0YWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e3N0eWxlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3VGFiVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1RhYlR5cGU6IHRoaXMuZ2V0VGFiVHlwZUJ5TnVtYmVyKGUudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkd1aXRhcn0+IEd1aXRhciA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5EcnVtc30+IERydW1zIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLlBpYW5vfT4gUGlhbm8gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnLTEyMHB4JyB9fSBvbkNsaWNrPXt0aGlzLmFkZFRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRUYWIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzI5MHB4JywgbWluV2lkdGg6ICcyOTBweCcsIGZsb2F0OiAnbGVmdCcsIGJvcmRlcjogJzJweCBzb2xpZCAjM2Y1MWI1JywgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgc3R5bGU9e3Jvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc29uZy50YWJzLm1hcCgodGFiOiBJVGFiKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt0YWIgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhYiA/IHsgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknIH0gOiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYjogdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RhYi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnLXdlYmtpdC1maWxsLWF2YWlsYWJsZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYkNyZWF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNvbmcudGFicy5tYXAoKHRhYjogSVRhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fSBjb2xvcj1cInByaW1hcnlcIj4gQ3JlYXRlIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+IHt0aGlzLnN0YXRlLmVycm9yfSA8L2Rpdj4gOiBudWxsfSAqL31cclxuICAgICAgICAgICAgICAgIDwvR3JpZCA+XHJcbiAgICAgICAgICAgIDwvUGFwZXIgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFByb3BzID0gKHN0YXRlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogc3RhdGUuYXV0aFJlZHVjZXIudXNlclxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaCA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgICBnZXRBbGxTb25nczogZ2V0QWxsU29uZ3MuYWN0aW9uXHJcbiAgICB9LFxyXG4gICAgZGlzcGF0Y2gpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzLCBtYXBEaXNwYXRjaCkoU29uZ0xpc3QpXHJcblxyXG4iLCJcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBzb25nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvbmdTZXJ2aWNlJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJVGFiLCB7IFRhYlR5cGUsIElHdWl0YXJJdGVyYXRpb24sIElHdWl0YXJOb3RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgeyBQbGF5Q2lyY2xlRmlsbGVkLCBTdG9wLCBQbGF5QXJyb3csIEhpZ2hsaWdodE9mZiwgUmVtb3ZlQ2lyY2xlLCBSZW1vdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIHRlbXBvOiBudW1iZXI7XHJcbiAgICB0YWJVcGRhdGU6ICh0YWIpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIGxlZnQ/OiBudW1iZXI7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50Tm90ZVZhbHVlPzogbnVtYmVyO1xyXG4gICAgY3VycmVudFRpbWVTY2FsZVZhbHVlPzogbnVtYmVyO1xyXG4gICAgY3VycmVudEl0ZXJJbmRleDogbnVtYmVyO1xyXG4gICAgaXNTdG9wUmVxdWVzdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpdGFyVGFiQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT57XHJcbiAgICBmcmV0U2VsZWN0aW9uOiBhbnk7XHJcbiAgICBkZWZhdWx0V2FpdDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0YWI6IHByb3BzLnRhYixcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogMCxcclxuICAgICAgICAgICAgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbm90ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLm5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogbixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLnB1c2goaXRlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1swXS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YWI6IHByb3BzLnRhYiB9KVxyXG4gICAgICAgIGlmKCFwcm9wcy50YWIuaXRlcmF0aW9ucyB8fCAhcHJvcHMudGFiLml0ZXJhdGlvbnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVtcHR5RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMTsgbiA8IDc7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5ub3Rlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0aW9ucy5wdXNoKGl0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wcm9wcy50YWJVcGRhdGUodGhpcy5zdGF0ZS50YWIpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGFzdEZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTm90ZVNlbGVjdGVkID0gKGl0ZXJJbmRleCwgbm90ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5vdGU6IElHdWl0YXJOb3RlID0gaXRlci5ub3Rlc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIG5vdGUuaXNTZWxlY3RlZCA9ICFub3RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKG5vdGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX1wiICsgbm90ZUluZGV4KS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGl0ZXIuaXNTZWxlY3RlZEZvclRTID0gIWl0ZXIuaXNTZWxlY3RlZEZvclRTO1xyXG4gICAgICAgIGlmIChpdGVyLmlzU2VsZWN0ZWRGb3JUUykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX3RzXCIpLmZvY3VzKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlQ3VycmVudE5vdGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOYU4oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VDdXJyZW50VHMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOYU4oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVTY2FsZVZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJdGVyTm90ZSA9IChpdGVySW5kZXgsIG5vdGVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBjb25zdCBub3RlOiBJR3VpdGFyTm90ZSA9IGl0ZXIubm90ZXNbbm90ZUluZGV4XTtcclxuICAgICAgICBsZXQgZnJldCA9IHRoaXMuc3RhdGUuY3VycmVudE5vdGVWYWx1ZTtcclxuICAgICAgICBmcmV0ID0gZnJldCA8IDAgPyAwIDogZnJldCA+IDE4ID8gMTggOiBmcmV0O1xyXG4gICAgICAgIG5vdGUuZnJldCA9IGZyZXQ7XHJcbiAgICAgICAgbm90ZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnROb3RlVmFsdWU6IG51bGxcclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZVNjYWxlVmFsdWU7XHJcbiAgICAgICAgdGltZVNjYWxlID0gdGltZVNjYWxlIDwgMC4yNSA/IDAuMjUgOiB0aW1lU2NhbGUgPiAyID8gMiA6IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IG51bGxcclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUN1cnJlbnRJdGVyID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGl0ZXJhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXIuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVySW5kZXg6IGl0ZXJJbmRleCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3RvcFJlcXVlc3RlZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFBsYXlUYWIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uOiBJR3VpdGFySXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZXJhdGlvbi5ub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGN1cnJlbnRJdGVyYXRpb24ubm90ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5mcmV0ICYmIG5vdGUuZnJldCA+PSAwICYmIG5vdGUuZnJldCA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC9ndWl0YXIvJHtub3RlLnN0cmluZ30tJHtub3RlLmZyZXR9Lm1wM2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvcy5wdXNoKHsgc3RyaW5nOiBub3RlLnN0cmluZywgYXVkaW86IGF1ZGlvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlJdGVyKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCArIDEsIGF1ZGlvcyksXHJcbiAgICAgICAgICAgICAgICAoKDYwIC8gdGhpcy5wcm9wcy50ZW1wbykgLyB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF0udGltZVNjYWxlKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUl0ZXIgPSAoaW5kZXgsIG9sZEF1ZGlvcykgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1N0b3BSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbjogSUd1aXRhckl0ZXJhdGlvbiA9IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQXVkaW8gPSBvbGRBdWRpb3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tvbGRBdWRpby5zdHJpbmcgLSAxXS5mcmV0ICYmIGN1cnJlbnRJdGVyYXRpb24ubm90ZXNbb2xkQXVkaW8uc3RyaW5nIC0gMV0uZnJldCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkQXVkaW8uYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmZyZXQgJiYgbm90ZS5mcmV0ID49IDAgJiYgbm90ZS5mcmV0IDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2d1aXRhci8ke25vdGUuc3RyaW5nfS0ke25vdGUuZnJldH0ubXAzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBzdHJpbmc6IG5vdGUuc3RyaW5nLCBhdWRpbzogYXVkaW8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhdWRpby5wbGF5KCksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggPCB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlJdGVyKGluZGV4ICsgMSwgYXVkaW9zKSxcclxuICAgICAgICAgICAgICAgICAgICAoKDYwIC8gdGhpcy5wcm9wcy50ZW1wbykgLyB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF0udGltZVNjYWxlKSAqIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3RvcFJlcXVlc3RlZDogZmFsc2UgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAwLCBwYWRkaW5nTGVmdDogJzIwcHgnLCBtYXhXaWR0aDogJzExMDBweCcsIG92ZXJmbG93WDogJ2F1dG8nLCBmb250U2l6ZTogJzI1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhYiBvbkNsaWNrPXt0aGlzLnN0YXJ0UGxheVRhYn0gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxheUFycm93IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhYiBvbkNsaWNrPXt0aGlzLnN0b3B9IHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0b3AgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWNvbFwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+QjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+RzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+RDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+QTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+RTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLm1hcCgoaXRlcjogSUd1aXRhckl0ZXJhdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJndWl0YXItdGFiLXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDdXJyZW50SXRlcihpbmRleCl9IGNsYXNzTmFtZT17YHByb2dyZXNzLWNvbCAke2l0ZXIuaXNQbGF5aW5nID8gJyBwcm9ncmVzcy1jb2wtY3VycmVudCcgOiAnJ31gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVyLm5vdGVzLm1hcCgobm90ZSwgbmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXggKyBcIiBcIiArIG5pfSBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTm90ZVNlbGVjdGVkKGluZGV4LCBuaSl9Pntub3RlLmlzU2VsZWN0ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX1wiICsgbml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd1aXRhci1ub3RlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50Tm90ZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlck5vdGUoaW5kZXgsIG5pKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzZweCcgfX0+e25vdGUuZnJldH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZVRpbWVTY2FsZShpbmRleCl9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVyLmlzU2VsZWN0ZWRGb3JUUyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17aW5kZXggKyBcIl90c1wifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd1aXRhci1ub3RlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlQ3VycmVudFRzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB0aGlzLmNoYW5nZUl0ZXJUaW1lU2NhbGUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD4gOiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc5cHgnLCBmb250U2l6ZTogJzE4cHgnIH19PntpdGVyLnRpbWVTY2FsZX08L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWluV2lkdGg6ICc1N3B4JywgbWFyZ2luVG9wOiAnMTVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLmFkZEVtcHR5RnJhZ21lbnR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1pbldpZHRoOiAnNTdweCcsIG1hcmdpblRvcDogJy05MHB4JywgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2xpY2s9e3RoaXMucmVtb3ZlTGFzdEZyYWdtZW50fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9