var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/form-element/horizontal/example.jsx.js"]=function(e){function t(t){for(var a,r,i=t[0],d=t[1],u=t[2],s=0,p=[];s<i.length;s++)r=i[s],n[r]&&p.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,u||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],a=!0,i=1;i<l.length;i++){var d=l[i];0!==n[d]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},n={147:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},o=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=d;return o.push([229,0]),l()}({0:function(e,t){e.exports=React},229:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var a=s(l(0)),n=s(l(28)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(l(34)),r=l(7),i=l(9),d=l(31),u=l(18),c=l(14);function s(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createElement(n.default,{direction:"horizontal",snapshot:o.ObjectFieldTypesHorizontal,isViewMode:!0,hasInlineEdit:!0});t.states=[{id:"edit-horizontal",label:"Horizontal form layout - Edit Mode",element:a.default.createElement(n.default,{direction:"horizontal",snapshot:o.ObjectFieldTypesHorizontal})}],t.examples=[{id:"horizontal-single-column",label:"Horizontal form layout - 1 column - Read Only Mode",element:a.default.createElement(n.default,{direction:"horizontal",snapshot:o.ObjectFieldTypesSingleColumn,isViewMode:!0})},{id:"deprecated-view-horizontal",label:"Deprecated - Horizontal form layout - View Mode",element:a.default.createElement(n.default,{direction:"horizontal",snapshot:o.DeprecatedObjectFieldTypes,isViewMode:!0,hasInlineEdit:!0,isDeprecated:!0})},{id:"deprecated-edit-horizontal",label:"Deprecated - Horizontal form layout - Edit Mode",element:a.default.createElement(n.default,{direction:"horizontal",snapshot:o.DeprecatedObjectFieldTypes,isDeprecated:!0})},{id:"simple-horizontal",label:"Simple - Horizontal form layout",element:a.default.createElement("div",{className:"slds-form"},a.default.createElement(r.FormElement,{labelContent:"Text Input",inputId:"horizontal-input-id-01",isHorizontal:!0},a.default.createElement(i.Input,{id:"horizontal-input-id-01",placeholder:"Placeholder Text"})),a.default.createElement(r.FormElement,{labelContent:"Textarea Input",inputId:"horizontal-input-id-02",isHorizontal:!0},a.default.createElement(d.Textarea,{id:"horizontal-input-id-02",placeholder:"Placeholder Text"})),a.default.createElement(r.Fieldset,{label:"Checkbox Group label",isHorizontal:!0},a.default.createElement(c.Checkbox,{label:"All opportunities owned by you",name:"default"}),a.default.createElement(c.Checkbox,{label:"All contacts in the account owned by you",name:"default"})),a.default.createElement(r.Fieldset,{label:"Radio Group label",isHorizontal:!0},a.default.createElement(u.Radio,{label:"Lead Generation",name:"options"}),a.default.createElement(u.Radio,{label:"Education Leads",name:"options"})))}]}});