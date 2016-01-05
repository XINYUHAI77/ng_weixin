!function(e,t,r){"use strict";function n(){this.$get=["$$sanitizeUri",function(e){return function(t){var r=[];return s(t,c(r,function(t,r){return!/^unsafe/.test(e(t,r))})),r.join("")}}]}function i(e){var r=[],n=c(r,t.noop);return n.chars(e),r.join("")}function a(e,r){var n,i={},a=e.split(",");for(n=0;n<a.length;n++)i[r?t.lowercase(a[n]):a[n]]=!0;return i}function s(e,r){function n(e,n,a,s){if(n=t.lowercase(n),A[n])for(;k.last()&&C[k.last()];)i("",k.last());$[n]&&k.last()==n&&i("",n),s=w[n]||!!s,s||k.push(n);var l={};a.replace(d,function(e,t,r,n,i){var a=r||n||i||"";l[t]=o(a)}),r.start&&r.start(n,l,s)}function i(e,n){var i,a=0;if(n=t.lowercase(n))for(a=k.length-1;a>=0&&k[a]!=n;a--);if(a>=0){for(i=k.length-1;i>=a;i--)r.end&&r.end(k[i]);k.length=a}}"string"!=typeof e&&(e=null===e||"undefined"==typeof e?"":""+e);var a,s,l,c,k=[],y=e;for(k.last=function(){return k[k.length-1]};e;){if(c="",s=!0,k.last()&&E[k.last()]?(e=e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+k.last()+"[^>]*>","i"),function(e,t){return t=t.replace(m,"$1").replace(x,"$1"),r.chars&&r.chars(o(t)),""}),i("",k.last())):(0===e.indexOf("<!--")?(a=e.indexOf("--",4),a>=0&&e.lastIndexOf("-->",a)===a&&(r.comment&&r.comment(e.substring(4,a)),e=e.substring(a+3),s=!1)):b.test(e)?(l=e.match(b),l&&(e=e.replace(l[0],""),s=!1)):f.test(e)?(l=e.match(p),l&&(e=e.substring(l[0].length),l[0].replace(p,i),s=!1)):g.test(e)&&(l=e.match(h),l?(l[4]&&(e=e.substring(l[0].length),l[0].replace(h,n)),s=!1):(c+="<",e=e.substring(1))),s&&(a=e.indexOf("<"),c+=0>a?e:e.substring(0,a),e=0>a?"":e.substring(a),r.chars&&r.chars(o(c)))),e==y)throw u("badparse","The sanitizer was unable to parse the following block of html: {0}",e);y=e}i()}function o(e){return e?(P.innerHTML=e.replace(/</g,"&lt;"),P.textContent):""}function l(e){return e.replace(/&/g,"&amp;").replace(k,function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1);return"&#"+(1024*(t-55296)+(r-56320)+65536)+";"}).replace(y,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(e,r){var n=!1,i=t.bind(e,e.push);return{start:function(e,a,s){e=t.lowercase(e),!n&&E[e]&&(n=e),n||F[e]!==!0||(i("<"),i(e),t.forEach(a,function(n,a){var s=t.lowercase(a),o="img"===e&&"src"===s||"background"===s;j[s]!==!0||q[s]===!0&&!r(n,o)||(i(" "),i(a),i('="'),i(l(n)),i('"'))}),i(s?"/>":">"))},end:function(e){e=t.lowercase(e),n||F[e]!==!0||(i("</"),i(e),i(">")),e==n&&(n=!1)},chars:function(e){n||i(l(e))}}}var u=t.$$minErr("$sanitize"),h=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,p=/^<\/\s*([\w:-]+)[^>]*>/,d=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,g=/^</,f=/^<\//,m=/<!--(.*?)-->/g,b=/<!DOCTYPE([^>]*?)>/i,x=/<!\[CDATA\[(.*?)]]>/g,k=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,y=/([^\#-~| |!])/g,w=a("area,br,col,hr,img,wbr"),v=a("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),z=a("rp,rt"),$=t.extend({},z,v),A=t.extend({},v,a("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),C=t.extend({},z,a("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),D=a("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),E=a("script,style"),F=t.extend({},w,A,C,$,D),q=a("background,cite,href,longdesc,src,usemap,xlink:href"),O=a("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),T=a("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),j=t.extend({},q,T,O),P=document.createElement("pre");t.module("ngSanitize",[]).provider("$sanitize",n),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/i,n=/^mailto:/i;return function(a,s){function o(e){e&&d.push(i(e))}function l(e,r){d.push("<a "),t.isDefined(s)&&d.push('target="',s,'" '),d.push('href="',e.replace(/"/g,"&quot;"),'">'),o(r),d.push("</a>")}if(!a)return a;for(var c,u,h,p=a,d=[];c=p.match(r);)u=c[0],c[2]||c[4]||(u=(c[3]?"http://":"mailto:")+u),h=c.index,o(p.substr(0,h)),l(u,c[0].replace(n,"")),p=p.substring(h+c[0].length);return o(p),e(d.join(""))}}])}(window,window.angular);