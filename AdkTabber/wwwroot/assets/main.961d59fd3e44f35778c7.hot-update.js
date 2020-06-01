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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdDcmVhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDakI7QUFDb0M7QUFHcEM7QUFDaUI7QUFDTDtBQUNNO0FBQ1E7QUFDRjtBQUNNO0FBRUg7QUFFWDtBQUNHO0FBQ0w7QUFDRTtBQUNRO0FBQ1E7QUFDVjtBQUNJO0FBQ0o7QUFjaEQ7SUFBdUIsNEJBQTZCO0lBQ2hELGtCQUFZLEtBQUs7UUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FhZjtRQUVELGVBQVMsR0FBRyxVQUFDLEdBQUc7WUFDSixnQ0FBSSxDQUFxQjtZQUNqQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUM3QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJLHdCQUNHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUNsQixJQUFJLEVBQUUsSUFBSSxHQUNiO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGtCQUFZLEdBQUcsVUFBQyxLQUFLO1lBQ2pCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLHVCQUNOLEtBQUksQ0FBQyxLQUFLLEtBQ2IsS0FBSyxFQUFFLHVCQUF1QixJQUNoQzthQUNMO2lCQUNJLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElB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LENBQUMsZUFBZSxFQUFFLENBQ25CLENBQ04sQ0FDSCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBNkJkLENBQ0gsQ0FDWjtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxDQWhUc0IsNENBQUssQ0FBQyxTQUFTLEdBZ1RyQztBQUVELElBQUksUUFBUSxHQUFHLFVBQUMsS0FBVTtJQUN0QixPQUFPO1FBQ0gsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSTtLQUMvQjtBQUNMLENBQUM7QUFFRCxJQUFNLFdBQVcsR0FBRyxVQUFDLFFBQXFCLElBQUssdUVBQWtCLENBQzdEO0lBQ0ksV0FBVyxFQUFFLHdEQUFXLENBQUMsTUFBTTtDQUNsQyxFQUNELFFBQVEsQ0FBQyxFQUprQyxDQUlsQyxDQUFDO0FBSUMsMEhBQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6Im1haW4uOTYxZDU5ZmQzZTQ0ZjM1Nzc4YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFNvbmdzIH0gZnJvbSAnLi9zb25nQWN0aW9ucydcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBzb25nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvbmdTZXJ2aWNlJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJVGFiLCB7IFRhYlR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RhYic7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgR3VpdGFyVGFiQ3JlYXRlIGZyb20gJy4uL3RhYi9ndWl0YXJUYWJDcmVhdGUnXHJcbmltcG9ydCBEcnVtVGFiQ3JlYXRlIGZyb20gJy4uL3RhYi9kcnVtVGFiQ3JlYXRlJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHVzZXI6IElVc2VyXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBzb25nOiBJU29uZztcclxuICAgIGVycm9yOiBzdHJpbmc7XHJcbiAgICBuZXdUYWJUeXBlOiBUYWJUeXBlO1xyXG4gICAgY3VycmVudFRhYj86IElUYWI7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTb25nTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc29uZzoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGJhbmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGVtcG86IDYwLFxyXG4gICAgICAgICAgICAgICAgdGFiczogW10sXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5VHlwZS5NZWRpdW1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV3VGFiVHlwZTogVGFiVHlwZS5HdWl0YXIsXHJcbiAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGFiVXBkYXRlID0gKHRhYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGFicyB9ID0gdGhpcy5zdGF0ZS5zb25nO1xyXG4gICAgICAgIGNvbnN0IHQgPSB0YWJzLmZpbmQoeCA9PiB4Lm5hbWUgPT0gdGFiLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFicy5pbmRleE9mKHQpO1xyXG4gICAgICAgIHRhYnNbaW5kZXhdID0gdGFiO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzb25nOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNvbmcsXHJcbiAgICAgICAgICAgICAgICB0YWJzOiB0YWJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc29uZy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnVHlwZSBzb25nIG5hbWUgcGxlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5zb25nLmJhbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUeXBlIGJhbmQgcGxlYXNlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc29uZ1NlcnZpY2UuY3JlYXRlU29uZyh0aGlzLnN0YXRlLnNvbmcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90byBkb1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zb25ncyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHJlcy5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbiA9IGNvbmZpZy5hcGlVcmwgKyBcIi90YWJzXCI7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUdlbmVyYWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGxldCB7IHNvbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgc29uZ1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb25nOiBzb25nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhYiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNvbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG5ld1RhYjogSVRhYjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubmV3VGFiVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRhYlR5cGUuR3VpdGFyOlxyXG4gICAgICAgICAgICAgICAgbmV3VGFiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiR3VpdGFyIHRhYiBcIiArIHNvbmcudGFicy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gdGhpcy5zdGF0ZS5uZXdUYWJUeXBlKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5HdWl0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uczogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUYWJUeXBlLkRydW1zOlxyXG4gICAgICAgICAgICAgICAgbmV3VGFiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRHJ1bXMgdGFiIFwiICsgc29uZy50YWJzLmZpbHRlcih4ID0+IHgudHlwZSA9PSB0aGlzLnN0YXRlLm5ld1RhYlR5cGUpLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkRydW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvbmcudGFicy5wdXNoKG5ld1RhYik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb25nOiBzb25nIH0pO1xyXG4gICAgICAgIGlmIChzb25nLnRhYnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYjogc29uZy50YWJzWzBdLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFiQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5jdXJyZW50VGFiLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUYWJUeXBlLkd1aXRhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8R3VpdGFyVGFiQ3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG89e3RoaXMuc3RhdGUuc29uZy50ZW1wb31cclxuICAgICAgICAgICAgICAgICAgICB0YWJVcGRhdGU9e3RoaXMudGFiVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgPjwvR3VpdGFyVGFiQ3JlYXRlPlxyXG4gICAgICAgICAgICBjYXNlIFRhYlR5cGUuRHJ1bXM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPERydW1UYWJDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICB0YWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn1cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbz17dGhpcy5zdGF0ZS5zb25nLnRlbXBvfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYlVwZGF0ZT17dGhpcy50YWJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICA+PC9EcnVtVGFiQ3JlYXRlPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJUeXBlQnlOdW1iZXIgPSAobnVtKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gVGFiVHlwZS5HdWl0YXI7XHJcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFRhYlR5cGUuRHJ1bXM7XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFRhYlR5cGUuUGlhbm87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCByb290ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogJzM2MHB4J1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNvbmcgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9J3RhYi1jcmVhdGUnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwLCBwYWRkaW5nQm90dG9tOiAyMCB9fSA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICcjM2Y1MWI1JyB9fSA+U09ORyBDUkVBVEU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NvbmcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5lcmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29uZy5iYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmVyYWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29uZy50ZW1wb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5lcmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGlmZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzkwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c29uZy5kaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RpZmZpY3VsdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgTWVudVByb3BzOiBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5lcmFsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuRWFzeX0+IEVhc3kgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLk1lZGl1bX0+IE1lZGl1bSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RGlmZmljdWx0eVR5cGUuSGFyZH0+IEhhcmQgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjdCB0eXBlIGZvciBuZXcgdGFiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1RhYlR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGlmZmljdWx0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdUYWJUeXBlOiB0aGlzLmdldFRhYlR5cGVCeU51bWJlcihlLnRhcmdldC52YWx1ZSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5HdWl0YXJ9PiBHdWl0YXIgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuRHJ1bXN9PiBEcnVtcyA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5QaWFub30+IFBpYW5vIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJy0xMjBweCcgfX0gb25DbGljaz17dGhpcy5hZGRUYWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50VGFiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyOTBweCcsIG1pbldpZHRoOiAnMjkwcHgnLCBmbG9hdDogJ2xlZnQnLCBib3JkZXI6ICcycHggc29saWQgIzNmNTFiNScsIGJvcmRlclJhZGl1czogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiIHN0eWxlPXtyb290fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNvbmcudGFicy5tYXAoKHRhYjogSVRhYikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17dGFiID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYWIgPyB7IGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyB9IDoge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRhYjogdGFiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWI6IHRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0YWIubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJy13ZWJraXQtZmlsbC1hdmFpbGFibGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJDcmVhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogXHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRUYWIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zb25nLnRhYnMubWFwKCh0YWI6IElUYWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRhYjogdGFiIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0gY29sb3I9XCJwcmltYXJ5XCI+IENyZWF0ZSA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiB7dGhpcy5zdGF0ZS5lcnJvcn0gPC9kaXY+IDogbnVsbH0gKi99XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQgPlxyXG4gICAgICAgICAgICA8L1BhcGVyID5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBQcm9wcyA9IChzdGF0ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHN0YXRlLmF1dGhSZWR1Y2VyLnVzZXJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoXHJcbiAgICB7XHJcbiAgICAgICAgZ2V0QWxsU29uZ3M6IGdldEFsbFNvbmdzLmFjdGlvblxyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBQcm9wcywgbWFwRGlzcGF0Y2gpKFNvbmdMaXN0KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==