(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(0),r(202)),c={title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},i={id:"api-reference/core/isRecoilValue",title:"isRecoilValue(value)",description:"\u5982\u679c `value` \u662f\u4e00\u4e2a atom \u6216\u8005 selector \u5219\u8fd4\u56de `true`\uff0c\u53cd\u4e4b\uff0c\u8fd4\u56de `false`\u3002",source:"@site/docs/api-reference/core/isRecoilValue.md",permalink:"/docs/api-reference/core/isRecoilValue",editUrl:"https://github.com/docschina/Recoil/edit/docs/docs/docs/api-reference/core/isRecoilValue.md",sidebar_label:"isRecoilValue()",sidebar:"someSidebar",previous:{title:"class Loadable",permalink:"/docs/api-reference/core/Loadable"},next:{title:"useRecoilState(state)",permalink:"/docs/api-reference/core/useRecoilState"}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"value")," \u662f\u4e00\u4e2a atom \u6216\u8005 selector \u5219\u8fd4\u56de ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u53cd\u4e4b\uff0c\u8fd4\u56de ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function isRecoilValue(value: mixed): boolean\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, isRecoilValue} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nconst strCounter = selector({\n  key: 'myCounterStr',\n  get: ({get}) => String(get(counter)),\n});\n\nisRecoilValue(counter); // true\nisRecoilValue(strCounter); // true\n\nisRecoilValue(5); // false\nisRecoilValue({}); // false\n")))}s.isMDXComponent=!0},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,i({ref:t},u,{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);