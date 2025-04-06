(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2756:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>I});var a=s(5155),r=s(2115),l=s(9602),i=s(5565),n=s(4085);function o(e){let{className:t,reverse:s=!1,pauseOnHover:r=!1,children:i,vertical:n=!1,repeat:o=4,...d}=e;return(0,a.jsx)("div",{...d,className:(0,l.cn)("group flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!n,"flex-col":n},t),children:Array(o).fill(0).map((e,t)=>(0,a.jsx)("div",{className:(0,l.cn)("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!n,"animate-marquee-vertical flex-col":n,"group-hover:[animation-play-state:paused]":r,"[animation-direction:reverse]":s}),children:i},t))})}let d=[{name:"Anonymous SME Owner",username:"Cross-Border Shipper",body:"Customs delays cost me €50K last quarter alone. I need a faster way.",Image:"/assets/face-1.jpg"},{name:"Anonymous Exporter",username:"EU Trader",body:"Manual HS code checks take hours—hours I don’t have.",Image:"/assets/face-2.jpg"},{name:"Anonymous Logistics Lead",username:"Global Mover",body:"A €220K surcharge hit us out of nowhere. Compliance shouldn’t be this risky.",Image:"/assets/face-3.png"},{name:"Anonymous Founder",username:"Startup Hustler",body:"I’d kill for a tool that cuts my clearance times in half.",Image:"/assets/face-4.png"},{name:"Anonymous CFO",username:"Freight Optimizer",body:"We lost €20K last year to compliance penalties. I need certainty, not surprises.",Image:"/assets/face-5.png"},{name:"Anonymous Operations Manager",username:"Supply Chain Veteran",body:"Chasing down documents and manual entries waste my team's time every day.",Image:"/assets/face-6.png"}],c=d.slice(0,d.length/2),m=d.slice(d.length/2),x=e=>{let{Image:t,name:s,username:r,body:i}=e;return(0,a.jsxs)("figure",{className:(0,l.cn)("relative w-60 sm:w-64 md:w-72 h-full cursor-pointer overflow-hidden rounded-xl border p-4","border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]","dark:border-zinc-100/[.1] dark:bg-zinc-500/[.10] dark:hover:bg-zinc-500/[.25]"),children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("img",{className:"rounded-full",width:"32",height:"32",alt:s,src:t}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("figcaption",{className:"text-sm font-medium dark:text-white",children:s}),(0,a.jsx)("p",{className:"text-xs font-medium dark:text-white/40",children:r})]})]}),(0,a.jsx)("blockquote",{className:"mt-2 text-sm",children:i})]})};function h(){return(0,a.jsxs)("div",{className:"relative flex w-full flex-col items-center justify-center overflow-x-hidden py-6 sm:py-8 gap-4",children:[(0,a.jsx)(o,{pauseOnHover:!0,className:"[--duration:20s]",children:c.map(e=>(0,a.jsx)(x,{...e},e.username))}),(0,a.jsx)(o,{reverse:!0,pauseOnHover:!0,className:"[--duration:20s]",children:m.map(e=>(0,a.jsx)(x,{...e},e.username))}),(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/6 bg-gradient-to-r from-background z-10"}),(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/6 bg-gradient-to-l from-background z-10"})]})}var u=s(2336),g=s(5785),p=s(3892);function f(e){let{children:t,className:s,duration:i=100,delay:n=0,as:o="div",startOnView:d=!1,...c}=e,m=p.P.create(o,{forwardMotionProps:!0}),[x,h]=(0,r.useState)(""),[u,g]=(0,r.useState)(!1),f=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!d){let e=setTimeout(()=>{g(!0)},n);return()=>clearTimeout(e)}let e=new IntersectionObserver(t=>{let[s]=t;s.isIntersecting&&(setTimeout(()=>{g(!0)},n),e.disconnect())},{threshold:.1});return f.current&&e.observe(f.current),()=>e.disconnect()},[n,d]),(0,r.useEffect)(()=>{if(!u)return;let e=0,s=setInterval(()=>{e<t.length?(h(t.substring(0,e+1)),e++):clearInterval(s)},i);return()=>{clearInterval(s)}},[t,i,u]),(0,a.jsx)(m,{ref:f,className:(0,l.cn)("text-4xl font-bold leading-[5rem] tracking-[-0.02em]",s),...c,children:x})}let v=()=>{let[e,t]=(0,r.useState)(0),[s,l]=(0,r.useState)(0),i=e*s,n=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),o=(e,t)=>{let s=parseFloat(e.target.value);t(isNaN(s)?0:s)};return(0,a.jsx)("section",{id:"roi",className:"bg-background text-foreground",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",children:[(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(g.J,{className:"text-0.5xl",htmlFor:"shipmentVolume",children:"Annual Shipment Volume"}),(0,a.jsx)(u.p,{textSize:"text-2xl",paddingY:"py-6",type:"number",id:"shipmentVolume",placeholder:"Enter shipment volume",value:e.toString(),onChange:e=>o(e,t)})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(g.J,{className:"text-0.5xl",htmlFor:"complianceCost",children:"Avg Compliance Cost ($) / Shipment"}),(0,a.jsx)(u.p,{textSize:"text-2xl",paddingY:"py-6",type:"number",id:"complianceCost",placeholder:"Enter cost per shipment",value:s.toString(),onChange:e=>o(e,l)})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-center mb-6",children:[(0,a.jsxs)("div",{className:"p-6 border border-border/40 rounded-lg shadow-md bg-background/50",children:[(0,a.jsx)("p",{className:"font-medium text-muted-foreground mb-1 text-0.5xl",children:"Annual Compliance Cost"}),(0,a.jsx)(f,{className:"font-medium text-5xl",children:"$".concat(n(i))})]}),(0,a.jsxs)("div",{className:"p-6 border border-border/40 rounded-lg shadow-md bg-background/50",children:[(0,a.jsx)("p",{className:"font-medium text-muted-foreground mb-1 text-0.5xl",children:"Potential Annual Savings (63%)"}),(0,a.jsx)(f,{className:"font-medium text-5xl",children:"$".concat(n(.63*i))})]})]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Estimates based on industry benchmarks."})]})})};var b=s(4551),j=s(4171);function N(e){let{...t}=e;return(0,a.jsx)(j.bL,{"data-slot":"dropdown-menu",...t})}function y(e){let{...t}=e;return(0,a.jsx)(j.l9,{"data-slot":"dropdown-menu-trigger",...t})}function w(e){let{className:t,sideOffset:s=4,...r}=e;return(0,a.jsx)(j.ZL,{children:(0,a.jsx)(j.UC,{"data-slot":"dropdown-menu-content",sideOffset:s,className:(0,l.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",t),...r})})}function k(e){let{className:t,inset:s,variant:r="default",...i}=e;return(0,a.jsx)(j.q7,{"data-slot":"dropdown-menu-item","data-inset":s,"data-variant":r,className:(0,l.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...i})}var C=s(7936);let S=e=>{let{openModal:t}=e;return(0,a.jsxs)("nav",{className:"flex items-center justify-between px-6 py-4 shadow-sm bg-background sticky top-0 z-50 border-b-1 border-zinc-900 md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsx)("div",{className:"text-lg font-semibold text-primary",children:"VelocityCompliance"}),(0,a.jsx)("ul",{className:"hidden md:flex space-x-6 text-foreground",children:["Home","Features","ROI Calculator","Why Compliance"].map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase().replace(/\s+/g,"-")),className:"hover:text-primary",children:e})},t))}),(0,a.jsx)("div",{className:"hidden md:block",children:(0,a.jsx)(n.$,{variant:"outline",onClick:t,children:"Get Early Access"})}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsxs)(N,{children:[(0,a.jsx)(y,{asChild:!0,children:(0,a.jsx)(n.$,{variant:"ghost",size:"icon",className:"p-2",children:(0,a.jsx)(C.A,{className:"w-8 h-8"})})}),(0,a.jsxs)(w,{className:"w-screen bg-background text-foreground",children:[["Home","Features","ROI Calculator","Why Compliance"].map((e,t)=>(0,a.jsx)(k,{className:"text-xl p-4",asChild:!0,children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase().replace(/\s+/g,"-")),children:e})},t)),(0,a.jsx)(k,{children:(0,a.jsx)(n.$,{size:"lg",variant:"outline",className:"w-full mt-2",onClick:t,children:"Get Early Access"})})]})]})})]})};var A=s(5423),E=s(4113);function z(e){let{children:t,className:s,variant:l,duration:i=.4,delay:n=0,offset:o=6,direction:d="down",inView:c=!1,inViewMargin:m="-50px",blur:x="6px",...h}=e,u=(0,r.useRef)(null),g=(0,A.W)(u,{once:!0,margin:m}),f=l||{hidden:{["left"===d||"right"===d?"x":"y"]:"right"===d||"down"===d?-o:o,opacity:0,filter:"blur(".concat(x,")")},visible:{["left"===d||"right"===d?"x":"y"]:0,opacity:1,filter:"blur(0px)"}};return(0,a.jsx)(E.N,{children:(0,a.jsx)(p.P.div,{ref:u,initial:"hidden",animate:!c||g?"visible":"hidden",exit:"hidden",variants:f,transition:{delay:.04+n,duration:i,ease:"easeOut"},className:s,...h,children:t})})}function W(e){let{width:t=40,height:s=40,x:i=-1,y:n=-1,strokeDasharray:o=0,numSquares:d=50,className:c,maxOpacity:m=.5,duration:x=4,repeatDelay:h=.5,...u}=e,g=(0,r.useId)(),f=(0,r.useRef)(null),[v,b]=(0,r.useState)({width:0,height:0}),j=(0,r.useCallback)(()=>[Math.floor(Math.random()*v.width/t),Math.floor(Math.random()*v.height/s)],[v,t,s]),N=(0,r.useCallback)(e=>Array.from({length:e},(e,t)=>({id:t,pos:j()})),[j]),[y,w]=(0,r.useState)(()=>N(d)),k=(0,r.useCallback)(e=>{w(t=>t.map(t=>t.id===e?{...t,pos:j()}:t))},[j]);return(0,r.useEffect)(()=>{v.width&&v.height&&w(N(d))},[v,d,N]),(0,r.useEffect)(()=>{let e=new ResizeObserver(e=>{let t=e[0];t&&b({width:t.contentRect.width,height:t.contentRect.height})}),t=f.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]),(0,a.jsxs)("svg",{ref:f,"aria-hidden":"true",className:(0,l.cn)("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",c),...u,children:[(0,a.jsx)("defs",{children:(0,a.jsx)("pattern",{id:g,width:t,height:s,patternUnits:"userSpaceOnUse",x:i,y:n,children:(0,a.jsx)("path",{d:"M.5 ".concat(s,"V.5H").concat(t),fill:"none",strokeDasharray:o})})}),(0,a.jsx)("rect",{width:"100%",height:"100%",fill:"url(#".concat(g,")")}),(0,a.jsx)("svg",{x:i,y:n,className:"overflow-visible",children:y.map((e,r)=>{let{pos:[l,i],id:n}=e;return(0,a.jsx)(p.P.rect,{initial:{opacity:0},animate:{opacity:m},transition:{duration:x,repeat:1,repeatDelay:h,delay:.1*r,repeatType:"reverse"},onAnimationComplete:()=>k(n),width:t-1,height:s-1,x:l*t+1,y:i*s+1,fill:"currentColor",strokeWidth:"0"},"".concat(l,"-").concat(i,"-").concat(n))})})]})}function I(){let[e,t]=(0,r.useState)(!1),s=()=>t(!0),o=()=>t(!1);return(0,r.useEffect)(()=>{let e=e=>{var t;let s=e.target;if("A"===s.tagName&&(null===(t=s.getAttribute("href"))||void 0===t?void 0:t.startsWith("#"))){e.preventDefault();let t=s.getAttribute("href"),a=document.querySelector(t);null==a||a.scrollIntoView({behavior:"smooth"})}};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S,{openModal:s}),(0,a.jsx)("section",{id:"home",className:"bg-background text-foreground py-12 md:py-20",children:(0,a.jsxs)("div",{className:"container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 lg:px-24 xl:px-40",children:[(0,a.jsxs)("div",{className:"md:w-1/2 flex flex-col justify-center order-2 md:order-1",children:[(0,a.jsx)("h1",{className:"scroll-m-20 text-5xl font-medium tracking-tight lg:text-6xl mb-6",children:"End Customs Delays and Slash Compliance Costs"}),(0,a.jsx)("p",{className:"leading-7 mb-8 text-xl dark:text-zinc-300",children:"We’re building the automation SMEs need to ship faster, save more, and scale without the stress."}),(0,a.jsx)(n.$,{size:"lg",variant:"default",onClick:s,children:"Get Early Access →"}),(0,a.jsx)("p",{className:"leading-7 mt-4 text-muted-foreground",children:"Tired of 30+ day delays and unexpected surcharges? Join us."})]}),(0,a.jsx)("div",{className:"md:w-1/2 w-full flex justify-center order-1 md:order-2",children:(0,a.jsx)(z,{duration:1,delay:0,inView:!0,children:(0,a.jsx)("div",{className:"relative w-full min-h-[250px] md:min-h-0 md:h-full",children:(0,a.jsx)(i.default,{src:"/assets/placeholder-hero.png",alt:"Hero Screenshot Placeholder",className:"w-full h-auto md:h-full md:w-auto object-cover",width:800,height:600,priority:!0})})})})]})}),(0,a.jsx)("section",{id:"features",className:"bg-background text-foreground py-12",children:(0,a.jsxs)("div",{className:"container mx-auto px-6 md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsx)("h2",{className:"scroll-m-20 text-4xl font-medium tracking-tight mb-6 text-left",children:"Your Compliance Pain, Solved"}),(0,a.jsxs)("div",{className:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded",children:[(0,a.jsxs)("div",{className:"order-2 md:order-1",children:[(0,a.jsx)("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight mb-2",children:"End 30+ Day Delays"}),(0,a.jsx)("p",{className:"leading-7 mb-4",children:"Tired of shipments stuck in customs limbo? We’re targeting a 63% cut in clearance times."})]}),(0,a.jsx)("div",{className:"order-1 md:order-2 w-full",children:(0,a.jsx)(i.default,{src:"/assets/placeholder-valueprop1.png",alt:"Faster Clearance",className:"mb-4 w-full object-cover rounded",width:800,height:600})})]}),(0,a.jsxs)("div",{className:"flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded",children:[(0,a.jsxs)("div",{className:"order-2 md:order-1",children:[(0,a.jsx)("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight mb-2",children:"Stop Costly Surcharges"}),(0,a.jsx)("p",{className:"leading-7 mb-4",children:"A $220K penalty stings. We’re building automation to catch errors before they hit."})]}),(0,a.jsx)("div",{className:"order-1 md:order-2 w-full",children:(0,a.jsx)(i.default,{src:"/assets/placeholder-valueprop2.png",alt:"Cost Savings",className:"mb-4 w-full object-cover rounded",width:800,height:600})})]}),(0,a.jsxs)("div",{className:"flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded",children:[(0,a.jsxs)("div",{className:"order-2 md:order-1",children:[(0,a.jsx)("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight mb-2",children:"Ditch Manual Chaos"}),(0,a.jsx)("p",{className:"leading-7 mb-4",children:"Spreadsheets eating your week? We’re designing a smarter way to manage compliance."})]}),(0,a.jsx)("div",{className:"order-1 md:order-2 w-full",children:(0,a.jsx)(i.default,{src:"/assets/placeholder-valueprop3.png",alt:"Manual Work",className:"mb-4 w-full object-cover rounded",width:800,height:600})})]}),(0,a.jsxs)("div",{className:"flex flex-col-reverse md:flex-col items-start p-6 border border-border/40 rounded",children:[(0,a.jsxs)("div",{className:"order-2 md:order-1",children:[(0,a.jsx)("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight mb-2",children:"Scale Without Stress"}),(0,a.jsx)("p",{className:"leading-7 mb-4",children:"Growth shouldn’t mean compliance nightmares. We’re crafting a scalable solution."})]}),(0,a.jsx)("div",{className:"order-1 md:order-2 w-full",children:(0,a.jsx)(i.default,{src:"/assets/placeholder-valueprop4.png",alt:"Scalability",className:"mb-4 w-full object-cover rounded",width:800,height:600})})]})]})]})}),(0,a.jsx)("section",{id:"roi-calculator",className:"bg-background text-foreground py-12",children:(0,a.jsxs)("div",{className:"container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsx)("h2",{className:"scroll-m-20 text-4xl font-medium tracking-tight mb-4 text-left px-6",children:"See Your Potential Savings"}),(0,a.jsx)(v,{})]})}),(0,a.jsx)("section",{id:"why-compliance",className:"text-foreground py-2",children:(0,a.jsxs)("div",{className:"relative flex min-h-[600px] sm:min-h-[700px] w-full items-center justify-center overflow-visible md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsx)(W,{numSquares:70,maxOpacity:.15,duration:.5,repeatDelay:.5,className:(0,l.cn)("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]","inset-x-0 inset-y-[5%] h-full skew-y-12 opacity-35")}),(0,a.jsxs)("div",{className:"container mx-auto px-4 sm:px-6",children:[(0,a.jsx)("h2",{className:"scroll-m-20 text-3xl sm:text-4xl font-medium tracking-tight mb-6 text-left",children:"Why Compliance Sucks (And Why We’re Fixing It)"}),(0,a.jsx)(h,{}),(0,a.jsx)("div",{className:"mt-8 text-center",children:(0,a.jsx)(n.$,{size:"lg",variant:"outline",className:"z-10 relative",onClick:s,children:"Join the Waitlist"})})]})]})}),(0,a.jsx)("section",{id:"why-join",className:"bg-background text-foreground py-12",children:(0,a.jsxs)("div",{className:"container mx-auto px-6 text-center md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsx)("h2",{className:"scroll-m-20 text-4xl font-medium tracking-tight mb-2 text-left",children:"Why Join VelocityCompliance Now?"}),(0,a.jsx)("p",{className:"leading-7 mb-6 mx-auto tracking-tight text-left lg:pr-94",children:"We’re not just another tool—we’re solving the compliance chaos that’s holding SMEs back. Join our waitlist to get in early and help us build what you need."}),(0,a.jsxs)("ul",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 tracking-tight text-left",children:[(0,a.jsxs)("li",{className:"p-6 border border-border/40 rounded-lg",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-2 tracking-tight",children:"Early Access"}),(0,a.jsx)("p",{className:"tracking-tight text-s/2",children:"Be the first to try our platform when it launches."})]}),(0,a.jsxs)("li",{className:"p-6 border border-border/40 rounded-lg",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-2 tracking-tight",children:"Shape the Future"}),(0,a.jsx)("p",{className:"tracking-tight text-s/2",children:"Your feedback will define how we tackle your pain points."})]}),(0,a.jsxs)("li",{className:"p-6 border border-border/40 rounded-lg",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-2 tracking-tight",children:"Exclusive Perks"}),(0,a.jsx)("p",{className:"tracking-tight text-s/2",children:"First 100 sign-ups get 20% off year one + a free consultation."})]})]}),(0,a.jsx)(n.$,{size:"lg",onClick:s,children:"Join the Waitlist"})]})}),(0,a.jsx)("footer",{className:"bg-background text-foreground py-8 border-t border-border/40",children:(0,a.jsxs)("div",{className:"container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8 md:px-12 lg:px-24 xl:px-40",children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsx)("a",{href:"#home",className:"hover:text-primary",children:"Home"}),(0,a.jsx)("a",{href:"#features",className:"hover:text-primary",children:"Features"}),(0,a.jsx)("a",{href:"#roi-calculator",className:"hover:text-primary",children:"ROI Calculator"}),(0,a.jsx)("a",{href:"#why-compliance",className:"hover:text-primary",children:"Why Compliance?"}),(0,a.jsx)("a",{href:"mailto:velocitycomplianceofficial@gmail.com",className:"hover:text-primary",children:"Contact Us"}),(0,a.jsx)("a",{href:"/privacy",className:"hover:text-primary text-xs  mt-8 color dark:text-zinc-600",children:"Privacy Policy"})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-between h-auto",children:[(0,a.jsx)("div",{className:"text-lg font-semibold text-primary w-auto lg:text-right md:text-left",children:"VelocityCompliance"}),(0,a.jsx)("div",{className:"text-sm mt-6 lg:mt-auto",children:"\xa9 2025. Designed in Sweden, for the world \uD83C\uDF0D."})]})]})}),(0,a.jsx)("div",{className:"py-12",children:e&&(0,a.jsx)("div",{id:"modalOverlay",className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center",onClick:o,children:(0,a.jsxs)("div",{className:"bg-background text-foreground rounded-lg shadow-lg w-full max-w-md p-6 relative",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"absolute top-3 right-3 text-foreground hover:text-primary text-2xl",onClick:o,children:"\xd7"}),(0,a.jsx)("h2",{className:"text-2xl font-bold mb-2 text-left",children:"Join the Waitlist for Early Access"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground text-left mb-8",children:"Be the first to transform your compliance process."}),(0,a.jsx)(b.A,{onSuccess:o,ctaText:"Join the Waitlist"})]})})})]})}},5402:(e,t,s)=>{Promise.resolve().then(s.bind(s,2756))}},e=>{var t=t=>e(e.s=t);e.O(0,[229,365,687,565,383,603,551,441,587,358],()=>t(5402)),_N_E=e.O()}]);