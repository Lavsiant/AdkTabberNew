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
            });
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
            });
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
            });
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
            });
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
        _this.fretSelection = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
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
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col", onClick: function () { return _this.toggleTimeScale(index); } }, iter.isSelectedForTS ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWIvZ3VpdGFyVGFiQ3JlYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUlBO0FBVW1CO0FBQzhEO0FBQ25FO0FBbUJ4QztJQUE2QyxtQ0FBNkI7SUFJdEUseUJBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQXNCZjtRQXpCRCxpQkFBVyxHQUFXLElBQUksQ0FBQztRQTJCM0Isc0JBQWdCLEdBQUc7WUFDUCwyQ0FBVSxDQUFvQjtZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLElBQUksR0FBcUI7b0JBQ3pCLEtBQUssRUFBRSxFQUFFO29CQUNULFNBQVMsRUFBRSxDQUFDO2lCQUNmLENBQUM7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1osTUFBTSxFQUFFLENBQUM7d0JBQ1QsVUFBVSxFQUFFLEtBQUs7cUJBQ3BCLENBQUM7aUJBQ0w7Z0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFDRCxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLEdBQUcsd0JBQ0ksS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQ2pCLFVBQVUsRUFBRSxVQUFVLEdBQ3pCO2FBQ0osQ0FBQztRQUVOLENBQUM7UUFFRCx3QkFBa0IsR0FBRztZQUNULDJDQUFVLENBQW9CO1lBQ3RDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FB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QUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ25JLDJEQUFDLHlEQUFNLE9BQUcsQ0FDUixDQUNKLENBRUosQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQWxTNEMsNENBQUssQ0FBQyxTQUFTLEdBa1MzRCIsImZpbGUiOiJtYWluLmFiMWYzMDhmYmIxMTgzYjUwZmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBzb25nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvbmdTZXJ2aWNlJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJVGFiLCB7IFRhYlR5cGUsIElHdWl0YXJJdGVyYXRpb24sIElHdWl0YXJOb3RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgeyBQbGF5Q2lyY2xlRmlsbGVkLCBTdG9wLCBQbGF5QXJyb3csIEhpZ2hsaWdodE9mZiwgUmVtb3ZlQ2lyY2xlLCBSZW1vdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIHRlbXBvOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgY3VycmVudE5vdGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRJdGVySW5kZXg6IG51bWJlcjtcclxuICAgIGlzU3RvcFJlcXVlc3RlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aXRhclRhYkNyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+e1xyXG4gICAgZnJldFNlbGVjdGlvbjogYW55O1xyXG4gICAgZGVmYXVsdFdhaXQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFiOiBwcm9wcy50YWIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVySW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGlzU3RvcFJlcXVlc3RlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBub3RlczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIubm90ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBuLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zWzBdLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcmV0U2VsZWN0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW1wdHlGcmFnbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbm90ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLm5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogbixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRpb25zLnB1c2goaXRlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMYXN0RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBpZiAoaXRlcmF0aW9ucy5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTm90ZVNlbGVjdGVkID0gKGl0ZXJJbmRleCwgbm90ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5vdGU6IElHdWl0YXJOb3RlID0gaXRlci5ub3Rlc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIG5vdGUuaXNTZWxlY3RlZCA9ICFub3RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKG5vdGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX1wiICsgbm90ZUluZGV4KS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGl0ZXIuaXNTZWxlY3RlZEZvclRTID0gIWl0ZXIuaXNTZWxlY3RlZEZvclRTO1xyXG4gICAgICAgIGlmIChpdGVyLmlzU2VsZWN0ZWRGb3JUUykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX3RzXCIpLmZvY3VzKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlQ3VycmVudE5vdGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOYU4oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VDdXJyZW50VHMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOYU4oZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVTY2FsZVZhbHVlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJdGVyTm90ZSA9IChpdGVySW5kZXgsIG5vdGVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBjb25zdCBub3RlOiBJR3VpdGFyTm90ZSA9IGl0ZXIubm90ZXNbbm90ZUluZGV4XTtcclxuICAgICAgICBsZXQgZnJldCA9IHRoaXMuc3RhdGUuY3VycmVudE5vdGVWYWx1ZTtcclxuICAgICAgICBmcmV0ID0gZnJldCA8IDAgPyAwIDogZnJldCA+IDE4ID8gMTggOiBmcmV0O1xyXG4gICAgICAgIG5vdGUuZnJldCA9IGZyZXQ7XHJcbiAgICAgICAgbm90ZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnROb3RlVmFsdWU6IG51bGxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZXJUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJR3VpdGFySXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZVNjYWxlVmFsdWU7XHJcbiAgICAgICAgdGltZVNjYWxlID0gdGltZVNjYWxlIDwgMC4yNSA/IDAuMjUgOiB0aW1lU2NhbGUgPiAyID8gMiA6IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IG51bGxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUN1cnJlbnRJdGVyID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGl0ZXJhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXIuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVySW5kZXg6IGl0ZXJJbmRleCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3RvcFJlcXVlc3RlZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFBsYXlUYWIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlcmF0aW9uOiBJR3VpdGFySXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZXJhdGlvbi5ub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGN1cnJlbnRJdGVyYXRpb24ubm90ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5mcmV0ICYmIG5vdGUuZnJldCA+PSAwICYmIG5vdGUuZnJldCA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC9ndWl0YXIvJHtub3RlLnN0cmluZ30tJHtub3RlLmZyZXR9Lm1wM2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvcy5wdXNoKHsgc3RyaW5nOiBub3RlLnN0cmluZywgYXVkaW86IGF1ZGlvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlJdGVyKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCArIDEsIGF1ZGlvcyksXHJcbiAgICAgICAgICAgICAgICAoKDYwIC8gdGhpcy5wcm9wcy50ZW1wbykgLyB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF0udGltZVNjYWxlKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUl0ZXIgPSAoaW5kZXgsIG9sZEF1ZGlvcykgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1N0b3BSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbjogSUd1aXRhckl0ZXJhdGlvbiA9IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEF1ZGlvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQXVkaW8gPSBvbGRBdWRpb3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZXJhdGlvbi5ub3Rlc1tvbGRBdWRpby5zdHJpbmctMV0uZnJldCAmJiBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW29sZEF1ZGlvLnN0cmluZy0xXS5mcmV0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRBdWRpby5hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24ubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZnJldCAmJiBub3RlLmZyZXQgPj0gMCAmJiBub3RlLmZyZXQgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZ3VpdGFyLyR7bm90ZS5zdHJpbmd9LSR7bm90ZS5mcmV0fS5tcDNgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IHN0cmluZzogbm90ZS5zdHJpbmcsIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleCA8IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUl0ZXIoaW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICgoNjAgLyB0aGlzLnByb3BzLnRlbXBvKSAvIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XS50aW1lU2NhbGUpICogMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTdG9wUmVxdWVzdGVkOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHBhZGRpbmdMZWZ0OiAnMjBweCcsIG1heFdpZHRoOiAnMTEwMHB4Jywgb3ZlcmZsb3dYOiAnYXV0bycsIGZvbnRTaXplOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RhcnRQbGF5VGFifSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5QXJyb3cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIG9uQ2xpY2s9e3RoaXMuc3RvcH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDVweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29sXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5CPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5HPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5EPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5FPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubWFwKChpdGVyOiBJR3VpdGFySXRlcmF0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImd1aXRhci10YWItcm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUN1cnJlbnRJdGVyKGluZGV4KX0gY2xhc3NOYW1lPXtgcHJvZ3Jlc3MtY29sICR7aXRlci5pc1BsYXlpbmcgPyAnIHByb2dyZXNzLWNvbC1jdXJyZW50JyA6ICcnfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIubm90ZXMubWFwKChub3RlLCBuaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIFwiIFwiICsgbml9IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVOb3RlU2VsZWN0ZWQoaW5kZXgsIG5pKX0+e25vdGUuaXNTZWxlY3RlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfXCIgKyBuaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3VpdGFyLW5vdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnROb3RlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyTm90ZShpbmRleCwgbmkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNnB4JyB9fT57bm90ZS5mcmV0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGltZVNjYWxlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZXIuaXNTZWxlY3RlZEZvclRTID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX3RzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJndWl0YXItbm90ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnRUcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyVGltZVNjYWxlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnOXB4JywgZm9udFNpemU6ICcxOHB4JyB9fT57aXRlci50aW1lU2NhbGV9PC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1pbldpZHRoOiAnNTdweCcsIG1hcmdpblRvcDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5hZGRFbXB0eUZyYWdtZW50fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICctOTBweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZUxhc3RGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==