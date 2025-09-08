(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function dd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lo={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var pd=lo.exports,rc;function gd(){return rc||(rc=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:pd,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,E={},I=E.toString,k=E.hasOwnProperty,V=k.toString,G=V.call(Object),$={},K=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},J=e.document,ye={type:!0,src:!0,nonce:!0,noModule:!0};function _e(s,u,h){h=h||J;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in ye)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function xe(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?E[I.call(s)]||"object":typeof s}var wt="3.7.1",ze=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:wt,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,v=arguments[0]||{},R=1,A=arguments.length,D=!1;for(typeof v=="boolean"&&(D=v,v=arguments[R]||{},R++),typeof v!="object"&&!K(v)&&(v={}),R===A&&(v=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||v===d)&&(D&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=v[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,v[u]=l.extend(D,y,d)):d!==void 0&&(v[u]=d));return v},l.extend({expando:"jQuery"+(wt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=k.call(u,"constructor")&&u.constructor,typeof h=="function"&&V.call(h)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){_e(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!ze.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,v=s.length,R=!h;y<v;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,v=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&v.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&v.push(m);return c(v)},guid:1,support:$}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){E["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=xe(s);return K(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var N=r.pop,x=r.sort,L=r.splice,b="[\\x20\\t\\r\\n\\f]",gt=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var lr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function oa(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(lr,oa)};var mt=J,gn=p;(function(){var s,u,h,d,m,y=gn,v,R,A,D,q,B=l.expando,F=0,Q=0,ue=Sn(),we=Sn(),he=Sn(),Ge=Sn(),Be=function(w,P){return w===P&&(m=!0),0},Ct="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Rt="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ve="\\["+b+"*("+Rt+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Rt+"))|)"+b+"*\\]",$e=":("+Rt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ve+")*)|.*)\\)|)",be=new RegExp(b+"+","g"),Ue=new RegExp("^"+b+"*,"+b+"*"),Ot=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),o=new RegExp(b+"|>"),f=new RegExp($e),g=new RegExp("^"+Rt+"$"),T={ID:new RegExp("^#("+Rt+")"),CLASS:new RegExp("^\\.("+Rt+")"),TAG:new RegExp("^("+Rt+"|[*])"),ATTR:new RegExp("^"+ve),PSEUDO:new RegExp("^"+$e),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+Ct+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,De=/[+~]/,Oe=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),me=function(w,P){var M="0x"+w.slice(1)-65536;return P||(M<0?String.fromCharCode(M+65536):String.fromCharCode(M>>10|55296,M&1023|56320))},tt=function(){Hn()},nt=no(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function $n(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(mt.childNodes),mt.childNodes),r[mt.childNodes.length].nodeType}catch{y={apply:function(P,M){gn.apply(P,a.call(M))},call:function(P){gn.apply(P,a.call(arguments,1))}}}function Ee(w,P,M,j){var H,Z,ee,se,te,Ie,fe,de=P&&P.ownerDocument,Ae=P?P.nodeType:9;if(M=M||[],typeof w!="string"||!w||Ae!==1&&Ae!==9&&Ae!==11)return M;if(!j&&(Hn(P),P=P||v,A)){if(Ae!==11&&(te=X.exec(w)))if(H=te[1]){if(Ae===9)if(ee=P.getElementById(H)){if(ee.id===H)return y.call(M,ee),M}else return M;else if(de&&(ee=de.getElementById(H))&&Ee.contains(P,ee)&&ee.id===H)return y.call(M,ee),M}else{if(te[2])return y.apply(M,P.getElementsByTagName(w)),M;if((H=te[3])&&P.getElementsByClassName)return y.apply(M,P.getElementsByClassName(H)),M}if(!Ge[w+" "]&&(!D||!D.test(w))){if(fe=w,de=P,Ae===1&&(o.test(w)||Ot.test(w))){for(de=De.test(w)&&Ea(P.parentNode)||P,(de!=P||!$.scope)&&((se=P.getAttribute("id"))?se=l.escapeSelector(se):P.setAttribute("id",se=B)),Ie=Ji(w),Z=Ie.length;Z--;)Ie[Z]=(se?"#"+se:":scope")+" "+to(Ie[Z]);fe=Ie.join(",")}try{return y.apply(M,de.querySelectorAll(fe)),M}catch{Ge(w,!0)}finally{se===B&&P.removeAttribute("id")}}}return nc(w.replace(gt,"$1"),P,M,j)}function Sn(){var w=[];function P(M,j){return w.push(M+" ")>u.cacheLength&&delete P[w.shift()],P[M+" "]=j}return P}function Et(w){return w[B]=!0,w}function oi(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function cd(w){return function(P){return S(P,"input")&&P.type===w}}function ld(w){return function(P){return(S(P,"input")||S(P,"button"))&&P.type===w}}function ec(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&nt(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function Ir(w){return Et(function(P){return P=+P,Et(function(M,j){for(var H,Z=w([],M.length,P),ee=Z.length;ee--;)M[H=Z[ee]]&&(M[H]=!(j[H]=M[H]))})})}function Ea(w){return w&&typeof w.getElementsByTagName<"u"&&w}function Hn(w){var P,M=w?w.ownerDocument||w:mt;return M==v||M.nodeType!==9||!M.documentElement||(v=M,R=v.documentElement,A=!l.isXMLDoc(v),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&mt!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",tt),$.getById=oi(function(j){return R.appendChild(j).id=l.expando,!v.getElementsByName||!v.getElementsByName(l.expando).length}),$.disconnectedMatch=oi(function(j){return q.call(j,"*")}),$.scope=oi(function(){return v.querySelectorAll(":scope")}),$.cssHas=oi(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),$.getById?(u.filter.ID=function(j){var H=j.replace(Oe,me);return function(Z){return Z.getAttribute("id")===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var Z=H.getElementById(j);return Z?[Z]:[]}}):(u.filter.ID=function(j){var H=j.replace(Oe,me);return function(Z){var ee=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return ee&&ee.value===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&A){var Z,ee,se,te=H.getElementById(j);if(te){if(Z=te.getAttributeNode("id"),Z&&Z.value===j)return[te];for(se=H.getElementsByName(j),ee=0;te=se[ee++];)if(Z=te.getAttributeNode("id"),Z&&Z.value===j)return[te]}return[]}}),u.find.TAG=function(j,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(j):H.querySelectorAll(j)},u.find.CLASS=function(j,H){if(typeof H.getElementsByClassName<"u"&&A)return H.getElementsByClassName(j)},D=[],oi(function(j){var H;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||D.push("\\["+b+"*(?:value|"+Ct+")"),j.querySelectorAll("[id~="+B+"-]").length||D.push("~="),j.querySelectorAll("a#"+B+"+*").length||D.push(".#.+[+~]"),j.querySelectorAll(":checked").length||D.push(":checked"),H=v.createElement("input"),H.setAttribute("type","hidden"),j.appendChild(H).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&D.push(":enabled",":disabled"),H=v.createElement("input"),H.setAttribute("name",""),j.appendChild(H),j.querySelectorAll("[name='']").length||D.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),$.cssHas||D.push(":has"),D=D.length&&new RegExp(D.join("|")),Be=function(j,H){if(j===H)return m=!0,0;var Z=!j.compareDocumentPosition-!H.compareDocumentPosition;return Z||(Z=(j.ownerDocument||j)==(H.ownerDocument||H)?j.compareDocumentPosition(H):1,Z&1||!$.sortDetached&&H.compareDocumentPosition(j)===Z?j===v||j.ownerDocument==mt&&Ee.contains(mt,j)?-1:H===v||H.ownerDocument==mt&&Ee.contains(mt,H)?1:d?_.call(d,j)-_.call(d,H):0:Z&4?-1:1)}),v}Ee.matches=function(w,P){return Ee(w,null,null,P)},Ee.matchesSelector=function(w,P){if(Hn(w),A&&!Ge[P+" "]&&(!D||!D.test(P)))try{var M=q.call(w,P);if(M||$.disconnectedMatch||w.document&&w.document.nodeType!==11)return M}catch{Ge(P,!0)}return Ee(P,v,null,[w]).length>0},Ee.contains=function(w,P){return(w.ownerDocument||w)!=v&&Hn(w),l.contains(w,P)},Ee.attr=function(w,P){(w.ownerDocument||w)!=v&&Hn(w);var M=u.attrHandle[P.toLowerCase()],j=M&&k.call(u.attrHandle,P.toLowerCase())?M(w,P,!A):void 0;return j!==void 0?j:w.getAttribute(P)},Ee.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var P,M=[],j=0,H=0;if(m=!$.sortStable,d=!$.sortStable&&a.call(w,0),x.call(w,Be),m){for(;P=w[H++];)P===w[H]&&(j=M.push(H));for(;j--;)L.call(w,M[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Et,match:T,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Oe,me),w[3]=(w[3]||w[4]||w[5]||"").replace(Oe,me),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Ee.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Ee.error(w[0]),w},PSEUDO:function(w){var P,M=!w[6]&&w[2];return T.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":M&&f.test(M)&&(P=Ji(M,!0))&&(P=M.indexOf(")",M.length-P)-M.length)&&(w[0]=w[0].slice(0,P),w[2]=M.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Oe,me).toLowerCase();return w==="*"?function(){return!0}:function(M){return S(M,P)}},CLASS:function(w){var P=ue[w+" "];return P||(P=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&ue(w,function(M){return P.test(typeof M.className=="string"&&M.className||typeof M.getAttribute<"u"&&M.getAttribute("class")||"")})},ATTR:function(w,P,M){return function(j){var H=Ee.attr(j,w);return H==null?P==="!=":P?(H+="",P==="="?H===M:P==="!="?H!==M:P==="^="?M&&H.indexOf(M)===0:P==="*="?M&&H.indexOf(M)>-1:P==="$="?M&&H.slice(-M.length)===M:P==="~="?(" "+H.replace(be," ")+" ").indexOf(M)>-1:P==="|="?H===M||H.slice(0,M.length+1)===M+"-":!1):!0}},CHILD:function(w,P,M,j,H){var Z=w.slice(0,3)!=="nth",ee=w.slice(-4)!=="last",se=P==="of-type";return j===1&&H===0?function(te){return!!te.parentNode}:function(te,Ie,fe){var de,Ae,ae,Le,At,lt=Z!==ee?"nextSibling":"previousSibling",Lt=te.parentNode,rn=se&&te.nodeName.toLowerCase(),ai=!fe&&!se,Tt=!1;if(Lt){if(Z){for(;lt;){for(ae=te;ae=ae[lt];)if(se?S(ae,rn):ae.nodeType===1)return!1;At=lt=w==="only"&&!At&&"nextSibling"}return!0}if(At=[ee?Lt.firstChild:Lt.lastChild],ee&&ai){for(Ae=Lt[B]||(Lt[B]={}),de=Ae[w]||[],Le=de[0]===F&&de[1],Tt=Le&&de[2],ae=Le&&Lt.childNodes[Le];ae=++Le&&ae&&ae[lt]||(Tt=Le=0)||At.pop();)if(ae.nodeType===1&&++Tt&&ae===te){Ae[w]=[F,Le,Tt];break}}else if(ai&&(Ae=te[B]||(te[B]={}),de=Ae[w]||[],Le=de[0]===F&&de[1],Tt=Le),Tt===!1)for(;(ae=++Le&&ae&&ae[lt]||(Tt=Le=0)||At.pop())&&!((se?S(ae,rn):ae.nodeType===1)&&++Tt&&(ai&&(Ae=ae[B]||(ae[B]={}),Ae[w]=[F,Tt]),ae===te)););return Tt-=H,Tt===j||Tt%j===0&&Tt/j>=0}}},PSEUDO:function(w,P){var M,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Ee.error("unsupported pseudo: "+w);return j[B]?j(P):j.length>1?(M=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?Et(function(H,Z){for(var ee,se=j(H,P),te=se.length;te--;)ee=_.call(H,se[te]),H[ee]=!(Z[ee]=se[te])}):function(H){return j(H,0,M)}):j}},pseudos:{not:Et(function(w){var P=[],M=[],j=Aa(w.replace(gt,"$1"));return j[B]?Et(function(H,Z,ee,se){for(var te,Ie=j(H,null,se,[]),fe=H.length;fe--;)(te=Ie[fe])&&(H[fe]=!(Z[fe]=te))}):function(H,Z,ee){return P[0]=H,j(P,null,ee,M),P[0]=null,!M.pop()}}),has:Et(function(w){return function(P){return Ee(w,P).length>0}}),contains:Et(function(w){return w=w.replace(Oe,me),function(P){return(P.textContent||l.text(P)).indexOf(w)>-1}}),lang:Et(function(w){return g.test(w||"")||Ee.error("unsupported lang: "+w),w=w.replace(Oe,me).toLowerCase(),function(P){var M;do if(M=A?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return M=M.toLowerCase(),M===w||M.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===$n()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:ec(!1),disabled:ec(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return U.test(w.nodeName)},input:function(w){return O.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var P;return S(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:Ir(function(){return[0]}),last:Ir(function(w,P){return[P-1]}),eq:Ir(function(w,P,M){return[M<0?M+P:M]}),even:Ir(function(w,P){for(var M=0;M<P;M+=2)w.push(M);return w}),odd:Ir(function(w,P){for(var M=1;M<P;M+=2)w.push(M);return w}),lt:Ir(function(w,P,M){var j;for(M<0?j=M+P:M>P?j=P:j=M;--j>=0;)w.push(j);return w}),gt:Ir(function(w,P,M){for(var j=M<0?M+P:M;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=cd(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=ld(s);function tc(){}tc.prototype=u.filters=u.pseudos,u.setFilters=new tc;function Ji(w,P){var M,j,H,Z,ee,se,te,Ie=we[w+" "];if(Ie)return P?0:Ie.slice(0);for(ee=w,se=[],te=u.preFilter;ee;){(!M||(j=Ue.exec(ee)))&&(j&&(ee=ee.slice(j[0].length)||ee),se.push(H=[])),M=!1,(j=Ot.exec(ee))&&(M=j.shift(),H.push({value:M,type:j[0].replace(gt," ")}),ee=ee.slice(M.length));for(Z in u.filter)(j=T[Z].exec(ee))&&(!te[Z]||(j=te[Z](j)))&&(M=j.shift(),H.push({value:M,type:Z,matches:j}),ee=ee.slice(M.length));if(!M)break}return P?ee.length:ee?Ee.error(w):we(w,se).slice(0)}function to(w){for(var P=0,M=w.length,j="";P<M;P++)j+=w[P].value;return j}function no(w,P,M){var j=P.dir,H=P.next,Z=H||j,ee=M&&Z==="parentNode",se=Q++;return P.first?function(te,Ie,fe){for(;te=te[j];)if(te.nodeType===1||ee)return w(te,Ie,fe);return!1}:function(te,Ie,fe){var de,Ae,ae=[F,se];if(fe){for(;te=te[j];)if((te.nodeType===1||ee)&&w(te,Ie,fe))return!0}else for(;te=te[j];)if(te.nodeType===1||ee)if(Ae=te[B]||(te[B]={}),H&&S(te,H))te=te[j]||te;else{if((de=Ae[Z])&&de[0]===F&&de[1]===se)return ae[2]=de[2];if(Ae[Z]=ae,ae[2]=w(te,Ie,fe))return!0}return!1}}function Ta(w){return w.length>1?function(P,M,j){for(var H=w.length;H--;)if(!w[H](P,M,j))return!1;return!0}:w[0]}function hd(w,P,M){for(var j=0,H=P.length;j<H;j++)Ee(w,P[j],M);return M}function ro(w,P,M,j,H){for(var Z,ee=[],se=0,te=w.length,Ie=P!=null;se<te;se++)(Z=w[se])&&(!M||M(Z,j,H))&&(ee.push(Z),Ie&&P.push(se));return ee}function wa(w,P,M,j,H,Z){return j&&!j[B]&&(j=wa(j)),H&&!H[B]&&(H=wa(H,Z)),Et(function(ee,se,te,Ie){var fe,de,Ae,ae,Le=[],At=[],lt=se.length,Lt=ee||hd(P||"*",te.nodeType?[te]:te,[]),rn=w&&(ee||!P)?ro(Lt,Le,w,te,Ie):Lt;if(M?(ae=H||(ee?w:lt||j)?[]:se,M(rn,ae,te,Ie)):ae=rn,j)for(fe=ro(ae,At),j(fe,[],te,Ie),de=fe.length;de--;)(Ae=fe[de])&&(ae[At[de]]=!(rn[At[de]]=Ae));if(ee){if(H||w){if(H){for(fe=[],de=ae.length;de--;)(Ae=ae[de])&&fe.push(rn[de]=Ae);H(null,ae=[],fe,Ie)}for(de=ae.length;de--;)(Ae=ae[de])&&(fe=H?_.call(ee,Ae):Le[de])>-1&&(ee[fe]=!(se[fe]=Ae))}}else ae=ro(ae===se?ae.splice(lt,ae.length):ae),H?H(null,se,ae,Ie):y.apply(se,ae)})}function Ia(w){for(var P,M,j,H=w.length,Z=u.relative[w[0].type],ee=Z||u.relative[" "],se=Z?1:0,te=no(function(de){return de===P},ee,!0),Ie=no(function(de){return _.call(P,de)>-1},ee,!0),fe=[function(de,Ae,ae){var Le=!Z&&(ae||Ae!=h)||((P=Ae).nodeType?te(de,Ae,ae):Ie(de,Ae,ae));return P=null,Le}];se<H;se++)if(M=u.relative[w[se].type])fe=[no(Ta(fe),M)];else{if(M=u.filter[w[se].type].apply(null,w[se].matches),M[B]){for(j=++se;j<H&&!u.relative[w[j].type];j++);return wa(se>1&&Ta(fe),se>1&&to(w.slice(0,se-1).concat({value:w[se-2].type===" "?"*":""})).replace(gt,"$1"),M,se<j&&Ia(w.slice(se,j)),j<H&&Ia(w=w.slice(j)),j<H&&to(w))}fe.push(M)}return Ta(fe)}function fd(w,P){var M=P.length>0,j=w.length>0,H=function(Z,ee,se,te,Ie){var fe,de,Ae,ae=0,Le="0",At=Z&&[],lt=[],Lt=h,rn=Z||j&&u.find.TAG("*",Ie),ai=F+=Lt==null?1:Math.random()||.1,Tt=rn.length;for(Ie&&(h=ee==v||ee||Ie);Le!==Tt&&(fe=rn[Le])!=null;Le++){if(j&&fe){for(de=0,!ee&&fe.ownerDocument!=v&&(Hn(fe),se=!A);Ae=w[de++];)if(Ae(fe,ee||v,se)){y.call(te,fe);break}Ie&&(F=ai)}M&&((fe=!Ae&&fe)&&ae--,Z&&At.push(fe))}if(ae+=Le,M&&Le!==ae){for(de=0;Ae=P[de++];)Ae(At,lt,ee,se);if(Z){if(ae>0)for(;Le--;)At[Le]||lt[Le]||(lt[Le]=N.call(te));lt=ro(lt)}y.apply(te,lt),Ie&&!Z&&lt.length>0&&ae+P.length>1&&l.uniqueSort(te)}return Ie&&(F=ai,h=Lt),At};return M?Et(H):H}function Aa(w,P){var M,j=[],H=[],Z=he[w+" "];if(!Z){for(P||(P=Ji(w)),M=P.length;M--;)Z=Ia(P[M]),Z[B]?j.push(Z):H.push(Z);Z=he(w,fd(H,j)),Z.selector=w}return Z}function nc(w,P,M,j){var H,Z,ee,se,te,Ie=typeof w=="function"&&w,fe=!j&&Ji(w=Ie.selector||w);if(M=M||[],fe.length===1){if(Z=fe[0]=fe[0].slice(0),Z.length>2&&(ee=Z[0]).type==="ID"&&P.nodeType===9&&A&&u.relative[Z[1].type]){if(P=(u.find.ID(ee.matches[0].replace(Oe,me),P)||[])[0],P)Ie&&(P=P.parentNode);else return M;w=w.slice(Z.shift().value.length)}for(H=T.needsContext.test(w)?0:Z.length;H--&&(ee=Z[H],!u.relative[se=ee.type]);)if((te=u.find[se])&&(j=te(ee.matches[0].replace(Oe,me),De.test(Z[0].type)&&Ea(P.parentNode)||P))){if(Z.splice(H,1),w=j.length&&to(Z),!w)return y.apply(M,j),M;break}}return(Ie||Aa(w,fe))(j,P,!A,M,!P||De.test(w)&&Ea(P.parentNode)||P),M}$.sortStable=B.split("").sort(Be).join("")===B,Hn(),$.sortDetached=oi(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),l.find=Ee,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Ee.compile=Aa,Ee.select=nc,Ee.setDocument=Hn,Ee.tokenize=Ji,Ee.escape=l.escapeSelector,Ee.getText=l.text,Ee.isXML=l.isXMLDoc,Ee.selectors=l.expr,Ee.support=l.support,Ee.uniqueSort=l.uniqueSort})();var Kt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Vi=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},xs=l.expr.match.needsContext,jt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function We(s,u,h){return K(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(We(this,s||[],!1))},not:function(s){return this.pushStack(We(this,s||[],!0))},is:function(s){return!!We(this,typeof s=="string"&&xs.test(s)?l(s):s||[],!1).length}});var Vs,hr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,aa=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||Vs,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=hr.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),jt.test(d[1])&&l.isPlainObject(u))for(d in u)K(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=J.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(K(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};aa.prototype=l.fn,Vs=l(J);var Mr=/^(?:parents|prev(?:Until|All))/,ua={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],v=typeof s!="string"&&l(s);if(!xs.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(v?v.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Os(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Kt(s,"parentNode")},parentsUntil:function(s,u,h){return Kt(s,"parentNode",h)},next:function(s){return Os(s,"nextSibling")},prev:function(s){return Os(s,"previousSibling")},nextAll:function(s){return Kt(s,"nextSibling")},prevAll:function(s){return Kt(s,"previousSibling")},nextUntil:function(s,u,h){return Kt(s,"nextSibling",h)},prevUntil:function(s,u,h){return Kt(s,"previousSibling",h)},siblings:function(s){return Vi((s.parentNode||{}).firstChild,s)},children:function(s){return Vi(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(ua[s]||l.uniqueSort(m),Mr.test(s)&&m.reverse()),this.pushStack(m)}});var yt=/[^\x20\t\r\n\f]+/g;function Fr(s){var u={};return l.each(s.match(yt)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?Fr(s):l.extend({},s);var u,h,d,m,y=[],v=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;v.length;R=-1)for(h=v.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},D={add:function(){return y&&(h&&!u&&(R=y.length-1,v.push(h)),(function q(B){l.each(B,function(F,Q){K(Q)?(!s.unique||!D.has(Q))&&y.push(Q):Q&&Q.length&&xe(Q)!=="string"&&q(Q)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,B){for(var F;(F=l.inArray(B,y,F))>-1;)y.splice(F,1),F<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=v=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],v.push(B),u||A()),this},fire:function(){return D.fireWith(this,arguments),this},fired:function(){return!!d}};return D};function Qt(s){return s}function Mn(s){throw s}function Ur(s,u,h,d){var m;try{s&&K(m=s.promise)?m.call(s).done(u).fail(h):s&&K(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(v){l.each(u,function(R,A){var D=K(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=D&&D.apply(this,arguments);q&&K(q.promise)?q.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[A[0]+"With"](this,D?[q]:arguments)})}),y=null}).promise()},then:function(y,v,R){var A=0;function D(q,B,F,Q){return function(){var ue=this,we=arguments,he=function(){var Be,Ct;if(!(q<A)){if(Be=F.apply(ue,we),Be===B.promise())throw new TypeError("Thenable self-resolution");Ct=Be&&(typeof Be=="object"||typeof Be=="function")&&Be.then,K(Ct)?Q?Ct.call(Be,D(A,B,Qt,Q),D(A,B,Mn,Q)):(A++,Ct.call(Be,D(A,B,Qt,Q),D(A,B,Mn,Q),D(A,B,Qt,B.notifyWith))):(F!==Qt&&(ue=void 0,we=[Be]),(Q||B.resolveWith)(ue,we))}},Ge=Q?he:function(){try{he()}catch(Be){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Be,Ge.error),q+1>=A&&(F!==Mn&&(ue=void 0,we=[Be]),B.rejectWith(ue,we))}};q?Ge():(l.Deferred.getErrorHook?Ge.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Ge.error=l.Deferred.getStackHook()),e.setTimeout(Ge))}}return l.Deferred(function(q){u[0][3].add(D(0,q,K(R)?R:Qt,q.notifyWith)),u[1][3].add(D(0,q,K(y)?y:Qt)),u[2][3].add(D(0,q,K(v)?v:Mn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,v){var R=v[2],A=v[5];d[v[1]]=R.add,A&&R.add(function(){h=A},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),v=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||y.resolveWith(d,m)}};if(u<=1&&(Ur(s,y.done(v(h)).resolve,y.reject,!u),y.state()==="pending"||K(m[h]&&m[h].then)))return y.then();for(;h--;)Ur(m[h],v(h),y.reject);return y.promise()}});var Oi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&Oi.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var jr=l.Deferred();l.fn.ready=function(s){return jr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&jr.resolveWith(J,[l]))}}),l.ready.then=jr.then;function qr(){J.removeEventListener("DOMContentLoaded",qr),e.removeEventListener("load",qr),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",qr),e.addEventListener("load",qr));var qt=function(s,u,h,d,m,y,v){var R=0,A=s.length,D=h==null;if(xe(h)==="object"){m=!0;for(R in h)qt(s,u,R,h[R],!0,y,v)}else if(d!==void 0&&(m=!0,K(d)||(v=!0),D&&(v?(u.call(s,d),u=null):(D=u,u=function(q,B,F){return D.call(l(q),F)})),u))for(;R<A;R++)u(s[R],h,v?d:d.call(s[R],R,u(s[R],h)));return m?s:D?u.call(s):A?u(s[0],h):y},Ls=/^-ms-/,Li=/-([a-z])/g;function Ms(s,u){return u.toUpperCase()}function Pt(s){return s.replace(Ls,"ms-").replace(Li,Ms)}var mn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function yn(){this.expando=l.expando+yn.uid++}yn.uid=1,yn.prototype={cache:function(s){var u=s[this.expando];return u||(u={},mn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Pt(u)]=h;else for(d in u)m[Pt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Pt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Pt):(u=Pt(u),u=u in d?[u]:u.match(yt)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new yn,ke=new yn,it=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Br=/[A-Z]/g;function Fs(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:it.test(s)?JSON.parse(s):s}function Mi(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Br,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=Fs(h)}catch{}ke.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return ke.hasData(s)||ie.hasData(s)},data:function(s,u,h){return ke.access(s,u,h)},removeData:function(s,u){ke.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=ke.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=v.length;h--;)v[h]&&(d=v[h].name,d.indexOf("data-")===0&&(d=Pt(d.slice(5)),Mi(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){ke.set(this,s)}):qt(this,function(R){var A;if(y&&R===void 0)return A=ke.get(y,s),A!==void 0||(A=Mi(y,s),A!==void 0)?A:void 0;this.each(function(){ke.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){ke.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),v=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,v=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";v--;)h=ie.get(y[v],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var Us=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Bt=new RegExp("^(?:([+-])=|)("+Us+")([a-z%]*)$","i"),kt=["Top","Right","Bottom","Left"],Xt=J.documentElement,Yt=function(s){return l.contains(s.ownerDocument,s)},ca={composed:!0};Xt.getRootNode&&(Yt=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ca)===s.ownerDocument});var $r=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Yt(s)&&l.css(s,"display")==="none"};function Hr(s,u,h,d){var m,y,v=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),D=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||D!=="px"&&+A)&&Bt.exec(l.css(s,u));if(q&&q[3]!==D){for(A=A/2,D=D||q[3],q=+A||1;v--;)l.style(s,u,q+D),(1-y)*(1-(y=R()/A||.5))<=0&&(v=0),q=q/y;q=q*2,l.style(s,u,q+D),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=D,d.start=q,d.end=m)),m}var Fi={};function js(s){var u,h=s.ownerDocument,d=s.nodeName,m=Fi[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Fi[d]=m,m)}function Dt(s,u){for(var h,d,m=[],y=0,v=s.length;y<v;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&$r(d)&&(m[y]=js(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return Dt(this,!0)},hide:function(){return Dt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){$r(this)?l(this).show():l(this).hide()})}});var _n=/^(?:checkbox|radio)$/i,zr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Jt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),$.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",$.option=!!u.lastChild})();var _t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};_t.tbody=_t.tfoot=_t.colgroup=_t.caption=_t.thead,_t.th=_t.td,$.option||(_t.optgroup=_t.option=[1,"<select multiple='multiple'>","</select>"]);function Je(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Wr(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var fr=/<|&#?\w+;/;function Ui(s,u,h,d,m){for(var y,v,R,A,D,q,B=u.createDocumentFragment(),F=[],Q=0,ue=s.length;Q<ue;Q++)if(y=s[Q],y||y===0)if(xe(y)==="object")l.merge(F,y.nodeType?[y]:y);else if(!fr.test(y))F.push(u.createTextNode(y));else{for(v=v||B.appendChild(u.createElement("div")),R=(zr.exec(y)||["",""])[1].toLowerCase(),A=_t[R]||_t._default,v.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)v=v.lastChild;l.merge(F,v.childNodes),v=B.firstChild,v.textContent=""}for(B.textContent="",Q=0;y=F[Q++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(D=Yt(y),v=Je(B.appendChild(y),"script"),D&&Wr(v),h)for(q=0;y=v[q++];)Jt.test(y.type||"")&&h.push(y)}return B}var et=/^([^.]*)(?:\.(.+)|)/;function vn(){return!0}function Nt(){return!1}function En(s,u,h,d,m,y){var v,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)En(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=Nt;else if(!m)return s;return y===1&&(v=m,m=function(A){return l().off(A),v.apply(this,arguments)},m.guid=v.guid||(v.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,v,R,A,D,q,B,F,Q,ue,we,he=ie.get(s);if(mn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Xt,m),h.guid||(h.guid=l.guid++),(A=he.events)||(A=he.events=Object.create(null)),(v=he.handle)||(v=he.handle=function(Ge){return typeof l<"u"&&l.event.triggered!==Ge.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(yt)||[""],D=u.length;D--;)R=et.exec(u[D])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),Q&&(B=l.event.special[Q]||{},Q=(m?B.delegateType:B.bindType)||Q,B=l.event.special[Q]||{},q=l.extend({type:Q,origType:we,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:ue.join(".")},y),(F=A[Q])||(F=A[Q]=[],F.delegateCount=0,(!B.setup||B.setup.call(s,d,ue,v)===!1)&&s.addEventListener&&s.addEventListener(Q,v)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?F.splice(F.delegateCount++,0,q):F.push(q),l.event.global[Q]=!0)},remove:function(s,u,h,d,m){var y,v,R,A,D,q,B,F,Q,ue,we,he=ie.hasData(s)&&ie.get(s);if(!(!he||!(A=he.events))){for(u=(u||"").match(yt)||[""],D=u.length;D--;){if(R=et.exec(u[D])||[],Q=we=R[1],ue=(R[2]||"").split(".").sort(),!Q){for(Q in A)l.event.remove(s,Q+u[D],h,d,!0);continue}for(B=l.event.special[Q]||{},Q=(d?B.delegateType:B.bindType)||Q,F=A[Q]||[],R=R[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=F.length;y--;)q=F[y],(m||we===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(F.splice(y,1),q.selector&&F.delegateCount--,B.remove&&B.remove.call(s,q));v&&!F.length&&((!B.teardown||B.teardown.call(s,ue,he.handle)===!1)&&l.removeEvent(s,Q,he.handle),delete A[Q])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,v,R=new Array(arguments.length),A=l.event.fix(s),D=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(v=l.event.handlers.call(this,A,D),u=0;(m=v[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,y,v,R=[],A=u.delegateCount,D=s.target;if(A&&D.nodeType&&!(s.type==="click"&&s.button>=1)){for(;D!==this;D=D.parentNode||this)if(D.nodeType===1&&!(s.type==="click"&&D.disabled===!0)){for(y=[],v={},h=0;h<A;h++)d=u[h],m=d.selector+" ",v[m]===void 0&&(v[m]=d.needsContext?l(m,this).index(D)>-1:l.find(m,this,null,[D]).length),v[m]&&y.push(d);y.length&&R.push({elem:D,handlers:y})}}return D=this,A<u.length&&R.push({elem:D,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:K(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return _n.test(u.type)&&u.click&&S(u,"input")&&Gr(u,"click",!0),!1},trigger:function(s){var u=this||s;return _n.test(u.type)&&u.click&&S(u,"input")&&Gr(u,"click"),!0},_default:function(s){var u=s.target;return _n.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Gr(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,vn);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=vn)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?vn:Nt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Nt,isPropagationStopped:Nt,isImmediatePropagationStopped:Nt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=vn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=vn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=vn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(J.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Gr(this,s,!0),J.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return Gr(this,s),!0},teardown:function(){var d;if(J.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u);y||(J.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(J.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,v=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=v.origType,d=v.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return En(this,s,u,h,d)},one:function(s,u,h,d){return En(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=Nt),this.each(function(){l.event.remove(this,s,h,u)})}});var la=/<script|<style|<link/i,Fn=/checked\s*(?:[^=]|=\s*.checked.)/i,ha=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function qs(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Kr(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Bs(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Qr(s,u){var h,d,m,y,v,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),A=y.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}ke.hasData(s)&&(v=ke.access(s),R=l.extend({},v),ke.set(u,R))}}function Xr(s,u){var h=u.nodeName.toLowerCase();h==="input"&&_n.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function vt(s,u,h,d){u=c(u);var m,y,v,R,A,D,q=0,B=s.length,F=B-1,Q=u[0],ue=K(Q);if(ue||B>1&&typeof Q=="string"&&!$.checkClone&&Fn.test(Q))return s.each(function(we){var he=s.eq(we);ue&&(u[0]=Q.call(this,we,he.html())),vt(he,u,h,d)});if(B&&(m=Ui(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(v=l.map(Je(m,"script"),Kr),R=v.length;q<B;q++)A=m,q!==F&&(A=l.clone(A,!0,!0),R&&l.merge(v,Je(A,"script"))),h.call(s[q],A,q);if(R)for(D=v[v.length-1].ownerDocument,l.map(v,Bs),q=0;q<R;q++)A=v[q],Jt.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(D,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},D):_e(A.textContent.replace(ha,""),A,D))}return s}function ji(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(Je(d)),d.parentNode&&(h&&Yt(d)&&Wr(Je(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,v,R=s.cloneNode(!0),A=Yt(s);if(!$.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(v=Je(R),y=Je(s),d=0,m=y.length;d<m;d++)Xr(y[d],v[d]);if(u)if(h)for(y=y||Je(s),v=v||Je(R),d=0,m=y.length;d<m;d++)Qr(y[d],v[d]);else Qr(s,R);return v=Je(R,"script"),v.length>0&&Wr(v,!A&&Je(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(mn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[ke.expando]&&(h[ke.expando]=void 0)}}}),l.fn.extend({detach:function(s){return ji(this,s,!0)},remove:function(s){return ji(this,s)},text:function(s){return qt(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=qs(this,s);u.appendChild(s)}})},prepend:function(){return vt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=qs(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return vt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(Je(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return qt(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!la.test(u)&&!_t[(zr.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(Je(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return vt(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Je(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),v=y.length-1,R=0;R<=v;R++)d=R===v?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var Yr=new RegExp("^("+Us+")(?!px)[a-z%]+$","i"),dr=/^--/,Un=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},qi=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},$s=new RegExp(kt.join("|"),"i");(function(){function s(){if(D){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",D.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Xt.appendChild(A).appendChild(D);var q=e.getComputedStyle(D);h=q.top!=="1%",R=u(q.marginLeft)===12,D.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,D.style.position="absolute",m=u(D.offsetWidth/3)===12,Xt.removeChild(A),D=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,v,R,A=J.createElement("div"),D=J.createElement("div");D.style&&(D.style.backgroundClip="content-box",D.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle=D.style.backgroundClip==="content-box",l.extend($,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,F,Q;return v==null&&(q=J.createElement("table"),B=J.createElement("tr"),F=J.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",F.style.height="9px",F.style.display="block",Xt.appendChild(q).appendChild(B).appendChild(F),Q=e.getComputedStyle(B),v=parseInt(Q.height,10)+parseInt(Q.borderTopWidth,10)+parseInt(Q.borderBottomWidth,10)===B.offsetHeight,Xt.removeChild(q)),v}}))})();function pr(s,u,h){var d,m,y,v,R=dr.test(u),A=s.style;return h=h||Un(s),h&&(v=h.getPropertyValue(u)||h[u],R&&v&&(v=v.replace(gt,"$1")||void 0),v===""&&!Yt(s)&&(v=l.style(s,u)),!$.pixelBoxStyles()&&Yr.test(v)&&$s.test(u)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=v,v=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),v!==void 0?v+"":v}function gr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Bi=["Webkit","Moz","ms"],Jr=J.createElement("div").style,jn={};function Tn(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Bi.length;h--;)if(s=Bi[h]+u,s in Jr)return s}function mr(s){var u=l.cssProps[s]||jn[s];return u||(s in Jr?s:jn[s]=Tn(s)||s)}var fa=/^(none|table(?!-c[ea]).+)/,Hs={position:"absolute",visibility:"hidden",display:"block"},$i={letterSpacing:"0",fontWeight:"400"};function Hi(s,u,h){var d=Bt.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function yr(s,u,h,d,m,y){var v=u==="width"?1:0,R=0,A=0,D=0;if(h===(d?"border":"content"))return 0;for(;v<4;v+=2)h==="margin"&&(D+=l.css(s,h+kt[v],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+kt[v],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+kt[v]+"Width",!0,m))):(A+=l.css(s,"padding"+kt[v],!0,m),h!=="padding"?A+=l.css(s,"border"+kt[v]+"Width",!0,m):R+=l.css(s,"border"+kt[v]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-A-R-.5))||0),A+D}function Zr(s,u,h){var d=Un(s),m=!$.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",v=y,R=pr(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(Yr.test(R)){if(!h)return R;R="auto"}return(!$.boxSizingReliable()&&y||!$.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",v=A in s,v&&(R=s[A])),R=parseFloat(R)||0,R+yr(s,u,h||(y?"border":"content"),v,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=pr(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,R=Pt(u),A=dr.test(u),D=s.style;if(A||(u=mr(R)),v=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=Bt.exec(h))&&m[1]&&(h=Hr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!$.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(D[u]="inherit"),(!v||!("set"in v)||(h=v.set(s,h,d))!==void 0)&&(A?D.setProperty(u,h):D[u]=h)}else return v&&"get"in v&&(m=v.get(s,!1,d))!==void 0?m:D[u]}},css:function(s,u,h,d){var m,y,v,R=Pt(u),A=dr.test(u);return A||(u=mr(R)),v=l.cssHooks[u]||l.cssHooks[R],v&&"get"in v&&(m=v.get(s,!0,h)),m===void 0&&(m=pr(s,u,d)),m==="normal"&&u in $i&&(m=$i[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return fa.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?qi(h,Hs,function(){return Zr(h,u,m)}):Zr(h,u,m)},set:function(h,d,m){var y,v=Un(h),R=!$.scrollboxSize()&&v.position==="absolute",A=R||m,D=A&&l.css(h,"boxSizing",!1,v)==="border-box",q=m?yr(h,u,m,D,v):0;return D&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(v[u])-yr(h,u,"border",!1,v)-.5)),q&&(y=Bt.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),Hi(h,d,q)}}}),l.cssHooks.marginLeft=gr($.reliableMarginLeft,function(s,u){if(u)return(parseFloat(pr(s,"marginLeft"))||s.getBoundingClientRect().left-qi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+kt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=Hi)}),l.fn.extend({css:function(s,u){return qt(this,function(h,d,m){var y,v,R={},A=0;if(Array.isArray(d)){for(y=Un(h),v=d.length;A<v;A++)R[d[A]]=l.css(h,d[A],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function st(s,u,h,d,m){return new st.prototype.init(s,u,h,d,m)}l.Tween=st,st.prototype={constructor:st,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=st.propHooks[this.prop];return s&&s.get?s.get(this):st.propHooks._default.get(this)},run:function(s){var u,h=st.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[mr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=st.prototype.init,l.fx.step={};var wn,ei,da=/^(?:toggle|show|hide)$/,zs=/queueHooks$/;function ti(){ei&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ti):e.setTimeout(ti,l.fx.interval),l.fx.tick())}function Ws(){return e.setTimeout(function(){wn=void 0}),wn=Date.now()}function xt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=kt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Vt(s,u,h){for(var d,m=(It.tweeners[u]||[]).concat(It.tweeners["*"]),y=0,v=m.length;y<v;y++)if(d=m[y].call(h,u,s))return d}function ni(s,u,h){var d,m,y,v,R,A,D,q,B="width"in u||"height"in u,F=this,Q={},ue=s.style,we=s.nodeType&&$r(s),he=ie.get(s,"fxshow");h.queue||(v=l._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,R=v.empty.fire,v.empty.fire=function(){v.unqueued||R()}),v.unqueued++,F.always(function(){F.always(function(){v.unqueued--,l.queue(s,"fx").length||v.empty.fire()})}));for(d in u)if(m=u[d],da.test(m)){if(delete u[d],y=y||m==="toggle",m===(we?"hide":"show"))if(m==="show"&&he&&he[d]!==void 0)we=!0;else continue;Q[d]=he&&he[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(Q))){B&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],D=he&&he.display,D==null&&(D=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(D?q=D:(Dt([s],!0),D=s.style.display||D,q=l.css(s,"display"),Dt([s]))),(q==="inline"||q==="inline-block"&&D!=null)&&l.css(s,"float")==="none"&&(A||(F.done(function(){ue.display=D}),D==null&&(q=ue.display,D=q==="none"?"":q)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),A=!1;for(d in Q)A||(he?"hidden"in he&&(we=he.hidden):he=ie.access(s,"fxshow",{display:D}),y&&(he.hidden=!we),we&&Dt([s],!0),F.done(function(){we||Dt([s]),ie.remove(s,"fxshow");for(d in Q)l.style(s,d,Q[d])})),A=Vt(we?he[d]:0,d,F),d in he||(he[d]=A.start,we&&(A.end=A.start,A.start=0))}}function ri(s,u){var h,d,m,y,v;for(h in s)if(d=Pt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),v=l.cssHooks[d],v&&"expand"in v){y=v.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function It(s,u,h){var d,m,y=0,v=It.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var B=wn||Ws(),F=Math.max(0,D.startTime+D.duration-B),Q=F/D.duration||0,ue=1-Q,we=0,he=D.tweens.length;we<he;we++)D.tweens[we].run(ue);return R.notifyWith(s,[D,ue,F]),ue<1&&he?F:(he||R.notifyWith(s,[D,1,0]),R.resolveWith(s,[D]),!1)},D=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:wn||Ws(),duration:h.duration,tweens:[],createTween:function(B,F){var Q=l.Tween(s,D.opts,B,F,D.opts.specialEasing[B]||D.opts.easing);return D.tweens.push(Q),Q},stop:function(B){var F=0,Q=B?D.tweens.length:0;if(m)return this;for(m=!0;F<Q;F++)D.tweens[F].run(1);return B?(R.notifyWith(s,[D,1,0]),R.resolveWith(s,[D,B])):R.rejectWith(s,[D,B]),this}}),q=D.props;for(ri(q,D.opts.specialEasing);y<v;y++)if(d=It.prefilters[y].call(D,s,q,D.opts),d)return K(d.stop)&&(l._queueHooks(D.elem,D.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Vt,D),K(D.opts.start)&&D.opts.start.call(s,D),D.progress(D.opts.progress).done(D.opts.done,D.opts.complete).fail(D.opts.fail).always(D.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:D,queue:D.opts.queue})),D}l.Animation=l.extend(It,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return Hr(h.elem,s,Bt.exec(u),h),h}]},tweener:function(s,u){K(s)?(u=s,s=["*"]):s=s.match(yt);for(var h,d=0,m=s.length;d<m;d++)h=s[d],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(u)},prefilters:[ni],prefilter:function(s,u){u?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||K(s)&&s,duration:s,easing:h&&u||u&&!K(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){K(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter($r).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),v=function(){var R=It(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&zs.test(y)&&d(R[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(h),m=!1,v.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,v=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<v;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(xt(u,!0),d,m,y)}}),l.each({slideDown:xt("show"),slideUp:xt("hide"),slideToggle:xt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(wn=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),wn=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){ei||(ei=!0,ti())},l.fx.stop=function(){ei=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",$.checkOn=s.value!=="",$.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",$.radioValue=s.value==="t"})();var Ve,Zt=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return qt(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Ve:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!$.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(yt);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),Ve={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=Zt[u]||l.find.attr;Zt[u]=function(d,m,y){var v,R,A=m.toLowerCase();return y||(R=Zt[A],Zt[A]=v,v=h(d,m,y)!=null?A:null,Zt[A]=R),v}});var _r=/^(?:input|select|textarea|button)$/i,vr=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return qt(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):_r.test(s.nodeName)||vr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),$.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function In(s){var u=s.match(yt)||[];return u.join(" ")}function en(s){return s.getAttribute&&s.getAttribute("class")||""}function zi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(yt)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,v;return K(s)?this.each(function(R){l(this).addClass(s.call(this,R,en(this)))}):(u=zi(s),u.length?this.each(function(){if(d=en(this),h=this.nodeType===1&&" "+In(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");v=In(h),d!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var u,h,d,m,y,v;return K(s)?this.each(function(R){l(this).removeClass(s.call(this,R,en(this)))}):arguments.length?(u=zi(s),u.length?this.each(function(){if(d=en(this),h=this.nodeType===1&&" "+In(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");v=In(h),d!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,v=typeof s,R=v==="string"||Array.isArray(s);return K(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,en(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=zi(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||v==="boolean")&&(d=en(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+In(en(h))+" ").indexOf(u)>-1)return!0;return!1}});var pa=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=K(s),this.each(function(y){var v;this.nodeType===1&&(d?v=s.call(this,y,l(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=l.map(v,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,v,"value")===void 0)&&(this.value=v))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(pa,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??In(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,v=s.type==="select-one",R=v?null:[],A=v?y+1:m.length;for(y<0?d=A:d=v?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),v)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),v=m.length;v--;)d=m[v],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},$.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Er=e.location,Gs={guid:Date.now()},An=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var $t=/^(?:focusinfocus|focusoutblur)$/,Wi=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,v,R,A,D,q,B,F=[h||J],Q=k.call(s,"type")?s.type:s,ue=k.call(s,"namespace")?s.namespace.split("."):[];if(y=B=v=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!$t.test(Q+l.event.triggered)&&(Q.indexOf(".")>-1&&(ue=Q.split("."),Q=ue.shift(),ue.sort()),A=Q.indexOf(":")<0&&"on"+Q,s=s[l.expando]?s:new l.Event(Q,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[Q]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||Q,$t.test(R+Q)||(y=y.parentNode);y;y=y.parentNode)F.push(y),v=y;v===(h.ownerDocument||J)&&F.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=F[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||Q,D=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),D&&D.apply(y,u),D=A&&y[A],D&&D.apply&&mn(y)&&(s.result=D.apply(y,u),s.result===!1&&s.preventDefault());return s.type=Q,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(F.pop(),u)===!1)&&mn(h)&&A&&K(h[Q])&&!Y(h)&&(v=h[A],v&&(h[A]=null),l.event.triggered=Q,s.isPropagationStopped()&&B.addEventListener(Q,Wi),h[Q](),s.isPropagationStopped()&&B.removeEventListener(Q,Wi),l.event.triggered=void 0,v&&(h[A]=v)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Ks=/\[\]$/,Gi=/\r?\n/g,qn=/^(?:submit|button|image|reset|file)$/i,ga=/^(?:input|select|textarea|keygen)/i;function Ki(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,v){h||Ks.test(s)?d(s,v):Ki(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,h,d)});else if(!h&&xe(u)==="object")for(m in u)Ki(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,v){var R=K(v)?v():v;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Ki(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&ga.test(this.nodeName)&&!qn.test(s)&&(this.checked||!_n.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(Gi,`\r
`)}}):{name:u.name,value:h.replace(Gi,`\r
`)}}).get()}});var ma=/%20/g,tn=/#.*$/,ya=/([?&])_=[^&]*/,_a=/^(.*?):[ \t]*([^\r\n]*)$/mg,ii=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,si=/^(?:GET|HEAD)$/,Qs=/^\/\//,Bn={},bn={},Qi="*/".concat("*"),Tr=J.createElement("a");Tr.href=Er.href;function Fe(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(yt)||[];if(K(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Xs(s,u,h,d){var m={},y=s===bn;function v(R){var A;return m[R]=!0,l.each(s[R]||[],function(D,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),v(B),!1;if(y)return!(A=B)}),A}return v(u.dataTypes[0])||!m["*"]&&v("*")}function Xi(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function Ys(s,u,h){for(var d,m,y,v,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==A[0]&&A.unshift(y),h[y]}function Js(s,u,h,d){var m,y,v,R,A,D={},q=s.dataTypes.slice();if(q[1])for(v in s.converters)D[v.toLowerCase()]=s.converters[v];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(v=D[A+" "+y]||D["* "+y],!v){for(m in D)if(R=m.split(" "),R[1]===y&&(v=D[A+" "+R[0]]||D["* "+R[0]],v)){v===!0?v=D[m]:D[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(v!==!0)if(v&&s.throws)u=v(u);else try{u=v(u)}catch(B){return{state:"parsererror",error:v?B:"No conversion from "+A+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Er.href,type:"GET",isLocal:ii.test(Er.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Xi(Xi(s,l.ajaxSettings),u):Xi(l.ajaxSettings,s)},ajaxPrefilter:Fe(Bn),ajaxTransport:Fe(bn),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,v,R,A,D,q,B,F=l.ajaxSetup({},u),Q=F.context||F,ue=F.context&&(Q.nodeType||Q.jquery)?l(Q):l.event,we=l.Deferred(),he=l.Callbacks("once memory"),Ge=F.statusCode||{},Be={},Ct={},Rt="canceled",ve={readyState:0,getResponseHeader:function(be){var Ue;if(A){if(!y)for(y={};Ue=_a.exec(m);)y[Ue[1].toLowerCase()+" "]=(y[Ue[1].toLowerCase()+" "]||[]).concat(Ue[2]);Ue=y[be.toLowerCase()+" "]}return Ue==null?null:Ue.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(be,Ue){return A==null&&(be=Ct[be.toLowerCase()]=Ct[be.toLowerCase()]||be,Be[be]=Ue),this},overrideMimeType:function(be){return A==null&&(F.mimeType=be),this},statusCode:function(be){var Ue;if(be)if(A)ve.always(be[ve.status]);else for(Ue in be)Ge[Ue]=[Ge[Ue],be[Ue]];return this},abort:function(be){var Ue=be||Rt;return h&&h.abort(Ue),$e(0,Ue),this}};if(we.promise(ve),F.url=((s||F.url||Er.href)+"").replace(Qs,Er.protocol+"//"),F.type=u.method||u.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(yt)||[""],F.crossDomain==null){R=J.createElement("a");try{R.href=F.url,R.href=R.href,F.crossDomain=Tr.protocol+"//"+Tr.host!=R.protocol+"//"+R.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=l.param(F.data,F.traditional)),Xs(Bn,F,u,ve),A)return ve;D=l.event&&F.global,D&&l.active++===0&&l.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!si.test(F.type),d=F.url.replace(tn,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(ma,"+")):(B=F.url.slice(d.length),F.data&&(F.processData||typeof F.data=="string")&&(d+=(An.test(d)?"&":"?")+F.data,delete F.data),F.cache===!1&&(d=d.replace(ya,"$1"),B=(An.test(d)?"&":"?")+"_="+Gs.guid+++B),F.url=d+B),F.ifModified&&(l.lastModified[d]&&ve.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&ve.setRequestHeader("If-None-Match",l.etag[d])),(F.data&&F.hasContent&&F.contentType!==!1||u.contentType)&&ve.setRequestHeader("Content-Type",F.contentType),ve.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+Qi+"; q=0.01":""):F.accepts["*"]);for(q in F.headers)ve.setRequestHeader(q,F.headers[q]);if(F.beforeSend&&(F.beforeSend.call(Q,ve,F)===!1||A))return ve.abort();if(Rt="abort",he.add(F.complete),ve.done(F.success),ve.fail(F.error),h=Xs(bn,F,u,ve),!h)$e(-1,"No Transport");else{if(ve.readyState=1,D&&ue.trigger("ajaxSend",[ve,F]),A)return ve;F.async&&F.timeout>0&&(v=e.setTimeout(function(){ve.abort("timeout")},F.timeout));try{A=!1,h.send(Be,$e)}catch(be){if(A)throw be;$e(-1,be)}}function $e(be,Ue,Ot,o){var f,g,T,O,U,X=Ue;A||(A=!0,v&&e.clearTimeout(v),h=void 0,m=o||"",ve.readyState=be>0?4:0,f=be>=200&&be<300||be===304,Ot&&(O=Ys(F,ve,Ot)),!f&&l.inArray("script",F.dataTypes)>-1&&l.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),O=Js(F,O,ve,f),f?(F.ifModified&&(U=ve.getResponseHeader("Last-Modified"),U&&(l.lastModified[d]=U),U=ve.getResponseHeader("etag"),U&&(l.etag[d]=U)),be===204||F.type==="HEAD"?X="nocontent":be===304?X="notmodified":(X=O.state,g=O.data,T=O.error,f=!T)):(T=X,(be||!X)&&(X="error",be<0&&(be=0))),ve.status=be,ve.statusText=(Ue||X)+"",f?we.resolveWith(Q,[g,X,ve]):we.rejectWith(Q,[ve,X,T]),ve.statusCode(Ge),Ge=void 0,D&&ue.trigger(f?"ajaxSuccess":"ajaxError",[ve,F,f?g:T]),he.fireWith(Q,[ve,X]),D&&(ue.trigger("ajaxComplete",[ve,F]),--l.active||l.event.trigger("ajaxStop")))}return ve},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return K(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(K(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return K(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=K(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Zs={0:200,1223:204},nn=l.ajaxSettings.xhr();$.cors=!!nn&&"withCredentials"in nn,$.ajax=nn=!!nn,l.ajaxTransport(function(s){var u,h;if($.cors||nn&&!s.crossDomain)return{send:function(d,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)v.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,R==="abort"?v.abort():R==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(Zs[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=u(),h=v.onerror=v.ontimeout=u("error"),v.onabort!==void 0?v.onabort=h:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{v.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var Yi=[],St=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Yi.pop()||l.expando+"_"+Gs.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,v=s.jsonp!==!1&&(St.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&St.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=K(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(St,"$1"+d):s.jsonp!==!1&&(s.url+=(An.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Yi.push(d)),y&&K(m)&&m(y[0]),y=m=void 0}),"script"}),$.createHTMLDocument=(function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||($.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=J.location.href,u.head.appendChild(d)):u=J),m=jt.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=Ui([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,v=this,R=s.indexOf(" ");return R>-1&&(d=In(s.slice(R)),s=s.slice(0,R)),K(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),v.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){y=arguments,v.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,D){v.each(function(){h.apply(this,y||[A.responseText,D,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,v,R,A,D,q=l.css(s,"position"),B=l(s),F={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),A=l.css(s,"left"),D=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,D?(d=B.position(),v=d.top,m=d.left):(v=parseFloat(y)||0,m=parseFloat(A)||0),K(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(F.top=u.top-R.top+v),u.left!=null&&(F.left=u.left-R.left+m),"using"in u?u.using.call(s,F):B.css(F)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Xt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return qt(this,function(m,y,v){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),v===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:v,h?v:R.pageYOffset):m[y]=v},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=gr($.pixelPosition,function(h,d){if(d)return d=pr(h,u),Yr.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var v=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return qt(this,function(A,D,q){var B;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(B=A.documentElement,Math.max(A.body["scroll"+s],B["scroll"+s],A.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(A,D,R):l.style(A,D,q,R)},u,v?m:void 0,v)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var eo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!K(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=K,l.isWindow=Y,l.camelCase=Pt,l.type=xe,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(eo,"$1")};var va=e.jQuery,wr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=wr),s&&e.jQuery===l&&(e.jQuery=va),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(lo)),lo.exports}var md=gd();const Te=dd(md),yd=()=>{};var ic={};/**
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
 */const xl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_d=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,E=_?n[i+2]:0,I=a>>2,k=(a&3)<<4|p>>4;let V=(p&15)<<2|E>>6,G=E&63;_||(G=64,c||(V=64)),r.push(t[I],t[k],t[V],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const E=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||E==null||k==null)throw new vd;const V=a<<2|p>>4;if(r.push(V),E!==64){const G=p<<4&240|E>>2;if(r.push(G),k!==64){const $=E<<6&192|k;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(n){const e=xl(n);return Vl.encodeByteArray(e,!0)},wo=function(n){return Ed(n).replace(/\./g,"")},Ol=function(n){try{return Vl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wd=()=>Td().__FIREBASE_DEFAULTS__,Id=()=>{if(typeof process>"u"||typeof ic>"u")return;const n=ic.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ol(n[1]);return e&&JSON.parse(e)},Bo=()=>{try{return yd()||wd()||Id()||Ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ll=n=>Bo()?.emulatorHosts?.[n],bd=n=>{const e=Ll(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ml=()=>Bo()?.config,Fl=n=>Bo()?.[`_${n}`];/**
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
 */class Sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Si(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ul(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Cd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wo(JSON.stringify(t)),wo(JSON.stringify(c)),""].join(".")}const ss={};function Rd(){const n={prod:[],emulator:[]};for(const e of Object.keys(ss))ss[e]?n.emulator.push(e):n.prod.push(e);return n}function Pd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sc=!1;function jl(n,e){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||ss[n]===e||ss[n]||sc)return;ss[n]=e;function t(V){return`__firebase__banner__${V}`}const r="__firebase__banner",a=Rd().prod.length>0;function c(){const V=document.getElementById(r);V&&V.remove()}function p(V){V.style.display="flex",V.style.background="#7faaf0",V.style.position="fixed",V.style.bottom="5px",V.style.left="5px",V.style.padding=".5em",V.style.borderRadius="5px",V.style.alignItems="center"}function _(V,G){V.setAttribute("width","24"),V.setAttribute("id",G),V.setAttribute("height","24"),V.setAttribute("viewBox","0 0 24 24"),V.setAttribute("fill","none"),V.style.marginLeft="-6px"}function E(){const V=document.createElement("span");return V.style.cursor="pointer",V.style.marginLeft="16px",V.style.fontSize="24px",V.innerHTML=" &times;",V.onclick=()=>{sc=!0,c()},V}function I(V,G){V.setAttribute("id",G),V.innerText="Learn more",V.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",V.setAttribute("target","__blank"),V.style.paddingLeft="5px",V.style.textDecoration="underline"}function k(){const V=Pd(r),G=t("text"),$=document.getElementById(G)||document.createElement("span"),K=t("learnmore"),Y=document.getElementById(K)||document.createElement("a"),J=t("preprendIcon"),ye=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(V.created){const _e=V.element;p(_e),I(Y,K);const xe=E();_(ye,J),_e.append(ye,$,Y,xe),document.body.appendChild(_e)}a?($.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ye.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Dd(){const n=Bo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Od(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ld(){return!Dd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function Fd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Ud="FirebaseError";class On extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ud,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?jd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new On(i,p,r)}}function jd(n,e){return n.replace(qd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qd=/\{\$([^}]+)}/g;function Bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(oc(a)&&oc(c)){if(!Cr(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function oc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ts(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function es(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $d(n,e){const t=new Hd(n,e);return t.subscribe.bind(t)}class Hd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ba(){}/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class Rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class Wd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(n){return n===Ar?void 0:n}function Kd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const Xd={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},Yd=Se.INFO,Jd={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Zd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Jd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Yd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const ep=(n,e)=>e.some(t=>n instanceof t);let ac,uc;function tp(){return ac||(ac=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function np(){return uc||(uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,Ma=new WeakMap,Bl=new WeakMap,Sa=new WeakMap,cu=new WeakMap;function rp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Yn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ql.set(t,n)}).catch(()=>{}),cu.set(e,n),e}function ip(n){if(Ma.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ma.set(n,e)}let Fa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ma.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sp(n){Fa=n(Fa)}function op(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ca(this),e,...t);return Bl.set(r,e.sort?e.sort():[e]),Yn(r)}:np().includes(n)?function(...e){return n.apply(Ca(this),e),Yn(ql.get(this))}:function(...e){return Yn(n.apply(Ca(this),e))}}function ap(n){return typeof n=="function"?op(n):(n instanceof IDBTransaction&&ip(n),ep(n,tp())?new Proxy(n,Fa):n)}function Yn(n){if(n instanceof IDBRequest)return rp(n);if(Sa.has(n))return Sa.get(n);const e=ap(n);return e!==n&&(Sa.set(n,e),cu.set(e,n)),e}const Ca=n=>cu.get(n);function up(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Yn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Yn(c.result),_.oldVersion,_.newVersion,Yn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const cp=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],Ra=new Map;function cc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cp.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let E=_.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[t](...p),i&&_.done]))[0]};return Ra.set(e,a),a}sp(n=>({...n,get:(e,t,r)=>cc(e,t)||n.get(e,t,r),has:(e,t)=>!!cc(e,t)||n.has(e,t)}));/**
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
 */class hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fp(n){return n.getComponent()?.type==="VERSION"}const Ua="@firebase/app",lc="0.14.2";/**
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
 */const Dn=new uu("@firebase/app"),dp="@firebase/app-compat",pp="@firebase/analytics-compat",gp="@firebase/analytics",mp="@firebase/app-check-compat",yp="@firebase/app-check",_p="@firebase/auth",vp="@firebase/auth-compat",Ep="@firebase/database",Tp="@firebase/data-connect",wp="@firebase/database-compat",Ip="@firebase/functions",Ap="@firebase/functions-compat",bp="@firebase/installations",Sp="@firebase/installations-compat",Cp="@firebase/messaging",Rp="@firebase/messaging-compat",Pp="@firebase/performance",kp="@firebase/performance-compat",Dp="@firebase/remote-config",Np="@firebase/remote-config-compat",xp="@firebase/storage",Vp="@firebase/storage-compat",Op="@firebase/firestore",Lp="@firebase/ai",Mp="@firebase/firestore-compat",Fp="firebase",Up="12.2.0";/**
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
 */const ja="[DEFAULT]",jp={[Ua]:"fire-core",[dp]:"fire-core-compat",[gp]:"fire-analytics",[pp]:"fire-analytics-compat",[yp]:"fire-app-check",[mp]:"fire-app-check-compat",[_p]:"fire-auth",[vp]:"fire-auth-compat",[Ep]:"fire-rtdb",[Tp]:"fire-data-connect",[wp]:"fire-rtdb-compat",[Ip]:"fire-fn",[Ap]:"fire-fn-compat",[bp]:"fire-iid",[Sp]:"fire-iid-compat",[Cp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Pp]:"fire-perf",[kp]:"fire-perf-compat",[Dp]:"fire-rc",[Np]:"fire-rc-compat",[xp]:"fire-gcs",[Vp]:"fire-gcs-compat",[Op]:"fire-fst",[Mp]:"fire-fst-compat",[Lp]:"fire-vertex","fire-js":"fire-js",[Fp]:"fire-js-all"};/**
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
 */const Io=new Map,qp=new Map,qa=new Map;function hc(n,e){try{n.container.addComponent(e)}catch(t){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _i(n){const e=n.name;if(qa.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,n);for(const t of Io.values())hc(t,n);for(const t of qp.values())hc(t,n);return!0}function lu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Mt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Es("app","Firebase",Bp);/**
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
 */class $p{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=Up;function $l(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ja,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(t||(t=Ml()),!t)throw Jn.create("no-options");const a=Io.get(i);if(a){if(Cr(t,a.options)&&Cr(r,a.config))return a;throw Jn.create("duplicate-app",{appName:i})}const c=new Qd(i);for(const _ of qa.values())c.addComponent(_);const p=new $p(t,r,c);return Io.set(i,p),p}function Hl(n=ja){const e=Io.get(n);if(!e&&n===ja&&Ml())return $l();if(!e)throw Jn.create("no-app",{appName:n});return e}function Zn(n,e,t){let r=jp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(c.join(" "));return}_i(new Rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Hp="firebase-heartbeat-database",zp=1,hs="firebase-heartbeat-store";let Pa=null;function zl(){return Pa||(Pa=up(Hp,zp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Jn.create("idb-open",{originalErrorMessage:n.message})})),Pa}async function Wp(n){try{const t=(await zl()).transaction(hs),r=await t.objectStore(hs).get(Wl(n));return await t.done,r}catch(e){if(e instanceof On)Dn.warn(e.message);else{const t=Jn.create("idb-get",{originalErrorMessage:e?.message});Dn.warn(t.message)}}}async function fc(n,e){try{const r=(await zl()).transaction(hs,"readwrite");await r.objectStore(hs).put(e,Wl(n)),await r.done}catch(t){if(t instanceof On)Dn.warn(t.message);else{const r=Jn.create("idb-set",{originalErrorMessage:t?.message});Dn.warn(r.message)}}}function Wl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gp=1024,Kp=30;class Qp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Kp){const i=Jp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dc(),{heartbeatsToSend:t,unsentEntries:r}=Xp(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Dn.warn(e),""}}}function dc(){return new Date().toISOString().substring(0,10)}function Xp(n,e=Gp){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),pc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),pc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?Fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pc(n){return wo(JSON.stringify({version:2,heartbeats:n})).length}function Jp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zp(n){_i(new Rr("platform-logger",e=>new hp(e),"PRIVATE")),_i(new Rr("heartbeat",e=>new Qp(e),"PRIVATE")),Zn(Ua,lc,n),Zn(Ua,lc,"esm2020"),Zn("fire-js","")}Zp("");var eg="firebase",tg="12.2.1";/**
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
 */Zn(eg,tg,"app");function Gl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ng=Gl,Kl=new Es("auth","Firebase",Gl());/**
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
 */const Ao=new uu("@firebase/auth");function rg(n,...e){Ao.logLevel<=Se.WARN&&Ao.warn(`Auth (${Ci}): ${n}`,...e)}function ho(n,...e){Ao.logLevel<=Se.ERROR&&Ao.error(`Auth (${Ci}): ${n}`,...e)}/**
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
 */function Wt(n,...e){throw hu(n,...e)}function on(n,...e){return hu(n,...e)}function Ql(n,e,t){const r={...ng(),[e]:t};return new Es("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return Ql(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kl.create(n,...e)}function ce(n,e,...t){if(!n)throw hu(e,...t)}function Cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ho(e),new Error(e)}function Nn(n,e){n||Cn(e)}/**
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
 */function Ba(){return typeof self<"u"&&self.location?.href||""}function ig(){return gc()==="http:"||gc()==="https:"}function gc(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function sg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ig()||xd()||"connection"in navigator)?navigator.onLine:!0}function og(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nn(t>e,"Short delay should be less than long delay!"),this.isMobile=kd()||Vd()}get(){return sg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fu(n,e){Nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ug=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cg=new ws(3e4,6e4);function Ln(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pn(n,e,t,r,i={}){return Yl(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=Ts({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:_,...a};return Nd()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&Si(n.emulatorConfig.host)&&(E.credentials="include"),Xl.fetch()(await Jl(n,n.config.apiHost,t,p),E)})}async function Yl(n,e,t){n._canInitEmulator=!1;const r={...ag,...e};try{const i=new hg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw io(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,E]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw io(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw io(n,"user-disabled",c);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Ql(n,I,E);Wt(n,I)}}catch(i){if(i instanceof On)throw i;Wt(n,"network-request-failed",{message:String(i)})}}async function Is(n,e,t,r,i={}){const a=await pn(n,e,t,r,i);return"mfaPendingCredential"in a&&Wt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Jl(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?fu(n.config,i):`${n.config.apiScheme}://${i}`;return ug.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function lg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),cg.get())})}}function io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=on(n,e,r);return i.customData._tokenResponse=t,i}function mc(n){return n!==void 0&&n.enterprise!==void 0}class fg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return lg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dg(n,e){return pn(n,"GET","/v2/recaptchaConfig",Ln(n,e))}/**
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
 */async function pg(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function bo(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gg(n,e=!1){const t=ut(n),r=await t.getIdToken(e),i=du(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:os(ka(i.auth_time)),issuedAtTime:os(ka(i.iat)),expirationTime:os(ka(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function ka(n){return Number(n)*1e3}function du(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ol(t);return i?JSON.parse(i):(ho("Failed to decode base64 JWT payload"),null)}catch(i){return ho("Caught error parsing JWT payload as JSON",i?.toString()),null}}function yc(n){const e=du(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof On&&mg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(n){const e=n.auth,t=await n.getIdToken(),r=await vi(n,bo(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?Zl(i.providerUserInfo):[],c=vg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,E=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new $a(i.createdAt,i.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function _g(n){const e=ut(n);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Eg(n,e){const t=await Yl(n,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await Jl(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&Si(n.emulatorConfig.host)&&(_.credentials="include"),Xl.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tg(n,e){return pn(n,"POST","/v2/accounts:revokeToken",Ln(n,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=yc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Eg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new di;return r&&(ce(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(ce(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function zn(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $a(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await vi(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gg(this,e)}reload(){return _g(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await vi(this,pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,E=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:k,emailVerified:V,isAnonymous:G,providerData:$,stsTokenManager:K}=t;ce(k&&K,e,"internal-error");const Y=di.fromJSON(this.name,K);ce(typeof k=="string",e,"internal-error"),zn(r,e.name),zn(i,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof G=="boolean",e,"internal-error"),zn(a,e.name),zn(c,e.name),zn(p,e.name),zn(_,e.name),zn(E,e.name),zn(I,e.name);const J=new Ht({uid:k,auth:e,email:i,emailVerified:V,displayName:r,isAnonymous:G,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:E,lastLoginAt:I});return $&&Array.isArray($)&&(J.providerData=$.map(ye=>({...ye}))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new di;i.updateFromServerResponse(t);const a=new Ht({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await So(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Zl(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new di;p.updateFromIdToken(r);const _=new Ht({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),E={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,E),_}}/**
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
 */const _c=new Map;function Rn(n){Nn(n instanceof Function,"Expected a class definition");let e=_c.get(n);return e?(Nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_c.set(n,e),e)}/**
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
 */class eh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eh.type="NONE";const vc=eh;/**
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
 */function fo(n,e,t){return`firebase:${n}:${e}:${t}`}class pi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,a),this.fullPersistenceKey=fo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bo(this.auth,{idToken:e}).catch(()=>{});return t?Ht._fromGetAccountInfoResponse(this.auth,t,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pi(Rn(vc),e,r);const i=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let a=i[0]||Rn(vc);const c=fo(r,e.config.apiKey,e.name);let p=null;for(const E of t)try{const I=await E._get(c);if(I){let k;if(typeof I=="string"){const V=await bo(e,{idToken:I}).catch(()=>{});if(!V)break;k=await Ht._fromGetAccountInfoResponse(e,V,I)}else k=Ht._fromJSON(e,I);E!==a&&(p=k),a=E;break}}catch{}const _=i.filter(E=>E._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new pi(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async E=>{if(E!==a)try{await E._remove(c)}catch{}})),new pi(a,e,r))}}/**
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
 */function Ec(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ih(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(th(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oh(e))return"Blackberry";if(ah(e))return"Webos";if(nh(e))return"Safari";if((e.includes("chrome/")||rh(e))&&!e.includes("edge/"))return"Chrome";if(sh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function th(n=pt()){return/firefox\//i.test(n)}function nh(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rh(n=pt()){return/crios\//i.test(n)}function ih(n=pt()){return/iemobile/i.test(n)}function sh(n=pt()){return/android/i.test(n)}function oh(n=pt()){return/blackberry/i.test(n)}function ah(n=pt()){return/webos/i.test(n)}function pu(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wg(n=pt()){return pu(n)&&!!window.navigator?.standalone}function Ig(){return Od()&&document.documentMode===10}function uh(n=pt()){return pu(n)||sh(n)||ah(n)||oh(n)||/windows phone/i.test(n)||ih(n)}/**
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
 */function ch(n,e=[]){let t;switch(n){case"Browser":t=Ec(pt());break;case"Worker":t=`${Ec(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ci}/${r}`}/**
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
 */class Ag{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function bg(n,e={}){return pn(n,"GET","/v2/passwordPolicy",Ln(n,e))}/**
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
 */const Sg=6;class Cg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Sg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Rg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tc(this),this.idTokenSubscription=new Tc(this),this.beforeStateQueue=new Ag(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bo(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=og()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Pn(this));const t=e?ut(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bg(this),t=new Cg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ch(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&rg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function cr(n){return ut(n)}class Tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=$d(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pg(n){$o=n}function lh(n){return $o.loadJS(n)}function kg(){return $o.recaptchaEnterpriseScript}function Dg(){return $o.gapiScript}function Ng(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class xg{constructor(){this.enterprise=new Vg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Vg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Og="recaptcha-enterprise",hh="NO_RECAPTCHA";class Lg{constructor(e){this.type=Og,this.auth=cr(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,p)=>{dg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const E=new fg(_);return a.tenantId==null?a._agentRecaptchaConfig=E:a._tenantRecaptchaConfigs[a.tenantId]=E,c(E.siteKey)}}).catch(_=>{p(_)})})}function i(a,c,p){const _=window.grecaptcha;mc(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(E=>{c(E)}).catch(()=>{c(hh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xg().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(p=>{if(!t&&mc(window.grecaptcha))i(p,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=kg();_.length!==0&&(_+=p),lh(_).then(()=>{i(p,a,c)}).catch(E=>{c(E)})}}).catch(p=>{c(p)})})}}async function wc(n,e,t,r=!1,i=!1){const a=new Lg(n);let c;if(i)c=hh;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,E=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:E,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Co(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await wc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await wc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Mg(n,e){const t=lu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Cr(a,e??{}))return i;Wt(i,"already-initialized")}return t.initialize({options:e})}function Fg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Rn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Ug(n,e,t){const r=cr(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=fh(e),{host:c,port:p}=jg(e),_=p===null?"":`:${p}`,E={url:`${a}//${c}${_}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Cr(E,r.config.emulator)&&Cr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,Si(c)?(Ul(`${a}//${c}${_}`),jl("Auth",!0)):qg()}function fh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jg(n){const e=fh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Ic(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Ic(c)}}}function Ic(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,t){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function Bg(n,e){return pn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $g(n,e){return Is(n,"POST","/v1/accounts:signInWithPassword",Ln(n,e))}async function dh(n,e){return pn(n,"POST","/v1/accounts:sendOobCode",Ln(n,e))}async function Hg(n,e){return dh(n,e)}async function zg(n,e){return dh(n,e)}/**
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
 */async function Wg(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",Ln(n,e))}async function Gg(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",Ln(n,e))}/**
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
 */class fs extends gu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,t,"signInWithPassword",$g);case"emailLink":return Wg(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,r,"signUpPassword",Bg);case"emailLink":return Gg(e,{idToken:t,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gi(n,e){return Is(n,"POST","/v1/accounts:signInWithIdp",Ln(n,e))}/**
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
 */const Kg="http://localhost";class Pr extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Pr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return gi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gi(e,t)}buildRequest(){const e={requestUri:Kg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ts(t)}return e}}/**
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
 */function Qg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xg(n){const e=Zi(es(n)).link,t=e?Zi(es(e)).deep_link_id:null,r=Zi(es(n)).deep_link_id;return(r?Zi(es(r)).link:null)||r||t||e||n}class mu{constructor(e){const t=Zi(es(e)),r=t.apiKey??null,i=t.oobCode??null,a=Qg(t.mode??null);ce(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Xg(e);try{return new mu(t)}catch{return null}}}/**
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
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,t){return fs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mu.parseLink(t);return ce(r,"argument-error"),fs._fromEmailAndCode(e,r.code,r.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class As extends ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends As{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gn.credential(t,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Kn extends As{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends As{constructor(){super("twitter.com")}static credential(e,t){return Pr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qn.credential(t,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function Yg(n,e){return Is(n,"POST","/v1/accounts:signUp",Ln(n,e))}/**
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
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Ht._fromIdTokenResponse(e,r,i),c=Ac(r);return new kr({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ac(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ac(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ro extends On{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ro(e,t,r,i)}}function gh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(n,a,e,r):a})}async function Jg(n,e,t=!1){const r=await vi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kr._forOperation(n,"link",r)}/**
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
 */async function Zg(n,e,t=!1){const{auth:r}=n;if(Mt(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const a=await vi(n,gh(r,i,e,n),t);ce(a.idToken,r,"internal-error");const c=du(a.idToken);ce(c,r,"internal-error");const{sub:p}=c;return ce(n.uid===p,r,"user-mismatch"),kr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Wt(r,"user-mismatch"),a}}/**
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
 */async function mh(n,e,t=!1){if(Mt(n.app))return Promise.reject(Pn(n));const r="signIn",i=await gh(n,r,e),a=await kr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function em(n,e){return mh(cr(n),e)}/**
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
 */async function yh(n){const e=cr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OE(n,e,t){const r=cr(n);await Co(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",zg)}async function LE(n,e,t){if(Mt(n.app))return Promise.reject(Pn(n));const r=cr(n),c=await Co(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yg).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&yh(n),_}),p=await kr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(p.user),p}function ME(n,e,t){return Mt(n.app)?Promise.reject(Pn(n)):em(ut(n),Ri.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yh(n),r})}async function FE(n,e){const t=ut(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await Hg(t.auth,i);a!==n.email&&await n.reload()}/**
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
 */async function tm(n,e){return pn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function UE(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ut(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await vi(r,tm(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function nm(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function rm(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function jE(n,e,t,r){return ut(n).onAuthStateChanged(e,t,r)}function qE(n){return ut(n).signOut()}const Po="__sak";/**
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
 */class _h{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const im=1e3,sm=10;class vh extends _h{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Ig()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vh.type="LOCAL";const om=vh;/**
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
 */class Eh extends _h{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Eh.type="SESSION";const Th=Eh;/**
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
 */function am(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async E=>E(t.origin,a)),_=await am(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
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
 */function yu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class um{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const E=yu("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(k){const V=k;if(V.data.eventId===E)switch(V.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(V.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function an(){return window}function cm(n){an().location.href=n}/**
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
 */function wh(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function lm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hm(){return navigator?.serviceWorker?.controller||null}function fm(){return wh()?self:null}/**
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
 */const Ih="firebaseLocalStorageDb",dm=1,ko="firebaseLocalStorage",Ah="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zo(n,e){return n.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function pm(){const n=indexedDB.deleteDatabase(Ih);return new bs(n).toPromise()}function Ha(){const n=indexedDB.open(Ih,dm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ko,{keyPath:Ah})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await pm(),e(await Ha()))})})}async function bc(n,e,t){const r=zo(n,!0).put({[Ah]:e,value:t});return new bs(r).toPromise()}async function gm(n,e){const t=zo(n,!1).get(e),r=await new bs(t).toPromise();return r===void 0?null:r.value}function Sc(n,e){const t=zo(n,!0).delete(e);return new bs(t).toPromise()}const mm=800,ym=3;class bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ym)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(fm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await lm(),!this.activeServiceWorker)return;this.sender=new um(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await bc(e,Po,"1"),await Sc(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>gm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=zo(i,!1).getAll();return new bs(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bh.type="LOCAL";const _m=bh;new ws(3e4,6e4);/**
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
 */function vm(n,e){return e?Rn(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _u extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Em(n){return mh(n.auth,new _u(n),n.bypassAuthState)}function Tm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),Zg(t,new _u(n),n.bypassAuthState)}async function wm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),Jg(t,new _u(n),n.bypassAuthState)}/**
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
 */class Sh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Em;case"linkViaPopup":case"linkViaRedirect":return wm;case"reauthViaPopup":case"reauthViaRedirect":return Tm;default:Wt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Im=new ws(2e3,1e4);class fi extends Sh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Im.get())};e()}}fi.currentPopupAction=null;/**
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
 */const Am="pendingRedirect",po=new Map;class bm extends Sh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await Sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sm(n,e){const t=Pm(e),r=Rm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Cm(n,e){po.set(n._key(),e)}function Rm(n){return Rn(n._redirectPersistence)}function Pm(n){return fo(Am,n.config.apiKey,n.name)}async function km(n,e,t=!1){if(Mt(n.app))return Promise.reject(Pn(n));const r=cr(n),i=vm(r,e),c=await new bm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const Dm=600*1e3;class Nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ch(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(on(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cc(e))}saveEventToCache(e){this.cachedEventUids.add(Cc(e)),this.lastProcessedEventTime=Date.now()}}function Cc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ch({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function xm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ch(n);default:return!1}}/**
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
 */async function Vm(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
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
 */const Om=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lm=/^https?/;async function Mm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vm(n);for(const t of e)try{if(Fm(t))return}catch{}Wt(n,"unauthorized-domain")}function Fm(n){const e=Ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Lm.test(t))return!1;if(Om.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Um=new ws(3e4,6e4);function Rc(){const n=an().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jm(n){return new Promise((e,t)=>{function r(){Rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rc(),t(on(n,"network-request-failed"))},timeout:Um.get()})}if(an().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(an().gapi?.load)r();else{const i=Ng("iframefcb");return an()[i]=()=>{gapi.load?r():t(on(n,"network-request-failed"))},lh(`${Dg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw go=null,e})}let go=null;function qm(n){return go=go||jm(n),go}/**
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
 */const Bm=new ws(5e3,15e3),$m="__/auth/iframe",Hm="emulator/auth/iframe",zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gm(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fu(e,Hm):`https://${n.config.authDomain}/${$m}`,r={apiKey:e.apiKey,appName:n.name,v:Ci},i=Wm.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ts(r).slice(1)}`}async function Km(n){const e=await qm(n),t=an().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:Gm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zm,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=on(n,"network-request-failed"),p=an().setTimeout(()=>{a(c)},Bm.get());function _(){an().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
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
 */const Qm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xm=500,Ym=600,Jm="_blank",Zm="http://localhost";class Pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ey(n,e,t,r=Xm,i=Ym){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Qm,width:r.toString(),height:i.toString(),top:a,left:c},E=pt().toLowerCase();t&&(p=rh(E)?Jm:t),th(E)&&(e=e||Zm,_.scrollbars="yes");const I=Object.entries(_).reduce((V,[G,$])=>`${V}${G}=${$},`,"");if(wg(E)&&p!=="_self")return ty(e||"",p),new Pc(null);const k=window.open(e||"",p,I);ce(k,n,"popup-blocked");try{k.focus()}catch{}return new Pc(k)}function ty(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ny="__/auth/handler",ry="emulator/auth/handler",iy=encodeURIComponent("fac");async function kc(n,e,t,r,i,a){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ci,eventId:i};if(e instanceof ph){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Bd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,k]of Object.entries({}))c[I]=k}if(e instanceof As){const I=e.getScopes().filter(k=>k!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),E=_?`#${iy}=${encodeURIComponent(_)}`:"";return`${sy(n)}?${Ts(p).slice(1)}${E}`}function sy({config:n}){return n.emulator?fu(n,ry):`https://${n.authDomain}/${ny}`}/**
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
 */const Da="webStorageSupport";class oy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=km,this._overrideRedirectResult=Cm}async _openPopup(e,t,r,i){Nn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await kc(e,t,r,Ba(),i);return ey(e,a,yu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await kc(e,t,r,Ba(),i);return cm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Nn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Km(e),r=new Nm(e);return t.register("authEvent",i=>(ce(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Da,{type:Da},i=>{const a=i?.[0]?.[Da];a!==void 0&&t(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uh()||nh()||pu()}}const ay=oy;var Dc="@firebase/auth",Nc="1.11.0";/**
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
 */class uy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ly(n){_i(new Rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;ce(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ch(n)},E=new Rg(r,i,a,_);return Fg(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Rr("auth-internal",e=>{const t=cr(e.getProvider("auth").getImmediate());return(r=>new uy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Dc,Nc,cy(n)),Zn(Dc,Nc,"esm2020")}/**
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
 */const hy=300,fy=Fl("authIdTokenMaxAge")||hy;let xc=null;const dy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fy)return;const i=t?.token;xc!==i&&(xc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function py(n=Hl()){const e=lu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Mg(n,{popupRedirectResolver:ay,persistence:[_m,om,Th]}),r=Fl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=dy(a.toString());rm(t,c,()=>c(t.currentUser)),nm(t,p=>c(p))}}const i=Ll("auth");return i&&Ug(t,`http://${i}`),t}function gy(){return document.getElementsByTagName("head")?.[0]??document}Pg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=on("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",gy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ly("Browser");var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var er,Rh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.D=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.C=function(N,x,L){for(var b=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)b[gt-2]=arguments[gt];return C.prototype[x].apply(N,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);var N=Array(16);if(typeof C=="string")for(var x=0;16>x;++x)N[x]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(x=0;16>x;++x)N[x]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],x=l.g[2];var L=l.g[3],b=C+(L^S&(x^L))+N[0]+3614090360&4294967295;C=S+(b<<7&4294967295|b>>>25),b=L+(x^C&(S^x))+N[1]+3905402710&4294967295,L=C+(b<<12&4294967295|b>>>20),b=x+(S^L&(C^S))+N[2]+606105819&4294967295,x=L+(b<<17&4294967295|b>>>15),b=S+(C^x&(L^C))+N[3]+3250441966&4294967295,S=x+(b<<22&4294967295|b>>>10),b=C+(L^S&(x^L))+N[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(x^C&(S^x))+N[5]+1200080426&4294967295,L=C+(b<<12&4294967295|b>>>20),b=x+(S^L&(C^S))+N[6]+2821735955&4294967295,x=L+(b<<17&4294967295|b>>>15),b=S+(C^x&(L^C))+N[7]+4249261313&4294967295,S=x+(b<<22&4294967295|b>>>10),b=C+(L^S&(x^L))+N[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(x^C&(S^x))+N[9]+2336552879&4294967295,L=C+(b<<12&4294967295|b>>>20),b=x+(S^L&(C^S))+N[10]+4294925233&4294967295,x=L+(b<<17&4294967295|b>>>15),b=S+(C^x&(L^C))+N[11]+2304563134&4294967295,S=x+(b<<22&4294967295|b>>>10),b=C+(L^S&(x^L))+N[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(x^C&(S^x))+N[13]+4254626195&4294967295,L=C+(b<<12&4294967295|b>>>20),b=x+(S^L&(C^S))+N[14]+2792965006&4294967295,x=L+(b<<17&4294967295|b>>>15),b=S+(C^x&(L^C))+N[15]+1236535329&4294967295,S=x+(b<<22&4294967295|b>>>10),b=C+(x^L&(S^x))+N[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^x&(C^S))+N[6]+3225465664&4294967295,L=C+(b<<9&4294967295|b>>>23),b=x+(C^S&(L^C))+N[11]+643717713&4294967295,x=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(x^L))+N[0]+3921069994&4294967295,S=x+(b<<20&4294967295|b>>>12),b=C+(x^L&(S^x))+N[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^x&(C^S))+N[10]+38016083&4294967295,L=C+(b<<9&4294967295|b>>>23),b=x+(C^S&(L^C))+N[15]+3634488961&4294967295,x=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(x^L))+N[4]+3889429448&4294967295,S=x+(b<<20&4294967295|b>>>12),b=C+(x^L&(S^x))+N[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^x&(C^S))+N[14]+3275163606&4294967295,L=C+(b<<9&4294967295|b>>>23),b=x+(C^S&(L^C))+N[3]+4107603335&4294967295,x=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(x^L))+N[8]+1163531501&4294967295,S=x+(b<<20&4294967295|b>>>12),b=C+(x^L&(S^x))+N[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^x&(C^S))+N[2]+4243563512&4294967295,L=C+(b<<9&4294967295|b>>>23),b=x+(C^S&(L^C))+N[7]+1735328473&4294967295,x=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(x^L))+N[12]+2368359562&4294967295,S=x+(b<<20&4294967295|b>>>12),b=C+(S^x^L)+N[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^x)+N[8]+2272392833&4294967295,L=C+(b<<11&4294967295|b>>>21),b=x+(L^C^S)+N[11]+1839030562&4294967295,x=L+(b<<16&4294967295|b>>>16),b=S+(x^L^C)+N[14]+4259657740&4294967295,S=x+(b<<23&4294967295|b>>>9),b=C+(S^x^L)+N[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^x)+N[4]+1272893353&4294967295,L=C+(b<<11&4294967295|b>>>21),b=x+(L^C^S)+N[7]+4139469664&4294967295,x=L+(b<<16&4294967295|b>>>16),b=S+(x^L^C)+N[10]+3200236656&4294967295,S=x+(b<<23&4294967295|b>>>9),b=C+(S^x^L)+N[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^x)+N[0]+3936430074&4294967295,L=C+(b<<11&4294967295|b>>>21),b=x+(L^C^S)+N[3]+3572445317&4294967295,x=L+(b<<16&4294967295|b>>>16),b=S+(x^L^C)+N[6]+76029189&4294967295,S=x+(b<<23&4294967295|b>>>9),b=C+(S^x^L)+N[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^x)+N[12]+3873151461&4294967295,L=C+(b<<11&4294967295|b>>>21),b=x+(L^C^S)+N[15]+530742520&4294967295,x=L+(b<<16&4294967295|b>>>16),b=S+(x^L^C)+N[2]+3299628645&4294967295,S=x+(b<<23&4294967295|b>>>9),b=C+(x^(S|~L))+N[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~x))+N[7]+1126891415&4294967295,L=C+(b<<10&4294967295|b>>>22),b=x+(C^(L|~S))+N[14]+2878612391&4294967295,x=L+(b<<15&4294967295|b>>>17),b=S+(L^(x|~C))+N[5]+4237533241&4294967295,S=x+(b<<21&4294967295|b>>>11),b=C+(x^(S|~L))+N[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~x))+N[3]+2399980690&4294967295,L=C+(b<<10&4294967295|b>>>22),b=x+(C^(L|~S))+N[10]+4293915773&4294967295,x=L+(b<<15&4294967295|b>>>17),b=S+(L^(x|~C))+N[1]+2240044497&4294967295,S=x+(b<<21&4294967295|b>>>11),b=C+(x^(S|~L))+N[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~x))+N[15]+4264355552&4294967295,L=C+(b<<10&4294967295|b>>>22),b=x+(C^(L|~S))+N[6]+2734768916&4294967295,x=L+(b<<15&4294967295|b>>>17),b=S+(L^(x|~C))+N[13]+1309151649&4294967295,S=x+(b<<21&4294967295|b>>>11),b=C+(x^(S|~L))+N[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~x))+N[11]+3174756917&4294967295,L=C+(b<<10&4294967295|b>>>22),b=x+(C^(L|~S))+N[2]+718787259&4294967295,x=L+(b<<15&4294967295|b>>>17),b=S+(L^(x|~C))+N[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(x+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+x&4294967295,l.g[3]=l.g[3]+L&4294967295}r.prototype.u=function(l,C){C===void 0&&(C=l.length);for(var S=C-this.blockSize,N=this.B,x=this.h,L=0;L<C;){if(x==0)for(;L<=S;)i(this,l,L),L+=this.blockSize;if(typeof l=="string"){for(;L<C;)if(N[x++]=l.charCodeAt(L++),x==this.blockSize){i(this,N),x=0;break}}else for(;L<C;)if(N[x++]=l[L++],x==this.blockSize){i(this,N),x=0;break}}this.h=x,this.o+=C},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;var S=8*this.o;for(C=l.length-8;C<l.length;++C)l[C]=S&255,S/=256;for(this.u(l),l=Array(16),C=S=0;4>C;++C)for(var N=0;32>N;N+=8)l[S++]=this.g[C]>>>N&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;for(var S=[],N=!0,x=l.length-1;0<=x;x--){var L=l[x]|0;N&&L==C||(S[x]=L,N=!1)}this.g=S}var p={};function _(l){return-128<=l&&128>l?a(l,function(C){return new c([C|0],0>C?-1:0)}):new c([l|0],0>l?-1:0)}function E(l){if(isNaN(l)||!isFinite(l))return k;if(0>l)return Y(E(-l));for(var C=[],S=1,N=0;l>=S;N++)C[N]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=E(Math.pow(C,8)),N=k,x=0;x<l.length;x+=8){var L=Math.min(8,l.length-x),b=parseInt(l.substring(x,x+L),C);8>L?(L=E(Math.pow(C,L)),N=N.j(L).add(E(b))):(N=N.j(S),N=N.add(E(b)))}return N}var k=_(0),V=_(1),G=_(16777216);n=c.prototype,n.m=function(){if(K(this))return-Y(this).m();for(var l=0,C=1,S=0;S<this.g.length;S++){var N=this.i(S);l+=(0<=N?N:4294967296+N)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if($(this))return"0";if(K(this))return"-"+Y(this).toString(l);for(var C=E(Math.pow(l,6)),S=this,N="";;){var x=xe(S,C).g;S=J(S,x.j(C));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(l);if(S=x,$(S))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function $(l){if(l.h!=0)return!1;for(var C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function K(l){return l.h==-1}n.l=function(l){return l=J(this,l),K(l)?-1:$(l)?0:1};function Y(l){for(var C=l.g.length,S=[],N=0;N<C;N++)S[N]=~l.g[N];return new c(S,~l.h).add(V)}n.abs=function(){return K(this)?Y(this):this},n.add=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0,x=0;x<=C;x++){var L=N+(this.i(x)&65535)+(l.i(x)&65535),b=(L>>>16)+(this.i(x)>>>16)+(l.i(x)>>>16);N=b>>>16,L&=65535,b&=65535,S[x]=b<<16|L}return new c(S,S[S.length-1]&-2147483648?-1:0)};function J(l,C){return l.add(Y(C))}n.j=function(l){if($(this)||$(l))return k;if(K(this))return K(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(K(l))return Y(this.j(Y(l)));if(0>this.l(G)&&0>l.l(G))return E(this.m()*l.m());for(var C=this.g.length+l.g.length,S=[],N=0;N<2*C;N++)S[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<l.g.length;x++){var L=this.i(N)>>>16,b=this.i(N)&65535,gt=l.i(x)>>>16,lr=l.i(x)&65535;S[2*N+2*x]+=b*lr,ye(S,2*N+2*x),S[2*N+2*x+1]+=L*lr,ye(S,2*N+2*x+1),S[2*N+2*x+1]+=b*gt,ye(S,2*N+2*x+1),S[2*N+2*x+2]+=L*gt,ye(S,2*N+2*x+2)}for(N=0;N<C;N++)S[N]=S[2*N+1]<<16|S[2*N];for(N=C;N<2*C;N++)S[N]=0;return new c(S,0)};function ye(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function _e(l,C){this.g=l,this.h=C}function xe(l,C){if($(C))throw Error("division by zero");if($(l))return new _e(k,k);if(K(l))return C=xe(Y(l),C),new _e(Y(C.g),Y(C.h));if(K(C))return C=xe(l,Y(C)),new _e(Y(C.g),C.h);if(30<l.g.length){if(K(l)||K(C))throw Error("slowDivide_ only works with positive integers.");for(var S=V,N=C;0>=N.l(l);)S=wt(S),N=wt(N);var x=ze(S,1),L=ze(N,1);for(N=ze(N,2),S=ze(S,2);!$(N);){var b=L.add(N);0>=b.l(l)&&(x=x.add(S),L=b),N=ze(N,1),S=ze(S,1)}return C=J(l,x.j(C)),new _e(x,C)}for(x=k;0<=l.l(C);){for(S=Math.max(1,Math.floor(l.m()/C.m())),N=Math.ceil(Math.log(S)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=E(S),b=L.j(C);K(b)||0<b.l(l);)S-=N,L=E(S),b=L.j(C);$(L)&&(L=V),x=x.add(L),l=J(l,b)}return new _e(x,l)}n.A=function(l){return xe(this,l).h},n.and=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)&l.i(N);return new c(S,this.h&l.h)},n.or=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)|l.i(N);return new c(S,this.h|l.h)},n.xor=function(l){for(var C=Math.max(this.g.length,l.g.length),S=[],N=0;N<C;N++)S[N]=this.i(N)^l.i(N);return new c(S,this.h^l.h)};function wt(l){for(var C=l.g.length+1,S=[],N=0;N<C;N++)S[N]=l.i(N)<<1|l.i(N-1)>>>31;return new c(S,l.h)}function ze(l,C){var S=C>>5;C%=32;for(var N=l.g.length-S,x=[],L=0;L<N;L++)x[L]=0<C?l.i(L+S)>>>C|l.i(L+S+1)<<32-C:l.i(L+S);return new c(x,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=E,c.fromString=I,er=c}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ph,ts,kh,mo,za,Dh,Nh,xh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,g){return o==Array.prototype||o==Object.prototype||(o[f]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var O=o[T];if(!(O in g))break e;g=g[O]}o=o[o.length-1],T=g[o],f=f(T),f!=T&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}function a(o,f){o instanceof String&&(o+="");var g=0,T=!1,O={next:function(){if(!T&&g<o.length){var U=g++;return{value:f(U,o[U]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(o){return o||function(){return a(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},p=this||self;function _(o){var f=typeof o;return f=f!="object"?f:o?Array.isArray(o)?"array":f:"null",f=="array"||f=="object"&&typeof o.length=="number"}function E(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function I(o,f,g){return o.call.apply(o.bind,arguments)}function k(o,f,g){if(!o)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),o.apply(f,O)}}return function(){return o.apply(f,arguments)}}function V(o,f,g){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:k,V.apply(null,arguments)}function G(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function $(o,f){function g(){}g.prototype=f.prototype,o.aa=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(T,O,U){for(var X=Array(arguments.length-2),De=2;De<arguments.length;De++)X[De-2]=arguments[De];return f.prototype[O].apply(T,X)}}function K(o){const f=o.length;if(0<f){const g=Array(f);for(let T=0;T<f;T++)g[T]=o[T];return g}return[]}function Y(o,f){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(_(T)){const O=o.length||0,U=T.length||0;o.length=O+U;for(let X=0;X<U;X++)o[O+X]=T[X]}else o.push(T)}}class J{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ye(o){return/^[\s\xa0]*$/.test(o)}function _e(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function xe(o){return xe[" "](o),o}xe[" "]=function(){};var wt=_e().indexOf("Gecko")!=-1&&!(_e().toLowerCase().indexOf("webkit")!=-1&&_e().indexOf("Edge")==-1)&&!(_e().indexOf("Trident")!=-1||_e().indexOf("MSIE")!=-1)&&_e().indexOf("Edge")==-1;function ze(o,f,g){for(const T in o)f.call(g,o[T],T,o)}function l(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function C(o){const f={};for(const g in o)f[g]=o[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(o,f){let g,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(g in T)o[g]=T[g];for(let U=0;U<S.length;U++)g=S[U],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function x(o){var f=1;o=o.split(":");const g=[];for(;0<f&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function L(o){p.setTimeout(()=>{throw o},0)}function b(){var o=Kt;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class gt{constructor(){this.h=this.g=null}add(f,g){const T=lr.get();T.set(f,g),this.h?this.h.next=T:this.g=T,this.h=T}}var lr=new J(()=>new oa,o=>o.reset());class oa{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,gn=!1,Kt=new gt,Vi=()=>{const o=p.Promise.resolve(void 0);mt=()=>{o.then(xs)}};var xs=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(g){L(g)}var f=lr;f.j(o),100>f.h&&(f.h++,o.next=f.g,f.g=o)}gn=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Vs=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,f),p.removeEventListener("test",g,f)}catch{}return o})();function hr(o,f){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget){if(wt){e:{try{xe(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement);this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:aa[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&hr.aa.h.call(this)}}$(hr,We);var aa={2:"touch",3:"pen",4:"mouse"};hr.prototype.h=function(){hr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),ua=0;function Os(o,f,g,T,O){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!T,this.ha=O,this.key=++ua,this.da=this.fa=!1}function yt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fr(o){this.src=o,this.g={},this.h=0}Fr.prototype.add=function(o,f,g,T,O){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var X=Mn(o,f,T,O);return-1<X?(f=o[X],g||(f.fa=!1)):(f=new Os(f,this.src,U,!!T,O),f.fa=g,o.push(f)),f};function Qt(o,f){var g=f.type;if(g in o.g){var T=o.g[g],O=Array.prototype.indexOf.call(T,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(T,O,1),U&&(yt(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Mn(o,f,g,T){for(var O=0;O<o.length;++O){var U=o[O];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==T)return O}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),Oi={};function jr(o,f,g,T,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)jr(o,f[U],g,T,O);return null}return g=ie(g),o&&o[Mr]?o.K(f,g,E(T)?!!T.capture:!1,O):qr(o,f,g,!1,T,O)}function qr(o,f,g,T,O,U){if(!f)throw Error("Invalid event type");var X=E(O)?!!O.capture:!!O,De=mn(o);if(De||(o[Ur]=De=new Fr(o)),g=De.add(f,g,T,X,U),g.proxy)return g;if(T=qt(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)Vs||(O=X),O===void 0&&(O=!1),o.addEventListener(f.toString(),T,O);else if(o.attachEvent)o.attachEvent(Ms(f.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function qt(){function o(g){return f.call(o.src,o.listener,g)}const f=Pt;return o}function Ls(o,f,g,T,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ls(o,f[U],g,T,O);else T=E(T)?!!T.capture:!!T,g=ie(g),o&&o[Mr]?(o=o.i,f=String(f).toString(),f in o.g&&(U=o.g[f],g=Mn(U,g,T,O),-1<g&&(yt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete o.g[f],o.h--)))):o&&(o=mn(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Mn(f,g,T,O)),(g=-1<o?f[o]:null)&&Li(g))}function Li(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[Mr])Qt(f.i,o);else{var g=o.type,T=o.proxy;f.removeEventListener?f.removeEventListener(g,T,o.capture):f.detachEvent?f.detachEvent(Ms(g),T):f.addListener&&f.removeListener&&f.removeListener(T),(g=mn(f))?(Qt(g,o),g.h==0&&(g.src=null,f[Ur]=null)):yt(o)}}}function Ms(o){return o in Oi?Oi[o]:Oi[o]="on"+o}function Pt(o,f){if(o.da)o=!0;else{f=new hr(f,this);var g=o.listener,T=o.ha||o.src;o.fa&&Li(o),o=g.call(T,f)}return o}function mn(o){return o=o[Ur],o instanceof Fr?o:null}var yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[yn]||(o[yn]=function(f){return o.handleEvent(f)}),o[yn])}function ke(){jt.call(this),this.i=new Fr(this),this.M=this,this.F=null}$(ke,jt),ke.prototype[Mr]=!0,ke.prototype.removeEventListener=function(o,f,g,T){Ls(this,o,f,g,T)};function it(o,f){var g,T=o.F;if(T)for(g=[];T;T=T.F)g.push(T);if(o=o.M,T=f.type||f,typeof f=="string")f=new We(f,o);else if(f instanceof We)f.target=f.target||o;else{var O=f;f=new We(T,o),N(f,O)}if(O=!0,g)for(var U=g.length-1;0<=U;U--){var X=f.g=g[U];O=Br(X,T,!0,f)&&O}if(X=f.g=o,O=Br(X,T,!0,f)&&O,O=Br(X,T,!1,f)&&O,g)for(U=0;U<g.length;U++)X=f.g=g[U],O=Br(X,T,!1,f)&&O}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,f;for(f in o.g){for(var g=o.g[f],T=0;T<g.length;T++)yt(g[T]);delete o.g[f],o.h--}}this.F=null},ke.prototype.K=function(o,f,g,T){return this.i.add(String(o),f,!1,g,T)},ke.prototype.L=function(o,f,g,T){return this.i.add(String(o),f,!0,g,T)};function Br(o,f,g,T){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==g){var De=X.listener,Oe=X.ha||X.src;X.fa&&Qt(o.i,X),O=De.call(Oe,T)!==!1&&O}}return O&&!T.defaultPrevented}function Fs(o,f,g){if(typeof o=="function")g&&(o=V(o,g));else if(o&&typeof o.handleEvent=="function")o=V(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(o,f||0)}function Mi(o){o.g=Fs(()=>{o.g=null,o.i&&(o.i=!1,Mi(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class Us extends jt{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(o){jt.call(this),this.h=o,this.g={}}$(Bt,jt);var kt=[];function Xt(o){ze(o.g,function(f,g){this.g.hasOwnProperty(g)&&Li(f)},o),o.g={}}Bt.prototype.N=function(){Bt.aa.N.call(this),Xt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yt=p.JSON.stringify,ca=p.JSON.parse,$r=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function Hr(){}Hr.prototype.h=null;function Fi(o){return o.h||(o.h=o.i())}function js(){}var Dt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _n(){We.call(this,"d")}$(_n,We);function zr(){We.call(this,"c")}$(zr,We);var Jt={},_t=null;function Je(){return _t=_t||new ke}Jt.La="serverreachability";function Wr(o){We.call(this,Jt.La,o)}$(Wr,We);function fr(o){const f=Je();it(f,new Wr(f))}Jt.STAT_EVENT="statevent";function Ui(o,f){We.call(this,Jt.STAT_EVENT,o),this.stat=f}$(Ui,We);function et(o){const f=Je();it(f,new Ui(f,o))}Jt.Ma="timingevent";function vn(o,f){We.call(this,Jt.Ma,o),this.size=f}$(vn,We);function Nt(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},f)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function Gr(o,f,g,T,O,U){o.info(function(){if(o.g)if(U)for(var X="",De=U.split("&"),Oe=0;Oe<De.length;Oe++){var me=De[Oe].split("=");if(1<me.length){var tt=me[0];me=me[1];var nt=tt.split("_");X=2<=nt.length&&nt[1]=="type"?X+(tt+"="+me+"&"):X+(tt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+f+`
`+g+`
`+X})}function la(o,f,g,T,O,U,X){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+f+`
`+g+`
`+U+" "+X})}function Fn(o,f,g,T){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+qs(o,g)+(T?" "+T:"")})}function ha(o,f){o.info(function(){return"TIMEOUT: "+f})}En.prototype.info=function(){};function qs(o,f){if(!o.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var T=g[o];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return Yt(g)}catch{return f}}var Kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qr;function Xr(){}$(Xr,Hr),Xr.prototype.g=function(){return new XMLHttpRequest},Xr.prototype.i=function(){return{}},Qr=new Xr;function vt(o,f,g,T){this.j=o,this.i=f,this.l=g,this.R=T||1,this.U=new Bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var Yr={},dr={};function Un(o,f,g){o.L=1,o.v=Zt(Vt(f)),o.m=g,o.P=!0,qi(o,null)}function qi(o,f){o.F=Date.now(),gr(o),o.A=Vt(o.v);var g=o.A,T=o.R;Array.isArray(T)||(T=[String(T)]),Gi(g.i,"t",T),o.C=0,g=o.j.J,o.h=new ji,o.g=Ct(o.j,g?f:null,!o.m),0<o.O&&(o.M=new Us(V(o.Y,o,o.g),o.O)),f=o.U,g=o.g,T=o.ca;var O="readystatechange";Array.isArray(O)||(O&&(kt[0]=O.toString()),O=kt);for(var U=0;U<O.length;U++){var X=jr(g,O[U],T||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=o.H?C(o.H):{},o.m?(o.u||(o.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,f)):(o.u="GET",o.g.ea(o.A,o.u,null,f)),fr(),Gr(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const f=this.M;f&&St(o)==3?f.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const nt=St(this.g);var f=this.g.Ba();const $n=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||eo(this.g)))){this.J||nt!=4||f==7||(f==8||0>=$n?fr(3):fr(2)),Jr(this);var g=this.g.Z();this.X=g;t:if($s(this)){var T=eo(this.g);o="";var O=T.length,U=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),jn(this);var X="";break t}this.h.i=new p.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,o+=this.h.i.decode(T[f],{stream:!(U&&f==O-1)});T.length=0,this.h.g+=o,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,la(this.i,this.u,this.A,this.l,this.R,nt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Oe=this.g;if((De=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(De)){var me=De;break t}}me=null}if(g=me)Fn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,g);else{this.o=!1,this.s=3,et(12),Tn(this),jn(this);break e}}if(this.P){g=!0;let Ee;for(;!this.J&&this.C<X.length;)if(Ee=pr(this,X),Ee==dr){nt==4&&(this.s=4,et(14),g=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==Yr){this.s=4,et(15),Fn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else Fn(this.i,this.l,Ee,null),mr(this,Ee);if($s(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||X.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)Fn(this.i,this.l,X,"[Invalid Chunked Response]"),Tn(this),jn(this);else if(0<X.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),B(tt),tt.M=!0,et(11))}}else Fn(this.i,this.l,X,null),mr(this,X);nt==4&&Tn(this),this.o&&!this.J&&(nt==4?ue(this.j,this):(this.o=!1,gr(this)))}else va(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Tn(this),jn(this)}}}catch{}finally{}};function $s(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function pr(o,f){var g=o.C,T=f.indexOf(`
`,g);return T==-1?dr:(g=Number(f.substring(g,T)),isNaN(g)?Yr:(T+=1,T+g>f.length?dr:(f=f.slice(T,T+g),o.C=T+g,f)))}vt.prototype.cancel=function(){this.J=!0,Tn(this)};function gr(o){o.S=Date.now()+o.I,Bi(o,o.I)}function Bi(o,f){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Nt(V(o.ba,o),f)}function Jr(o){o.B&&(p.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ha(this.i,this.A),this.L!=2&&(fr(),et(17)),Tn(this),this.s=2,jn(this)):Bi(this,this.S-o)};function jn(o){o.j.G==0||o.J||ue(o.j,o)}function Tn(o){Jr(o);var f=o.M;f&&typeof f.ma=="function"&&f.ma(),o.M=null,Xt(o.U),o.g&&(f=o.g,o.g=null,f.abort(),f.ma())}function mr(o,f){try{var g=o.j;if(g.G!=0&&(g.g==o||yr(g.h,o))){if(!o.K&&yr(g.h,o)&&g.G==3){try{var T=g.Da.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)Q(g),h(g);else break e;q(g),et(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Nt(V(g.Za,g),6e3));if(1>=Hi(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else he(g,11)}else if((o.K||g.g==o)&&Q(g),!ye(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let me=O[f];if(g.T=me[0],me=me[1],g.G==2)if(me[0]=="c"){g.K=me[1],g.ia=me[2];const tt=me[3];tt!=null&&(g.la=tt,g.j.info("VER="+g.la));const nt=me[4];nt!=null&&(g.Aa=nt,g.j.info("SVER="+g.Aa));const $n=me[5];$n!=null&&typeof $n=="number"&&0<$n&&(T=1.5*$n,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Ee=o.g;if(Ee){const Sn=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var U=T.h;U.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Zr(U,U.h),U.h=null))}if(T.D){const Et=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Et&&(T.ya=Et,Ve(T.I,T.D,Et))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var X=o;if(T.qa=Be(T,T.J?T.ia:null,T.W),X.K){st(T.h,X);var De=X,Oe=T.L;Oe&&(De.I=Oe),De.B&&(Jr(De),gr(De)),T.g=X}else D(T);0<g.i.length&&m(g)}else me[0]!="stop"&&me[0]!="close"||he(g,7);else g.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?he(g,7):u(g):me[0]!="noop"&&g.l&&g.l.ta(me),g.v=0)}}fr(4)}catch{}}var fa=class{constructor(o,f){this.g=o,this.map=f}};function Hs(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $i(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Hi(o){return o.h?1:o.g?o.g.size:0}function yr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Zr(o,f){o.g?o.g.add(f):o.h=f}function st(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Hs.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wn(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.D);return f}return K(o.i)}function ei(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var f=[],g=o.length,T=0;T<g;T++)f.push(o[T]);return f}f=[],g=0;for(T in o)f[g++]=o[T];return f}function da(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var f=[];o=o.length;for(var g=0;g<o;g++)f.push(g);return f}f=[],g=0;for(const T in o)f[g++]=T;return f}}}function zs(o,f){if(o.forEach&&typeof o.forEach=="function")o.forEach(f,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,f,void 0);else for(var g=da(o),T=ei(o),O=T.length,U=0;U<O;U++)f.call(void 0,T[U],g&&g[U],o)}var ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ws(o,f){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var T=o[g].indexOf("="),O=null;if(0<=T){var U=o[g].substring(0,T);O=o[g].substring(T+1)}else U=o[g];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function xt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xt){this.h=o.h,ni(this,o.j),this.o=o.o,this.g=o.g,ri(this,o.s),this.l=o.l;var f=o.i,g=new An;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),It(this,g),this.m=o.m}else o&&(f=String(o).match(ti))?(this.h=!1,ni(this,f[1]||"",!0),this.o=_r(f[2]||""),this.g=_r(f[3]||"",!0),ri(this,f[4]),this.l=_r(f[5]||"",!0),It(this,f[6]||"",!0),this.m=_r(f[7]||"")):(this.h=!1,this.i=new An(null,this.h))}xt.prototype.toString=function(){var o=[],f=this.j;f&&o.push(vr(f,en,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(vr(f,en,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(vr(g,g.charAt(0)=="/"?pa:zi,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",vr(g,Gs)),o.join("")};function Vt(o){return new xt(o)}function ni(o,f,g){o.j=g?_r(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function ri(o,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);o.s=f}else o.s=null}function It(o,f,g){f instanceof An?(o.i=f,ga(o.i,o.h)):(g||(f=vr(f,Er)),o.i=new An(f,o.h))}function Ve(o,f,g){o.i.set(f,g)}function Zt(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _r(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vr(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,In),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function In(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var en=/[#\/\?@]/g,zi=/[#\?:]/g,pa=/[#\?]/g,Er=/[#\?@]/g,Gs=/#/g;function An(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function $t(o){o.g||(o.g=new Map,o.h=0,o.i&&Ws(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=An.prototype,n.add=function(o,f){$t(this),this.i=null,o=qn(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Wi(o,f){$t(o),f=qn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Ks(o,f){return $t(o),f=qn(o,f),o.g.has(f)}n.forEach=function(o,f){$t(this),this.g.forEach(function(g,T){g.forEach(function(O){o.call(f,O,T,this)},this)},this)},n.na=function(){$t(this);const o=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let T=0;T<f.length;T++){const O=o[T];for(let U=0;U<O.length;U++)g.push(f[T])}return g},n.V=function(o){$t(this);let f=[];if(typeof o=="string")Ks(this,o)&&(f=f.concat(this.g.get(qn(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)f=f.concat(o[g])}return f},n.set=function(o,f){return $t(this),this.i=null,o=qn(this,o),Ks(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=this.V(o),0<o.length?String(o[0]):f):f};function Gi(o,f,g){Wi(o,f),0<g.length&&(o.i=null,o.g.set(qn(o,f),K(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var T=f[g];const U=encodeURIComponent(String(T)),X=this.V(T);for(T=0;T<X.length;T++){var O=U;X[T]!==""&&(O+="="+encodeURIComponent(String(X[T]))),o.push(O)}}return this.i=o.join("&")};function qn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function ga(o,f){f&&!o.j&&($t(o),o.i=null,o.g.forEach(function(g,T){var O=T.toLowerCase();T!=O&&(Wi(this,T),Gi(this,O,g))},o)),o.j=f}function Ki(o,f){const g=new En;if(p.Image){const T=new Image;T.onload=G(tn,g,"TestLoadImage: loaded",!0,f,T),T.onerror=G(tn,g,"TestLoadImage: error",!1,f,T),T.onabort=G(tn,g,"TestLoadImage: abort",!1,f,T),T.ontimeout=G(tn,g,"TestLoadImage: timeout",!1,f,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else f(!1)}function ma(o,f){const g=new En,T=new AbortController,O=setTimeout(()=>{T.abort(),tn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:T.signal}).then(U=>{clearTimeout(O),U.ok?tn(g,"TestPingServer: ok",!0,f):tn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),tn(g,"TestPingServer: error",!1,f)})}function tn(o,f,g,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(g)}catch{}}function ya(){this.g=new $r}function _a(o,f,g){const T=g||"";try{zs(o,function(O,U){let X=O;E(O)&&(X=Yt(O)),f.push(T+U+"="+encodeURIComponent(X))})}catch(O){throw f.push(T+"type="+encodeURIComponent("_badmap")),O}}function ii(o){this.l=o.Ub||null,this.j=o.eb||!1}$(ii,Hr),ii.prototype.g=function(){return new si(this.l,this.j)},ii.prototype.i=(function(o){return function(){return o}})({});function si(o,f){ke.call(this),this.D=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(si,ke),n=si.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=f,this.readyState=1,bn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(f.body=o),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qs(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qs(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Bn(this):bn(this),this.readyState==3&&Qs(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Bn(this))},n.Qa=function(o){this.g&&(this.response=o,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bn(o)}n.setRequestHeader=function(o,f){this.u.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function bn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qi(o){let f="";return ze(o,function(g,T){f+=T,f+=":",f+=g,f+=`\r
`}),f}function Tr(o,f,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=Qi(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):Ve(o,f,g))}function Fe(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Fe,ke);var Xs=/^https?$/i,Xi=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,f,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qr.g(),this.v=this.o?Fi(this.o):Fi(Qr),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(U){Ys(this,U);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)g.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const U of T.keys())g.set(U,T.get(U));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),O=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Xi,f,void 0))||T||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yi(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){Ys(this,U)}};function Ys(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.m=5,Js(o),nn(o)}function Js(o){o.A||(o.A=!0,it(o,"complete"),it(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,it(this,"complete"),it(this,"abort"),nn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zs(this):this.bb())},n.bb=function(){Zs(this)};function Zs(o){if(o.h&&typeof c<"u"&&(!o.v[1]||St(o)!=4||o.Z()!=2)){if(o.u&&St(o)==4)Fs(o.Ea,0,o);else if(it(o,"readystatechange"),St(o)==4){o.h=!1;try{const X=o.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var T;if(T=X===0){var O=String(o.D).match(ti)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),T=!Xs.test(O?O.toLowerCase():"")}g=T}if(g)it(o,"complete"),it(o,"success");else{o.m=6;try{var U=2<St(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",Js(o)}}finally{nn(o)}}}}function nn(o,f){if(o.g){Yi(o);const g=o.g,T=o.v[0]?()=>{}:null;o.g=null,o.v=null,f||it(o,"ready");try{g.onreadystatechange=T}catch{}}}function Yi(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function St(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),ca(f)}};function eo(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function va(o){const f={};o=(o.g&&2<=St(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(ye(o[T]))continue;var g=x(o[T]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[O]||[];f[O]=U,U.push(g)}l(f,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wr(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function s(o){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wr("baseRetryDelayMs",5e3,o),this.cb=wr("retryDelaySeedMs",1e4,o),this.Wa=wr("forwardChannelMaxRetries",2,o),this.wa=wr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hs(o&&o.concurrentRequestLimit),this.Da=new ya,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,f,g,T){et(0),this.W=o,this.H=f||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=Be(this,null,this.W),m(this)};function u(o){if(d(o),o.G==3){var f=o.U++,g=Vt(o.I);if(Ve(g,"SID",o.K),Ve(g,"RID",f),Ve(g,"TYPE","terminate"),R(o,g),f=new vt(o,o.j,f),f.L=2,f.v=Zt(Vt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=f.v,g=!0),g||(f.g=Ct(f.j,null),f.g.ea(f.v)),f.F=Date.now(),gr(f)}Ge(o)}function h(o){o.g&&(B(o),o.g.cancel(),o.g=null)}function d(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),Q(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!$i(o.h)&&!o.s){o.s=!0;var f=o.Ga;mt||Vi(),gn||(mt(),gn=!0),Kt.add(f,o),o.B=0}}function y(o,f){return Hi(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=f.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Nt(V(o.Ga,o,f),we(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const O=new vt(this,this.j,o);let U=this.o;if(this.S&&(U?(U=C(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=A(this,O,f),g=Vt(this.I),Ve(g,"RID",o),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),R(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(Qi(U)))+"&"+f:this.m&&Tr(g,this.m,U)),Zr(this.h,O),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",f),Ve(g,"SID","null"),O.T=!0,Un(O,g,null)):Un(O,g,f),this.G=2}}else this.G==3&&(o?v(this,o):this.i.length==0||$i(this.h)||v(this))};function v(o,f){var g;f?g=f.l:g=o.U++;const T=Vt(o.I);Ve(T,"SID",o.K),Ve(T,"RID",g),Ve(T,"AID",o.T),R(o,T),o.m&&o.o&&Tr(T,o.m,o.o),g=new vt(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),f&&(o.i=f.D.concat(o.i)),f=A(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Zr(o.h,g),Un(g,T,f)}function R(o,f){o.H&&ze(o.H,function(g,T){Ve(f,T,g)}),o.l&&zs({},function(g,T){Ve(f,T,g)})}function A(o,f,g){g=Math.min(o.i.length,g);var T=o.l?V(o.l.Na,o.l,o):null;e:{var O=o.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=O[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let De=!0;for(let Oe=0;Oe<g;Oe++){let me=O[Oe].g;const tt=O[Oe].map;if(me-=U,0>me)U=Math.max(0,O[Oe].g-100),De=!1;else try{_a(tt,X,"req"+me+"_")}catch{T&&T(tt)}}if(De){T=X.join("&");break e}}}return o=o.i.splice(0,g),f.D=o,T}function D(o){if(!o.g&&!o.u){o.Y=1;var f=o.Fa;mt||Vi(),gn||(mt(),gn=!0),Kt.add(f,o),o.v=0}}function q(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Nt(V(o.Fa,o),we(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Nt(V(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),h(this),F(this))};function B(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function F(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var f=Vt(o.qa);Ve(f,"RID","rpc"),Ve(f,"SID",o.K),Ve(f,"AID",o.T),Ve(f,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(f,"TO",o.ja),Ve(f,"TYPE","xmlhttp"),R(o,f),o.m&&o.o&&Tr(f,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=Zt(Vt(f)),g.m=null,g.P=!0,qi(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),q(this),et(19))};function Q(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function ue(o,f){var g=null;if(o.g==f){Q(o),B(o),o.g=null;var T=2}else if(yr(o.h,f))g=f.D,st(o.h,f),T=1;else return;if(o.G!=0){if(f.o)if(T==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=o.B;T=Je(),it(T,new vn(T,g)),m(o)}else D(o);else if(O=f.s,O==3||O==0&&0<f.X||!(T==1&&y(o,f)||T==2&&q(o)))switch(g&&0<g.length&&(f=o.h,f.i=f.i.concat(g)),O){case 1:he(o,5);break;case 4:he(o,10);break;case 3:he(o,6);break;default:he(o,2)}}}function we(o,f){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*f}function he(o,f){if(o.j.info("Error code "+f),f==2){var g=V(o.fb,o),T=o.Xa;const O=!T;T=new xt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ni(T,"https"),Zt(T),O?Ki(T.toString(),g):ma(T.toString(),g)}else et(2);o.G=0,o.l&&o.l.sa(f),Ge(o),d(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Ge(o){if(o.G=0,o.ka=[],o.l){const f=wn(o.h);(f.length!=0||o.i.length!=0)&&(Y(o.ka,f),Y(o.ka,o.i),o.h.i.length=0,K(o.i),o.i.length=0),o.l.ra()}}function Be(o,f,g){var T=g instanceof xt?Vt(g):new xt(g);if(T.g!="")f&&(T.g=f+"."+T.g),ri(T,T.s);else{var O=p.location;T=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new xt(null);T&&ni(U,T),f&&(U.g=f),O&&ri(U,O),g&&(U.l=g),T=U}return g=o.D,f=o.ya,g&&f&&Ve(T,g,f),Ve(T,"VER",o.la),R(o,T),T}function Ct(o,f,g){if(f&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Ca&&!o.pa?new Fe(new ii({eb:g})):new Fe(o.pa),f.Ha(o.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rt(){}n=Rt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ve(){}ve.prototype.g=function(o,f){return new $e(o,f)};function $e(o,f){ke.call(this),this.g=new s(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(o?o["X-WebChannel-Client-Profile"]=f.va:o={"X-WebChannel-Client-Profile":f.va}),this.g.S=o,(o=f&&f.Sb)&&!ye(o)&&(this.g.m=o),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ye(f)&&(this.g.D=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Ot(this)}$($e,ke),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){u(this.g)},$e.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Yt(o),o=g);f.i.push(new fa(f.Ya++,o)),f.G==3&&m(f)},$e.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,$e.aa.N.call(this)};function be(o){_n.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}$(be,_n);function Ue(){zr.call(this),this.status=1}$(Ue,zr);function Ot(o){this.g=o}$(Ot,Rt),Ot.prototype.ua=function(){it(this.g,"a")},Ot.prototype.ta=function(o){it(this.g,new be(o))},Ot.prototype.sa=function(o){it(this.g,new Ue)},Ot.prototype.ra=function(){it(this.g,"b")},ve.prototype.createWebChannel=ve.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,xh=function(){return new ve},Nh=function(){return Je()},Dh=Jt,za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,mo=Kr,Bs.COMPLETE="complete",kh=Bs,js.EventType=Dt,Dt.OPEN="a",Dt.CLOSE="b",Dt.ERROR="c",Dt.MESSAGE="d",ke.prototype.listen=ke.prototype.K,ts=js,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Ph=Fe}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const Oc="@firebase/firestore",Lc="4.9.1";/**
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
 */let Pi="12.2.0";/**
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
 */const Dr=new uu("@firebase/firestore");function ui(){return Dr.logLevel}function re(n,...e){if(Dr.logLevel<=Se.DEBUG){const t=e.map(vu);Dr.debug(`Firestore (${Pi}): ${n}`,...t)}}function xn(n,...e){if(Dr.logLevel<=Se.ERROR){const t=e.map(vu);Dr.error(`Firestore (${Pi}): ${n}`,...t)}}function Ei(n,...e){if(Dr.logLevel<=Se.WARN){const t=e.map(vu);Dr.warn(`Firestore (${Pi}): ${n}`,...t)}}function vu(n){if(typeof n=="string")return n;try{/**
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
 */function le(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Vh(n,r,t)}function Vh(n,e,t){let r=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw xn(r),new Error(r)}function Ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Vh(e,i,r)}function ge(n,e){return n}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends On{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class my{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class yy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _y{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new kn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new kn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new Oh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class vy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ey{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Mc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ty{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ne(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Mc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Mc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Eu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=wy(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Ce(n,e){return n<e?-1:n>e?1:0}function Wa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Na(i)===Na(a)?Ce(i,a):Na(i)?1:-1}return Ce(n.length,e.length)}const Iy=55296,Ay=57343;function Na(n){const e=n.charCodeAt(0);return e>=Iy&&e<=Ay}function Ti(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const Fc="__name__";class sn{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&le(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=sn.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Ce(e.length,t.length)}static compareSegments(e,t){const r=sn.isNumericId(e),i=sn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?sn.extractNumericId(e).compare(sn.extractNumericId(t)):Wa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return er.fromString(e.substring(4,e.length-2))}}class Me extends sn{construct(e,t,r){return new Me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const by=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends sn{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return by.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fc}static keyField(){return new at([Fc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ne(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ne(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ne(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
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
 */function Lh(n,e,t){if(!t)throw new ne(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sy(n,e,t,r){if(e===!0&&r===!0)throw new ne(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Uc(n){if(!oe.isDocumentKey(n))throw new ne(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jc(n){if(oe.isDocumentKey(n))throw new ne(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le(12329,{type:typeof n})}function nr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wo(n);throw new ne(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ss(n,e){if(!Mh(n))throw new ne(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ne(z.INVALID_ARGUMENT,t);return!0}/**
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
 */const qc=-62135596800,Bc=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Bc);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qc)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bc}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ss(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Xe("string",je._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */const ds=-1;function Cy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new rr(i,oe.empty(),e)}function Ry(n){return new rr(n.readTime,n.key,ds)}class rr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rr(pe.min(),oe.empty(),ds)}static max(){return new rr(pe.max(),oe.empty(),ds)}}function Py(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const ky="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ki(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==ky)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,r)=>{t(e)}))}static reject(e){return new W(((t,r)=>{r(e)}))}static waitFor(e){return new W(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next((i=>i?W.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new W(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const E=_;t(e[E]).next((I=>{c[E]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new W(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function Ny(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Di(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Go{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Go.ce=-1;/**
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
 */const Tu=-1;function Ko(n){return n==null}function Do(n){return n===0&&1/n==-1/0}function xy(n){return typeof n=="number"&&Number.isInteger(n)&&!Do(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Fh="";function Vy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$c(e)),e=Oy(n.get(t),e);return $c(e)}function Oy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case Fh:t+="";break;default:t+=a}}return t}function $c(n){return n+Fh+""}/**
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
 */function Hc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=a??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zc(this.data.getIterator())}getIteratorFrom(e){return new zc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class zc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new zt([])}unionWith(e){let t=new Ze(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new zt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class jh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new jh("Invalid base64 string: "+a):a}})(e);return new ct(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(n){if(Ne(!!n,39018),typeof n=="string"){let e=0;const t=Ly.exec(n);if(Ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
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
 */const qh="server_timestamp",Bh="__type__",$h="__previous_value__",Hh="__local_write_time__";function wu(n){return(n?.mapValue?.fields||{})[Bh]?.stringValue===qh}function Qo(n){const e=n.mapValue.fields[$h];return wu(e)?Qo(e):e}function ps(n){const e=ir(n.mapValue.fields[Hh].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class My{constructor(e,t,r,i,a,c,p,_,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=E,this.isUsingEmulator=I}}const No="(default)";class gs{constructor(e,t){this.projectId=e,this.database=t||No}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database===No}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zh="__type__",Fy="__max__",ao={mapValue:{}},Wh="__vector__",xo="value";function or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wu(n)?4:jy(n)?9007199254740991:Uy(n)?10:11:le(28295,{value:n})}function dn(n,e){if(n===e)return!0;const t=or(n);if(t!==or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ps(n).isEqual(ps(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=ir(i.timestampValue),p=ir(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return sr(i.bytesValue).isEqual(sr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return He(i.geoPointValue.latitude)===He(a.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return He(i.integerValue)===He(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=He(i.doubleValue),p=He(a.doubleValue);return c===p?Do(c)===Do(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return Ti(n.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Hc(c)!==Hc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!dn(c[_],p[_])))return!1;return!0})(n,e);default:return le(52216,{left:n})}}function ms(n,e){return(n.values||[]).find((t=>dn(t,e)))!==void 0}function wi(n,e){if(n===e)return 0;const t=or(n),r=or(e);if(t!==r)return Ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=He(a.integerValue||a.doubleValue),_=He(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return Wc(n.timestampValue,e.timestampValue);case 4:return Wc(ps(n),ps(e));case 5:return Wa(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=sr(a),_=sr(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let E=0;E<p.length&&E<_.length;E++){const I=Ce(p[E],_[E]);if(I!==0)return I}return Ce(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=Ce(He(a.latitude),He(c.latitude));return p!==0?p:Ce(He(a.longitude),He(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Gc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},E=p[xo]?.arrayValue,I=_[xo]?.arrayValue,k=Ce(E?.values?.length||0,I?.values?.length||0);return k!==0?k:Gc(E,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===ao.mapValue&&c===ao.mapValue)return 0;if(a===ao.mapValue)return 1;if(c===ao.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),E=c.fields||{},I=Object.keys(E);_.sort(),I.sort();for(let k=0;k<_.length&&k<I.length;++k){const V=Wa(_[k],I[k]);if(V!==0)return V;const G=wi(p[_[k]],E[I[k]]);if(G!==0)return G}return Ce(_.length,I.length)})(n.mapValue,e.mapValue);default:throw le(23264,{he:t})}}function Wc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=ir(n),r=ir(e),i=Ce(t.seconds,r.seconds);return i!==0?i:Ce(t.nanos,r.nanos)}function Gc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=wi(t[i],r[i]);if(a)return a}return Ce(t.length,r.length)}function Ii(n){return Ga(n)}function Ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ir(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return sr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return oe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Ga(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${Ga(t.fields[c])}`;return i+"}"})(n.mapValue):le(61005,{value:n})}function yo(n){switch(or(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qo(n);return e?16+yo(e):16;case 5:return 2*n.stringValue.length;case 6:return sr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+yo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return xr(r.fields,((a,c)=>{i+=a.length+yo(c)})),i})(n.mapValue);default:throw le(13486,{value:n})}}function Kc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ka(n){return!!n&&"integerValue"in n}function Iu(n){return!!n&&"arrayValue"in n}function Qc(n){return!!n&&"nullValue"in n}function Xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _o(n){return!!n&&"mapValue"in n}function Uy(n){return(n?.mapValue?.fields||{})[zh]?.stringValue===Wh}function as(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=as(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=as(n.arrayValue.values[t]);return e}return{...n}}function jy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Fy}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_o(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=as(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());_o(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];_o(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){xr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Ft(as(this.value))}}function Gh(n){const e=[];return xr(n.fields,((t,r)=>{const i=new at([t]);if(_o(r)){const a=Gh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new zt(e)}/**
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
 */class dt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new dt(e,0,pe.min(),pe.min(),pe.min(),Ft.empty(),0)}static newFoundDocument(e,t,r,i){return new dt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new dt(e,2,t,pe.min(),pe.min(),Ft.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,pe.min(),pe.min(),Ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vo{constructor(e,t){this.position=e,this.inclusive=t}}function Yc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=oe.comparator(oe.fromName(c.referenceValue),t.key):r=wi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function qy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kh{}class Qe extends Kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $y(e,t,r):t==="array-contains"?new Wy(e,r):t==="in"?new Gy(e,r):t==="not-in"?new Ky(e,r):t==="array-contains-any"?new Qy(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hy(e,r):new zy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wi(t,this.value)):t!==null&&or(this.value)===or(t)&&this.matchesComparison(wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Kh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Gt(e,t)}matches(e){return Qh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qh(n){return n.op==="and"}function Xh(n){return By(n)&&Qh(n)}function By(n){for(const e of n.filters)if(e instanceof Gt)return!1;return!0}function Qa(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+Ii(n.value);if(Xh(n))return n.filters.map((e=>Qa(e))).join(",");{const e=n.filters.map((t=>Qa(t))).join(",");return`${n.op}(${e})`}}function Yh(n,e){return n instanceof Qe?(function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)})(n,e):n instanceof Gt?(function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&Yh(c,i.filters[p])),!0):!1})(n,e):void le(19439)}function Jh(n){return n instanceof Qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ii(t.value)}`})(n):n instanceof Gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jh).join(" ,")+"}"})(n):"Filter"}class $y extends Qe{constructor(e,t,r){super(e,t,r),this.key=oe.fromName(r.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hy extends Qe{constructor(e,t){super(e,"in",t),this.keys=Zh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zy extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=Zh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zh(n,e){return(e.arrayValue?.values||[]).map((t=>oe.fromName(t.referenceValue)))}class Wy extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Iu(t)&&ms(t.arrayValue,this.value)}}class Gy extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ms(this.value.arrayValue,t)}}class Ky extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ms(this.value.arrayValue,t)}}class Qy extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Iu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ms(this.value.arrayValue,r)))}}/**
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
 */class Xy{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function Zc(n,e=null,t=[],r=[],i=null,a=null,c=null){return new Xy(n,e,t,r,i,a,c)}function Au(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Qa(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Ko(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ii(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ii(r))).join(",")),e.Te=t}return e.Te}function bu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jc(n.startAt,e.startAt)&&Jc(n.endAt,e.endAt)}function Xa(n){return oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cs{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Yy(n,e,t,r,i,a,c,p){return new Cs(n,e,t,r,i,a,c,p)}function Su(n){return new Cs(n)}function el(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ef(n){return n.collectionGroup!==null}function us(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Ze(at.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((E=>{E.isInequality()&&(p=p.add(E.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Oo(a,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new Oo(at.keyField(),r))}return e.Ie}function un(n){const e=ge(n);return e.Ee||(e.Ee=Jy(e,us(n))),e.Ee}function Jy(n,e){if(n.limitType==="F")return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Oo(i.field,a)}));const t=n.endAt?new Vo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vo(n.startAt.position,n.startAt.inclusive):null;return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ya(n,e){const t=n.filters.concat([e]);return new Cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ja(n,e,t){return new Cs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xo(n,e){return bu(un(n),un(e))&&n.limitType===e.limitType}function tf(n){return`${Au(un(n))}|lt:${n.limitType}`}function ci(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Jh(i))).join(", ")}]`),Ko(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ii(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ii(i))).join(",")),`Target(${r})`})(un(n))}; limitType=${n.limitType})`}function Yo(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):oe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of us(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const E=Yc(c,p,_);return c.inclusive?E<=0:E<0})(r.startAt,us(r),i)||r.endAt&&!(function(c,p,_){const E=Yc(c,p,_);return c.inclusive?E>=0:E>0})(r.endAt,us(r),i))})(n,e)}function Zy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nf(n){return(e,t)=>{let r=!1;for(const i of us(n)){const a=e_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function e_(n,e,t){const r=n.field.isKeyField()?oe.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),E=p.data.field(a);return _!==null&&E!==null?wi(_,E):le(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:n.dir})}}/**
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
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return Uh(this.inner)}size(){return this.innerSize}}/**
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
 */const t_=new qe(oe.comparator);function Vn(){return t_}const rf=new qe(oe.comparator);function ns(...n){let e=rf;for(const t of n)e=e.insert(t.key,t);return e}function sf(n){let e=rf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function br(){return cs()}function of(){return cs()}function cs(){return new Vr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const n_=new qe(oe.comparator),r_=new Ze(oe.comparator);function Re(...n){let e=r_;for(const t of n)e=e.add(t);return e}const i_=new Ze(Ce);function s_(){return i_}/**
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
 */function Cu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function af(n){return{integerValue:""+n}}function o_(n,e){return xy(e)?af(e):Cu(n,e)}/**
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
 */class Jo{constructor(){this._=void 0}}function a_(n,e,t){return n instanceof ys?(function(i,a){const c={fields:{[Bh]:{stringValue:qh},[Hh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&wu(a)&&(a=Qo(a)),a&&(c.fields[$h]=a),{mapValue:c}})(t,e):n instanceof _s?cf(n,e):n instanceof vs?lf(n,e):(function(i,a){const c=uf(i,a),p=tl(c)+tl(i.Ae);return Ka(c)&&Ka(i.Ae)?af(p):Cu(i.serializer,p)})(n,e)}function u_(n,e,t){return n instanceof _s?cf(n,e):n instanceof vs?lf(n,e):t}function uf(n,e){return n instanceof Lo?(function(r){return Ka(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class ys extends Jo{}class _s extends Jo{constructor(e){super(),this.elements=e}}function cf(n,e){const t=hf(e);for(const r of n.elements)t.some((i=>dn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class vs extends Jo{constructor(e){super(),this.elements=e}}function lf(n,e){let t=hf(e);for(const r of n.elements)t=t.filter((i=>!dn(i,r)));return{arrayValue:{values:t}}}class Lo extends Jo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tl(n){return He(n.integerValue||n.doubleValue)}function hf(n){return Iu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class c_{constructor(e,t){this.field=e,this.transform=t}}function l_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof _s&&i instanceof _s||r instanceof vs&&i instanceof vs?Ti(r.elements,i.elements,dn):r instanceof Lo&&i instanceof Lo?dn(r.Ae,i.Ae):r instanceof ys&&i instanceof ys})(n.transform,e.transform)}class h_{constructor(e,t){this.version=e,this.transformResults=t}}class cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zo{}function ff(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ru(n.key,cn.none()):new Rs(n.key,n.data,cn.none());{const t=n.data,r=Ft.empty();let i=new Ze(at.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new Or(n.key,r,new zt(i.toArray()),cn.none())}}function f_(n,e,t){n instanceof Rs?(function(i,a,c){const p=i.value.clone(),_=rl(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Or?(function(i,a,c){if(!vo(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=rl(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(df(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ls(n,e,t,r){return n instanceof Rs?(function(a,c,p,_){if(!vo(a.precondition,c))return p;const E=a.value.clone(),I=il(a.fieldTransforms,_,c);return E.setAll(I),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),null})(n,e,t,r):n instanceof Or?(function(a,c,p,_){if(!vo(a.precondition,c))return p;const E=il(a.fieldTransforms,_,c),I=c.data;return I.setAll(df(a)),I.setAll(E),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((k=>k.field)))})(n,e,t,r):(function(a,c,p){return vo(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function d_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=uf(r.transform,i||null);a!=null&&(t===null&&(t=Ft.empty()),t.set(r.field,a))}return t||null}function nl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ti(r,i,((a,c)=>l_(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rs extends Zo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Zo{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function df(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function rl(n,e,t){const r=new Map;Ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,u_(c,p,t[i]))}return r}function il(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,a_(a,c,e))}return r}class Ru extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p_ extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&f_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=of();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=ff(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,((t,r)=>nl(t,r)))&&Ti(this.baseMutations,e.baseMutations,((t,r)=>nl(t,r)))}}class Pu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return n_})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Pu(e,t,r,i)}}/**
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
 */class m_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,Pe;function __(n){switch(n){case z.OK:return le(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return le(15467,{code:n})}}function pf(n){if(n===void 0)return xn("GRPC error has no .code"),z.UNKNOWN;switch(n){case Ke.OK:return z.OK;case Ke.CANCELLED:return z.CANCELLED;case Ke.UNKNOWN:return z.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return z.INTERNAL;case Ke.UNAVAILABLE:return z.UNAVAILABLE;case Ke.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Ke.NOT_FOUND:return z.NOT_FOUND;case Ke.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Ke.ABORTED:return z.ABORTED;case Ke.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Ke.DATA_LOSS:return z.DATA_LOSS;default:return le(39323,{code:n})}}(Pe=Ke||(Ke={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function v_(){return new TextEncoder}/**
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
 */const E_=new er([4294967295,4294967295],0);function sl(n){const e=v_().encode(n),t=new Rh;return t.update(e),new Uint8Array(t.digest())}function ol(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new er([t,r],0),new er([i,a],0)]}class ku{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new rs(`Invalid padding: ${t}`);if(r<0)throw new rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new rs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new rs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=er.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(er.fromNumber(r)));return i.compare(E_)===1&&(i=new er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=sl(e),[r,i]=ol(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new ku(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=sl(e),[r,i]=ol(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ea{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ps.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ea(pe.min(),i,new qe(Ce),Vn(),Re())}}class Ps{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ps(r,t,Re(),Re(),Re())}}/**
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
 */class Eo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class gf{constructor(e,t){this.targetId=e,this.Ce=t}}class mf{constructor(e,t,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class al{constructor(){this.ve=0,this.Fe=ul(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),r=Re();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:le(38017,{changeType:a})}})),new Ps(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ul()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class T_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=uo(),this.He=uo(),this.Ye=new qe(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(Xa(a))if(r===0){const c=new oe(a.path);this.et(t,c,dt.newNoDocument(c,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const E=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,E)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=sr(r).toUint8Array()}catch(_){if(_ instanceof jh)return Ei("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new ku(c,i,a)}catch(_){return Ei(_ instanceof rs?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&Xa(p.target)){const _=new oe(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,dt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Re();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const E=this.ot(_);return!E||E.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new ea(e,t,this.Ye,this.je,r);return this.je=Vn(),this.Je=uo(),this.He=uo(),this.Ye=new qe(Ce),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new al,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new al),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function uo(){return new qe(oe.comparator)}function ul(){return new qe(oe.comparator)}const w_={asc:"ASCENDING",desc:"DESCENDING"},I_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},A_={and:"AND",or:"OR"};class b_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Za(n,e){return n.useProto3Json||Ko(e)?e:{value:e}}function Mo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function S_(n,e){return Mo(n,e.toTimestamp())}function ln(n){return Ne(!!n,49232),pe.fromTimestamp((function(t){const r=ir(t);return new je(r.seconds,r.nanos)})(n))}function Du(n,e){return eu(n,e).canonicalString()}function eu(n,e){const t=(function(i){return new Me(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _f(n){const e=Me.fromString(n);return Ne(If(e),10190,{key:e.toString()}),e}function tu(n,e){return Du(n.databaseId,e.path)}function xa(n,e){const t=_f(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new oe(Ef(t))}function vf(n,e){return Du(n.databaseId,e)}function C_(n){const e=_f(n);return e.length===4?Me.emptyPath():Ef(e)}function nu(n){return new Me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ef(n){return Ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cl(n,e,t){return{name:tu(n,e),fields:t.value.mapValue.fields}}function R_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(E){return E==="NO_CHANGE"?0:E==="ADD"?1:E==="REMOVE"?2:E==="CURRENT"?3:E==="RESET"?4:le(39313,{state:E})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(E,I){return E.useProto3Json?(Ne(I===void 0||typeof I=="string",58123),ct.fromBase64String(I||"")):(Ne(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ct.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(E){const I=E.code===void 0?z.UNKNOWN:pf(E.code);return new ne(I,E.message||"")})(c);t=new mf(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xa(n,r.document.name),a=ln(r.document.updateTime),c=r.document.createTime?ln(r.document.createTime):pe.min(),p=new Ft({mapValue:{fields:r.document.fields}}),_=dt.newFoundDocument(i,a,c,p),E=r.targetIds||[],I=r.removedTargetIds||[];t=new Eo(E,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xa(n,r.document),a=r.readTime?ln(r.readTime):pe.min(),c=dt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Eo([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xa(n,r.document),a=r.removedTargetIds||[];t=new Eo([],a,i,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new y_(i,a),p=r.targetId;t=new gf(p,c)}}return t}function P_(n,e){let t;if(e instanceof Rs)t={update:cl(n,e.key,e.value)};else if(e instanceof Ru)t={delete:tu(n,e.key)};else if(e instanceof Or)t={update:cl(n,e.key,e.data),updateMask:F_(e.fieldMask)};else{if(!(e instanceof p_))return le(16599,{Vt:e.type});t={verify:tu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof ys)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof _s)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof vs)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Lo)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw le(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:S_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:le(27497)})(n,e.precondition)),t}function k_(n,e){return n&&n.length>0?(Ne(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?ln(i.updateTime):ln(a);return c.isEqual(pe.min())&&(c=ln(a)),new h_(c,i.transformResults||[])})(t,e)))):[]}function D_(n,e){return{documents:[vf(n,e.path)]}}function N_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vf(n,i);const a=(function(E){if(E.length!==0)return wf(Gt.create(E,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(E){if(E.length!==0)return E.map((I=>(function(V){return{field:li(V.field),direction:O_(V.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=Za(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(E){return{before:E.inclusive,values:E.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(E){return{before:!E.inclusive,values:E.position}})(e.endAt)),{ft:t,parent:i}}function x_(n){let e=C_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ne(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(k){const V=Tf(k);return V instanceof Gt&&Xh(V)?V.getFilters():[V]})(t.where));let c=[];t.orderBy&&(c=(function(k){return k.map((V=>(function($){return new Oo(hi($.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(V)))})(t.orderBy));let p=null;t.limit&&(p=(function(k){let V;return V=typeof k=="object"?k.value:k,Ko(V)?null:V})(t.limit));let _=null;t.startAt&&(_=(function(k){const V=!!k.before,G=k.values||[];return new Vo(G,V)})(t.startAt));let E=null;return t.endAt&&(E=(function(k){const V=!k.before,G=k.values||[];return new Vo(G,V)})(t.endAt)),Yy(e,i,c,a,p,"F",_,E)}function V_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hi(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(t.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=hi(t.unaryFilter.field);return Qe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=hi(t.unaryFilter.field);return Qe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Qe.create(hi(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Gt.create(t.compositeFilter.filters.map((r=>Tf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(t.compositeFilter.op))})(n):le(30097,{filter:n})}function O_(n){return w_[n]}function L_(n){return I_[n]}function M_(n){return A_[n]}function li(n){return{fieldPath:n.canonicalString()}}function hi(n){return at.fromServerFormat(n.fieldPath)}function wf(n){return n instanceof Qe?(function(t){if(t.op==="=="){if(Xc(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NAN"}};if(Qc(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xc(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NAN"}};if(Qc(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(t.field),op:L_(t.op),value:t.value}}})(n):n instanceof Gt?(function(t){const r=t.getFilters().map((i=>wf(i)));return r.length===1?r[0]:{compositeFilter:{op:M_(t.op),filters:r}}})(n):le(54877,{filter:n})}function F_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function If(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ct.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class U_{constructor(e){this.yt=e}}function j_(n){const e=x_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ja(e,e.limit,"L"):e}/**
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
 */class q_{constructor(){this.Cn=new B_}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(rr.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class B_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ze(Me.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Me.comparator)).toArray()}}/**
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
 */const ll={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Af=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Af,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class Ai{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ai(0)}static cr(){return new Ai(-1)}}/**
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
 */const hl="LruGarbageCollector",$_=1048576;function fl([n,e],[t,r]){const i=Ce(n,t);return i===0?Ce(e,r):i}class H_{constructor(e){this.Ir=e,this.buffer=new Ze(fl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();fl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(hl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Di(t)?re(hl,"Ignoring IndexedDB error during garbage collection: ",t):await ki(t)}await this.Vr(3e5)}))}}class W_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Go.ce);const r=new H_(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(ll)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ll):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,E;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),i=this.params.maximumSequenceNumbersToCollect):i=k,c=Date.now(),this.nthSequenceNumber(e,i)))).next((k=>(r=k,p=Date.now(),this.removeTargets(e,r,t)))).next((k=>(a=k,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((k=>(E=Date.now(),ui()<=Se.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${k} documents in `+(E-_)+`ms
Total Duration: ${E-I}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:k}))))}}function G_(n,e){return new W_(n,e)}/**
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
 */class K_{constructor(){this.changes=new Vr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Q_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class X_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&ls(r.mutation,i,zt.empty(),je.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Re()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Re()){const i=br();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=ns();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=br();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Re())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=Vn();const c=cs(),p=(function(){return cs()})();return t.forEach(((_,E)=>{const I=r.get(E.key);i.has(E.key)&&(I===void 0||I.mutation instanceof Or)?a=a.insert(E.key,E):I!==void 0?(c.set(E.key,I.mutation.getFieldMask()),ls(I.mutation,E,I.mutation.getFieldMask(),je.now())):c.set(E.key,zt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((E,I)=>c.set(E,I))),t.forEach(((E,I)=>p.set(E,new Q_(I,c.get(E)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=cs();let i=new qe(((c,p)=>c-p)),a=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const E=t.get(_);if(E===null)return;let I=r.get(_)||zt.empty();I=p.applyToLocalView(E,I),r.set(_,I);const k=(i.get(p.batchId)||Re()).add(_);i=i.insert(p.batchId,k)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),E=_.key,I=_.value,k=of();I.forEach((V=>{if(!a.has(V)){const G=ff(t.get(V),r.get(V));G!==null&&k.set(V,G),a=a.add(V)}})),c.push(this.documentOverlayCache.saveOverlays(e,E,k))}return W.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ef(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):W.resolve(br());let p=ds,_=a;return c.next((E=>W.forEach(E,((I,k)=>(p<k.largestBatchId&&(p=k.largestBatchId),a.get(I)?W.resolve():this.remoteDocumentCache.getEntry(e,I).next((V=>{_=_.insert(I,V)}))))).next((()=>this.populateOverlays(e,E,a))).next((()=>this.computeViews(e,_,E,Re()))).next((I=>({batchId:p,changes:sf(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((r=>{let i=ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=ns();return this.indexManager.getCollectionParents(e,a).next((p=>W.forEach(p,(_=>{const E=(function(k,V){return new Cs(V,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,E,r,i).next((I=>{I.forEach(((k,V)=>{c=c.insert(k,V)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,E)=>{const I=E.getKey();c.get(I)===null&&(c=c.insert(I,dt.newInvalidDocument(I)))}));let p=ns();return c.forEach(((_,E)=>{const I=a.get(_);I!==void 0&&ls(I.mutation,E,zt.empty(),je.now()),Yo(t,E)&&(p=p.insert(_,E))})),p}))}}/**
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
 */class Y_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:j_(i.bundledQuery),readTime:ln(i.readTime)}})(t)),W.resolve()}}/**
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
 */class J_{constructor(){this.overlays=new qe(oe.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=br();return W.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),W.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const i=br(),a=t.length+1,c=new oe(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,E=_.getKey();if(!t.isPrefixOf(E.path))break;E.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return W.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new qe(((E,I)=>E-I));const c=this.overlays.getIterator();for(;c.hasNext();){const E=c.getNext().value;if(E.getKey().getCollectionGroup()===t&&E.largestBatchId>r){let I=a.get(E.largestBatchId);I===null&&(I=br(),a=a.insert(E.largestBatchId,I)),I.set(E.getKey(),E)}}const p=br(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((E,I)=>p.set(E,I))),!(p.size()>=i)););return W.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new m_(t,r));let a=this.qr.get(t);a===void 0&&(a=Re(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
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
 */class Z_{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Nu{constructor(){this.Qr=new Ze(rt.$r),this.Ur=new Ze(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new rt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new rt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new oe(new Me([])),r=new rt(t,e),i=new rt(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new Me([])),r=new rt(t,e),i=new rt(t,e+1);let a=Re();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new rt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
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
 */class ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(rt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new g_(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new rt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Tu:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new rt(t,0),i=new rt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(Ce);return t.forEach((i=>{const a=new rt(i,0),c=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;oe.isDocumentKey(a)||(a=a.child(""));const c=new rt(new oe(a),0);let p=new Ze(Ce);return this.Zr.forEachWhile((_=>{const E=_.key.path;return!!r.isPrefixOf(E)&&(E.length===i&&(p=p.add(_.Yr)),!0)}),c),W.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(t.mutations,(i=>{const a=new rt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new rt(t,0),i=this.Zr.firstAfterOrEqual(r);return W.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tv{constructor(e){this.ri=e,this.docs=(function(){return new qe(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Vn();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():dt.newInvalidDocument(i))})),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Vn();const c=t.path,p=new oe(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:E,value:{document:I}}=_.getNext();if(!c.isPrefixOf(E.path))break;E.path.length>c.length+1||Py(Ry(I),r)<=0||(i.has(I.key)||Yo(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,r,i){le(9500)}ii(e,t){return W.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new nv(this)}getSize(e){return W.resolve(this.size)}}class nv extends K_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class rv{constructor(e){this.persistence=e,this.si=new Vr((t=>Au(t)),bu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Nu,this.targetCount=0,this.ai=Ai.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ai(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),W.waitFor(a).next((()=>i))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
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
 */class bf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Go(0),this.li=!1,this.li=!0,this.hi=new Z_,this.referenceDelegate=e(this),this.Pi=new rv(this),this.indexManager=new q_,this.remoteDocumentCache=(function(i){return new tv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new U_(t),this.Ii=new Y_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new J_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new ev(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new iv(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return W.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class iv extends Dy{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Ri=new Nu,this.Vi=null}static mi(e){return new xu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(r=>{const i=oe.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Fo{constructor(e,t){this.persistence=e,this.pi=new Vr((r=>Vy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=G_(this,t)}static mi(e,t){return new Fo(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?W.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yo(e.data.value)),t}br(e,t,r){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return W.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Re(),i=Re();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Vu(e,t.fromCache,r,i)}}/**
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
 */class sv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ov{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Ld()?8:Ny(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new sv;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(ui()<=Se.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ci(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ui()<=Se.DEBUG&&re("QueryEngine","Query:",ci(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ui()<=Se.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ci(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):W.resolve())}ys(e,t){if(el(t))return W.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ja(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Re(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const E=this.Ds(t,p);return this.Cs(t,E,c,_.readTime)?this.ys(e,Ja(t,null,"F")):this.vs(e,E,t,_)}))))})))))}ws(e,t,r,i){return el(t)||i.isEqual(pe.min())?W.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?W.resolve(null):(ui()<=Se.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ci(t)),this.vs(e,c,t,Cy(i,ds)).next((p=>p)))}))}Ds(e,t){let r=new Ze(nf(e));return t.forEach(((i,a)=>{Yo(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return ui()<=Se.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ci(t)),this.ps.getDocumentsMatchingQuery(e,t,rr.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
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
 */const Ou="LocalStore",av=3e8;class uv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new qe(Ce),this.xs=new Vr((a=>Au(a)),bu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function cv(n,e,t,r){return new uv(n,e,t,r)}async function Sf(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Re();for(const E of i){c.push(E.batchId);for(const I of E.mutations)_=_.add(I.key)}for(const E of a){p.push(E.batchId);for(const I of E.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((E=>({Ls:E,removedBatchIds:c,addedBatchIds:p})))}))}))}function lv(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,E,I){const k=E.batch,V=k.keys();let G=W.resolve();return V.forEach(($=>{G=G.next((()=>I.getEntry(_,$))).next((K=>{const Y=E.docVersions.get($);Ne(Y!==null,48541),K.version.compareTo(Y)<0&&(k.applyToRemoteDocument(K,E),K.isValidDocument()&&(K.setReadTime(E.commitVersion),I.addEntry(K)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(_,k)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Re();for(let E=0;E<p.mutationResults.length;++E)p.mutationResults[E].transformResults.length>0&&(_=_.add(p.batch.mutations[E].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Cf(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function hv(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,k)=>{const V=i.get(k);if(!V)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,k).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,k))));let G=V.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(k)!==null?G=G.withResumeToken(ct.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(I.resumeToken,r)),i=i.insert(k,G),(function(K,Y,J){return K.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=av?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(V,G,I)&&p.push(t.Pi.updateTargetData(a,G))}));let _=Vn(),E=Re();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(fv(a,c,e.documentUpdates).next((I=>{_=I.ks,E=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((k=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return W.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,E))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function fv(n,e,t){let r=Re(),i=Re();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=Vn();return t.forEach(((p,_)=>{const E=a.get(p);_.isFoundDocument()!==E.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!E.isValidDocument()||_.version.compareTo(E.version)>0||_.version.compareTo(E.version)===0&&E.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(Ou,"Ignoring outdated watch update for ",p,". Current version:",E.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function dv(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Tu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function pv(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,W.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Xn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function ru(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Di(c))throw c;re(Ou,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function dl(n,e,t){const r=ge(n);let i=pe.min(),a=Re();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,E,I){const k=ge(_),V=k.xs.get(I);return V!==void 0?W.resolve(k.Ms.get(V)):k.Pi.getTargetData(E,I)})(r,c,un(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Re()))).next((p=>(gv(r,Zy(e),p),{documents:p,Qs:a})))))}function gv(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class pl{constructor(){this.activeTargetIds=s_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mv{constructor(){this.Mo=new pl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new pl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yv{Oo(e){}shutdown(){}}/**
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
 */const gl="ConnectivityMonitor";class ml{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(gl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(gl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let co=null;function iu(){return co===null?co=(function(){return 268435456+Math.round(2147483648*Math.random())})():co++,"0x"+co.toString(16)}/**
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
 */const Va="RestConnection",_v={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===No?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=iu(),p=this.zo(e,t.toUriEncodedString());re(Va,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:E}=new URL(p),I=Si(E);return this.Jo(e,p,_,r,I).then((k=>(re(Va,`Received RPC '${e}' ${c}: `,k),k)),(k=>{throw Ei(Va,`RPC '${e}' ${c} failed with error: `,k,"url: ",p,"request:",r),k}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Pi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=_v[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Ev{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ht="WebChannelConnection";class Tv extends vv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=iu();return new Promise(((p,_)=>{const E=new Ph;E.setWithCredentials(!0),E.listenOnce(kh.COMPLETE,(()=>{try{switch(E.getLastErrorCode()){case mo.NO_ERROR:const k=E.getResponseJson();re(ht,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(k)),p(k);break;case mo.TIMEOUT:re(ht,`RPC '${e}' ${c} timed out`),_(new ne(z.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const V=E.getStatus();if(re(ht,`RPC '${e}' ${c} failed with status:`,V,"response text:",E.getResponseText()),V>0){let G=E.getResponseJson();Array.isArray(G)&&(G=G[0]);const $=G?.error;if($&&$.status&&$.message){const K=(function(J){const ye=J.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(ye)>=0?ye:z.UNKNOWN})($.status);_(new ne(K,$.message))}else _(new ne(z.UNKNOWN,"Server responded with status "+E.getStatus()))}else _(new ne(z.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:c,h_:E.getLastErrorCode(),P_:E.getLastError()})}}finally{re(ht,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ht,`RPC '${e}' ${c} sending request:`,i),E.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=iu(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=xh(),p=Nh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(_.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");re(ht,`Creating RPC '${e}' stream ${i}: ${I}`,_);const k=c.createWebChannel(I,_);this.I_(k);let V=!1,G=!1;const $=new Ev({Yo:Y=>{G?re(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(V||(re(ht,`Opening RPC '${e}' stream ${i} transport.`),k.open(),V=!0),re(ht,`RPC '${e}' stream ${i} sending:`,Y),k.send(Y))},Zo:()=>k.close()}),K=(Y,J,ye)=>{Y.listen(J,(_e=>{try{ye(_e)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return K(k,ts.EventType.OPEN,(()=>{G||(re(ht,`RPC '${e}' stream ${i} transport opened.`),$.o_())})),K(k,ts.EventType.CLOSE,(()=>{G||(G=!0,re(ht,`RPC '${e}' stream ${i} transport closed`),$.a_(),this.E_(k))})),K(k,ts.EventType.ERROR,(Y=>{G||(G=!0,Ei(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),$.a_(new ne(z.UNAVAILABLE,"The operation could not be completed")))})),K(k,ts.EventType.MESSAGE,(Y=>{if(!G){const J=Y.data[0];Ne(!!J,16349);const ye=J,_e=ye?.error||ye[0]?.error;if(_e){re(ht,`RPC '${e}' stream ${i} received error:`,_e);const xe=_e.status;let wt=(function(C){const S=Ke[C];if(S!==void 0)return pf(S)})(xe),ze=_e.message;wt===void 0&&(wt=z.INTERNAL,ze="Unknown error status: "+xe+" with message "+_e.message),G=!0,$.a_(new ne(wt,ze)),k.close()}else re(ht,`RPC '${e}' stream ${i} received:`,J),$.u_(J)}})),K(p,Dh.STAT_EVENT,(Y=>{Y.stat===za.PROXY?re(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===za.NOPROXY&&re(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Oa(){return typeof document<"u"?document:null}/**
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
 */function ta(n){return new b_(n,!0)}/**
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
 */class Rf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const yl="PersistentStream";class Pf{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(xn(t.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ne(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(yl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(yl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wv extends Pf{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=R_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?ln(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=nu(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=Xa(_)?{documents:D_(a,_)}:{query:N_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=yf(a,c.resumeToken);const E=Za(a,c.expectedCount);E!==null&&(p.expectedCount=E)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=Mo(a,c.snapshotVersion.toTimestamp());const E=Za(a,c.expectedCount);E!==null&&(p.expectedCount=E)}return p})(this.serializer,e);const r=V_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=nu(this.serializer),t.removeTarget=e,this.q_(t)}}class Iv extends Pf{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=k_(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=nu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>P_(this.serializer,r)))};this.q_(t)}}/**
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
 */class Av{}class bv extends Av{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,eu(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(z.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,eu(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ne(z.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Sv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xn(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Nr="RemoteStore";class Cv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Lr(this)&&(re(Nr,"Restarting streams for network reachability change."),await(async function(_){const E=ge(_);E.Ea.add(4),await ks(E),E.Ra.set("Unknown"),E.Ea.delete(4),await na(E)})(this))}))})),this.Ra=new Sv(r,i)}}async function na(n){if(Lr(n))for(const e of n.da)await e(!0)}async function ks(n){for(const e of n.da)await e(!1)}function kf(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Uu(t)?Fu(t):Ni(t).O_()&&Mu(t,e))}function Lu(n,e){const t=ge(n),r=Ni(t);t.Ia.delete(e),r.O_()&&Df(t,e),t.Ia.size===0&&(r.O_()?r.L_():Lr(t)&&t.Ra.set("Unknown"))}function Mu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ni(n).Y_(e)}function Df(n,e){n.Va.Ue(e),Ni(n).Z_(e)}function Fu(n){n.Va=new T_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ni(n).start(),n.Ra.ua()}function Uu(n){return Lr(n)&&!Ni(n).x_()&&n.Ia.size>0}function Lr(n){return ge(n).Ea.size===0}function Nf(n){n.Va=void 0}async function Rv(n){n.Ra.set("Online")}async function Pv(n){n.Ia.forEach(((e,t)=>{Mu(n,e)}))}async function kv(n,e){Nf(n),Uu(n)?(n.Ra.ha(e),Fu(n)):n.Ra.set("Unknown")}async function Dv(n,e,t){if(n.Ra.set("Online"),e instanceof mf&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(n,r)}else if(e instanceof Eo?n.Va.Ze(e):e instanceof gf?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await Cf(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(E);I&&a.Ia.set(E,I.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,E)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ct.EMPTY_BYTE_STRING,I.snapshotVersion)),Df(a,_);const k=new Xn(I.target,_,E,I.sequenceNumber);Mu(a,k)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Nr,"Failed to raise snapshot:",r),await Uo(n,r)}}async function Uo(n,e,t){if(!Di(e))throw e;n.Ea.add(1),await ks(n),n.Ra.set("Offline"),t||(t=()=>Cf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Nr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await na(n)}))}function xf(n,e){return e().catch((t=>Uo(n,t,e)))}async function ra(n){const e=ge(n),t=ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Tu;for(;Nv(e);)try{const i=await dv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,xv(e,i)}catch(i){await Uo(e,i)}Vf(e)&&Of(e)}function Nv(n){return Lr(n)&&n.Ta.length<10}function xv(n,e){n.Ta.push(e);const t=ar(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Vf(n){return Lr(n)&&!ar(n).x_()&&n.Ta.length>0}function Of(n){ar(n).start()}async function Vv(n){ar(n).ra()}async function Ov(n){const e=ar(n);for(const t of n.Ta)e.ea(t.mutations)}async function Lv(n,e,t){const r=n.Ta.shift(),i=Pu.from(r,e,t);await xf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ra(n)}async function Mv(n,e){e&&ar(n).X_&&await(async function(r,i){if((function(c){return __(c)&&c!==z.ABORTED})(i.code)){const a=r.Ta.shift();ar(r).B_(),await xf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await ra(r)}})(n,e),Vf(n)&&Of(n)}async function _l(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(Nr,"RemoteStore received new credentials");const r=Lr(t);t.Ea.add(3),await ks(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await na(t)}async function Fv(n,e){const t=ge(n);e?(t.Ea.delete(2),await na(t)):e||(t.Ea.add(2),await ks(t),t.Ra.set("Unknown"))}function Ni(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new wv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Rv.bind(null,n),t_:Pv.bind(null,n),r_:kv.bind(null,n),H_:Dv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Uu(n)?Fu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Nf(n))}))),n.ma}function ar(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new Iv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Vv.bind(null,n),r_:Mv.bind(null,n),ta:Ov.bind(null,n),na:Lv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ra(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Nr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ju{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new ju(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(xn("AsyncQueue",`${e}: ${n}`),Di(n))return new ne(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||oe.comparator(t.key,r.key):(t,r)=>oe.comparator(t.key,r.key),this.keyedMap=ns(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class vl{constructor(){this.ga=new qe(oe.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class bi{constructor(e,t,r,i,a,c,p,_,E){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=E}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new bi(e,t,mi.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Uv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class jv{constructor(){this.queries=El(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=El(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ne(z.ABORTED,"Firestore shutting down"))}}function El(){return new Vr((n=>tf(n)),Xo)}async function Lf(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new Uv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=qu(c,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Bu(t)}async function Mf(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qv(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&Bu(t)}function Bv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function Bu(n){n.Ca.forEach((e=>{e.next()}))}var su,Tl;(Tl=su||(su={})).Ma="default",Tl.Cache="cache";class Ff{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==su.Cache}}/**
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
 */class Uf{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class $v{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=nf(e),this.tu=new mi(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new vl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,E=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,k)=>{const V=i.get(I),G=Yo(this.query,k)?k:null,$=!!V&&this.mutatedKeys.has(V.key),K=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Y=!1;V&&G?V.data.isEqual(G.data)?$!==K&&(r.track({type:3,doc:G}),Y=!0):this.su(V,G)||(r.track({type:2,doc:G}),Y=!0,(_&&this.eu(G,_)>0||E&&this.eu(G,E)<0)&&(p=!0)):!V&&G?(r.track({type:0,doc:G}),Y=!0):V&&!G&&(r.track({type:1,doc:V}),Y=!0,(_||E)&&(p=!0)),Y&&(G?(c=c.add(G),a=K?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,k)=>(function(G,$){const K=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:Y})}};return K(G)-K($)})(I.type,k.type)||this.eu(I.doc,k.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,E=_!==this.Za;return this.Za=_,c.length!==0||E?{snapshot:new bi(this.query,e.tu,a,c,e.mutatedKeys,_===0,E,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new jf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Uf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return bi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $u="SyncEngine";class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zv{constructor(e){this.key=e,this.hu=!1}}class Wv{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Vr((p=>tf(p)),Xo),this.Iu=new Map,this.Eu=new Set,this.du=new qe(oe.comparator),this.Au=new Map,this.Ru=new Nu,this.Vu={},this.mu=new Map,this.fu=Ai.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Gv(n,e,t=!0){const r=Wf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await qf(r,e,t,!0),i}async function Kv(n,e){const t=Wf(n);await qf(t,e,!0,!1)}async function qf(n,e,t,r){const i=await pv(n.localStore,un(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await Qv(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&kf(n.remoteStore,i),p}async function Qv(n,e,t,r,i){n.pu=(k,V,G)=>(async function(K,Y,J,ye){let _e=Y.view.ru(J);_e.Cs&&(_e=await dl(K.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,_e))));const xe=ye&&ye.targetChanges.get(Y.targetId),wt=ye&&ye.targetMismatches.get(Y.targetId)!=null,ze=Y.view.applyChanges(_e,K.isPrimaryClient,xe,wt);return Il(K,Y.targetId,ze.au),ze.snapshot})(n,k,V,G);const a=await dl(n.localStore,e,!0),c=new $v(e,a.Qs),p=c.ru(a.documents),_=Ps.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),E=c.applyChanges(p,n.isPrimaryClient,_);Il(n,t,E.au);const I=new Hv(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),E.snapshot}async function Xv(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!Xo(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ru(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Lu(r.remoteStore,i.targetId),ou(r,i.targetId)})).catch(ki)):(ou(r,i.targetId),await ru(r.localStore,i.targetId,!0))}async function Yv(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Lu(t.remoteStore,r.targetId))}async function Jv(n,e,t){const r=sE(n);try{const i=await(function(c,p){const _=ge(c),E=je.now(),I=p.reduce(((G,$)=>G.add($.key)),Re());let k,V;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let $=Vn(),K=Re();return _.Ns.getEntries(G,I).next((Y=>{$=Y,$.forEach(((J,ye)=>{ye.isValidDocument()||(K=K.add(J))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,$))).next((Y=>{k=Y;const J=[];for(const ye of p){const _e=d_(ye,k.get(ye.key).overlayedDocument);_e!=null&&J.push(new Or(ye.key,_e,Gh(_e.value.mapValue),cn.exists(!0)))}return _.mutationQueue.addMutationBatch(G,E,J,p)})).next((Y=>{V=Y;const J=Y.applyToLocalDocumentSet(k,K);return _.documentOverlayCache.saveOverlays(G,Y.batchId,J)}))})).then((()=>({batchId:V.batchId,changes:sf(k)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let E=c.Vu[c.currentUser.toKey()];E||(E=new qe(Ce)),E=E.insert(p,_),c.Vu[c.currentUser.toKey()]=E})(r,i.batchId,t),await Ds(r,i.changes),await ra(r.remoteStore)}catch(i){const a=qu(i,"Failed to persist write");t.reject(a)}}async function Bf(n,e){const t=ge(n);try{const r=await hv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Ne(c.hu,14607):i.removedDocuments.size>0&&(Ne(c.hu,42227),c.hu=!1))})),await Ds(t,r,e)}catch(r){await ki(r)}}function wl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let E=!1;_.queries.forEach(((I,k)=>{for(const V of k.Sa)V.va(p)&&(E=!0)})),E&&Bu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zv(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new qe(oe.comparator);c=c.insert(a,dt.newNoDocument(a,pe.min()));const p=Re().add(a),_=new ea(pe.min(),new Map,new qe(Ce),c,p);await Bf(r,_),r.du=r.du.remove(a),r.Au.delete(e),Hu(r)}else await ru(r.localStore,e,!1).then((()=>ou(r,e,t))).catch(ki)}async function eE(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await lv(t.localStore,e);Hf(t,r,null),$f(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ds(t,i)}catch(i){await ki(i)}}async function tE(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(E=>{let I;return _.mutationQueue.lookupMutationBatch(E,p).next((k=>(Ne(k!==null,37113),I=k.keys(),_.mutationQueue.removeMutationBatch(E,k)))).next((()=>_.mutationQueue.performConsistencyCheck(E))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(E,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,I))).next((()=>_.localDocuments.getDocuments(E,I)))}))})(r.localStore,e);Hf(r,e,t),$f(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ds(r,i)}catch(i){await ki(i)}}function $f(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Hf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function ou(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||zf(n,r)}))}function zf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Lu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Hu(n))}function Il(n,e,t){for(const r of t)r instanceof Uf?(n.Ru.addReference(r.key,e),nE(n,r)):r instanceof jf?(re($u,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||zf(n,r.key)):le(19791,{wu:r})}function nE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re($u,"New document in limbo: "+t),n.Eu.add(r),Hu(n))}function Hu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new oe(Me.fromString(e)),r=n.fu.next();n.Au.set(r,new zv(t)),n.du=n.du.insert(t,r),kf(n.remoteStore,new Xn(un(Su(t.path)),r,"TargetPurposeLimboResolution",Go.ce))}}async function Ds(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((E=>{if((E||t)&&r.isPrimaryClient){const I=E?!E.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(E){i.push(E);const I=Vu.As(_.targetId,E);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,E){const I=ge(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>W.forEach(E,(V=>W.forEach(V.Es,(G=>I.persistence.referenceDelegate.addReference(k,V.targetId,G))).next((()=>W.forEach(V.ds,(G=>I.persistence.referenceDelegate.removeReference(k,V.targetId,G)))))))))}catch(k){if(!Di(k))throw k;re(Ou,"Failed to update sequence numbers: "+k)}for(const k of E){const V=k.targetId;if(!k.fromCache){const G=I.Ms.get(V),$=G.snapshotVersion,K=G.withLastLimboFreeSnapshotVersion($);I.Ms=I.Ms.insert(V,K)}}})(r.localStore,a))}async function rE(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re($u,"User change. New user:",e.toKey());const r=await Sf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ne(z.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ds(t,r.Ls)}}function iE(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Re().add(r.key);{let i=Re();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Wf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zv.bind(null,e),e.Pu.H_=qv.bind(null,e.eventManager),e.Pu.yu=Bv.bind(null,e.eventManager),e}function sE(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tE.bind(null,e),e}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ta(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return cv(this.persistence,new ov,e.initialUser,this.serializer)}Cu(e){return new bf(xu.mi,this.serializer)}Du(e){return new mv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class oE extends jo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ne(this.persistence.referenceDelegate instanceof Fo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new bf((r=>Fo.mi(r,t)),this.serializer)}}class au{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rE.bind(null,this.syncEngine),await Fv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jv})()}createDatastore(e){const t=ta(e.databaseInfo.databaseId),r=(function(a){return new Tv(a)})(e.databaseInfo);return(function(a,c,p,_){return new bv(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new Cv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>wl(this.syncEngine,t,0)),(function(){return ml.v()?new ml:new yv})())}createSyncEngine(e,t){return(function(i,a,c,p,_,E,I){const k=new Wv(i,a,c,p,_,E);return I&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(Nr,"RemoteStore shutting down."),r.Ea.add(5),await ks(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}au.provider={build:()=>new au};/**
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
 */class Gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ur="FirestoreClient";class aE{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(ur,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(ur,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function La(n,e){n.asyncQueue.verifyOperationInProgress(),re(ur,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Sf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Al(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uE(n);re(ur,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>_l(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>_l(e.remoteStore,i))),n._onlineComponents=e}async function uE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ur,"Using user provided OfflineComponentProvider");try{await La(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Ei("Error using user provided cache. Falling back to memory cache: "+t),await La(n,new jo)}}else re(ur,"Using default OfflineComponentProvider"),await La(n,new oE(void 0));return n._offlineComponents}async function Kf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ur,"Using user provided OnlineComponentProvider"),await Al(n,n._uninitializedComponentsProvider._online)):(re(ur,"Using default OnlineComponentProvider"),await Al(n,new au))),n._onlineComponents}function cE(n){return Kf(n).then((e=>e.syncEngine))}async function Qf(n){const e=await Kf(n),t=e.eventManager;return t.onListen=Gv.bind(null,e.syncEngine),t.onUnlisten=Xv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yv.bind(null,e.syncEngine),t}function lE(n,e,t={}){const r=new kn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,E){const I=new Gf({next:V=>{I.Nu(),c.enqueueAndForget((()=>Mf(a,k)));const G=V.docs.has(p);!G&&V.fromCache?E.reject(new ne(z.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&V.fromCache&&_&&_.source==="server"?E.reject(new ne(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):E.resolve(V)},error:V=>E.reject(V)}),k=new Ff(Su(p.path),I,{includeMetadataChanges:!0,qa:!0});return Lf(a,k)})(await Qf(n),n.asyncQueue,e,t,r))),r.promise}function hE(n,e,t={}){const r=new kn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,E){const I=new Gf({next:V=>{I.Nu(),c.enqueueAndForget((()=>Mf(a,k))),V.fromCache&&_.source==="server"?E.reject(new ne(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):E.resolve(V)},error:V=>E.reject(V)}),k=new Ff(p,I,{includeMetadataChanges:!0,qa:!0});return Lf(a,k)})(await Qf(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Xf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bl=new Map;/**
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
 */const Yf="firestore.googleapis.com",Sl=!0;class Cl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yf,this.ssl=Sl}else this.host=e.host,this.ssl=e.ssl??Sl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Af;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$_)throw new ne(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new my;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=bl.get(t);r&&(re("ComponentProvider","Removing Datastore"),bl.delete(t),r.terminate())})(this),Promise.resolve()}}function fE(n,e,t,r={}){n=nr(n,ia);const i=Si(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(Ul(`https://${p}`),jl("Firestore",!0)),a.host!==Yf&&a.host!==p&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!Cr(_,c)&&(n._setSettings(_),r.mockUserToken)){let E,I;if(typeof r.mockUserToken=="string")E=r.mockUserToken,I=ft.MOCK_USER;else{E=Cd(r.mockUserToken,n._app?.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new ne(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ft(k)}n._authCredentials=new yy(new Oh(E,I))}}/**
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
 */class xi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ss(t,Ye._jsonSchema))return new Ye(e,r||null,new oe(Me.fromString(t.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Xe("string",Ye._jsonSchemaVersion),referencePath:Xe("string")};class tr extends xi{constructor(e,t,r){super(e,t,Su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new oe(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function $E(n,e,...t){if(n=ut(n),Lh("collection","path",e),n instanceof ia){const r=Me.fromString(e,...t);return jc(r),new tr(n,null,r)}{if(!(n instanceof Ye||n instanceof tr))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return jc(r),new tr(n.firestore,null,r)}}function HE(n,e,...t){if(n=ut(n),arguments.length===1&&(e=Eu.newId()),Lh("doc","path",e),n instanceof ia){const r=Me.fromString(e,...t);return Uc(r),new Ye(n,null,new oe(r))}{if(!(n instanceof Ye||n instanceof tr))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return Uc(r),new Ye(n.firestore,n instanceof tr?n.converter:null,new oe(r))}}/**
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
 */const Rl="AsyncQueue";class Pl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rf(this,"async_queue_retry"),this._c=()=>{const r=Oa();r&&re(Rl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Oa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Oa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new kn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Di(e))throw e;re(Rl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,xn("INTERNAL UNHANDLED ERROR: ",kl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=ju.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&le(47125,{Pc:kl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function kl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ns extends ia{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Pl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pl(e),this._firestoreClient=void 0,await e}}}function dE(n,e){const t=typeof n=="object"?n:Hl(),r=typeof n=="string"?n:No,i=lu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=bd("firestore");a&&fE(i,...a)}return i}function zu(n){if(n._terminated)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pE(n),n._firestoreClient}function pE(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new My(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Xf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new aE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
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
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(ct.fromBase64String(e))}catch(t){throw new ne(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ut(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ss(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:Xe("string",Ut._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class Wu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gu{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Ss(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Xe("string",hn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
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
 */class fn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ss(e,fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new fn(e.vectorValues);throw new ne(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fn._jsonSchemaVersion="firestore/vectorValue/1.0",fn._jsonSchema={type:Xe("string",fn._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const gE=/^__.*__$/;class mE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rs(e,this.data,t,this.fieldTransforms)}}function Jf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:n})}}class Ku{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ku({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return qo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Jf(this.Ac)&&gE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ta(e)}Cc(e,t,r,i=!1){return new Ku({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zf(n){const e=n._freezeSettings(),t=ta(n._databaseId);return new yE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _E(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);nd("Data must be an object, but it was:",c,r);const p=ed(r,c);let _,E;if(a.merge)_=new zt(c.fieldMask),E=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const k of a.mergeFields){const V=EE(e,k,t);if(!c.contains(V))throw new ne(z.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);wE(I,V)||I.push(V)}_=new zt(I),E=c.fieldTransforms.filter((k=>_.covers(k.field)))}else _=null,E=c.fieldTransforms;return new mE(new Ft(p),_,E)}class Qu extends Gu{_toFieldTransform(e){return new c_(e.path,new ys)}isEqual(e){return e instanceof Qu}}function vE(n,e,t,r=!1){return Xu(t,n.Cc(r?4:3,e))}function Xu(n,e){if(td(n=ut(n)))return nd("Unsupported field value:",e,n),ed(n,e);if(n instanceof Gu)return(function(r,i){if(!Jf(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Xu(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return o_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=je.fromDate(r);return{timestampValue:Mo(i.serializer,a)}}if(r instanceof je){const a=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(i.serializer,a)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:yf(i.serializer,r._byteString)};if(r instanceof Ye){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Du(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fn)return(function(c,p){return{mapValue:{fields:{[zh]:{stringValue:Wh},[xo]:{arrayValue:{values:c.toArray().map((E=>{if(typeof E!="number")throw p.Sc("VectorValues must only contain numeric values.");return Cu(p.serializer,E)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Wo(r)}`)})(n,e)}function ed(n,e){const t={};return Uh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(n,((r,i)=>{const a=Xu(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function td(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof hn||n instanceof Ut||n instanceof Ye||n instanceof Gu||n instanceof fn)}function nd(n,e,t){if(!td(t)||!Mh(t)){const r=Wo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function EE(n,e,t){if((e=ut(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return rd(n,e);throw qo("Field path arguments must be of type string or ",n,!1,void 0,t)}const TE=new RegExp("[~\\*/\\[\\]]");function rd(n,e,t){if(e.search(TE)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wu(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qo(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ne(z.INVALID_ARGUMENT,p+n+_)}function wE(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class id{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IE extends id{data(){return super.data()}}function Yu(n,e){return typeof e=="string"?rd(n,e):e instanceof Wu?e._internalPath:e._delegate._internalPath}/**
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
 */function AE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ju{}class bE extends Ju{}function zE(n,e,...t){let r=[];e instanceof Ju&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof Zu)).length,p=a.filter((_=>_ instanceof sa)).length;if(c>1||c>0&&p>0)throw new ne(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class sa extends bE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sa(e,t,r)}_apply(e){const t=this._parse(e);return sd(e._query,t),new xi(e.firestore,e.converter,Ya(e._query,t))}_parse(e){const t=Zf(e.firestore);return(function(a,c,p,_,E,I,k){let V;if(E.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ne(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Nl(k,I);const $=[];for(const K of k)$.push(Dl(_,a,K));V={arrayValue:{values:$}}}else V=Dl(_,a,k)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Nl(k,I),V=vE(p,c,k,I==="in"||I==="not-in");return Qe.create(E,I,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function WE(n,e,t){const r=e,i=Yu("where",n);return sa._create(i,r,t)}class Zu extends Ju{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)sd(c,_),c=Ya(c,_)})(e._query,t),new xi(e.firestore,e.converter,Ya(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dl(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new ne(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ef(e)&&t.indexOf("/")!==-1)throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Me.fromString(t));if(!oe.isDocumentKey(r))throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kc(n,new oe(r))}if(t instanceof Ye)return Kc(n,t._key);throw new ne(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wo(t)}.`)}function Nl(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sd(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class SE{convertValue(e,t="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[xo].arrayValue?.values?.map((r=>He(r.doubleValue)));return new fn(t)}convertGeoPoint(e){return new hn(He(e.latitude),He(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const t=ir(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Me.fromString(e);Ne(If(r),9688,{name:e});const i=new gs(r.get(1),r.get(3)),a=new oe(r.popFirst(5));return i.isEqual(t)||xn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function CE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends id{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sr._jsonSchema={type:Xe("string",Sr._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class To extends Sr{data(e={}){return super.data(e)}}class yi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new To(this._firestore,this._userDataWriter,r.key,r,new is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new To(i._firestore,i._userDataWriter,p.doc.key,p.doc,new is(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new To(i._firestore,i._userDataWriter,p.doc.key,p.doc,new is(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let E=-1,I=-1;return p.type!==0&&(E=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:RE(p.type),doc:_,oldIndex:E,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Eu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:n})}}/**
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
 */function GE(n){n=nr(n,Ye);const e=nr(n.firestore,Ns);return lE(zu(e),n._key).then((t=>PE(e,n,t)))}yi._jsonSchemaVersion="firestore/querySnapshot/1.0",yi._jsonSchema={type:Xe("string",yi._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class od extends SE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function KE(n){n=nr(n,xi);const e=nr(n.firestore,Ns),t=zu(e),r=new od(e);return AE(n._query),hE(t,n._query).then((i=>new yi(e,r,n,i)))}function QE(n,e,t){n=nr(n,Ye);const r=nr(n.firestore,Ns),i=CE(n.converter,e,t);return ad(r,[_E(Zf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,cn.none())])}function XE(n){return ad(nr(n.firestore,Ns),[new Ru(n._key,cn.none())])}function ad(n,e){return(function(r,i){const a=new kn;return r.asyncQueue.enqueueAndForget((async()=>Jv(await cE(r),i,a))),a.promise})(zu(n),e)}function PE(n,e,t){const r=t.docs.get(e._key),i=new od(n);return new Sr(n,i,e._key,r,new is(t.hasPendingWrites,t.fromCache),e.converter)}function YE(){return new Qu("serverTimestamp")}(function(e,t=!0){(function(i){Pi=i})(Ci),_i(new Rr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Ns(new _y(r.getProvider("auth-internal")),new Ty(c,r.getProvider("app-check-internal")),(function(E,I){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new ne(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(E.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Zn(Oc,Lc,e),Zn(Oc,Lc,"esm2020")})();const kE={apiKey:"AIzaSyBLaSSCbPd47FOMiIllexWxHr8Z7pOPC_c",authDomain:"retodelmes.firebaseapp.com",projectId:"retodelmes",storageBucket:"retodelmes.firebasestorage.app",messagingSenderId:"1023316527945",appId:"1:1023316527945:web:51b0c91b820ac730862898"},ud=$l(kE),JE=py(ud),ZE=dE(ud);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=Te(r).data("tema").split("|");Te("html").attr("data-theme",i),Te('meta[name="theme-color"]').length?Te('meta[name="theme-color"]').attr("content",a):Te("<meta>",{name:"theme-color",content:a}).appendTo("head"),DE("wiTema",`${i}|${a}`,720),Te(".mtha").removeClass("mtha"),Te(r).addClass("mtha")},t=()=>{Te(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=NE("wiTema"),i=Te(`[data-tema="${r}"]`)[0]||Te(".mtha")[0]||Te("[data-tema]").first()[0];i&&e(i),Te(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return Te(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const eT=(n,e)=>{Te(n).addClass(e).siblings().removeClass(e)};(()=>{const n=()=>{const e=new Date;Te(".wty").text(e.getFullYear()),Te(".wtu").text(e.toLocaleString()),Te(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),Te(".abwc").toggleClass("dpn")})};return Te(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})();const tT=n=>{Te("#loading-style").length||Te("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#ffd105,#1e3a8a,#ffd105);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),Te(".loading").length||Te("body").append('<div class="loading" style="display:none"></div>'),Te(".loading").toggle(!!n)},nT=n=>{const e=n==="smiletop"?"smiletop.html":"smile.html";window.location.href=new URL(e,window.location.href).toString()};function rT(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};Te("#notificationsContainer").length||Te("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=Te(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);Te("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const iT=n=>{const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)},sT=(n,e="success")=>{Te(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=Te(`
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
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function DE(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function NE(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),xE(n),null}}function xE(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function VE(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,c=a?"top":t;if(Te("#witip-styles").length||Te('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return Te(n).each((wt,ze)=>VE(ze,e,t,r)),Te(n);const p=Te(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),Te(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),E=Te("<div>",{class:`witip ${c} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&E.css("background-color",`var(${i[a]})`),Te("body").append(E);const{left:I,top:k,right:V,bottom:G,width:$,height:K}=p[0].getBoundingClientRect(),Y=E.outerWidth(),J=E.outerHeight(),ye={top:{x:I+$/2-Y/2,y:k-J-8},bottom:{x:I+$/2-Y/2,y:G+8},left:{x:I-Y-8,y:k+K/2-J/2},right:{x:V+8,y:k+K/2-J/2}};let{x:_e,y:xe}=ye[c];return _e=Math.max(8,Math.min(_e,window.innerWidth-Y-8)),xe=Math.max(8,Math.min(xe,window.innerHeight-J-8)),E.css({left:_e,top:xe}),p.data("witip-timer",setTimeout(()=>{E.addClass("show"),r>0&&setTimeout(()=>{E.removeClass("show"),setTimeout(()=>E.remove(),200)},r)},10)),p}const oT=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),c=t.getMonth(),p=t.getDate();return(i<c||i===c&&a<p)&&r--,r};export{Te as $,sT as M,rT as N,ZE as a,KE as b,$E as c,HE as d,WE as e,LE as f,GE as g,JE as h,QE as i,YE as j,iT as k,DE as l,nT as m,tT as n,ME as o,OE as p,zE as q,oT as r,FE as s,jE as t,UE as u,qE as v,VE as w,eT as x,XE as y,NE as z};
