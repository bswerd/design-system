var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/icons/docs.mdx.js"]=function(e){function t(t){for(var a,s,i=t[0],c=t[1],r=t[2],u=0,h=[];u<i.length;u++)s=i[u],o[s]&&h.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);h.length;)h.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={24:0},l=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var d=c;return l.push([168,0]),n()}({0:function(e,t){e.exports=React},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomIcon=void 0;var a=s(n(0)),o=s(n(9)),l=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var i=t.CustomIcon=function(e){var t=e.symbol||"custom5";return a.default.createElement("span",{className:(0,l.default)("slds-icon_container slds-icon-custom-"+t),title:e.title||"Description of icon when needed"},a.default.createElement(o.default,{className:(0,l.default)("slds-icon",e.className),sprite:"custom",symbol:t}),a.default.createElement("span",{className:"slds-assistive-text"},e.assistiveText||"Description of icon when needed"))};t.default=a.default.createElement(i,null)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=n(0),o=(y(a),n(4)),l=y(o),s=y(n(5)),i=y(n(10)),c=y(n(13)),r=y(n(8)),d=n(11),u=n(57),h=n(167),f=n(46),m=n(19),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(11)),g=n(1);function y(e){return e&&e.__esModule?e:{default:e}}var v=o.factories.a,E=o.factories.code,b=o.factories.em,x=o.factories.h2,_=o.factories.h3,S=o.factories.li,w=o.factories.p,I=o.factories.ul,C=t.getElement=function(){return(0,a.createElement)(l.default,{},(0,a.createElement)("div",{className:"doc lead"},"Icons provide visual context and enhance usability. All of the Icons can be found ",(0,a.createElement)("a",{href:"/icons"},"here"),"."),x({id:"About-Icons"},"About Icons"),w({},"Five separate SVG sprites are used to create icons — ",v({href:"/icons/#action"},"action"),", ",v({href:"/icons/#custom"},"custom"),", ",v({href:"/icons/#doctype"},"doctype"),", ",v({href:"/icons/#standard"},"standard ")," and ",v({href:"/icons/#utility"},"utility"),". Link to the icon SVG sprite by targeting the icon’s hash/ID value in the use href attribute. (You can find the values on the ",v({href:"/icons/"},"icon page"),".)"),_({id:"Markup"},"Markup"),w({},"When placing the icon code into your page, customize the path in the ",E({},"use")," attribute of the ",E({},"svg")," to the proper path and icon name for your specific icon. For example, the ",b({},"case")," icon in the ",b({},"standard")," sprite would have a path like this:"),(0,a.createElement)(i.default,{toggleCode:!1},(0,a.createElement)("svg",{"aria-hidden":"true",className:"slds-icon",title:"when needed"},(0,a.createElement)("use",{xlinkHref:"/assets/icons/standard-sprite/svg/symbols.svg#case"}))),(0,a.createElement)(r.default,{type:"note",header:"Note"},"If an icon has more than one word in the name, it should be included in the `use` attribute with the underscore separator as shown on the icon page. For example: log_a_call."),_({id:"Accessibility"},"Accessibility"),w({},"Icons require a containing element for two reasons:"),I({},S({},"If assistive text is required, the containing element should contain both the icon and a ",E({},"<span>")," with hidden assistive text describing the icon using the ",E({},"slds-assistive-text")," class."),S({},"If the icon is used without a visible, descriptive label, a ",E({},"title")," attribute is needed on the containing element. The ",E({},"title")," should describe the icon.")),w({},"If an icon has a visible label that describes what the icon represents, no title or hidden assistive text is required."),w({},"The containing element must have the ",E({},"slds-icon_container")," class."),(0,a.createElement)(r.default,{type:"note",header:"Note"},"You must require SLDS in your application for SVG sprites to work. If you’re using Visualforce, see"," ",(0,a.createElement)("a",{href:"/platforms/visualforce"},"the Visualforce tutorial"),". If you’re using"," ",(0,a.createElement)("a",{href:"/platforms/lightning"},"Lightning components, see this documentation"),"."),I({},S({},"You can access the SVG sprites by downloading the entire ",v({href:"/downloads"},"CSS Framework or just the icons"),". To include a sprite in your application, the recommended method is to place it into the page as the first element inside the ",E({},"body")," element. Alternatively, you can leave the sprite in the assets/icons directory and link to it from your page. To render a sprited icon, add the tiny ",v({href:"https://github.com/jonathantneal/svg4everybody"},"SVG for Everybody")," script for Internet Explorer."),S({},"When placed into the ",E({},"body"),", the SVG sprite takes up space in the page. Use either ",E({},"display:none")," or ",E({},"position:absolute")," and set both the width and height to zero.")),x({id:"Base"},"Base"),(0,a.createElement)(c.default,{title:"Base Default"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default"}))),x({id:"Background-Color"},"Background Color"),w({},"To change a background color for action, custom, or standard icons, use composed class names:"),(0,a.createElement)("code",{className:"docs"},".slds-icon-[sprite name]-[icon name]"),w({},"Place the class on the ",E({},".slds-icon_container"),"."),(0,a.createElement)(i.default,{toggleCode:!1},(0,a.createElement)("div",{className:"slds-icon_container slds-icon-standard-account"})),w({},"Some icon names have more than one word, separated by ",E({},"_")," underscores. Replace underscores with dashes when composing the class name. So ",E({},"log_a_call")," in the standard icon set becomes ",E({},".slds-icon-action-log-a-call"),"."),I({},S({},"For ",v({href:"/components/icons?variant=action"},"action")," icons, add the ",E({},".slds-icon_container_circle")," class to the container (",E({},".slds-icon_container"),"), which changes the background shape to a circle."),S({},v({href:"/components/icons?variant=doctype"},"Doctype")," icons have no background color."),S({},v({href:"/components/icons?variant=standard"},"Standard")," and ",v({href:"/components/icons?variant=custom"},"Custom")," icons have a rounded square shape and use a class on the container for the background color."),S({},v({href:"/components/icons?variant=base"},"Utility")," icons have no background color.")),x({id:"Current-Color"},"Current Color"),w({},"To change the fill of an icon to match the current color of its parent, add the ",E({},"slds-current-color")," class to the icon's container. This class utilizes the CSS ",E({},"currentColor")," value."),(0,a.createElement)(c.default,{title:"Current Color"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{containerClassName:"slds-current-color"}))),x({id:"Types"},"Types"),_({id:"Action"},"Action"),w({},"To view all available action icons, see ",v({href:"/icons/#action"},"action icons"),"."),(0,a.createElement)(c.default,{title:"Action"},(0,a.createElement)(s.default,null,(0,a.createElement)(u.ActionIcon,null))),_({id:"Custom"},"Custom"),w({},"Custom icons have a rounded square shape and use a class on the container for the background color."),w({},"To view all available custom icons, see ",v({href:"/icons/#custom"},"custom icons"),"."),(0,a.createElement)(c.default,{title:"Custom"},(0,a.createElement)(s.default,null,(0,a.createElement)(h.CustomIcon,null))),_({id:"Doctype"},"Doctype"),w({},"To view all available doctype icons, see ",v({href:"/icons/#doctype"},"doctype icons"),"."),(0,a.createElement)(c.default,{title:"Doctype"},(0,a.createElement)(s.default,null,(0,a.createElement)(f.DoctypeIcon,null))),_({id:"Standard"},"Standard"),w({},"Standard icons have a rounded square shape and use a class on the container for the background color."),w({},"To view all available standard icons, see ",v({href:"/icons/#standard"},"standard icons"),"."),(0,a.createElement)(c.default,{title:"Standard"},(0,a.createElement)(s.default,null,(0,a.createElement)(m.StandardIcon,null))),x({id:"Color"},"Color"),_({id:"Default"},"Default"),w({},"To change the fill of an icon to the default text color, add the ",E({},"slds-icon-text-default")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Default"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default"}))),_({id:"Success"},"Success"),w({},"To change the fill of an icon to the success text color, add the ",E({},"slds-icon-text-success")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Warning"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-success"}))),_({id:"Warning"},"Warning"),w({},"To change the fill of an icon to the warning text color, add the ",E({},"slds-icon-text-warning")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Warning"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-warning"}))),_({id:"Error"},"Error"),w({},"To change the fill of an icon to the error text color, add the ",E({},"slds-icon-text-error")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Error"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-error"}))),_({id:"Light"},"Light"),w({},"To change the fill of an icon to the light text color, add the ",E({},"slds-icon-text-light")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Light"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-light"}))),x({id:"Size"},"Size"),w({},"Size modifiers can be added to the ",E({},"slds-icon")," element on all types of icons."),_({id:"XX-Small"},"XX-Small"),w({},"To change the size of an icon to xx-small, add the ",E({},"slds-icon_xx-small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility XX-Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default slds-icon_xx-small"}))),_({id:"X-Small"},"X-Small"),w({},"To change the size of an icon to x-small, add the ",E({},"slds-icon_x-small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility X-Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default slds-icon_x-small"}))),_({id:"Small"},"Small"),w({},"To change the size of an icon to small, add the ",E({},"slds-icon_small")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Small"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default slds-icon_small"}))),_({id:"Large"},"Large"),w({},"To change the size of an icon to large, add the ",E({},"slds-icon_large")," class to the icon."),(0,a.createElement)(c.default,{title:"Utility Large"},(0,a.createElement)(s.default,null,(0,a.createElement)(d.UtilityIcon,{className:"slds-icon-text-default slds-icon_large"}))),x({id:"Right-to-Left-Support"},"Right-to-Left Support"),w({},"To horizontally flip an icon to support bidirectionality (reading from right to left), use the ",E({},"slds-icon_flip")," class with the ",E({},"slds-icon_container")," class, and setting the ",E({},"dir")," attribute on any parent container, most often the parent component or on ",E({},"html")," itself."),(0,a.createElement)(s.default,null,(0,g.getDisplayElementById)(p.examples,"rtl-flipped")))};t.getContents=function(){return(0,o.createTableOfContents)(C())}},3:function(e,t){e.exports=JSBeautify}});