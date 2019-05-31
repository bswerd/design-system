var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/button-groups/docs.mdx.js"]=function(e){function t(t){for(var n,u,s=t[0],o=t[1],i=t[2],c=0,p=[];c<s.length;c++)u=s[c],a[u]&&p.push(a[u][0]),a[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);p.length;)p.shift()();return r.push.apply(r,i||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],n=!0,s=1;s<l.length;s++){var o=l[s];0!==a[o]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=l[0]))}return e}var n={},a={64:0},r=[];function u(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,u),l.l=!0,l.exports}u.m=e,u.c=n,u.d=function(e,t,l){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=o;return r.push([338,0]),l()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},337:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.ButtonGroupItem=t.ButtonGroupRow=void 0;var n=o(l(0)),a=o(l(6)),r=l(14),u=o(l(7)),s=l(41);function o(e){return e&&e.__esModule?e:{default:e}}var i=t.ButtonGroupRow=function(e){return n.default.createElement("ul",{className:"slds-button-group-row"},e.children)};i.propTypes={children:a.default.node};var d=t.ButtonGroupItem=function(e){return n.default.createElement("li",{className:"slds-button-group-item"},e.children)};d.propTypes={children:a.default.node},t.default=n.default.createElement(i,null,n.default.createElement(d,null,n.default.createElement(r.Button,{isNeutral:!0},"Refresh")),n.default.createElement(d,null,n.default.createElement(r.Button,{isNeutral:!0},"Edit")),n.default.createElement(d,null,n.default.createElement(r.Button,{isBrand:!0},"Save")));t.examples=[{id:"buttons-icons",label:"Row of button icons",element:n.default.createElement(i,null,n.default.createElement(d,null,n.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_clicked"},n.default.createElement(u.default,{hasDropdown:!0,theme:"neutral",assistiveText:"More options",title:"More Options"}))),n.default.createElement(d,null,n.default.createElement("div",{className:"slds-dropdown-trigger slds-dropdown-trigger_clicked"},n.default.createElement(u.default,{hasDropdown:!0,theme:"neutral",symbol:"table",assistiveText:"More options",title:"More Options"}))),n.default.createElement(d,null,n.default.createElement(u.default,{symbol:"edit",theme:"neutral"})),n.default.createElement(d,null,n.default.createElement(u.default,{symbol:"refresh",theme:"neutral"})),n.default.createElement(d,null,n.default.createElement(s.ButtonGroup,null,n.default.createElement(u.default,{symbol:"chart",theme:"neutral"}),n.default.createElement(u.default,{symbol:"filter",theme:"neutral"}))))}]},338:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var n=l(0),a=(p(n),l(4)),r=p(a),u=p(l(5)),s=(p(l(10)),p(l(8)),l(1)),o=c(l(41)),i=c(l(35)),d=c(l(337));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}var f=a.factories.a,m=a.factories.code,h=a.factories.h2,E=a.factories.h3,b=a.factories.h4,y=a.factories.p,v=t.getElement=function(){return(0,n.createElement)(r.default,{},(0,n.createElement)("div",{className:"doc lead"},"Button groups are used to bunch together buttons with similar actions"),h({id:"About-Button-Groups"},"About Button Groups"),y({},"Buttons in a group are surrounded by a parent with the ",m({},".slds-button-group")," class, unless they are in a list (in which case they use ",m({},".slds-button-group-list"),". If the last button is an icon, like the down triangle, use the ",m({},".slds-button_icon-border-filled")," class when accompanying a ",m({},".slds-button_neutral")," group."),y({},"If the last button in a group needs to be wrapped in another element (for example, a drop-down trigger), add the ",m({},".slds-button_last")," class to the wrapper element to create proper spacing and borders."),E({id:"Accessibility"},"Accessibility"),y({},"Unless you are using the list version, include the Aria role ",m({},'role="group"')," so that assistive technologies are alerted to the grouping."),h({id:"Base"},"Base"),(0,n.createElement)(u.default,null,o.default),E({id:"States"},"States"),b({id:"Disabled"},"Disabled"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.states,"disabled")),b({id:"With-Overflow-Menu"},"With Overflow Menu"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.states,"with-overflow")),b({id:"With-Overflow-Menu-Open"},"With Overflow Menu – Open"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.states,"with-overflow-open")),b({id:"With-Overflow-Menu-Disabled"},"With Overflow Menu – Disabled"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.states,"with-overflow-disabled")),E({id:"Examples"},"Examples"),b({id:"Inverse"},"Inverse"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"inverse")),b({id:"Inverse-Disabled"},"Inverse - Disabled"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"inverse-disabled")),b({id:"Inverse-With-Overflow-Menu"},"Inverse - With Overflow Menu"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"inverse-overflow")),b({id:"Inverse-With-Disabled-Overflow-Menu"},"Inverse - With Disabled Overflow Menu"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"inverse-overflow-disabled")),E({id:"Button-Icon-Group"},"Button Icon Group"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"button-group-icon")),b({id:"Disabled-2"},"Disabled"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"button-group-icon-disabled")),b({id:"Selected"},"Selected"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"button-group-icon-selected")),E({id:"Brand-Button"},"Brand Button"),b({id:"With-Overflow-Menu-2"},"With Overflow Menu"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"brand-with-overflow")),E({id:"With-Style-Encapsulation"},"With Style Encapsulation"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"style-encapsulated-button-group")),b({id:"FirstLast"},"First/Last"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"style-encapsulated-button-group-2-button")),b({id:"Button-Icon-Group-2"},"Button Icon Group"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"style-encapsulated-button-icon-group")),b({id:"Button-Icon-Group-FirstLast"},"Button Icon Group – First/Last"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(o.examples,"style-encapsulated-button-icon-group-2-button")),h({id:"List"},"List"),(0,n.createElement)(u.default,null,i.default),E({id:"Examples-2"},"Examples"),y({},"See the ",f({href:"#Examples"},"Base examples")," for various usecases such as ",f({href:"#Inverse"},"inverse"),"."),h({id:"Row"},"Row"),(0,n.createElement)(u.default,null,d.default),E({id:"Of-Button-Icons"},"Of Button Icons"),(0,n.createElement)(u.default,null,(0,s.getDisplayElementById)(d.examples,"buttons-icons")))};t.getContents=function(){return(0,a.createTableOfContents)(v())}}});