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
/* harmony import */ var _tab_drumTabCreate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tab/drumTabCreate */ "./src/components/tab/drumTabCreate.tsx");
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
                        name: "Guitar tab " + song.tabs.filter(function (x) { return x.type == _this.state.newTabType; }).length,
                        type: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar,
                        iterations: []
                    };
                case _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums:
                    newTab = {
                        name: "Drums tab " + song.tabs.filter(function (x) { return x.type == _this.state.newTabType; }).length,
                        type: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums,
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
                case _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums:
                    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tab_drumTabCreate__WEBPACK_IMPORTED_MODULE_19__["default"], { tab: _this.state.currentTab, tempo: _this.state.song.tempo, tabUpdate: _this.tabUpdate });
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

/***/ "./src/components/tab/drumTabCreate.tsx":
/*!**********************************************!*\
  !*** ./src/components/tab/drumTabCreate.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/tab */ "./src/interfaces/tab.ts");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/index.es.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__);
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








var DrumTabCreate = /** @class */ (function (_super) {
    __extends(DrumTabCreate, _super);
    function DrumTabCreate(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultWait = 1000;
        _this.init = function () {
            for (var i = 0; i < 4; i++) {
                var iter = {
                    drums: [],
                    timeScale: 1
                };
                for (var n = 1; n < 7; n++) {
                    iter.drums.push({
                        isSelected: false
                    });
                }
                _this.state.tab.iterations.push(iter);
            }
            _this.state.tab.iterations[0].isPlaying = true;
            _this.setState(_this.state);
        };
        _this.componentWillReceiveProps = function (props) {
            _this.setState({ tab: props.tab }, function () {
                if (!props.tab.iterations || !props.tab.iterations.length) {
                    _this.init();
                }
            });
        };
        _this.addEmptyFragment = function () {
            var iterations = _this.state.tab.iterations;
            for (var i = 0; i < 4; i++) {
                var iter = {
                    drums: [],
                    timeScale: 1
                };
                for (var n = 1; n < 7; n++) {
                    iter.drums.push({
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
            var note = iter.drums[noteIndex];
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
        _this.onChangeCurrentTs = function (e) {
            if (!isNaN(e.target.value)) {
                _this.setState({
                    currentTimeScaleValue: e.target.value
                });
            }
        };
        _this.getDrumTypeByNumber = function (num) {
            switch (num) {
                case 0: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC2;
                case 1: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].BD;
                case 2: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].xH;
                case 3: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].S;
                case 4: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].MT;
                case 5: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LT;
                case 6: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC1;
                case 10: return _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LFT;
            }
        };
        _this.changeIterNote = function (iterIndex, drumIndex, e) {
            var iterations = _this.state.tab.iterations;
            var iter = iterations[iterIndex];
            var drum = iter.drums[drumIndex];
            drum.drum = _this.getDrumTypeByNumber(e.target.value);
            drum.isSelected = false;
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
                for (var i = 0; i < currentIteration.drums.length; i++) {
                    var note = currentIteration.drums[i];
                    if (note.drum) {
                        var audio = new Audio("/drums/" + _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"][note.drum] + ".aif");
                        audios_1.push({ drum: note.drum, audio: audio });
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
                var _loop_1 = function (i) {
                    var oldAudio = oldAudios[i];
                    if (currentIteration.drums.some(function (x) { return x.drum == oldAudio.drum; })) {
                        oldAudio.audio.pause();
                    }
                };
                for (var i = 0; i < oldAudios.length; i++) {
                    _loop_1(i);
                }
                _this.changeCurrentIter(index);
                var audios_2 = [];
                var _loop_2 = function (i) {
                    var note = currentIteration.drums[i];
                    if (note.drum) {
                        var audio_1 = new Audio("/drums/" + _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"][note.drum] + ".aif");
                        audios_2.push({ drum: note.drum, audio: audio_1 });
                        setTimeout(function () { return audio_1.play(); }, 0);
                    }
                };
                for (var i = 0; i < currentIteration.drums.length; i++) {
                    _loop_2(i);
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
    DrumTabCreate.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { height: 500, paddingLeft: '20px', maxWidth: '1100px', overflowX: 'auto', fontSize: '25px' } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: this.startPlayTab, size: "large", color: "primary", style: { marginTop: '45px', marginLeft: '15px', marginBottom: '30px' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["PlayArrow"], null)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: this.stop, size: "large", color: "primary", style: { marginTop: '45px', marginLeft: '15px', marginBottom: '30px' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Stop"], null))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "progress-col", style: { borderColor: 'transparent' } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-col" }, "LH"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-col" }, "RH"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-col" }, "LF"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-col" }, "RF")),
                this.state.tab.iterations.map(function (iter, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: index, className: "guitar-tab-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { onClick: function () { return _this.changeCurrentIter(index); }, className: "progress-col " + (iter.isPlaying ? ' progress-col-current' : '') }),
                    iter.drums.map(function (drum, ni) { return (
                    // <div key={index + " " + ni} className="guitar-tab-col"
                    //     onClick={() => this.toggleNoteSelected(index, ni)}>{drum.isSelected ?
                    //         <input id={index + "_" + ni}
                    //             type="text"
                    //             className="guitar-note-input"
                    //             onClick={(e) => e.stopPropagation()}
                    //             onChange={(e) => this.onChangeCurrentNote(e)}
                    //             onBlur={() => this.changeIterNote(index, ni)}>
                    //         </input> : <div style={{ paddingTop: '6px' }}>{drum.fret}</div>}
                    // </div>
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, { key: index + " " + ni, className: "drum-tab-col", select: true, label: '', style: { marginTop: '0px', marginBottom: '0px' }, value: drum.drum, margin: "normal", variant: "outlined", onChange: function (e) { return _this.changeIterNote(index, ni, e); } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC2 }, " CC2 "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].BD }, " BD "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].xH }, " xH "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].S }, " S "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].MT }, " MT "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LT }, " LT "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC1 }, " CC1 "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LFT }, " LFT ")))); }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drum-tab-col", onClick: function () { return _this.toggleTimeScale(index); }, style: { backgroundColor: 'lightgreen' } }, iter.isSelectedForTS ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: index + "_ts", type: "text", style: { fontSize: '18px' }, className: "drum-note-input", onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return _this.onChangeCurrentTs(e); }, onBlur: function () { return _this.changeIterTimeScale(index); } }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { paddingTop: '9px', fontSize: '18px' } }, iter.timeScale)))); }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { display: 'grid' } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, { size: "large", color: "primary", style: { minWidth: '57px', marginTop: '15px', marginLeft: '15px' }, onClick: this.addEmptyFragment },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, null)),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, { size: "large", color: "primary", style: { minWidth: '57px', marginTop: '-90px', marginLeft: '15px' }, onClick: this.removeLastFragment },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Remove"], null))))));
    };
    return DrumTabCreate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (DrumTabCreate);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdDcmVhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYi9kcnVtVGFiQ3JlYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2pCO0FBQ29DO0FBR3BDO0FBQ2lCO0FBQ0w7QUFDTTtBQUNRO0FBQ0Y7QUFDTTtBQUVIO0FBRVg7QUFDRztBQUNMO0FBQ0U7QUFDUTtBQUNRO0FBQ1Y7QUFDSTtBQUNKO0FBY2hEO0lBQXVCLDRCQUE2QjtJQUNoRCxrQkFBWSxLQUFLO1FBQWpCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBYWY7UUFFRCxlQUFTLEdBQUcsVUFBQyxHQUFHO1lBQ0osZ0NBQUksQ0FBcUI7WUFDakMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDN0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSx3QkFDRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FDbEIsSUFBSSxFQUFFLElBQUksR0FDYjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxrQkFBWSxHQUFHLFVBQUMsS0FBSztZQUNqQixJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN2QixLQUFJLENBQUMsUUFBUSx1QkFDTixLQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSx1QkFB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QUEvQixDQUErQixHQUN6QyxDQUFDLENBQUMsQ0FBQyxvRUFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFPLENBRXhGLENBR0osQ0FDVCxFQXBEK0QsQ0FvRC9ELENBQUM7Z0JBQ0Ysb0VBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtvQkFDM0IsMkRBQUMsNERBQUcsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjt3QkFDaEksMkRBQUMsNkRBQU8sT0FBRyxDQUNUO29CQUNOLDJEQUFDLDREQUFHLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ25JLDJEQUFDLHlEQUFNLE9BQUcsQ0FDUixDQUNKLENBRUosQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQXZVMEMsNENBQUssQ0FBQyxTQUFTLEdBdVV6RCIsImZpbGUiOiJtYWluLjI2ZTQxMDIzNDE5ZjgwMjkwMzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxTb25ncyB9IGZyb20gJy4vc29uZ0FjdGlvbnMnXHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IElTb25nLCB7IERpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zb25nJztcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcERpc3BhdGNoJztcclxuaW1wb3J0IElVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSVVzZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgc29uZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb25nU2VydmljZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSVRhYiwgeyBUYWJUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEd1aXRhclRhYkNyZWF0ZSBmcm9tICcuLi90YWIvZ3VpdGFyVGFiQ3JlYXRlJ1xyXG5pbXBvcnQgRHJ1bVRhYkNyZWF0ZSBmcm9tICcuLi90YWIvZHJ1bVRhYkNyZWF0ZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB1c2VyOiBJVXNlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgc29uZzogSVNvbmc7XHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG4gICAgbmV3VGFiVHlwZTogVGFiVHlwZTtcclxuICAgIGN1cnJlbnRUYWI/OiBJVGFiO1xyXG59XHJcblxyXG5cclxuY2xhc3MgU29uZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNvbmc6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBiYW5kOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBvOiA2MCxcclxuICAgICAgICAgICAgICAgIHRhYnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogRGlmZmljdWx0eVR5cGUuTWVkaXVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5ld1RhYlR5cGU6IFRhYlR5cGUuR3VpdGFyLFxyXG4gICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYlVwZGF0ZSA9ICh0YWIpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuc3RhdGUuc29uZztcclxuICAgICAgICBjb25zdCB0ID0gdGFicy5maW5kKHggPT4geC5uYW1lID09IHRhYi5uYW1lKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRhYnMuaW5kZXhPZih0KTtcclxuICAgICAgICB0YWJzW2luZGV4XSA9IHRhYjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29uZzoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zb25nLFxyXG4gICAgICAgICAgICAgICAgdGFiczogdGFic1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNvbmcubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1R5cGUgc29uZyBuYW1lIHBsZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhdGUuc29uZy5iYW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnVHlwZSBiYW5kIHBsZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvbmdTZXJ2aWNlLmNyZWF0ZVNvbmcodGhpcy5zdGF0ZS5zb25nKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdG8gZG9cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc29uZ3MnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiByZXMuZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maWcuYXBpVXJsICsgXCIvdGFic1wiO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGV4XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHZW5lcmFsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHNvbmdbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29uZzogc29uZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBuZXdUYWI6IElUYWI7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm5ld1RhYlR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUYWJUeXBlLkd1aXRhcjpcclxuICAgICAgICAgICAgICAgIG5ld1RhYiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkd1aXRhciB0YWIgXCIgKyBzb25nLnRhYnMuZmlsdGVyKHggPT4geC50eXBlID09IHRoaXMuc3RhdGUubmV3VGFiVHlwZSkubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuR3VpdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5EcnVtczpcclxuICAgICAgICAgICAgICAgIG5ld1RhYiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkRydW1zIHRhYiBcIiArIHNvbmcudGFicy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gdGhpcy5zdGF0ZS5uZXdUYWJUeXBlKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5EcnVtcyxcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzb25nLnRhYnMucHVzaChuZXdUYWIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29uZzogc29uZyB9KTtcclxuICAgICAgICBpZiAoc29uZy50YWJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWI6IHNvbmcudGFic1swXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhYkNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY3VycmVudFRhYi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5HdWl0YXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEd1aXRhclRhYkNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvPXt0aGlzLnN0YXRlLnNvbmcudGVtcG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiVXBkYXRlPXt0aGlzLnRhYlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID48L0d1aXRhclRhYkNyZWF0ZT5cclxuICAgICAgICAgICAgY2FzZSBUYWJUeXBlLkRydW1zOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxEcnVtVGFiQ3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG89e3RoaXMuc3RhdGUuc29uZy50ZW1wb31cclxuICAgICAgICAgICAgICAgICAgICB0YWJVcGRhdGU9e3RoaXMudGFiVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgPjwvRHJ1bVRhYkNyZWF0ZT5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiVHlwZUJ5TnVtYmVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFRhYlR5cGUuR3VpdGFyO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBUYWJUeXBlLkRydW1zO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBUYWJUeXBlLlBpYW5vO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICczNjBweCdcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSd0YWItY3JlYXRlJyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCwgcGFkZGluZ0JvdHRvbTogMjAgfX0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzNmNTFiNScgfX0gPlNPTkcgQ1JFQVRFPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcuYmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5lcmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcudGVtcG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RpZmZpY3VsdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e3N0eWxlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcuZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1lbnVQcm9wczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkVhc3l9PiBFYXN5IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5NZWRpdW19PiBNZWRpdW0gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkhhcmR9PiBIYXJkIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWxlY3QgdHlwZSBmb3IgbmV3IHRhYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdUYWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RpZmZpY3VsdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV3VGFiVHlwZTogdGhpcy5nZXRUYWJUeXBlQnlOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuR3VpdGFyfT4gR3VpdGFyIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkRydW1zfT4gRHJ1bXMgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuUGlhbm99PiBQaWFubyA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICctMTIwcHgnIH19IG9uQ2xpY2s9e3RoaXMuYWRkVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjkwcHgnLCBtaW5XaWR0aDogJzI5MHB4JywgZmxvYXQ6ICdsZWZ0JywgYm9yZGVyOiAnMnB4IHNvbGlkICMzZjUxYjUnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBzdHlsZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25nLnRhYnMubWFwKCh0YWI6IElUYWIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3RhYiA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFiID8geyBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA4KScgfSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiOiB0YWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGFiLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICctd2Via2l0LWZpbGwtYXZhaWxhYmxlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFiQ3JlYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50VGFiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc29uZy50YWJzLm1hcCgodGFiOiBJVGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYiB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19IGNvbG9yPVwicHJpbWFyeVwiPiBDcmVhdGUgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4ge3RoaXMuc3RhdGUuZXJyb3J9IDwvZGl2PiA6IG51bGx9ICovfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkID5cclxuICAgICAgICAgICAgPC9QYXBlciA+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiBzdGF0ZS5hdXRoUmVkdWNlci51c2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKFxyXG4gICAge1xyXG4gICAgICAgIGdldEFsbFNvbmdzOiBnZXRBbGxTb25ncy5hY3Rpb25cclxuICAgIH0sXHJcbiAgICBkaXNwYXRjaCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMsIG1hcERpc3BhdGNoKShTb25nTGlzdClcclxuXHJcbiIsImltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IElTb25nLCB7IERpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zb25nJztcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcERpc3BhdGNoJztcclxuaW1wb3J0IElVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSVVzZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgc29uZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb25nU2VydmljZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSVRhYiwgeyBUYWJUeXBlLCBJRHJ1bUl0ZXJhdGlvbiwgSURydW1Ob3RlLCBEcnVtVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IHsgUGxheUNpcmNsZUZpbGxlZCwgU3RvcCwgUGxheUFycm93LCBIaWdobGlnaHRPZmYsIFJlbW92ZUNpcmNsZSwgUmVtb3ZlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICB0ZW1wbzogbnVtYmVyO1xyXG4gICAgdGFiVXBkYXRlOiAodGFiKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgY3VycmVudE5vdGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRJdGVySW5kZXg6IG51bWJlcjtcclxuICAgIGlzU3RvcFJlcXVlc3RlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERydW1UYWJDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGZyZXRTZWxlY3Rpb246IGFueTtcclxuICAgIGRlZmF1bHRXYWl0OiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhYjogcHJvcHMudGFiLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiAwLFxyXG4gICAgICAgICAgICBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgZHJ1bXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLmRydW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zWzBdLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYjogcHJvcHMudGFiIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy50YWIuaXRlcmF0aW9ucyB8fCAhcHJvcHMudGFiLml0ZXJhdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVtcHR5RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlcjogSURydW1JdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBkcnVtczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIuZHJ1bXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0aW9ucy5wdXNoKGl0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wcm9wcy50YWJVcGRhdGUodGhpcy5zdGF0ZS50YWIpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGFzdEZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5vdGVTZWxlY3RlZCA9IChpdGVySW5kZXgsIG5vdGVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSURydW1JdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3Qgbm90ZTogSURydW1Ob3RlID0gaXRlci5kcnVtc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIG5vdGUuaXNTZWxlY3RlZCA9ICFub3RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKG5vdGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX1wiICsgbm90ZUluZGV4KS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJRHJ1bUl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9ICFpdGVyLmlzU2VsZWN0ZWRGb3JUUztcclxuICAgICAgICBpZiAoaXRlci5pc1NlbGVjdGVkRm9yVFMpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVySW5kZXggKyBcIl90c1wiKS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUN1cnJlbnRUcyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERydW1UeXBlQnlOdW1iZXIgPSAobnVtKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gRHJ1bVR5cGUuQ0MyO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBEcnVtVHlwZS5CRDtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gRHJ1bVR5cGUueEg7XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIERydW1UeXBlLlM7XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIERydW1UeXBlLk1UO1xyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBEcnVtVHlwZS5MVDtcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gRHJ1bVR5cGUuQ0MxO1xyXG4gICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gRHJ1bVR5cGUuTEZUO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlck5vdGUgPSAoaXRlckluZGV4LCBkcnVtSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGRydW06IElEcnVtTm90ZSA9IGl0ZXIuZHJ1bXNbZHJ1bUluZGV4XTtcclxuXHJcbiAgICAgICAgZHJ1bS5kcnVtID0gdGhpcy5nZXREcnVtVHlwZUJ5TnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBkcnVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlclRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZVNjYWxlVmFsdWU7XHJcbiAgICAgICAgdGltZVNjYWxlID0gdGltZVNjYWxlIDwgMC4yNSA/IDAuMjUgOiB0aW1lU2NhbGUgPiAyID8gMiA6IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IG51bGxcclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUN1cnJlbnRJdGVyID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSURydW1JdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVyYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiBpdGVySW5kZXgsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRQbGF5VGFiID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggPCB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbjogSURydW1JdGVyYXRpb24gPSB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLmRydW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5kcnVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmRydW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2RydW1zLyR7RHJ1bVR5cGVbbm90ZS5kcnVtXX0uYWlmYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBkcnVtOiBub3RlLmRydW0sIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcih0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJdGVyID0gKGluZGV4LCBvbGRBdWRpb3MpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTdG9wUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElEcnVtSXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQXVkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRBdWRpbyA9IG9sZEF1ZGlvc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlcmF0aW9uLmRydW1zLnNvbWUoeCA9PiB4LmRydW0gPT0gb2xkQXVkaW8uZHJ1bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRBdWRpby5hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24uZHJ1bXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLmRydW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZHJ1bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZHJ1bXMvJHtEcnVtVHlwZVtub3RlLmRydW1dfS5haWZgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IGRydW06IG5vdGUuZHJ1bSwgYXVkaW86IGF1ZGlvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXVkaW8ucGxheSgpLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcihpbmRleCArIDEsIGF1ZGlvcyksXHJcbiAgICAgICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCwgcGFkZGluZ0xlZnQ6ICcyMHB4JywgbWF4V2lkdGg6ICcxMTAwcHgnLCBvdmVyZmxvd1g6ICdhdXRvJywgZm9udFNpemU6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdGFydFBsYXlUYWJ9IHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlBcnJvdyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdG9wfSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJ1bS10YWItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29sXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJ1bS10YWItY29sXCI+TEg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcnVtLXRhYi1jb2xcIj5SSDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRydW0tdGFiLWNvbFwiPkxGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJ1bS10YWItY29sXCI+UkY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5tYXAoKGl0ZXI6IElEcnVtSXRlcmF0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3MtY29sICR7aXRlci5pc1BsYXlpbmcgPyAnIHByb2dyZXNzLWNvbC1jdXJyZW50JyA6ICcnfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIuZHJ1bXMubWFwKChkcnVtLCBuaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYga2V5PXtpbmRleCArIFwiIFwiICsgbml9IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVOb3RlU2VsZWN0ZWQoaW5kZXgsIG5pKX0+e2RydW0uaXNTZWxlY3RlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfXCIgKyBuaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnROb3RlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyTm90ZShpbmRleCwgbmkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNnB4JyB9fT57ZHJ1bS5mcmV0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQga2V5PXtpbmRleCArIFwiIFwiICsgbml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRydW0tdGFiLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6JzBweCcsIG1hcmdpbkJvdHRvbTonMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZHJ1bS5kcnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuY2hhbmdlSXRlck5vdGUoaW5kZXgsIG5pLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuQ0MyfT4gQ0MyIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuQkR9PiBCRCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLnhIfT4geEggPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5TfT4gUyA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLk1UfT4gTVQgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5MVH0+IExUIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuQ0MxfT4gQ0MxIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuTEZUfT4gTEZUIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJ1bS10YWItY29sXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUaW1lU2NhbGUoaW5kZXgpfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlci5pc1NlbGVjdGVkRm9yVFMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfdHNcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcnVtLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50VHMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlclRpbWVTY2FsZShpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzlweCcsIGZvbnRTaXplOiAnMThweCcgfX0+e2l0ZXIudGltZVNjYWxlfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2xpY2s9e3RoaXMuYWRkRW1wdHlGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWluV2lkdGg6ICc1N3B4JywgbWFyZ2luVG9wOiAnLTkwcHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5yZW1vdmVMYXN0RnJhZ21lbnR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=