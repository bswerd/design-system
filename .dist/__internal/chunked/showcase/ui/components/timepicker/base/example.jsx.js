var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/timepicker/base/example.jsx.js"]=function(e){function t(t){for(var i,a,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)a=u[d],n[a]&&p.push(n[a][0]),n[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(r&&r(t);p.length;)p.shift()();return o.push.apply(o,c||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],i=!0,u=1;u<l.length;u++){var s=l[u];0!==n[s]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=l[0]))}return e}var i={},n={175:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},o=[];function a(t){if(i[t])return i[t].exports;var l=i[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=i,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var r=s;return o.push([262,0]),l()}({0:function(e,t){e.exports=React},262:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),n=l(16);var o=function(e){return i.default.createElement(n.Listbox,{listboxClassName:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-01",title:"6:00am",focused:e.optionFocused})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-02",title:"7:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-04",title:"9:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-05",title:"10:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-06",title:"11:00am"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-07",title:"12:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-08",title:"1:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-09",title:"2:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-10",title:"3:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-11",title:"4:00pm"})),i.default.createElement(n.ListboxItem,null,i.default.createElement(n.Option,{id:"listbox-option-unique-id-12",title:"5:00pm"})))};t.Context=function(e){return i.default.createElement("div",{style:{height:"15rem"}},e.children)};t.default=i.default.createElement(n.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:i.default.createElement(o,null)});t.states=[{id:"focused",label:"Focused",element:i.default.createElement(n.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:i.default.createElement(o,null)})},{id:"open-item-focused",label:"Open - Item Focused",element:i.default.createElement(n.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:i.default.createElement(o,{optionFocused:!0}),"aria-activedescendant":"listbox-option-unique-id-01"})},{id:"time-selection",label:"Open - Time selected",element:i.default.createElement(n.ComboboxContainer,{label:"Time",className:"slds-combobox-picklist slds-timepicker",autocomplete:!0,isOpen:!0,inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",value:"8:00am",listbox:i.default.createElement(o,{optionSelected:!0})})}]}});