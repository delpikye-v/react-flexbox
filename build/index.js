!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).ReactFlexBox={},e.React,e.styled)}(this,(function(e,n,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(n),a=r(t),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)};function c(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}function s(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var o,d,f,h,u,p,v,g,w,x,y,b,m,j,O,E,C,F,P={start:"flex-start",flexStart:"flex-start","flex-start":"flex-start",end:"flex-end",flexEnd:"flex-end","flex-end":"flex-end",center:"center",initial:"initial",inherit:"inherit"},X={base:"base-line",baseLine:"base-line","base-line":"base-line"},S=l(l({},P),{between:"space-between",spaceBetween:"space-between","space-between":"space-between",around:"space-around",spaceAround:"space-around","space-around":"space-around",evenly:"space-evenly",spaceEvenly:"space-evenly","space-evenly":"space-evenly"}),k=l(l(l({},P),X),{stretch:"stretch"}),I=l({},S),N=l(l({},S),{stretch:"stretch"}),R=l(l(l({},P),X),{stretch:"stretch",auto:"auto"});function q(e){var n,r,x,y,b,m,j=e.tagName,O=void 0===j?"div":j,E=e.width,C=e.height,F=e.inline,P=void 0!==F&&F,X=e.row,S=void 0!==X&&X,R=e.column,q=void 0!==R&&R,B=e.reverse,T=void 0!==B&&B,W=e.wrap,Y=void 0!==W&&W,_=e.wrapReverse,A=void 0!==_&&_,G=e.justifyContent,H=e.alignItems,L=e.alignContent,M=e.gap,z=e.centerX,D=void 0!==z&&z,J=e.centerY,K=void 0!==J&&J,Q=e.center,U=void 0!==Q&&Q,V=c(e,["tagName","width","height","inline","row","column","reverse","wrap","wrapReverse","justifyContent","alignItems","alignContent","gap","centerX","centerY","center"]),Z=(n=q?"column":S&&"row",r=A?"wrap-reverse":Y&&"wrap",x=U||K,y=U||D?"center":I[G],b=x?"center":k[H],m=N[L],a.default(O)(w||(w=s(["\n            display: ",";\n\n            ","\n\n            ","\n\n            // flex-directiton\n            ","\n\n            // flex-wrap\n            ","\n\n            // justify-content\n            ","\n            // align-items\n            ","\n            // align-content\n            ","\n\n            ","\n        "],["\n            display: ",";\n\n            ","\n\n            ","\n\n            // flex-directiton\n            ","\n\n            // flex-wrap\n            ","\n\n            // justify-content\n            ","\n            // align-items\n            ","\n            // align-content\n            ","\n\n            ","\n        "])),P?"inline-flex":"flex",E&&t.css(o||(o=s(["\n                    width: ",";\n                "],["\n                    width: ",";\n                "])),E),C&&t.css(d||(d=s(["\n                    height: ",";\n                "],["\n                    height: ",";\n                "])),C),n&&t.css(f||(f=s(["\n                    flex-direction: ",";\n                "],["\n                    flex-direction: ",";\n                "])),T?"".concat(n,"-reverse"):n),r&&t.css(h||(h=s(["\n                    flex-wrap: ",";\n                "],["\n                    flex-wrap: ",";\n                "])),r),y&&t.css(u||(u=s(["\n                    justify-content: ",";\n                "],["\n                    justify-content: ",";\n                "])),y),b&&t.css(p||(p=s(["\n                     align-items: ",";\n                "],["\n                     align-items: ",";\n                "])),b),m&&t.css(v||(v=s(["\n                     align-content: ",";\n                "],["\n                     align-content: ",";\n                "])),m),M&&t.css(g||(g=s(["\n                    gap: ",";\n                "],["\n                    gap: ",";\n                "])),M)));return i.default.createElement(Z,l({},V),V.children)}e.FlexCenter=function(e){var n=e.center,t=void 0===n||n,r=c(e,["center"]);return i.default.createElement(q,l({},r,{center:t}))},e.FlexCenterW100p=function(e){var n=e.center,t=void 0===n||n,r=e.width,a=void 0===r?"100%":r,s=c(e,["center","width"]);return i.default.createElement(q,l({},s,{center:t,width:a}),s.children)},e.FlexCenterWH100p=function(e){var n=e.center,t=void 0===n||n,r=e.width,a=void 0===r?"100%":r,s=e.height,o=void 0===s?"100%":s,d=c(e,["center","width","height"]);return i.default.createElement(q,l({},d,{center:t,width:a,height:o}),d.children)},e.FlexCenterX100=function(e){var n=e.centerX,t=void 0===n||n,r=e.width,a=void 0===r?"100%":r,s=c(e,["centerX","width"]);return i.default.createElement(q,l({},s,{centerX:t,width:a}),s.children)},e.FlexGroup=q,e.FlexItem=function(e){var n,r,o=e.children,d=e.tagName,f=void 0===d?"div":d,h=e.width,u=e.height,p=e.flex,v=void 0!==p&&p,g=e.order,w=e.grow,P=e.shrink,X=e.basis,S=e.alignSelf,k=c(e,["children","tagName","width","height","flex","order","grow","shrink","basis","alignSelf"]),I=(n=!1!==v?!0===v?1:v:void 0,r=R[S],a.default(f)(F||(F=s(["\n            display: flex;\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n        "],["\n            display: flex;\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n        "])),h&&t.css(x||(x=s(["\n                    width: ",";\n                "],["\n                    width: ",";\n                "])),h),u&&t.css(y||(y=s(["\n                    height: ",";\n                "],["\n                    height: ",";\n                "])),u),n&&t.css(b||(b=s(["\n                    flex: ",";\n                "],["\n                    flex: ",";\n                "])),n),g&&t.css(m||(m=s(["\n                    order: ",";\n                "],["\n                    order: ",";\n                "])),g),w&&t.css(j||(j=s(["\n                    flex-grow: ",";\n                "],["\n                    flex-grow: ",";\n                "])),w),P&&t.css(O||(O=s(["\n                    flex-shrink: ",";\n                "],["\n                    flex-shrink: ",";\n                "])),P),X&&t.css(E||(E=s(["\n                    flex-basis: ",";\n                "],["\n                    flex-basis: ",";\n                "])),X),r&&t.css(C||(C=s(["\n                    align-self: ",";\n                "],["\n                    align-self: ",";\n                "])),r)));return i.default.createElement(I,l({},k),o)},Object.defineProperty(e,"__esModule",{value:!0})}));
