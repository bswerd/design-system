var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/visibility/example.jsx.js"]=function(e){function s(s){for(var a,n,d=s[0],o=s[1],h=s[2],c=0,m=[];c<d.length;c++)n=d[c],l[n]&&m.push(l[n][0]),l[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(r&&r(s);m.length;)m.shift()();return i.push.apply(i,h||[]),t()}function t(){for(var e,s=0;s<i.length;s++){for(var t=i[s],a=!0,d=1;d<t.length;d++){var o=t[d];0!==l[o]&&(a=!1)}a&&(i.splice(s--,1),e=n(n.s=t[0]))}return e}var a={},l={60:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},i=[];function n(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=d.push.bind(d);d.push=s,d=d.slice();for(var h=0;h<d.length;h++)s(d[h]);var r=o;return i.push([132,0]),t()}({0:function(e,s){e.exports=React},132:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(t(0));s.examples=[{id:"assistive-text",label:"Assistive Text",element:a.default.createElement("div",{className:"slds-assistive-text"},"I am hidden from sight"),description:"Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text."},{id:"collapsed-expanded",label:"Collapsed / Expanded",element:a.default.createElement("div",{className:"demo-only"},a.default.createElement("div",{className:"slds-is-collapsed"},a.default.createElement("h3",null,"I am collapsed"),a.default.createElement("p",null,"I am a child inside a collapsed element")),a.default.createElement("div",{className:"slds-is-expanded"},a.default.createElement("h3",null,"I am expanded"),a.default.createElement("p",null,"I am a child inside an expanded element"))),description:"The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state."},{id:"hidden-visible",label:"Hidden / Visible",element:a.default.createElement("div",{className:"demo-only"},a.default.createElement("div",{className:"slds-hidden"},"I am hidden"),a.default.createElement("div",{className:"slds-visible"},"I am visible")),description:"\nYou can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  `slds-hidden` class. To make it visible again, use the `slds-visible` class.\n\nNote that `.slds-hidden` and any of the `.slds-visible` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"hide-show",label:"Hide / Show",element:a.default.createElement("div",{className:"demo-only"},a.default.createElement("div",{className:"slds-hide"},"I am hidden"),a.default.createElement("div",{className:"slds-show"},"I am shown as a block"),a.default.createElement("div",{className:"slds-show_inline-block"},"I am shown as an inline-block")),description:"\nTo hide any type of element from view and from screen readers, use the `.slds-hide` class. Once hidden, you can display the content by using JavaScript to swap `.slds-hide` with `.slds-show`; This class will set the `display` property to `block`. If you need to display your hidden element as `inline` or `inline-block`, you can use the `.slds-show_inline` or `.slds-show_inline-block` classes, respectively.\n\nNote that `.slds-hide` and any of the `.slds-show-*` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"transition-hide-show",label:"Transition Hide / Show",element:a.default.createElement("div",{className:"demo-only"},a.default.createElement("div",{className:"slds-transition-hide"},"I have zero opacity"),a.default.createElement("div",{className:"slds-transition-show"},"I have 100% opacity")),description:"To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change."},{id:"responsive",label:"Responsive",element:a.default.createElement("div",{className:"demo-only demo-visibility"},a.default.createElement("div",{className:"slds-show_x-small"},"Hides on 319px and down"),a.default.createElement("div",{className:"slds-hide_x-small"},"Hides on 320px and up"),a.default.createElement("div",{className:"slds-show_small"},"Hides on 479px and down"),a.default.createElement("div",{className:"slds-hide_small"},"Hides on 480px and up"),a.default.createElement("div",{className:"slds-show_medium"},"Hides on 767px and down"),a.default.createElement("div",{className:"slds-hide_medium"},"Hides on 768px and up"),a.default.createElement("div",{className:"slds-show_large"},"Hides on 1023px and down"),a.default.createElement("div",{className:"slds-hide_large"},"Hides on 1024px and up"),a.default.createElement("div",{className:"slds-show_x-large"},"Hides on 1279px and down"),a.default.createElement("div",{className:"slds-hide_x-large"},"Hides on 1280px and up")),description:"\nResponsive visibility classes will hide content on specific breakpoints. `slds-show_[breakpoint]` renders `display: none` when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. `slds-hide_[breakpoint]` does the opposite by rendering `display: none` when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller.\n\n|Class Name|Less than 320px|X-Small (>= 320px)|Small (>= 480px)|Medium (>= 768px)|Large (>= 1024px)|X-Large (>= 1280px)|\n|---|---|---|---|---|---|---|\n|`.slds-hide_x-small`|Show|Hide|Hide|Hide|Hide|Hide|\n|`.slds-show_x-small`|Hide|Show|Show|Show|Show|Show|\n|`.slds-hide_small`|Show|Show|Hide|Hide|Hide|Hide|\n|`.slds-show_small`|Hide|Hide|Show|Show|Show|Show|\n|`.slds-hide_medium`|Show|Show|Show|Hide|Hide|Hide|\n|`.slds-show_medium`|Hide|Hide|Hide|Show|Show|Show|\n|`.slds-hide_large`|Show|Show|Show|Show|Hide|Hide|\n|`.slds-show_large`|Hide|Hide|Hide|Hide|Show|Show|\n|`.slds-hide_x-large`|Show|Show|Show|Show|Show|Hide|\n|`.slds-show_x-large`|Hide|Hide|Hide|Hide|Hide|Show|\n    "}]}});