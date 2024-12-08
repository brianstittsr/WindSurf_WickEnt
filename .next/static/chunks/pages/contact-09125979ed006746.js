(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(4130)}])},4130:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return o}});var s=r(5893),t=r(7294);function o(){let[e,a]=(0,t.useState)({name:"",email:"",subject:"",message:""}),[r,o]=(0,t.useState)({type:"",message:""}),[l,n]=(0,t.useState)(!1),d=async r=>{r.preventDefault(),n(!0),o({type:"",message:""});try{let r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await r.json();r.ok?(o({type:"success",message:"Thank you for your message. We will get back to you soon!"}),a({name:"",email:"",subject:"",message:""})):o({type:"error",message:s.message||"Something went wrong. Please try again later."})}catch(e){o({type:"error",message:"Something went wrong. Please try again later."})}finally{n(!1)}},m=e=>{a(a=>({...a,[e.target.name]:e.target.value}))};return(0,s.jsx)("div",{className:"min-h-screen",style:{background:"var(--bg-primary)"},children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)("h1",{style:{color:"var(--text-primary)"},className:"text-4xl font-bold mb-4",children:"Contact Us"}),(0,s.jsx)("div",{className:"w-24 h-1 bg-gradient-to-r from-flame-500 to-health-500 mx-auto mb-8"}),(0,s.jsx)("p",{style:{color:"var(--text-secondary)"},className:"text-xl max-w-3xl mx-auto",children:"Have questions or want to learn more about our services? We'd love to hear from you and help ignite positive change in your community."})]}),(0,s.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,s.jsxs)("div",{style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},className:"rounded-lg shadow-xl p-8",children:[r.message&&(0,s.jsx)("div",{className:"mb-6 p-4 rounded-md ".concat("success"===r.type?"bg-green-50 text-green-800":"bg-red-50 text-red-800"),children:r.message}),(0,s.jsxs)("form",{onSubmit:d,className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:m,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:m,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-1",children:"Subject"}),(0,s.jsx)("input",{type:"text",id:"subject",name:"subject",required:!0,value:e.subject,onChange:m,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),(0,s.jsx)("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:m,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"})]}),(0,s.jsx)("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-flame-500 to-health-500 text-white py-3 px-6 rounded-md hover:from-flame-600 hover:to-health-600 transition-all duration-300 shadow-lg hover:shadow-xl ".concat(l?"opacity-75 cursor-not-allowed":""),children:l?"Sending...":"Send Message"})]})]}),(0,s.jsxs)("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,s.jsxs)("div",{style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},className:"text-center p-6 rounded-lg shadow-md",children:[(0,s.jsx)("div",{className:"text-flame-500 text-2xl mb-4",children:"\uD83D\uDCCD"}),(0,s.jsx)("h3",{style:{color:"var(--text-primary)"},className:"font-semibold mb-2",children:"Address"}),(0,s.jsxs)("p",{style:{color:"var(--text-secondary)"},children:["2912 DEBRA DR",(0,s.jsx)("br",{}),"RALEIGH NC 27607-3126"]})]}),(0,s.jsxs)("div",{style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},className:"text-center p-6 rounded-lg shadow-md",children:[(0,s.jsx)("div",{className:"text-flame-500 text-2xl mb-4",children:"\uD83D\uDCDE"}),(0,s.jsx)("h3",{style:{color:"var(--text-primary)"},className:"font-semibold mb-2",children:"Phone"}),(0,s.jsx)("p",{style:{color:"var(--text-secondary)"},children:"919-696-0206"})]}),(0,s.jsxs)("div",{style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},className:"text-center p-6 rounded-lg shadow-md",children:[(0,s.jsx)("div",{className:"text-flame-500 text-2xl mb-4",children:"✉️"}),(0,s.jsx)("h3",{style:{color:"var(--text-primary)"},className:"font-semibold mb-2",children:"Email"}),(0,s.jsx)("p",{style:{color:"var(--text-secondary)"},children:"thea.monet@wickent.org"})]})]})]})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);