var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/app-launcher/base/example.jsx.js"]=function(e){function l(l){for(var t,r,i=l[0],o=l[1],d=l[2],p=0,u=[];p<i.length;p++)r=i[p],s[r]&&u.push(s[r][0]),s[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(c&&c(l);u.length;)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,l=0;l<n.length;l++){for(var a=n[l],t=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(t=!1)}t&&(n.splice(l--,1),e=r(r.s=a[0]))}return e}var t={},s={81:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},n=[];function r(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,l,a){r.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(l,"a",l),l},r.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=i.push.bind(i);i.push=l,i=i.slice();for(var d=0;d<i.length;d++)l(i[d]);var c=o;return n.push([153,0]),a()}({0:function(e,l){e.exports=React},153:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.states=l.appTilesDropped=l.appTilesMoved=l.appTilesGrabbed=l.appTilesSearch=l.appTiles=l.searchItemTiles=l.itemTiles=l.AppLauncherTile=l.AppLauncherModal=void 0;var t=p(a(0)),s=p(a(4)),n=a(21),r=a(156),i=a(19),o=a(198),d=a(30),c=p(a(1));function p(e){return e&&e.__esModule?e:{default:e}}var u=l.AppLauncherModal=function(e){return t.default.createElement(n.Modal,{className:"slds-modal_large slds-app-launcher","aria-labelledby":"header43"},t.default.createElement(n.ModalHeader,{className:"slds-grid slds-grid_align-spread slds-grid_vertical-align-center"},t.default.createElement("h2",{id:"header43",className:"slds-text-heading_medium"},"App Launcher"),t.default.createElement("div",{className:"slds-app-launcher__header-search"},t.default.createElement("div",{className:"slds-form-element"},t.default.createElement("label",{htmlFor:"app-launcher-search",className:"slds-form-element__label slds-assistive-text"},"Find an app"),t.default.createElement("div",{className:"slds-form-element__control slds-input-has-icon slds-input-has-icon_left"},t.default.createElement(s.default,{className:"slds-input__icon",sprite:"utility",symbol:"search"}),t.default.createElement("input",{type:"search",className:"slds-input",id:"app-launcher-search",placeholder:"Find an app",defaultValue:e.searchTerm})))),t.default.createElement("button",{className:"slds-button slds-button_neutral"},"App Exchange")),t.default.createElement(n.ModalContent,{className:"slds-app-launcher__content slds-p-around_medium"},t.default.createElement(r.Section,{className:"slds-is-open"},t.default.createElement(r.SectionTitle,null,t.default.createElement(r.SectionTitleAction,{isOpen:!0,referenceId:"appsContent"},"All Apps")),t.default.createElement(r.SectionContent,{isOpen:!0,referenceId:"appsContent"},t.default.createElement("div",{className:"slds-assistive-text",id:"drag-live-region","aria-live":"assertive"},e.dragDropLiveRegion),t.default.createElement("ul",{className:"slds-grid slds-grid_pull-padded slds-wrap"},e.appTiles.map(function(e,l){return t.default.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3",key:l},t.default.createElement(m,{figureClass:e.figureClass,grabbed:e.grabbed,objectInitials:e.initials,label:e.label,description:e.description,hasTooltip:e.hasTooltip,tooltipText:e.tooltipText,index:l}))})))),t.default.createElement("hr",null),t.default.createElement(r.Section,{className:"slds-is-open"},t.default.createElement(r.SectionTitle,null,t.default.createElement(r.SectionTitleAction,{isOpen:!0,referenceId:"itemsContent"},"All Items")),t.default.createElement(r.SectionContent,{isOpen:!0,referenceId:"itemsContent"},t.default.createElement("ul",{className:"slds-grid slds-wrap"},e.itemTiles.map(function(e,l){return t.default.createElement("li",{className:"slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5",key:l},t.default.createElement("a",{href:"javascript:void(0);",className:"slds-truncate",title:e.label},e.label))}))))))},m=l.AppLauncherTile=function(e){return t.default.createElement("div",{draggable:!0,className:(0,c.default)("slds-app-launcher__tile slds-text-link_reset slds-is-draggable",e.className,{"slds-is-grabbed":e.grabbed})},t.default.createElement("div",{className:"slds-app-launcher__tile-figure"},t.default.createElement(i.Avatar,{className:"slds-avatar_large"},t.default.createElement("abbr",{className:(0,c.default)("slds-avatar__initials",e.figureClass),title:e.label},e.objectInitials)),t.default.createElement("div",{className:"slds-m-top_xxx-small"},t.default.createElement(o.ButtonIconStateful,{"aria-pressed":e.grabbed?"true":"false",assistiveText:"Reorder",selected:e.grabbed,symbol:"rows",title:"Reorder"}))),t.default.createElement("div",{className:"slds-app-launcher__tile-body"},t.default.createElement("a",{href:"javascript:void(0);"},e.label),t.default.createElement("p",null,e.description," ",e.hasTooltip&&t.default.createElement("button",{"aria-describedby":"help-"+e.index,className:"slds-button slds-button_reset slds-text-link"},"More")),t.default.createElement(d.Tooltip,{className:(0,c.default)("slds-nubbin_top",{"slds-hide":!e.tooltipText}),id:"help-"+e.index,style:{position:"absolute",top:"100px",left:"165px"}},e.tooltipText)))},f=l.itemTiles=[{label:"Accounts",symbol:"account"},{label:"Announcements",symbol:"announcement"},{label:"Approvals",symbol:"approval"},{label:"Campaigns",symbol:"campaign"},{label:"Cases",symbol:"case"},{label:"Coaching",symbol:"coaching"},{label:"Contacts",symbol:"contact"}],b=l.searchItemTiles=[{label:t.default.createElement("span",null,t.default.createElement("mark",null,"Sales")," Invoices"),symbol:"account"},{label:t.default.createElement("span",null,t.default.createElement("mark",null,"Sales")," Objects"),symbol:"announcement"}],h=l.appTiles=[{description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:"Sales Cloud"},{description:"Salesforce Marketing Cloud lets businesses of any size...",hasTooltip:!0,figureClass:"slds-icon-custom-59",grabbed:!1,initials:"MC",label:"Marketing Cloud"},{description:"Community for managing employee benefits and time off.",hasTooltip:!1,figureClass:"slds-icon-custom-10",grabbed:!1,initials:"HR",label:"HR Concierge"},{description:"Manage your finances across multiple financial platforms...",hasTooltip:!0,figureClass:"slds-icon-custom-6",grabbed:!1,initials:"MM",label:"My Money"},{description:"The key to call center and contact center management is more...",hasTooltip:!0,figureClass:"slds-icon-custom-91",grabbed:!1,initials:"CC",label:"Call Center"},{description:"Areas of Focus are used to track customer support for your...",hasTooltip:!0,figureClass:"slds-icon-custom-50",grabbed:!1,initials:"CS",label:"Customer Support Communitiy"}],g=l.appTilesSearch=[{description:"The primary internal Salesforce org. Used to run our...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:t.default.createElement("span",null,t.default.createElement("mark",null,"Sales")," Cloud")}],v=function(e,l,a){var t=e.slice(0);return t.splice(a,0,t.splice(l,1)[0]),t},_=l.appTilesGrabbed=h.slice(0);_[0]=Object.assign({},_[0],{grabbed:!0});var E=l.appTilesMoved=v(h,0,2);E[2]=Object.assign({},E[2],{grabbed:!0});var T=l.appTilesDropped=v(h,0,3);l.default=t.default.createElement("div",{className:"demo-only",style:{height:"800px"}},t.default.createElement(u,{appTiles:h,dragDropLiveRegion:"",itemTiles:f}),t.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}));l.states=[{id:"grabbed",label:"Tile grabbed",element:t.default.createElement("div",{className:"demo-only",style:{height:"800px"}},t.default.createElement(u,{appTiles:_,dragDropLiveRegion:"Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app",grabbed:!0,itemTiles:f}),t.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"moved",label:"Tile moved in list",element:t.default.createElement("div",{className:"demo-only",style:{height:"800px"}},t.default.createElement(u,{appTiles:E,dragDropLiveRegion:"Sales Cloud: new position 3 of 6.",itemTiles:f}),t.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"dropped",label:"Tile dropped",element:t.default.createElement("div",{className:"demo-only",style:{height:"800px"}},t.default.createElement(u,{appTiles:T,dragDropLiveRegion:"Sales Cloud: final position 4 of 6.",itemTiles:f}),t.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"search",label:"Search",element:t.default.createElement("div",{className:"demo-only",style:{height:"800px"}},t.default.createElement(u,{appTiles:g,dragDropLiveRegion:"",itemTiles:b,searchTerm:"sales"}),t.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"tooltip",label:"Tooltip",element:t.default.createElement(m,{figureClass:"slds-icon-custom-27",objectInitials:"SC",label:"Sales Cloud",description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,tooltipText:"The primary internal Salesforce org. Used to run our online sales business and manage accounts.",index:"x"})}]}});