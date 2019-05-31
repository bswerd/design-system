var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/breadcrumbs/docs.mdx.js"]=function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],i=0,m=[];i<c.length;i++)o=c[i],n[o]&&m.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);m.length;)m.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={63:0},l=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;return l.push([336,0]),a()}({0:function(e,t){e.exports=React},3:function(e,t){e.exports=JSBeautify},335:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.BreadcrumbsWithOverflow=t.BreadcrumbsBase=t.Context=void 0;var r=c(a(0)),n=c(a(85)),l=c(a(7)),o=a(15);function c(e){return e&&e.__esModule?e:{default:e}}var s=n.default.Crumb,u=r.default.createElement(l.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"threedots",assistiveText:"Show More","aria-haspopup":"true",title:"Show More"}),d=function(e){return r.default.createElement(o.Trigger,{className:"slds-is-open",triggerIcon:u},r.default.createElement(o.Menu,{className:"slds-dropdown_left slds-dropdown_actions"},r.default.createElement(o.MenuList,null,r.default.createElement(o.MenuItem,{tabIndex:"0"},"Menu Item One"),r.default.createElement(o.MenuItem,null,"Menu Item Two"),r.default.createElement(o.MenuItem,null,"Menu Item Three"))))},i=(t.Context=function(e){return r.default.createElement("div",{className:"demo-only",style:{height:"150px"}},e.children)},t.BreadcrumbsBase=function(e){return r.default.createElement(n.default,null,r.default.createElement(s,{href:"javascript:void(0);"},"Parent Entity"),r.default.createElement(s,{href:"javascript:void(0);"},"Parent Record Name"))}),m=t.BreadcrumbsWithOverflow=function(e){return r.default.createElement(n.default,{listClassNames:"slds-grid_vertical-align-center"},r.default.createElement(s,{hasMenu:!0},r.default.createElement(d,null)),r.default.createElement(s,{href:"javascript:void(0);"},"Parent Entity"),r.default.createElement(s,{href:"javascript:void(0);"},"Parent Record Name"))};t.default=r.default.createElement(i,null);t.states=[{id:"overflow-breadcrumbs",label:"Breadcrumbs with Overflow Menu",element:r.default.createElement(m,null)}]},336:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var r=a(0),n=(u(r),a(4)),l=u(n),o=u(a(5)),c=a(1),s=(u(a(8)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(335)));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.factories.h2,i=n.factories.h3,m=n.factories.p,f=t.getElement=function(){return(0,r.createElement)(l.default,{},(0,r.createElement)("div",{className:"doc lead"},"Use breadcrumbs to note the path of a record and help the user to navigate back to the parent."),d({id:"About-Breadcrumbs"},"About Breadcrumbs"),m({},"Breadcrumbs are typically constructed with an ",(0,r.createElement)("code",{className:"doc"},"ol")," because their order matters. You mark up breadcrumbs with classes from the horizontal list utility. When you add the ",(0,r.createElement)("code",{className:"doc"},".slds-breadcrumb")," class, the separators are automatically generated."),i({id:"Accessibility"},"Accessibility"),m({},"Place the breadcrumb in a ",(0,r.createElement)("code",{className:"doc"},"nav")," element with ",(0,r.createElement)("code",{className:"doc"},'role="navigation"'),". The ",(0,r.createElement)("code",{className:"doc"},"nav")," element is also marked-up with ",(0,r.createElement)("code",{className:"doc"},'aria-label="Breadcrumbs"')," to describe the type of navigation."),d({id:"Base"},"Base"),(0,r.createElement)(o.default,null,s.default),d({id:"Variations"},"Variations"),i({id:"With-Overflow"},"With Overflow"),m({},"The overflow menu breadcrumbs variant is a composition of the overflow menu with actions example of the menus component and breadcrumbs component. To implement this, include the overflow menu as the first ",(0,r.createElement)("code",{className:"doc"},"<li>")," in the breadcrumb component. In order to vertically align all of the breadcrumb items to the center, add the ",(0,r.createElement)("code",{className:"doc"},".slds-grid_vertical-align-center")," class to the ",(0,r.createElement)("code",{className:"doc"},"<ol>"),"."),(0,r.createElement)(o.default,{style:{height:"150px"}},(0,c.getDisplayElementById)(s.states,"overflow-breadcrumbs")))};t.getContents=function(){return(0,n.createTableOfContents)(f())}}});