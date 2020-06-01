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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb25nL3NvbmdGaWx0ZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWIvZ3VpdGFyVGFiQ3JlYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlcy90YWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTBCO0FBQ1A7QUFDTDtBQUNVO0FBQ0s7QUFDUjtBQWEvQztJQUF3Qyw4QkFBNkI7SUFDakUsb0JBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU9mO1FBRUQsdUJBQWlCLEdBQUc7UUFFcEIsQ0FBQztRQUVELG1CQUFhLEdBQUcsV0FBQztZQUViLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNsQjtnQkFDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNwQixJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNqQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2FBQzlCLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxtQkFBYSxHQUFHLFdBQUM7WUFFYixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV4QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDbEI7Z0JBQ0ksSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFN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TSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ25JLDJEQUFDLHlEQUFNLE9BQUcsQ0FDUixDQUNKLENBRUosQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQWpUNEMsNENBQUssQ0FBQyxTQUFTLEdBaVQzRDs7Ozs7Ozs7Ozs7Ozs7QUMvVUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVksT0FLWDtBQUxELFdBQVksT0FBTztJQUNmLHlDQUFNO0lBQ04sdUNBQUs7SUFDTCx1Q0FBSztJQUNMLG1DQUFHO0FBQ1AsQ0FBQyxFQUxXLE9BQU8sS0FBUCxPQUFPLFFBS2xCO0FBNkJELElBQVksUUFXWDtBQVhELFdBQVksUUFBUTtJQUNaLHFDQUFPO0lBQ1AsbUNBQU07SUFDTixtQ0FBTTtJQUNOLGlDQUFLO0lBQ0wsbUNBQU07SUFDTixtQ0FBTTtJQUNOLHFDQUFPO0lBR1Asc0NBQVE7QUFDaEIsQ0FBQyxFQVhXLFFBQVEsS0FBUixRQUFRLFFBV25CO0FBWUQsSUFBWSxRQWFYO0FBYkQsV0FBWSxRQUFRO0lBQ2hCLGlDQUFLO0lBQ0wsMkNBQVU7SUFDVixpQ0FBSztJQUNMLDJDQUFVO0lBQ1YsaUNBQUs7SUFDTCxpQ0FBSztJQUNMLDJDQUFVO0lBQ1YsaUNBQUs7SUFDTCwyQ0FBVTtJQUNWLGtDQUFNO0lBQ04sNENBQVc7SUFDWCxrQ0FBTTtBQUNWLENBQUMsRUFiVyxRQUFRLEtBQVIsUUFBUSxRQWFuQjtBQUVELElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQiwrQ0FBVTtJQUNWLDZDQUFTO0lBQ1QsNkNBQVM7SUFDVCxxREFBYTtJQUNiLHVEQUFjO0lBQ2QscURBQWE7SUFDYix1REFBYztBQUNsQixDQUFDLEVBUlcsVUFBVSxLQUFWLFVBQVUsUUFRckIiLCJmaWxlIjoibWFpbi42OWZhOTg2MTBlMTVjODk5MzAwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBUYWJUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGZpbHRlclNvbmdzKG9wdGlvbnM6IGFueSk6IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGJhbmQ6IHN0cmluZztcclxuICAgIGRpZmZpY3VsdHk6IERpZmZpY3VsdHlUeXBlO1xyXG4gICAgdGFiVHlwZTogVGFiVHlwZTsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbmdGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgYmFuZDogJycsXHJcbiAgICAgICAgICAgIHRhYlR5cGU6IFRhYlR5cGUuQW55LFxyXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5VHlwZS5BbnksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYW1lQ2hhbmdlZCA9IGUgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogdGhpcy5zdGF0ZS5iYW5kLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdGhpcy5zdGF0ZS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgdGFiVHlwZTogdGhpcy5zdGF0ZS50YWJUeXBlLCAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhbmRDaGFuZ2VkID0gZSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYW5kOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTb25ncyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiB0aGlzLnN0YXRlLmRpZmZpY3VsdHksXHJcbiAgICAgICAgICAgICAgICB0YWJUeXBlOiB0aGlzLnN0YXRlLnRhYlR5cGUsICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFiVHlwZUNoYW5nZWQgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFiVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU29uZ3MoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgIGJhbmQ6IHRoaXMuc3RhdGUuYmFuZCxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuc3RhdGUuZGlmZmljdWx0eSxcclxuICAgICAgICAgICAgICAgIHRhYlR5cGU6IHRoaXMuc3RhdGUudGFiVHlwZSwgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaWZmaWN1bHR5Q2hhbmdlZCA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWZmaWN1bHR5OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTb25ncyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFuZDogdGhpcy5zdGF0ZS5iYW5kLFxyXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogdGhpcy5zdGF0ZS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICAgICAgdGFiVHlwZTogdGhpcy5zdGF0ZS50YWJUeXBlLCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgY3JlYXRlVGFiT3BlbiA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3NvbmctY3JlYXRlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1iYXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnQmFuZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQmFuZENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J0RpZmljdWx0eSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkaWZmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgTWVudVByb3BzOiBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5XaWR0aDoxNjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PSdDaG9vc2UgZGlmaWN1bHR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRpZmZpY3VsdHlDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5Bbnl9PiBBbnkgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEaWZmaWN1bHR5VHlwZS5FYXN5fT4gRWFzeSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLk1lZGl1bX0+IE1lZGl1bSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RpZmZpY3VsdHlUeXBlLkhhcmR9PiBIYXJkIDwvTWVudUl0ZW0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1R5cGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGFiVHlwZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1lbnVQcm9wczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6MTYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD0nQ2hvb3NlIHRhYiB0eXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRhYlR5cGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtUYWJUeXBlLkFueX0+IEFueSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1RhYlR5cGUuR3VpdGFyfT4gR3VpdGFyIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5EcnVtc30+IERydW1zIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17VGFiVHlwZS5QaWFub30+IFBpYW5vIDwvTWVudUl0ZW0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGFyaWEtbGFiZWw9e1wiQWRkIHNvbmdcIn0gb25DbGljaz17dGhpcy5jcmVhdGVUYWJPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBzb25nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvbmdTZXJ2aWNlJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJVGFiLCB7IFRhYlR5cGUsIElHdWl0YXJJdGVyYXRpb24sIElHdWl0YXJOb3RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgeyBQbGF5Q2lyY2xlRmlsbGVkLCBTdG9wLCBQbGF5QXJyb3csIEhpZ2hsaWdodE9mZiwgUmVtb3ZlQ2lyY2xlLCBSZW1vdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIHRlbXBvOiBudW1iZXI7XHJcbiAgICB0YWJVcGRhdGU6ICh0YWIpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIGxlZnQ/OiBudW1iZXI7XHJcbiAgICB0b3A/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50Tm90ZVZhbHVlPzogbnVtYmVyO1xyXG4gICAgY3VycmVudFRpbWVTY2FsZVZhbHVlPzogbnVtYmVyO1xyXG4gICAgY3VycmVudEl0ZXJJbmRleDogbnVtYmVyO1xyXG4gICAgaXNTdG9wUmVxdWVzdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpdGFyVGFiQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT57XHJcbiAgICBmcmV0U2VsZWN0aW9uOiBhbnk7XHJcbiAgICBkZWZhdWx0V2FpdDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0YWI6IHByb3BzLnRhYixcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogMCxcclxuICAgICAgICAgICAgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbm90ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLm5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogbixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLnB1c2goaXRlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1swXS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YWI6IHByb3BzLnRhYiB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJvcHMudGFiLml0ZXJhdGlvbnMgfHwgIXByb3BzLnRhYi5pdGVyYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRFbXB0eUZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBub3RlczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIubm90ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBuLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxhc3RGcmFnbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGlmIChpdGVyYXRpb25zLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVOb3RlU2VsZWN0ZWQgPSAoaXRlckluZGV4LCBub3RlSW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3Qgbm90ZTogSUd1aXRhck5vdGUgPSBpdGVyLm5vdGVzW25vdGVJbmRleF07XHJcbiAgICAgICAgbm90ZS5pc1NlbGVjdGVkID0gIW5vdGUuaXNTZWxlY3RlZDtcclxuICAgICAgICBpZiAobm90ZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlckluZGV4ICsgXCJfXCIgKyBub3RlSW5kZXgpLmZvY3VzKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgaXRlci5pc1NlbGVjdGVkRm9yVFMgPSAhaXRlci5pc1NlbGVjdGVkRm9yVFM7XHJcbiAgICAgICAgaWYgKGl0ZXIuaXNTZWxlY3RlZEZvclRTKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlckluZGV4ICsgXCJfdHNcIikuZm9jdXMoKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VDdXJyZW50Tm90ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm90ZVZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUN1cnJlbnRUcyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJOb3RlID0gKGl0ZXJJbmRleCwgbm90ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5vdGU6IElHdWl0YXJOb3RlID0gaXRlci5ub3Rlc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIGxldCBmcmV0ID0gdGhpcy5zdGF0ZS5jdXJyZW50Tm90ZVZhbHVlO1xyXG4gICAgICAgIGZyZXQgPSBmcmV0IDwgMCA/IDAgOiBmcmV0ID4gMTggPyAxOCA6IGZyZXQ7XHJcbiAgICAgICAgbm90ZS5mcmV0ID0gZnJldDtcclxuICAgICAgICBub3RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlclRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcblxyXG4gICAgICAgIGxldCB0aW1lU2NhbGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRUaW1lU2NhbGVWYWx1ZTtcclxuICAgICAgICB0aW1lU2NhbGUgPSB0aW1lU2NhbGUgPCAwLjI1ID8gMC4yNSA6IHRpbWVTY2FsZSA+IDIgPyAyIDogdGltZVNjYWxlO1xyXG4gICAgICAgIGl0ZXIudGltZVNjYWxlID0gdGltZVNjYWxlO1xyXG4gICAgICAgIGl0ZXIuaXNTZWxlY3RlZEZvclRTID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ3VycmVudEl0ZXIgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaXRlcmF0aW9uc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlci5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9ucyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogaXRlckluZGV4LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UGxheVRhYiA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElHdWl0YXJJdGVyYXRpb24gPSB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmZyZXQgJiYgbm90ZS5mcmV0ID49IDAgJiYgbm90ZS5mcmV0IDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2d1aXRhci8ke25vdGUuc3RyaW5nfS0ke25vdGUuZnJldH0ubXAzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBzdHJpbmc6IG5vdGUuc3RyaW5nLCBhdWRpbzogYXVkaW8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4ICsgMSwgYXVkaW9zKSxcclxuICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5SXRlciA9IChpbmRleCwgb2xkQXVkaW9zKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3RvcFJlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uOiBJR3VpdGFySXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQXVkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRBdWRpbyA9IG9sZEF1ZGlvc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlcmF0aW9uLm5vdGVzW29sZEF1ZGlvLnN0cmluZyAtIDFdLmZyZXQgJiYgY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tvbGRBdWRpby5zdHJpbmcgLSAxXS5mcmV0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRBdWRpby5hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24ubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZnJldCAmJiBub3RlLmZyZXQgPj0gMCAmJiBub3RlLmZyZXQgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZ3VpdGFyLyR7bm90ZS5zdHJpbmd9LSR7bm90ZS5mcmV0fS5tcDNgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IHN0cmluZzogbm90ZS5zdHJpbmcsIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIoaW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHBhZGRpbmdMZWZ0OiAnMjBweCcsIG1heFdpZHRoOiAnMTEwMHB4Jywgb3ZlcmZsb3dYOiAnYXV0bycsIGZvbnRTaXplOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RhcnRQbGF5VGFifSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5QXJyb3cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RvcH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29sXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5CPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5HPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5EPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5FPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubWFwKChpdGVyOiBJR3VpdGFySXRlcmF0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3MtY29sICR7aXRlci5pc1BsYXlpbmcgPyAnIHByb2dyZXNzLWNvbC1jdXJyZW50JyA6ICcnfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIubm90ZXMubWFwKChub3RlLCBuaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIFwiIFwiICsgbml9IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVOb3RlU2VsZWN0ZWQoaW5kZXgsIG5pKX0+e25vdGUuaXNTZWxlY3RlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfXCIgKyBuaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnROb3RlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyTm90ZShpbmRleCwgbmkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNnB4JyB9fT57bm90ZS5mcmV0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGltZVNjYWxlKGluZGV4KX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmVlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIuaXNTZWxlY3RlZEZvclRTID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX3RzXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxOHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50VHMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlclRpbWVTY2FsZShpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzlweCcsIGZvbnRTaXplOiAnMThweCcgfX0+e2l0ZXIudGltZVNjYWxlfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2xpY2s9e3RoaXMuYWRkRW1wdHlGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWluV2lkdGg6ICc1N3B4JywgbWFyZ2luVG9wOiAnLTkwcHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5yZW1vdmVMYXN0RnJhZ21lbnR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJVGFiIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nOyAgXHJcbiAgICB0eXBlOiBUYWJUeXBlOyAgXHJcbiAgICBpdGVyYXRpb25zOiBJVGFiSXRlcmF0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRhYlR5cGV7XHJcbiAgICBHdWl0YXIsXHJcbiAgICBEcnVtcyxcclxuICAgIFBpYW5vLFxyXG4gICAgQW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYkl0ZXJhdGlvbntcclxuICAgIHRpbWVTY2FsZSA6IG51bWJlcjtcclxuICAgIGlzUGxheWluZz86IGJvb2xlYW47XHJcbiAgICBpc1NlbGVjdGVkRm9yVFM/OiBib29sZWFuO1xyXG59IFxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUd1aXRhckl0ZXJhdGlvbiBleHRlbmRzIElUYWJJdGVyYXRpb257XHJcbiAgICBub3Rlcz86IElHdWl0YXJOb3RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUd1aXRhck5vdGV7XHJcbiAgICBmcmV0PzogbnVtYmVyO1xyXG4gICAgc3RyaW5nOiBudW1iZXI7XHJcbiAgICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURydW1JdGVyYXRpb24gZXh0ZW5kcyBJVGFiSXRlcmF0aW9ue1xyXG4gICAgZHJ1bXM/OiBJRHJ1bU5vdGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJ1bU5vdGV7XHJcbiAgICBkcnVtPzogRHJ1bVR5cGU7XHJcbiAgICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRHJ1bVR5cGV7ICAgIFxyXG4gICAgICAgIENDMiA9IDAsICAgICAgICBcclxuICAgICAgICBCRCA9IDEsICAgICAgICBcclxuICAgICAgICB4SCA9IDIsICAgICAgICBcclxuICAgICAgICBTID0gMywgICAgICAgIFxyXG4gICAgICAgIE1UID0gNCwgICAgICAgIFxyXG4gICAgICAgIExUID0gNSwgICAgICAgIFxyXG4gICAgICAgIENDMSA9IDYsICAgICAgICBcclxuICBcclxuICAgXHJcbiAgICAgICAgTEZUID0gMTBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBpYW5vSXRlcmF0aW9uIGV4dGVuZHMgSVRhYkl0ZXJhdGlvbntcclxuICAgIG5vdGVzOiBJQ29uY3JldGVOb3RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmNyZXRlTm90ZXtcclxuICAgIG5vdGUgOiBOb3RlVHlwZTtcclxuICAgIG9jdGF2ZTogT2N0YXZlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTm90ZVR5cGV7XHJcbiAgICBDID0gMSxcclxuICAgIENzaGFycCA9IDIsXHJcbiAgICBEID0gMyxcclxuICAgIERzaGFycCA9IDQsXHJcbiAgICBFID0gNSxcclxuICAgIEYgPSA2LFxyXG4gICAgRnNoYXJwID0gNyxcclxuICAgIEcgPSA4LFxyXG4gICAgR3NoYXJwID0gOSxcclxuICAgIEEgPSAxMCxcclxuICAgIEFzaGFycCA9IDExLFxyXG4gICAgSCA9IDEyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9jdGF2ZVR5cGV7XHJcbiAgICBDb250cmEgPSAxLFxyXG4gICAgR3JlYXQgPSAyLFxyXG4gICAgU21hbGwgPSAzLFxyXG4gICAgRmlyc3RMaW5lID0gNCxcclxuICAgIFNlY29uZExpbmUgPSA1LFxyXG4gICAgVGhpcmRMaW5lID0gNixcclxuICAgIEZvdXJ0aExpbmUgPSA3XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9