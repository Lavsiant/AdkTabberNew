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
            if (_this.getTabTypeByNumber(_this.state.newTabType) === _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar) {
                newTab = {
                    name: "Guitar tab " + song.tabs.filter(function (x) { return x.type == _this.state.newTabType; }).length,
                    type: _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Guitar,
                    iterations: []
                };
            }
            else if (_this.getTabTypeByNumber(_this.state.newTabType) === _interfaces_tab__WEBPACK_IMPORTED_MODULE_10__["TabType"].Drums) {
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

/***/ "./src/routes/route.tsx":
/*!******************************!*\
  !*** ./src/routes/route.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/login */ "./src/components/auth/login.tsx");
/* harmony import */ var _components_auth_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth/register */ "./src/components/auth/register.tsx");
/* harmony import */ var _components_song_songList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/song/songList */ "./src/components/song/songList.tsx");
/* harmony import */ var _components_song_songCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/song/songCreate */ "./src/components/song/songCreate.tsx");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/home */ "./src/components/home/home.tsx");
/* harmony import */ var _components_song_songDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/song/songDetails */ "./src/components/song/songDetails.tsx");
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








var Routing = /** @class */ (function (_super) {
    __extends(Routing, _super);
    function Routing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Routing.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/song/:id", render: function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_song_songDetails__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ id: props.match.params.id }, props)); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/home", component: _components_home_home__WEBPACK_IMPORTED_MODULE_6__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/song-create", component: _components_song_songCreate__WEBPACK_IMPORTED_MODULE_5__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/songs", component: _components_song_songList__WEBPACK_IMPORTED_MODULE_4__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/login", component: _components_auth_login__WEBPACK_IMPORTED_MODULE_2__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/signup", component: _components_auth_register__WEBPACK_IMPORTED_MODULE_3__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", render: function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/home" })); } })));
    };
    return Routing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Routing);
