var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/cards/base/example.jsx.js"]=function(e){function t(t){for(var l,r,s=t[0],c=t[1],o=t[2],u=0,m=[];u<s.length;u++)r=s[u],d[r]&&m.push(d[r][0]),d[r]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(i&&i(t);m.length;)m.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,s=1;s<a.length;s++){var c=a[s];0!==d[c]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},d={78:0,7:0,8:0,15:0,16:0,22:0,32:0,42:0,45:0,58:0,62:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,180:0,183:0,184:0},n=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var i=c;return n.push([151,0]),a()}({0:function(e,t){e.exports=React},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.WrappedCards=t.NestedCards=t.CardWithTiles=t.CardWithDataTable=void 0;var l=m(a(0)),d=a(150),n=a(11),r=a(22),s=m(r),c=a(13),o=a(24),i=a(56),u=a(149);function m(e){return e&&e.__esModule?e:{default:e}}var f=l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New"),E=l.default.createElement(c.Table,{isFixedLayout:!0,isBordered:!0,hasNoRowHover:!0,hasCellBuffer:!0,type:"advanced"},l.default.createElement(c.THead,null,l.default.createElement(c.THeadTr,null,l.default.createElement(c.ColumnTh,null,l.default.createElement(c.ColumnHeader,{columnName:"Name"})),l.default.createElement(c.ColumnTh,null,l.default.createElement(c.ColumnHeader,{columnName:"Company"})),l.default.createElement(c.ColumnTh,null,l.default.createElement(c.ColumnHeader,{columnName:"Title"})),l.default.createElement(c.ColumnTh,null,l.default.createElement(c.ColumnHeader,{columnName:"Email"})))),l.default.createElement(c.TBody,null,l.default.createElement(c.TBodyTr,null,l.default.createElement(c.RowTh,null,l.default.createElement(c.ReadOnlyCell,{cellLink:"javascript:void(0);",cellText:"Amy Choi"})),l.default.createElement(c.Td,{type:"advanced"},l.default.createElement(c.ReadOnlyCell,{cellText:"Company One"})),l.default.createElement(c.Td,{type:"advanced"},l.default.createElement(c.ReadOnlyCell,{cellText:"Director of Operations"})),l.default.createElement(c.Td,{type:"advanced"},l.default.createElement(c.ReadOnlyCell,{cellText:"adam@company.com"}))))),h=l.default.createElement("ul",{className:"slds-grid slds-wrap slds-grid_pull-padded"},l.default.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.default.createElement(d.TileMedia,{actions:!0,className:"slds-card__tile",media:l.default.createElement(n.StandardIcon,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"})),l.default.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.default.createElement(d.TileMedia,{actions:!0,className:"slds-card__tile",media:l.default.createElement(n.StandardIcon,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"})),l.default.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.default.createElement(d.TileMedia,{actions:!0,className:"slds-card__tile",media:l.default.createElement(n.StandardIcon,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"}))),C=t.CardWithDataTable=function(e){return l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Contacts (1)",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,null,E),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts")))},p=t.CardWithTiles=function(e){return l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Contacts (3)",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},h),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts")))},y=t.NestedCards=function(e){return l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Outer Card Header",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(s.default,{hasCardBoundary:!0},l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(s.default,{hasCardBoundary:!0},l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts")))))};t.WrappedCards=function(e){return l.default.createElement("div",{className:"slds-card-wrapper"},l.default.createElement("header",null,l.default.createElement("h2",{className:"slds-text-heading_medium"},"Outer card wrapper header")),l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,null,"This is a card inside an `slds-card-wrapper` to show how styling is removed when cards are nested inside."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.default.createElement(s.default,{hasCardBoundary:!0},l.default.createElement(r.CardHeader,{title:"Contacts",href:"javascript:void(0);",symbol:"contact",action:f}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card-wrapper` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Contacts"))))};t.default=l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Accounts",href:"javascript:void(0);",symbol:"account",action:l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.default.createElement(r.CardBody,{hasPadding:!0},"Anything can go into the card body"),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")));t.states=[{id:"empty",label:"Empty",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Card Header",href:"javascript:void(0);",symbol:"contact",action:l.default.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.default.createElement(r.CardBody,null),l.default.createElement(r.CardFooter,null))},{id:"empty-illustration",label:"Empty with illustration",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Tasks",href:"javascript:void(0);",symbol:"task"}),l.default.createElement(r.CardBody,{hasPadding:!0},l.default.createElement(u.Illustration,null,l.default.createElement(i.NoTask,null),l.default.createElement(u.IllustrationText,{heading:"No new tasks",message:"Nothing needs your attention right now. Check back later."}))))},{id:"loading",label:"Loading",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Tasks",href:"javascript:void(0);",symbol:"task"}),l.default.createElement(r.CardBody,{hasPadding:!0},l.default.createElement(o.Spinner,{className:"slds-spinner_small"})))}],t.examples=[{id:"related-list-table",label:"With data-table",element:l.default.createElement(C,null)},{id:"related-list-tiles",label:"With tiles",element:l.default.createElement(p,null)},{id:"nested-cards",label:"Nested cards",element:l.default.createElement(y,null)},{id:"with-no-header",label:"With no header",element:l.default.createElement(s.default,null,l.default.createElement(r.CardBody,{hasPadding:!0},"Anything can go into the card body"),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"visibly-hidden-card-header",label:"Visibly hidden card header",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Card Header",href:"javascript:void(0);",className:"slds-assistive-text"}),l.default.createElement(r.CardBody,{hasPadding:!0},"Anything can go into the card body"),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"body-has-no-padding",label:"Body with no padding",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Accounts",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,null,"Card Body"))},{id:"body-has-padding",label:"Body with padding",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Accounts",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},"Card Body with Padding"))},{id:"has-no-footer",label:"No footer",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Accounts",href:"javascript:void(0);",showIcon:!0,symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},"Card Body"),l.default.createElement(r.CardFooter,null))},{id:"has-footer",label:"Has footer",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Accounts",href:"javascript:void(0);",showIcon:!0,symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},"Card Body"),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"nested-no-boundary",label:"Nested with no boundary",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Outer Card Header",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Card Header",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a nested card with no styling (default)"),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"nested-with-boundary",label:"Nested with no boundary",element:l.default.createElement(s.default,null,l.default.createElement(r.CardHeader,{title:"Outer Card Header",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},l.default.createElement(s.default,{hasCardBoundary:!0},l.default.createElement(r.CardHeader,{title:"Card Header",href:"javascript:void(0);",symbol:"account"}),l.default.createElement(r.CardBody,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.default.createElement(r.CardFooter,null,"View All ",l.default.createElement("span",{className:"slds-assistive-text"},"Accounts")))}]}});