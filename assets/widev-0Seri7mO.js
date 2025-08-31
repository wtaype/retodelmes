(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Pd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var po={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var kd=po.exports,yc;function Dd(){return yc||(yc=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:kd,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,y=r.indexOf,v={},I=v.toString,k=v.hasOwnProperty,D=k.toString,z=D.call(Object),B={},K=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},J=e.document,_e={type:!0,src:!0,nonce:!0,noModule:!0};function ve(s,u,h){h=h||J;var d,m,_=h.createElement("script");if(_.text=s,u)for(d in _e)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&_.setAttribute(d,m);h.head.appendChild(_).parentNode.removeChild(_)}function xe(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[I.call(s)]||"object":typeof s}var wt="3.7.1",Ge=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:wt,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,_,E=arguments[0]||{},R=1,A=arguments.length,N=!1;for(typeof E=="boolean"&&(N=E,E=arguments[R]||{},R++),typeof E!="object"&&!K(E)&&(E={}),R===A&&(E=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||E===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=E[u],m&&!Array.isArray(h)?_=[]:!m&&!l.isPlainObject(h)?_={}:_=h,m=!1,E[u]=l.extend(N,_,d)):d!==void 0&&(E[u]=d));return E},l.extend({expando:"jQuery"+(wt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=k.call(u,"constructor")&&u.constructor,typeof h=="function"&&D.call(h)===z):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){ve(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:y.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!Ge.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],_=0,E=s.length,R=!h;_<E;_++)d=!u(s[_],_),d!==R&&m.push(s[_]);return m},map:function(s,u,h){var d,m,_=0,E=[];if(C(s))for(d=s.length;_<d;_++)m=u(s[_],_,h),m!=null&&E.push(m);else for(_ in s)m=u(s[_],_,h),m!=null&&E.push(m);return c(E)},guid:1,support:B}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){v["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=xe(s);return K(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var x=r.pop,V=r.sort,L=r.splice,b="[\\x20\\t\\r\\n\\f]",gt=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var pr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ya(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(pr,ya)};var mt=J,mn=p;(function(){var s,u,h,d,m,_=mn,E,R,A,N,q,$=l.expando,F=0,Q=0,ue=Cn(),we=Cn(),he=Cn(),Qe=Cn(),$e=function(w,P){return w===P&&(m=!0),0},kt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Dt="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ee="\\["+b+"*("+Dt+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Dt+"))|)"+b+"*\\]",We=":("+Dt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ee+")*)|.*)\\)|)",be=new RegExp(b+"+","g"),Ue=new RegExp("^"+b+"*,"+b+"*"),Ut=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),o=new RegExp(b+"|>"),f=new RegExp(We),g=new RegExp("^"+Dt+"$"),T={ID:new RegExp("^#("+Dt+")"),CLASS:new RegExp("^\\.("+Dt+")"),TAG:new RegExp("^("+Dt+"|[*])"),ATTR:new RegExp("^"+Ee),PSEUDO:new RegExp("^"+We),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+kt+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,De=/[+~]/,Oe=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),ye=function(w,P){var M="0x"+w.slice(1)-65536;return P||(M<0?String.fromCharCode(M+65536):String.fromCharCode(M>>10|55296,M&1023|56320))},nt=function(){zn()},rt=so(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function Wn(){try{return E.activeElement}catch{}}try{_.apply(r=a.call(mt.childNodes),mt.childNodes),r[mt.childNodes.length].nodeType}catch{_={apply:function(P,M){mn.apply(P,a.call(M))},call:function(P){mn.apply(P,a.call(arguments,1))}}}function Te(w,P,M,j){var H,Z,te,se,ne,Ie,fe,de=P&&P.ownerDocument,Ae=P?P.nodeType:9;if(M=M||[],typeof w!="string"||!w||Ae!==1&&Ae!==9&&Ae!==11)return M;if(!j&&(zn(P),P=P||E,A)){if(Ae!==11&&(ne=X.exec(w)))if(H=ne[1]){if(Ae===9)if(te=P.getElementById(H)){if(te.id===H)return _.call(M,te),M}else return M;else if(de&&(te=de.getElementById(H))&&Te.contains(P,te)&&te.id===H)return _.call(M,te),M}else{if(ne[2])return _.apply(M,P.getElementsByTagName(w)),M;if((H=ne[3])&&P.getElementsByClassName)return _.apply(M,P.getElementsByClassName(H)),M}if(!Qe[w+" "]&&(!N||!N.test(w))){if(fe=w,de=P,Ae===1&&(o.test(w)||Ut.test(w))){for(de=De.test(w)&&Da(P.parentNode)||P,(de!=P||!B.scope)&&((se=P.getAttribute("id"))?se=l.escapeSelector(se):P.setAttribute("id",se=$)),Ie=Zi(w),Z=Ie.length;Z--;)Ie[Z]=(se?"#"+se:":scope")+" "+io(Ie[Z]);fe=Ie.join(",")}try{return _.apply(M,de.querySelectorAll(fe)),M}catch{Qe(w,!0)}finally{se===$&&P.removeAttribute("id")}}}return mc(w.replace(gt,"$1"),P,M,j)}function Cn(){var w=[];function P(M,j){return w.push(M+" ")>u.cacheLength&&delete P[w.shift()],P[M+" "]=j}return P}function Et(w){return w[$]=!0,w}function ci(w){var P=E.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function bd(w){return function(P){return S(P,"input")&&P.type===w}}function Sd(w){return function(P){return(S(P,"input")||S(P,"button"))&&P.type===w}}function pc(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&rt(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function Cr(w){return Et(function(P){return P=+P,Et(function(M,j){for(var H,Z=w([],M.length,P),te=Z.length;te--;)M[H=Z[te]]&&(M[H]=!(j[H]=M[H]))})})}function Da(w){return w&&typeof w.getElementsByTagName<"u"&&w}function zn(w){var P,M=w?w.ownerDocument||w:mt;return M==E||M.nodeType!==9||!M.documentElement||(E=M,R=E.documentElement,A=!l.isXMLDoc(E),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&mt!=E&&(P=E.defaultView)&&P.top!==P&&P.addEventListener("unload",nt),B.getById=ci(function(j){return R.appendChild(j).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),B.disconnectedMatch=ci(function(j){return q.call(j,"*")}),B.scope=ci(function(){return E.querySelectorAll(":scope")}),B.cssHas=ci(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),B.getById?(u.filter.ID=function(j){var H=j.replace(Oe,ye);return function(Z){return Z.getAttribute("id")===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var Z=H.getElementById(j);return Z?[Z]:[]}}):(u.filter.ID=function(j){var H=j.replace(Oe,ye);return function(Z){var te=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return te&&te.value===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var Z,te,se,ne=H.getElementById(j);if(ne){if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne];for(se=H.getElementsByName(j),te=0;ne=se[te++];)if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne]}return[]}}),u.find.TAG=function(j,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(j):H.querySelectorAll(j)},u.find.CLASS=function(j,H){if(typeof H.getElementsByClassName<"u"&&A)return H.getElementsByClassName(j)},N=[],ci(function(j){var H;R.appendChild(j).innerHTML="<a id='"+$+"' href='' disabled='disabled'></a><select id='"+$+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+kt+")"),j.querySelectorAll("[id~="+$+"-]").length||N.push("~="),j.querySelectorAll("a#"+$+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),H=E.createElement("input"),H.setAttribute("type","hidden"),j.appendChild(H).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),H=E.createElement("input"),H.setAttribute("name",""),j.appendChild(H),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),B.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),$e=function(j,H){if(j===H)return m=!0,0;var Z=!j.compareDocumentPosition-!H.compareDocumentPosition;return Z||(Z=(j.ownerDocument||j)==(H.ownerDocument||H)?j.compareDocumentPosition(H):1,Z&1||!B.sortDetached&&H.compareDocumentPosition(j)===Z?j===E||j.ownerDocument==mt&&Te.contains(mt,j)?-1:H===E||H.ownerDocument==mt&&Te.contains(mt,H)?1:d?y.call(d,j)-y.call(d,H):0:Z&4?-1:1)}),E}Te.matches=function(w,P){return Te(w,null,null,P)},Te.matchesSelector=function(w,P){if(zn(w),A&&!Qe[P+" "]&&(!N||!N.test(P)))try{var M=q.call(w,P);if(M||B.disconnectedMatch||w.document&&w.document.nodeType!==11)return M}catch{Qe(P,!0)}return Te(P,E,null,[w]).length>0},Te.contains=function(w,P){return(w.ownerDocument||w)!=E&&zn(w),l.contains(w,P)},Te.attr=function(w,P){(w.ownerDocument||w)!=E&&zn(w);var M=u.attrHandle[P.toLowerCase()],j=M&&k.call(u.attrHandle,P.toLowerCase())?M(w,P,!A):void 0;return j!==void 0?j:w.getAttribute(P)},Te.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var P,M=[],j=0,H=0;if(m=!B.sortStable,d=!B.sortStable&&a.call(w,0),V.call(w,$e),m){for(;P=w[H++];)P===w[H]&&(j=M.push(H));for(;j--;)L.call(w,M[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Et,match:T,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Oe,ye),w[3]=(w[3]||w[4]||w[5]||"").replace(Oe,ye),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Te.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Te.error(w[0]),w},PSEUDO:function(w){var P,M=!w[6]&&w[2];return T.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":M&&f.test(M)&&(P=Zi(M,!0))&&(P=M.indexOf(")",M.length-P)-M.length)&&(w[0]=w[0].slice(0,P),w[2]=M.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Oe,ye).toLowerCase();return w==="*"?function(){return!0}:function(M){return S(M,P)}},CLASS:function(w){var P=ue[w+" "];return P||(P=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&ue(w,function(M){return P.test(typeof M.className=="string"&&M.className||typeof M.getAttribute<"u"&&M.getAttribute("class")||"")})},ATTR:function(w,P,M){return function(j){var H=Te.attr(j,w);return H==null?P==="!=":P?(H+="",P==="="?H===M:P==="!="?H!==M:P==="^="?M&&H.indexOf(M)===0:P==="*="?M&&H.indexOf(M)>-1:P==="$="?M&&H.slice(-M.length)===M:P==="~="?(" "+H.replace(be," ")+" ").indexOf(M)>-1:P==="|="?H===M||H.slice(0,M.length+1)===M+"-":!1):!0}},CHILD:function(w,P,M,j,H){var Z=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",se=P==="of-type";return j===1&&H===0?function(ne){return!!ne.parentNode}:function(ne,Ie,fe){var de,Ae,ae,Le,At,lt=Z!==te?"nextSibling":"previousSibling",jt=ne.parentNode,on=se&&ne.nodeName.toLowerCase(),li=!fe&&!se,Tt=!1;if(jt){if(Z){for(;lt;){for(ae=ne;ae=ae[lt];)if(se?S(ae,on):ae.nodeType===1)return!1;At=lt=w==="only"&&!At&&"nextSibling"}return!0}if(At=[te?jt.firstChild:jt.lastChild],te&&li){for(Ae=jt[$]||(jt[$]={}),de=Ae[w]||[],Le=de[0]===F&&de[1],Tt=Le&&de[2],ae=Le&&jt.childNodes[Le];ae=++Le&&ae&&ae[lt]||(Tt=Le=0)||At.pop();)if(ae.nodeType===1&&++Tt&&ae===ne){Ae[w]=[F,Le,Tt];break}}else if(li&&(Ae=ne[$]||(ne[$]={}),de=Ae[w]||[],Le=de[0]===F&&de[1],Tt=Le),Tt===!1)for(;(ae=++Le&&ae&&ae[lt]||(Tt=Le=0)||At.pop())&&!((se?S(ae,on):ae.nodeType===1)&&++Tt&&(li&&(Ae=ae[$]||(ae[$]={}),Ae[w]=[F,Tt]),ae===ne)););return Tt-=H,Tt===j||Tt%j===0&&Tt/j>=0}}},PSEUDO:function(w,P){var M,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Te.error("unsupported pseudo: "+w);return j[$]?j(P):j.length>1?(M=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?Et(function(H,Z){for(var te,se=j(H,P),ne=se.length;ne--;)te=y.call(H,se[ne]),H[te]=!(Z[te]=se[ne])}):function(H){return j(H,0,M)}):j}},pseudos:{not:Et(function(w){var P=[],M=[],j=Oa(w.replace(gt,"$1"));return j[$]?Et(function(H,Z,te,se){for(var ne,Ie=j(H,null,se,[]),fe=H.length;fe--;)(ne=Ie[fe])&&(H[fe]=!(Z[fe]=ne))}):function(H,Z,te){return P[0]=H,j(P,null,te,M),P[0]=null,!M.pop()}}),has:Et(function(w){return function(P){return Te(w,P).length>0}}),contains:Et(function(w){return w=w.replace(Oe,ye),function(P){return(P.textContent||l.text(P)).indexOf(w)>-1}}),lang:Et(function(w){return g.test(w||"")||Te.error("unsupported lang: "+w),w=w.replace(Oe,ye).toLowerCase(),function(P){var M;do if(M=A?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return M=M.toLowerCase(),M===w||M.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===Wn()&&E.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:pc(!1),disabled:pc(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return U.test(w.nodeName)},input:function(w){return O.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var P;return S(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:Cr(function(){return[0]}),last:Cr(function(w,P){return[P-1]}),eq:Cr(function(w,P,M){return[M<0?M+P:M]}),even:Cr(function(w,P){for(var M=0;M<P;M+=2)w.push(M);return w}),odd:Cr(function(w,P){for(var M=1;M<P;M+=2)w.push(M);return w}),lt:Cr(function(w,P,M){var j;for(M<0?j=M+P:M>P?j=P:j=M;--j>=0;)w.push(j);return w}),gt:Cr(function(w,P,M){for(var j=M<0?M+P:M;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=bd(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Sd(s);function gc(){}gc.prototype=u.filters=u.pseudos,u.setFilters=new gc;function Zi(w,P){var M,j,H,Z,te,se,ne,Ie=we[w+" "];if(Ie)return P?0:Ie.slice(0);for(te=w,se=[],ne=u.preFilter;te;){(!M||(j=Ue.exec(te)))&&(j&&(te=te.slice(j[0].length)||te),se.push(H=[])),M=!1,(j=Ut.exec(te))&&(M=j.shift(),H.push({value:M,type:j[0].replace(gt," ")}),te=te.slice(M.length));for(Z in u.filter)(j=T[Z].exec(te))&&(!ne[Z]||(j=ne[Z](j)))&&(M=j.shift(),H.push({value:M,type:Z,matches:j}),te=te.slice(M.length));if(!M)break}return P?te.length:te?Te.error(w):we(w,se).slice(0)}function io(w){for(var P=0,M=w.length,j="";P<M;P++)j+=w[P].value;return j}function so(w,P,M){var j=P.dir,H=P.next,Z=H||j,te=M&&Z==="parentNode",se=Q++;return P.first?function(ne,Ie,fe){for(;ne=ne[j];)if(ne.nodeType===1||te)return w(ne,Ie,fe);return!1}:function(ne,Ie,fe){var de,Ae,ae=[F,se];if(fe){for(;ne=ne[j];)if((ne.nodeType===1||te)&&w(ne,Ie,fe))return!0}else for(;ne=ne[j];)if(ne.nodeType===1||te)if(Ae=ne[$]||(ne[$]={}),H&&S(ne,H))ne=ne[j]||ne;else{if((de=Ae[Z])&&de[0]===F&&de[1]===se)return ae[2]=de[2];if(Ae[Z]=ae,ae[2]=w(ne,Ie,fe))return!0}return!1}}function Na(w){return w.length>1?function(P,M,j){for(var H=w.length;H--;)if(!w[H](P,M,j))return!1;return!0}:w[0]}function Cd(w,P,M){for(var j=0,H=P.length;j<H;j++)Te(w,P[j],M);return M}function oo(w,P,M,j,H){for(var Z,te=[],se=0,ne=w.length,Ie=P!=null;se<ne;se++)(Z=w[se])&&(!M||M(Z,j,H))&&(te.push(Z),Ie&&P.push(se));return te}function xa(w,P,M,j,H,Z){return j&&!j[$]&&(j=xa(j)),H&&!H[$]&&(H=xa(H,Z)),Et(function(te,se,ne,Ie){var fe,de,Ae,ae,Le=[],At=[],lt=se.length,jt=te||Cd(P||"*",ne.nodeType?[ne]:ne,[]),on=w&&(te||!P)?oo(jt,Le,w,ne,Ie):jt;if(M?(ae=H||(te?w:lt||j)?[]:se,M(on,ae,ne,Ie)):ae=on,j)for(fe=oo(ae,At),j(fe,[],ne,Ie),de=fe.length;de--;)(Ae=fe[de])&&(ae[At[de]]=!(on[At[de]]=Ae));if(te){if(H||w){if(H){for(fe=[],de=ae.length;de--;)(Ae=ae[de])&&fe.push(on[de]=Ae);H(null,ae=[],fe,Ie)}for(de=ae.length;de--;)(Ae=ae[de])&&(fe=H?y.call(te,Ae):Le[de])>-1&&(te[fe]=!(se[fe]=Ae))}}else ae=oo(ae===se?ae.splice(lt,ae.length):ae),H?H(null,se,ae,Ie):_.apply(se,ae)})}function Va(w){for(var P,M,j,H=w.length,Z=u.relative[w[0].type],te=Z||u.relative[" "],se=Z?1:0,ne=so(function(de){return de===P},te,!0),Ie=so(function(de){return y.call(P,de)>-1},te,!0),fe=[function(de,Ae,ae){var Le=!Z&&(ae||Ae!=h)||((P=Ae).nodeType?ne(de,Ae,ae):Ie(de,Ae,ae));return P=null,Le}];se<H;se++)if(M=u.relative[w[se].type])fe=[so(Na(fe),M)];else{if(M=u.filter[w[se].type].apply(null,w[se].matches),M[$]){for(j=++se;j<H&&!u.relative[w[j].type];j++);return xa(se>1&&Na(fe),se>1&&io(w.slice(0,se-1).concat({value:w[se-2].type===" "?"*":""})).replace(gt,"$1"),M,se<j&&Va(w.slice(se,j)),j<H&&Va(w=w.slice(j)),j<H&&io(w))}fe.push(M)}return Na(fe)}function Rd(w,P){var M=P.length>0,j=w.length>0,H=function(Z,te,se,ne,Ie){var fe,de,Ae,ae=0,Le="0",At=Z&&[],lt=[],jt=h,on=Z||j&&u.find.TAG("*",Ie),li=F+=jt==null?1:Math.random()||.1,Tt=on.length;for(Ie&&(h=te==E||te||Ie);Le!==Tt&&(fe=on[Le])!=null;Le++){if(j&&fe){for(de=0,!te&&fe.ownerDocument!=E&&(zn(fe),se=!A);Ae=w[de++];)if(Ae(fe,te||E,se)){_.call(ne,fe);break}Ie&&(F=li)}M&&((fe=!Ae&&fe)&&ae--,Z&&At.push(fe))}if(ae+=Le,M&&Le!==ae){for(de=0;Ae=P[de++];)Ae(At,lt,te,se);if(Z){if(ae>0)for(;Le--;)At[Le]||lt[Le]||(lt[Le]=x.call(ne));lt=oo(lt)}_.apply(ne,lt),Ie&&!Z&&lt.length>0&&ae+P.length>1&&l.uniqueSort(ne)}return Ie&&(F=li,h=jt),At};return M?Et(H):H}function Oa(w,P){var M,j=[],H=[],Z=he[w+" "];if(!Z){for(P||(P=Zi(w)),M=P.length;M--;)Z=Va(P[M]),Z[$]?j.push(Z):H.push(Z);Z=he(w,Rd(H,j)),Z.selector=w}return Z}function mc(w,P,M,j){var H,Z,te,se,ne,Ie=typeof w=="function"&&w,fe=!j&&Zi(w=Ie.selector||w);if(M=M||[],fe.length===1){if(Z=fe[0]=fe[0].slice(0),Z.length>2&&(te=Z[0]).type==="ID"&&P.nodeType===9&&A&&u.relative[Z[1].type]){if(P=(u.find.ID(te.matches[0].replace(Oe,ye),P)||[])[0],P)Ie&&(P=P.parentNode);else return M;w=w.slice(Z.shift().value.length)}for(H=T.needsContext.test(w)?0:Z.length;H--&&(te=Z[H],!u.relative[se=te.type]);)if((ne=u.find[se])&&(j=ne(te.matches[0].replace(Oe,ye),De.test(Z[0].type)&&Da(P.parentNode)||P))){if(Z.splice(H,1),w=j.length&&io(Z),!w)return _.apply(M,j),M;break}}return(Ie||Oa(w,fe))(j,P,!A,M,!P||De.test(w)&&Da(P.parentNode)||P),M}B.sortStable=$.split("").sort($e).join("")===$,zn(),B.sortDetached=ci(function(w){return w.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Te,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Te.compile=Oa,Te.select=mc,Te.setDocument=zn,Te.tokenize=Zi,Te.escape=l.escapeSelector,Te.getText=l.text,Te.isXML=l.isXMLDoc,Te.selectors=l.expr,Te.support=l.support,Te.uniqueSort=l.uniqueSort})();var Xt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Oi=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Ls=l.expr.match.needsContext,$t=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ke(s,u,h){return K(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return y.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Ke(this,s||[],!1))},not:function(s){return this.pushStack(Ke(this,s||[],!0))},is:function(s){return!!Ke(this,typeof s=="string"&&Ls.test(s)?l(s):s||[],!1).length}});var Ms,gr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,_a=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||Ms,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=gr.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),$t.test(d[1])&&l.isPlainObject(u))for(d in u)K(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=J.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(K(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};_a.prototype=l.fn,Ms=l(J);var jr=/^(?:parents|prev(?:Until|All))/,va={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,_=[],E=typeof s!="string"&&l(s);if(!Ls.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(E?E.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){_.push(h);break}}return this.pushStack(_.length>1?l.uniqueSort(_):_)},index:function(s){return s?typeof s=="string"?y.call(l(s),this[0]):y.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Fs(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Xt(s,"parentNode")},parentsUntil:function(s,u,h){return Xt(s,"parentNode",h)},next:function(s){return Fs(s,"nextSibling")},prev:function(s){return Fs(s,"previousSibling")},nextAll:function(s){return Xt(s,"nextSibling")},prevAll:function(s){return Xt(s,"previousSibling")},nextUntil:function(s,u,h){return Xt(s,"nextSibling",h)},prevUntil:function(s,u,h){return Xt(s,"previousSibling",h)},siblings:function(s){return Oi((s.parentNode||{}).firstChild,s)},children:function(s){return Oi(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(va[s]||l.uniqueSort(m),jr.test(s)&&m.reverse()),this.pushStack(m)}});var yt=/[^\x20\t\r\n\f]+/g;function qr(s){var u={};return l.each(s.match(yt)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?qr(s):l.extend({},s);var u,h,d,m,_=[],E=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;E.length;R=-1)for(h=E.shift();++R<_.length;)_[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=_.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?_=[]:_="")},N={add:function(){return _&&(h&&!u&&(R=_.length-1,E.push(h)),(function q($){l.each($,function(F,Q){K(Q)?(!s.unique||!N.has(Q))&&_.push(Q):Q&&Q.length&&xe(Q)!=="string"&&q(Q)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,$){for(var F;(F=l.inArray($,_,F))>-1;)_.splice(F,1),F<=R&&R--}),this},has:function(q){return q?l.inArray(q,_)>-1:_.length>0},empty:function(){return _&&(_=[]),this},disable:function(){return m=E=[],_=h="",this},disabled:function(){return!_},lock:function(){return m=E=[],!h&&!u&&(_=h=""),this},locked:function(){return!!m},fireWith:function(q,$){return m||($=$||[],$=[q,$.slice?$.slice():$],E.push($),u||A()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function Yt(s){return s}function Un(s){throw s}function Br(s,u,h,d){var m;try{s&&K(m=s.promise)?m.call(s).done(u).fail(h):s&&K(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(_){h.apply(void 0,[_])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(_){return d.then(null,_)},pipe:function(){var _=arguments;return l.Deferred(function(E){l.each(u,function(R,A){var N=K(_[A[4]])&&_[A[4]];m[A[1]](function(){var q=N&&N.apply(this,arguments);q&&K(q.promise)?q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[A[0]+"With"](this,N?[q]:arguments)})}),_=null}).promise()},then:function(_,E,R){var A=0;function N(q,$,F,Q){return function(){var ue=this,we=arguments,he=function(){var $e,kt;if(!(q<A)){if($e=F.apply(ue,we),$e===$.promise())throw new TypeError("Thenable self-resolution");kt=$e&&(typeof $e=="object"||typeof $e=="function")&&$e.then,K(kt)?Q?kt.call($e,N(A,$,Yt,Q),N(A,$,Un,Q)):(A++,kt.call($e,N(A,$,Yt,Q),N(A,$,Un,Q),N(A,$,Yt,$.notifyWith))):(F!==Yt&&(ue=void 0,we=[$e]),(Q||$.resolveWith)(ue,we))}},Qe=Q?he:function(){try{he()}catch($e){l.Deferred.exceptionHook&&l.Deferred.exceptionHook($e,Qe.error),q+1>=A&&(F!==Un&&(ue=void 0,we=[$e]),$.rejectWith(ue,we))}};q?Qe():(l.Deferred.getErrorHook?Qe.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Qe.error=l.Deferred.getStackHook()),e.setTimeout(Qe))}}return l.Deferred(function(q){u[0][3].add(N(0,q,K(R)?R:Yt,q.notifyWith)),u[1][3].add(N(0,q,K(_)?_:Yt)),u[2][3].add(N(0,q,K(E)?E:Un))}).promise()},promise:function(_){return _!=null?l.extend(_,d):d}},m={};return l.each(u,function(_,E){var R=E[2],A=E[5];d[E[1]]=R.add,A&&R.add(function(){h=A},u[3-_][2].disable,u[3-_][3].disable,u[0][2].lock,u[0][3].lock),R.add(E[3].fire),m[E[0]]=function(){return m[E[0]+"With"](this===m?void 0:this,arguments),this},m[E[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),_=l.Deferred(),E=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||_.resolveWith(d,m)}};if(u<=1&&(Br(s,_.done(E(h)).resolve,_.reject,!u),_.state()==="pending"||K(m[h]&&m[h].then)))return _.then();for(;h--;)Br(m[h],E(h),_.reject);return _.promise()}});var Li=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&Li.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var $r=l.Deferred();l.fn.ready=function(s){return $r.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&$r.resolveWith(J,[l]))}}),l.ready.then=$r.then;function Hr(){J.removeEventListener("DOMContentLoaded",Hr),e.removeEventListener("load",Hr),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",Hr),e.addEventListener("load",Hr));var Ht=function(s,u,h,d,m,_,E){var R=0,A=s.length,N=h==null;if(xe(h)==="object"){m=!0;for(R in h)Ht(s,u,R,h[R],!0,_,E)}else if(d!==void 0&&(m=!0,K(d)||(E=!0),N&&(E?(u.call(s,d),u=null):(N=u,u=function(q,$,F){return N.call(l(q),F)})),u))for(;R<A;R++)u(s[R],h,E?d:d.call(s[R],R,u(s[R],h)));return m?s:N?u.call(s):A?u(s[0],h):_},Us=/^-ms-/,Mi=/-([a-z])/g;function js(s,u){return u.toUpperCase()}function xt(s){return s.replace(Us,"ms-").replace(Mi,js)}var yn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function _n(){this.expando=l.expando+_n.uid++}_n.uid=1,_n.prototype={cache:function(s){var u=s[this.expando];return u||(u={},yn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[xt(u)]=h;else for(d in u)m[xt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][xt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(xt):(u=xt(u),u=u in d?[u]:u.match(yt)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new _n,ke=new _n,st=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Wr=/[A-Z]/g;function qs(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:st.test(s)?JSON.parse(s):s}function Fi(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Wr,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=qs(h)}catch{}ke.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return ke.hasData(s)||ie.hasData(s)},data:function(s,u,h){return ke.access(s,u,h)},removeData:function(s,u){ke.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,_=this[0],E=_&&_.attributes;if(s===void 0){if(this.length&&(m=ke.get(_),_.nodeType===1&&!ie.get(_,"hasDataAttrs"))){for(h=E.length;h--;)E[h]&&(d=E[h].name,d.indexOf("data-")===0&&(d=xt(d.slice(5)),Fi(_,d,m[d])));ie.set(_,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){ke.set(this,s)}):Ht(this,function(R){var A;if(_&&R===void 0)return A=ke.get(_,s),A!==void 0||(A=Fi(_,s),A!==void 0)?A:void 0;this.each(function(){ke.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){ke.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),_=l._queueHooks(s,u),E=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete _.stop,m.call(s,E,_)),!d&&_&&_.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),_=this,E=this.length,R=function(){--d||m.resolveWith(_,[_])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";E--;)h=ie.get(_[E],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var Bs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Wt=new RegExp("^(?:([+-])=|)("+Bs+")([a-z%]*)$","i"),Vt=["Top","Right","Bottom","Left"],Jt=J.documentElement,Zt=function(s){return l.contains(s.ownerDocument,s)},Ea={composed:!0};Jt.getRootNode&&(Zt=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(Ea)===s.ownerDocument});var zr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Zt(s)&&l.css(s,"display")==="none"};function Gr(s,u,h,d){var m,_,E=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),N=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||N!=="px"&&+A)&&Wt.exec(l.css(s,u));if(q&&q[3]!==N){for(A=A/2,N=N||q[3],q=+A||1;E--;)l.style(s,u,q+N),(1-_)*(1-(_=R()/A||.5))<=0&&(E=0),q=q/_;q=q*2,l.style(s,u,q+N),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var Ui={};function $s(s){var u,h=s.ownerDocument,d=s.nodeName,m=Ui[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Ui[d]=m,m)}function Ot(s,u){for(var h,d,m=[],_=0,E=s.length;_<E;_++)d=s[_],d.style&&(h=d.style.display,u?(h==="none"&&(m[_]=ie.get(d,"display")||null,m[_]||(d.style.display="")),d.style.display===""&&zr(d)&&(m[_]=$s(d))):h!=="none"&&(m[_]="none",ie.set(d,"display",h)));for(_=0;_<E;_++)m[_]!=null&&(s[_].style.display=m[_]);return s}l.fn.extend({show:function(){return Ot(this,!0)},hide:function(){return Ot(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){zr(this)?l(this).show():l(this).hide()})}});var vn=/^(?:checkbox|radio)$/i,Kr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,en=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),B.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",B.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",B.option=!!u.lastChild})();var _t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_t.tbody=_t.tfoot=_t.colgroup=_t.caption=_t.thead,_t.th=_t.td,B.option||(_t.optgroup=_t.option=[1,"<select multiple='multiple'>","</select>"]);function Ze(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Qr(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var mr=/<|&#?\w+;/;function ji(s,u,h,d,m){for(var _,E,R,A,N,q,$=u.createDocumentFragment(),F=[],Q=0,ue=s.length;Q<ue;Q++)if(_=s[Q],_||_===0)if(xe(_)==="object")l.merge(F,_.nodeType?[_]:_);else if(!mr.test(_))F.push(u.createTextNode(_));else{for(E=E||$.appendChild(u.createElement("div")),R=(Kr.exec(_)||["",""])[1].toLowerCase(),A=_t[R]||_t._default,E.innerHTML=A[1]+l.htmlPrefilter(_)+A[2],q=A[0];q--;)E=E.lastChild;l.merge(F,E.childNodes),E=$.firstChild,E.textContent=""}for($.textContent="",Q=0;_=F[Q++];){if(d&&l.inArray(_,d)>-1){m&&m.push(_);continue}if(N=Zt(_),E=Ze($.appendChild(_),"script"),N&&Qr(E),h)for(q=0;_=E[q++];)en.test(_.type||"")&&h.push(_)}return $}var tt=/^([^.]*)(?:\.(.+)|)/;function En(){return!0}function Lt(){return!1}function Tn(s,u,h,d,m,_){var E,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)Tn(s,R,h,d,u[R],_);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=Lt;else if(!m)return s;return _===1&&(E=m,m=function(A){return l().off(A),E.apply(this,arguments)},m.guid=E.guid||(E.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var _,E,R,A,N,q,$,F,Q,ue,we,he=ie.get(s);if(yn(s))for(h.handler&&(_=h,h=_.handler,m=_.selector),m&&l.find.matchesSelector(Jt,m),h.guid||(h.guid=l.guid++),(A=he.events)||(A=he.events=Object.create(null)),(E=he.handle)||(E=he.handle=function(Qe){return typeof l<"u"&&l.event.triggered!==Qe.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(yt)||[""],N=u.length;N--;)R=tt.exec(u[N])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),Q&&($=l.event.special[Q]||{},Q=(m?$.delegateType:$.bindType)||Q,$=l.event.special[Q]||{},q=l.extend({type:Q,origType:we,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:ue.join(".")},_),(F=A[Q])||(F=A[Q]=[],F.delegateCount=0,(!$.setup||$.setup.call(s,d,ue,E)===!1)&&s.addEventListener&&s.addEventListener(Q,E)),$.add&&($.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?F.splice(F.delegateCount++,0,q):F.push(q),l.event.global[Q]=!0)},remove:function(s,u,h,d,m){var _,E,R,A,N,q,$,F,Q,ue,we,he=ie.hasData(s)&&ie.get(s);if(!(!he||!(A=he.events))){for(u=(u||"").match(yt)||[""],N=u.length;N--;){if(R=tt.exec(u[N])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),!Q){for(Q in A)l.event.remove(s,Q+u[N],h,d,!0);continue}for($=l.event.special[Q]||{},Q=(d?$.delegateType:$.bindType)||Q,F=A[Q]||[],R=R[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=_=F.length;_--;)q=F[_],(m||we===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(F.splice(_,1),q.selector&&F.delegateCount--,$.remove&&$.remove.call(s,q));E&&!F.length&&((!$.teardown||$.teardown.call(s,ue,he.handle)===!1)&&l.removeEvent(s,Q,he.handle),delete A[Q])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,_,E,R=new Array(arguments.length),A=l.event.fix(s),N=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(E=l.event.handlers.call(this,A,N),u=0;(m=E[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(_=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||_.namespace===!1||A.rnamespace.test(_.namespace))&&(A.handleObj=_,A.data=_.data,d=((l.event.special[_.origType]||{}).handle||_.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,_,E,R=[],A=u.delegateCount,N=s.target;if(A&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(_=[],E={},h=0;h<A;h++)d=u[h],m=d.selector+" ",E[m]===void 0&&(E[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),E[m]&&_.push(d);_.length&&R.push({elem:N,handlers:_})}}return N=this,A<u.length&&R.push({elem:N,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:K(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return vn.test(u.type)&&u.click&&S(u,"input")&&Xr(u,"click",!0),!1},trigger:function(s){var u=this||s;return vn.test(u.type)&&u.click&&S(u,"input")&&Xr(u,"click"),!0},_default:function(s){var u=s.target;return vn.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Xr(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,En);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,_=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(_)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(_=a.call(arguments),ie.set(this,u,_),this[u](),m=ie.get(this,u),ie.set(this,u,!1),_!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else _&&(ie.set(this,u,l.event.trigger(_[0],_.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=En)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?En:Lt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Lt,isPropagationStopped:Lt,isImmediatePropagationStopped:Lt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=En,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=En,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=En,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(J.documentMode){var m=ie.get(this,"handle"),_=l.event.fix(d);_.type=d.type==="focusin"?"focus":"blur",_.isSimulated=!0,m(d),_.target===_.currentTarget&&m(_)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Xr(this,s,!0),J.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return Xr(this,s),!0},teardown:function(){var d;if(J.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,_=ie.get(m,u);_||(J.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(_||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,_=ie.get(m,u)-1;_?ie.set(m,u,_):(J.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,_=h.relatedTarget,E=h.handleObj;return(!_||_!==m&&!l.contains(m,_))&&(h.type=E.origType,d=E.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return Tn(this,s,u,h,d)},one:function(s,u,h,d){return Tn(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=Lt),this.each(function(){l.event.remove(this,s,h,u)})}});var Ta=/<script|<style|<link/i,jn=/checked\s*(?:[^=]|=\s*.checked.)/i,wa=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Hs(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Yr(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Ws(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Jr(s,u){var h,d,m,_,E,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(_=ie.get(s),A=_.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}ke.hasData(s)&&(E=ke.access(s),R=l.extend({},E),ke.set(u,R))}}function Zr(s,u){var h=u.nodeName.toLowerCase();h==="input"&&vn.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function vt(s,u,h,d){u=c(u);var m,_,E,R,A,N,q=0,$=s.length,F=$-1,Q=u[0],ue=K(Q);if(ue||$>1&&typeof Q=="string"&&!B.checkClone&&jn.test(Q))return s.each(function(we){var he=s.eq(we);ue&&(u[0]=Q.call(this,we,he.html())),vt(he,u,h,d)});if($&&(m=ji(u,s[0].ownerDocument,!1,s,d),_=m.firstChild,m.childNodes.length===1&&(m=_),_||d)){for(E=l.map(Ze(m,"script"),Yr),R=E.length;q<$;q++)A=m,q!==F&&(A=l.clone(A,!0,!0),R&&l.merge(E,Ze(A,"script"))),h.call(s[q],A,q);if(R)for(N=E[E.length-1].ownerDocument,l.map(E,Ws),q=0;q<R;q++)A=E[q],en.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(N,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},N):ve(A.textContent.replace(wa,""),A,N))}return s}function qi(s,u,h){for(var d,m=u?l.filter(u,s):s,_=0;(d=m[_])!=null;_++)!h&&d.nodeType===1&&l.cleanData(Ze(d)),d.parentNode&&(h&&Zt(d)&&Qr(Ze(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,_,E,R=s.cloneNode(!0),A=Zt(s);if(!B.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(E=Ze(R),_=Ze(s),d=0,m=_.length;d<m;d++)Zr(_[d],E[d]);if(u)if(h)for(_=_||Ze(s),E=E||Ze(R),d=0,m=_.length;d<m;d++)Jr(_[d],E[d]);else Jr(s,R);return E=Ze(R,"script"),E.length>0&&Qr(E,!A&&Ze(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,_=0;(h=s[_])!==void 0;_++)if(yn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[ke.expando]&&(h[ke.expando]=void 0)}}}),l.fn.extend({detach:function(s){return qi(this,s,!0)},remove:function(s){return qi(this,s)},text:function(s){return Ht(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Hs(this,s);u.appendChild(s)}})},prepend:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Hs(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(Ze(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return Ht(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!Ta.test(u)&&!_t[(Kr.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(Ze(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return vt(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Ze(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],_=l(h),E=_.length-1,R=0;R<=E;R++)d=R===E?this:this.clone(!0),l(_[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var ei=new RegExp("^("+Bs+")(?!px)[a-z%]+$","i"),yr=/^--/,qn=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Bi=function(s,u,h){var d,m,_={};for(m in u)_[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=_[m];return d},zs=new RegExp(Vt.join("|"),"i");(function(){function s(){if(N){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Jt.appendChild(A).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",R=u(q.marginLeft)===12,N.style.right="60%",_=u(q.right)===36,d=u(q.width)===36,N.style.position="absolute",m=u(N.offsetWidth/3)===12,Jt.removeChild(A),N=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,_,E,R,A=J.createElement("div"),N=J.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",B.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(B,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),_},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,$,F,Q;return E==null&&(q=J.createElement("table"),$=J.createElement("tr"),F=J.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",$.style.cssText="box-sizing:content-box;border:1px solid",$.style.height="1px",F.style.height="9px",F.style.display="block",Jt.appendChild(q).appendChild($).appendChild(F),Q=e.getComputedStyle($),E=parseInt(Q.height,10)+parseInt(Q.borderTopWidth,10)+parseInt(Q.borderBottomWidth,10)===$.offsetHeight,Jt.removeChild(q)),E}}))})();function _r(s,u,h){var d,m,_,E,R=yr.test(u),A=s.style;return h=h||qn(s),h&&(E=h.getPropertyValue(u)||h[u],R&&E&&(E=E.replace(gt,"$1")||void 0),E===""&&!Zt(s)&&(E=l.style(s,u)),!B.pixelBoxStyles()&&ei.test(E)&&zs.test(u)&&(d=A.width,m=A.minWidth,_=A.maxWidth,A.minWidth=A.maxWidth=A.width=E,E=h.width,A.width=d,A.minWidth=m,A.maxWidth=_)),E!==void 0?E+"":E}function vr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var $i=["Webkit","Moz","ms"],ti=J.createElement("div").style,Bn={};function wn(s){for(var u=s[0].toUpperCase()+s.slice(1),h=$i.length;h--;)if(s=$i[h]+u,s in ti)return s}function Er(s){var u=l.cssProps[s]||Bn[s];return u||(s in ti?s:Bn[s]=wn(s)||s)}var Ia=/^(none|table(?!-c[ea]).+)/,Gs={position:"absolute",visibility:"hidden",display:"block"},Hi={letterSpacing:"0",fontWeight:"400"};function Wi(s,u,h){var d=Wt.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function Tr(s,u,h,d,m,_){var E=u==="width"?1:0,R=0,A=0,N=0;if(h===(d?"border":"content"))return 0;for(;E<4;E+=2)h==="margin"&&(N+=l.css(s,h+Vt[E],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+Vt[E],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+Vt[E]+"Width",!0,m))):(A+=l.css(s,"padding"+Vt[E],!0,m),h!=="padding"?A+=l.css(s,"border"+Vt[E]+"Width",!0,m):R+=l.css(s,"border"+Vt[E]+"Width",!0,m));return!d&&_>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-_-A-R-.5))||0),A+N}function ni(s,u,h){var d=qn(s),m=!B.boxSizingReliable()||h,_=m&&l.css(s,"boxSizing",!1,d)==="border-box",E=_,R=_r(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(ei.test(R)){if(!h)return R;R="auto"}return(!B.boxSizingReliable()&&_||!B.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(_=l.css(s,"boxSizing",!1,d)==="border-box",E=A in s,E&&(R=s[A])),R=parseFloat(R)||0,R+Tr(s,u,h||(_?"border":"content"),E,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=_r(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,_,E,R=xt(u),A=yr.test(u),N=s.style;if(A||(u=Er(R)),E=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(_=typeof h,_==="string"&&(m=Wt.exec(h))&&m[1]&&(h=Gr(s,u,m),_="number"),h==null||h!==h)return;_==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!B.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(N[u]="inherit"),(!E||!("set"in E)||(h=E.set(s,h,d))!==void 0)&&(A?N.setProperty(u,h):N[u]=h)}else return E&&"get"in E&&(m=E.get(s,!1,d))!==void 0?m:N[u]}},css:function(s,u,h,d){var m,_,E,R=xt(u),A=yr.test(u);return A||(u=Er(R)),E=l.cssHooks[u]||l.cssHooks[R],E&&"get"in E&&(m=E.get(s,!0,h)),m===void 0&&(m=_r(s,u,d)),m==="normal"&&u in Hi&&(m=Hi[u]),h===""||h?(_=parseFloat(m),h===!0||isFinite(_)?_||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return Ia.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Bi(h,Gs,function(){return ni(h,u,m)}):ni(h,u,m)},set:function(h,d,m){var _,E=qn(h),R=!B.scrollboxSize()&&E.position==="absolute",A=R||m,N=A&&l.css(h,"boxSizing",!1,E)==="border-box",q=m?Tr(h,u,m,N,E):0;return N&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(E[u])-Tr(h,u,"border",!1,E)-.5)),q&&(_=Wt.exec(d))&&(_[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),Wi(h,d,q)}}}),l.cssHooks.marginLeft=vr(B.reliableMarginLeft,function(s,u){if(u)return(parseFloat(_r(s,"marginLeft"))||s.getBoundingClientRect().left-Bi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},_=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+Vt[d]+u]=_[d]||_[d-2]||_[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=Wi)}),l.fn.extend({css:function(s,u){return Ht(this,function(h,d,m){var _,E,R={},A=0;if(Array.isArray(d)){for(_=qn(h),E=d.length;A<E;A++)R[d[A]]=l.css(h,d[A],!1,_);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function ot(s,u,h,d,m){return new ot.prototype.init(s,u,h,d,m)}l.Tween=ot,ot.prototype={constructor:ot,init:function(s,u,h,d,m,_){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=_||(l.cssNumber[h]?"":"px")},cur:function(){var s=ot.propHooks[this.prop];return s&&s.get?s.get(this):ot.propHooks._default.get(this)},run:function(s){var u,h=ot.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Er(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=ot.prototype.init,l.fx.step={};var In,ri,Aa=/^(?:toggle|show|hide)$/,Ks=/queueHooks$/;function ii(){ri&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ii):e.setTimeout(ii,l.fx.interval),l.fx.tick())}function Qs(){return e.setTimeout(function(){In=void 0}),In=Date.now()}function Mt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=Vt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Ft(s,u,h){for(var d,m=(It.tweeners[u]||[]).concat(It.tweeners["*"]),_=0,E=m.length;_<E;_++)if(d=m[_].call(h,u,s))return d}function si(s,u,h){var d,m,_,E,R,A,N,q,$="width"in u||"height"in u,F=this,Q={},ue=s.style,we=s.nodeType&&zr(s),he=ie.get(s,"fxshow");h.queue||(E=l._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,R=E.empty.fire,E.empty.fire=function(){E.unqueued||R()}),E.unqueued++,F.always(function(){F.always(function(){E.unqueued--,l.queue(s,"fx").length||E.empty.fire()})}));for(d in u)if(m=u[d],Aa.test(m)){if(delete u[d],_=_||m==="toggle",m===(we?"hide":"show"))if(m==="show"&&he&&he[d]!==void 0)we=!0;else continue;Q[d]=he&&he[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(Q))){$&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],N=he&&he.display,N==null&&(N=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(Ot([s],!0),N=s.style.display||N,q=l.css(s,"display"),Ot([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(A||(F.done(function(){ue.display=N}),N==null&&(q=ue.display,N=q==="none"?"":q)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),A=!1;for(d in Q)A||(he?"hidden"in he&&(we=he.hidden):he=ie.access(s,"fxshow",{display:N}),_&&(he.hidden=!we),we&&Ot([s],!0),F.done(function(){we||Ot([s]),ie.remove(s,"fxshow");for(d in Q)l.style(s,d,Q[d])})),A=Ft(we?he[d]:0,d,F),d in he||(he[d]=A.start,we&&(A.end=A.start,A.start=0))}}function oi(s,u){var h,d,m,_,E;for(h in s)if(d=xt(h),m=u[d],_=s[h],Array.isArray(_)&&(m=_[1],_=s[h]=_[0]),h!==d&&(s[d]=_,delete s[h]),E=l.cssHooks[d],E&&"expand"in E){_=E.expand(_),delete s[d];for(h in _)h in s||(s[h]=_[h],u[h]=m)}else u[d]=m}function It(s,u,h){var d,m,_=0,E=It.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var $=In||Qs(),F=Math.max(0,N.startTime+N.duration-$),Q=F/N.duration||0,ue=1-Q,we=0,he=N.tweens.length;we<he;we++)N.tweens[we].run(ue);return R.notifyWith(s,[N,ue,F]),ue<1&&he?F:(he||R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N]),!1)},N=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:In||Qs(),duration:h.duration,tweens:[],createTween:function($,F){var Q=l.Tween(s,N.opts,$,F,N.opts.specialEasing[$]||N.opts.easing);return N.tweens.push(Q),Q},stop:function($){var F=0,Q=$?N.tweens.length:0;if(m)return this;for(m=!0;F<Q;F++)N.tweens[F].run(1);return $?(R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N,$])):R.rejectWith(s,[N,$]),this}}),q=N.props;for(oi(q,N.opts.specialEasing);_<E;_++)if(d=It.prefilters[_].call(N,s,q,N.opts),d)return K(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Ft,N),K(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(It,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return Gr(h.elem,s,Wt.exec(u),h),h}]},tweener:function(s,u){K(s)?(u=s,s=["*"]):s=s.match(yt);for(var h,d=0,m=s.length;d<m;d++)h=s[d],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(u)},prefilters:[si],prefilter:function(s,u){u?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||K(s)&&s,duration:s,easing:h&&u||u&&!K(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){K(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(zr).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),_=l.speed(u,h,d),E=function(){var R=It(this,l.extend({},s),_);(m||ie.get(this,"finish"))&&R.stop(!0)};return E.finish=E,m||_.queue===!1?this.each(E):this.queue(_.queue,E)},stop:function(s,u,h){var d=function(m){var _=m.stop;delete m.stop,_(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,_=s!=null&&s+"queueHooks",E=l.timers,R=ie.get(this);if(_)R[_]&&R[_].stop&&d(R[_]);else for(_ in R)R[_]&&R[_].stop&&Ks.test(_)&&d(R[_]);for(_=E.length;_--;)E[_].elem===this&&(s==null||E[_].queue===s)&&(E[_].anim.stop(h),m=!1,E.splice(_,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],_=l.timers,E=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=_.length;u--;)_[u].elem===this&&_[u].queue===s&&(_[u].anim.stop(!0),_.splice(u,1));for(u=0;u<E;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,_){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(Mt(u,!0),d,m,_)}}),l.each({slideDown:Mt("show"),slideUp:Mt("hide"),slideToggle:Mt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(In=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),In=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){ri||(ri=!0,ii())},l.fx.stop=function(){ri=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",B.checkOn=s.value!=="",B.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",B.radioValue=s.value==="t"})();var Ve,tn=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return Ht(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,_=s.nodeType;if(!(_===3||_===8||_===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((_!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Ve:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!B.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(yt);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),Ve={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=tn[u]||l.find.attr;tn[u]=function(d,m,_){var E,R,A=m.toLowerCase();return _||(R=tn[A],tn[A]=E,E=h(d,m,_)!=null?A:null,tn[A]=R),E}});var wr=/^(?:input|select|textarea|button)$/i,Ir=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return Ht(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,_=s.nodeType;if(!(_===3||_===8||_===2))return(_!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):wr.test(s.nodeName)||Ir.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),B.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function An(s){var u=s.match(yt)||[];return u.join(" ")}function nn(s){return s.getAttribute&&s.getAttribute("class")||""}function zi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(yt)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,_,E;return K(s)?this.each(function(R){l(this).addClass(s.call(this,R,nn(this)))}):(u=zi(s),u.length?this.each(function(){if(d=nn(this),h=this.nodeType===1&&" "+An(d)+" ",h){for(_=0;_<u.length;_++)m=u[_],h.indexOf(" "+m+" ")<0&&(h+=m+" ");E=An(h),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var u,h,d,m,_,E;return K(s)?this.each(function(R){l(this).removeClass(s.call(this,R,nn(this)))}):arguments.length?(u=zi(s),u.length?this.each(function(){if(d=nn(this),h=this.nodeType===1&&" "+An(d)+" ",h){for(_=0;_<u.length;_++)for(m=u[_];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");E=An(h),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,_,E=typeof s,R=E==="string"||Array.isArray(s);return K(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,nn(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=zi(s),this.each(function(){if(R)for(_=l(this),m=0;m<h.length;m++)d=h[m],_.hasClass(d)?_.removeClass(d):_.addClass(d);else(s===void 0||E==="boolean")&&(d=nn(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+An(nn(h))+" ").indexOf(u)>-1)return!0;return!1}});var ba=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=K(s),this.each(function(_){var E;this.nodeType===1&&(d?E=s.call(this,_,l(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,E,"value")===void 0)&&(this.value=E))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(ba,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??An(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,_=s.selectedIndex,E=s.type==="select-one",R=E?null:[],A=E?_+1:m.length;for(_<0?d=A:d=E?_:0;d<A;d++)if(h=m[d],(h.selected||d===_)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),E)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,_=l.makeArray(u),E=m.length;E--;)d=m[E],(d.selected=l.inArray(l.valHooks.option.get(d),_)>-1)&&(h=!0);return h||(s.selectedIndex=-1),_}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},B.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Ar=e.location,Xs={guid:Date.now()},bn=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var zt=/^(?:focusinfocus|focusoutblur)$/,Gi=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,_,E,R,A,N,q,$,F=[h||J],Q=k.call(s,"type")?s.type:s,ue=k.call(s,"namespace")?s.namespace.split("."):[];if(_=$=E=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!zt.test(Q+l.event.triggered)&&(Q.indexOf(".")>-1&&(ue=Q.split("."),Q=ue.shift(),ue.sort()),A=Q.indexOf(":")<0&&"on"+Q,s=s[l.expando]?s:new l.Event(Q,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[Q]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||Q,zt.test(R+Q)||(_=_.parentNode);_;_=_.parentNode)F.push(_),E=_;E===(h.ownerDocument||J)&&F.push(E.defaultView||E.parentWindow||e)}for(m=0;(_=F[m++])&&!s.isPropagationStopped();)$=_,s.type=m>1?R:q.bindType||Q,N=(ie.get(_,"events")||Object.create(null))[s.type]&&ie.get(_,"handle"),N&&N.apply(_,u),N=A&&_[A],N&&N.apply&&yn(_)&&(s.result=N.apply(_,u),s.result===!1&&s.preventDefault());return s.type=Q,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(F.pop(),u)===!1)&&yn(h)&&A&&K(h[Q])&&!Y(h)&&(E=h[A],E&&(h[A]=null),l.event.triggered=Q,s.isPropagationStopped()&&$.addEventListener(Q,Gi),h[Q](),s.isPropagationStopped()&&$.removeEventListener(Q,Gi),l.event.triggered=void 0,E&&(h[A]=E)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Ys=/\[\]$/,Ki=/\r?\n/g,$n=/^(?:submit|button|image|reset|file)$/i,Sa=/^(?:input|select|textarea|keygen)/i;function Qi(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(_,E){h||Ys.test(s)?d(s,E):Qi(s+"["+(typeof E=="object"&&E!=null?_:"")+"]",E,h,d)});else if(!h&&xe(u)==="object")for(m in u)Qi(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(_,E){var R=K(E)?E():E;d[d.length]=encodeURIComponent(_)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Qi(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Sa.test(this.nodeName)&&!$n.test(s)&&(this.checked||!vn.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(Ki,`\r
`)}}):{name:u.name,value:h.replace(Ki,`\r
`)}}).get()}});var Ca=/%20/g,rn=/#.*$/,Ra=/([?&])_=[^&]*/,Pa=/^(.*?):[ \t]*([^\r\n]*)$/mg,ai=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ui=/^(?:GET|HEAD)$/,Js=/^\/\//,Hn={},Sn={},Xi="*/".concat("*"),br=J.createElement("a");br.href=Ar.href;function Fe(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,_=u.toLowerCase().match(yt)||[];if(K(h))for(;d=_[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Zs(s,u,h,d){var m={},_=s===Sn;function E(R){var A;return m[R]=!0,l.each(s[R]||[],function(N,q){var $=q(u,h,d);if(typeof $=="string"&&!_&&!m[$])return u.dataTypes.unshift($),E($),!1;if(_)return!(A=$)}),A}return E(u.dataTypes[0])||!m["*"]&&E("*")}function Yi(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function eo(s,u,h){for(var d,m,_,E,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)_=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){_=m;break}E||(E=m)}_=_||E}if(_)return _!==A[0]&&A.unshift(_),h[_]}function to(s,u,h,d){var m,_,E,R,A,N={},q=s.dataTypes.slice();if(q[1])for(E in s.converters)N[E.toLowerCase()]=s.converters[E];for(_=q.shift();_;)if(s.responseFields[_]&&(h[s.responseFields[_]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=_,_=q.shift(),_){if(_==="*")_=A;else if(A!=="*"&&A!==_){if(E=N[A+" "+_]||N["* "+_],!E){for(m in N)if(R=m.split(" "),R[1]===_&&(E=N[A+" "+R[0]]||N["* "+R[0]],E)){E===!0?E=N[m]:N[m]!==!0&&(_=R[0],q.unshift(R[1]));break}}if(E!==!0)if(E&&s.throws)u=E(u);else try{u=E(u)}catch($){return{state:"parsererror",error:E?$:"No conversion from "+A+" to "+_}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ar.href,type:"GET",isLocal:ai.test(Ar.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Yi(Yi(s,l.ajaxSettings),u):Yi(l.ajaxSettings,s)},ajaxPrefilter:Fe(Hn),ajaxTransport:Fe(Sn),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,_,E,R,A,N,q,$,F=l.ajaxSetup({},u),Q=F.context||F,ue=F.context&&(Q.nodeType||Q.jquery)?l(Q):l.event,we=l.Deferred(),he=l.Callbacks("once memory"),Qe=F.statusCode||{},$e={},kt={},Dt="canceled",Ee={readyState:0,getResponseHeader:function(be){var Ue;if(A){if(!_)for(_={};Ue=Pa.exec(m);)_[Ue[1].toLowerCase()+" "]=(_[Ue[1].toLowerCase()+" "]||[]).concat(Ue[2]);Ue=_[be.toLowerCase()+" "]}return Ue==null?null:Ue.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(be,Ue){return A==null&&(be=kt[be.toLowerCase()]=kt[be.toLowerCase()]||be,$e[be]=Ue),this},overrideMimeType:function(be){return A==null&&(F.mimeType=be),this},statusCode:function(be){var Ue;if(be)if(A)Ee.always(be[Ee.status]);else for(Ue in be)Qe[Ue]=[Qe[Ue],be[Ue]];return this},abort:function(be){var Ue=be||Dt;return h&&h.abort(Ue),We(0,Ue),this}};if(we.promise(Ee),F.url=((s||F.url||Ar.href)+"").replace(Js,Ar.protocol+"//"),F.type=u.method||u.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(yt)||[""],F.crossDomain==null){R=J.createElement("a");try{R.href=F.url,R.href=R.href,F.crossDomain=br.protocol+"//"+br.host!=R.protocol+"//"+R.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=l.param(F.data,F.traditional)),Zs(Hn,F,u,Ee),A)return Ee;N=l.event&&F.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!ui.test(F.type),d=F.url.replace(rn,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(Ca,"+")):($=F.url.slice(d.length),F.data&&(F.processData||typeof F.data=="string")&&(d+=(bn.test(d)?"&":"?")+F.data,delete F.data),F.cache===!1&&(d=d.replace(Ra,"$1"),$=(bn.test(d)?"&":"?")+"_="+Xs.guid+++$),F.url=d+$),F.ifModified&&(l.lastModified[d]&&Ee.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&Ee.setRequestHeader("If-None-Match",l.etag[d])),(F.data&&F.hasContent&&F.contentType!==!1||u.contentType)&&Ee.setRequestHeader("Content-Type",F.contentType),Ee.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+Xi+"; q=0.01":""):F.accepts["*"]);for(q in F.headers)Ee.setRequestHeader(q,F.headers[q]);if(F.beforeSend&&(F.beforeSend.call(Q,Ee,F)===!1||A))return Ee.abort();if(Dt="abort",he.add(F.complete),Ee.done(F.success),Ee.fail(F.error),h=Zs(Sn,F,u,Ee),!h)We(-1,"No Transport");else{if(Ee.readyState=1,N&&ue.trigger("ajaxSend",[Ee,F]),A)return Ee;F.async&&F.timeout>0&&(E=e.setTimeout(function(){Ee.abort("timeout")},F.timeout));try{A=!1,h.send($e,We)}catch(be){if(A)throw be;We(-1,be)}}function We(be,Ue,Ut,o){var f,g,T,O,U,X=Ue;A||(A=!0,E&&e.clearTimeout(E),h=void 0,m=o||"",Ee.readyState=be>0?4:0,f=be>=200&&be<300||be===304,Ut&&(O=eo(F,Ee,Ut)),!f&&l.inArray("script",F.dataTypes)>-1&&l.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),O=to(F,O,Ee,f),f?(F.ifModified&&(U=Ee.getResponseHeader("Last-Modified"),U&&(l.lastModified[d]=U),U=Ee.getResponseHeader("etag"),U&&(l.etag[d]=U)),be===204||F.type==="HEAD"?X="nocontent":be===304?X="notmodified":(X=O.state,g=O.data,T=O.error,f=!T)):(T=X,(be||!X)&&(X="error",be<0&&(be=0))),Ee.status=be,Ee.statusText=(Ue||X)+"",f?we.resolveWith(Q,[g,X,Ee]):we.rejectWith(Q,[Ee,X,T]),Ee.statusCode(Qe),Qe=void 0,N&&ue.trigger(f?"ajaxSuccess":"ajaxError",[Ee,F,f?g:T]),he.fireWith(Q,[Ee,X]),N&&(ue.trigger("ajaxComplete",[Ee,F]),--l.active||l.event.trigger("ajaxStop")))}return Ee},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,_){return K(d)&&(_=_||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:_,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(K(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return K(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=K(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var no={0:200,1223:204},sn=l.ajaxSettings.xhr();B.cors=!!sn&&"withCredentials"in sn,B.ajax=sn=!!sn,l.ajaxTransport(function(s){var u,h;if(B.cors||sn&&!s.crossDomain)return{send:function(d,m){var _,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(_ in s.xhrFields)E[_]=s.xhrFields[_];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(_ in d)E.setRequestHeader(_,d[_]);u=function(R){return function(){u&&(u=h=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,R==="abort"?E.abort():R==="error"?typeof E.status!="number"?m(0,"error"):m(E.status,E.statusText):m(no[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=u(),h=E.onerror=E.ontimeout=u("error"),E.onabort!==void 0?E.onabort=h:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{E.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(_){u.remove(),h=null,_&&m(_.type==="error"?404:200,_.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var Ji=[],Pt=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Ji.pop()||l.expando+"_"+Xs.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,_,E=s.jsonp!==!1&&(Pt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Pt.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=K(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace(Pt,"$1"+d):s.jsonp!==!1&&(s.url+=(bn.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return _||l.error(d+" was not called"),_[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){_=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Ji.push(d)),_&&K(m)&&m(_[0]),_=m=void 0}),"script"}),B.createHTMLDocument=(function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,_;return u||(B.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=J.location.href,u.head.appendChild(d)):u=J),m=$t.exec(s),_=!h&&[],m?[u.createElement(m[1])]:(m=ji([s],u,_),_&&_.length&&l(_).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,_,E=this,R=s.indexOf(" ");return R>-1&&(d=An(s.slice(R)),s=s.slice(0,R)),K(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),E.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){_=arguments,E.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,N){E.each(function(){h.apply(this,_||[A.responseText,N,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,_,E,R,A,N,q=l.css(s,"position"),$=l(s),F={};q==="static"&&(s.style.position="relative"),R=$.offset(),_=l.css(s,"top"),A=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(_+A).indexOf("auto")>-1,N?(d=$.position(),E=d.top,m=d.left):(E=parseFloat(_)||0,m=parseFloat(A)||0),K(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(F.top=u.top-R.top+E),u.left!=null&&(F.left=u.left-R.left+m),"using"in u?u.using.call(s,F):$.css(F)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Jt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return Ht(this,function(m,_,E){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),E===void 0)return R?R[u]:m[_];R?R.scrollTo(h?R.pageXOffset:E,h?E:R.pageYOffset):m[_]=E},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=vr(B.pixelPosition,function(h,d){if(d)return d=_r(h,u),ei.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,_){var E=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||_===!0?"margin":"border");return Ht(this,function(A,N,q){var $;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?($=A.documentElement,Math.max(A.body["scroll"+s],$["scroll"+s],A.body["offset"+s],$["offset"+s],$["client"+s])):q===void 0?l.css(A,N,R):l.style(A,N,q,R)},u,E?m:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var ro=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!K(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=K,l.isWindow=Y,l.camelCase=xt,l.type=xe,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(ro,"$1")};var ka=e.jQuery,Sr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Sr),s&&e.jQuery===l&&(e.jQuery=ka),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(po)),po.exports}var Nd=Dd();const ge=Pd(Nd),xd=()=>{};var _c={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],y=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(y>>10)),e[r++]=String.fromCharCode(56320+(y&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,y=i+2<n.length,v=y?n[i+2]:0,I=a>>2,k=(a&3)<<4|p>>4;let D=(p&15)<<2|v>>6,z=v&63;y||(z=64,c||(D=64)),r.push(t[I],t[k],t[D],t[z])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||k==null)throw new Od;const D=a<<2|p>>4;if(r.push(D),v!==64){const z=p<<4&240|v>>2;if(r.push(z),k!==64){const B=v<<6&192|k;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ld=function(n){const e=Kl(n);return Ql.encodeByteArray(e,!0)},bo=function(n){return Ld(n).replace(/\./g,"")},Xl=function(n){try{return Ql.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=()=>Md().__FIREBASE_DEFAULTS__,Ud=()=>{if(typeof process>"u"||typeof _c>"u")return;const n=_c.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xl(n[1]);return e&&JSON.parse(e)},Go=()=>{try{return xd()||Fd()||Ud()||jd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yl=n=>Go()?.emulatorHosts?.[n],qd=n=>{const e=Yl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Jl=()=>Go()?.config,Zl=n=>Go()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bo(JSON.stringify(t)),bo(JSON.stringify(c)),""].join(".")}const os={};function Hd(){const n={prod:[],emulator:[]};for(const e of Object.keys(os))os[e]?n.emulator.push(e):n.prod.push(e);return n}function Wd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let vc=!1;function th(n,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||os[n]===e||os[n]||vc)return;os[n]=e;function t(D){return`__firebase__banner__${D}`}const r="__firebase__banner",a=Hd().prod.length>0;function c(){const D=document.getElementById(r);D&&D.remove()}function p(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,z){D.setAttribute("width","24"),D.setAttribute("id",z),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function v(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{vc=!0,c()},D}function I(D,z){D.setAttribute("id",z),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function k(){const D=Wd(r),z=t("text"),B=document.getElementById(z)||document.createElement("span"),K=t("learnmore"),Y=document.getElementById(K)||document.createElement("a"),J=t("preprendIcon"),_e=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ve=D.element;p(ve),I(Y,K);const xe=v();y(_e,J),ve.append(_e,B,Y,xe),document.body.appendChild(ve)}a?(B.innerText="Preview backend disconnected.",_e.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_e.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Gd(){const n=Go()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yd(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jd(){return!Gd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zd(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class Mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tp,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?np(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new Mn(i,p,r)}}function np(n,e){return n.replace(rp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rp=/\{\$([^}]+)}/g;function ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(Ec(a)&&Ec(c)){if(!Nr(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ec(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function es(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function ts(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sp(n,e){const t=new op(n,e);return t.subscribe.bind(t)}class op{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ap(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ap(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function La(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Bd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lp(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(n){return n===Rr?void 0:n}function lp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new up(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const fp={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},dp=Se.INFO,pp={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},gp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=pp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const mp=(n,e)=>e.some(t=>n instanceof t);let Tc,wc;function yp(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nh=new WeakMap,Qa=new WeakMap,rh=new WeakMap,Ma=new WeakMap,Tu=new WeakMap;function vp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Zn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&nh.set(t,n)}).catch(()=>{}),Tu.set(e,n),e}function Ep(n){if(Qa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Qa.set(n,e)}let Xa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tp(n){Xa=n(Xa)}function wp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fa(this),e,...t);return rh.set(r,e.sort?e.sort():[e]),Zn(r)}:_p().includes(n)?function(...e){return n.apply(Fa(this),e),Zn(nh.get(this))}:function(...e){return Zn(n.apply(Fa(this),e))}}function Ip(n){return typeof n=="function"?wp(n):(n instanceof IDBTransaction&&Ep(n),mp(n,yp())?new Proxy(n,Xa):n)}function Zn(n){if(n instanceof IDBRequest)return vp(n);if(Ma.has(n))return Ma.get(n);const e=Ip(n);return e!==n&&(Ma.set(n,e),Tu.set(e,n)),e}const Fa=n=>Tu.get(n);function Ap(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Zn(c);return r&&c.addEventListener("upgradeneeded",y=>{r(Zn(c.result),y.oldVersion,y.newVersion,Zn(c.transaction),y)}),t&&c.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),p.then(y=>{a&&y.addEventListener("close",()=>a()),i&&y.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const bp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Ua=new Map;function Ic(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Sp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bp.includes(t)))return;const a=async function(c,...p){const y=this.transaction(c,i?"readwrite":"readonly");let v=y.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&y.done]))[0]};return Ua.set(e,a),a}Tp(n=>({...n,get:(e,t,r)=>Ic(e,t)||n.get(e,t,r),has:(e,t)=>!!Ic(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rp(n){return n.getComponent()?.type==="VERSION"}const Ya="@firebase/app",Ac="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Eu("@firebase/app"),Pp="@firebase/app-compat",kp="@firebase/analytics-compat",Dp="@firebase/analytics",Np="@firebase/app-check-compat",xp="@firebase/app-check",Vp="@firebase/auth",Op="@firebase/auth-compat",Lp="@firebase/database",Mp="@firebase/data-connect",Fp="@firebase/database-compat",Up="@firebase/functions",jp="@firebase/functions-compat",qp="@firebase/installations",Bp="@firebase/installations-compat",$p="@firebase/messaging",Hp="@firebase/messaging-compat",Wp="@firebase/performance",zp="@firebase/performance-compat",Gp="@firebase/remote-config",Kp="@firebase/remote-config-compat",Qp="@firebase/storage",Xp="@firebase/storage-compat",Yp="@firebase/firestore",Jp="@firebase/ai",Zp="@firebase/firestore-compat",eg="firebase",tg="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",ng={[Ya]:"fire-core",[Pp]:"fire-core-compat",[Dp]:"fire-analytics",[kp]:"fire-analytics-compat",[xp]:"fire-app-check",[Np]:"fire-app-check-compat",[Vp]:"fire-auth",[Op]:"fire-auth-compat",[Lp]:"fire-rtdb",[Mp]:"fire-data-connect",[Fp]:"fire-rtdb-compat",[Up]:"fire-fn",[jp]:"fire-fn-compat",[qp]:"fire-iid",[Bp]:"fire-iid-compat",[$p]:"fire-fcm",[Hp]:"fire-fcm-compat",[Wp]:"fire-perf",[zp]:"fire-perf-compat",[Gp]:"fire-rc",[Kp]:"fire-rc-compat",[Qp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Yp]:"fire-fst",[Zp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,rg=new Map,Za=new Map;function bc(n,e){try{n.container.addComponent(e)}catch(t){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ei(n){const e=n.name;if(Za.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of So.values())bc(t,n);for(const t of rg.values())bc(t,n);return!0}function wu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Ts("app","Firebase",ig);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=tg;function ih(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ja,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(t||(t=Jl()),!t)throw er.create("no-options");const a=So.get(i);if(a){if(Nr(t,a.options)&&Nr(r,a.config))return a;throw er.create("duplicate-app",{appName:i})}const c=new hp(i);for(const y of Za.values())c.addComponent(y);const p=new sg(t,r,c);return So.set(i,p),p}function sh(n=Ja){const e=So.get(n);if(!e&&n===Ja&&Jl())return ih();if(!e)throw er.create("no-app",{appName:n});return e}function tr(n,e,t){let r=ng[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(c.join(" "));return}Ei(new xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebase-heartbeat-database",ag=1,fs="firebase-heartbeat-store";let ja=null;function oh(){return ja||(ja=Ap(og,ag,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fs)}catch(t){console.warn(t)}}}}).catch(n=>{throw er.create("idb-open",{originalErrorMessage:n.message})})),ja}async function ug(n){try{const t=(await oh()).transaction(fs),r=await t.objectStore(fs).get(ah(n));return await t.done,r}catch(e){if(e instanceof Mn)Nn.warn(e.message);else{const t=er.create("idb-get",{originalErrorMessage:e?.message});Nn.warn(t.message)}}}async function Sc(n,e){try{const r=(await oh()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,ah(n)),await r.done}catch(t){if(t instanceof Mn)Nn.warn(t.message);else{const r=er.create("idb-set",{originalErrorMessage:t?.message});Nn.warn(r.message)}}}function ah(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,lg=30;class hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>lg){const i=pg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cc(),{heartbeatsToSend:t,unsentEntries:r}=fg(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Nn.warn(e),""}}}function Cc(){return new Date().toISOString().substring(0,10)}function fg(n,e=cg){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),Rc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Rc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zd()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ug(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rc(n){return bo(JSON.stringify({version:2,heartbeats:n})).length}function pg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){Ei(new xr("platform-logger",e=>new Cp(e),"PRIVATE")),Ei(new xr("heartbeat",e=>new hg(e),"PRIVATE")),tr(Ya,Ac,n),tr(Ya,Ac,"esm2020"),tr("fire-js","")}gg("");var mg="firebase",yg="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(mg,yg,"app");function uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _g=uh,ch=new Ts("auth","Firebase",uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Eu("@firebase/auth");function vg(n,...e){Co.logLevel<=Se.WARN&&Co.warn(`Auth (${Pi}): ${n}`,...e)}function go(n,...e){Co.logLevel<=Se.ERROR&&Co.error(`Auth (${Pi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n,...e){throw Iu(n,...e)}function un(n,...e){return Iu(n,...e)}function lh(n,e,t){const r={..._g(),[e]:t};return new Ts("auth","Firebase",r).create(e,{appName:n.name})}function kn(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Iu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ch.create(n,...e)}function ce(n,e,...t){if(!n)throw Iu(e,...t)}function Rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw go(e),new Error(e)}function xn(n,e){n||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return typeof self<"u"&&self.location?.href||""}function Eg(){return Pc()==="http:"||Pc()==="https:"}function Pc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eg()||Qd()||"connection"in navigator)?navigator.onLine:!0}function wg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=zd()||Xd()}get(){return Tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,e){xn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bg=new Is(3e4,6e4);function Fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gn(n,e,t,r,i={}){return fh(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=ws({key:n.config.apiKey,...c}).slice(1),y=await n._getAdditionalHeaders();y["Content-Type"]="application/json",n.languageCode&&(y["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:y,...a};return Kd()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&Ri(n.emulatorConfig.host)&&(v.credentials="include"),hh.fetch()(await dh(n,n.config.apiHost,t,p),v)})}async function fh(n,e,t){n._canInitEmulator=!1;const r={...Ig,...e};try{const i=new Cg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ao(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[y,v]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",c);if(y==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",c);if(y==="USER_DISABLED")throw ao(n,"user-disabled",c);const I=r[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw lh(n,I,v);Kt(n,I)}}catch(i){if(i instanceof Mn)throw i;Kt(n,"network-request-failed",{message:String(i)})}}async function As(n,e,t,r,i={}){const a=await gn(n,e,t,r,i);return"mfaPendingCredential"in a&&Kt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function dh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?Au(n.config,i):`${n.config.apiScheme}://${i}`;return Ag.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function Sg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),bg.get())})}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=un(n,e,r);return i.customData._tokenResponse=t,i}function kc(n){return n!==void 0&&n.enterprise!==void 0}class Rg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pg(n,e){return gn(n,"GET","/v2/recaptchaConfig",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return gn(n,"POST","/v1/accounts:delete",e)}async function Ro(n,e){return gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(n,e=!1){const t=qe(n),r=await t.getIdToken(e),i=bu(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:as(qa(i.auth_time)),issuedAtTime:as(qa(i.iat)),expirationTime:as(qa(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function qa(n){return Number(n)*1e3}function bu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xl(t);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Dc(n){const e=bu(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mn&&Ng(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ng({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(n){const e=n.auth,t=await n.getIdToken(),r=await Ti(n,Ro(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?ph(i.providerUserInfo):[],c=Og(n.providerData,a),p=n.isAnonymous,y=!(n.email&&i.passwordHash)&&!c?.length,v=p?y:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,I)}async function Vg(n){const e=qe(n);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Og(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ph(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(n,e){const t=await fh(n,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await dh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:r};return n.emulatorConfig&&Ri(n.emulatorConfig.host)&&(y.credentials="include"),hh.fetch()(c,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mg(n,e){return gn(n,"POST","/v2/accounts:revokeToken",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=Dc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Lg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new mi;return r&&(ce(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(ce(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dg(this,e)}reload(){return Vg(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Ti(this,kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:k,emailVerified:D,isAnonymous:z,providerData:B,stsTokenManager:K}=t;ce(k&&K,e,"internal-error");const Y=mi.fromJSON(this.name,K);ce(typeof k=="string",e,"internal-error"),Gn(r,e.name),Gn(i,e.name),ce(typeof D=="boolean",e,"internal-error"),ce(typeof z=="boolean",e,"internal-error"),Gn(a,e.name),Gn(c,e.name),Gn(p,e.name),Gn(y,e.name),Gn(v,e.name),Gn(I,e.name);const J=new Gt({uid:k,auth:e,email:i,emailVerified:D,displayName:r,isAnonymous:z,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:v,lastLoginAt:I});return B&&Array.isArray(B)&&(J.providerData=B.map(_e=>({..._e}))),y&&(J._redirectEventId=y),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new mi;i.updateFromServerResponse(t);const a=new Gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Po(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ph(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new mi;p.updateFromIdToken(r);const y=new Gt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map;function Pn(n){xn(n instanceof Function,"Expected a class definition");let e=Nc.get(n);return e?(xn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gh.type="NONE";const xc=gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class yi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,a),this.fullPersistenceKey=mo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ro(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new yi(Pn(xc),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||Pn(xc);const c=mo(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const I=await v._get(c);if(I){let k;if(typeof I=="string"){const D=await Ro(e,{idToken:I}).catch(()=>{});if(!D)break;k=await Gt._fromGetAccountInfoResponse(e,D,I)}else k=Gt._fromJSON(e,I);v!==a&&(p=k),a=v;break}}catch{}const y=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!y.length?new yi(a,e,r):(a=y[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(c)}catch{}})),new yi(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Th(e))return"Blackberry";if(wh(e))return"Webos";if(yh(e))return"Safari";if((e.includes("chrome/")||_h(e))&&!e.includes("edge/"))return"Chrome";if(Eh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function mh(n=pt()){return/firefox\//i.test(n)}function yh(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _h(n=pt()){return/crios\//i.test(n)}function vh(n=pt()){return/iemobile/i.test(n)}function Eh(n=pt()){return/android/i.test(n)}function Th(n=pt()){return/blackberry/i.test(n)}function wh(n=pt()){return/webos/i.test(n)}function Su(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fg(n=pt()){return Su(n)&&!!window.navigator?.standalone}function Ug(){return Yd()&&document.documentMode===10}function Ih(n=pt()){return Su(n)||Eh(n)||wh(n)||Th(n)||/windows phone/i.test(n)||vh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e=[]){let t;switch(n){case"Browser":t=Vc(pt());break;case"Worker":t=`${Vc(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const y=e(a);c(y)}catch(y){p(y)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(n,e={}){return gn(n,"GET","/v2/passwordPolicy",Fn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=6;class $g{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Bg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oc(this),this.idTokenSubscription=new Oc(this),this.beforeStateQueue=new jg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ch,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ro(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(kn(this));const t=e?qe(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qg(this),t=new $g(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[Pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,r,i);return()=>{c=!0,y()}}else{const y=e.addObserver(t);return()=>{c=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&vg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function lr(n){return qe(n)}class Oc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sp(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wg(n){Ko=n}function bh(n){return Ko.loadJS(n)}function zg(){return Ko.recaptchaEnterpriseScript}function Gg(){return Ko.gapiScript}function Kg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qg{constructor(){this.enterprise=new Xg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yg="recaptcha-enterprise",Sh="NO_RECAPTCHA";class Jg{constructor(e){this.type=Yg,this.auth=lr(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,p)=>{Pg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new Rg(y);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,c(v.siteKey)}}).catch(y=>{p(y)})})}function i(a,c,p){const y=window.grecaptcha;kc(y)?y.enterprise.ready(()=>{y.enterprise.execute(a,{action:e}).then(v=>{c(v)}).catch(()=>{c(Sh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qg().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(p=>{if(!t&&kc(window.grecaptcha))i(p,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let y=zg();y.length!==0&&(y+=p),bh(y).then(()=>{i(p,a,c)}).catch(v=>{c(v)})}}).catch(p=>{c(p)})})}}async function Lc(n,e,t,r=!1,i=!1){const a=new Jg(n);let c;if(i)c=Sh;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ko(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Lc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Lc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){const t=wu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Nr(a,e??{}))return i;Kt(i,"already-initialized")}return t.initialize({options:e})}function em(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Pn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function tm(n,e,t){const r=lr(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Ch(e),{host:c,port:p}=nm(e),y=p===null?"":`:${p}`,v={url:`${a}//${c}${y}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Nr(v,r.config.emulator)&&Nr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,Ri(c)?(eh(`${a}//${c}${y}`),th("Auth",!0)):rm()}function Ch(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nm(n){const e=Ch(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Mc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Mc(c)}}}function Mc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,t){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function im(n,e){return gn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e){return As(n,"POST","/v1/accounts:signInWithPassword",Fn(n,e))}async function Rh(n,e){return gn(n,"POST","/v1/accounts:sendOobCode",Fn(n,e))}async function om(n,e){return Rh(n,e)}async function am(n,e){return Rh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}async function cm(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Cu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ds(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ds(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(e,t,"signInWithPassword",sm);case"emailLink":return um(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(e,r,"signUpPassword",im);case"emailLink":return cm(e,{idToken:t,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n,e){return As(n,"POST","/v1/accounts:signInWithIdp",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="http://localhost";class Vr extends Cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Vr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return _i(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_i(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_i(e,t)}buildRequest(){const e={requestUri:lm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ws(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fm(n){const e=es(ts(n)).link,t=e?es(ts(e)).deep_link_id:null,r=es(ts(n)).deep_link_id;return(r?es(ts(r)).link:null)||r||t||e||n}class Ru{constructor(e){const t=es(ts(e)),r=t.apiKey??null,i=t.oobCode??null,a=hm(t.mode??null);ce(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=fm(e);try{return new Ru(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,t){return ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ru.parseLink(t);return ce(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends bs{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qn.credential(t,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends bs{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends bs{constructor(){super("twitter.com")}static credential(e,t){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yn.credential(t,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(n,e){return As(n,"POST","/v1/accounts:signUp",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Gt._fromIdTokenResponse(e,r,i),c=Fc(r);return new Or({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Fc(r);return new Or({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Mn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Do(e,t,r,i)}}function kh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(n,a,e,r):a})}async function pm(n,e,t=!1){const r=await Ti(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Or._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(n,e,t=!1){const{auth:r}=n;if(qt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const a=await Ti(n,kh(r,i,e,n),t);ce(a.idToken,r,"internal-error");const c=bu(a.idToken);ce(c,r,"internal-error");const{sub:p}=c;return ce(n.uid===p,r,"user-mismatch"),Or._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Kt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(n,e,t=!1){if(qt(n.app))return Promise.reject(kn(n));const r="signIn",i=await kh(n,r,e),a=await Or._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function mm(n,e){return Dh(lr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(n){const e=lr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HE(n,e,t){const r=lr(n);await ko(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",am)}async function WE(n,e,t){if(qt(n.app))return Promise.reject(kn(n));const r=lr(n),c=await ko(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dm).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Nh(n),y}),p=await Or._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(p.user),p}function zE(n,e,t){return qt(n.app)?Promise.reject(kn(n)):mm(qe(n),ki.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nh(n),r})}async function GE(n,e){const t=qe(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await om(t.auth,i);a!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(n,e){return gn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=qe(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Ti(r,ym(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const p=r.providerData.find(({providerId:y})=>y==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function _m(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function vm(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function QE(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function XE(n){return qe(n).signOut()}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=1e3,Tm=10;class Vh extends xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ih(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,y)=>{this.notifyListeners(c,y)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Ug()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vh.type="LOCAL";const wm=Vh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oh.type="SESSION";const Lh=Oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async v=>v(t.origin,a)),y=await Im(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,y)=>{const v=Pu("",20);i.port1.start();const I=setTimeout(()=>{y(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(k){const D=k;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(D.data.response);break;default:clearTimeout(I),clearTimeout(a),y(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function bm(n){cn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function Sm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cm(){return navigator?.serviceWorker?.controller||null}function Rm(){return Mh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="firebaseLocalStorageDb",Pm=1,xo="firebaseLocalStorage",Uh="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xo(n,e){return n.transaction([xo],e?"readwrite":"readonly").objectStore(xo)}function km(){const n=indexedDB.deleteDatabase(Fh);return new Ss(n).toPromise()}function nu(){const n=indexedDB.open(Fh,Pm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(xo,{keyPath:Uh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(xo)?e(r):(r.close(),await km(),e(await nu()))})})}async function Uc(n,e,t){const r=Xo(n,!0).put({[Uh]:e,value:t});return new Ss(r).toPromise()}async function Dm(n,e){const t=Xo(n,!1).get(e),r=await new Ss(t).toPromise();return r===void 0?null:r.value}function jc(n,e){const t=Xo(n,!0).delete(e);return new Ss(t).toPromise()}const Nm=800,xm=3;class jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(Rm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Sm(),!this.activeServiceWorker)return;this.sender=new Am(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await Uc(e,No,"1"),await jc(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Xo(i,!1).getAll();return new Ss(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jh.type="LOCAL";const Vm=jh;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n,e){return e?Pn(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _i(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lm(n){return Dh(n.auth,new ku(n),n.bypassAuthState)}function Mm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),gm(t,new ku(n),n.bypassAuthState)}async function Fm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),pm(t,new ku(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const y={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lm;case"linkViaPopup":case"linkViaRedirect":return Fm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:Kt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Is(2e3,1e4);class gi extends qh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Um.get())};e()}}gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="pendingRedirect",yo=new Map;class qm extends qh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await Bm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(n,e){const t=Wm(e),r=Hm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function $m(n,e){yo.set(n._key(),e)}function Hm(n){return Pn(n._redirectPersistence)}function Wm(n){return mo(jm,n.config.apiKey,n.name)}async function zm(n,e,t=!1){if(qt(n.app))return Promise.reject(kn(n));const r=lr(n),i=Om(r,e),c=await new qm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=600*1e3;class Km{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Bh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(un(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}}function qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Qm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,e={}){return gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jm=/^https?/;async function Zm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xm(n);for(const t of e)try{if(ey(t))return}catch{}Kt(n,"unauthorized-domain")}function ey(n){const e=eu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Jm.test(t))return!1;if(Ym.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Is(3e4,6e4);function Bc(){const n=cn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ny(n){return new Promise((e,t)=>{function r(){Bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bc(),t(un(n,"network-request-failed"))},timeout:ty.get()})}if(cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cn().gapi?.load)r();else{const i=Kg("iframefcb");return cn()[i]=()=>{gapi.load?r():t(un(n,"network-request-failed"))},bh(`${Gg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw _o=null,e})}let _o=null;function ry(n){return _o=_o||ny(n),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Is(5e3,15e3),sy="__/auth/iframe",oy="emulator/auth/iframe",ay={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cy(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Au(e,oy):`https://${n.config.authDomain}/${sy}`,r={apiKey:e.apiKey,appName:n.name,v:Pi},i=uy.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ws(r).slice(1)}`}async function ly(n){const e=await ry(n),t=cn().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:cy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ay,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=un(n,"network-request-failed"),p=cn().setTimeout(()=>{a(c)},iy.get());function y(){cn().clearTimeout(p),i(r)}r.ping(y).then(y,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fy=500,dy=600,py="_blank",gy="http://localhost";class $c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function my(n,e,t,r=fy,i=dy){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const y={...hy,width:r.toString(),height:i.toString(),top:a,left:c},v=pt().toLowerCase();t&&(p=_h(v)?py:t),mh(v)&&(e=e||gy,y.scrollbars="yes");const I=Object.entries(y).reduce((D,[z,B])=>`${D}${z}=${B},`,"");if(Fg(v)&&p!=="_self")return yy(e||"",p),new $c(null);const k=window.open(e||"",p,I);ce(k,n,"popup-blocked");try{k.focus()}catch{}return new $c(k)}function yy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="__/auth/handler",vy="emulator/auth/handler",Ey=encodeURIComponent("fac");async function Hc(n,e,t,r,i,a){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pi,eventId:i};if(e instanceof Ph){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ip(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,k]of Object.entries({}))c[I]=k}if(e instanceof bs){const I=e.getScopes().filter(k=>k!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const y=await n._getAppCheckToken(),v=y?`#${Ey}=${encodeURIComponent(y)}`:"";return`${Ty(n)}?${ws(p).slice(1)}${v}`}function Ty({config:n}){return n.emulator?Au(n,vy):`https://${n.authDomain}/${_y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lh,this._completeRedirectFn=zm,this._overrideRedirectResult=$m}async _openPopup(e,t,r,i){xn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Hc(e,t,r,eu(),i);return my(e,a,Pu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Hc(e,t,r,eu(),i);return bm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(xn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ly(e),r=new Km(e);return t.register("authEvent",i=>(ce(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ba,{type:Ba},i=>{const a=i?.[0]?.[Ba];a!==void 0&&t(!!a),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ih()||yh()||Su()}}const Iy=wy;var Wc="@firebase/auth",zc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sy(n){Ei(new xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;ce(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const y={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ah(n)},v=new Hg(r,i,a,y);return em(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new xr("auth-internal",e=>{const t=lr(e.getProvider("auth").getImmediate());return(r=>new Ay(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Wc,zc,by(n)),tr(Wc,zc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=300,Ry=Zl("authIdTokenMaxAge")||Cy;let Gc=null;const Py=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ry)return;const i=t?.token;Gc!==i&&(Gc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ky(n=sh()){const e=wu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zg(n,{popupRedirectResolver:Iy,persistence:[Vm,wm,Lh]}),r=Zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Py(a.toString());vm(t,c,()=>c(t.currentUser)),_m(t,p=>c(p))}}const i=Yl("auth");return i&&tm(t,`http://${i}`),t}function Dy(){return document.getElementsByTagName("head")?.[0]??document}Wg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=un("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Dy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sy("Browser");var Kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nr,$h;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.D=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.C=function(x,V,L){for(var b=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)b[gt-2]=arguments[gt];return C.prototype[V].apply(x,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);var x=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)x[V]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(V=0;16>V;++V)x[V]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],V=l.g[2];var L=l.g[3],b=C+(L^S&(V^L))+x[0]+3614090360&4294967295;C=S+(b<<7&4294967295|b>>>25),b=L+(V^C&(S^V))+x[1]+3905402710&4294967295,L=C+(b<<12&4294967295|b>>>20),b=V+(S^L&(C^S))+x[2]+606105819&4294967295,V=L+(b<<17&4294967295|b>>>15),b=S+(C^V&(L^C))+x[3]+3250441966&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(L^S&(V^L))+x[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(V^C&(S^V))+x[5]+1200080426&4294967295,L=C+(b<<12&4294967295|b>>>20),b=V+(S^L&(C^S))+x[6]+2821735955&4294967295,V=L+(b<<17&4294967295|b>>>15),b=S+(C^V&(L^C))+x[7]+4249261313&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(L^S&(V^L))+x[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(V^C&(S^V))+x[9]+2336552879&4294967295,L=C+(b<<12&4294967295|b>>>20),b=V+(S^L&(C^S))+x[10]+4294925233&4294967295,V=L+(b<<17&4294967295|b>>>15),b=S+(C^V&(L^C))+x[11]+2304563134&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(L^S&(V^L))+x[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(V^C&(S^V))+x[13]+4254626195&4294967295,L=C+(b<<12&4294967295|b>>>20),b=V+(S^L&(C^S))+x[14]+2792965006&4294967295,V=L+(b<<17&4294967295|b>>>15),b=S+(C^V&(L^C))+x[15]+1236535329&4294967295,S=V+(b<<22&4294967295|b>>>10),b=C+(V^L&(S^V))+x[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^V&(C^S))+x[6]+3225465664&4294967295,L=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(L^C))+x[11]+643717713&4294967295,V=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(V^L))+x[0]+3921069994&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^L&(S^V))+x[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^V&(C^S))+x[10]+38016083&4294967295,L=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(L^C))+x[15]+3634488961&4294967295,V=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(V^L))+x[4]+3889429448&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^L&(S^V))+x[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^V&(C^S))+x[14]+3275163606&4294967295,L=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(L^C))+x[3]+4107603335&4294967295,V=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(V^L))+x[8]+1163531501&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(V^L&(S^V))+x[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^V&(C^S))+x[2]+4243563512&4294967295,L=C+(b<<9&4294967295|b>>>23),b=V+(C^S&(L^C))+x[7]+1735328473&4294967295,V=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(V^L))+x[12]+2368359562&4294967295,S=V+(b<<20&4294967295|b>>>12),b=C+(S^V^L)+x[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^V)+x[8]+2272392833&4294967295,L=C+(b<<11&4294967295|b>>>21),b=V+(L^C^S)+x[11]+1839030562&4294967295,V=L+(b<<16&4294967295|b>>>16),b=S+(V^L^C)+x[14]+4259657740&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^L)+x[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^V)+x[4]+1272893353&4294967295,L=C+(b<<11&4294967295|b>>>21),b=V+(L^C^S)+x[7]+4139469664&4294967295,V=L+(b<<16&4294967295|b>>>16),b=S+(V^L^C)+x[10]+3200236656&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^L)+x[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^V)+x[0]+3936430074&4294967295,L=C+(b<<11&4294967295|b>>>21),b=V+(L^C^S)+x[3]+3572445317&4294967295,V=L+(b<<16&4294967295|b>>>16),b=S+(V^L^C)+x[6]+76029189&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(S^V^L)+x[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^V)+x[12]+3873151461&4294967295,L=C+(b<<11&4294967295|b>>>21),b=V+(L^C^S)+x[15]+530742520&4294967295,V=L+(b<<16&4294967295|b>>>16),b=S+(V^L^C)+x[2]+3299628645&4294967295,S=V+(b<<23&4294967295|b>>>9),b=C+(V^(S|~L))+x[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~V))+x[7]+1126891415&4294967295,L=C+(b<<10&4294967295|b>>>22),b=V+(C^(L|~S))+x[14]+2878612391&4294967295,V=L+(b<<15&4294967295|b>>>17),b=S+(L^(V|~C))+x[5]+4237533241&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~L))+x[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~V))+x[3]+2399980690&4294967295,L=C+(b<<10&4294967295|b>>>22),b=V+(C^(L|~S))+x[10]+4293915773&4294967295,V=L+(b<<15&4294967295|b>>>17),b=S+(L^(V|~C))+x[1]+2240044497&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~L))+x[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~V))+x[15]+4264355552&4294967295,L=C+(b<<10&4294967295|b>>>22),b=V+(C^(L|~S))+x[6]+2734768916&4294967295,V=L+(b<<15&4294967295|b>>>17),b=S+(L^(V|~C))+x[13]+1309151649&4294967295,S=V+(b<<21&4294967295|b>>>11),b=C+(V^(S|~L))+x[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~V))+x[11]+3174756917&4294967295,L=C+(b<<10&4294967295|b>>>22),b=V+(C^(L|~S))+x[2]+718787259&4294967295,V=L+(b<<15&4294967295|b>>>17),b=S+(L^(V|~C))+x[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(V+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+V&4294967295,l.g[3]=l.g[3]+L&4294967295}r.prototype.u=function(l,C){C===void 0&&(C=l.length);for(var S=C-this.blockSize,x=this.B,V=this.h,L=0;L<C;){if(V==0)for(;L<=S;)i(this,l,L),L+=this.blockSize;if(typeof l=="string"){for(;L<C;)if(x[V++]=l.charCodeAt(L++),V==this.blockSize){i(this,x),V=0;break}}else for(;L<C;)if(x[V++]=l[L++],V==this.blockSize){i(this,x),V=0;break}}this.h=V,this.o+=C},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;var S=8*this.o;for(C=l.length-8;C<l.length;++C)l[C]=S&255,S/=256;for(this.u(l),l=Array(16),C=S=0;4>C;++C)for(var x=0;32>x;x+=8)l[S++]=this.g[C]>>>x&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;for(var S=[],x=!0,V=l.length-1;0<=V;V--){var L=l[V]|0;x&&L==C||(S[V]=L,x=!1)}this.g=S}var p={};function y(l){return-128<=l&&128>l?a(l,function(C){return new c([C|0],0>C?-1:0)}):new c([l|0],0>l?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return k;if(0>l)return Y(v(-l));for(var C=[],S=1,x=0;l>=S;x++)C[x]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(C,8)),x=k,V=0;V<l.length;V+=8){var L=Math.min(8,l.length-V),b=parseInt(l.substring(V,V+L),C);8>L?(L=v(Math.pow(C,L)),x=x.j(L).add(v(b))):(x=x.j(S),x=x.add(v(b)))}return x}var k=y(0),D=y(1),z=y(16777216);n=c.prototype,n.m=function(){if(K(this))return-Y(this).m();for(var l=0,C=1,S=0;S<this.g.length;S++){var x=this.i(S);l+=(0<=x?x:4294967296+x)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(B(this))return"0";if(K(this))return"-"+Y(this).toString(l);for(var C=v(Math.pow(l,6)),S=this,x="";;){var V=xe(S,C).g;S=J(S,V.j(C));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(l);if(S=V,B(S))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function B(l){if(l.h!=0)return!1;for(var C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function K(l){return l.h==-1}n.l=function(l){return l=J(this,l),K(l)?-1:B(l)?0:1};function Y(l){for(var C=l.g.length,S=[],x=0;x<C;x++)S[x]=~l.g[x];return new c(S,~l.h).add(D)}n.abs=function(){return K(this)?Y(this):this},n.add=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],x=0,V=0;V<=C;V++){var L=x+(this.i(V)&65535)+(l.i(V)&65535),b=(L>>>16)+(this.i(V)>>>16)+(l.i(V)>>>16);x=b>>>16,L&=65535,b&=65535,S[V]=b<<16|L}return new c(S,S[S.length-1]&-2147483648?-1:0)};function J(l,C){return l.add(Y(C))}n.j=function(l){if(B(this)||B(l))return k;if(K(this))return K(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(K(l))return Y(this.j(Y(l)));if(0>this.l(z)&&0>l.l(z))return v(this.m()*l.m());for(var C=this.g.length+l.g.length,S=[],x=0;x<2*C;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<l.g.length;V++){var L=this.i(x)>>>16,b=this.i(x)&65535,gt=l.i(V)>>>16,pr=l.i(V)&65535;S[2*x+2*V]+=b*pr,_e(S,2*x+2*V),S[2*x+2*V+1]+=L*pr,_e(S,2*x+2*V+1),S[2*x+2*V+1]+=b*gt,_e(S,2*x+2*V+1),S[2*x+2*V+2]+=L*gt,_e(S,2*x+2*V+2)}for(x=0;x<C;x++)S[x]=S[2*x+1]<<16|S[2*x];for(x=C;x<2*C;x++)S[x]=0;return new c(S,0)};function _e(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function ve(l,C){this.g=l,this.h=C}function xe(l,C){if(B(C))throw Error("division by zero");if(B(l))return new ve(k,k);if(K(l))return C=xe(Y(l),C),new ve(Y(C.g),Y(C.h));if(K(C))return C=xe(l,Y(C)),new ve(Y(C.g),C.h);if(30<l.g.length){if(K(l)||K(C))throw Error("slowDivide_ only works with positive integers.");for(var S=D,x=C;0>=x.l(l);)S=wt(S),x=wt(x);var V=Ge(S,1),L=Ge(x,1);for(x=Ge(x,2),S=Ge(S,2);!B(x);){var b=L.add(x);0>=b.l(l)&&(V=V.add(S),L=b),x=Ge(x,1),S=Ge(S,1)}return C=J(l,V.j(C)),new ve(V,C)}for(V=k;0<=l.l(C);){for(S=Math.max(1,Math.floor(l.m()/C.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=v(S),b=L.j(C);K(b)||0<b.l(l);)S-=x,L=v(S),b=L.j(C);B(L)&&(L=D),V=V.add(L),l=J(l,b)}return new ve(V,l)}n.A=function(l){return xe(this,l).h},n.and=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],x=0;x<C;x++)S[x]=this.i(x)&l.i(x);return new c(S,this.h&l.h)},n.or=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],x=0;x<C;x++)S[x]=this.i(x)|l.i(x);return new c(S,this.h|l.h)},n.xor=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],x=0;x<C;x++)S[x]=this.i(x)^l.i(x);return new c(S,this.h^l.h)};function wt(l){for(var C=l.g.length+1,S=[],x=0;x<C;x++)S[x]=l.i(x)<<1|l.i(x-1)>>>31;return new c(S,l.h)}function Ge(l,C){var S=C>>5;C%=32;for(var x=l.g.length-S,V=[],L=0;L<x;L++)V[L]=0<C?l.i(L+S)>>>C|l.i(L+S+1)<<32-C:l.i(L+S);return new c(V,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$h=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=I,nr=c}).apply(typeof Kc<"u"?Kc:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hh,ns,Wh,vo,ru,zh,Gh,Kh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,g){return o==Array.prototype||o==Object.prototype||(o[f]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var O=o[T];if(!(O in g))break e;g=g[O]}o=o[o.length-1],T=g[o],f=f(T),f!=T&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}function a(o,f){o instanceof String&&(o+="");var g=0,T=!1,O={next:function(){if(!T&&g<o.length){var U=g++;return{value:f(U,o[U]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(o){return o||function(){return a(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},p=this||self;function y(o){var f=typeof o;return f=f!="object"?f:o?Array.isArray(o)?"array":f:"null",f=="array"||f=="object"&&typeof o.length=="number"}function v(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function I(o,f,g){return o.call.apply(o.bind,arguments)}function k(o,f,g){if(!o)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),o.apply(f,O)}}return function(){return o.apply(f,arguments)}}function D(o,f,g){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:k,D.apply(null,arguments)}function z(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function B(o,f){function g(){}g.prototype=f.prototype,o.aa=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(T,O,U){for(var X=Array(arguments.length-2),De=2;De<arguments.length;De++)X[De-2]=arguments[De];return f.prototype[O].apply(T,X)}}function K(o){const f=o.length;if(0<f){const g=Array(f);for(let T=0;T<f;T++)g[T]=o[T];return g}return[]}function Y(o,f){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(y(T)){const O=o.length||0,U=T.length||0;o.length=O+U;for(let X=0;X<U;X++)o[O+X]=T[X]}else o.push(T)}}class J{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(o){return/^[\s\xa0]*$/.test(o)}function ve(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function xe(o){return xe[" "](o),o}xe[" "]=function(){};var wt=ve().indexOf("Gecko")!=-1&&!(ve().toLowerCase().indexOf("webkit")!=-1&&ve().indexOf("Edge")==-1)&&!(ve().indexOf("Trident")!=-1||ve().indexOf("MSIE")!=-1)&&ve().indexOf("Edge")==-1;function Ge(o,f,g){for(const T in o)f.call(g,o[T],T,o)}function l(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function C(o){const f={};for(const g in o)f[g]=o[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(o,f){let g,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(g in T)o[g]=T[g];for(let U=0;U<S.length;U++)g=S[U],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function V(o){var f=1;o=o.split(":");const g=[];for(;0<f&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function L(o){p.setTimeout(()=>{throw o},0)}function b(){var o=Xt;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class gt{constructor(){this.h=this.g=null}add(f,g){const T=pr.get();T.set(f,g),this.h?this.h.next=T:this.g=T,this.h=T}}var pr=new J(()=>new ya,o=>o.reset());class ya{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,mn=!1,Xt=new gt,Oi=()=>{const o=p.Promise.resolve(void 0);mt=()=>{o.then(Ls)}};var Ls=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(g){L(g)}var f=pr;f.j(o),100>f.h&&(f.h++,o.next=f.g,f.g=o)}mn=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Ms=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,f),p.removeEventListener("test",g,f)}catch{}return o})();function gr(o,f){if(Ke.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget){if(wt){e:{try{xe(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement);this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_a[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&gr.aa.h.call(this)}}B(gr,Ke);var _a={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),va=0;function Fs(o,f,g,T,O){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!T,this.ha=O,this.key=++va,this.da=this.fa=!1}function yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function qr(o){this.src=o,this.g={},this.h=0}qr.prototype.add=function(o,f,g,T,O){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var X=Un(o,f,T,O);return-1<X?(f=o[X],g||(f.fa=!1)):(f=new Fs(f,this.src,U,!!T,O),f.fa=g,o.push(f)),f};function Yt(o,f){var g=f.type;if(g in o.g){var T=o.g[g],O=Array.prototype.indexOf.call(T,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(T,O,1),U&&(yt(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Un(o,f,g,T){for(var O=0;O<o.length;++O){var U=o[O];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==T)return O}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Li={};function $r(o,f,g,T,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)$r(o,f[U],g,T,O);return null}return g=ie(g),o&&o[jr]?o.K(f,g,v(T)?!!T.capture:!1,O):Hr(o,f,g,!1,T,O)}function Hr(o,f,g,T,O,U){if(!f)throw Error("Invalid event type");var X=v(O)?!!O.capture:!!O,De=yn(o);if(De||(o[Br]=De=new qr(o)),g=De.add(f,g,T,X,U),g.proxy)return g;if(T=Ht(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)Ms||(O=X),O===void 0&&(O=!1),o.addEventListener(f.toString(),T,O);else if(o.attachEvent)o.attachEvent(js(f.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ht(){function o(g){return f.call(o.src,o.listener,g)}const f=xt;return o}function Us(o,f,g,T,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)Us(o,f[U],g,T,O);else T=v(T)?!!T.capture:!!T,g=ie(g),o&&o[jr]?(o=o.i,f=String(f).toString(),f in o.g&&(U=o.g[f],g=Un(U,g,T,O),-1<g&&(yt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete o.g[f],o.h--)))):o&&(o=yn(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Un(f,g,T,O)),(g=-1<o?f[o]:null)&&Mi(g))}function Mi(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[jr])Yt(f.i,o);else{var g=o.type,T=o.proxy;f.removeEventListener?f.removeEventListener(g,T,o.capture):f.detachEvent?f.detachEvent(js(g),T):f.addListener&&f.removeListener&&f.removeListener(T),(g=yn(f))?(Yt(g,o),g.h==0&&(g.src=null,f[Br]=null)):yt(o)}}}function js(o){return o in Li?Li[o]:Li[o]="on"+o}function xt(o,f){if(o.da)o=!0;else{f=new gr(f,this);var g=o.listener,T=o.ha||o.src;o.fa&&Mi(o),o=g.call(T,f)}return o}function yn(o){return o=o[Br],o instanceof qr?o:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[_n]||(o[_n]=function(f){return o.handleEvent(f)}),o[_n])}function ke(){$t.call(this),this.i=new qr(this),this.M=this,this.F=null}B(ke,$t),ke.prototype[jr]=!0,ke.prototype.removeEventListener=function(o,f,g,T){Us(this,o,f,g,T)};function st(o,f){var g,T=o.F;if(T)for(g=[];T;T=T.F)g.push(T);if(o=o.M,T=f.type||f,typeof f=="string")f=new Ke(f,o);else if(f instanceof Ke)f.target=f.target||o;else{var O=f;f=new Ke(T,o),x(f,O)}if(O=!0,g)for(var U=g.length-1;0<=U;U--){var X=f.g=g[U];O=Wr(X,T,!0,f)&&O}if(X=f.g=o,O=Wr(X,T,!0,f)&&O,O=Wr(X,T,!1,f)&&O,g)for(U=0;U<g.length;U++)X=f.g=g[U],O=Wr(X,T,!1,f)&&O}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,f;for(f in o.g){for(var g=o.g[f],T=0;T<g.length;T++)yt(g[T]);delete o.g[f],o.h--}}this.F=null},ke.prototype.K=function(o,f,g,T){return this.i.add(String(o),f,!1,g,T)},ke.prototype.L=function(o,f,g,T){return this.i.add(String(o),f,!0,g,T)};function Wr(o,f,g,T){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==g){var De=X.listener,Oe=X.ha||X.src;X.fa&&Yt(o.i,X),O=De.call(Oe,T)!==!1&&O}}return O&&!T.defaultPrevented}function qs(o,f,g){if(typeof o=="function")g&&(o=D(o,g));else if(o&&typeof o.handleEvent=="function")o=D(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(o,f||0)}function Fi(o){o.g=qs(()=>{o.g=null,o.i&&(o.i=!1,Fi(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class Bs extends $t{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(o){$t.call(this),this.h=o,this.g={}}B(Wt,$t);var Vt=[];function Jt(o){Ge(o.g,function(f,g){this.g.hasOwnProperty(g)&&Mi(f)},o),o.g={}}Wt.prototype.N=function(){Wt.aa.N.call(this),Jt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zt=p.JSON.stringify,Ea=p.JSON.parse,zr=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function Gr(){}Gr.prototype.h=null;function Ui(o){return o.h||(o.h=o.i())}function $s(){}var Ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vn(){Ke.call(this,"d")}B(vn,Ke);function Kr(){Ke.call(this,"c")}B(Kr,Ke);var en={},_t=null;function Ze(){return _t=_t||new ke}en.La="serverreachability";function Qr(o){Ke.call(this,en.La,o)}B(Qr,Ke);function mr(o){const f=Ze();st(f,new Qr(f))}en.STAT_EVENT="statevent";function ji(o,f){Ke.call(this,en.STAT_EVENT,o),this.stat=f}B(ji,Ke);function tt(o){const f=Ze();st(f,new ji(f,o))}en.Ma="timingevent";function En(o,f){Ke.call(this,en.Ma,o),this.size=f}B(En,Ke);function Lt(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},f)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function Xr(o,f,g,T,O,U){o.info(function(){if(o.g)if(U)for(var X="",De=U.split("&"),Oe=0;Oe<De.length;Oe++){var ye=De[Oe].split("=");if(1<ye.length){var nt=ye[0];ye=ye[1];var rt=nt.split("_");X=2<=rt.length&&rt[1]=="type"?X+(nt+"="+ye+"&"):X+(nt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+f+`
`+g+`
`+X})}function Ta(o,f,g,T,O,U,X){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+f+`
`+g+`
`+U+" "+X})}function jn(o,f,g,T){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Hs(o,g)+(T?" "+T:"")})}function wa(o,f){o.info(function(){return"TIMEOUT: "+f})}Tn.prototype.info=function(){};function Hs(o,f){if(!o.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var T=g[o];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return Zt(g)}catch{return f}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ws={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function Zr(){}B(Zr,Gr),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},Jr=new Zr;function vt(o,f,g,T){this.j=o,this.i=f,this.l=g,this.R=T||1,this.U=new Wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var ei={},yr={};function qn(o,f,g){o.L=1,o.v=tn(Ft(f)),o.m=g,o.P=!0,Bi(o,null)}function Bi(o,f){o.F=Date.now(),vr(o),o.A=Ft(o.v);var g=o.A,T=o.R;Array.isArray(T)||(T=[String(T)]),Ki(g.i,"t",T),o.C=0,g=o.j.J,o.h=new qi,o.g=kt(o.j,g?f:null,!o.m),0<o.O&&(o.M=new Bs(D(o.Y,o,o.g),o.O)),f=o.U,g=o.g,T=o.ca;var O="readystatechange";Array.isArray(O)||(O&&(Vt[0]=O.toString()),O=Vt);for(var U=0;U<O.length;U++){var X=$r(g,O[U],T||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=o.H?C(o.H):{},o.m?(o.u||(o.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,f)):(o.u="GET",o.g.ea(o.A,o.u,null,f)),mr(),Xr(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const f=this.M;f&&Pt(o)==3?f.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Pt(this.g);var f=this.g.Ba();const Wn=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||ro(this.g)))){this.J||rt!=4||f==7||(f==8||0>=Wn?mr(3):mr(2)),ti(this);var g=this.g.Z();this.X=g;t:if(zs(this)){var T=ro(this.g);o="";var O=T.length,U=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Bn(this);var X="";break t}this.h.i=new p.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,o+=this.h.i.decode(T[f],{stream:!(U&&f==O-1)});T.length=0,this.h.g+=o,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,Ta(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Oe=this.g;if((De=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(De)){var ye=De;break t}}ye=null}if(g=ye)jn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,g);else{this.o=!1,this.s=3,tt(12),wn(this),Bn(this);break e}}if(this.P){g=!0;let Te;for(;!this.J&&this.C<X.length;)if(Te=_r(this,X),Te==yr){rt==4&&(this.s=4,tt(14),g=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==ei){this.s=4,tt(15),jn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else jn(this.i,this.l,Te,null),Er(this,Te);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)jn(this.i,this.l,X,"[Invalid Chunked Response]"),wn(this),Bn(this);else if(0<X.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),$(nt),nt.M=!0,tt(11))}}else jn(this.i,this.l,X,null),Er(this,X);rt==4&&wn(this),this.o&&!this.J&&(rt==4?ue(this.j,this):(this.o=!1,vr(this)))}else ka(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),wn(this),Bn(this)}}}catch{}finally{}};function zs(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function _r(o,f){var g=o.C,T=f.indexOf(`
`,g);return T==-1?yr:(g=Number(f.substring(g,T)),isNaN(g)?ei:(T+=1,T+g>f.length?yr:(f=f.slice(T,T+g),o.C=T+g,f)))}vt.prototype.cancel=function(){this.J=!0,wn(this)};function vr(o){o.S=Date.now()+o.I,$i(o,o.I)}function $i(o,f){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Lt(D(o.ba,o),f)}function ti(o){o.B&&(p.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wa(this.i,this.A),this.L!=2&&(mr(),tt(17)),wn(this),this.s=2,Bn(this)):$i(this,this.S-o)};function Bn(o){o.j.G==0||o.J||ue(o.j,o)}function wn(o){ti(o);var f=o.M;f&&typeof f.ma=="function"&&f.ma(),o.M=null,Jt(o.U),o.g&&(f=o.g,o.g=null,f.abort(),f.ma())}function Er(o,f){try{var g=o.j;if(g.G!=0&&(g.g==o||Tr(g.h,o))){if(!o.K&&Tr(g.h,o)&&g.G==3){try{var T=g.Da.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)Q(g),h(g);else break e;q(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Lt(D(g.Za,g),6e3));if(1>=Wi(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else he(g,11)}else if((o.K||g.g==o)&&Q(g),!_e(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let ye=O[f];if(g.T=ye[0],ye=ye[1],g.G==2)if(ye[0]=="c"){g.K=ye[1],g.ia=ye[2];const nt=ye[3];nt!=null&&(g.la=nt,g.j.info("VER="+g.la));const rt=ye[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const Wn=ye[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(T=1.5*Wn,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Te=o.g;if(Te){const Cn=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var U=T.h;U.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ni(U,U.h),U.h=null))}if(T.D){const Et=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;Et&&(T.ya=Et,Ve(T.I,T.D,Et))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var X=o;if(T.qa=$e(T,T.J?T.ia:null,T.W),X.K){ot(T.h,X);var De=X,Oe=T.L;Oe&&(De.I=Oe),De.B&&(ti(De),vr(De)),T.g=X}else N(T);0<g.i.length&&m(g)}else ye[0]!="stop"&&ye[0]!="close"||he(g,7);else g.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?he(g,7):u(g):ye[0]!="noop"&&g.l&&g.l.ta(ye),g.v=0)}}mr(4)}catch{}}var Ia=class{constructor(o,f){this.g=o,this.map=f}};function Gs(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wi(o){return o.h?1:o.g?o.g.size:0}function Tr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function ni(o,f){o.g?o.g.add(f):o.h=f}function ot(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Gs.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function In(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.D);return f}return K(o.i)}function ri(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(y(o)){for(var f=[],g=o.length,T=0;T<g;T++)f.push(o[T]);return f}f=[],g=0;for(T in o)f[g++]=o[T];return f}function Aa(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(y(o)||typeof o=="string"){var f=[];o=o.length;for(var g=0;g<o;g++)f.push(g);return f}f=[],g=0;for(const T in o)f[g++]=T;return f}}}function Ks(o,f){if(o.forEach&&typeof o.forEach=="function")o.forEach(f,void 0);else if(y(o)||typeof o=="string")Array.prototype.forEach.call(o,f,void 0);else for(var g=Aa(o),T=ri(o),O=T.length,U=0;U<O;U++)f.call(void 0,T[U],g&&g[U],o)}var ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qs(o,f){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var T=o[g].indexOf("="),O=null;if(0<=T){var U=o[g].substring(0,T);O=o[g].substring(T+1)}else U=o[g];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Mt){this.h=o.h,si(this,o.j),this.o=o.o,this.g=o.g,oi(this,o.s),this.l=o.l;var f=o.i,g=new bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),It(this,g),this.m=o.m}else o&&(f=String(o).match(ii))?(this.h=!1,si(this,f[1]||"",!0),this.o=wr(f[2]||""),this.g=wr(f[3]||"",!0),oi(this,f[4]),this.l=wr(f[5]||"",!0),It(this,f[6]||"",!0),this.m=wr(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}Mt.prototype.toString=function(){var o=[],f=this.j;f&&o.push(Ir(f,nn,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(Ir(f,nn,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Ir(g,g.charAt(0)=="/"?ba:zi,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Ir(g,Xs)),o.join("")};function Ft(o){return new Mt(o)}function si(o,f,g){o.j=g?wr(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function oi(o,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);o.s=f}else o.s=null}function It(o,f,g){f instanceof bn?(o.i=f,Sa(o.i,o.h)):(g||(f=Ir(f,Ar)),o.i=new bn(f,o.h))}function Ve(o,f,g){o.i.set(f,g)}function tn(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function wr(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ir(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,An),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function An(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nn=/[#\/\?@]/g,zi=/[#\?:]/g,ba=/[#\?]/g,Ar=/[#\?@]/g,Xs=/#/g;function bn(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&Qs(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=bn.prototype,n.add=function(o,f){zt(this),this.i=null,o=$n(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Gi(o,f){zt(o),f=$n(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Ys(o,f){return zt(o),f=$n(o,f),o.g.has(f)}n.forEach=function(o,f){zt(this),this.g.forEach(function(g,T){g.forEach(function(O){o.call(f,O,T,this)},this)},this)},n.na=function(){zt(this);const o=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let T=0;T<f.length;T++){const O=o[T];for(let U=0;U<O.length;U++)g.push(f[T])}return g},n.V=function(o){zt(this);let f=[];if(typeof o=="string")Ys(this,o)&&(f=f.concat(this.g.get($n(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)f=f.concat(o[g])}return f},n.set=function(o,f){return zt(this),this.i=null,o=$n(this,o),Ys(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=this.V(o),0<o.length?String(o[0]):f):f};function Ki(o,f,g){Gi(o,f),0<g.length&&(o.i=null,o.g.set($n(o,f),K(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var T=f[g];const U=encodeURIComponent(String(T)),X=this.V(T);for(T=0;T<X.length;T++){var O=U;X[T]!==""&&(O+="="+encodeURIComponent(String(X[T]))),o.push(O)}}return this.i=o.join("&")};function $n(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Sa(o,f){f&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(g,T){var O=T.toLowerCase();T!=O&&(Gi(this,T),Ki(this,O,g))},o)),o.j=f}function Qi(o,f){const g=new Tn;if(p.Image){const T=new Image;T.onload=z(rn,g,"TestLoadImage: loaded",!0,f,T),T.onerror=z(rn,g,"TestLoadImage: error",!1,f,T),T.onabort=z(rn,g,"TestLoadImage: abort",!1,f,T),T.ontimeout=z(rn,g,"TestLoadImage: timeout",!1,f,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else f(!1)}function Ca(o,f){const g=new Tn,T=new AbortController,O=setTimeout(()=>{T.abort(),rn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:T.signal}).then(U=>{clearTimeout(O),U.ok?rn(g,"TestPingServer: ok",!0,f):rn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),rn(g,"TestPingServer: error",!1,f)})}function rn(o,f,g,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(g)}catch{}}function Ra(){this.g=new zr}function Pa(o,f,g){const T=g||"";try{Ks(o,function(O,U){let X=O;v(O)&&(X=Zt(O)),f.push(T+U+"="+encodeURIComponent(X))})}catch(O){throw f.push(T+"type="+encodeURIComponent("_badmap")),O}}function ai(o){this.l=o.Ub||null,this.j=o.eb||!1}B(ai,Gr),ai.prototype.g=function(){return new ui(this.l,this.j)},ai.prototype.i=(function(o){return function(){return o}})({});function ui(o,f){ke.call(this),this.D=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(ui,ke),n=ui.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=f,this.readyState=1,Sn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(f.body=o),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Js(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Js(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Hn(this):Sn(this),this.readyState==3&&Js(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Sn(o)}n.setRequestHeader=function(o,f){this.u.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function Sn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xi(o){let f="";return Ge(o,function(g,T){f+=T,f+=":",f+=g,f+=`\r
`}),f}function br(o,f,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=Xi(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):Ve(o,f,g))}function Fe(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Fe,ke);var Zs=/^https?$/i,Yi=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,f,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Ui(this.o):Ui(Jr),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(U){eo(this,U);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)g.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const U of T.keys())g.set(U,T.get(U));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),O=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Yi,f,void 0))||T||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ji(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){eo(this,U)}};function eo(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.m=5,to(o),sn(o)}function to(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?no(this):this.bb())},n.bb=function(){no(this)};function no(o){if(o.h&&typeof c<"u"&&(!o.v[1]||Pt(o)!=4||o.Z()!=2)){if(o.u&&Pt(o)==4)qs(o.Ea,0,o);else if(st(o,"readystatechange"),Pt(o)==4){o.h=!1;try{const X=o.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var T;if(T=X===0){var O=String(o.D).match(ii)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),T=!Zs.test(O?O.toLowerCase():"")}g=T}if(g)st(o,"complete"),st(o,"success");else{o.m=6;try{var U=2<Pt(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",to(o)}}finally{sn(o)}}}}function sn(o,f){if(o.g){Ji(o);const g=o.g,T=o.v[0]?()=>{}:null;o.g=null,o.v=null,f||st(o,"ready");try{g.onreadystatechange=T}catch{}}}function Ji(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Pt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),Ea(f)}};function ro(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ka(o){const f={};o=(o.g&&2<=Pt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(_e(o[T]))continue;var g=V(o[T]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[O]||[];f[O]=U,U.push(g)}l(f,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function s(o){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,o),this.cb=Sr("retryDelaySeedMs",1e4,o),this.Wa=Sr("forwardChannelMaxRetries",2,o),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Gs(o&&o.concurrentRequestLimit),this.Da=new Ra,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,f,g,T){tt(0),this.W=o,this.H=f||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=$e(this,null,this.W),m(this)};function u(o){if(d(o),o.G==3){var f=o.U++,g=Ft(o.I);if(Ve(g,"SID",o.K),Ve(g,"RID",f),Ve(g,"TYPE","terminate"),R(o,g),f=new vt(o,o.j,f),f.L=2,f.v=tn(Ft(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=f.v,g=!0),g||(f.g=kt(f.j,null),f.g.ea(f.v)),f.F=Date.now(),vr(f)}Qe(o)}function h(o){o.g&&($(o),o.g.cancel(),o.g=null)}function d(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),Q(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!Hi(o.h)&&!o.s){o.s=!0;var f=o.Ga;mt||Oi(),mn||(mt(),mn=!0),Xt.add(f,o),o.B=0}}function _(o,f){return Wi(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=f.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Lt(D(o.Ga,o,f),we(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const O=new vt(this,this.j,o);let U=this.o;if(this.S&&(U?(U=C(U),x(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=A(this,O,f),g=Ft(this.I),Ve(g,"RID",o),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),R(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(Xi(U)))+"&"+f:this.m&&br(g,this.m,U)),ni(this.h,O),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",f),Ve(g,"SID","null"),O.T=!0,qn(O,g,null)):qn(O,g,f),this.G=2}}else this.G==3&&(o?E(this,o):this.i.length==0||Hi(this.h)||E(this))};function E(o,f){var g;f?g=f.l:g=o.U++;const T=Ft(o.I);Ve(T,"SID",o.K),Ve(T,"RID",g),Ve(T,"AID",o.T),R(o,T),o.m&&o.o&&br(T,o.m,o.o),g=new vt(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),f&&(o.i=f.D.concat(o.i)),f=A(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ni(o.h,g),qn(g,T,f)}function R(o,f){o.H&&Ge(o.H,function(g,T){Ve(f,T,g)}),o.l&&Ks({},function(g,T){Ve(f,T,g)})}function A(o,f,g){g=Math.min(o.i.length,g);var T=o.l?D(o.l.Na,o.l,o):null;e:{var O=o.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=O[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let De=!0;for(let Oe=0;Oe<g;Oe++){let ye=O[Oe].g;const nt=O[Oe].map;if(ye-=U,0>ye)U=Math.max(0,O[Oe].g-100),De=!1;else try{Pa(nt,X,"req"+ye+"_")}catch{T&&T(nt)}}if(De){T=X.join("&");break e}}}return o=o.i.splice(0,g),f.D=o,T}function N(o){if(!o.g&&!o.u){o.Y=1;var f=o.Fa;mt||Oi(),mn||(mt(),mn=!0),Xt.add(f,o),o.v=0}}function q(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Lt(D(o.Fa,o),we(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Lt(D(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),h(this),F(this))};function $(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function F(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var f=Ft(o.qa);Ve(f,"RID","rpc"),Ve(f,"SID",o.K),Ve(f,"AID",o.T),Ve(f,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(f,"TO",o.ja),Ve(f,"TYPE","xmlhttp"),R(o,f),o.m&&o.o&&br(f,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=tn(Ft(f)),g.m=null,g.P=!0,Bi(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),q(this),tt(19))};function Q(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function ue(o,f){var g=null;if(o.g==f){Q(o),$(o),o.g=null;var T=2}else if(Tr(o.h,f))g=f.D,ot(o.h,f),T=1;else return;if(o.G!=0){if(f.o)if(T==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=o.B;T=Ze(),st(T,new En(T,g)),m(o)}else N(o);else if(O=f.s,O==3||O==0&&0<f.X||!(T==1&&_(o,f)||T==2&&q(o)))switch(g&&0<g.length&&(f=o.h,f.i=f.i.concat(g)),O){case 1:he(o,5);break;case 4:he(o,10);break;case 3:he(o,6);break;default:he(o,2)}}}function we(o,f){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*f}function he(o,f){if(o.j.info("Error code "+f),f==2){var g=D(o.fb,o),T=o.Xa;const O=!T;T=new Mt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||si(T,"https"),tn(T),O?Qi(T.toString(),g):Ca(T.toString(),g)}else tt(2);o.G=0,o.l&&o.l.sa(f),Qe(o),d(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Qe(o){if(o.G=0,o.ka=[],o.l){const f=In(o.h);(f.length!=0||o.i.length!=0)&&(Y(o.ka,f),Y(o.ka,o.i),o.h.i.length=0,K(o.i),o.i.length=0),o.l.ra()}}function $e(o,f,g){var T=g instanceof Mt?Ft(g):new Mt(g);if(T.g!="")f&&(T.g=f+"."+T.g),oi(T,T.s);else{var O=p.location;T=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new Mt(null);T&&si(U,T),f&&(U.g=f),O&&oi(U,O),g&&(U.l=g),T=U}return g=o.D,f=o.ya,g&&f&&Ve(T,g,f),Ve(T,"VER",o.la),R(o,T),T}function kt(o,f,g){if(f&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Ca&&!o.pa?new Fe(new ai({eb:g})):new Fe(o.pa),f.Ha(o.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dt(){}n=Dt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ee(){}Ee.prototype.g=function(o,f){return new We(o,f)};function We(o,f){ke.call(this),this.g=new s(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(o?o["X-WebChannel-Client-Profile"]=f.va:o={"X-WebChannel-Client-Profile":f.va}),this.g.S=o,(o=f&&f.Sb)&&!_e(o)&&(this.g.m=o),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Ut(this)}B(We,ke),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){u(this.g)},We.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Zt(o),o=g);f.i.push(new Ia(f.Ya++,o)),f.G==3&&m(f)},We.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,We.aa.N.call(this)};function be(o){vn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}B(be,vn);function Ue(){Kr.call(this),this.status=1}B(Ue,Kr);function Ut(o){this.g=o}B(Ut,Dt),Ut.prototype.ua=function(){st(this.g,"a")},Ut.prototype.ta=function(o){st(this.g,new be(o))},Ut.prototype.sa=function(o){st(this.g,new Ue)},Ut.prototype.ra=function(){st(this.g,"b")},Ee.prototype.createWebChannel=Ee.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,Kh=function(){return new Ee},Gh=function(){return Ze()},zh=en,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,vo=Yr,Ws.COMPLETE="complete",Wh=Ws,$s.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",ke.prototype.listen=ke.prototype.K,ns=$s,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Hh=Fe}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});const Qc="@firebase/firestore",Xc="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Eu("@firebase/firestore");function hi(){return Lr.logLevel}function re(n,...e){if(Lr.logLevel<=Se.DEBUG){const t=e.map(Du);Lr.debug(`Firestore (${Di}): ${n}`,...t)}}function Vn(n,...e){if(Lr.logLevel<=Se.ERROR){const t=e.map(Du);Lr.error(`Firestore (${Di}): ${n}`,...t)}}function wi(n,...e){if(Lr.logLevel<=Se.WARN){const t=e.map(Du);Lr.warn(`Firestore (${Di}): ${n}`,...t)}}function Du(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qh(n,r,t)}function Qh(n,e,t){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vn(r),new Error(r)}function Ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Qh(e,i,r)}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class xy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Vy{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0,42304);let r=this.i;const i=y=>this.i!==r?(r=this.i,t(y)):Promise.resolve();let a=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Dn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const y=a;e.enqueueRetryable((async()=>{await y.promise,await i(this.currentUser)}))},p=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Dn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new Xh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class Oy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ly{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Oy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ne(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Fy(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Ce(n,e){return n<e?-1:n>e?1:0}function iu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return $a(i)===$a(a)?Ce(i,a):$a(i)?1:-1}return Ce(n.length,e.length)}const Uy=55296,jy=57343;function $a(n){const e=n.charCodeAt(0);return e>=Uy&&e<=jy}function Ii(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="__name__";class an{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&le(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=an.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Ce(e.length,t.length)}static compareSegments(e,t){const r=an.isNumericId(e),i=an.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?an.extractNumericId(e).compare(an.extractNumericId(t)):iu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nr.fromString(e.substring(4,e.length-2))}}class Me extends an{construct(e,t,r){return new Me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends an{construct(e,t,r){return new ut(e,t,r)}static isValidIdentifier(e){return qy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jc}static keyField(){return new ut([Jc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ee(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ee(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[i+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ee(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=y,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ee(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Me.fromString(e))}static fromName(e){return new oe(Me.fromString(e).popFirst(5))}static empty(){return new oe(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e,t){if(!t)throw new ee(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function By(n,e,t,r){if(e===!0&&r===!0)throw new ee(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zc(n){if(!oe.isDocumentKey(n))throw new ee(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function el(n){if(oe.isDocumentKey(n))throw new ee(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le(12329,{type:typeof n})}function Ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new ee(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $y(n,e){if(e<=0)throw new ee(W.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Cs(n,e){if(!Jh(n))throw new ee(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=-62135596800,nl=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*nl);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tl)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nl}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Cs(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Je("string",je._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new je(0,0))}static max(){return new pe(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=-1;function Hy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new ir(i,oe.empty(),e)}function Wy(n){return new ir(n.readTime,n.key,ps)}class ir{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ir(pe.min(),oe.empty(),ps)}static max(){return new ir(pe.max(),oe.empty(),ps)}}function zy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==Gy)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,r)=>{t(e)}))}static reject(e){return new G(((t,r)=>{r(e)}))}static waitFor(e){return new G(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(y=>r(y)))})),c=!0,a===i&&t()}))}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next((i=>i?G.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new G(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let y=0;y<a;y++){const v=y;t(e[v]).next((I=>{c[v]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new G(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function Qy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=-1;function Zo(n){return n==null}function Vo(n){return n===0&&1/n==-1/0}function Xy(n){return typeof n=="number"&&Number.isInteger(n)&&!Vo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="";function Yy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=rl(e)),e=Jy(n.get(t),e);return rl(e)}function Jy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case Zh:t+="";break;default:t+=a}}return t}function rl(n){return n+Zh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new Be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=a??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new at(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(e){return new sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new et(ut.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ii(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new tf("Invalid base64 string: "+a):a}})(e);return new ct(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(n){if(Ne(!!n,39018),typeof n=="string"){let e=0;const t=Zy.exec(n);if(Ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function or(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="server_timestamp",rf="__type__",sf="__previous_value__",of="__local_write_time__";function Vu(n){return(n?.mapValue?.fields||{})[rf]?.stringValue===nf}function ea(n){const e=n.mapValue.fields[sf];return Vu(e)?ea(e):e}function gs(n){const e=sr(n.mapValue.fields[of].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,r,i,a,c,p,y,v,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=I}}const Oo="(default)";class ms{constructor(e,t){this.projectId=e,this.database=t||Oo}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="__type__",t_="__max__",lo={mapValue:{}},uf="__vector__",Lo="value";function ar(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vu(n)?4:r_(n)?9007199254740991:n_(n)?10:11:le(28295,{value:n})}function pn(n,e){if(n===e)return!0;const t=ar(n);if(t!==ar(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gs(n).isEqual(gs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=sr(i.timestampValue),p=sr(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return or(i.bytesValue).isEqual(or(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return ze(i.geoPointValue.latitude)===ze(a.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ze(i.integerValue)===ze(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=ze(i.doubleValue),p=ze(a.doubleValue);return c===p?Vo(c)===Vo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return Ii(n.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(il(c)!==il(p))return!1;for(const y in c)if(c.hasOwnProperty(y)&&(p[y]===void 0||!pn(c[y],p[y])))return!1;return!0})(n,e);default:return le(52216,{left:n})}}function ys(n,e){return(n.values||[]).find((t=>pn(t,e)))!==void 0}function Ai(n,e){if(n===e)return 0;const t=ar(n),r=ar(e);if(t!==r)return Ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=ze(a.integerValue||a.doubleValue),y=ze(c.integerValue||c.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(n,e);case 3:return ol(n.timestampValue,e.timestampValue);case 4:return ol(gs(n),gs(e));case 5:return iu(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=or(a),y=or(c);return p.compareTo(y)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),y=c.split("/");for(let v=0;v<p.length&&v<y.length;v++){const I=Ce(p[v],y[v]);if(I!==0)return I}return Ce(p.length,y.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=Ce(ze(a.latitude),ze(c.latitude));return p!==0?p:Ce(ze(a.longitude),ze(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return al(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},y=c.fields||{},v=p[Lo]?.arrayValue,I=y[Lo]?.arrayValue,k=Ce(v?.values?.length||0,I?.values?.length||0);return k!==0?k:al(v,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===lo.mapValue&&c===lo.mapValue)return 0;if(a===lo.mapValue)return 1;if(c===lo.mapValue)return-1;const p=a.fields||{},y=Object.keys(p),v=c.fields||{},I=Object.keys(v);y.sort(),I.sort();for(let k=0;k<y.length&&k<I.length;++k){const D=iu(y[k],I[k]);if(D!==0)return D;const z=Ai(p[y[k]],v[I[k]]);if(z!==0)return z}return Ce(y.length,I.length)})(n.mapValue,e.mapValue);default:throw le(23264,{he:t})}}function ol(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=sr(n),r=sr(e),i=Ce(t.seconds,r.seconds);return i!==0?i:Ce(t.nanos,r.nanos)}function al(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Ai(t[i],r[i]);if(a)return a}return Ce(t.length,r.length)}function bi(n){return su(n)}function su(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=sr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return or(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return oe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=su(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${su(t.fields[c])}`;return i+"}"})(n.mapValue):le(61005,{value:n})}function Eo(n){switch(ar(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ea(n);return e?16+Eo(e):16;case 5:return 2*n.stringValue.length;case 6:return or(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Eo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return hr(r.fields,((a,c)=>{i+=a.length+Eo(c)})),i})(n.mapValue);default:throw le(13486,{value:n})}}function ul(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ou(n){return!!n&&"integerValue"in n}function Ou(n){return!!n&&"arrayValue"in n}function cl(n){return!!n&&"nullValue"in n}function ll(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function To(n){return!!n&&"mapValue"in n}function n_(n){return(n?.mapValue?.fields||{})[af]?.stringValue===uf}function us(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=us(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=us(n.arrayValue.values[t]);return e}return{...n}}function r_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===t_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!To(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=ut.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const y=this.getFieldsMap(t);this.applyChanges(y,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=us(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());To(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];To(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){hr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new St(us(this.value))}}function cf(n){const e=[];return hr(n.fields,((t,r)=>{const i=new ut([t]);if(To(r)){const a=cf(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new dt(e,0,pe.min(),pe.min(),pe.min(),St.empty(),0)}static newFoundDocument(e,t,r,i){return new dt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new dt(e,2,t,pe.min(),pe.min(),St.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,pe.min(),pe.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.position=e,this.inclusive=t}}function hl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=oe.comparator(oe.fromName(c.referenceValue),t.key):r=Ai(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function fl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t="asc"){this.field=e,this.dir=t}}function i_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{}class Ye extends lf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new o_(e,t,r):t==="array-contains"?new c_(e,r):t==="in"?new l_(e,r):t==="not-in"?new h_(e,r):t==="array-contains-any"?new f_(e,r):new Ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new a_(e,r):new u_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ai(t,this.value)):t!==null&&ar(this.value)===ar(t)&&this.matchesComparison(Ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends lf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qt(e,t)}matches(e){return hf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hf(n){return n.op==="and"}function ff(n){return s_(n)&&hf(n)}function s_(n){for(const e of n.filters)if(e instanceof Qt)return!1;return!0}function au(n){if(n instanceof Ye)return n.field.canonicalString()+n.op.toString()+bi(n.value);if(ff(n))return n.filters.map((e=>au(e))).join(",");{const e=n.filters.map((t=>au(t))).join(",");return`${n.op}(${e})`}}function df(n,e){return n instanceof Ye?(function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)})(n,e):n instanceof Qt?(function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&df(c,i.filters[p])),!0):!1})(n,e):void le(19439)}function pf(n){return n instanceof Ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${bi(t.value)}`})(n):n instanceof Qt?(function(t){return t.op.toString()+" {"+t.getFilters().map(pf).join(" ,")+"}"})(n):"Filter"}class o_ extends Ye{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class a_ extends Ye{constructor(e,t){super(e,"in",t),this.keys=gf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class u_ extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=gf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gf(n,e){return(e.arrayValue?.values||[]).map((t=>oe.fromName(t.referenceValue)))}class c_ extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ou(t)&&ys(t.arrayValue,this.value)}}class l_ extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ys(this.value.arrayValue,t)}}class h_ extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ys(this.value.arrayValue,t)}}class f_ extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ou(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ys(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function dl(n,e=null,t=[],r=[],i=null,a=null,c=null){return new d_(n,e,t,r,i,a,c)}function Lu(n){const e=me(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>au(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Zo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>bi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>bi(r))).join(",")),e.Te=t}return e.Te}function Mu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!i_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!df(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fl(n.startAt,e.startAt)&&fl(n.endAt,e.endAt)}function uu(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function p_(n,e,t,r,i,a,c,p){return new Rs(n,e,t,r,i,a,c,p)}function ta(n){return new Rs(n)}function pl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mf(n){return n.collectionGroup!==null}function cs(n){const e=me(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new et(ut.comparator);return c.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Fo(a,r))})),t.has(ut.keyField().canonicalString())||e.Ie.push(new Fo(ut.keyField(),r))}return e.Ie}function ln(n){const e=me(n);return e.Ee||(e.Ee=g_(e,cs(n))),e.Ee}function g_(n,e){if(n.limitType==="F")return dl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Fo(i.field,a)}));const t=n.endAt?new Mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mo(n.startAt.position,n.startAt.inclusive):null;return dl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cu(n,e){const t=n.filters.concat([e]);return new Rs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Uo(n,e,t){return new Rs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function na(n,e){return Mu(ln(n),ln(e))&&n.limitType===e.limitType}function yf(n){return`${Lu(ln(n))}|lt:${n.limitType}`}function fi(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>pf(i))).join(", ")}]`),Zo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>bi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>bi(i))).join(",")),`Target(${r})`})(ln(n))}; limitType=${n.limitType})`}function ra(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):oe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of cs(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,y){const v=hl(c,p,y);return c.inclusive?v<=0:v<0})(r.startAt,cs(r),i)||r.endAt&&!(function(c,p,y){const v=hl(c,p,y);return c.inclusive?v>=0:v>0})(r.endAt,cs(r),i))})(n,e)}function m_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _f(n){return(e,t)=>{let r=!1;for(const i of cs(n)){const a=y_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function y_(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):(function(a,c,p){const y=c.data.field(a),v=p.data.field(a);return y!==null&&v!==null?Ai(y,v):le(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Be(oe.comparator);function On(){return __}const vf=new Be(oe.comparator);function rs(...n){let e=vf;for(const t of n)e=e.insert(t.key,t);return e}function Ef(n){let e=vf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Pr(){return ls()}function Tf(){return ls()}function ls(){return new Fr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const v_=new Be(oe.comparator),E_=new et(oe.comparator);function Re(...n){let e=E_;for(const t of n)e=e.add(t);return e}const T_=new et(Ce);function w_(){return T_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function wf(n){return{integerValue:""+n}}function I_(n,e){return Xy(e)?wf(e):Fu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function A_(n,e,t){return n instanceof _s?(function(i,a){const c={fields:{[rf]:{stringValue:nf},[of]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Vu(a)&&(a=ea(a)),a&&(c.fields[sf]=a),{mapValue:c}})(t,e):n instanceof vs?Af(n,e):n instanceof Es?bf(n,e):(function(i,a){const c=If(i,a),p=gl(c)+gl(i.Ae);return ou(c)&&ou(i.Ae)?wf(p):Fu(i.serializer,p)})(n,e)}function b_(n,e,t){return n instanceof vs?Af(n,e):n instanceof Es?bf(n,e):t}function If(n,e){return n instanceof jo?(function(r){return ou(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class _s extends ia{}class vs extends ia{constructor(e){super(),this.elements=e}}function Af(n,e){const t=Sf(e);for(const r of n.elements)t.some((i=>pn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Es extends ia{constructor(e){super(),this.elements=e}}function bf(n,e){let t=Sf(e);for(const r of n.elements)t=t.filter((i=>!pn(i,r)));return{arrayValue:{values:t}}}class jo extends ia{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function gl(n){return ze(n.integerValue||n.doubleValue)}function Sf(n){return Ou(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t){this.field=e,this.transform=t}}function C_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof vs&&i instanceof vs||r instanceof Es&&i instanceof Es?Ii(r.elements,i.elements,pn):r instanceof jo&&i instanceof jo?pn(r.Ae,i.Ae):r instanceof _s&&i instanceof _s})(n.transform,e.transform)}class R_{constructor(e,t){this.version=e,this.transformResults=t}}class Rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sa{}function Cf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oa(n.key,Rt.none()):new Ps(n.key,n.data,Rt.none());{const t=n.data,r=St.empty();let i=new et(ut.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new fr(n.key,r,new Nt(i.toArray()),Rt.none())}}function P_(n,e,t){n instanceof Ps?(function(i,a,c){const p=i.value.clone(),y=yl(i.fieldTransforms,a,c.transformResults);p.setAll(y),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof fr?(function(i,a,c){if(!wo(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=yl(i.fieldTransforms,a,c.transformResults),y=a.data;y.setAll(Rf(i)),y.setAll(p),a.convertToFoundDocument(c.version,y).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function hs(n,e,t,r){return n instanceof Ps?(function(a,c,p,y){if(!wo(a.precondition,c))return p;const v=a.value.clone(),I=_l(a.fieldTransforms,y,c);return v.setAll(I),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof fr?(function(a,c,p,y){if(!wo(a.precondition,c))return p;const v=_l(a.fieldTransforms,y,c),I=c.data;return I.setAll(Rf(a)),I.setAll(v),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((k=>k.field)))})(n,e,t,r):(function(a,c,p){return wo(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function k_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=If(r.transform,i||null);a!=null&&(t===null&&(t=St.empty()),t.set(r.field,a))}return t||null}function ml(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ii(r,i,((a,c)=>C_(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ps extends sa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends sa{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Rf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function yl(n,e,t){const r=new Map;Ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,b_(c,p,t[i]))}return r}function _l(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,A_(a,c,e))}return r}class oa extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D_ extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&P_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Tf();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const y=Cf(c,p);y!==null&&r.set(i.key,y),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Ii(this.mutations,e.mutations,((t,r)=>ml(t,r)))&&Ii(this.baseMutations,e.baseMutations,((t,r)=>ml(t,r)))}}class Uu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return v_})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Uu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Pe;function O_(n){switch(n){case W.OK:return le(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return le(15467,{code:n})}}function Pf(n){if(n===void 0)return Vn("GRPC error has no .code"),W.UNKNOWN;switch(n){case Xe.OK:return W.OK;case Xe.CANCELLED:return W.CANCELLED;case Xe.UNKNOWN:return W.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return W.INTERNAL;case Xe.UNAVAILABLE:return W.UNAVAILABLE;case Xe.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Xe.NOT_FOUND:return W.NOT_FOUND;case Xe.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Xe.ABORTED:return W.ABORTED;case Xe.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Xe.DATA_LOSS:return W.DATA_LOSS;default:return le(39323,{code:n})}}(Pe=Xe||(Xe={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new nr([4294967295,4294967295],0);function vl(n){const e=L_().encode(n),t=new $h;return t.update(e),new Uint8Array(t.digest())}function El(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new nr([t,r],0),new nr([i,a],0)]}class ju{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(r<0)throw new is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=nr.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(nr.fromNumber(r)));return i.compare(M_)===1&&(i=new nr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=vl(e),[r,i]=El(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new ju(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=vl(e),[r,i]=El(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new aa(pe.min(),i,new Be(Ce),On(),Re())}}class ks{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ks(r,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class kf{constructor(e,t){this.targetId=e,this.Ce=t}}class Df{constructor(e,t,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Tl{constructor(){this.ve=0,this.Fe=wl(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),r=Re();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:le(38017,{changeType:a})}})),new ks(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=wl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class F_{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=ho(),this.He=ho(),this.Ye=new Be(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(uu(a))if(r===0){const c=new oe(a.path);this.et(t,c,dt.newNoDocument(c,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),y=p?this.ct(p,e,c):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=or(r).toUint8Array()}catch(y){if(y instanceof tf)return wi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new ju(c,i,a)}catch(y){return wi(y instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&uu(p.target)){const y=new oe(p.target.path);this.It(y).has(c)||this.Et(c,y)||this.et(c,y,dt.newNoDocument(y,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Re();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new aa(e,t,this.Ye,this.je,r);return this.je=On(),this.Je=ho(),this.He=ho(),this.Ye=new Be(Ce),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Tl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new et(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new et(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Tl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ho(){return new Be(oe.comparator)}function wl(){return new Be(oe.comparator)}const U_={asc:"ASCENDING",desc:"DESCENDING"},j_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},q_={and:"AND",or:"OR"};class B_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lu(n,e){return n.useProto3Json||Zo(e)?e:{value:e}}function qo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $_(n,e){return qo(n,e.toTimestamp())}function hn(n){return Ne(!!n,49232),pe.fromTimestamp((function(t){const r=sr(t);return new je(r.seconds,r.nanos)})(n))}function qu(n,e){return hu(n,e).canonicalString()}function hu(n,e){const t=(function(i){return new Me(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function xf(n){const e=Me.fromString(n);return Ne(Ff(e),10190,{key:e.toString()}),e}function fu(n,e){return qu(n.databaseId,e.path)}function Ha(n,e){const t=xf(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(Of(t))}function Vf(n,e){return qu(n.databaseId,e)}function H_(n){const e=xf(n);return e.length===4?Me.emptyPath():Of(e)}function du(n){return new Me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Of(n){return Ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Il(n,e,t){return{name:fu(n,e),fields:t.value.mapValue.fields}}function W_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:le(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,I){return v.useProto3Json?(Ne(I===void 0||typeof I=="string",58123),ct.fromBase64String(I||"")):(Ne(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ct.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(v){const I=v.code===void 0?W.UNKNOWN:Pf(v.code);return new ee(I,v.message||"")})(c);t=new Df(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ha(n,r.document.name),a=hn(r.document.updateTime),c=r.document.createTime?hn(r.document.createTime):pe.min(),p=new St({mapValue:{fields:r.document.fields}}),y=dt.newFoundDocument(i,a,c,p),v=r.targetIds||[],I=r.removedTargetIds||[];t=new Io(v,I,y.key,y)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ha(n,r.document),a=r.readTime?hn(r.readTime):pe.min(),c=dt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Io([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ha(n,r.document),a=r.removedTargetIds||[];t=new Io([],a,i,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new V_(i,a),p=r.targetId;t=new kf(p,c)}}return t}function z_(n,e){let t;if(e instanceof Ps)t={update:Il(n,e.key,e.value)};else if(e instanceof oa)t={delete:fu(n,e.key)};else if(e instanceof fr)t={update:Il(n,e.key,e.data),updateMask:tv(e.fieldMask)};else{if(!(e instanceof D_))return le(16599,{Vt:e.type});t={verify:fu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof _s)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof vs)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Es)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof jo)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw le(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:$_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:le(27497)})(n,e.precondition)),t}function G_(n,e){return n&&n.length>0?(Ne(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?hn(i.updateTime):hn(a);return c.isEqual(pe.min())&&(c=hn(a)),new R_(c,i.transformResults||[])})(t,e)))):[]}function K_(n,e){return{documents:[Vf(n,e.path)]}}function Q_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Vf(n,i);const a=(function(v){if(v.length!==0)return Mf(Qt.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(v){if(v.length!==0)return v.map((I=>(function(D){return{field:di(D.field),direction:J_(D.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=lu(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function X_(n){let e=H_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ne(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(k){const D=Lf(k);return D instanceof Qt&&ff(D)?D.getFilters():[D]})(t.where));let c=[];t.orderBy&&(c=(function(k){return k.map((D=>(function(B){return new Fo(pi(B.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(D)))})(t.orderBy));let p=null;t.limit&&(p=(function(k){let D;return D=typeof k=="object"?k.value:k,Zo(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(k){const D=!!k.before,z=k.values||[];return new Mo(z,D)})(t.startAt));let v=null;return t.endAt&&(v=(function(k){const D=!k.before,z=k.values||[];return new Mo(z,D)})(t.endAt)),p_(e,i,c,a,p,"F",y,v)}function Y_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pi(t.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(t.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=pi(t.unaryFilter.field);return Ye.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=pi(t.unaryFilter.field);return Ye.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ye.create(pi(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qt.create(t.compositeFilter.filters.map((r=>Lf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(t.compositeFilter.op))})(n):le(30097,{filter:n})}function J_(n){return U_[n]}function Z_(n){return j_[n]}function ev(n){return q_[n]}function di(n){return{fieldPath:n.canonicalString()}}function pi(n){return ut.fromServerFormat(n.fieldPath)}function Mf(n){return n instanceof Ye?(function(t){if(t.op==="=="){if(ll(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NAN"}};if(cl(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ll(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NOT_NAN"}};if(cl(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(t.field),op:Z_(t.op),value:t.value}}})(n):n instanceof Qt?(function(t){const r=t.getFilters().map((i=>Mf(i)));return r.length===1?r[0]:{compositeFilter:{op:ev(t.op),filters:r}}})(n):le(54877,{filter:n})}function tv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ff(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.yt=e}}function rv(n){const e=X_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Uo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.Cn=new sv}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(ir.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class sv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new et(Me.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uf=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Uf,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Si(0)}static cr(){return new Si(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="LruGarbageCollector",ov=1048576;function Sl([n,e],[t,r]){const i=Ce(n,t);return i===0?Ce(e,r):i}class av{constructor(e){this.Ir=e,this.buffer=new et(Sl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(bl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xi(t)?re(bl,"Ignoring IndexedDB error during garbage collection: ",t):await Ni(t)}await this.Vr(3e5)}))}}class cv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Jo.ce);const r=new av(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Al)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Al):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,y,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),i=this.params.maximumSequenceNumbersToCollect):i=k,c=Date.now(),this.nthSequenceNumber(e,i)))).next((k=>(r=k,p=Date.now(),this.removeTargets(e,r,t)))).next((k=>(a=k,y=Date.now(),this.removeOrphanedDocuments(e,r)))).next((k=>(v=Date.now(),hi()<=Se.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(y-p)+`ms
	Removed ${k} documents in `+(v-y)+`ms
Total Duration: ${v-I}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:k}))))}}function lv(n,e){return new cv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.changes=new Fr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&hs(r.mutation,i,Nt.empty(),je.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Re()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Re()){const i=Pr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=rs();return a.forEach(((p,y)=>{c=c.insert(p,y.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=Pr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Re())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=On();const c=ls(),p=(function(){return ls()})();return t.forEach(((y,v)=>{const I=r.get(v.key);i.has(v.key)&&(I===void 0||I.mutation instanceof fr)?a=a.insert(v.key,v):I!==void 0?(c.set(v.key,I.mutation.getFieldMask()),hs(I.mutation,v,I.mutation.getFieldMask(),je.now())):c.set(v.key,Nt.empty())})),this.recalculateAndSaveOverlays(e,a).next((y=>(y.forEach(((v,I)=>c.set(v,I))),t.forEach(((v,I)=>p.set(v,new fv(I,c.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=ls();let i=new Be(((c,p)=>c-p)),a=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let I=r.get(y)||Nt.empty();I=p.applyToLocalView(v,I),r.set(y,I);const k=(i.get(p.batchId)||Re()).add(y);i=i.insert(p.batchId,k)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),v=y.key,I=y.value,k=Tf();I.forEach((D=>{if(!a.has(D)){const z=Cf(t.get(D),r.get(D));z!==null&&k.set(D,z),a=a.add(D)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,k))}return G.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):G.resolve(Pr());let p=ps,y=a;return c.next((v=>G.forEach(v,((I,k)=>(p<k.largestBatchId&&(p=k.largestBatchId),a.get(I)?G.resolve():this.remoteDocumentCache.getEntry(e,I).next((D=>{y=y.insert(I,D)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,y,v,Re()))).next((I=>({batchId:p,changes:Ef(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((r=>{let i=rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=rs();return this.indexManager.getCollectionParents(e,a).next((p=>G.forEach(p,(y=>{const v=(function(k,D){return new Rs(D,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,y.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((I=>{I.forEach(((k,D)=>{c=c.insert(k,D)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((y,v)=>{const I=v.getKey();c.get(I)===null&&(c=c.insert(I,dt.newInvalidDocument(I)))}));let p=rs();return c.forEach(((y,v)=>{const I=a.get(y);I!==void 0&&hs(I.mutation,v,Nt.empty(),je.now()),ra(t,v)&&(p=p.insert(y,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return G.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:rv(i.bundledQuery),readTime:hn(i.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.overlays=new Be(oe.comparator),this.qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pr();return G.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),G.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const i=Pr(),a=t.length+1,c=new oe(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const y=p.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&y.largestBatchId>r&&i.set(y.getKey(),y)}return G.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new Be(((v,I)=>v-I));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let I=a.get(v.largestBatchId);I===null&&(I=Pr(),a=a.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const p=Pr(),y=a.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,I)=>p.set(v,I))),!(p.size()>=i)););return G.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new x_(t,r));let a=this.qr.get(t);a===void 0&&(a=Re(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.Qr=new et(it.$r),this.Ur=new et(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new it(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new oe(new Me([])),r=new it(t,e),i=new it(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new Me([])),r=new it(t,e),i=new it(t,e+1);let a=Re();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new it(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new et(it.$r)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new N_(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new it(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?xu:this.tr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(Ce);return t.forEach((i=>{const a=new it(i,0),c=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),G.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;oe.isDocumentKey(a)||(a=a.child(""));const c=new it(new oe(a),0);let p=new et(Ce);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(y.Yr)),!0)}),c),G.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return G.forEach(t.mutations,(i=>{const a=new it(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new it(t,0),i=this.Zr.firstAfterOrEqual(r);return G.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.ri=e,this.docs=(function(){return new Be(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=On();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():dt.newInvalidDocument(i))})),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=On();const c=t.path,p=new oe(c.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:v,value:{document:I}}=y.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||zy(Wy(I),r)<=0||(i.has(I.key)||ra(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,r,i){le(9500)}ii(e,t){return G.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new vv(this)}getSize(e){return G.resolve(this.size)}}class vv extends hv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),G.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.persistence=e,this.si=new Fr((t=>Lu(t)),Mu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Bu,this.targetCount=0,this.ai=Si.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),G.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Si(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Pr(t),G.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),G.waitFor(a).next((()=>i))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Jo(0),this.li=!1,this.li=!0,this.hi=new mv,this.referenceDelegate=e(this),this.Pi=new Ev(this),this.indexManager=new iv,this.remoteDocumentCache=(function(i){return new _v(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new nv(t),this.Ii=new pv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new yv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new Tv(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return G.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Tv extends Ky{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Ri=new Bu,this.Vi=null}static mi(e){return new $u(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.fi,(r=>{const i=oe.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Bo{constructor(e,t){this.persistence=e,this.pi=new Fr((r=>Yy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=lv(this,t)}static mi(e,t){return new Bo(e,t)}Ei(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return G.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?G.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eo(e.data.value)),t}br(e,t,r){return G.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return G.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Re(),i=Re();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Hu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Jd()?8:Qy(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new wv;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(hi()<=Se.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",fi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),G.resolve()):(hi()<=Se.DEBUG&&re("QueryEngine","Query:",fi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(hi()<=Se.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",fi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(t))):G.resolve())}ys(e,t){if(pl(t))return G.resolve(null);let r=ln(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Uo(t,null,"F"),r=ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Re(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((y=>{const v=this.Ds(t,p);return this.Cs(t,v,c,y.readTime)?this.ys(e,Uo(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,r,i){return pl(t)||i.isEqual(pe.min())?G.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?G.resolve(null):(hi()<=Se.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(t)),this.vs(e,c,t,Hy(i,ps)).next((p=>p)))}))}Ds(e,t){let r=new et(_f(e));return t.forEach(((i,a)=>{ra(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return hi()<=Se.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",fi(t)),this.ps.getDocumentsMatchingQuery(e,t,ir.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="LocalStore",Av=3e8;class bv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Be(Ce),this.xs=new Fr((a=>Lu(a)),Mu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Sv(n,e,t,r){return new bv(n,e,t,r)}async function qf(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let y=Re();for(const v of i){c.push(v.batchId);for(const I of v.mutations)y=y.add(I.key)}for(const v of a){p.push(v.batchId);for(const I of v.mutations)y=y.add(I.key)}return t.localDocuments.getDocuments(r,y).next((v=>({Ls:v,removedBatchIds:c,addedBatchIds:p})))}))}))}function Cv(n,e){const t=me(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,y,v,I){const k=v.batch,D=k.keys();let z=G.resolve();return D.forEach((B=>{z=z.next((()=>I.getEntry(y,B))).next((K=>{const Y=v.docVersions.get(B);Ne(Y!==null,48541),K.version.compareTo(Y)<0&&(k.applyToRemoteDocument(K,v),K.isValidDocument()&&(K.setReadTime(v.commitVersion),I.addEntry(K)))}))})),z.next((()=>p.mutationQueue.removeMutationBatch(y,k)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let y=Re();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(y=y.add(p.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Bf(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Rv(n,e){const t=me(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,k)=>{const D=i.get(k);if(!D)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,k).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,k))));let z=D.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(k)!==null?z=z.withResumeToken(ct.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(I.resumeToken,r)),i=i.insert(k,z),(function(K,Y,J){return K.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=Av?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(D,z,I)&&p.push(t.Pi.updateTargetData(a,z))}));let y=On(),v=Re();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(Pv(a,c,e.documentUpdates).next((I=>{y=I.ks,v=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((k=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return G.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,y,v))).next((()=>y))})).then((a=>(t.Ms=i,a)))}function Pv(n,e,t){let r=Re(),i=Re();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=On();return t.forEach(((p,y)=>{const v=a.get(p);y.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),y.isNoDocument()&&y.version.isEqual(pe.min())?(e.removeEntry(p,y.readTime),c=c.insert(p,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),c=c.insert(p,y)):re(Wu,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",y.version)})),{ks:c,qs:i}}))}function kv(n,e){const t=me(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=xu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Dv(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,G.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Jn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function pu(n,e,t){const r=me(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!xi(c))throw c;re(Wu,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Cl(n,e,t){const r=me(n);let i=pe.min(),a=Re();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(y,v,I){const k=me(y),D=k.xs.get(I);return D!==void 0?G.resolve(k.Ms.get(D)):k.Pi.getTargetData(v,I)})(r,c,ln(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((y=>{a=y}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Re()))).next((p=>(Nv(r,m_(e),p),{documents:p,Qs:a})))))}function Nv(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class Rl{constructor(){this.activeTargetIds=w_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xv{constructor(){this.Mo=new Rl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="ConnectivityMonitor";class kl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(Pl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(Pl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo=null;function gu(){return fo===null?fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():fo++,"0x"+fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="RestConnection",Ov={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=gu(),p=this.zo(e,t.toUriEncodedString());re(Wa,`Sending RPC '${e}' ${c}:`,p,r);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,i,a);const{host:v}=new URL(p),I=Ri(v);return this.Jo(e,p,y,r,I).then((k=>(re(Wa,`Received RPC '${e}' ${c}: `,k),k)),(k=>{throw wi(Wa,`RPC '${e}' ${c} failed with error: `,k,"url: ",p,"request:",r),k}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Di})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=Ov[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Fv extends Lv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=gu();return new Promise(((p,y)=>{const v=new Hh;v.setWithCredentials(!0),v.listenOnce(Wh.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case vo.NO_ERROR:const k=v.getResponseJson();re(ht,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(k)),p(k);break;case vo.TIMEOUT:re(ht,`RPC '${e}' ${c} timed out`),y(new ee(W.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const D=v.getStatus();if(re(ht,`RPC '${e}' ${c} failed with status:`,D,"response text:",v.getResponseText()),D>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const B=z?.error;if(B&&B.status&&B.message){const K=(function(J){const _e=J.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(_e)>=0?_e:W.UNKNOWN})(B.status);y(new ee(K,B.message))}else y(new ee(W.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ee(W.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:c,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(ht,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ht,`RPC '${e}' ${c} sending request:`,i),v.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=gu(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Kh(),p=Gh(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,r),y.encodeInitMessageHeaders=!0;const I=a.join("");re(ht,`Creating RPC '${e}' stream ${i}: ${I}`,y);const k=c.createWebChannel(I,y);this.I_(k);let D=!1,z=!1;const B=new Mv({Yo:Y=>{z?re(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(D||(re(ht,`Opening RPC '${e}' stream ${i} transport.`),k.open(),D=!0),re(ht,`RPC '${e}' stream ${i} sending:`,Y),k.send(Y))},Zo:()=>k.close()}),K=(Y,J,_e)=>{Y.listen(J,(ve=>{try{_e(ve)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return K(k,ns.EventType.OPEN,(()=>{z||(re(ht,`RPC '${e}' stream ${i} transport opened.`),B.o_())})),K(k,ns.EventType.CLOSE,(()=>{z||(z=!0,re(ht,`RPC '${e}' stream ${i} transport closed`),B.a_(),this.E_(k))})),K(k,ns.EventType.ERROR,(Y=>{z||(z=!0,wi(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),B.a_(new ee(W.UNAVAILABLE,"The operation could not be completed")))})),K(k,ns.EventType.MESSAGE,(Y=>{if(!z){const J=Y.data[0];Ne(!!J,16349);const _e=J,ve=_e?.error||_e[0]?.error;if(ve){re(ht,`RPC '${e}' stream ${i} received error:`,ve);const xe=ve.status;let wt=(function(C){const S=Xe[C];if(S!==void 0)return Pf(S)})(xe),Ge=ve.message;wt===void 0&&(wt=W.INTERNAL,Ge="Unknown error status: "+xe+" with message "+ve.message),z=!0,B.a_(new ee(wt,Ge)),k.close()}else re(ht,`RPC '${e}' stream ${i} received:`,J),B.u_(J)}})),K(p,zh.STAT_EVENT,(Y=>{Y.stat===ru.PROXY?re(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===ru.NOPROXY&&re(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){return new B_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="PersistentStream";class Hf{constructor(e,t,r,i,a,c,p,y){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $f(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Vn(t.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ee(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(Dl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(Dl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Uv extends Hf{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=W_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?hn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=du(this.serializer),t.addTarget=(function(a,c){let p;const y=c.target;if(p=uu(y)?{documents:K_(a,y)}:{query:Q_(a,y).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=Nf(a,c.resumeToken);const v=lu(a,c.expectedCount);v!==null&&(p.expectedCount=v)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=qo(a,c.snapshotVersion.toTimestamp());const v=lu(a,c.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=Y_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=du(this.serializer),t.removeTarget=e,this.q_(t)}}class jv extends Hf{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=G_(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=du(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>z_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{}class Bv extends qv{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,hu(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(W.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,hu(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(W.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $v{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class Hv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Ur(this)&&(re(Mr,"Restarting streams for network reachability change."),await(async function(y){const v=me(y);v.Ea.add(4),await Ds(v),v.Ra.set("Unknown"),v.Ea.delete(4),await ca(v)})(this))}))})),this.Ra=new $v(r,i)}}async function ca(n){if(Ur(n))for(const e of n.da)await e(!0)}async function Ds(n){for(const e of n.da)await e(!1)}function Wf(n,e){const t=me(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qu(t)?Ku(t):Vi(t).O_()&&Gu(t,e))}function zu(n,e){const t=me(n),r=Vi(t);t.Ia.delete(e),r.O_()&&zf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ur(t)&&t.Ra.set("Unknown"))}function Gu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vi(n).Y_(e)}function zf(n,e){n.Va.Ue(e),Vi(n).Z_(e)}function Ku(n){n.Va=new F_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Vi(n).start(),n.Ra.ua()}function Qu(n){return Ur(n)&&!Vi(n).x_()&&n.Ia.size>0}function Ur(n){return me(n).Ea.size===0}function Gf(n){n.Va=void 0}async function Wv(n){n.Ra.set("Online")}async function zv(n){n.Ia.forEach(((e,t)=>{Gu(n,e)}))}async function Gv(n,e){Gf(n),Qu(n)?(n.Ra.ha(e),Ku(n)):n.Ra.set("Unknown")}async function Kv(n,e,t){if(n.Ra.set("Online"),e instanceof Df&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(n,r)}else if(e instanceof Io?n.Va.Ze(e):e instanceof kf?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await Bf(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const I=a.Ia.get(v);I&&a.Ia.set(v,I.withResumeToken(y.resumeToken,c))}})),p.targetMismatches.forEach(((y,v)=>{const I=a.Ia.get(y);if(!I)return;a.Ia.set(y,I.withResumeToken(ct.EMPTY_BYTE_STRING,I.snapshotVersion)),zf(a,y);const k=new Jn(I.target,y,v,I.sequenceNumber);Gu(a,k)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Mr,"Failed to raise snapshot:",r),await $o(n,r)}}async function $o(n,e,t){if(!xi(e))throw e;n.Ea.add(1),await Ds(n),n.Ra.set("Offline"),t||(t=()=>Bf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Mr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ca(n)}))}function Kf(n,e){return e().catch((t=>$o(n,t,e)))}async function la(n){const e=me(n),t=ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xu;for(;Qv(e);)try{const i=await kv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Xv(e,i)}catch(i){await $o(e,i)}Qf(e)&&Xf(e)}function Qv(n){return Ur(n)&&n.Ta.length<10}function Xv(n,e){n.Ta.push(e);const t=ur(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Qf(n){return Ur(n)&&!ur(n).x_()&&n.Ta.length>0}function Xf(n){ur(n).start()}async function Yv(n){ur(n).ra()}async function Jv(n){const e=ur(n);for(const t of n.Ta)e.ea(t.mutations)}async function Zv(n,e,t){const r=n.Ta.shift(),i=Uu.from(r,e,t);await Kf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await la(n)}async function eE(n,e){e&&ur(n).X_&&await(async function(r,i){if((function(c){return O_(c)&&c!==W.ABORTED})(i.code)){const a=r.Ta.shift();ur(r).B_(),await Kf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await la(r)}})(n,e),Qf(n)&&Xf(n)}async function Nl(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),re(Mr,"RemoteStore received new credentials");const r=Ur(t);t.Ea.add(3),await Ds(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ca(t)}async function tE(n,e){const t=me(n);e?(t.Ea.delete(2),await ca(t)):e||(t.Ea.add(2),await Ds(t),t.Ra.set("Unknown"))}function Vi(n){return n.ma||(n.ma=(function(t,r,i){const a=me(t);return a.sa(),new Uv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Wv.bind(null,n),t_:zv.bind(null,n),r_:Gv.bind(null,n),H_:Kv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Qu(n)?Ku(n):n.Ra.set("Unknown")):(await n.ma.stop(),Gf(n))}))),n.ma}function ur(n){return n.fa||(n.fa=(function(t,r,i){const a=me(t);return a.sa(),new jv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Yv.bind(null,n),r_:eE.bind(null,n),ta:Jv.bind(null,n),na:Zv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await la(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new Xu(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(n,e){if(Vn("AsyncQueue",`${e}: ${n}`),xi(n))return new ee(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static emptySet(e){return new vi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=rs(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.ga=new Be(oe.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ci{constructor(e,t,r,i,a,c,p,y,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new Ci(e,t,vi.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rE{constructor(){this.queries=Vl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=me(t),a=i.queries;i.queries=Vl(),a.forEach(((c,p)=>{for(const y of p.Sa)y.onError(r)}))})(this,new ee(W.ABORTED,"Firestore shutting down"))}}function Vl(){return new Fr((n=>yf(n)),na)}async function Ju(n,e){const t=me(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new nE,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=Yu(c,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&ec(t)}async function Zu(n,e){const t=me(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function iE(n,e){const t=me(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&ec(t)}function sE(n,e,t){const r=me(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function ec(n){n.Ca.forEach((e=>{e.next()}))}var mu,Ol;(Ol=mu||(mu={})).Ma="default",Ol.Cache="cache";class tc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class oE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=_f(e),this.tu=new vi(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new xl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const y=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,k)=>{const D=i.get(I),z=ra(this.query,k)?k:null,B=!!D&&this.mutatedKeys.has(D.key),K=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let Y=!1;D&&z?D.data.isEqual(z.data)?B!==K&&(r.track({type:3,doc:z}),Y=!0):this.su(D,z)||(r.track({type:2,doc:z}),Y=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(p=!0)):!D&&z?(r.track({type:0,doc:z}),Y=!0):D&&!z&&(r.track({type:1,doc:D}),Y=!0,(y||v)&&(p=!0)),Y&&(z?(c=c.add(z),a=K?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,k)=>(function(z,B){const K=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:Y})}};return K(z)-K(B)})(I.type,k.type)||this.eu(I.doc,k.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],y=this.Xa.size===0&&this.current&&!i?1:0,v=y!==this.Za;return this.Za=y,c.length!==0||v?{snapshot:new Ci(this.query,e.tu,a,c,e.mutatedKeys,y===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Jf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Yf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ci.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nc="SyncEngine";class aE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class uE{constructor(e){this.key=e,this.hu=!1}}class cE{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Fr((p=>yf(p)),na),this.Iu=new Map,this.Eu=new Set,this.du=new Be(oe.comparator),this.Au=new Map,this.Ru=new Bu,this.Vu={},this.mu=new Map,this.fu=Si.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lE(n,e,t=!0){const r=id(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Zf(r,e,t,!0),i}async function hE(n,e){const t=id(n);await Zf(t,e,!0,!1)}async function Zf(n,e,t,r){const i=await Dv(n.localStore,ln(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await fE(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Wf(n.remoteStore,i),p}async function fE(n,e,t,r,i){n.pu=(k,D,z)=>(async function(K,Y,J,_e){let ve=Y.view.ru(J);ve.Cs&&(ve=await Cl(K.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,ve))));const xe=_e&&_e.targetChanges.get(Y.targetId),wt=_e&&_e.targetMismatches.get(Y.targetId)!=null,Ge=Y.view.applyChanges(ve,K.isPrimaryClient,xe,wt);return Ml(K,Y.targetId,Ge.au),Ge.snapshot})(n,k,D,z);const a=await Cl(n.localStore,e,!0),c=new oE(e,a.Qs),p=c.ru(a.documents),y=ks.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=c.applyChanges(p,n.isPrimaryClient,y);Ml(n,t,v.au);const I=new aE(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function dE(n,e,t){const r=me(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!na(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pu(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&zu(r.remoteStore,i.targetId),yu(r,i.targetId)})).catch(Ni)):(yu(r,i.targetId),await pu(r.localStore,i.targetId,!0))}async function pE(n,e){const t=me(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zu(t.remoteStore,r.targetId))}async function gE(n,e,t){const r=wE(n);try{const i=await(function(c,p){const y=me(c),v=je.now(),I=p.reduce(((z,B)=>z.add(B.key)),Re());let k,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let B=On(),K=Re();return y.Ns.getEntries(z,I).next((Y=>{B=Y,B.forEach(((J,_e)=>{_e.isValidDocument()||(K=K.add(J))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,B))).next((Y=>{k=Y;const J=[];for(const _e of p){const ve=k_(_e,k.get(_e.key).overlayedDocument);ve!=null&&J.push(new fr(_e.key,ve,cf(ve.value.mapValue),Rt.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,J,p)})).next((Y=>{D=Y;const J=Y.applyToLocalDocumentSet(k,K);return y.documentOverlayCache.saveOverlays(z,Y.batchId,J)}))})).then((()=>({batchId:D.batchId,changes:Ef(k)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,y){let v=c.Vu[c.currentUser.toKey()];v||(v=new Be(Ce)),v=v.insert(p,y),c.Vu[c.currentUser.toKey()]=v})(r,i.batchId,t),await Ns(r,i.changes),await la(r.remoteStore)}catch(i){const a=Yu(i,"Failed to persist write");t.reject(a)}}async function ed(n,e){const t=me(n);try{const r=await Rv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Ne(c.hu,14607):i.removedDocuments.size>0&&(Ne(c.hu,42227),c.hu=!1))})),await Ns(t,r,e)}catch(r){await Ni(r)}}function Ll(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const y=me(c);y.onlineState=p;let v=!1;y.queries.forEach(((I,k)=>{for(const D of k.Sa)D.va(p)&&(v=!0)})),v&&ec(y)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mE(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new Be(oe.comparator);c=c.insert(a,dt.newNoDocument(a,pe.min()));const p=Re().add(a),y=new aa(pe.min(),new Map,new Be(Ce),c,p);await ed(r,y),r.du=r.du.remove(a),r.Au.delete(e),rc(r)}else await pu(r.localStore,e,!1).then((()=>yu(r,e,t))).catch(Ni)}async function yE(n,e){const t=me(n),r=e.batch.batchId;try{const i=await Cv(t.localStore,e);nd(t,r,null),td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ns(t,i)}catch(i){await Ni(i)}}async function _E(n,e,t){const r=me(n);try{const i=await(function(c,p){const y=me(c);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let I;return y.mutationQueue.lookupMutationBatch(v,p).next((k=>(Ne(k!==null,37113),I=k.keys(),y.mutationQueue.removeMutationBatch(v,k)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,I,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I))).next((()=>y.localDocuments.getDocuments(v,I)))}))})(r.localStore,e);nd(r,e,t),td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ns(r,i)}catch(i){await Ni(i)}}function td(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function nd(n,e,t){const r=me(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function yu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||rd(n,r)}))}function rd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),rc(n))}function Ml(n,e,t){for(const r of t)r instanceof Yf?(n.Ru.addReference(r.key,e),vE(n,r)):r instanceof Jf?(re(nc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||rd(n,r.key)):le(19791,{wu:r})}function vE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(nc,"New document in limbo: "+t),n.Eu.add(r),rc(n))}function rc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new oe(Me.fromString(e)),r=n.fu.next();n.Au.set(r,new uE(t)),n.du=n.du.insert(t,r),Wf(n.remoteStore,new Jn(ln(ta(t.path)),r,"TargetPurposeLimboResolution",Jo.ce))}}async function Ns(n,e,t){const r=me(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,y)=>{c.push(r.pu(y,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const I=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;r.sharedClientState.updateQueryState(y.targetId,I?"current":"not-current")}if(v){i.push(v);const I=Hu.As(y.targetId,v);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(y,v){const I=me(y);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>G.forEach(v,(D=>G.forEach(D.Es,(z=>I.persistence.referenceDelegate.addReference(k,D.targetId,z))).next((()=>G.forEach(D.ds,(z=>I.persistence.referenceDelegate.removeReference(k,D.targetId,z)))))))))}catch(k){if(!xi(k))throw k;re(Wu,"Failed to update sequence numbers: "+k)}for(const k of v){const D=k.targetId;if(!k.fromCache){const z=I.Ms.get(D),B=z.snapshotVersion,K=z.withLastLimboFreeSnapshotVersion(B);I.Ms=I.Ms.insert(D,K)}}})(r.localStore,a))}async function EE(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){re(nc,"User change. New user:",e.toKey());const r=await qf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((y=>{y.reject(new ee(W.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ns(t,r.Ls)}}function TE(n,e){const t=me(n),r=t.Au.get(e);if(r&&r.hu)return Re().add(r.key);{let i=Re();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function id(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mE.bind(null,e),e.Pu.H_=iE.bind(null,e.eventManager),e.Pu.yu=sE.bind(null,e.eventManager),e}function wE(n){const e=me(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_E.bind(null,e),e}class Ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ua(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Sv(this.persistence,new Iv,e.initialUser,this.serializer)}Cu(e){return new jf($u.mi,this.serializer)}Du(e){return new xv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ho.provider={build:()=>new Ho};class IE extends Ho{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ne(this.persistence.referenceDelegate instanceof Bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new jf((r=>Bo.mi(r,t)),this.serializer)}}class _u{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EE.bind(null,this.syncEngine),await tE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rE})()}createDatastore(e){const t=ua(e.databaseInfo.databaseId),r=(function(a){return new Fv(a)})(e.databaseInfo);return(function(a,c,p,y){return new Bv(a,c,p,y)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new Hv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ll(this.syncEngine,t,0)),(function(){return kl.v()?new kl:new Vv})())}createSyncEngine(e,t){return(function(i,a,c,p,y,v,I){const k=new cE(i,a,c,p,y,v);return I&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=me(t);re(Mr,"RemoteStore shutting down."),r.Ea.add(5),await Ds(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}_u.provider={build:()=>new _u};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="FirestoreClient";class AE{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(cr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(cr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ga(n,e){n.asyncQueue.verifyOperationInProgress(),re(cr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await qf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Fl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bE(n);re(cr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Nl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Nl(e.remoteStore,i))),n._onlineComponents=e}async function bE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(cr,"Using user provided OfflineComponentProvider");try{await Ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;wi("Error using user provided cache. Falling back to memory cache: "+t),await Ga(n,new Ho)}}else re(cr,"Using default OfflineComponentProvider"),await Ga(n,new IE(void 0));return n._offlineComponents}async function sd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(cr,"Using user provided OnlineComponentProvider"),await Fl(n,n._uninitializedComponentsProvider._online)):(re(cr,"Using default OnlineComponentProvider"),await Fl(n,new _u))),n._onlineComponents}function SE(n){return sd(n).then((e=>e.syncEngine))}async function Wo(n){const e=await sd(n),t=e.eventManager;return t.onListen=lE.bind(null,e.syncEngine),t.onUnlisten=dE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pE.bind(null,e.syncEngine),t}function CE(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,y,v){const I=new ic({next:D=>{I.Nu(),c.enqueueAndForget((()=>Zu(a,k)));const z=D.docs.has(p);!z&&D.fromCache?v.reject(new ee(W.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&D.fromCache&&y&&y.source==="server"?v.reject(new ee(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(D)},error:D=>v.reject(D)}),k=new tc(ta(p.path),I,{includeMetadataChanges:!0,qa:!0});return Ju(a,k)})(await Wo(n),n.asyncQueue,e,t,r))),r.promise}function RE(n,e,t={}){const r=new Dn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,y,v){const I=new ic({next:D=>{I.Nu(),c.enqueueAndForget((()=>Zu(a,k))),D.fromCache&&y.source==="server"?v.reject(new ee(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(D)},error:D=>v.reject(D)}),k=new tc(p,I,{includeMetadataChanges:!0,qa:!0});return Ju(a,k)})(await Wo(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="firestore.googleapis.com",jl=!0;class ql{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ad,this.ssl=jl}else this.host=e.host,this.ssl=e.ssl??jl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ov)throw new ee(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}By("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=od(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ha{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ql({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ql(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ny;switch(r.type){case"firstParty":return new Ly(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ul.get(t);r&&(re("ComponentProvider","Removing Datastore"),Ul.delete(t),r.terminate())})(this),Promise.resolve()}}function PE(n,e,t,r={}){n=Ct(n,ha);const i=Ri(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(eh(`https://${p}`),th("Firestore",!0)),a.host!==ad&&a.host!==p&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...a,host:p,ssl:i,emulatorOptions:r};if(!Nr(y,c)&&(n._setSettings(y),r.mockUserToken)){let v,I;if(typeof r.mockUserToken=="string")v=r.mockUserToken,I=ft.MOCK_USER;else{v=$d(r.mockUserToken,n._app?.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new ee(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ft(k)}n._authCredentials=new xy(new Xh(v,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dr(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Cs(t,He._jsonSchema))return new He(e,r||null,new oe(Me.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Je("string",He._jsonSchemaVersion),referencePath:Je("string")};class rr extends dr{constructor(e,t,r){super(e,t,ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new oe(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function JE(n,e,...t){if(n=qe(n),Yh("collection","path",e),n instanceof ha){const r=Me.fromString(e,...t);return el(r),new rr(n,null,r)}{if(!(n instanceof He||n instanceof rr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return el(r),new rr(n.firestore,null,r)}}function ZE(n,e,...t){if(n=qe(n),arguments.length===1&&(e=Nu.newId()),Yh("doc","path",e),n instanceof ha){const r=Me.fromString(e,...t);return Zc(r),new He(n,null,new oe(r))}{if(!(n instanceof He||n instanceof rr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return Zc(r),new He(n.firestore,n instanceof rr?n.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="AsyncQueue";class $l{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $f(this,"async_queue_retry"),this._c=()=>{const r=za();r&&re(Bl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=za();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=za();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Dn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xi(e))throw e;re(Bl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",Hl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Xu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&le(47125,{Pc:Hl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const a of r)if(a in i&&typeof i[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Ln extends ha{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $l,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $l(e),this._firestoreClient=void 0,await e}}}function kE(n,e){const t=typeof n=="object"?n:sh(),r=typeof n=="string"?n:Oo,i=wu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=qd("firestore");a&&PE(i,...a)}return i}function xs(n){if(n._terminated)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DE(n),n._firestoreClient}function DE(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new e_(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,od(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new AE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(ct.fromBase64String(e))}catch(t){throw new ee(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Cs(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Je("string",Bt._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(Cs(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Je("string",fn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Cs(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dn(e.vectorValues);throw new ee(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Je("string",dn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^__.*__$/;class xE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ps(e,this.data,t,this.fieldTransforms)}}class ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new fr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:n})}}class sc{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return zo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cd(this.Ac)&&NE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ua(e)}Cc(e,t,r,i=!1){return new sc({Ac:e,methodName:t,Dc:r,path:ut.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function da(n){const e=n._freezeSettings(),t=ua(n._databaseId);return new VE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ld(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);ac("Data must be an object, but it was:",c,r);const p=dd(r,c);let y,v;if(a.merge)y=new Nt(c.fieldMask),v=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const k of a.mergeFields){const D=vu(e,k,t);if(!c.contains(D))throw new ee(W.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);gd(I,D)||I.push(D)}y=new Nt(I),v=c.fieldTransforms.filter((k=>y.covers(k.field)))}else y=null,v=c.fieldTransforms;return new xE(new St(p),y,v)}class pa extends fa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pa}}class oc extends fa{_toFieldTransform(e){return new S_(e.path,new _s)}isEqual(e){return e instanceof oc}}function hd(n,e,t,r){const i=n.Cc(1,e,t);ac("Data must be an object, but it was:",i,r);const a=[],c=St.empty();hr(r,((y,v)=>{const I=uc(e,y,t);v=qe(v);const k=i.yc(I);if(v instanceof pa)a.push(I);else{const D=Os(v,k);D!=null&&(a.push(I),c.set(I,D))}}));const p=new Nt(a);return new ud(c,p,i.fieldTransforms)}function fd(n,e,t,r,i,a){const c=n.Cc(1,e,t),p=[vu(e,r,t)],y=[i];if(a.length%2!=0)throw new ee(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<a.length;D+=2)p.push(vu(e,a[D])),y.push(a[D+1]);const v=[],I=St.empty();for(let D=p.length-1;D>=0;--D)if(!gd(v,p[D])){const z=p[D];let B=y[D];B=qe(B);const K=c.yc(z);if(B instanceof pa)v.push(z);else{const Y=Os(B,K);Y!=null&&(v.push(z),I.set(z,Y))}}const k=new Nt(v);return new ud(I,k,c.fieldTransforms)}function OE(n,e,t,r=!1){return Os(t,n.Cc(r?4:3,e))}function Os(n,e){if(pd(n=qe(n)))return ac("Unsupported field value:",e,n),dd(n,e);if(n instanceof fa)return(function(r,i){if(!cd(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let y=Os(p,i.wc(c));y==null&&(y={nullValue:"NULL_VALUE"}),a.push(y),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=je.fromDate(r);return{timestampValue:qo(i.serializer,a)}}if(r instanceof je){const a=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(i.serializer,a)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Nf(i.serializer,r._byteString)};if(r instanceof He){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:qu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return(function(c,p){return{mapValue:{fields:{[af]:{stringValue:uf},[Lo]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return Fu(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Yo(r)}`)})(n,e)}function dd(n,e){const t={};return ef(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,((r,i)=>{const a=Os(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function pd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof fn||n instanceof Bt||n instanceof He||n instanceof fa||n instanceof dn)}function ac(n,e,t){if(!pd(t)||!Jh(t)){const r=Yo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function vu(n,e,t){if((e=qe(e))instanceof Vs)return e._internalPath;if(typeof e=="string")return uc(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const LE=new RegExp("[~\\*/\\[\\]]");function uc(n,e,t){if(e.search(LE)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vs(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(a||c)&&(y+=" (found",a&&(y+=` in field ${r}`),c&&(y+=` in document ${i}`),y+=")"),new ee(W.INVALID_ARGUMENT,p+n+y)}function gd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ME(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ME extends md{data(){return super.data()}}function cc(n,e){return typeof e=="string"?uc(n,e):e instanceof Vs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}class _d extends lc{}function eT(n,e,...t){let r=[];e instanceof lc&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((y=>y instanceof hc)).length,p=a.filter((y=>y instanceof ga)).length;if(c>1||c>0&&p>0)throw new ee(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class ga extends _d{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ga(e,t,r)}_apply(e){const t=this._parse(e);return vd(e._query,t),new dr(e.firestore,e.converter,cu(e._query,t))}_parse(e){const t=da(e.firestore);return(function(a,c,p,y,v,I,k){let D;if(v.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ee(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Gl(k,I);const B=[];for(const K of k)B.push(zl(y,a,K));D={arrayValue:{values:B}}}else D=zl(y,a,k)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Gl(k,I),D=OE(p,c,k,I==="in"||I==="not-in");return Ye.create(v,I,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function tT(n,e,t){const r=e,i=cc("where",n);return ga._create(i,r,t)}class hc extends lc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const y of p)vd(c,y),c=cu(c,y)})(e._query,t),new dr(e.firestore,e.converter,cu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fc extends _d{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new fc(e,t,r)}_apply(e){return new dr(e.firestore,e.converter,Uo(e._query,this._limit,this._limitType))}}function nT(n){return $y("limit",n),fc._create("limit",n,"F")}function zl(n,e,t){if(typeof(t=qe(t))=="string"){if(t==="")throw new ee(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mf(e)&&t.indexOf("/")!==-1)throw new ee(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Me.fromString(t));if(!oe.isDocumentKey(r))throw new ee(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ul(n,new oe(r))}if(t instanceof He)return ul(n,t._key);throw new ee(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yo(t)}.`)}function Gl(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vd(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class FE{convertValue(e,t="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Lo].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new dn(t)}convertGeoPoint(e){return new fn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gs(e));default:return null}}convertTimestamp(e){const t=sr(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Me.fromString(e);Ne(Ff(r),9688,{name:e});const i=new ms(r.get(1),r.get(3)),a=new oe(r.popFirst(5));return i.isEqual(t)||Vn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kr extends md{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(cc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=kr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",kr._jsonSchema={type:Je("string",kr._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class Ao extends kr{data(e={}){return super.data(e)}}class Dr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ss(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ao(this._firestore,this._userDataWriter,r.key,r,new ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const y=new Ao(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ss(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const y=new Ao(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ss(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,I=-1;return p.type!==0&&(v=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:UE(p.type),doc:y,oldIndex:v,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n){n=Ct(n,He);const e=Ct(n.firestore,Ln);return CE(xs(e),n._key).then((t=>Td(e,n,t)))}Dr._jsonSchemaVersion="firestore/querySnapshot/1.0",Dr._jsonSchema={type:Je("string",Dr._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class dc extends FE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function iT(n){n=Ct(n,dr);const e=Ct(n.firestore,Ln),t=xs(e),r=new dc(e);return yd(n._query),RE(t,n._query).then((i=>new Dr(e,r,n,i)))}function sT(n,e,t){n=Ct(n,He);const r=Ct(n.firestore,Ln),i=Ed(n.converter,e,t);return ma(r,[ld(da(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Rt.none())])}function oT(n,e,t,...r){n=Ct(n,He);const i=Ct(n.firestore,Ln),a=da(i);let c;return c=typeof(e=qe(e))=="string"||e instanceof Vs?fd(a,"updateDoc",n._key,e,t,r):hd(a,"updateDoc",n._key,e),ma(i,[c.toMutation(n._key,Rt.exists(!0))])}function aT(n){return ma(Ct(n.firestore,Ln),[new oa(n._key,Rt.none())])}function uT(n,...e){n=qe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Wl(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Wl(e[r])){const y=e[r];e[r]=y.next?.bind(y),e[r+1]=y.error?.bind(y),e[r+2]=y.complete?.bind(y)}let a,c,p;if(n instanceof He)c=Ct(n.firestore,Ln),p=ta(n._key.path),a={next:y=>{e[r]&&e[r](Td(c,n,y))},error:e[r+1],complete:e[r+2]};else{const y=Ct(n,dr);c=Ct(y.firestore,Ln),p=y._query;const v=new dc(c);a={next:I=>{e[r]&&e[r](new Dr(c,v,y,I))},error:e[r+1],complete:e[r+2]},yd(n._query)}return(function(v,I,k,D){const z=new ic(D),B=new tc(I,z,k);return v.asyncQueue.enqueueAndForget((async()=>Ju(await Wo(v),B))),()=>{z.Nu(),v.asyncQueue.enqueueAndForget((async()=>Zu(await Wo(v),B)))}})(xs(c),p,i,a)}function ma(n,e){return(function(r,i){const a=new Dn;return r.asyncQueue.enqueueAndForget((async()=>gE(await SE(r),i,a))),a.promise})(xs(n),e)}function Td(n,e,t){const r=t.docs.get(e._key),i=new dc(n);return new kr(n,i,e._key,r,new ss(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=da(e)}set(e,t,r){this._verifyNotCommitted();const i=Ka(e,this._firestore),a=Ed(i.converter,t,r),c=ld(this._dataReader,"WriteBatch.set",i._key,a,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,Rt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const a=Ka(e,this._firestore);let c;return c=typeof(t=qe(t))=="string"||t instanceof Vs?fd(this._dataReader,"WriteBatch.update",a._key,t,r,i):hd(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(c.toMutation(a._key,Rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ka(e,this._firestore);return this._mutations=this._mutations.concat(new oa(t._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ka(n,e){if((n=qe(n)).firestore!==e)throw new ee(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function cT(){return new oc("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){return xs(n=Ct(n,Ln)),new jE(n,(e=>ma(n,e)))}(function(e,t=!0){(function(i){Di=i})(Pi),Ei(new xr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Ln(new Vy(r.getProvider("auth-internal")),new My(c,r.getProvider("app-check-internal")),(function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ee(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(v.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),tr(Qc,Xc,e),tr(Qc,Xc,"esm2020")})();const qE={apiKey:"AIzaSyBLaSSCbPd47FOMiIllexWxHr8Z7pOPC_c",authDomain:"retodelmes.firebaseapp.com",projectId:"retodelmes",storageBucket:"retodelmes.firebasestorage.app",messagingSenderId:"1023316527945",appId:"1:1023316527945:web:51b0c91b820ac730862898"},wd=ih(qE),hT=ky(wd),fT=kE(wd);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=ge(r).data("tema").split("|");ge("html").attr("data-theme",i),ge('meta[name="theme-color"]').length?ge('meta[name="theme-color"]').attr("content",a):ge("<meta>",{name:"theme-color",content:a}).appendTo("head"),Id("witema",`${i}|${a}`,720),ge(".mtha").removeClass("mtha"),ge(r).addClass("mtha")},t=()=>{ge(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=Ad("witema"),i=ge(`[data-tema="${r}"]`)[0]||ge(".mtha")[0]||ge("[data-tema]").first()[0];i&&e(i),ge(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return ge(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();function dT(n,e,t,r){ge(n).text(t).addClass(e).delay(1800).queue(i=>ge(n).text(r).removeClass(e).dequeue())}(()=>{const n=()=>{const e=new Date;ge(".wty").text(e.getFullYear()),ge(".wtu").text(e.toLocaleString()),ge(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),ge(".abwc").toggleClass("dpn")})};return ge(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})();const pT=n=>{ge("#loading-style").length||ge("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#fdd835,#43a047,#fdd835);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),ge(".loading").length||ge("body").append('<div class="loading" style="display:none"></div>'),ge(".loading").toggle(!!n)},gT=n=>{const e=n==="smiletop"?"smiletop.html":"smile.html";window.location.href=new URL(e,window.location.href).toString()};function mT(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};ge("#notificationsContainer").length||ge("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=ge(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);ge("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const yT=n=>{const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)},_T=(n,e="success")=>{ge(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=ge(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${c}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function Id(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function Ad(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),BE(n),null}}function BE(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function vT(n,e,t){ge(window).on("beforeunload",function(){ge(n).each(function(){const r=ge(this),i=r.attr(e);i&&Id(i,t(r),168)})})}function ET(n,e,t){ge(n).each(function(){const r=ge(this),i=r.attr(e),a=Ad(i);i&&a!=null&&t(r,a)})}function $E(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,c=a?"top":t;if(ge("#witip-styles").length||ge('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return ge(n).each((wt,Ge)=>$E(Ge,e,t,r)),ge(n);const p=ge(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),ge(".witip").remove();const y=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=ge("<div>",{class:`witip ${c} ${a||""}`,"data-for":y,text:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),ge("body").append(v);const{left:I,top:k,right:D,bottom:z,width:B,height:K}=p[0].getBoundingClientRect(),Y=v.outerWidth(),J=v.outerHeight(),_e={top:{x:I+B/2-Y/2,y:k-J-8},bottom:{x:I+B/2-Y/2,y:z+8},left:{x:I-Y-8,y:k+K/2-J/2},right:{x:D+8,y:k+K/2-J/2}};let{x:ve,y:xe}=_e[c];return ve=Math.max(8,Math.min(ve,window.innerWidth-Y-8)),xe=Math.max(8,Math.min(xe,window.innerHeight-J-8)),v.css({left:ve,top:xe}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}const TT=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),c=t.getMonth(),p=t.getDate();return(i<c||i===c&&a<p)&&r--,r};export{ge as $,nT as A,lT as B,BE as C,aT as D,uT as E,pT as F,oT as G,_T as M,mT as N,fT as a,cT as b,iT as c,ZE as d,JE as e,tT as f,rT as g,WE as h,hT as i,GE as j,yT as k,Id as l,gT as m,zE as n,HE as o,TT as p,eT as q,QE as r,sT as s,XE as t,KE as u,Ad as v,$E as w,vT as x,ET as y,dT as z};
