webpackHotUpdate("main",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWIvZ3VpdGFyVGFiQ3JlYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUlBO0FBVW1CO0FBQzhEO0FBQ25FO0FBb0J4QztJQUE2QyxtQ0FBNkI7SUFJdEUseUJBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVFmO1FBWEQsaUJBQVcsR0FBVyxJQUFJLENBQUM7UUFhM0IsVUFBSSxHQUFHO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLEdBQXFCO29CQUN6QixLQUFLLEVBQUUsRUFBRTtvQkFDVCxTQUFTLEVBQUUsQ0FBQztpQkFDZixDQUFDO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNaLE1BQU0sRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxLQUFLO3FCQUNwQixDQUFDO2lCQUNMO2dCQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEQsQ0FBQztRQUVELCtCQUF5QixHQUFHLFVBQUMsS0FBSztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxJQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElB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ZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBJU29uZywgeyBEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc29uZyc7XHJcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcHBEaXNwYXRjaCc7XHJcbmltcG9ydCBJVXNlciBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lVc2VyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCB7IHNvbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc29uZ1NlcnZpY2UnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IElUYWIsIHsgVGFiVHlwZSwgSUd1aXRhckl0ZXJhdGlvbiwgSUd1aXRhck5vdGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RhYic7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCB7IFBsYXlDaXJjbGVGaWxsZWQsIFN0b3AsIFBsYXlBcnJvdywgSGlnaGxpZ2h0T2ZmLCBSZW1vdmVDaXJjbGUsIFJlbW92ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdGFiOiBJVGFiO1xyXG4gICAgdGVtcG86IG51bWJlcjtcclxuICAgIHRhYlVwZGF0ZTogKHRhYikgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgdGFiOiBJVGFiO1xyXG4gICAgbGVmdD86IG51bWJlcjtcclxuICAgIHRvcD86IG51bWJlcjtcclxuICAgIGN1cnJlbnROb3RlVmFsdWU/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU/OiBudW1iZXI7XHJcbiAgICBjdXJyZW50SXRlckluZGV4OiBudW1iZXI7XHJcbiAgICBpc1N0b3BSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWl0YXJUYWJDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGZyZXRTZWxlY3Rpb246IGFueTtcclxuICAgIGRlZmF1bHRXYWl0OiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhYjogcHJvcHMudGFiLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiAwLFxyXG4gICAgICAgICAgICBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBub3RlczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIubm90ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBuLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zWzBdLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYjogcHJvcHMudGFiIH0pXHJcbiAgICAgICAgaWYoIXByb3BzLnRhYi5pdGVyYXRpb25zIHx8ICFwcm9wcy50YWIuaXRlcmF0aW9ucy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW1wdHlGcmFnbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbm90ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLm5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogbixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRpb25zLnB1c2goaXRlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMYXN0RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBpZiAoaXRlcmF0aW9ucy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wcm9wcy50YWJVcGRhdGUodGhpcy5zdGF0ZS50YWIpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVOb3RlU2VsZWN0ZWQgPSAoaXRlckluZGV4LCBub3RlSW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3Qgbm90ZTogSUd1aXRhck5vdGUgPSBpdGVyLm5vdGVzW25vdGVJbmRleF07XHJcbiAgICAgICAgbm90ZS5pc1NlbGVjdGVkID0gIW5vdGUuaXNTZWxlY3RlZDtcclxuICAgICAgICBpZiAobm90ZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlckluZGV4ICsgXCJfXCIgKyBub3RlSW5kZXgpLmZvY3VzKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgaXRlci5pc1NlbGVjdGVkRm9yVFMgPSAhaXRlci5pc1NlbGVjdGVkRm9yVFM7XHJcbiAgICAgICAgaWYgKGl0ZXIuaXNTZWxlY3RlZEZvclRTKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlckluZGV4ICsgXCJfdHNcIikuZm9jdXMoKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VDdXJyZW50Tm90ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm90ZVZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUN1cnJlbnRUcyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJOb3RlID0gKGl0ZXJJbmRleCwgbm90ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5vdGU6IElHdWl0YXJOb3RlID0gaXRlci5ub3Rlc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIGxldCBmcmV0ID0gdGhpcy5zdGF0ZS5jdXJyZW50Tm90ZVZhbHVlO1xyXG4gICAgICAgIGZyZXQgPSBmcmV0IDwgMCA/IDAgOiBmcmV0ID4gMTggPyAxOCA6IGZyZXQ7XHJcbiAgICAgICAgbm90ZS5mcmV0ID0gZnJldDtcclxuICAgICAgICBub3RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlclRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcblxyXG4gICAgICAgIGxldCB0aW1lU2NhbGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRUaW1lU2NhbGVWYWx1ZTtcclxuICAgICAgICB0aW1lU2NhbGUgPSB0aW1lU2NhbGUgPCAwLjI1ID8gMC4yNSA6IHRpbWVTY2FsZSA+IDIgPyAyIDogdGltZVNjYWxlO1xyXG4gICAgICAgIGl0ZXIudGltZVNjYWxlID0gdGltZVNjYWxlO1xyXG4gICAgICAgIGl0ZXIuaXNTZWxlY3RlZEZvclRTID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ3VycmVudEl0ZXIgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaXRlcmF0aW9uc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlci5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9ucyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudEl0ZXJJbmRleDogaXRlckluZGV4LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0UGxheVRhYiA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElHdWl0YXJJdGVyYXRpb24gPSB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmZyZXQgJiYgbm90ZS5mcmV0ID49IDAgJiYgbm90ZS5mcmV0IDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2d1aXRhci8ke25vdGUuc3RyaW5nfS0ke25vdGUuZnJldH0ubXAzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBzdHJpbmc6IG5vdGUuc3RyaW5nLCBhdWRpbzogYXVkaW8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4ICsgMSwgYXVkaW9zKSxcclxuICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5SXRlciA9IChpbmRleCwgb2xkQXVkaW9zKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3RvcFJlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uOiBJR3VpdGFySXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQXVkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRBdWRpbyA9IG9sZEF1ZGlvc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlcmF0aW9uLm5vdGVzW29sZEF1ZGlvLnN0cmluZyAtIDFdLmZyZXQgJiYgY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tvbGRBdWRpby5zdHJpbmcgLSAxXS5mcmV0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRBdWRpby5hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24ubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZnJldCAmJiBub3RlLmZyZXQgPj0gMCAmJiBub3RlLmZyZXQgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZ3VpdGFyLyR7bm90ZS5zdHJpbmd9LSR7bm90ZS5mcmV0fS5tcDNgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IHN0cmluZzogbm90ZS5zdHJpbmcsIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIoaW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHBhZGRpbmdMZWZ0OiAnMjBweCcsIG1heFdpZHRoOiAnMTEwMHB4Jywgb3ZlcmZsb3dYOiAnYXV0bycsIGZvbnRTaXplOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RhcnRQbGF5VGFifSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5QXJyb3cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RvcH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29sXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5CPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5HPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5EPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5FPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubWFwKChpdGVyOiBJR3VpdGFySXRlcmF0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3MtY29sICR7aXRlci5pc1BsYXlpbmcgPyAnIHByb2dyZXNzLWNvbC1jdXJyZW50JyA6ICcnfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIubm90ZXMubWFwKChub3RlLCBuaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIFwiIFwiICsgbml9IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVOb3RlU2VsZWN0ZWQoaW5kZXgsIG5pKX0+e25vdGUuaXNTZWxlY3RlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfXCIgKyBuaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnROb3RlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyTm90ZShpbmRleCwgbmkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNnB4JyB9fT57bm90ZS5mcmV0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGltZVNjYWxlKGluZGV4KX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmVlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIuaXNTZWxlY3RlZEZvclRTID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX3RzXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxOHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50VHMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlclRpbWVTY2FsZShpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzlweCcsIGZvbnRTaXplOiAnMThweCcgfX0+e2l0ZXIudGltZVNjYWxlfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luTGVmdDogJzE1cHgnIH19IG9uQ2xpY2s9e3RoaXMuYWRkRW1wdHlGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWluV2lkdGg6ICc1N3B4JywgbWFyZ2luVG9wOiAnLTkwcHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5yZW1vdmVMYXN0RnJhZ21lbnR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=