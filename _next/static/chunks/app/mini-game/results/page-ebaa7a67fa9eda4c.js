(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{3103:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var n=i(5155),r=i(2115),a=i(6046),s=i(4085);let o=(0,i(4057).A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var c=i(9602),l=i(3892),d=i(4113);let u={text:.06,word:.05,character:.03,line:.06},h={hidden:{opacity:1},show:{opacity:1,transition:{delayChildren:0,staggerChildren:.05}},exit:{opacity:0,transition:{staggerChildren:.05,staggerDirection:-1}}},p={hidden:{opacity:0},show:{opacity:1},exit:{opacity:0}},m={fadeIn:{container:h,item:{hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,y:20,transition:{duration:.3}}}},blurIn:{container:h,item:{hidden:{opacity:0,filter:"blur(10px)"},show:{opacity:1,filter:"blur(0px)",transition:{duration:.3}},exit:{opacity:0,filter:"blur(10px)",transition:{duration:.3}}}},blurInUp:{container:h,item:{hidden:{opacity:0,filter:"blur(10px)",y:20},show:{opacity:1,filter:"blur(0px)",y:0,transition:{y:{duration:.3},opacity:{duration:.4},filter:{duration:.3}}},exit:{opacity:0,filter:"blur(10px)",y:20,transition:{y:{duration:.3},opacity:{duration:.4},filter:{duration:.3}}}}},blurInDown:{container:h,item:{hidden:{opacity:0,filter:"blur(10px)",y:-20},show:{opacity:1,filter:"blur(0px)",y:0,transition:{y:{duration:.3},opacity:{duration:.4},filter:{duration:.3}}}}},slideUp:{container:h,item:{hidden:{y:20,opacity:0},show:{y:0,opacity:1,transition:{duration:.3}},exit:{y:-20,opacity:0,transition:{duration:.3}}}},slideDown:{container:h,item:{hidden:{y:-20,opacity:0},show:{y:0,opacity:1,transition:{duration:.3}},exit:{y:20,opacity:0,transition:{duration:.3}}}},slideLeft:{container:h,item:{hidden:{x:20,opacity:0},show:{x:0,opacity:1,transition:{duration:.3}},exit:{x:-20,opacity:0,transition:{duration:.3}}}},slideRight:{container:h,item:{hidden:{x:-20,opacity:0},show:{x:0,opacity:1,transition:{duration:.3}},exit:{x:20,opacity:0,transition:{duration:.3}}}},scaleUp:{container:h,item:{hidden:{scale:.5,opacity:0},show:{scale:1,opacity:1,transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:300}}},exit:{scale:.5,opacity:0,transition:{duration:.3}}}},scaleDown:{container:h,item:{hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{duration:.3,scale:{type:"spring",damping:15,stiffness:300}}},exit:{scale:1.5,opacity:0,transition:{duration:.3}}}}};function f(e){let{children:t,delay:i=0,duration:r=.3,variants:a,className:s,segmentClassName:o,as:f="p",startOnView:x=!0,once:y=!1,by:g="word",animation:v="fadeIn",...w}=e,b=l.P.create(f),j=[];switch(g){case"word":j=t.split(/(\s+)/);break;case"character":j=t.split("");break;case"line":j=t.split("\n");break;default:j=[t]}let N=a?{container:{hidden:{opacity:0},show:{opacity:1,transition:{opacity:{duration:.01,delay:i},delayChildren:i,staggerChildren:r/j.length}},exit:{opacity:0,transition:{staggerChildren:r/j.length,staggerDirection:-1}}},item:a}:v?{container:{...m[v].container,show:{...m[v].container.show,transition:{delayChildren:i,staggerChildren:r/j.length}},exit:{...m[v].container.exit,transition:{staggerChildren:r/j.length,staggerDirection:-1}}},item:m[v].item}:{container:h,item:p};return(0,n.jsx)(d.N,{mode:"popLayout",children:(0,n.jsx)(b,{variants:N.container,initial:"hidden",whileInView:x?"show":void 0,animate:x?void 0:"show",exit:"exit",className:(0,c.cn)("whitespace-pre-wrap",s),viewport:{once:y},...w,children:j.map((e,t)=>(0,n.jsx)(l.P.span,{variants:N.item,custom:t*u[g],className:(0,c.cn)("line"===g?"block":"inline-block whitespace-pre","character"===g&&"",o),children:e},"".concat(g,"-").concat(e,"-").concat(t)))})})}function x(){let e=(0,a.useRouter)(),[t,i]=(0,r.useState)(null);if((0,r.useEffect)(()=>{{let e=localStorage.getItem("miniGameResults");if(e)try{let t=JSON.parse(e);i(t)}catch(e){console.error("Error parsing miniGameResults:",e)}localStorage.removeItem("miniGameStartTime")}},[]),!t)return(0,n.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,n.jsx)("p",{children:"Loading results..."})});let c=Object.keys(t.answers),l=c.length,d=c.reduce((e,i)=>e+ +!!t.answers[i].isCorrect,0),u=Math.floor((t.endTime-t.startTime)/1e3),h=l-d,p="".concat(h," Day").concat(1!==h?"s":""," Added");return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center px-4 py-12",children:[(0,n.jsx)("div",{className:"w-full max-w-4xl mb-4 flex justify-between items-center",children:(0,n.jsxs)(s.$,{variant:"outline",size:"lg",onClick:()=>{localStorage.removeItem("miniGameResults"),localStorage.removeItem("miniGameStartTime"),e.push("/mini-game")},children:[(0,n.jsx)(o,{className:"w-6 h-6 mr-2"}),"Restart Challenge"]})}),(0,n.jsxs)("div",{className:"w-full max-w-3xl bg-background border border-border/40 rounded p-8 shadow-xl",children:[(0,n.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-center mb-6",children:"Challenge Complete! Here's Your Compliance Score:"}),(0,n.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,n.jsxs)("div",{className:"text-lg font-semibold",children:["Accuracy:"," ",(0,n.jsxs)("span",{className:"text-primary",children:[d," out of ",l," correct"]})]}),(0,n.jsxs)("div",{className:"text-lg font-semibold",children:["Total Time Taken:"," ",(0,n.jsxs)("span",{className:"text-primary",children:[u," seconds"]})]}),(0,n.jsxs)("div",{className:"text-lg font-semibold",children:["Potential Costs/Delays Incurred:"," ",(0,n.jsxs)("span",{className:"text-primary",children:["€".concat(2e3*h),", ",p]})]})]}),(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Your Answers:"}),(0,n.jsx)("ul",{className:"space-y-2",children:c.map((e,i)=>{let r=t.answers[e];return(0,n.jsxs)("li",{className:"text-lg",children:[(0,n.jsxs)("strong",{children:["Challenge ",i+1,":"]})," You selected"," ",(0,n.jsx)("span",{className:"text-primary",children:r.answer})," –"," ",r.isCorrect?(0,n.jsx)("span",{className:"text-green-600 font-semibold",children:"Correct"}):(0,n.jsx)("span",{className:"text-red-600 font-semibold",children:"Incorrect"})]},e)})})]}),(0,n.jsx)("div",{className:"mb-6 mt-12",children:(0,n.jsx)(f,{animation:"fadeIn",by:"line",as:"p",className:"text-xl leading-relaxed",children:"The average manual compliance check takes 45 seconds per shipment.\n\nError rates cause delays of up to 42 days and fines exceeding €10,000.\n\nOur AI-powered system achieves 94% accuracy in just 0.2 seconds, reducing clearance times by up to 83% and saving you significant costs!"})})]})]})}},4057:(e,t,i)=>{"use strict";i.d(t,{A:()=>c});var n=i(2115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,n.forwardRef)((e,t)=>{let{color:i="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:l="",children:d,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:t,...s,width:r,height:r,stroke:i,strokeWidth:c?24*Number(o)/Number(r):o,className:a("lucide",l),...h},[...u.map(e=>{let[t,i]=e;return(0,n.createElement)(t,i)}),...Array.isArray(d)?d:[d]])}),c=(e,t)=>{let i=(0,n.forwardRef)((i,s)=>{let{className:c,...l}=i;return(0,n.createElement)(o,{ref:s,iconNode:t,className:a("lucide-".concat(r(e)),c),...l})});return i.displayName="".concat(e),i}},4085:(e,t,i)=>{"use strict";i.d(t,{$:()=>c});var n=i(5155);i(2115);var r=i(2317),a=i(1027),s=i(9602);let o=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md px-3 has-[>svg]:px-2.5",lg:"h-12 rounded-md px-7 has-[>svg]:px-5 text-0.7xl",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function c(e){let{className:t,variant:i,size:a,asChild:c=!1,...l}=e,d=c?r.DX:"button";return(0,n.jsx)(d,{"data-slot":"button",className:(0,s.cn)(o({variant:i,size:a,className:t})),...l})}},4113:(e,t,i)=>{"use strict";i.d(t,{N:()=>y});var n=i(5155),r=i(2115),a=i(1921),s=i(2321),o=i(7530),c=i(8041),l=i(4712);class d extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,i=e instanceof HTMLElement&&e.offsetWidth||0,n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft,n.right=i-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:i,anchorX:a}=e,s=(0,r.useId)(),o=(0,r.useRef)(null),c=(0,r.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=(0,r.useContext)(l.Q);return(0,r.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:r,right:l}=c.current;if(i||!o.current||!e||!t)return;o.current.dataset.motionPopId=s;let d=document.createElement("style");return u&&(d.nonce=u),document.head.appendChild(d),d.sheet&&d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===a?"left: ".concat(r):"right: ".concat(l),"px !important;\n            top: ").concat(n,"px !important;\n          }\n        ")),()=>{document.head.removeChild(d)}},[i]),(0,n.jsx)(d,{isPresent:i,childRef:o,sizeRef:c,children:r.cloneElement(t,{ref:o})})}let h=e=>{let{children:t,initial:i,isPresent:a,onExitComplete:o,custom:l,presenceAffectsLayout:d,mode:h,anchorX:m}=e,f=(0,s.M)(p),x=(0,r.useId)(),y=(0,r.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},[f,o]),g=(0,r.useMemo)(()=>({id:x,initial:i,isPresent:a,custom:l,onExitComplete:y,register:e=>(f.set(e,!1),()=>f.delete(e))}),d?[Math.random(),y]:[a,y]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[a]),r.useEffect(()=>{a||f.size||!o||o()},[a]),"popLayout"===h&&(t=(0,n.jsx)(u,{isPresent:a,anchorX:m,children:t})),(0,n.jsx)(c.t.Provider,{value:g,children:t})};function p(){return new Map}var m=i(8086);let f=e=>e.key||"";function x(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let y=e=>{let{children:t,custom:i,initial:c=!0,onExitComplete:l,presenceAffectsLayout:d=!0,mode:u="sync",propagate:p=!1,anchorX:y="left"}=e,[g,v]=(0,m.xQ)(p),w=(0,r.useMemo)(()=>x(t),[t]),b=p&&!g?[]:w.map(f),j=(0,r.useRef)(!0),N=(0,r.useRef)(w),C=(0,s.M)(()=>new Map),[k,E]=(0,r.useState)(w),[R,P]=(0,r.useState)(w);(0,o.E)(()=>{j.current=!1,N.current=w;for(let e=0;e<R.length;e++){let t=f(R[e]);b.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[R,b.length,b.join("-")]);let I=[];if(w!==k){let e=[...w];for(let t=0;t<R.length;t++){let i=R[t],n=f(i);b.includes(n)||(e.splice(t,0,i),I.push(i))}return"wait"===u&&I.length&&(e=I),P(x(e)),E(w),null}let{forceRender:S}=(0,r.useContext)(a.L);return(0,n.jsx)(n.Fragment,{children:R.map(e=>{let t=f(e),r=(!p||!!g)&&(w===R||b.includes(t));return(0,n.jsx)(h,{isPresent:r,initial:(!j.current||!!c)&&void 0,custom:i,presenceAffectsLayout:d,mode:u,onExitComplete:r?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(null==S||S(),P(N.current),p&&(null==v||v()),l&&l())},anchorX:y,children:e},t)})})}},6046:(e,t,i)=>{"use strict";var n=i(6658);i.o(n,"usePathname")&&i.d(t,{usePathname:function(){return n.usePathname}}),i.o(n,"useRouter")&&i.d(t,{useRouter:function(){return n.useRouter}}),i.o(n,"useSearchParams")&&i.d(t,{useSearchParams:function(){return n.useSearchParams}})},7060:(e,t,i)=>{Promise.resolve().then(i.bind(i,3103))},9602:(e,t,i)=>{"use strict";i.d(t,{cn:()=>a});var n=i(3463),r=i(9795);function a(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.QP)((0,n.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,892,441,587,358],()=>t(7060)),_N_E=e.O()}]);