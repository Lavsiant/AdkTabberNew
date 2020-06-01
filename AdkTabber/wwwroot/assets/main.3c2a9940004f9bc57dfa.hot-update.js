webpackHotUpdate("main",{

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
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "progress-col", style: { borderColor: 'transparent' } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "LH"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "RH"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "LF"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col" }, "RF")),
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, { key: index + " " + ni, className: "guitar-tab-col", select: true, label: '', style: {}, value: drum.drum, margin: "normal", variant: "outlined", onChange: function (e) { return _this.changeIterNote(index, ni, e); } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC2 }, " CC2 "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].BD }, " BD "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].xH }, " xH "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].S }, " S "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].MT }, " MT "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LT }, " LT "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].CC1 }, " CC1 "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, { value: _interfaces_tab__WEBPACK_IMPORTED_MODULE_4__["DrumType"].LFT }, " LFT ")))); }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "guitar-tab-col", onClick: function () { return _this.toggleTimeScale(index); }, style: { backgroundColor: 'lightgreen' } }, iter.isSelectedForTS ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { id: index + "_ts", type: "text", style: { fontSize: '18px' }, className: "guitar-note-input", onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return _this.onChangeCurrentTs(e); }, onBlur: function () { return _this.changeIterTimeScale(index); } }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { paddingTop: '9px', fontSize: '18px' } }, iter.timeScale)))); }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWIvZHJ1bVRhYkNyZWF0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUlBO0FBSTBCO0FBQ0Y7QUFHd0M7QUFFN0M7QUFDOEQ7QUFDbkU7QUFvQnhDO0lBQTJDLGlDQUE2QjtJQUlwRSx1QkFBWSxLQUFLO1FBQWpCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBUWY7UUFYRCxpQkFBVyxHQUFXLElBQUksQ0FBQztRQWEzQixVQUFJLEdBQUc7WUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLElBQUksR0FBbUI7b0JBQ3ZCLEtBQUssRUFBRSxFQUFFO29CQUNULFNBQVMsRUFBRSxDQUFDO2lCQUNmLENBQUM7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1osVUFBVSxFQUFFLEtBQUs7cUJBQ3BCLENBQUM7aUJBQ0w7Z0JBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDdkM7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBRUQsK0JBQXlCLEdBQUcsVUFBQyxLQUFLO1lBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFB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SSwyREFBQyw2REFBTyxPQUFHLENBQ1Q7b0JBQ04sMkRBQUMsNERBQUcsSUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjt3QkFDbkksMkRBQUMseURBQU0sT0FBRyxDQUNSLENBQ0osQ0FFSixDQUNKLENBQ1Q7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBdlUwQyw0Q0FBSyxDQUFDLFNBQVMsR0F1VXpEIiwiZmlsZSI6Im1haW4uM2MyYTk5NDAwMDRmOWJjNTdkZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IElTb25nLCB7IERpZmZpY3VsdHlUeXBlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zb25nJztcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwcERpc3BhdGNoJztcclxuaW1wb3J0IElVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSVVzZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IHsgc29uZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb25nU2VydmljZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgSVRhYiwgeyBUYWJUeXBlLCBJRHJ1bUl0ZXJhdGlvbiwgSURydW1Ob3RlLCBEcnVtVHlwZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdGFiJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IHsgUGxheUNpcmNsZUZpbGxlZCwgU3RvcCwgUGxheUFycm93LCBIaWdobGlnaHRPZmYsIFJlbW92ZUNpcmNsZSwgUmVtb3ZlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICB0ZW1wbzogbnVtYmVyO1xyXG4gICAgdGFiVXBkYXRlOiAodGFiKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB0YWI6IElUYWI7XHJcbiAgICBsZWZ0PzogbnVtYmVyO1xyXG4gICAgdG9wPzogbnVtYmVyO1xyXG4gICAgY3VycmVudE5vdGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRUaW1lU2NhbGVWYWx1ZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRJdGVySW5kZXg6IG51bWJlcjtcclxuICAgIGlzU3RvcFJlcXVlc3RlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERydW1UYWJDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPntcclxuICAgIGZyZXRTZWxlY3Rpb246IGFueTtcclxuICAgIGRlZmF1bHRXYWl0OiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhYjogcHJvcHMudGFiLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiAwLFxyXG4gICAgICAgICAgICBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgZHJ1bXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDwgNzsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyLmRydW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMucHVzaChpdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zWzBdLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYjogcHJvcHMudGFiIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy50YWIuaXRlcmF0aW9ucyB8fCAhcHJvcHMudGFiLml0ZXJhdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVtcHR5RnJhZ21lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlcjogSURydW1JdGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBkcnVtczogW10sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA3OyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXIuZHJ1bXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0aW9ucy5wdXNoKGl0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wcm9wcy50YWJVcGRhdGUodGhpcy5zdGF0ZS50YWIpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGFzdEZyYWdtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnMubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5vdGVTZWxlY3RlZCA9IChpdGVySW5kZXgsIG5vdGVJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSURydW1JdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3Qgbm90ZTogSURydW1Ob3RlID0gaXRlci5kcnVtc1tub3RlSW5kZXhdO1xyXG4gICAgICAgIG5vdGUuaXNTZWxlY3RlZCA9ICFub3RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKG5vdGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZXJJbmRleCArIFwiX1wiICsgbm90ZUluZGV4KS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaW1lU2NhbGUgPSAoaXRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVyYXRpb25zIH0gPSB0aGlzLnN0YXRlLnRhYjtcclxuICAgICAgICBjb25zdCBpdGVyOiBJRHJ1bUl0ZXJhdGlvbiA9IGl0ZXJhdGlvbnNbaXRlckluZGV4XTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9ICFpdGVyLmlzU2VsZWN0ZWRGb3JUUztcclxuICAgICAgICBpZiAoaXRlci5pc1NlbGVjdGVkRm9yVFMpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVySW5kZXggKyBcIl90c1wiKS5mb2N1cygpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUN1cnJlbnRUcyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERydW1UeXBlQnlOdW1iZXIgPSAobnVtKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gRHJ1bVR5cGUuQ0MyO1xyXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBEcnVtVHlwZS5CRDtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gRHJ1bVR5cGUueEg7XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIERydW1UeXBlLlM7XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIERydW1UeXBlLk1UO1xyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBEcnVtVHlwZS5MVDtcclxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gRHJ1bVR5cGUuQ0MxO1xyXG4gICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gRHJ1bVR5cGUuTEZUO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlck5vdGUgPSAoaXRlckluZGV4LCBkcnVtSW5kZXgsIGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGRydW06IElEcnVtTm90ZSA9IGl0ZXIuZHJ1bXNbZHJ1bUluZGV4XTtcclxuXHJcbiAgICAgICAgZHJ1bS5kcnVtID0gdGhpcy5nZXREcnVtVHlwZUJ5TnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBkcnVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFiOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRhYixcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVudE5vdGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0sICgpID0+IHRoaXMucHJvcHMudGFiVXBkYXRlKHRoaXMuc3RhdGUudGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSXRlclRpbWVTY2FsZSA9IChpdGVySW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGl0ZXJhdGlvbnMgfSA9IHRoaXMuc3RhdGUudGFiO1xyXG4gICAgICAgIGNvbnN0IGl0ZXI6IElEcnVtSXRlcmF0aW9uID0gaXRlcmF0aW9uc1tpdGVySW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZVNjYWxlVmFsdWU7XHJcbiAgICAgICAgdGltZVNjYWxlID0gdGltZVNjYWxlIDwgMC4yNSA/IDAuMjUgOiB0aW1lU2NhbGUgPiAyID8gMiA6IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICBpdGVyLmlzU2VsZWN0ZWRGb3JUUyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWI6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFiLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZVNjYWxlVmFsdWU6IG51bGxcclxuICAgICAgICB9LCAoKSA9PiB0aGlzLnByb3BzLnRhYlVwZGF0ZSh0aGlzLnN0YXRlLnRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUN1cnJlbnRJdGVyID0gKGl0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlcmF0aW9ucyB9ID0gdGhpcy5zdGF0ZS50YWI7XHJcbiAgICAgICAgY29uc3QgaXRlcjogSURydW1JdGVyYXRpb24gPSBpdGVyYXRpb25zW2l0ZXJJbmRleF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVyYXRpb25zW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50YWIsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBpdGVyYXRpb25zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlckluZGV4OiBpdGVySW5kZXgsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRQbGF5VGFiID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggPCB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbjogSURydW1JdGVyYXRpb24gPSB0aGlzLnN0YXRlLnRhYi5pdGVyYXRpb25zW3RoaXMuc3RhdGUuY3VycmVudEl0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlcmF0aW9uLmRydW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gY3VycmVudEl0ZXJhdGlvbi5kcnVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChub3RlLmRydW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgL2RydW1zLyR7RHJ1bVR5cGVbbm90ZS5kcnVtXX0uYWlmYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLnB1c2goeyBkcnVtOiBub3RlLmRydW0sIGF1ZGlvOiBhdWRpbyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcih0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXggKyAxLCBhdWRpb3MpLFxyXG4gICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJdGVyID0gKGluZGV4LCBvbGRBdWRpb3MpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTdG9wUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVyYXRpb246IElEcnVtSXRlcmF0aW9uID0gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkQXVkaW9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRBdWRpbyA9IG9sZEF1ZGlvc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlcmF0aW9uLmRydW1zLnNvbWUoeCA9PiB4LmRydW0gPT0gb2xkQXVkaW8uZHJ1bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRBdWRpby5hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudEl0ZXIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXVkaW9zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVyYXRpb24uZHJ1bXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBjdXJyZW50SXRlcmF0aW9uLmRydW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuZHJ1bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAvZHJ1bXMvJHtEcnVtVHlwZVtub3RlLmRydW1dfS5haWZgKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb3MucHVzaCh7IGRydW06IG5vdGUuZHJ1bSwgYXVkaW86IGF1ZGlvIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXVkaW8ucGxheSgpLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlckluZGV4IDwgdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5SXRlcihpbmRleCArIDEsIGF1ZGlvcyksXHJcbiAgICAgICAgICAgICAgICAgICAgKCg2MCAvIHRoaXMucHJvcHMudGVtcG8pIC8gdGhpcy5zdGF0ZS50YWIuaXRlcmF0aW9uc1t0aGlzLnN0YXRlLmN1cnJlbnRJdGVySW5kZXhdLnRpbWVTY2FsZSkgKiAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N0b3BSZXF1ZXN0ZWQ6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCwgcGFkZGluZ0xlZnQ6ICcyMHB4JywgbWF4V2lkdGg6ICcxMTAwcHgnLCBvdmVyZmxvd1g6ICdhdXRvJywgZm9udFNpemU6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdGFydFBsYXlUYWJ9IHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzQ1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlBcnJvdyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgb25DbGljaz17dGhpcy5zdG9wfSBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NXB4JywgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb2xcIiBzdHlsZT17eyBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPkxIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3VpdGFyLXRhYi1jb2xcIj5SSDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCI+TEY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiPlJGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFiLml0ZXJhdGlvbnMubWFwKChpdGVyOiBJRHJ1bUl0ZXJhdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJndWl0YXItdGFiLXJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDdXJyZW50SXRlcihpbmRleCl9IGNsYXNzTmFtZT17YHByb2dyZXNzLWNvbCAke2l0ZXIuaXNQbGF5aW5nID8gJyBwcm9ncmVzcy1jb2wtY3VycmVudCcgOiAnJ31gfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVyLmRydW1zLm1hcCgoZHJ1bSwgbmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGtleT17aW5kZXggKyBcIiBcIiArIG5pfSBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTm90ZVNlbGVjdGVkKGluZGV4LCBuaSl9PntkcnVtLmlzU2VsZWN0ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGlucHV0IGlkPXtpbmRleCArIFwiX1wiICsgbml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd1aXRhci1ub3RlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VDdXJyZW50Tm90ZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHRoaXMuY2hhbmdlSXRlck5vdGUoaW5kZXgsIG5pKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2lucHV0PiA6IDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzZweCcgfX0+e2RydW0uZnJldH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGtleT17aW5kZXggKyBcIiBcIiArIG5pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJndWl0YXItdGFiLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RydW0uZHJ1bX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZUl0ZXJOb3RlKGluZGV4LCBuaSwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLkNDMn0+IENDMiA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLkJEfT4gQkQgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS54SH0+IHhIIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuU30+IFMgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtEcnVtVHlwZS5NVH0+IE1UIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17RHJ1bVR5cGUuTFR9PiBMVCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLkNDMX0+IENDMSA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e0RydW1UeXBlLkxGVH0+IExGVCA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aXRhci10YWItY29sXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUaW1lU2NhbGUoaW5kZXgpfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlci5pc1NlbGVjdGVkRm9yVFMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2luZGV4ICsgXCJfdHNcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJndWl0YXItbm90ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUN1cnJlbnRUcyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gdGhpcy5jaGFuZ2VJdGVyVGltZVNjYWxlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnOXB4JywgZm9udFNpemU6ICcxOHB4JyB9fT57aXRlci50aW1lU2NhbGV9PC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1pbldpZHRoOiAnNTdweCcsIG1hcmdpblRvcDogJzE1cHgnLCBtYXJnaW5MZWZ0OiAnMTVweCcgfX0gb25DbGljaz17dGhpcy5hZGRFbXB0eUZyYWdtZW50fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyBtaW5XaWR0aDogJzU3cHgnLCBtYXJnaW5Ub3A6ICctOTBweCcsIG1hcmdpbkxlZnQ6ICcxNXB4JyB9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZUxhc3RGcmFnbWVudH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==