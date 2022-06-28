import n from"react";import e,{css as t}from"styled-components";var r=function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)};function i(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t}function a(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var l,o,c,s,d,f,h,p,v,w,g,u,x,y,m,b,j,O,E={start:"flex-start",flexStart:"flex-start","flex-start":"flex-start",end:"flex-end",flexEnd:"flex-end","flex-end":"flex-end",center:"center",initial:"initial",inherit:"inherit"},P={base:"base-line",baseLine:"base-line","base-line":"base-line"},S=r(r({},E),{between:"space-between",spaceBetween:"space-between","space-between":"space-between",around:"space-around",spaceAround:"space-around","space-around":"space-around",evenly:"space-evenly",spaceEvenly:"space-evenly","space-evenly":"space-evenly"}),X=r(r(r({},E),P),{stretch:"stretch"}),k=r({},S),C=r(r({},S),{stretch:"stretch"}),N=r(r(r({},E),P),{stretch:"stretch",auto:"auto"});function I(w){var g,u,x,y,m,b,j=w.tagName,O=void 0===j?"div":j,E=w.width,P=w.height,S=w.inline,N=void 0!==S&&S,I=w.row,R=void 0!==I&&I,Y=w.column,A=void 0!==Y&&Y,B=w.reverse,L=void 0!==B&&B,q=w.wrap,z=void 0!==q&&q,D=w.wrapReverse,F=void 0!==D&&D,G=w.justifyContent,H=w.alignItems,J=w.alignContent,K=w.gap,M=w.centerX,Q=void 0!==M&&M,T=w.centerY,U=void 0!==T&&T,V=w.center,W=void 0!==V&&V,Z=i(w,["tagName","width","height","inline","row","column","reverse","wrap","wrapReverse","justifyContent","alignItems","alignContent","gap","centerX","centerY","center"]),$=(g=A?"column":R&&"row",u=F?"wrap-reverse":z&&"wrap",x=W||U,y=W||Q?"center":k[G],m=x?"center":X[H],b=C[J],e(O)(v||(v=a(["\n            display: ",";\n\n            ","\n\n            ","\n\n            // flex-directiton\n            ","\n\n            // flex-wrap\n            ","\n\n            // justify-content\n            ","\n            // align-items\n            ","\n            // align-content\n            ","\n\n            ","\n        "],["\n            display: ",";\n\n            ","\n\n            ","\n\n            // flex-directiton\n            ","\n\n            // flex-wrap\n            ","\n\n            // justify-content\n            ","\n            // align-items\n            ","\n            // align-content\n            ","\n\n            ","\n        "])),N?"inline-flex":"flex",E&&t(l||(l=a(["\n                    width: ",";\n                "],["\n                    width: ",";\n                "])),E),P&&t(o||(o=a(["\n                    height: ",";\n                "],["\n                    height: ",";\n                "])),P),g&&t(c||(c=a(["\n                    flex-direction: ",";\n                "],["\n                    flex-direction: ",";\n                "])),L?"".concat(g,"-reverse"):g),u&&t(s||(s=a(["\n                    flex-wrap: ",";\n                "],["\n                    flex-wrap: ",";\n                "])),u),y&&t(d||(d=a(["\n                    justify-content: ",";\n                "],["\n                    justify-content: ",";\n                "])),y),m&&t(f||(f=a(["\n                     align-items: ",";\n                "],["\n                     align-items: ",";\n                "])),m),b&&t(h||(h=a(["\n                     align-content: ",";\n                "],["\n                     align-content: ",";\n                "])),b),K&&t(p||(p=a(["\n                    gap: ",";\n                "],["\n                    gap: ",";\n                "])),K)));return n.createElement($,r({},Z),Z.children)}function R(l){var o,c,s=l.children,d=l.tagName,f=void 0===d?"div":d,h=l.width,p=l.height,v=l.flex,E=void 0!==v&&v,P=l.order,S=l.grow,X=l.shrink,k=l.basis,C=l.alignSelf,I=i(l,["children","tagName","width","height","flex","order","grow","shrink","basis","alignSelf"]),R=(o=!1!==E?!0===E?1:E:void 0,c=N[C],e(f)(O||(O=a(["\n            display: flex;\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n        "],["\n            display: flex;\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n\n            ","\n        "])),h&&t(w||(w=a(["\n                    width: ",";\n                "],["\n                    width: ",";\n                "])),h),p&&t(g||(g=a(["\n                    height: ",";\n                "],["\n                    height: ",";\n                "])),p),o&&t(u||(u=a(["\n                    flex: ",";\n                "],["\n                    flex: ",";\n                "])),o),P&&t(x||(x=a(["\n                    order: ",";\n                "],["\n                    order: ",";\n                "])),P),S&&t(y||(y=a(["\n                    flex-grow: ",";\n                "],["\n                    flex-grow: ",";\n                "])),S),X&&t(m||(m=a(["\n                    flex-shrink: ",";\n                "],["\n                    flex-shrink: ",";\n                "])),X),k&&t(b||(b=a(["\n                    flex-basis: ",";\n                "],["\n                    flex-basis: ",";\n                "])),k),c&&t(j||(j=a(["\n                    align-self: ",";\n                "],["\n                    align-self: ",";\n                "])),c)));return n.createElement(R,r({},I),s)}function Y(e){var t=e.center,a=void 0===t||t,l=i(e,["center"]);return n.createElement(I,r({},l,{center:a}))}function A(e){var t=e.center,a=void 0===t||t,l=e.width,o=void 0===l?"100%":l,c=i(e,["center","width"]);return n.createElement(I,r({},c,{center:a,width:o}),c.children)}function B(e){var t=e.center,a=void 0===t||t,l=e.width,o=void 0===l?"100%":l,c=e.height,s=void 0===c?"100%":c,d=i(e,["center","width","height"]);return n.createElement(I,r({},d,{center:a,width:o,height:s}),d.children)}function L(e){var t=e.centerX,a=void 0===t||t,l=e.width,o=void 0===l?"100%":l,c=i(e,["centerX","width"]);return n.createElement(I,r({},c,{centerX:a,width:o}),c.children)}export{Y as FlexCenter,A as FlexCenterW100p,B as FlexCenterWH100p,L as FlexCenterX100,I as FlexGroup,R as FlexItem};