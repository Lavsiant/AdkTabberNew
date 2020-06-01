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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, { key: index + " " + ni, className: "drum-tab-col", select: true, label: '', style: {}, value: drum.drum, margin: "normal", variant: "outlined", onChange: function (e) { return _this.changeIterNote(index, ni, e); } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdDcmVhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYi9kcnVtVGFiQ3JlYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2pCO0FBQ29DO0FBR3BDO0FBQ2lCO0FBQ0w7QUFDTTtBQUNRO0FBQ0Y7QUFDTTtBQUVIO0FBRVg7QUFDRztBQUNMO0FBQ0U7QUFDUTtBQUNRO0FBQ1Y7QUFDSTtBQUNKO0FBY2hEO0lBQXVCLDRCQUE2QjtJQUNoRCxrQkFBWSxLQUFLO1FBQWpCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBYWY7UUFFRCxlQUFTLEdBQUcsVUFBQyxHQUFHO1lBQ0osZ0NBQUksQ0FBcUI7WUFDakMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDN0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSx3QkFDRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FDbEIsSUFBSSxFQUFFLElBQUksR0FDYjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxrQkFBWSxHQUFHLFVBQUMsS0FBSztZQUNqQixJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN2QixLQUFJLENBQUMsUUFBUSx1QkFDTixLQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSx1QkFB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SyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBTyxDQUV4RixDQUdKLENBQ1QsRUFwRCtELENBb0QvRCxDQUFDO2dCQUNGLG9FQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7b0JBQzNCLDJEQUFDLDREQUFHLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7d0JBQ2hJLDJEQUFDLDZEQUFPLE9BQUcsQ0FDVDtvQkFDTiwyREFBQyw0REFBRyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCO3dCQUNuSSwyREFBQyx5REFBTSxPQUFHLENBQ1IsQ0FDSixDQUVKLENBQ0osQ0FDVDtJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQ0F2VTBDLDRDQUFLLENBQUMsU0FBUyxHQXVVekQiLCJmaWxlIjoibWFpbi5mMjc0YzkxZDgwZWZmNGM1Mzg4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsU29uZ3MgfSBmcm9tICcuL3NvbmdBY3Rpb25zJ1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBJU29uZywgeyBEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc29uZyc7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBEaXNwYXRjaCc7XHJcbmltcG9ydCBJVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lVc2VyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHNvbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29uZ1NlcnZpY2UnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IElUYWIsIHsgVGFiVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBHdWl0YXJUYWJDcmVhdGUgZnJvbSAnLi4vdGFiL2d1aXRhclRhYkNyZWF0ZSdcclxuaW1wb3J0IERydW1UYWJDcmVhdGUgZnJvbSAnLi4vdGFiL2RydW1UYWJDcmVhdGUnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdXNlcjogSVVzZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIHNvbmc6IElTb25nO1xyXG4gICAgZXJyb3I6IHN0cmluZztcclxuICAgIG5ld1RhYlR5cGU6IFRhYlR5cGU7XHJcbiAgICBjdXJyZW50VGFiPzogSVRhYjtcclxufVxyXG5cclxuXHJcbmNsYXNzIFNvbmdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzb25nOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogJycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbzogNjAsXHJcbiAgICAgICAgICAgICAgICB0YWJzOiBbXSxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IERpZmZpY3VsdHlUeXBlLk1lZGl1bVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuZXdUYWJUeXBlOiBUYWJUeXBlLkd1aXRhcixcclxuICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJVcGRhdGUgPSAodGFiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0YWJzIH0gPSB0aGlzLnN0YXRlLnNvbmc7XHJcbiAgICAgICAgY29uc3QgdCA9IHRhYnMuZmluZCh4ID0+IHgubmFtZSA9PSB0YWIubmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJzLmluZGV4T2YodCk7XHJcbiAgICAgICAgdGFic1tpbmRleF0gPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNvbmc6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc29uZyxcclxuICAgICAgICAgICAgICAgIHRhYnM6IHRhYnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zb25nLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUeXBlIHNvbmcgbmFtZSBwbGVhc2UnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLnNvbmcuYmFuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1R5cGUgYmFuZCBwbGVhc2UnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb25nU2VydmljZS5jcmVhdGVTb25nKHRoaXMuc3RhdGUuc29uZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3RvIGRvXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NvbmdzJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogcmVzLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gY29uZmlnLmFwaVVybCArIFwiL3RhYnNcIjtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBleFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlR2VuZXJhbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBzb25nW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbmc6IHNvbmcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFiID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgbmV3VGFiOiBJVGFiO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5uZXdUYWJUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5HdWl0YXI6XHJcbiAgICAgICAgICAgICAgICBuZXdUYWIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHdWl0YXIgdGFiIFwiICsgc29uZy50YWJzLmZpbHRlcih4ID0+IHgudHlwZSA9PSB0aGlzLnN0YXRlLm5ld1RhYlR5cGUpLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkd1aXRhcixcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRhYlR5cGUuRHJ1bXM6XHJcbiAgICAgICAgICAgICAgICBuZXdUYWIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEcnVtcyB0YWIgXCIgKyBzb25nLnRhYnMuZmlsdGVyKHggPT4geC50eXBlID09IHRoaXMuc3RhdGUubmV3VGFiVHlwZSkubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuRHJ1bXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uczogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc29uZy50YWJzLnB1c2gobmV3VGFiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbmc6IHNvbmcgfSk7XHJcbiAgICAgICAgaWYgKHNvbmcudGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiOiBzb25nLnRhYnNbMF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYWJDcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmN1cnJlbnRUYWIudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRhYlR5cGUuR3VpdGFyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHdWl0YXJUYWJDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICB0YWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbz17dGhpcy5zdGF0ZS5zb25nLnRlbXBvfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYlVwZGF0ZT17dGhpcy50YWJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICA+PC9HdWl0YXJUYWJDcmVhdGU+XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5EcnVtczpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RHJ1bVRhYkNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvPXt0aGlzLnN0YXRlLnNvbmcudGVtcG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiVXBkYXRlPXt0aGlzLnRhYlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID48L0RydW1UYWJDcmVhdGU+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYlR5cGVCeU51bWJlciA9IChudW0pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBUYWJUeXBlLkd1aXRhcjtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gVGFiVHlwZS5EcnVtcztcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gVGFiVHlwZS5QaWFubztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMzYwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgc29uZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT0ndGFiLWNyZWF0ZScgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAsIHBhZGRpbmdCb3R0b206IDIwIH19ID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyMzZjUxYjUnIH19ID5TT05HIENSRUFURTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29uZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLmJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLnRlbXBvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLmRpZmZpY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGlmZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBNZW51UHJvcHM6IHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5FYXN5fT4gRWFzeSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuTWVkaXVtfT4gTWVkaXVtIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5IYXJkfT4gSGFyZCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VsZWN0IHR5cGUgZm9yIG5ldyB0YWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e3N0eWxlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3VGFiVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1RhYlR5cGU6IHRoaXMuZ2V0VGFiVHlwZUJ5TnVtYmVyKGUudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkd1aXRhcn0+IEd1aXRhciA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5EcnVtc30+IERydW1zIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLlBpYW5vfT4gUGlhbm8gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnLTEyMHB4JyB9fSBvbkNsaWNrPXt0aGlzLmFkZFRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRUYWIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzI5MHB4JywgbWluV2lkdGg6ICcyOTBweCcsIGZsb2F0OiAnbGVmdCcsIGJvcmRlcjogJzJweCBzb2xpZCAjM2Y1MWI1JywgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgc3R5bGU9e3Jvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc29uZy50YWJzLm1hcCgodGFiOiBJVGFiKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt0YWIgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhYiA/IHsgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4wOCknIH0gOiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYjogdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RhYi5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnLXdlYmtpdC1maWxsLWF2YWlsYWJsZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYkNyZWF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNvbmcudGFicy5tYXAoKHRhYjogSVRhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGFiOiB0YWIgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fSBjb2xvcj1cInByaW1hcnlcIj4gQ3JlYXRlIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+IHt0aGlzLnN0YXRlLmVycm9yfSA8L2Rpdj4gOiBudWxsfSAqL31cclxuICAgICAgICAgICAgICAgIDwvR3JpZCA+XHJcbiAgICAgICAgICAgIDwvUGFwZXIgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFByb3BzID0gKHN0YXRlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogc3RhdGUuYXV0aFJlZHVjZXIudXNlclxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaCA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgICBnZXRBbGxTb25nczogZ2V0QWxsU29uZ3MuYWN0aW9uXHJcbiAgICB9LFxyXG4gICAgZGlzcGF0Y2gpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzLCBtYXBEaXNwYXRjaCkoU29uZ0xpc3QpXHJcblxyXG4iLCJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBJU29uZywgeyBEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc29uZyc7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBEaXNwYXRjaCc7XHJcbmltcG9ydCBJVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lVc2VyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHNvbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29uZ1NlcnZpY2UnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IElUYWIsIHsgVGFiVHlwZSwgSURydW1JdGVyYXRpb24sIElEcnVtTm90ZSwgRHJ1bVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RhYic7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCB7IFBsYXlDaXJjbGVGaWxsZWQsIFN0b3AsIFBsYXlBcnJvdywgSGlnaGxpZ2h0T2ZmLCBSZW1vdmVDaXJjbGUsIFJlbW92ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdGFiOiBJVGFiO1xyXG4gICAgdGVtcG86IG51bWJlcjtcclxuICAgIHRhYlVwZGF0ZTogKHRhYikgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgdGFiOiBJVGFiO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHRvcD86IG51bWJlcjtcclxuICAgIGN1cnJlbnROb3RlVmFsdWU/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50SXRlckluZGV4OiBudW1iZXI7XHJcbiAgICBpc1N0b3BSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcnVtVGFiQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT57XHJcbiAgICBmcmV0U2VsZWN0aW9uOiBhbnk7XHJcbiAgICBkZWZhdWx0V2FpdDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0YWI6IHByb3BzLnRhYixcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogMCxcclxuICAgICAgICAgICAgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyOiBJRHJ1bUl0ZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGRydW1zOiBbXSxcclxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMTsgbiA8IDc7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5kcnVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLnB1c2goaXRlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1swXS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YWI6IHByb3BzLnRhYiB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJvcHMudGFiLml0ZXJhdGlvbnMgfHwgIXByb3BzLnRhYi5pdGVyYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRFbXB0eUZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgZHJ1bXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLmRydW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxhc3RGcmFnbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGlmIChpdGVyYXRpb25zLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVOb3RlU2VsZWN0ZWQgPSAoaXRlckluZGV4LCBub3RlSW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5vdGU6IElEcnVtTm90ZSA9IGl0ZXIuZHJ1bXNbbm90ZUluZGV4XTtcclxuICAgICAgICBub3RlLmlzU2VsZWN0ZWQgPSAhbm90ZS5pc1NlbGVjdGVkO1xyXG4gICAgICAgIGlmIChub3RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVySW5kZXggKyBcIl9cIiArIG5vdGVJbmRleCkuZm9jdXMoKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGltZVNjYWxlID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSURydW1JdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgaXRlci5pc1NlbGVjdGVkRm9yVFMgPSAhaXRlci5pc1NlbGVjdGVkRm9yVFM7XHJcbiAgICAgICAgaWYgKGl0ZXIuaXNTZWxlY3RlZEZvclRTKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlckluZGV4ICsgXCJfdHNcIikuZm9jdXMoKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VDdXJyZW50VHMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOYU4oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVTY2FsZVZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREcnVtVHlwZUJ5TnVtYmVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIERydW1UeXBlLkNDMjtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gRHJ1bVR5cGUuQkQ7XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIERydW1UeXBlLnhIO1xyXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBEcnVtVHlwZS5TO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBEcnVtVHlwZS5NVDtcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gRHJ1bVR5cGUuTFQ7XHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIERydW1UeXBlLkNDMTtcclxuICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIERydW1UeXBlLkxGVDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJOb3RlID0gKGl0ZXJJbmRleCwgZHJ1bUluZGV4LCBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJRHJ1bUl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBjb25zdCBkcnVtOiBJRHJ1bU5vdGUgPSBpdGVyLmRydW1zW2RydW1JbmRleF07XHJcblxyXG4gICAgICAgIGRydW0uZHJ1bSA9IHRoaXMuZ2V0RHJ1bVR5cGVCeU51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgZHJ1bS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnROb3RlVmFsdWU6IG51bGxcclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJRHJ1bUl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMuc3RhdGUuY3VycmVudFRpbWVTY2FsZVZhbHVlO1xyXG4gICAgICAgIHRpbWVTY2FsZSA9IHRpbWVTY2FsZSA8IDAuMjUgPyAwLjI1IDogdGltZVNjYWxlID4gMiA/IDIgOiB0aW1lU2NhbGU7XHJcbiAgICAgICAgaXRlci50aW1lU2NhbGUgPSB0aW1lU2NhbGU7XHJcbiAgICAgICAgaXRlci5pc1NlbGVjdGVkRm9yVFMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudFRpbWVTY2FsZVZhbHVlOiBudWxsXHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wcm9wcy50YWJVcGRhdGUodGhpcy5zdGF0ZS50YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDdXJyZW50SXRlciA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaXRlcmF0aW9uc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlci5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9ucyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogaXRlckluZGV4LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UGxheVRhYiA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElEcnVtSXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZXJhdGlvbi5kcnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGN1cnJlbnRJdGVyYXRpb24uZHJ1bXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5kcnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC9kcnVtcy8ke0RydW1UeXBlW25vdGUuZHJ1bV19LmFpZmApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvcy5wdXNoKHsgZHJ1bTogbm90ZS5kcnVtLCBhdWRpbzogYXVkaW8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4ICsgMSwgYXVkaW9zKSxcclxuICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5SXRlciA9IChpbmRleCwgb2xkQXVkaW9zKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3RvcFJlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uOiBJRHJ1bUl0ZXJhdGlvbiA9IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQXVkaW8gPSBvbGRBdWRpb3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZXJhdGlvbi5kcnVtcy5zb21lKHggPT4geC5kcnVtID09IG9sZEF1ZGlvLmRydW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkQXVkaW8uYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLmRydW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5kcnVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmRydW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2RydW1zLyR7RHJ1bVR5cGVbbm90ZS5kcnVtXX0uYWlmYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBkcnVtOiBub3RlLmRydW0sIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIoaW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHBhZGRpbmdMZWZ0OiAnMjBweCcsIG1heFdpZHRoOiAnMTEwMHB4Jywgb3ZlcmZsb3dYOiAnYXV0bycsIGZvbnRTaXplOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RhcnRQbGF5VGFifSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5QXJyb3cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RvcH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRydW0tdGFiLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWNvbFwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRydW0tdGFiLWNvbFwiPkxIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJ1bS10YWItY29sXCI+Ukg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcnVtLXRhYi1jb2xcIj5MRjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRydW0tdGFiLWNvbFwiPlJGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubWFwKChpdGVyOiBJRHJ1bUl0ZXJhdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJndWl0YXItdGFiLXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDdXJyZW50SXRlcihpbmRleCl9IGNsYXNzTmFtZT17YHByb2dyZXNzLWNvbCAke2l0ZXIuaXNQbGF5aW5nID8gJyBwcm9ncmVzcy1jb2wtY3VycmVudCcgOiAnJ31gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVyLmRydW1zLm1hcCgoZHJ1bSwgbmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGtleT17aW5kZXggKyBcIiBcIiArIG5pfSBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTm90ZVNlbGVjdGVkKGluZGV4LCBuaSl9PntkcnVtLmlzU2VsZWN0ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX1wiICsgbml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd1aXRhci1ub3RlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50Tm90ZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlck5vdGUoaW5kZXgsIG5pKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzZweCcgfX0+e2RydW0uZnJldH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGtleT17aW5kZXggKyBcIiBcIiArIG5pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcnVtLXRhYi1jb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkcnVtLmRydW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VJdGVyTm90ZShpbmRleCwgbmksIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5DQzJ9PiBDQzIgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5CRH0+IEJEIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUueEh9PiB4SCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLlN9PiBTIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuTVR9PiBNVCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLkxUfT4gTFQgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5DQzF9PiBDQzEgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5MRlR9PiBMRlQgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcnVtLXRhYi1jb2xcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZVRpbWVTY2FsZShpbmRleCl9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVyLmlzU2VsZWN0ZWRGb3JUUyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17aW5kZXggKyBcIl90c1wifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRydW0tbm90ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnRUcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyVGltZVNjYWxlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnOXB4JywgZm9udFNpemU6ICcxOHB4JyB9fT57aXRlci50aW1lU2NhbGV9PC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1pbldpZHRoOiAnNTdweCcsIG1hcmdpblRvcDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5hZGRFbXB0eUZyYWdtZW50fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICctOTBweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZUxhc3RGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==