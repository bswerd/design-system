var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/checkbox/form-element/example.jsx.js"]=function(e){function t(t){for(var n,a,i=t[0],d=t[1],c=t[2],s=0,m=[];s<i.length;s++)a=i[s],o[a]&&m.push(o[a][0]),o[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,c||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],n=!0,i=1;i<l.length;i++){var d=l[i];0!==o[d]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=l[0]))}return e}var n={},o={135:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},r=[];function a(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=n,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=d;return r.push([207,0]),l()}({0:function(e,t){e.exports=React},207:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),o=l(64),r=l(7),a=l(6);t.default=n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01"},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01"}));t.states=[{id:"checked",label:"Checked",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01"},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isChecked:!0}))},{id:"disabled",label:"Disabled",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01"},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isDisabled:!0}))},{id:"checked-disabled",label:"Checked and Disabled",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01"},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isChecked:!0,isDisabled:!0}))},{id:"error",label:"Error",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01",isRequired:!0,hasError:!0,errorId:"checkbox-error-01",inlineMessage:"This field is required"},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",errorId:"checkbox-error-01",isRequired:!0}))},{id:"required",label:"Required",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01",isRequired:!0},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isRequired:!0}))},{id:"view-mode-unchecked",label:"View mode - Unchecked",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",isViewMode:!0},n.default.createElement(a.UtilityIcon,{symbol:"steps",size:"x-small",useCurrentColor:!0,assistiveText:"False",title:"False"}))},{id:"view-mode-checked",label:"View mode - Checked",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",isViewMode:!0},n.default.createElement(a.UtilityIcon,{symbol:"check",size:"x-small",useCurrentColor:!0,assistiveText:"True",title:"True"}))}],t.examples=[{id:"help-text-icon",label:"Help text icon",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01",hasTooltip:!0},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01"}))},{id:"required-help-text-icon",label:"Required with Help text icon",element:n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01",isRequired:!0,hasTooltip:!0},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isRequired:!0}))},{id:"required-help-text-icon-tooltip",label:"Required with Help text icon, showing tooltip",element:n.default.createElement("div",{style:{paddingTop:"3rem"}},n.default.createElement(r.FormElement,{labelContent:"Form Element Label",inputId:"checkbox-id-01",isRequired:!0,hasTooltip:!0,showTooltip:!0},n.default.createElement(o.CheckboxStandalone,{id:"checkbox-id-01",isRequired:!0})))}]}});