import{a as m,t as g,c as Qt}from"../chunks/disclose-version.B3bMBieq.js";import"../chunks/legacy.Bxb3PkdE.js";import{z as Zt,A as Ht,b as te,B as Xt,m as ee,C as Ot,p as ae,D as F,E as oe,j as re,q as r,$ as le,s as l,k as a,g as t,w as p,l as e,i as et,t as L,x as Ut}from"../chunks/runtime.DSbpdHI_.js";import{l as Mt,h as se,e as j,s as X}from"../chunks/render.esMGjBfs.js";import{i as ie,o as de,a as z}from"../chunks/index-client.oR7idaTh.js";import{e as nt,r as ct,i as ut,s as Ct,g as ne,a as ce}from"../chunks/utils.xolfrU7S.js";import{i as ue}from"../chunks/lifecycle.DK1cIbw-.js";function Yt(o,v,s=v){var h=Zt();Mt(o,"input",i=>{var u=i?o.defaultValue:o.value;if(u=ht(o)?ft(u):u,s(u),h&&u!==(u=v())){var c=o.selectionStart,D=o.selectionEnd;o.value=u??"",D!==null&&(o.selectionStart=c,o.selectionEnd=Math.min(D,o.value.length))}}),(Ht&&o.defaultValue!==o.value||te(v)==null&&o.value)&&s(ht(o)?ft(o.value):o.value),Xt(()=>{var i=v();ht(o)&&i===ft(o.value)||o.type==="date"&&!i&&!o.value||i!==o.value&&(o.value=i??"")})}const vt=new Set;function ve(o,v,s,h,i=h){var u=s.getAttribute("type")==="checkbox",c=o;let D=!1;if(v!==null)for(var O of v)c=c[O]??(c[O]=[]);c.push(s),Mt(s,"change",()=>{var d=s.__value;u&&(d=Pt(c,d,s.checked)),i(d)},()=>i(u?[]:null)),Xt(()=>{var d=h();if(Ht&&s.defaultChecked!==s.checked){D=!0;return}u?(d=d||[],s.checked=d.includes(s.__value)):s.checked=ie(s.__value,d)}),ee(()=>{var d=c.indexOf(s);d!==-1&&c.splice(d,1)}),vt.has(c)||(vt.add(c),Ot(()=>{c.sort((d,w)=>d.compareDocumentPosition(w)===4?-1:1),vt.delete(c)})),Ot(()=>{if(D){var d;if(u)d=Pt(c,d,s.checked);else{var w=c.find(V=>V.checked);d=w==null?void 0:w.__value}i(d)}})}function Pt(o,v,s){for(var h=new Set,i=0;i<o.length;i+=1)o[i].checked&&h.add(o[i].__value);return s||h.delete(v),Array.from(h)}function ht(o){var v=o.type;return v==="number"||v==="range"}function ft(o){return o===""?null:+o}var he=g("<p>Please upload a hideout.</p>"),fe=g('<tr class="odd-rows"><td class="px-1 border-default"> </td><td class="px-1 border-default text-right"> </td></tr>'),_e=g('<p>Your hideout only has these non-unique decorations:</p> <table><thead><tr><th class="px-1 border-default text-left">Name</th><th class="px-1 border-default text-right">Count</th></tr></thead><tbody></tbody></table>',1),be=g(`<p>Please upload a different hideout. The uploaded hideout doesn't have any suitable
					decorations to replace.</p> <p>Add a decoration where you want the cat in-game, re-export, and re-upload your hideout.</p> <!>`,1),me=g('<li class="even-rows"><label><input type="radio" name="targetDoodad"> </label></li>'),pe=g('<tr class="odd-rows"><td class="px-1 border-default"> </td><td class="px-1 border-default text-right"> </td></tr>'),ye=g(`<details><summary>Duplicate Decorations</summary> <p>You can't choose these because there are multiple of them:</p> <table><thead><tr><th class="px-1 border-default text-left">Name</th><th class="px-1 border-default text-right">Count</th></tr></thead><tbody></tbody></table></details>`),ge=g('<h3 class="mt-1"> </h3> <p>Choose Decoration to Replace</p> <div><ul class="inline-block"></ul> <!></div> <div><h3>Adjust</h3> <table><tbody><tr><td><button class="p0 flex flex-row justify-center items-center w-7 h-7">↖️</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled>⬆️</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7">↗️</button></td></tr><tr><td><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled>⬅️</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7">🔄</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled>➡️</button></td></tr><tr><td><button class="p0 flex flex-row justify-center items-center w-7 h-7">↙️</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled>⬇️</button></td><td><button class="p0 flex flex-row justify-center items-center w-7 h-7">↘️</button></td></tr></tbody></table> <table class="my-2"><tbody><tr><td>X</td><td><input class="w-16 text-right" type="number"></td></tr><tr><td>Y</td><td><input class="w-16 text-right" type="number"></td></tr></tbody></table></div>',1),we=g('<div><a class="button-default no-underline opaque inline-block">Download (Right-Click, Save As)</a></div>'),xe=g(`<div class="max-w-[130ch] mx-auto"><h1 class="mt-1">Add Cat</h1> <p>This tool will add a "soycat" to your hideout. It will be "centered" on a decoration.</p> <p>Original by SoyCatMod and Alexballe: <a href="https://hideoutshowcase.com/hideout/show/5619/title/Jailed%20SoyCat%20#FreeTheCat" target="_blank">"Jailed SoyCat #FreeTheCat"</a></p> <div class="flex flex-row justify-center mt-2"><div class="basis-prose"><div><label class="button-default inline-block cursor-pointer relative">Upload Hideout <input class="w-0 opacity-0 text-sm text-left block absolute top-0 left-0" type="file" accept=".hideout"></label></div> <!> <!></div> <div class="basis-prose"><h2>Instructions</h2> <ol class="ml-4 list-decimal"><li>Go into your hideout and put a <em>unique</em> decoration where you want the cat.</li> <li>Export your hideout.</li> <li>Upload your hideout by clicking on the "Upload Hideout" button.</li> <li>Choose the decoration you added in step 1. This decoration will be replaced by a "soycat"</li> <li>Download your new hideout. If that doesn't work, you might have to right-click on the
					button and choose "Save As...". Don't overwrite your original hideout in case you don't
					get what you want.</li> <li>Import your new hideout in Path of Exile. If the cat isn't in the correct position, you
					can move it by clicking on the adjustment buttons. You'll need to download and import your
					hideout to see if the adjustments were enough.</li></ol> <h2>Notes</h2> <ul class="ml-4 list-disc"><li>You can only add one cat at a time. To save time adding more than one: <ol class="ml-4 list-decimal"><li>Add multiple different decorations to your hideout</li> <li>Upload and replace one of them with a cat</li> <li>Upload the new hideout and replace the next one with a cat</li></ol></li></ul> <h2>To Do</h2> <ul class="ml-4 list-disc"><li>Figure out what x and y to use when adjusting vertically/horizontally</li> <li>Add any custom decoration</li> <li>Add multiple cats at once</li></ul></div></div></div>`);function je(o,v){ae(v,!1);const s=p(),h=p(),i=p(),u=p(),c=p(),D=[],O="PUX_ORIGINAL_HIDEOUT",d="PUX_UPLOAD_TIMESTAMP",w="PUX_CHOSEN_DOODAD",V="PUX_ADJUST_X",_t="PUX_ADJUST_Y";let at=p([]),S=p(""),A=p(""),M=p(0),f=p(0),_=p(0);de(()=>{const n=localStorage.getItem(O);n&&(r(S,n),r(A,localStorage.getItem(w)||""),r(M,parseInt(localStorage.getItem(d)||"0",10)),r(f,parseInt(localStorage.getItem(V)||"0",10)),r(_,parseInt(localStorage.getItem(_t)||"0",10)))}),F(()=>t(S),()=>{r(s,ne(t(S)))}),F(()=>t(s),()=>{r(h,Object.entries(t(s)).filter(n=>n[1]===1))}),F(()=>t(s),()=>{r(i,Object.entries(t(s)).filter(n=>n[1]>1))}),F(()=>(t(S),t(A),t(f),t(_)),()=>{r(u,ce(t(S),t(A),{x:t(f),y:t(_)}))}),F(()=>t(M),()=>{r(c,new Date(t(M)))}),oe(),ue();var ot=xe();se(n=>{le.title="Migrate Hideout"});var bt=l(a(ot),6),mt=a(bt),rt=a(mt),pt=a(rt),Rt=l(a(pt));e(pt),e(rt);var yt=l(rt,2);{var Gt=n=>{var b=he();m(n,b)},qt=n=>{var b=Qt(),I=et(b);{var $t=U=>{var R=be(),G=l(et(R),4);{var lt=T=>{var C=_e(),W=l(et(C),2),B=l(a(W));nt(B,5,()=>t(i),ut,(Q,Y)=>{var P=fe(),E=a(P),q=a(E,!0);e(E);var Z=l(E),tt=a(Z,!0);e(Z),e(P),L(()=>{X(q,t(Y)[0]),X(tt,t(Y)[1])}),m(Q,P)}),e(B),e(W),m(T,C)};z(G,T=>{t(i).length>0&&T(lt)})}m(U,R)},Kt=U=>{var R=ge(),G=et(R),lt=a(G);L(()=>X(lt,`Uploaded at ${t(c).toLocaleString()??""}`)),e(G);var T=l(G,4),C=a(T);nt(C,5,()=>t(h),ut,(x,y)=>{var H=me(),J=a(H),k=a(J);ct(k);var N,$=l(k);e(J),e(H),L(()=>{N!==(N=t(y)[0])&&(k.value=(k.__value=t(y)[0])==null?"":t(y)[0]),X($,` ${t(y)[0]??""}`)}),ve(D,[],k,()=>(t(y)[0],t(A)),K=>r(A,K)),j("click",k,()=>{localStorage.setItem(w,t(y)[0])}),m(x,H)}),e(C);var W=l(C,2);{var B=x=>{var y=ye(),H=l(a(y),4),J=l(a(H));nt(J,5,()=>t(i),ut,(k,N)=>{var $=pe(),K=a($),Wt=a(K,!0);e(K);var jt=l(K),Bt=a(jt,!0);e(jt),e($),L(()=>{X(Wt,t(N)[0]),X(Bt,t(N)[1])}),m(k,$)}),e(J),e(H),e(y),m(x,y)};z(W,x=>{t(i).length>0&&x(B)})}e(T);var Q=l(T,2),Y=l(a(Q),2),P=a(Y),E=a(P),q=a(E),Z=a(q);e(q);var tt=l(q,2),Ft=a(tt);e(tt),e(E);var st=l(E),gt=l(a(st)),Lt=a(gt);e(gt),Ut(),e(st);var wt=l(st),it=a(wt),zt=a(it);e(it);var xt=l(it,2),Vt=a(xt);e(xt),e(wt),e(P),e(Y);var St=l(Y,2),kt=a(St),dt=a(kt),Dt=l(a(dt)),At=a(Dt);ct(At),e(Dt),e(dt);var It=l(dt),Tt=l(a(It)),Et=a(Tt);ct(Et),e(Tt),e(It),e(kt),e(St),e(Q),j("click",Z,()=>{r(_,t(_)+1)}),j("click",Ft,()=>{r(f,t(f)+1)}),j("click",Lt,()=>{r(f,0),r(_,0)}),j("click",zt,()=>{r(f,t(f)-1)}),j("click",Vt,()=>{r(_,t(_)-1)}),Yt(At,()=>t(f),x=>r(f,x)),Yt(Et,()=>t(_),x=>r(_,x)),m(U,R)};z(I,U=>{t(h).length===0?U($t):U(Kt,!1)},!0)}m(n,b)};z(yt,n=>{t(S)?n(qt,!1):n(Gt)})}var Jt=l(yt,2);{var Nt=n=>{var b=we(),I=a(b);e(b),L(()=>{Ct(I,"href",`data:text/plain;charset=utf-8,${t(u)}`),Ct(I,"download",`with-cat_x${t(f)}_y${t(_)}.hideout`)}),m(n,b)};z(Jt,n=>{t(A)&&t(h).length>0&&n(Nt)})}e(mt),Ut(2),e(bt),e(ot),j("change",Rt,async n=>{if(r(at,[]),n.currentTarget.files)for(const b of[...n.currentTarget.files])try{r(S,await b.text()),r(A,""),r(M,Date.now()),r(f,0),r(_,0),localStorage.setItem(O,t(S)),localStorage.setItem(w,""),localStorage.setItem(d,t(M).toString(10)),localStorage.setItem(V,t(f).toString(10)),localStorage.setItem(_t,t(_).toString(10))}catch(I){t(at).push(`Error when loading ${b.name}`),I instanceof Error&&t(at).push(I.message)}}),m(o,ot),re()}export{je as component};