(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1464:(e,t,n)=>{"use strict";n.d(t,{sf:()=>a,so:()=>s});var o=n(8576),r=n(2115),i=(0,r.createContext)({client:o.Ay});function s(e){var t=e.children,n=e.client,s=e.apiKey,a=e.options,l=(0,r.useState)(!1),u=l[0],c=l[1],p=(0,r.useMemo)(function(){return n?(s&&console.warn("[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`."),a&&console.warn("[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`."),n.__loaded&&console.warn("[PostHog.js] `client` was already loaded elsewhere. This may cause issues."),n):s?(!1!==u?(s!==u.previousAPIKey&&console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop."),a&&!function e(t,n,o){if(void 0===o&&(o=new WeakMap),t===n)return!0;if("object"!=typeof t||null===t||"object"!=typeof n||null===n)return!1;if(o.has(t)&&o.get(t)===n)return!0;o.set(t,n);var r=Object.keys(t),i=Object.keys(n);if(r.length!==i.length)return!1;for(var s=0;s<r.length;s++){var a=r[s];if(!i.includes(a)||!e(t[a],n[a],o))return!1}return!0}(a,u.previousOptions)&&o.Ay.set_config(a)):(o.Ay.__loaded&&console.warn("[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues."),o.Ay.init(s,a)),c({previousAPIKey:s,previousOptions:null!=a?a:{}}),o.Ay):(console.warn("[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior."),o.Ay)},[n,s,JSON.stringify(a)]);return r.createElement(i.Provider,{value:{client:p}},t)}var a=function(){return(0,r.useContext)(i).client},l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function c(e){var t=e.flag,n=e.children,o=e.onIntersect,r=e.onClick,i=e.trackView,s=e.options,c=u(e,["flag","children","onIntersect","onClick","trackView","options"]),p=useRef(null);return useEffect(function(){if(null!==p.current&&i){var e=new IntersectionObserver(function(e){return o(e[0])},l({threshold:.1},s));return e.observe(p.current),function(){return e.disconnect()}}},[t,s,a(),p,i,o]),React.createElement("div",l({ref:p},c,{onClick:r}),n)}},2239:(e,t,n)=>{"use strict";n.d(t,{PostHogProvider:()=>c});var o=n(5155),r=n(8576),i=n(1464),s=n(2115),a=n(6658);function l(){let e=(0,a.usePathname)(),t=(0,a.useSearchParams)(),n=(0,i.sf)();return(0,s.useEffect)(()=>{if(e&&n){let o=window.origin+e;t.toString()&&(o+="?".concat(t.toString())),n.capture("$pageview",{$current_url:o})}},[e,t,n]),null}function u(){return(0,o.jsx)(s.Suspense,{fallback:null,children:(0,o.jsx)(l,{})})}function c(e){let{children:t}=e;return(0,s.useEffect)(()=>{r.Ay.init("phc_UKNnvpEeL3J66CKioQ8as9yCKPVgE7403Fimk1SOmkN",{api_host:"https://eu.i.posthog.com",capture_pageview:!1,capture_pageleave:!0})},[]),(0,o.jsxs)(i.so,{client:r.Ay,children:[(0,o.jsx)(u,{}),t]})}},2294:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9324,23)),Promise.resolve().then(n.bind(n,2239))},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[533,229,441,587,358],()=>t(2294)),_N_E=e.O()}]);