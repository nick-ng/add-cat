import{h as m,a as n3,b as s3,t as X,a0 as o3,r as i3,H as t3,c as q,s as L,d as H,k as B,a1 as v3,a2 as c3,f as W,i as l3,g as x3,a3 as J,A as y3,e as z,N as b3,a4 as U,a5 as j,j as Q,p as S3,a6 as F,a7 as R,a8 as Z,a9 as N,aa as w3,ab as D3,ac as u3,ad as d3,ae as P3,af as V3,ag as _3,ah as r3,V as p3,ai as m3,aj as O3,ak as E3,al as A3,am as k3,an as g3,ao as B3}from"./Cvb_x1sA.js";function I3(a,h,r){for(var f=a.items,e=[],s=h.length,o=0;o<s;o++)u3(h[o].e,e,!0);var l=s>0&&e.length===0&&r!==null;if(l){var u=r.parentNode;d3(u),u.append(r),f.clear(),_(a,h[0].prev,h[s-1].next)}P3(e,()=>{for(var D=0;D<s;D++){var y=h[D];l||(f.delete(y.k),_(a,y.prev,y.next)),Z(y.e,!l)}})}function $3(a,h,r,f,e,s=null){var o=a,l={flags:h,items:new Map,first:null},u=(h&r3)!==0;if(u){var D=a;o=m?L(_3(D)):D.appendChild(z())}m&&n3();var y=null,O=!1,d=new Map,E=o3(()=>{var x=r();return y3(x)?x:x==null?[]:J(x)}),i,c;function v(){T3(c,i,l,d,o,e,h,f,r),s!==null&&(i.length===0?y?Q(y):y=W(()=>s(o)):y!==null&&S3(y,()=>{y=null}))}s3(()=>{c??=V3,i=X(E);var x=i.length;if(O&&x===0)return;O=x===0;let w=!1;if(m){var P=i3(o)===t3;P!==(x===0)&&(o=q(),L(o),H(!1),w=!0)}if(m){for(var p=null,b,n=0;n<x;n++){if(B.nodeType===v3&&B.data===c3){o=B,w=!0,H(!1);break}var t=i[n],S=f(t,n);b=Y(B,l,p,null,t,S,n,e,h,r),l.items.set(S,b),p=b}x>0&&L(q())}if(m)x===0&&s&&(y=W(()=>s(o)));else if(l3()){var k=new Set,I=x3;for(n=0;n<x;n+=1){t=i[n],S=f(t,n);var A=l.items.get(S)??d.get(S);A?(h&(N|F))!==0&&h3(A,t,n,h):(b=Y(null,l,null,null,t,S,n,e,h,r,!0),d.set(S,b)),k.add(S)}for(const[V,T]of l.items)k.has(V)||I.skipped_effects.add(T.e);I.add_callback(v)}else v();w&&H(!0),X(E)}),m&&(o=B)}function T3(a,h,r,f,e,s,o,l,u){var D=(o&m3)!==0,y=(o&(N|F))!==0,O=h.length,d=r.items,E=r.first,i=E,c,v=null,x,w=[],P=[],p,b,n,t;if(D)for(t=0;t<O;t+=1)p=h[t],b=l(p,t),n=d.get(b),n!==void 0&&(n.a?.measure(),(x??=new Set).add(n));for(t=0;t<O;t+=1){if(p=h[t],b=l(p,t),n=d.get(b),n===void 0){var S=f.get(b);if(S!==void 0){f.delete(b),d.set(b,S);var k=v?v.next:i;_(r,v,S),_(r,S,k),$(S,k,e),v=S}else{var I=i?i.e.nodes_start:e;v=Y(I,r,v,v===null?r.first:v.next,p,b,t,s,o,u)}d.set(b,v),w=[],P=[],i=v.next;continue}if(y&&h3(n,p,t,o),(n.e.f&R)!==0&&(Q(n.e),D&&(n.a?.unfix(),(x??=new Set).delete(n))),n!==i){if(c!==void 0&&c.has(n)){if(w.length<P.length){var A=P[0],V;v=A.prev;var T=w[0],C=w[w.length-1];for(V=0;V<w.length;V+=1)$(w[V],A,e);for(V=0;V<P.length;V+=1)c.delete(P[V]);_(r,T.prev,C.next),_(r,v,T),_(r,C,A),i=A,v=C,t-=1,w=[],P=[]}else c.delete(n),$(n,i,e),_(r,n.prev,n.next),_(r,n,v===null?r.first:v.next),_(r,v,n),v=n;continue}for(w=[],P=[];i!==null&&i.k!==b;)(i.e.f&R)===0&&(c??=new Set).add(i),P.push(i),i=i.next;if(i===null)continue;n=i}w.push(n),v=n,i=n.next}if(i!==null||c!==void 0){for(var g=c===void 0?[]:J(c);i!==null;)(i.e.f&R)===0&&g.push(i),i=i.next;var M=g.length;if(M>0){var f3=(o&r3)!==0&&O===0?e:null;if(D){for(t=0;t<M;t+=1)g[t].a?.measure();for(t=0;t<M;t+=1)g[t].a?.fix()}I3(r,g,f3)}}D&&p3(()=>{if(x!==void 0)for(n of x)n.a?.apply()}),a.first=r.first&&r.first.e,a.last=v&&v.e;for(var e3 of f.values())Z(e3.e);f.clear()}function h3(a,h,r,f){(f&N)!==0&&j(a.v,h),(f&F)!==0?j(a.i,r):a.i=r}function Y(a,h,r,f,e,s,o,l,u,D,y){var O=(u&N)!==0,d=(u&w3)===0,E=O?d?b3(e,!1,!1):U(e):e,i=(u&F)===0?o:U(o),c={i,v:E,k:s,a:null,e:null,prev:r,next:f};try{if(a===null){var v=document.createDocumentFragment();v.append(a=z())}return c.e=W(()=>l(a,E,i,D),m),c.e.prev=r&&r.e,c.e.next=f&&f.e,r===null?y||(h.first=c):(r.next=c,r.e.next=c.e),f!==null&&(f.prev=c,f.e.prev=c.e),c}finally{}}function $(a,h,r){for(var f=a.next?a.next.e.nodes_start:r,e=h?h.e.nodes_start:r,s=a.e.nodes_start;s!==null&&s!==f;){var o=D3(s);e.before(s),s=o}}function _(a,h,r){h===null?a.first=r:(h.next=r,h.e.next=r&&r.e),r!==null&&(r.prev=h,r.e.prev=h&&h.e)}const F3=Symbol("is custom element"),N3=Symbol("is html");function W3(a){if(m){var h=!1,r=()=>{if(!h){if(h=!0,a.hasAttribute("value")){var f=a.value;G(a,"value",null),a.value=f}if(a.hasAttribute("checked")){var e=a.checked;G(a,"checked",null),a.checked=e}}};a.__on_r=r,g3(r),B3()}}function G(a,h,r,f){var e=C3(a);m&&(e[h]=a.getAttribute(h),h==="src"||h==="srcset"||h==="href"&&a.nodeName==="LINK")||e[h]!==(e[h]=r)&&(h==="loading"&&(a[O3]=r),r==null?a.removeAttribute(h):typeof r!="string"&&M3(a).includes(h)?a[h]=r:a.setAttribute(h,r))}function C3(a){return a.__attributes??={[F3]:a.nodeName.includes("-"),[N3]:a.namespaceURI===E3}}var K=new Map;function M3(a){var h=a.getAttribute("is")||a.nodeName,r=K.get(h);if(r)return r;K.set(h,r=[]);for(var f,e=a,s=Element.prototype;s!==e;){f=k3(e);for(var o in f)f[o].set&&r.push(o);e=A3(e)}return r}const L3=`"Snow Drift": {
	"hash": 3744632886,
	"x": 289,
	"y": 386,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 406,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 390,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 392,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 394,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 363,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 314,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 315,
	"y": 371,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 313,
	"y": 375,
	"r": 61440,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 314,
	"y": 374,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 313,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 316,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 316,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 313,
	"y": 366,
	"r": 64859,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 317,
	"y": 368,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 316,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 311,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 362,
	"r": 63488,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 362,
	"r": 63488,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 314,
	"y": 363,
	"r": 61440,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 384,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 319,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 321,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 322,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 320,
	"y": 366,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 319,
	"y": 363,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 291,
	"y": 380,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 289,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 383,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 386,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 384,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 295,
	"y": 363,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 362,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 360,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 303,
	"y": 360,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 302,
	"y": 384,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 305,
	"y": 384,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 359,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 311,
	"y": 359,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 314,
	"y": 360,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 318,
	"y": 360,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 387,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 379,
	"r": 28673,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 357,
	"r": 57344,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 356,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 297,
	"y": 358,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 295,
	"y": 360,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 362,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 289,
	"y": 364,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 361,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 303,
	"y": 387,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 312,
	"y": 385,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 317,
	"y": 381,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 319,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 314,
	"y": 383,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 367,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 297,
	"y": 377,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 291,
	"y": 366,
	"r": 61440,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 306,
	"y": 368,
	"r": 65066,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 363,
	"r": 49152,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 309,
	"y": 374,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 287,
	"y": 366,
	"r": 1,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 380,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 357,
	"r": 63488,
	"fv": 7
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 297,
	"y": 368,
	"r": 8436,
	"fv": 6
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 295,
	"y": 370,
	"r": 7803,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 286,
	"y": 379,
	"r": 41832,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 296,
	"y": 369,
	"r": 7850,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 289,
	"y": 376,
	"r": 7582,
	"fv": 6
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 388,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 389,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 388,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 380,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 286,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 374,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 287,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 392,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 299,
	"y": 391,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 408,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 390,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 283,
	"y": 377,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 283,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 370,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 278,
	"y": 398,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 389,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 388,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 390,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 393,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 395,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 393,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 297,
	"y": 396,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 299,
	"y": 398,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 299,
	"y": 396,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 283,
	"y": 384,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 282,
	"y": 381,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 281,
	"y": 371,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 368,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 281,
	"y": 375,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 278,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 276,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 280,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 390,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 281,
	"y": 388,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 280,
	"y": 385,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 278,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 280,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 278,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 277,
	"y": 395,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 277,
	"y": 392,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 277,
	"y": 389,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 277,
	"y": 386,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 279,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 280,
	"y": 391,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 282,
	"y": 391,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 280,
	"y": 394,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 283,
	"y": 393,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 286,
	"y": 393,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 289,
	"y": 394,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 396,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 295,
	"y": 398,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 289,
	"y": 398,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 286,
	"y": 396,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 396,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 292,
	"y": 400,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 295,
	"y": 401,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 282,
	"y": 397,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 397,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 281,
	"y": 400,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 284,
	"y": 400,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 401,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 287,
	"y": 399,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 279,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 398,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 400,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 393,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 303,
	"y": 351,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 348,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 271,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 273,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Archaeologist's Peg": {
	"hash": 2502601197,
	"x": 296,
	"y": 377,
	"r": 55296,
	"fv": 0
},
"Archaeologist's Peg": {
	"hash": 2502601197,
	"x": 294,
	"y": 379,
	"r": 38912,
	"fv": 0
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 329,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 352,
	"r": 0,
	"fv": 7
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 310,
	"y": 369,
	"r": 9516,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 300,
	"y": 365,
	"r": 5693,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 290,
	"y": 376,
	"r": 41114,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 294,
	"y": 372,
	"r": 40246,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 292,
	"y": 373,
	"r": 7962,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 297,
	"y": 369,
	"r": 38914,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 309,
	"y": 367,
	"r": 8095,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 308,
	"y": 366,
	"r": 7730,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 334,
	"y": 394,
	"r": 40537,
	"fv": 6
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 306,
	"y": 365,
	"r": 6579,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 285,
	"y": 392,
	"r": 39882,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 283,
	"y": 391,
	"r": 40960,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 282,
	"y": 390,
	"r": 40960,
	"fv": 4
},
"Broken Ornate Fence": {
	"hash": 779267337,
	"x": 281,
	"y": 388,
	"r": 42023,
	"fv": 4
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 377,
	"r": 65202,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 295,
	"y": 372,
	"r": 15009,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 370,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 375,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 326,
	"y": 372,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 306,
	"y": 387,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 386,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 308,
	"y": 385,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 309,
	"y": 383,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 311,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 313,
	"y": 381,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 378,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 291,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 290,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 375,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 371,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 294,
	"y": 405,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 302,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 370,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 306,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 303,
	"y": 382,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 297,
	"y": 386,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 303,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 318,
	"y": 370,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 302,
	"y": 379,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 305,
	"y": 381,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 296,
	"y": 383,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 305,
	"y": 371,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 367,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 362,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 381,
	"r": 63488,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 300,
	"y": 380,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 377,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 306,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 291,
	"y": 370,
	"r": 59390,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 293,
	"y": 368,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 299,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 308,
	"y": 372,
	"r": 53248,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 306,
	"y": 370,
	"r": 53248,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 366,
	"r": 57344,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 375,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 308,
	"y": 381,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 376,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 317,
	"y": 373,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 312,
	"y": 372,
	"r": 57496,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 297,
	"y": 367,
	"r": 59390,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 298,
	"y": 365,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 301,
	"y": 377,
	"r": 51198,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 304,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 285,
	"y": 387,
	"r": 64829,
	"fv": 7
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 286,
	"y": 383,
	"r": 0,
	"fv": 7
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 299,
	"y": 401,
	"r": 40439,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 303,
	"y": 398,
	"r": 38841,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 305,
	"y": 396,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 307,
	"y": 394,
	"r": 38912,
	"fv": 18
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 288,
	"y": 369,
	"r": 0,
	"fv": 7
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 322,
	"y": 378,
	"r": 34818,
	"fv": 18
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 307,
	"y": 390,
	"r": 0,
	"fv": 7
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 320,
	"y": 381,
	"r": 36864,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 309,
	"y": 392,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 390,
	"r": 38916,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 316,
	"y": 384,
	"r": 4097,
	"fv": 18
},
"Snow Drift": {
	"hash": 3744632886,
	"x": 310,
	"y": 388,
	"r": 0,
	"fv": 7
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 314,
	"y": 387,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 325,
	"y": 376,
	"r": 43006,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 327,
	"y": 375,
	"r": 43006,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 331,
	"y": 373,
	"r": 10227,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 331,
	"y": 371,
	"r": 51198,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 327,
	"y": 370,
	"r": 49152,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 323,
	"y": 373,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 324,
	"y": 369,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 322,
	"y": 376,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 325,
	"y": 365,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 403,
	"r": 45056,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 291,
	"y": 403,
	"r": 47104,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 298,
	"y": 404,
	"r": 32768,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 409,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 410,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 293,
	"y": 411,
	"r": 55296,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 290,
	"y": 407,
	"r": 22529,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 412,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 288,
	"y": 406,
	"r": 55296,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 286,
	"y": 403,
	"r": 47104,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 282,
	"y": 403,
	"r": 14337,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 278,
	"y": 401,
	"r": 20481,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 323,
	"y": 360,
	"r": 55296,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 324,
	"y": 363,
	"r": 57344,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 275,
	"y": 398,
	"r": 59390,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 274,
	"y": 394,
	"r": 63488,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 274,
	"y": 391,
	"r": 28673,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 274,
	"y": 388,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 274,
	"y": 385,
	"r": 32768,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 275,
	"y": 383,
	"r": 32768,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 275,
	"y": 381,
	"r": 32768,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 319,
	"y": 358,
	"r": 49154,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 316,
	"y": 357,
	"r": 49152,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 312,
	"y": 356,
	"r": 49152,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 308,
	"y": 355,
	"r": 49152,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 275,
	"y": 379,
	"r": 32768,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 303,
	"y": 354,
	"r": 47104,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 271,
	"y": 378,
	"r": 38918,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 274,
	"y": 375,
	"r": 38914,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 277,
	"y": 372,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 280,
	"y": 369,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 283,
	"y": 366,
	"r": 6144,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 287,
	"y": 363,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 288,
	"y": 361,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 291,
	"y": 359,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 293,
	"y": 356,
	"r": 6144,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 297,
	"y": 353,
	"r": 38914,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 299,
	"y": 354,
	"r": 47104,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 292,
	"y": 391,
	"r": 65077,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 310,
	"y": 374,
	"r": 0,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 275,
	"y": 377,
	"r": 63488,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 271,
	"y": 385,
	"r": 49152,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 269,
	"y": 384,
	"r": 49154,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 306,
	"y": 352,
	"r": 63488,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 300,
	"y": 350,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 306,
	"y": 349,
	"r": 63488,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 302,
	"y": 347,
	"r": 6144,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 306,
	"y": 346,
	"r": 0,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 306,
	"y": 343,
	"r": 36864,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 268,
	"y": 381,
	"r": 38914,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 308,
	"y": 341,
	"r": 38912,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 265,
	"y": 384,
	"r": 36864,
	"fv": 18
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 292,
	"y": 390,
	"r": 12546,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 391,
	"r": 51625,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 390,
	"r": 45238,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 293,
	"y": 389,
	"r": 15866,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 388,
	"r": 24577,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 389,
	"r": 47137,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 388,
	"r": 16385,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 380,
	"r": 51917,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 379,
	"r": 47447,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 378,
	"r": 56825,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 297,
	"y": 377,
	"r": 46896,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 293,
	"y": 389,
	"r": 58147,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 390,
	"r": 36491,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 390,
	"r": 61432,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 390,
	"r": 4180,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 294,
	"y": 390,
	"r": 63612,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 312,
	"y": 373,
	"r": 48182,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 374,
	"r": 52037,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 309,
	"y": 373,
	"r": 44266,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 310,
	"y": 372,
	"r": 15037,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 371,
	"r": 17142,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 313,
	"y": 372,
	"r": 45247,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 313,
	"y": 370,
	"r": 20423,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 314,
	"y": 371,
	"r": 47612,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 314,
	"y": 370,
	"r": 0,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 1804,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 28104,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 312,
	"y": 373,
	"r": 31018,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 34465,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 420,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 65245,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 29354,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 311,
	"y": 372,
	"r": 37139,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 391,
	"r": 16459,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 295,
	"y": 379,
	"r": 40197,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 378,
	"r": 46405,
	"fv": 5
},
"Volcanic Pebble": {
	"hash": 4263551471,
	"x": 296,
	"y": 378,
	"r": 51853,
	"fv": 5
}`,H3={x:295,y:378},Y3=(a,h=!1)=>{const r={};return[...a.matchAll(/"([\w\s]+)":\s?\{/g)].forEach(f=>{f[1]!=="doodads"&&(!h&&["Stash","Guild Stash","Waypoint","Crafting Bench","Map Device","Horticrafting Station","Heist Locker","Expedition Locker","Tane Octavius","Kirac","Sister Cassia","Einhar","Alva","Helena","Niko","Jun","The Last to Die","Lilly Roth","Relic Locker"].includes(f[1])||(r[f[1]]?r[f[1]]+=1:r[f[1]]=1))}),r},a3=(a,h,r)=>{const f=r.x-h.x,e=r.y-h.y;return a.replaceAll(/"x": (\d+)/g,(s,o)=>`"x": ${parseInt(o,10)+f}`).replaceAll(/"y": (\d+)/g,(s,o)=>`"y": ${parseInt(o,10)+e}`)},X3=(a,h,r)=>{if(!h)return a;const f=new RegExp(`"${h}"\\s?:\\s*\\{[^}]+?\\}`),s=a.match(f)?.[0],o=s?.match(/"x": (\d+)/)?.[1],l=s?.match(/"y": (\d+)/)?.[1];if(!o||!l)return a;const u=a3(L3,H3,{x:parseInt(o,10)+r.x,y:parseInt(l,10)+r.y});return a.replaceAll(/\s+/g," ").replace(f,u)},q3=a=>{const h={};for(let f=0;f<a.length;f++){const e=a[f];e&&Object.entries(e.doodadCounts).forEach(([s,o])=>{o>1||(h[s]?h[s]=h[s]+1:h[s]=1)})}const r=[];return Object.entries(h).forEach(([f,e])=>{e<a.length||r.push(f)}),r.filter(f=>f).sort((f,e)=>["Stash","Waypoint"].includes(f)&&["Stash","Waypoint"].includes(e)?f.localeCompare(e):["Stash","Waypoint"].includes(f)?-1:["Stash","Waypoint"].includes(e)?1:f.localeCompare(e))},U3=(a,h,r)=>{if(!h||!r)return"";const f=h.hideoutObject.doodads[a],e=r.hideoutObject.doodads[a];if(!f||!e)return"";let s=a3(h.hideoutString,f,e);return s=s.replace(`"hideout_name": "${h.hideoutObject.hideout_name}"`,`"hideout_name": "${r.hideoutObject.hideout_name}"`),s=s.replace(`"hideout_hash": ${h.hideoutObject.hideout_hash}`,`"hideout_hash": ${r.hideoutObject.hideout_hash}`),s};export{W3 as a,$3 as e,q3 as f,Y3 as g,U3 as m,X3 as r,G as s};
