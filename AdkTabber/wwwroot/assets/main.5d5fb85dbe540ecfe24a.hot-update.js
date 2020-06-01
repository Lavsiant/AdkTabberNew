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
        _this.componentWillReceiveProps = function (props) {
            _this.setState({ tab: props.tab });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWIvZ3VpdGFyVGFiQ3JlYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUlBO0FBVW1CO0FBQzhEO0FBQ25FO0FBbUJ4QztJQUE2QyxtQ0FBNkI7SUFJdEUseUJBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQXNCZjtRQXpCRCxpQkFBVyxHQUFXLElBQUksQ0FBQztRQTJCM0IsK0JBQXlCLEdBQUcsVUFBQyxLQUFLO1lBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUFFRCxzQkFBZ0IsR0FBRztZQUNQLDJDQUFVLENBQW9CO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxHQUFxQjtvQkFDekIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsU0FBUyxFQUFFLENBQUM7aUJBQ2YsQ0FBQztnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDWixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsS0FBSztxQkFDcEIsQ0FBQztpQkFDTDtnQkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4QjtZQUNELEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsR0FBRyx3QkFDSSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FDakIsVUFBVSxFQUFFLFVBQVUsR0FDekI7YUFDSixDQUFDO1FBRU4sQ0FBQztRQUVELHdCQUFrQixHQUFH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QUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjt3QkFDaEksMkRBQUMsNkRBQU8sT0FBRyxDQUNUO29CQUNOLDJEQUFDLDREQUFHLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7d0JBQ25JLDJEQUFDLHlEQUFNLE9BQUcsQ0FDUixDQUNKLENBRUosQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQXZTNEMsNENBQUssQ0FBQyxTQUFTLEdBdVMzRCIsImZpbGUiOiJtYWluLjVkNWZiODVkYmU1NDBlY2ZlMjRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgSVNvbmcsIHsgRGlmZmljdWx0eVR5cGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NvbmcnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBwRGlzcGF0Y2gnO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9JVXNlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgeyBzb25nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NvbmdTZXJ2aWNlJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJVGFiLCB7IFRhYlR5cGUsIElHdWl0YXJJdGVyYXRpb24sIElHdWl0YXJOb3RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90YWInO1xyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgeyBQbGF5Q2lyY2xlRmlsbGVkLCBTdG9wLCBQbGF5QXJyb3csIEhpZ2hsaWdodE9mZiwgUmVtb3ZlQ2lyY2xlLCBSZW1vdmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYic7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRhYjogSVRhYjtcclxuICAgIHRlbXBvOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgY3VycmVudE5vdGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRJdGVySW5kZXg6IG51bWJlcjtcclxuICAgIGlzU3RvcFJlcXVlc3RlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aXRhclRhYkNyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+e1xyXG4gICAgZnJldFNlbGVjdGlvbjogYW55O1xyXG4gICAgZGVmYXVsdFdhaXQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFiOiBwcm9wcy50YWIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVySW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGlzU3RvcFJlcXVlc3RlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBub3RlczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIubm90ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiBuLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zWzBdLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcmV0U2VsZWN0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YWI6IHByb3BzLnRhYiB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVtcHR5RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMTsgbiA8IDc7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5ub3Rlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0aW9ucy5wdXNoKGl0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGFzdEZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5vdGVTZWxlY3RlZCA9IChpdGVySW5kZXgsIG5vdGVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBjb25zdCBub3RlOiBJR3VpdGFyTm90ZSA9IGl0ZXIubm90ZXNbbm90ZUluZGV4XTtcclxuICAgICAgICBub3RlLmlzU2VsZWN0ZWQgPSAhbm90ZS5pc1NlbGVjdGVkO1xyXG4gICAgICAgIGlmIChub3RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVySW5kZXggKyBcIl9cIiArIG5vdGVJbmRleCkuZm9jdXMoKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGltZVNjYWxlID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9ICFpdGVyLmlzU2VsZWN0ZWRGb3JUUztcclxuICAgICAgICBpZiAoaXRlci5pc1NlbGVjdGVkRm9yVFMpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVySW5kZXggKyBcIl90c1wiKS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUN1cnJlbnROb3RlID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoIWlzTmFOKGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROb3RlVmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlQ3VycmVudFRzID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoIWlzTmFOKGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlck5vdGUgPSAoaXRlckluZGV4LCBub3RlSW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3Qgbm90ZTogSUd1aXRhck5vdGUgPSBpdGVyLm5vdGVzW25vdGVJbmRleF07XHJcbiAgICAgICAgbGV0IGZyZXQgPSB0aGlzLnN0YXRlLmN1cnJlbnROb3RlVmFsdWU7XHJcbiAgICAgICAgZnJldCA9IGZyZXQgPCAwID8gMCA6IGZyZXQgPiAxOCA/IDE4IDogZnJldDtcclxuICAgICAgICBub3RlLmZyZXQgPSBmcmV0O1xyXG4gICAgICAgIG5vdGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50Tm90ZVZhbHVlOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJdGVyVGltZVNjYWxlID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSUd1aXRhckl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMuc3RhdGUuY3VycmVudFRpbWVTY2FsZVZhbHVlO1xyXG4gICAgICAgIHRpbWVTY2FsZSA9IHRpbWVTY2FsZSA8IDAuMjUgPyAwLjI1IDogdGltZVNjYWxlID4gMiA/IDIgOiB0aW1lU2NhbGU7XHJcbiAgICAgICAgaXRlci50aW1lU2NhbGUgPSB0aW1lU2NhbGU7XHJcbiAgICAgICAgaXRlci5pc1NlbGVjdGVkRm9yVFMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudFRpbWVTY2FsZVZhbHVlOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDdXJyZW50SXRlciA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElHdWl0YXJJdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVyYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiBpdGVySW5kZXgsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRQbGF5VGFiID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggPCB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbjogSUd1aXRhckl0ZXJhdGlvbiA9IHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24ubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZnJldCAmJiBub3RlLmZyZXQgPj0gMCAmJiBub3RlLmZyZXQgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZ3VpdGFyLyR7bm90ZS5zdHJpbmd9LSR7bm90ZS5mcmV0fS5tcDNgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IHN0cmluZzogbm90ZS5zdHJpbmcsIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcih0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJdGVyID0gKGluZGV4LCBvbGRBdWRpb3MpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTdG9wUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElHdWl0YXJJdGVyYXRpb24gPSB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRBdWRpb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZEF1ZGlvID0gb2xkQXVkaW9zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVyYXRpb24ubm90ZXNbb2xkQXVkaW8uc3RyaW5nIC0gMV0uZnJldCAmJiBjdXJyZW50SXRlcmF0aW9uLm5vdGVzW29sZEF1ZGlvLnN0cmluZyAtIDFdLmZyZXQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZEF1ZGlvLmF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50SXRlcihpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdWRpb3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZXJhdGlvbi5ub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGN1cnJlbnRJdGVyYXRpb24ubm90ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5mcmV0ICYmIG5vdGUuZnJldCA+PSAwICYmIG5vdGUuZnJldCA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC9ndWl0YXIvJHtub3RlLnN0cmluZ30tJHtub3RlLmZyZXR9Lm1wM2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvcy5wdXNoKHsgc3RyaW5nOiBub3RlLnN0cmluZywgYXVkaW86IGF1ZGlvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXVkaW8ucGxheSgpLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcihpbmRleCArIDEsIGF1ZGlvcyksXHJcbiAgICAgICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCwgcGFkZGluZ0xlZnQ6ICcyMHB4JywgbWF4V2lkdGg6ICcxMTAwcHgnLCBvdmVyZmxvd1g6ICdhdXRvJywgZm9udFNpemU6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdGFydFBsYXlUYWJ9IHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlBcnJvdyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdG9wfSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb2xcIiBzdHlsZT17eyBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5tYXAoKGl0ZXI6IElHdWl0YXJJdGVyYXRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1yb3dcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpfSBjbGFzc05hbWU9e2Bwcm9ncmVzcy1jb2wgJHtpdGVyLmlzUGxheWluZyA/ICcgcHJvZ3Jlc3MtY29sLWN1cnJlbnQnIDogJyd9YH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlci5ub3Rlcy5tYXAoKG5vdGUsIG5pKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4ICsgXCIgXCIgKyBuaX0gY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZU5vdGVTZWxlY3RlZChpbmRleCwgbmkpfT57bm90ZS5pc1NlbGVjdGVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17aW5kZXggKyBcIl9cIiArIG5pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJndWl0YXItbm90ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlQ3VycmVudE5vdGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB0aGlzLmNoYW5nZUl0ZXJOb3RlKGluZGV4LCBuaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD4gOiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2cHgnIH19Pntub3RlLmZyZXR9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUaW1lU2NhbGUoaW5kZXgpfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlci5pc1NlbGVjdGVkRm9yVFMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfdHNcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJndWl0YXItbm90ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnRUcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyVGltZVNjYWxlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnOXB4JywgZm9udFNpemU6ICcxOHB4JyB9fT57aXRlci50aW1lU2NhbGV9PC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1pbldpZHRoOiAnNTdweCcsIG1hcmdpblRvcDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5hZGRFbXB0eUZyYWdtZW50fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICctOTBweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZUxhc3RGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==