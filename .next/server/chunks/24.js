exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 54678:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 16969:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 55930));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 40408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56409));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98244))

/***/ }),

/***/ 98244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const AuthProvider = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);


/***/ }),

/***/ 56409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/navbar/navbar.module.css
var navbar_module = __webpack_require__(30041);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./src/components/DarkModeToggle/darkModeToggle.module.css
var darkModeToggle_module = __webpack_require__(82427);
var darkModeToggle_module_default = /*#__PURE__*/__webpack_require__.n(darkModeToggle_module);
// EXTERNAL MODULE: ./src/context/ThemeContext.js
var ThemeContext = __webpack_require__(55930);
;// CONCATENATED MODULE: ./src/components/DarkModeToggle/DarkModeToggle.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const DarkModeToggle = ()=>{
    const { toggle , mode  } = (0,react_.useContext)(ThemeContext.ThemeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (darkModeToggle_module_default()).container,
        onClick: toggle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).icon,
                children: "\uD83C\uDF19"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).icon,
                children: "\uD83D\uDD06"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).ball,
                style: mode === "light" ? {
                    left: "2px"
                } : {
                    right: "2px"
                }
            })
        ]
    });
};
/* harmony default export */ const DarkModeToggle_DarkModeToggle = (DarkModeToggle);

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
];
const Navbar = ()=>{
    const session = (0,react.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: (navbar_module_default()).logo,
                children: "CountZero"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DarkModeToggle_DarkModeToggle, {}),
                    links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.url,
                            className: (navbar_module_default()).link,
                            children: link.title
                        }, link.id)),
                    session.status === "authenticated" && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (navbar_module_default()).logout,
                        onClick: react.signOut,
                        children: "Logout"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);


/***/ }),

/***/ 55930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ThemeContext,ThemeProvider auto */ 

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ThemeProvider = ({ children  })=>{
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    const toggle = ()=>{
        setMode((prev)=>prev === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            toggle,
            mode
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `theme ${mode}`,
            children: children
        })
    });
};


/***/ }),

/***/ 82427:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "darkModeToggle_container__vksLH",
	"icon": "darkModeToggle_icon__aEY9H",
	"ball": "darkModeToggle_ball__fygnp"
};


/***/ }),

/***/ 16590:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__3MeST",
	"social": "footer_social__wfezv",
	"icon": "footer_icon__QNMi8"
};


/***/ }),

/***/ 30041:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__iE2vU",
	"logo": "navbar_logo__M4SlJ",
	"links": "navbar_links__FjYqR",
	"logout": "navbar_logout__Qyi_R"
};


/***/ }),

/***/ 17289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(90979);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/countzero/Next.js/nextjs-tutorial/Portfolio/src/components/navbar/Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(34212);
// EXTERNAL MODULE: ./src/components/footer/footer.module.css
var footer_module = __webpack_require__(16590);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(62208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/footer/Footer.jsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "\xa92024 CountZero. All rights reserved."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).social,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/1.png",
                        width: 15,
                        height: 15,
                        className: (footer_module_default()).icon,
                        alt: "CountZero Facebook Account"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/2.png",
                        width: 15,
                        height: 15,
                        className: (footer_module_default()).icon,
                        alt: "CountZero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/3.png",
                        width: 15,
                        height: 15,
                        className: (footer_module_default()).icon,
                        alt: "CountZero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/4.png",
                        width: 15,
                        height: 15,
                        className: (footer_module_default()).icon,
                        alt: "CountZero"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/context/ThemeContext.js

const ThemeContext_proxy = (0,module_proxy.createProxy)(String.raw`/home/countzero/Next.js/nextjs-tutorial/Portfolio/src/context/ThemeContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeContext_esModule, $$typeof: ThemeContext_$$typeof } = ThemeContext_proxy;
const ThemeContext_default_ = ThemeContext_proxy.default;

const e0 = ThemeContext_proxy["ThemeContext"];

const e1 = ThemeContext_proxy["ThemeProvider"];

;// CONCATENATED MODULE: ./src/components/AuthProvider/AuthProvider.jsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`/home/countzero/Next.js/nextjs-tutorial/Portfolio/src/components/AuthProvider/AuthProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.js







const metadata = {
    title: "Lama Dev",
    description: "This is the description"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;