;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdDcmVhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcm91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDakI7QUFDb0M7QUFHcEM7QUFDaUI7QUFDTDtBQUNNO0FBQ1E7QUFDRjtBQUNNO0FBRUg7QUFFWDtBQUNHO0FBQ0w7QUFDRTtBQUNRO0FBQ1E7QUFDVjtBQUNJO0FBQ0o7QUFlaEQ7SUFBdUIsNEJBQTZCO0lBQ2hELGtCQUFZLEtBQUs7UUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FhZjtRQUVELGVBQVMsR0FBRyxVQUFDLEdBQUc7WUFDSixnQ0FBSSxDQUFxQjtZQUNqQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUM3QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJLHdCQUNHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUNsQixJQUFJLEVBQUUsSUFBSSxHQUNiO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGtCQUFZLEdBQUcsVUFBQyxLQUFLO1lBQ2pCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLHVCQUNOLEtBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLHVCQUF1QixJQUNoQzthQUNMO2lC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LDZEQUFJLEdBQUk7WUFDdkMsb0RBQUMsa0RBQUssSUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBRSxtRUFBVSxHQUFJO1lBQ3BELG9EQUFDLGtEQUFLLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsaUVBQVEsR0FBSTtZQUM1QyxvREFBQyxrREFBSyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFFLDhEQUFLLEdBQUk7WUFDekMsb0RBQUMsa0RBQUssSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBRSxpRUFBUSxHQUFJO1lBQzdDLG9EQUFDLGtEQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFFLGNBQU0sUUFBQyxvREFBQyxxREFBUSxJQUFDLEVBQUUsRUFBQyxPQUFPLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixHQUFJLENBQzVELENBRVosQ0FBQztJQUNOLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQWpCb0MsK0NBQWUsR0FpQm5EOztBQUFBLENBQUMiLCJmaWxlIjoibWFpbi5jNjg0N2RlNWNkM2JmMDgxYzJkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsU29uZ3MgfSBmcm9tICcuL3NvbmdBY3Rpb25zJ1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBJU29uZywgeyBEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc29uZyc7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBEaXNwYXRjaCc7XHJcbmltcG9ydCBJVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lVc2VyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHNvbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29uZ1NlcnZpY2UnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IElUYWIsIHsgVGFiVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBHdWl0YXJUYWJDcmVhdGUgZnJvbSAnLi4vdGFiL2d1aXRhclRhYkNyZWF0ZSdcclxuaW1wb3J0IERydW1UYWJDcmVhdGUgZnJvbSAnLi4vdGFiL2RydW1UYWJDcmVhdGUnXHJcbmltcG9ydCB7IFRhYiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB1c2VyOiBJVXNlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgc29uZzogSVNvbmc7XHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG4gICAgbmV3VGFiVHlwZTogVGFiVHlwZTtcclxuICAgIGN1cnJlbnRUYWI/OiBJVGFiO1xyXG59XHJcblxyXG5cclxuY2xhc3MgU29uZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNvbmc6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBiYW5kOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbXBvOiA2MCxcclxuICAgICAgICAgICAgICAgIHRhYnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogRGlmZmljdWx0eVR5cGUuTWVkaXVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5ld1RhYlR5cGU6IFRhYlR5cGUuR3VpdGFyLFxyXG4gICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYlVwZGF0ZSA9ICh0YWIpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuc3RhdGUuc29uZztcclxuICAgICAgICBjb25zdCB0ID0gdGFicy5maW5kKHggPT4geC5uYW1lID09IHRhYi5uYW1lKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRhYnMuaW5kZXhPZih0KTtcclxuICAgICAgICB0YWJzW2luZGV4XSA9IHRhYjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29uZzoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zb25nLFxyXG4gICAgICAgICAgICAgICAgdGFiczogdGFic1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNvbmcubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1R5cGUgc29uZyBuYW1lIHBsZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhdGUuc29uZy5iYW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnVHlwZSBiYW5kIHBsZWFzZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvbmdTZXJ2aWNlLmNyZWF0ZVNvbmcodGhpcy5zdGF0ZS5zb25nKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdG8gZG9cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc29uZ3MnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiByZXMuZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSBjb25maWcuYXBpVXJsICsgXCIvdGFic1wiO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGV4XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVHZW5lcmFsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHNvbmdbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29uZzogc29uZyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBuZXdUYWI6IElUYWI7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VGFiVHlwZUJ5TnVtYmVyKHRoaXMuc3RhdGUubmV3VGFiVHlwZSkgPT09IFRhYlR5cGUuR3VpdGFyKSB7XHJcbiAgICAgICAgICAgIG5ld1RhYiA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiR3VpdGFyIHRhYiBcIiArIHNvbmcudGFicy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gdGhpcy5zdGF0ZS5uZXdUYWJUeXBlKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkd1aXRhcixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0VGFiVHlwZUJ5TnVtYmVyKHRoaXMuc3RhdGUubmV3VGFiVHlwZSk9PT0gVGFiVHlwZS5EcnVtcyl7XHJcbiAgICAgICAgICAgIG5ld1RhYiA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRHJ1bXMgdGFiIFwiICsgc29uZy50YWJzLmZpbHRlcih4ID0+IHgudHlwZSA9PSB0aGlzLnN0YXRlLm5ld1RhYlR5cGUpLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuRHJ1bXMsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb25nLnRhYnMucHVzaChuZXdUYWIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29uZzogc29uZyB9KTtcclxuICAgICAgICBpZiAoc29uZy50YWJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWI6IHNvbmcudGFic1swXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhYkNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuY3VycmVudFRhYi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFiVHlwZS5HdWl0YXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEd1aXRhclRhYkNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvPXt0aGlzLnN0YXRlLnNvbmcudGVtcG99XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiVXBkYXRlPXt0aGlzLnRhYlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID48L0d1aXRhclRhYkNyZWF0ZT5cclxuICAgICAgICAgICAgY2FzZSBUYWJUeXBlLkRydW1zOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxEcnVtVGFiQ3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG89e3RoaXMuc3RhdGUuc29uZy50ZW1wb31cclxuICAgICAgICAgICAgICAgICAgICB0YWJVcGRhdGU9e3RoaXMudGFiVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgPjwvRHJ1bVRhYkNyZWF0ZT5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiVHlwZUJ5TnVtYmVyID0gKG51bSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFRhYlR5cGUuR3VpdGFyO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBUYWJUeXBlLkRydW1zO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBUYWJUeXBlLlBpYW5vO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICczNjBweCdcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBzb25nIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPSd0YWItY3JlYXRlJyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCwgcGFkZGluZ0JvdHRvbTogMjAgfX0gPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzNmNTFiNScgfX0gPlNPTkcgQ1JFQVRFPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb25nLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcuYmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5lcmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcudGVtcG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RpZmZpY3VsdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e3N0eWxlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcuZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1lbnVQcm9wczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZXJhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkVhc3l9PiBFYXN5IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5NZWRpdW19PiBNZWRpdW0gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkhhcmR9PiBIYXJkIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWxlY3QgdHlwZSBmb3IgbmV3IHRhYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdUYWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RpZmZpY3VsdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV3VGFiVHlwZTogdGhpcy5nZXRUYWJUeXBlQnlOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuR3VpdGFyfT4gR3VpdGFyIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkRydW1zfT4gRHJ1bXMgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuUGlhbm99PiBQaWFubyA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICctMTIwcHgnIH19IG9uQ2xpY2s9e3RoaXMuYWRkVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFRhYiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjkwcHgnLCBtaW5XaWR0aDogJzI5MHB4JywgZmxvYXQ6ICdsZWZ0JywgYm9yZGVyOiAnMnB4IHNvbGlkICMzZjUxYjUnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBzdHlsZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25nLnRhYnMubWFwKCh0YWI6IElUYWIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3RhYiA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFiID8geyBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA4KScgfSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiOiB0YWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGFiLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICctd2Via2l0LWZpbGwtYXZhaWxhYmxlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFiQ3JlYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50VGFiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc29uZy50YWJzLm1hcCgodGFiOiBJVGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWI6IHRhYiB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19IGNvbG9yPVwicHJpbWFyeVwiPiBDcmVhdGUgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4ge3RoaXMuc3RhdGUuZXJyb3J9IDwvZGl2PiA6IG51bGx9ICovfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkID5cclxuICAgICAgICAgICAgPC9QYXBlciA+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiBzdGF0ZS5hdXRoUmVkdWNlci51c2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4gYmluZEFjdGlvbkNyZWF0b3JzKFxyXG4gICAge1xyXG4gICAgICAgIGdldEFsbFNvbmdzOiBnZXRBbGxTb25ncy5hY3Rpb25cclxuICAgIH0sXHJcbiAgICBkaXNwYXRjaCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMsIG1hcERpc3BhdGNoKShTb25nTGlzdClcclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luJztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlcic7XHJcbmltcG9ydCBTb25nTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Nvbmcvc29uZ0xpc3QnO1xyXG5pbXBvcnQgQ3JlYXRlU29uZyBmcm9tICcuLi9jb21wb25lbnRzL3Nvbmcvc29uZ0NyZWF0ZSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9ob21lJztcclxuaW1wb3J0IFNvbmdEZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvc29uZy9zb25nRGV0YWlscyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc29uZy86aWRcIiByZW5kZXI9eyhwcm9wcykgPT4gPFNvbmdEZXRhaWxzIGlkPXtwcm9wcy5tYXRjaC5wYXJhbXMuaWR9IHsuLi5wcm9wc30vPn0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zb25nLWNyZWF0ZVwiIGNvbXBvbmVudD17Q3JlYXRlU29uZ30gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NvbmdzXCIgY29tcG9uZW50PXtTb25nTGlzdH0gLz4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIHJlbmRlcj17KCkgPT4gKDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz4pfSAvPlxyXG4gICAgICAgICAgICA8L1N3aXRjaD5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTsiXSwic291cmNlUm9vdCI6IiJ9