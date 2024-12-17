import{A as d,F as f3,G as e3,H as n3,I as U,J as s3,K as Y,L as F,M as I,N as g,O as o3,P as m,Q,R as Z,S as i3,T as $,U as X,V as t3,W as v3,X as c3,Y as y3,Z as x3,_ as l3,a0 as S3,C as b3,a1 as T,a2 as C,o as w3,a3 as G,a4 as j,a5 as D3,a6 as u3,a7 as P3,a8 as V3,a9 as d3,aa as _3,ab as p3}from"./runtime.DSbpdHI_.js";import{a as O3}from"./render.esMGjBfs.js";function T3(h,r){return r}function k3(h,r,a,f){for(var e=[],n=r.length,s=0;s<n;s++)t3(r[s].e,e,!0);var x=n>0&&e.length===0&&a!==null;if(x){var l=a.parentNode;v3(l),l.append(a),f.clear(),p(h,r[0].prev,r[n-1].next)}c3(e,()=>{for(var b=0;b<n;b++){var c=r[b];x||(f.delete(c.k),p(h,c.prev,c.next)),y3(c.e,!x)}})}function C3(h,r,a,f,e,n=null){var s=h,x={flags:r,items:new Map,first:null},l=(r&j)!==0;if(l){var b=h;s=d?F(x3(b)):b.appendChild(l3())}d&&f3();var c=null,P=!1;e3(()=>{var V=a(),o=n3(V)?V:V==null?[]:U(V),t=o.length;if(P&&t===0)return;P=t===0;let y=!1;if(d){var O=s.data===s3;O!==(t===0)&&(s=Y(),F(s),I(!1),y=!0)}if(d){for(var S=null,w,D=0;D<t;D++){if(g.nodeType===8&&g.data===o3){s=g,y=!0,I(!1);break}var u=o[D],i=f(u,D);w=z(g,x,S,null,u,i,D,e,r),x.items.set(i,w),S=w}t>0&&F(Y())}if(!d){var v=S3;g3(o,x,s,e,r,(v.f&m)!==0,f)}n!==null&&(t===0?c?Q(c):c=Z(()=>n(s)):c!==null&&i3(c,()=>{c=null})),y&&I(!0),a()}),d&&(s=g)}function g3(h,r,a,f,e,n,s,x){var L,R,H,M;var l=(e&D3)!==0,b=(e&(T|C))!==0,c=h.length,P=r.items,V=r.first,o=V,t,y=null,O,S=[],w=[],D,u,i,v;if(l)for(v=0;v<c;v+=1)D=h[v],u=s(D,v),i=P.get(u),i!==void 0&&((L=i.a)==null||L.measure(),(O??(O=new Set)).add(i));for(v=0;v<c;v+=1){if(D=h[v],u=s(D,v),i=P.get(u),i===void 0){var h3=o?o.e.nodes_start:a;y=z(h3,r,y,y===null?r.first:y.next,D,u,v,f,e),P.set(u,y),S=[],w=[],o=y.next;continue}if(b&&A3(i,D,v,e),i.e.f&m&&(Q(i.e),l&&((R=i.a)==null||R.unfix(),(O??(O=new Set)).delete(i))),i!==o){if(t!==void 0&&t.has(i)){if(S.length<w.length){var A=w[0],_;y=A.prev;var N=S[0],E=S[S.length-1];for(_=0;_<S.length;_+=1)K(S[_],A,a);for(_=0;_<w.length;_+=1)t.delete(w[_]);p(r,N.prev,E.next),p(r,y,N),p(r,E,A),o=A,y=E,v-=1,S=[],w=[]}else t.delete(i),K(i,o,a),p(r,i.prev,i.next),p(r,i,y===null?r.first:y.next),p(r,y,i),y=i;continue}for(S=[],w=[];o!==null&&o.k!==u;)(n||!(o.e.f&m))&&(t??(t=new Set)).add(o),w.push(o),o=o.next;if(o===null)continue;i=o}S.push(i),y=i,o=i.next}if(o!==null||t!==void 0){for(var k=t===void 0?[]:U(t);o!==null;)(n||!(o.e.f&m))&&k.push(o),o=o.next;var B=k.length;if(B>0){var a3=e&j&&c===0?a:null;if(l){for(v=0;v<B;v+=1)(H=k[v].a)==null||H.measure();for(v=0;v<B;v+=1)(M=k[v].a)==null||M.fix()}k3(r,k,a3,P)}}l&&b3(()=>{var W;if(O!==void 0)for(i of O)(W=i.a)==null||W.apply()}),$.first=r.first&&r.first.e,$.last=y&&y.e}function A3(h,r,a,f){f&T&&X(h.v,r),f&C?X(h.i,a):h.i=a}function z(h,r,a,f,e,n,s,x,l,b){var c=(l&T)!==0,P=(l&u3)===0,V=c?P?w3(e):G(e):e,o=l&C?G(s):s,t={i:o,v:V,k:n,a:null,e:null,prev:a,next:f};try{return t.e=Z(()=>x(h,V,o),d),t.e.prev=a&&a.e,t.e.next=f&&f.e,a===null?r.first=t:(a.next=t,a.e.next=t.e),f!==null&&(f.prev=t,f.e.prev=t.e),t}finally{}}function K(h,r,a){for(var f=h.next?h.next.e.nodes_start:a,e=r?r.e.nodes_start:a,n=h.e.nodes_start;n!==f;){var s=P3(n);e.before(n),n=s}}function p(h,r,a){r===null?h.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function N3(h){if(d){var r=!1,a=()=>{if(!r){if(r=!0,h.hasAttribute("value")){var f=h.value;q(h,"value",null),h.value=f}if(h.hasAttribute("checked")){var e=h.checked;q(h,"checked",null),h.checked=e}}};h.__on_r=a,V3(a),O3()}}function q(h,r,a,f){var e=h.__attributes??(h.__attributes={});d&&(e[r]=h.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&h.nodeName==="LINK")||e[r]!==(e[r]=a)&&(r==="style"&&"__styles"in h&&(h.__styles={}),r==="loading"&&(h[d3]=a),a==null?h.removeAttribute(r):typeof a!="string"&&m3(h).includes(r)?h[r]=a:h.setAttribute(r,a))}var J=new Map;function m3(h){var r=J.get(h.nodeName);if(r)return r;J.set(h.nodeName,r=[]);for(var a,f=h,e=Element.prototype;e!==f;){a=p3(f);for(var n in a)a[n].set&&r.push(n);f=_3(f)}return r}const E3=`"Snow Drift": {
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
}`,B3={x:295,y:378},L3=(h,r=!1)=>{const a={};return[...h.matchAll(/"([\w\s]+)":\s?\{/g)].forEach(f=>{f[1]!=="doodads"&&(!r&&["Stash","Guild Stash","Waypoint","Crafting Bench","Map Device","Horticrafting Station","Heist Locker","Expedition Locker","Tane Octavius","Kirac","Sister Cassia","Einhar","Alva","Helena","Niko","Jun","The Last to Die","Lilly Roth","Relic Locker"].includes(f[1])||(a[f[1]]?a[f[1]]+=1:a[f[1]]=1))}),a},r3=(h,r,a)=>{const f=a.x-r.x,e=a.y-r.y;return h.replaceAll(/"x": (\d+)/g,(n,s)=>`"x": ${parseInt(s,10)+f}`).replaceAll(/"y": (\d+)/g,(n,s)=>`"y": ${parseInt(s,10)+e}`)},R3=(h,r,a)=>{var b,c;if(!r)return h;const f=new RegExp(`"${r}"\\s?:\\s*\\{[^}]+?\\}`),e=h.match(f),n=e==null?void 0:e[0],s=(b=n==null?void 0:n.match(/"x": (\d+)/))==null?void 0:b[1],x=(c=n==null?void 0:n.match(/"y": (\d+)/))==null?void 0:c[1];if(!s||!x)return h;const l=r3(E3,B3,{x:parseInt(s,10)+a.x,y:parseInt(x,10)+a.y});return h.replaceAll(/\s+/g," ").replace(f,l)},H3=h=>{const r={};for(let f=0;f<h.length;f++){const e=h[f];e&&Object.entries(e.doodadCounts).forEach(([n,s])=>{s>1||(r[n]?r[n]=r[n]+1:r[n]=1)})}const a=[];return Object.entries(r).forEach(([f,e])=>{e<h.length||a.push(f)}),a.filter(f=>f).sort((f,e)=>["Stash","Waypoint"].includes(f)&&["Stash","Waypoint"].includes(e)?f.localeCompare(e):["Stash","Waypoint"].includes(f)?-1:["Stash","Waypoint"].includes(e)?1:f.localeCompare(e))},M3=(h,r,a)=>{if(!r||!a)return"";const f=r.hideoutObject.doodads[h],e=a.hideoutObject.doodads[h];if(!f||!e)return"";let n=r3(r.hideoutString,f,e);return n=n.replace(`"hideout_name": "${r.hideoutObject.hideout_name}"`,`"hideout_name": "${a.hideoutObject.hideout_name}"`),n=n.replace(`"hideout_hash": ${r.hideoutObject.hideout_hash}`,`"hideout_hash": ${a.hideoutObject.hideout_hash}`),n};export{R3 as a,C3 as e,H3 as f,L3 as g,T3 as i,M3 as m,N3 as r,q as s};
