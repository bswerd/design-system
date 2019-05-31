var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/file-selector/integrated/example.jsx.js"]=function(e){function t(t){for(var a,o,s=t[0],n=t[1],d=t[2],c=0,m=[];c<s.length;c++)o=s[c],l[o]&&m.push(l[o][0]),l[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var n=i[s];0!==l[n]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},l={14:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],n=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=n;return r.push([87,0]),i()}({0:function(e,t){e.exports=React},87:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var a=o(i(0)),l=o(i(4)),r=o(i(1));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return a.default.createElement("div",{className:(0,r.default)("slds-file-selector slds-file-selector_integrated",e.className)},a.default.createElement("div",{className:(0,r.default)("slds-file-selector__dropzone slds-file-selector__dropzone_integrated",e.drag?"slds-has-drag":null,e.dragover?"slds-has-drag-over":null),"aria-hidden":"true"},a.default.createElement("input",{className:"slds-file-selector__input slds-assistive-text",accept:"image/png",type:"file",id:"file-upload-input-01",disabled:e.dragoverError,tabIndex:"-1"}),a.default.createElement("label",{className:"slds-file-selector__body slds-file-selector__body_integrated",htmlFor:"file-upload-input-01"},e.dragoverError?a.default.createElement(l.default,{className:"slds-file-selector__body-icon slds-icon slds-icon-text-default",sprite:"utility",symbol:"error"}):a.default.createElement(l.default,{className:"slds-file-selector__body-icon slds-icon slds-icon-text-default",sprite:"utility",symbol:"upload"}),a.default.createElement("span",{className:"slds-file-selector__text slds-file-selector__text_integrated slds-text-heading_medium slds-text-align_center"},e.dragoverError?"Too many files selected. Attach up to 1 file.":"Drop Files"))),e.children)};t.default=a.default.createElement("div",{className:"demo-only",style:{width:"320px",height:"320px"}},a.default.createElement(s,{className:"slds-file-selector_integrated"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));t.states=[{id:"integrated-file-selector-drag",label:"Drag",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px",height:"320px"}},a.default.createElement(s,{className:"slds-file-selector_integrated",drag:!0},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},{id:"integrated-file-selector-dragover",label:"Dragover",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px",height:"320px"}},a.default.createElement(s,{className:"slds-file-selector_integrated",drag:!0,dragover:!0},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},{id:"integrated-file-selector-dragover-error",label:"Dragover with error",element:a.default.createElement("div",{className:"demo-only",style:{width:"320px",height:"320px"}},a.default.createElement(s,{className:"slds-file-selector_integrated",drag:!0,dragoverError:!0,error:!0},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}]}});