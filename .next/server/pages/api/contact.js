"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},9991:(e,t,n)=>{n.r(t),n.d(t,{config:()=>l,default:()=>p,routeModule:()=>m});var r={};n.r(r),n.d(r,{default:()=>c});var s=n(1802),o=n(7153),a=n(6249);let i=require("nodemailer");var u=n.n(i);async function c(e,t){if("POST"!==e.method)return t.status(405).json({message:"Method not allowed"});let{name:n,email:r,subject:s,message:o}=e.body,a=u().createTransport({host:process.env.SMTP_HOST||"smtp.gmail.com",port:parseInt(process.env.SMTP_PORT||"587"),secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}});try{await a.sendMail({from:process.env.SMTP_FROM||"your-email@example.com",to:"thea.monet@wickent.org",subject:`New Contact Form Submission: ${s}`,html:`
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${n}</p>
        <p><strong>Email:</strong> ${r}</p>
        <p><strong>Subject:</strong> ${s}</p>
        <p><strong>Message:</strong></p>
        <p>${o}</p>
      `}),t.status(200).json({message:"Email sent successfully"})}catch(e){console.error("Error sending email:",e),t.status(500).json({message:"Error sending email"})}}let p=(0,a.l)(r,"default"),l=(0,a.l)(r,"config"),m=new s.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:r})},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var n=t(t.s=9991);module.exports=n})();