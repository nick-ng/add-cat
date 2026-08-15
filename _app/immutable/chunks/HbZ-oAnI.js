import{a2 as G,U as f3,_ as R,x as B,ab as e3,V as n3,g as X,an as s3,X as i3,Y as o3,Z as q,a0 as H,a7 as F,ao as t3,ap as v3,a3 as W,a1 as x3,y as y3,aq as U,m as l3,ar as z,as as J,M as c3,at as I,a5 as K,a6 as b3,au as T,av as S3,aw as L,ax as Z,ay as w3,az as D3,aA as u3,aB as P3,aC as V3,aD as j,B as d3,aE as _3}from"./C3sSKUeg.js";function p3(f,h,r){for(var a=f.items,n=[],s=h.length,i=0;i<s;i++)D3(h[i].e,n,!0);var y=s>0&&n.length===0&&r!==null;if(y){var u=r.parentNode;u3(u),u.append(r),a.clear(),_(f,h[0].prev,h[s-1].next)}P3(n,()=>{for(var D=0;D<s;D++){var c=h[D];y||(a.delete(c.k),_(f,c.prev,c.next)),Z(c.e,!y)}})}function A3(f,h,r,a,n,s=null){var i=f,y={flags:h,items:new Map,first:null},u=(h&j)!==0;if(u){var D=f;i=B?R(e3(D)):D.appendChild(G())}B&&n3();var c=null,m=!1,P=new Map,O=s3(()=>{var l=r();return c3(l)?l:l==null?[]:J(l)}),o,x;function v(){m3(x,o,y,P,i,n,h,a,r),s!==null&&(o.length===0?c?K(c):c=W(()=>s(i)):c!==null&&b3(c,()=>{c=null}))}f3(()=>{x??=V3,o=X(O);var l=o.length;if(m&&l===0)return;m=l===0;let w=!1;if(B){var V=i3(i)===o3;V!==(l===0)&&(i=q(),R(i),H(!1),w=!0)}if(B){for(var p=null,b,e=0;e<l;e++){if(F.nodeType===t3&&F.data===v3){i=F,w=!0,H(!1);break}var t=o[e],S=a(t,e);b=Y(F,y,p,null,t,S,e,n,h,r),y.items.set(S,b),p=b}l>0&&R(q())}if(B)l===0&&s&&(c=W(()=>s(i)));else if(x3()){var A=new Set,k=y3;for(e=0;e<l;e+=1){t=o[e],S=a(t,e);var E=y.items.get(S)??P.get(S);E?(h&(T|I))!==0&&Q(E,t,e,h):(b=Y(null,y,null,null,t,S,e,n,h,r,!0),P.set(S,b)),A.add(S)}for(const[d,C]of y.items)A.has(d)||k.skipped_effects.add(C.e);k.add_callback(v)}else v();w&&H(!0),X(O)}),B&&(i=F)}function m3(f,h,r,a,n,s,i,y,u){var D=(i&_3)!==0,c=(i&(T|I))!==0,m=h.length,P=r.items,O=r.first,o=O,x,v=null,l,w=[],V=[],p,b,e,t;if(D)for(t=0;t<m;t+=1)p=h[t],b=y(p,t),e=P.get(b),e!==void 0&&(e.a?.measure(),(l??=new Set).add(e));for(t=0;t<m;t+=1){if(p=h[t],b=y(p,t),e=P.get(b),e===void 0){var S=a.get(b);if(S!==void 0){a.delete(b),P.set(b,S);var A=v?v.next:o;_(r,v,S),_(r,S,A),$(S,A,n),v=S}else{var k=o?o.e.nodes_start:n;v=Y(k,r,v,v===null?r.first:v.next,p,b,t,s,i,u)}P.set(b,v),w=[],V=[],o=v.next;continue}if(c&&Q(e,p,t,i),(e.e.f&L)!==0&&(K(e.e),D&&(e.a?.unfix(),(l??=new Set).delete(e))),e!==o){if(x!==void 0&&x.has(e)){if(w.length<V.length){var E=V[0],d;v=E.prev;var C=w[0],M=w[w.length-1];for(d=0;d<w.length;d+=1)$(w[d],E,n);for(d=0;d<V.length;d+=1)x.delete(V[d]);_(r,C.prev,M.next),_(r,v,C),_(r,M,E),o=E,v=M,t-=1,w=[],V=[]}else x.delete(e),$(e,o,n),_(r,e.prev,e.next),_(r,e,v===null?r.first:v.next),_(r,v,e),v=e;continue}for(w=[],V=[];o!==null&&o.k!==b;)(o.e.f&L)===0&&(x??=new Set).add(o),V.push(o),o=o.next;if(o===null)continue;e=o}w.push(e),v=e,o=e.next}if(o!==null||x!==void 0){for(var g=x===void 0?[]:J(x);o!==null;)(o.e.f&L)===0&&g.push(o),o=o.next;var N=g.length;if(N>0){var h3=(i&j)!==0&&m===0?n:null;if(D){for(t=0;t<N;t+=1)g[t].a?.measure();for(t=0;t<N;t+=1)g[t].a?.fix()}p3(r,g,h3)}}D&&d3(()=>{if(l!==void 0)for(e of l)e.a?.apply()}),f.first=r.first&&r.first.e,f.last=v&&v.e;for(var a3 of a.values())Z(a3.e);a.clear()}function Q(f,h,r,a){(a&T)!==0&&U(f.v,h),(a&I)!==0?U(f.i,r):f.i=r}function Y(f,h,r,a,n,s,i,y,u,D,c){var m=(u&T)!==0,P=(u&S3)===0,O=m?P?l3(n,!1,!1):z(n):n,o=(u&I)===0?i:z(i),x={i:o,v:O,k:s,a:null,e:null,prev:r,next:a};try{if(f===null){var v=document.createDocumentFragment();v.append(f=G())}return x.e=W(()=>y(f,O,o,D),B),x.e.prev=r&&r.e,x.e.next=a&&a.e,r===null?c||(h.first=x):(r.next=x,r.e.next=x.e),a!==null&&(a.prev=x,a.e.prev=x.e),x}finally{}}function $(f,h,r){for(var a=f.next?f.next.e.nodes_start:r,n=h?h.e.nodes_start:r,s=f.e.nodes_start;s!==null&&s!==a;){var i=w3(s);n.before(s),s=i}}function _(f,h,r){h===null?f.first=r:(h.next=r,h.e.next=r&&r.e),r!==null&&(r.prev=h,r.e.prev=h&&h.e)}const O3=`"Snow Drift": {
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
}`,E3={x:295,y:378},g3=(f,h=!1)=>{const r={};return[...f.matchAll(/"([\w\s]+)":\s?\{/g)].forEach(a=>{a[1]!=="doodads"&&(!h&&["Stash","Guild Stash","Waypoint","Crafting Bench","Map Device","Horticrafting Station","Heist Locker","Expedition Locker","Tane Octavius","Kirac","Sister Cassia","Einhar","Alva","Helena","Niko","Jun","The Last to Die","Lilly Roth","Relic Locker"].includes(a[1])||(r[a[1]]?r[a[1]]+=1:r[a[1]]=1))}),r},r3=(f,h,r)=>{const a=r.x-h.x,n=r.y-h.y;return f.replaceAll(/"x": (\d+)/g,(s,i)=>`"x": ${parseInt(i,10)+a}`).replaceAll(/"y": (\d+)/g,(s,i)=>`"y": ${parseInt(i,10)+n}`)},F3=(f,h,r)=>{if(!h)return f;const a=new RegExp(`"${h}"\\s?:\\s*\\{[^}]+?\\}`),s=f.match(a)?.[0],i=s?.match(/"x": (\d+)/)?.[1],y=s?.match(/"y": (\d+)/)?.[1];if(!i||!y)return f;const u=r3(O3,E3,{x:parseInt(i,10)+r.x,y:parseInt(y,10)+r.y});return f.replaceAll(/\s+/g," ").replace(a,u)},k3=f=>{const h={};for(let a=0;a<f.length;a++){const n=f[a];n&&Object.entries(n.doodadCounts).forEach(([s,i])=>{i>1||(h[s]?h[s]=h[s]+1:h[s]=1)})}const r=[];return Object.entries(h).forEach(([a,n])=>{n<f.length||r.push(a)}),r.filter(a=>a).sort((a,n)=>["Stash","Waypoint"].includes(a)&&["Stash","Waypoint"].includes(n)?a.localeCompare(n):["Stash","Waypoint"].includes(a)?-1:["Stash","Waypoint"].includes(n)?1:a.localeCompare(n))},C3=(f,h,r)=>{if(!h||!r)return"";const a=h.hideoutObject.doodads[f],n=r.hideoutObject.doodads[f];if(!a||!n)return"";let s=r3(h.hideoutString,a,n);return s=s.replace(`"hideout_name": "${h.hideoutObject.hideout_name}"`,`"hideout_name": "${r.hideoutObject.hideout_name}"`),s=s.replace(`"hideout_hash": ${h.hideoutObject.hideout_hash}`,`"hideout_hash": ${r.hideoutObject.hideout_hash}`),s};async function I3(){return navigator.storage?.persist?await navigator.storage.persisted()?!0:navigator.storage.persist():!1}export{I3 as a,A3 as e,k3 as f,g3 as g,C3 as m,F3 as r};
