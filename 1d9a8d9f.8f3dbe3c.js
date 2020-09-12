(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(202)),c={title:"useRecoilState(state)",sidebar_label:"useRecoilState()"},i={id:"api-reference/core/useRecoilState",title:"useRecoilState(state)",description:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f state \u7684\u503c\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a setter \u51fd\u6570\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u4f1a\u66f4\u65b0\u4e3a\u7ed9\u5b9a state \u7684\u503c\u3002",source:"@site/docs/api-reference/core/useRecoilState.md",permalink:"/docs/api-reference/core/useRecoilState",editUrl:"https://github.com/docschina/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilState.md",sidebar_label:"useRecoilState()",sidebar:"someSidebar",previous:{title:"isRecoilValue(value)",permalink:"/docs/api-reference/core/isRecoilValue"},next:{title:"useRecoilValue(state)",permalink:"/docs/api-reference/core/useRecoilValue"}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f state \u7684\u503c\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a setter \u51fd\u6570\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u4f1a\u66f4\u65b0\u4e3a\u7ed9\u5b9a state \u7684\u503c\u3002"),Object(o.b)("p",null,"\u4f7f\u7528\u6b64 hook \u4f1a\u4f7f\u7ec4\u4ef6\u9690\u5f0f\u5730\u8ba2\u9605\u7ed9\u5b9a\u7684 state\u3002"),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function useRecoilState<T>(state: RecoilState<T>): [T, SetterOrUpdater<T>];\n\ntype SetterOrUpdater<T> = (T | (T => T)) => void;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": \u4e00\u4e2a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/atom"}),Object(o.b)("inlineCode",{parentName:"a"},"atom"))," \u6216\u4e00\u4e2a ",Object(o.b)("em",{parentName:"li"},"\u53ef\u5199")," \u7684 ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(o.b)("inlineCode",{parentName:"a"},"selector")),"\u3002\u53ef\u5199\u7684 selector \u5728\u5176\u5b9a\u4e49\u7684\u540c\u65f6\u5177\u6709 ",Object(o.b)("inlineCode",{parentName:"li"},"get")," \u548c ",Object(o.b)("inlineCode",{parentName:"li"},"set")," \u51fd\u6570\uff0c\u800c\u53ea\u8bfb selector \u53ea\u6709\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"li"},"get"),"\u3002")),Object(o.b)("p",null,"This API is similar to the React ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usestate"}),Object(o.b)("inlineCode",{parentName:"a"},"useState()"))," hook except it takes a Recoil state instead of a default value as an argument.  It returns a tuple of the current value of the state and a setter function.  The setter function may either take a new value as an argument or an updater function which receives the previous value as a parameter."),Object(o.b)("hr",null),Object(o.b)("p",null,"\u5f53\u7ec4\u4ef6\u540c\u65f6\u9700\u8981\u8bfb\u5199\u72b6\u6001\u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u8be5 hook\u3002"),Object(o.b)("p",null,"Using this hook in a React component will subscribe the component to re-render when the state is updated.  This hook may throw if the state has an error or is pending asynchronous resolution.  Please see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/asynchronous-data-queries"}),"this guide"),"."),Object(o.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelcius = selector({\n  key: 'tempCelcius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelcius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelcius);\n\n  const addTenCelcius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celcius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelcius}>Add 10 Celcius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);