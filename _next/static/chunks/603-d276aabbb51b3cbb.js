"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{4113:(e,n,t)=>{t.d(n,{N:()=>g});var r=t(5155),o=t(2115),a=t(1921),i=t(2321),u=t(7530),l=t(8041),s=t(4712);class d extends o.Component{getSnapshotBeforeUpdate(e){let n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){let e=n.offsetParent,t=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft,r.right=t-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:n,isPresent:t,anchorX:a}=e,i=(0,o.useId)(),u=(0,o.useRef)(null),l=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,o.useContext)(s.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:n,top:r,left:o,right:s}=l.current;if(t||!u.current||!e||!n)return;u.current.dataset.motionPopId=i;let d=document.createElement("style");return c&&(d.nonce=c),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(n,"px !important;\n            ").concat("left"===a?"left: ".concat(o):"right: ".concat(s),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(d)}},[t]),(0,r.jsx)(d,{isPresent:t,childRef:u,sizeRef:l,children:o.cloneElement(n,{ref:u})})}let f=e=>{let{children:n,initial:t,isPresent:a,onExitComplete:u,custom:s,presenceAffectsLayout:d,mode:f,anchorX:m}=e,v=(0,i.M)(p),h=(0,o.useId)(),g=(0,o.useCallback)(e=>{for(let n of(v.set(e,!0),v.values()))if(!n)return;u&&u()},[v,u]),w=(0,o.useMemo)(()=>({id:h,initial:t,isPresent:a,custom:s,onExitComplete:g,register:e=>(v.set(e,!1),()=>v.delete(e))}),d?[Math.random(),g]:[a,g]);return(0,o.useMemo)(()=>{v.forEach((e,n)=>v.set(n,!1))},[a]),o.useEffect(()=>{a||v.size||!u||u()},[a]),"popLayout"===f&&(n=(0,r.jsx)(c,{isPresent:a,anchorX:m,children:n})),(0,r.jsx)(l.t.Provider,{value:w,children:n})};function p(){return new Map}var m=t(8086);let v=e=>e.key||"";function h(e){let n=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&n.push(e)}),n}let g=e=>{let{children:n,custom:t,initial:l=!0,onExitComplete:s,presenceAffectsLayout:d=!0,mode:c="sync",propagate:p=!1,anchorX:g="left"}=e,[w,x]=(0,m.xQ)(p),y=(0,o.useMemo)(()=>h(n),[n]),M=p&&!w?[]:y.map(v),b=(0,o.useRef)(!0),R=(0,o.useRef)(y),C=(0,i.M)(()=>new Map),[j,D]=(0,o.useState)(y),[E,I]=(0,o.useState)(y);(0,u.E)(()=>{b.current=!1,R.current=y;for(let e=0;e<E.length;e++){let n=v(E[e]);M.includes(n)?C.delete(n):!0!==C.get(n)&&C.set(n,!1)}},[E,M.length,M.join("-")]);let N=[];if(y!==j){let e=[...y];for(let n=0;n<E.length;n++){let t=E[n],r=v(t);M.includes(r)||(e.splice(n,0,t),N.push(t))}return"wait"===c&&N.length&&(e=N),I(h(e)),D(y),null}let{forceRender:k}=(0,o.useContext)(a.L);return(0,r.jsx)(r.Fragment,{children:E.map(e=>{let n=v(e),o=(!p||!!w)&&(y===E||M.includes(n));return(0,r.jsx)(f,{isPresent:o,initial:(!b.current||!!l)&&void 0,custom:t,presenceAffectsLayout:d,mode:c,onExitComplete:o?void 0:()=>{if(!C.has(n))return;C.set(n,!0);let e=!0;C.forEach(n=>{n||(e=!1)}),e&&(null==k||k(),I(R.current),p&&(null==x||x()),s&&s())},anchorX:g,children:e},n)})})}},4171:(e,n,t)=>{t.d(n,{UC:()=>e8,q7:()=>e9,ZL:()=>e7,bL:()=>e3,l9:()=>e4});var r=t(2115),o=t(3610),a=t(8068),i=t(8166),u=t(1488),l=t(3360),s=t(9741),d=t(4256),c=t(9674),f=t(2292),p=t(196),m=t(7668),v=t(905),h=t(7323),g=t(6611),w=e=>{let{present:n,children:t}=e,o=function(e){var n,t;let[o,a]=r.useState(),i=r.useRef({}),u=r.useRef(e),l=r.useRef("none"),[s,d]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return r.useEffect(()=>{let e=x(i.current);l.current="mounted"===s?e:"none"},[s]),(0,g.N)(()=>{let n=i.current,t=u.current;if(t!==e){let r=l.current,o=x(n);e?d("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?d("UNMOUNT"):t&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),(0,g.N)(()=>{if(o){var e;let n;let t=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=x(i.current).includes(e.animationName);if(e.target===o&&r&&(d("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",n=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(l.current=x(i.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(n),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:r.useCallback(e=>{e&&(i.current=getComputedStyle(e)),a(e)},[])}}(n),i="function"==typeof t?t({present:o.isPresent}):r.Children.only(t),u=(0,a.s)(o.ref,function(e){var n,t;let r=null===(n=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===n?void 0:n.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(t=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof t||o.isPresent?r.cloneElement(i,{ref:u}):null};function x(e){return(null==e?void 0:e.animationName)||"none"}w.displayName="Presence";var y=t(1524),M=t(5155),b="rovingFocusGroup.onEntryFocus",R={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[j,D,E]=(0,s.N)(C),[I,N]=(0,i.A)(C,[E]),[k,_]=I(C),P=r.forwardRef((e,n)=>(0,M.jsx)(j.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,M.jsx)(j.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,M.jsx)(T,{...e,ref:n})})}));P.displayName=C;var T=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:i,loop:s=!1,dir:c,currentTabStopId:f,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:m,onEntryFocus:v,preventScrollOnEntryFocus:h=!1,...g}=e,w=r.useRef(null),x=(0,a.s)(n,w),C=(0,d.jH)(c),[j=null,E]=(0,u.i)({prop:f,defaultProp:p,onChange:m}),[I,N]=r.useState(!1),_=(0,y.c)(v),P=D(t),T=r.useRef(!1),[O,A]=r.useState(0);return r.useEffect(()=>{let e=w.current;if(e)return e.addEventListener(b,_),()=>e.removeEventListener(b,_)},[_]),(0,M.jsx)(k,{scope:t,orientation:i,dir:C,loop:s,currentTabStopId:j,onItemFocus:r.useCallback(e=>E(e),[E]),onItemShiftTab:r.useCallback(()=>N(!0),[]),onFocusableItemAdd:r.useCallback(()=>A(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>A(e=>e-1),[]),children:(0,M.jsx)(l.sG.div,{tabIndex:I||0===O?-1:0,"data-orientation":i,...g,ref:x,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{T.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let n=!T.current;if(e.target===e.currentTarget&&n&&!I){let n=new CustomEvent(b,R);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=P().filter(e=>e.focusable);L([e.find(e=>e.active),e.find(e=>e.id===j),...e].filter(Boolean).map(e=>e.ref.current),h)}}T.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>N(!1))})})}),O="RovingFocusGroupItem",A=r.forwardRef((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:a=!0,active:i=!1,tabStopId:u,...s}=e,d=(0,m.B)(),c=u||d,f=_(O,t),p=f.currentTabStopId===c,v=D(t),{onFocusableItemAdd:h,onFocusableItemRemove:g}=f;return r.useEffect(()=>{if(a)return h(),()=>g()},[a,h,g]),(0,M.jsx)(j.ItemSlot,{scope:t,id:c,focusable:a,active:i,children:(0,M.jsx)(l.sG.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...s,ref:n,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?f.onItemFocus(c):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return S[o]}(e,f.orientation,f.dir);if(void 0!==n){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let t=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)t.reverse();else if("prev"===n||"next"===n){"prev"===n&&t.reverse();let r=t.indexOf(e.currentTarget);t=f.loop?function(e,n){return e.map((t,r)=>e[(n+r)%e.length])}(t,r+1):t.slice(r+1)}setTimeout(()=>L(t))}})})})});A.displayName=O;var S={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function L(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let r of e)if(r===t||(r.focus({preventScroll:n}),document.activeElement!==t))return}var F=t(2317),K=t(5587),U=t(4065),G=["Enter"," "],B=["ArrowUp","PageDown","End"],W=["ArrowDown","PageUp","Home",...B],V={ltr:[...G,"ArrowRight"],rtl:[...G,"ArrowLeft"]},X={ltr:["ArrowLeft"],rtl:["ArrowRight"]},z="Menu",[H,q,Z]=(0,s.N)(z),[Q,Y]=(0,i.A)(z,[Z,v.Bk,N]),J=(0,v.Bk)(),$=N(),[ee,en]=Q(z),[et,er]=Q(z),eo=e=>{let{__scopeMenu:n,open:t=!1,children:o,dir:a,onOpenChange:i,modal:u=!0}=e,l=J(n),[s,c]=r.useState(null),f=r.useRef(!1),p=(0,y.c)(i),m=(0,d.jH)(a);return r.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,M.jsx)(v.bL,{...l,children:(0,M.jsx)(ee,{scope:n,open:t,onOpenChange:p,content:s,onContentChange:c,children:(0,M.jsx)(et,{scope:n,onClose:r.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:u,children:o})})})};eo.displayName=z;var ea=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=J(t);return(0,M.jsx)(v.Mz,{...o,...r,ref:n})});ea.displayName="MenuAnchor";var ei="MenuPortal",[eu,el]=Q(ei,{forceMount:void 0}),es=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:o}=e,a=en(ei,n);return(0,M.jsx)(eu,{scope:n,forceMount:t,children:(0,M.jsx)(w,{present:t||a.open,children:(0,M.jsx)(h.Z,{asChild:!0,container:o,children:r})})})};es.displayName=ei;var ed="MenuContent",[ec,ef]=Q(ed),ep=r.forwardRef((e,n)=>{let t=el(ed,e.__scopeMenu),{forceMount:r=t.forceMount,...o}=e,a=en(ed,e.__scopeMenu),i=er(ed,e.__scopeMenu);return(0,M.jsx)(H.Provider,{scope:e.__scopeMenu,children:(0,M.jsx)(w,{present:r||a.open,children:(0,M.jsx)(H.Slot,{scope:e.__scopeMenu,children:i.modal?(0,M.jsx)(em,{...o,ref:n}):(0,M.jsx)(ev,{...o,ref:n})})})})}),em=r.forwardRef((e,n)=>{let t=en(ed,e.__scopeMenu),i=r.useRef(null),u=(0,a.s)(n,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,K.Eq)(e)},[]),(0,M.jsx)(eh,{...e,ref:u,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),ev=r.forwardRef((e,n)=>{let t=en(ed,e.__scopeMenu);return(0,M.jsx)(eh,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),eh=r.forwardRef((e,n)=>{let{__scopeMenu:t,loop:i=!1,trapFocus:u,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:d,onEntryFocus:m,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:x,onDismiss:y,disableOutsideScroll:b,...R}=e,C=en(ed,t),j=er(ed,t),D=J(t),E=$(t),I=q(t),[N,k]=r.useState(null),_=r.useRef(null),T=(0,a.s)(n,_,C.onContentChange),O=r.useRef(0),A=r.useRef(""),S=r.useRef(0),L=r.useRef(null),K=r.useRef("right"),G=r.useRef(0),V=b?U.A:r.Fragment,X=b?{as:F.DX,allowPinchZoom:!0}:void 0,z=e=>{var n,t;let r=A.current+e,o=I().filter(e=>!e.disabled),a=document.activeElement,i=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,u=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,a=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(a=a.filter(e=>e!==t));let i=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return i!==t?i:void 0}(o.map(e=>e.textValue),r,i),l=null===(t=o.find(e=>e.textValue===u))||void 0===t?void 0:t.ref.current;!function e(n){A.current=n,window.clearTimeout(O.current),""!==n&&(O.current=window.setTimeout(()=>e(""),1e3))}(r),l&&setTimeout(()=>l.focus())};r.useEffect(()=>()=>window.clearTimeout(O.current),[]),(0,f.Oh)();let H=r.useCallback(e=>{var n,t;return K.current===(null===(n=L.current)||void 0===n?void 0:n.side)&&function(e,n){return!!n&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let i=n[e].x,u=n[e].y,l=n[a].x,s=n[a].y;u>r!=s>r&&t<(l-i)*(r-u)/(s-u)+i&&(o=!o)}return o}({x:e.clientX,y:e.clientY},n)}(e,null===(t=L.current)||void 0===t?void 0:t.area)},[]);return(0,M.jsx)(ec,{scope:t,searchRef:A,onItemEnter:r.useCallback(e=>{H(e)&&e.preventDefault()},[H]),onItemLeave:r.useCallback(e=>{var n;H(e)||(null===(n=_.current)||void 0===n||n.focus(),k(null))},[H]),onTriggerLeave:r.useCallback(e=>{H(e)&&e.preventDefault()},[H]),pointerGraceTimerRef:S,onPointerGraceIntentChange:r.useCallback(e=>{L.current=e},[]),children:(0,M.jsx)(V,{...X,children:(0,M.jsx)(p.n,{asChild:!0,trapped:u,onMountAutoFocus:(0,o.m)(l,e=>{var n;e.preventDefault(),null===(n=_.current)||void 0===n||n.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,M.jsx)(c.qW,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:x,onDismiss:y,children:(0,M.jsx)(P,{asChild:!0,...E,dir:j.dir,orientation:"vertical",loop:i,currentTabStopId:N,onCurrentTabStopIdChange:k,onEntryFocus:(0,o.m)(m,e=>{j.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,M.jsx)(v.UC,{role:"menu","aria-orientation":"vertical","data-state":eB(C.open),"data-radix-menu-content":"",dir:j.dir,...D,...R,ref:T,style:{outline:"none",...R.style},onKeyDown:(0,o.m)(R.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&z(e.key));let o=_.current;if(e.target!==o||!W.includes(e.key))return;e.preventDefault();let a=I().filter(e=>!e.disabled).map(e=>e.ref.current);B.includes(e.key)&&a.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(a)}),onBlur:(0,o.m)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(O.current),A.current="")}),onPointerMove:(0,o.m)(e.onPointerMove,eX(e=>{let n=e.target,t=G.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>G.current?"right":"left";K.current=n,G.current=e.clientX}}))})})})})})})});ep.displayName=ed;var eg=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,M.jsx)(l.sG.div,{role:"group",...r,ref:n})});eg.displayName="MenuGroup";var ew=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,M.jsx)(l.sG.div,{...r,ref:n})});ew.displayName="MenuLabel";var ex="MenuItem",ey="menu.itemSelect",eM=r.forwardRef((e,n)=>{let{disabled:t=!1,onSelect:i,...u}=e,s=r.useRef(null),d=er(ex,e.__scopeMenu),c=ef(ex,e.__scopeMenu),f=(0,a.s)(n,s),p=r.useRef(!1);return(0,M.jsx)(eb,{...u,ref:f,disabled:t,onClick:(0,o.m)(e.onClick,()=>{let e=s.current;if(!t&&e){let n=new CustomEvent(ey,{bubbles:!0,cancelable:!0});e.addEventListener(ey,e=>null==i?void 0:i(e),{once:!0}),(0,l.hO)(e,n),n.defaultPrevented?p.current=!1:d.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),p.current=!0},onPointerUp:(0,o.m)(e.onPointerUp,e=>{var n;p.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let n=""!==c.searchRef.current;!t&&(!n||" "!==e.key)&&G.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eM.displayName=ex;var eb=r.forwardRef((e,n)=>{let{__scopeMenu:t,disabled:i=!1,textValue:u,...s}=e,d=ef(ex,t),c=$(t),f=r.useRef(null),p=(0,a.s)(n,f),[m,v]=r.useState(!1),[h,g]=r.useState("");return r.useEffect(()=>{let e=f.current;if(e){var n;g((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[s.children]),(0,M.jsx)(H.ItemSlot,{scope:t,disabled:i,textValue:null!=u?u:h,children:(0,M.jsx)(A,{asChild:!0,...c,focusable:!i,children:(0,M.jsx)(l.sG.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":i||void 0,"data-disabled":i?"":void 0,...s,ref:p,onPointerMove:(0,o.m)(e.onPointerMove,eX(e=>{i?d.onItemLeave(e):(d.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eX(e=>d.onItemLeave(e))),onFocus:(0,o.m)(e.onFocus,()=>v(!0)),onBlur:(0,o.m)(e.onBlur,()=>v(!1))})})})}),eR=r.forwardRef((e,n)=>{let{checked:t=!1,onCheckedChange:r,...a}=e;return(0,M.jsx)(e_,{scope:e.__scopeMenu,checked:t,children:(0,M.jsx)(eM,{role:"menuitemcheckbox","aria-checked":eW(t)?"mixed":t,...a,ref:n,"data-state":eV(t),onSelect:(0,o.m)(a.onSelect,()=>null==r?void 0:r(!!eW(t)||!t),{checkForDefaultPrevented:!1})})})});eR.displayName="MenuCheckboxItem";var eC="MenuRadioGroup",[ej,eD]=Q(eC,{value:void 0,onValueChange:()=>{}}),eE=r.forwardRef((e,n)=>{let{value:t,onValueChange:r,...o}=e,a=(0,y.c)(r);return(0,M.jsx)(ej,{scope:e.__scopeMenu,value:t,onValueChange:a,children:(0,M.jsx)(eg,{...o,ref:n})})});eE.displayName=eC;var eI="MenuRadioItem",eN=r.forwardRef((e,n)=>{let{value:t,...r}=e,a=eD(eI,e.__scopeMenu),i=t===a.value;return(0,M.jsx)(e_,{scope:e.__scopeMenu,checked:i,children:(0,M.jsx)(eM,{role:"menuitemradio","aria-checked":i,...r,ref:n,"data-state":eV(i),onSelect:(0,o.m)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,t)},{checkForDefaultPrevented:!1})})})});eN.displayName=eI;var ek="MenuItemIndicator",[e_,eP]=Q(ek,{checked:!1}),eT=r.forwardRef((e,n)=>{let{__scopeMenu:t,forceMount:r,...o}=e,a=eP(ek,t);return(0,M.jsx)(w,{present:r||eW(a.checked)||!0===a.checked,children:(0,M.jsx)(l.sG.span,{...o,ref:n,"data-state":eV(a.checked)})})});eT.displayName=ek;var eO=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,M.jsx)(l.sG.div,{role:"separator","aria-orientation":"horizontal",...r,ref:n})});eO.displayName="MenuSeparator";var eA=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=J(t);return(0,M.jsx)(v.i3,{...o,...r,ref:n})});eA.displayName="MenuArrow";var[eS,eL]=Q("MenuSub"),eF="MenuSubTrigger",eK=r.forwardRef((e,n)=>{let t=en(eF,e.__scopeMenu),i=er(eF,e.__scopeMenu),u=eL(eF,e.__scopeMenu),l=ef(eF,e.__scopeMenu),s=r.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:c}=l,f={__scopeMenu:e.__scopeMenu},p=r.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return r.useEffect(()=>p,[p]),r.useEffect(()=>{let e=d.current;return()=>{window.clearTimeout(e),c(null)}},[d,c]),(0,M.jsx)(ea,{asChild:!0,...f,children:(0,M.jsx)(eb,{id:u.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":u.contentId,"data-state":eB(t.open),...e,ref:(0,a.t)(n,u.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,o.m)(e.onPointerMove,eX(n=>{l.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||s.current||(l.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{t.onOpenChange(!0),p()},100))})),onPointerLeave:(0,o.m)(e.onPointerLeave,eX(e=>{var n,r;p();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,i=o[a?"left":"right"],u=o[a?"right":"left"];l.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:i,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:i,y:o.bottom}],side:n}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>l.onPointerGraceIntentChange(null),300)}else{if(l.onTriggerLeave(e),e.defaultPrevented)return;l.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.m)(e.onKeyDown,n=>{let r=""!==l.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&V[i.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})})});eK.displayName=eF;var eU="MenuSubContent",eG=r.forwardRef((e,n)=>{let t=el(ed,e.__scopeMenu),{forceMount:i=t.forceMount,...u}=e,l=en(ed,e.__scopeMenu),s=er(ed,e.__scopeMenu),d=eL(eU,e.__scopeMenu),c=r.useRef(null),f=(0,a.s)(n,c);return(0,M.jsx)(H.Provider,{scope:e.__scopeMenu,children:(0,M.jsx)(w,{present:i||l.open,children:(0,M.jsx)(H.Slot,{scope:e.__scopeMenu,children:(0,M.jsx)(eh,{id:d.contentId,"aria-labelledby":d.triggerId,...u,ref:f,align:"start",side:"rtl"===s.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;s.isUsingKeyboardRef.current&&(null===(n=c.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>{e.target!==d.trigger&&l.onOpenChange(!1)}),onEscapeKeyDown:(0,o.m)(e.onEscapeKeyDown,e=>{s.onClose(),e.preventDefault()}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=X[s.dir].includes(e.key);if(n&&t){var r;l.onOpenChange(!1),null===(r=d.trigger)||void 0===r||r.focus(),e.preventDefault()}})})})})})});function eB(e){return e?"open":"closed"}function eW(e){return"indeterminate"===e}function eV(e){return eW(e)?"indeterminate":e?"checked":"unchecked"}function eX(e){return n=>"mouse"===n.pointerType?e(n):void 0}eG.displayName=eU;var ez="DropdownMenu",[eH,eq]=(0,i.A)(ez,[Y]),eZ=Y(),[eQ,eY]=eH(ez),eJ=e=>{let{__scopeDropdownMenu:n,children:t,dir:o,open:a,defaultOpen:i,onOpenChange:l,modal:s=!0}=e,d=eZ(n),c=r.useRef(null),[f=!1,p]=(0,u.i)({prop:a,defaultProp:i,onChange:l});return(0,M.jsx)(eQ,{scope:n,triggerId:(0,m.B)(),triggerRef:c,contentId:(0,m.B)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:s,children:(0,M.jsx)(eo,{...d,open:f,onOpenChange:p,dir:o,modal:s,children:t})})};eJ.displayName=ez;var e$="DropdownMenuTrigger",e0=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,disabled:r=!1,...i}=e,u=eY(e$,t),s=eZ(t);return(0,M.jsx)(ea,{asChild:!0,...s,children:(0,M.jsx)(l.sG.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...i,ref:(0,a.t)(n,u.triggerRef),onPointerDown:(0,o.m)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});e0.displayName=e$;var e1=e=>{let{__scopeDropdownMenu:n,...t}=e,r=eZ(n);return(0,M.jsx)(es,{...r,...t})};e1.displayName="DropdownMenuPortal";var e2="DropdownMenuContent",e5=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,i=eY(e2,t),u=eZ(t),l=r.useRef(!1);return(0,M.jsx)(ep,{id:i.contentId,"aria-labelledby":i.triggerId,...u,...a,ref:n,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var n;l.current||null===(n=i.triggerRef.current)||void 0===n||n.focus(),l.current=!1,e.preventDefault()}),onInteractOutside:(0,o.m)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!i.modal||r)&&(l.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});e5.displayName=e2,r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eg,{...o,...r,ref:n})}).displayName="DropdownMenuGroup",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(ew,{...o,...r,ref:n})}).displayName="DropdownMenuLabel";var e6=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eM,{...o,...r,ref:n})});e6.displayName="DropdownMenuItem",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eR,{...o,...r,ref:n})}).displayName="DropdownMenuCheckboxItem",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eE,{...o,...r,ref:n})}).displayName="DropdownMenuRadioGroup",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eN,{...o,...r,ref:n})}).displayName="DropdownMenuRadioItem",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eT,{...o,...r,ref:n})}).displayName="DropdownMenuItemIndicator",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eO,{...o,...r,ref:n})}).displayName="DropdownMenuSeparator",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eA,{...o,...r,ref:n})}).displayName="DropdownMenuArrow",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eK,{...o,...r,ref:n})}).displayName="DropdownMenuSubTrigger",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eZ(t);return(0,M.jsx)(eG,{...o,...r,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})}).displayName="DropdownMenuSubContent";var e3=eJ,e4=e0,e7=e1,e8=e5,e9=e6},5423:(e,n,t)=>{t.d(n,{W:()=>i});var r=t(2115),o=t(1506);let a={some:0,all:1};function i(e,{root:n,margin:t,amount:u,once:l=!1,initial:s=!1}={}){let[d,c]=(0,r.useState)(s);return(0,r.useEffect)(()=>{if(!e.current||l&&d)return;let r={root:n&&n.current||void 0,margin:t,amount:u};return function(e,n,{root:t,margin:r,amount:i="some"}={}){let u=(0,o.K)(e),l=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target);if(!!t!==e.isIntersecting){if(e.isIntersecting){let t=n(e.target,e);"function"==typeof t?l.set(e.target,t):s.unobserve(e.target)}else"function"==typeof t&&(t(e),l.delete(e.target))}})},{root:t,rootMargin:r,threshold:"number"==typeof i?i:a[i]});return u.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(c(!0),l?void 0:()=>c(!1)),r)},[n,e,t,l,u]),d}},7936:(e,n,t)=>{t.d(n,{A:()=>r});let r=(0,t(4057).A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])}}]);