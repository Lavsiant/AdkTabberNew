webpackHotUpdate("main",{

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authActions */ "./src/components/auth/authActions.ts");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9__);
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










var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.handleToggle = function () {
            _this.setState(function (state) { return ({ open: !state.open }); });
        };
        _this.handleClose = function (event) {
            _this.setState({ open: false });
        };
        _this.handleLogOut = function () {
            _this.props.logout();
            _this.setState({
                loggedIn: false
            });
        };
        _this.state = {
            value: 0,
            loggedIn: false,
            header: 'Songs',
            open: false
        };
        return _this;
    }
    Header.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flexGrow: 1 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, { position: "static" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'login'; }, color: "inherit" }, "Songs"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'login'; }, color: "inherit" }, "Create own tabs"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'login'; }, color: "inherit" }, "Tutorial"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'login'; }, color: "inherit" }, "About"),
                        this.props.user ?
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { right: '15px', position: 'absolute' } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: this.handleLogOut, color: "inherit" }, "Logout"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, { "aria-owns": open ? 'menu-appbar' : undefined, "aria-haspopup": "true", onClick: function () { window.location.href = 'profile'; _this.setState({ header: 'Profile' }); }, color: "inherit" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9___default.a, null)))
                            :
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'login'; }, color: "inherit" }, "Login"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, { onClick: function () { window.location.href = 'signup'; }, color: "inherit" }, "Register")))))));
    };
    return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var mapProps = function (state) {
    return {
        error: state.authReducer.error,
        user: state.authReducer.user
    };
};
var mapDispatch = function (dispatch) { return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    getCurrentUser: _auth_authActions__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"].action,
    logout: _auth_authActions__WEBPACK_IMPORTED_MODULE_3__["logout"].action,
    push: connected_react_router__WEBPACK_IMPORTED_MODULE_5__["push"]
}, dispatch); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapProps, mapDispatch)(Header));


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ087QUFFZ0I7QUFDTztBQUdmO0FBRUQ7QUFJRztBQUVGO0FBQ1E7QUFLTztBQW9CN0Q7SUFBcUIsMEJBQW1DO0lBQ3BELGdCQUFZLEtBQUs7UUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FPZjtRQUVELGtCQUFZLEdBQUc7WUFDWCxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQUssSUFBSSxRQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUM7UUFFRixpQkFBVyxHQUFHLGVBQUs7WUFFZixLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUYsa0JBQVksR0FBRztZQUNYLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixRQUFRLEVBQUUsS0FBSzthQUNsQixDQUFDO1FBQ04sQ0FBQztRQXRCRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLEtBQUs7U0FDZDs7SUFDTCxDQUFDO0lBa0JELHVCQUFNLEdBQU47UUFBQSxpQkFzQ0M7UUFwQ0csT0FBTyxDQUNIO1lBRUksNkRBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDdkIsb0RBQUMsK0RBQU0sSUFBQyxRQUFRLEVBQUMsUUFBUTtvQkFDckIsb0RBQUMsZ0VBQU87d0JBQ0osb0RBQUMsK0RBQU0sSUFBQyxPQUFPLEVBQUUsY0FBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxTQUFTLFlBQWU7d0JBQ3pGLG9EQUFDLCtEQUFNLElBQUMsT0FBTyxFQUFFLGNBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsU0FBUyxzQkFBeUI7d0JBQ25HLG9EQUFDLCtEQUFNLElBQUMsT0FBTyxFQUFFLGNBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsU0FBUyxlQUFrQjt3QkFDNUYsb0RBQUMsK0RBQU0sSUFBQyxPQUFPLEVBQUUsY0FBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxTQUFTLFlBQWU7d0JBRXhGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ2QsNkRBQUssS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO2dDQUM3QyxvREFBQywrREFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxTQUFTLGFBQWdCO2dDQUNuRSxvREFBQyxtRUFBVSxpQkFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxtQkFDN0IsTUFBTSxFQUNwQixPQUFPLEVBQUUsY0FBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUN6RixLQUFLLEVBQUMsU0FBUztvQ0FFZixvREFBQyx1RUFBYSxPQUFHLENBQ1IsQ0FDWDs0QkFFTixDQUFDO2dDQUNEO29DQUNJLG9EQUFDLCtEQUFNLElBQUMsT0FBTyxFQUFFLGNBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsU0FBUyxZQUFlO29DQUN6RixvREFBQywrREFBTSxJQUFDLE9BQU8sRUFBRSxjQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFNBQVMsZUFBa0IsQ0FDM0YsQ0FHSixDQUNMLENBQ1AsQ0FDRCxDQUNaLENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0FsRW9CLCtDQUFlLEdBa0VuQztBQUVELElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBVTtJQUN4QixPQUFPO1FBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSztRQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO0tBQy9CO0FBQ0wsQ0FBQztBQUVELElBQU0sV0FBVyxHQUFHLFVBQUMsUUFBYSxJQUFLLHVFQUFrQixDQUNyRDtJQUNJLGNBQWMsRUFBRSxnRUFBYyxDQUFDLE1BQU07SUFDckMsTUFBTSxFQUFFLHdEQUFNLENBQUMsTUFBTTtJQUNyQixJQUFJLEVBQUUsMkRBQUk7Q0FFYixFQUNELFFBQVEsQ0FBQyxFQVAwQixDQU8xQixDQUFDO0FBRUMsMEhBQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMiLCJmaWxlIjoibWFpbi5hNTVmNWQ2NWUxMWNjYzQ4NzBiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IElVc2VyIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSVVzZXInO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMsIEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIsIGxvZ291dCB9IGZyb20gJy4uL2F1dGgvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJcIjtcclxuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcidcclxuXHJcblxyXG5cclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5cclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcclxuaW1wb3J0IEdyb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3Jvdyc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICAgIHVzZXI6IElVc2VyXHJcbiAgICBlcnJvcjogc3RyaW5nXHJcbiAgICBnZXRDdXJyZW50VXNlcigpOiBhbnlcclxuICAgIGxvZ291dCgpOiBhbnlcclxuICAgIHB1c2gocGF0aDogc3RyaW5nKTogYW55XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB2YWx1ZTogbnVtYmVyXHJcbiAgICBsb2dnZWRJbjogYm9vbGVhblxyXG4gICAgaGVhZGVyOiBzdHJpbmdcclxuICAgIG9wZW46IGJvb2xlYW5cclxufVxyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEhlYWRlclByb3BzLCBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIGxvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgaGVhZGVyOiAnU29uZ3MnLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoeyBvcGVuOiAhc3RhdGUub3BlbiB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsb3NlID0gZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUxvZ091dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2dnZWRJbjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnbG9naW4nIH19IGNvbG9yPVwiaW5oZXJpdFwiPlNvbmdzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnbG9naW4nIH19IGNvbG9yPVwiaW5oZXJpdFwiPkNyZWF0ZSBvd24gdGFiczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2xvZ2luJyB9fSBjb2xvcj1cImluaGVyaXRcIj5UdXRvcmlhbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2xvZ2luJyB9fSBjb2xvcj1cImluaGVyaXRcIj5BYm91dDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tyaWdodDogJzE1cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nT3V0fSBjb2xvcj1cImluaGVyaXRcIj5Mb2dvdXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtb3ducz17b3BlbiA/ICdtZW51LWFwcGJhcicgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3Byb2ZpbGUnOyB0aGlzLnNldFN0YXRlKHsgaGVhZGVyOiAnUHJvZmlsZScgfSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdsb2dpbicgfX0gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3NpZ251cCcgfX0gY29sb3I9XCJpbmhlcml0XCI+UmVnaXN0ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBQcm9wcyA9IChzdGF0ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yOiBzdGF0ZS5hdXRoUmVkdWNlci5lcnJvcixcclxuICAgICAgICB1c2VyOiBzdGF0ZS5hdXRoUmVkdWNlci51c2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gKGRpc3BhdGNoOiBhbnkpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhcclxuICAgIHtcclxuICAgICAgICBnZXRDdXJyZW50VXNlcjogZ2V0Q3VycmVudFVzZXIuYWN0aW9uLFxyXG4gICAgICAgIGxvZ291dDogbG9nb3V0LmFjdGlvbixcclxuICAgICAgICBwdXNoOiBwdXNoXHJcblxyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMsIG1hcERpc3BhdGNoKShIZWFkZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=