if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>c(e,n),r={module:{uri:n},exports:o,require:t};s[n]=Promise.all(a.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"00db7ce522893d7988d4b76e74d3526a"},{url:"/_next/static/_K0-ikpoOcMcFMzzBborY/_buildManifest.js",revision:"e7423757b55eb94c89ccbae327ff7e9e"},{url:"/_next/static/_K0-ikpoOcMcFMzzBborY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1127-4ad13563678c1fed.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/1651-5865c0aeeffce588.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/1992-96897497d3e4c906.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/2541-b2f708a5656595e7.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/451-8e87bcab020eaa1a.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/4938-fbbad5800d5c6365.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/5250-ff2ab55e889a6585.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/6184-52ea7cf8d208188d.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/7228-4f0992a607a73a01.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/7390-5cd46f3b7e83c2ad.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/767-822c40fc940e177e.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/8031-8e47bedac0d20003.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/9748-57bd07b8ff4842d5.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/aboutus/page-321ced37452ac5a5.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/auth/signin/page-1ff288dde6d2ccc4.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/auth/userprofile/page-cffa151a09b193ac.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/blogs/%5Bid%5D/page-03c6f3d7065d7d0b.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/blogs/page-2974afa10825184a.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/careerhome/page-a34a393cfbefec01.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/checkout/page-b40637afe4f05807.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/companyprofile/page-78ab851e3f2079f9.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/interviewprep/page-01bf5cb17c5a3e68.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/layout-2abee12881c33de4.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/page-202b508b13556bae.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/recommendations/page-3bd9b8572d55bd99.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/resume/page-da60f23115617a02.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/dashboard/skills/page-205f809192c1a97e.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/companies/page-6c15a016ef9c6de3.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/%5Bid%5D/page-a160a8c331b10b5d.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/courselanding/page-759cb6f6df48eca0.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/courselayout/page-c92deabaa56ee52a.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/addcourse/page-7f2e6965106989c5.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/certificates/page-b0e3d4b347f61cc3.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/favourite/page-86f443735157f468.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/layout-262b79548edc2307.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/page-2d29f2403e4b8a40.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/recommendations/page-70b07d3903c79d15.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/dashboard/reminders/page-3a1a6be6a9ac3efe.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/instructor/dashboard/layout-ebe7d0c2534b2bb5.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/instructor/dashboard/page-12d6521506c94357.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/instructor/page-19e7752320e75c13.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/course/page-e145344474268a9d.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/events/page-18ca6fa303a9b32a.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/%5Bid%5D/page-acd0d8e3d9d7c0e2.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/interviewprep/page-5f003645a2036b0b.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/layout-905c27da185daa2d.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/page-1617c5eeb202eec1.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/recommendations/page-1bd3ca30e9656964.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/resume/page-91df451d4a50a3d9.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/dashboard/skills/page-e1123b8baff5c1b9.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/internship/page-aa6f4e7157332bed.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/interviewprep/page-9442fdfc0aec0722.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/layout-79a8c2f53a93e7ae.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/page-708f74da91087a4f.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/recommendations/page-0bd93093d23ff633.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/resume/page-2ac72fc6bae3ac64.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/dashboard/skills/page-72a64309db81ba56.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/jobdescription/page-154aba5e39865abb.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/jobs/page-3983ccfa9587d755.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/layout-89bcfc015acb9a04.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/not-found-c225b2ed32daead4.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/page-124c83645b84614a.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/pricing/page-498ea49021385f8e.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/profile-client/page-411bba9e54f82f07.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/profile-server/page-a2d7d38b2e4e2486.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/shop/page-ad6f216469d9fa1d.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/test/page-c0fab5fcfa0388d8.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/test/testcourse/page-55d0f0710afd4692.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/app/video-testing/page-a0a0bc3a1657a297.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/fd9d1056-344755af5ad95d6f.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/main-5b805369b3523d2e.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/main-app-d115b494da394df2.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/pages/_app-11c09b1e93f7270c.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/pages/_error-7ae0e5d1f9ec0862.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-505b71a85bc26354.js",revision:"_K0-ikpoOcMcFMzzBborY"},{url:"/_next/static/css/47878261140dea8c.css",revision:"47878261140dea8c"},{url:"/_next/static/css/e7d3bab42d9af29d.css",revision:"e7d3bab42d9af29d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"d9f3dc277de0b16d7896275652cb5f93"},{url:"/icon-256x256.png",revision:"38fb6caf7089ca12b140a348b210b055"},{url:"/icon-384x384.png",revision:"b392b117782411f513a07c3a513bb4cd"},{url:"/icon-512x512.png",revision:"1145c7533f30570b5be380334137e9a5"},{url:"/manifest.json",revision:"c4bc24358b077575828119a7adcf20cf"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
