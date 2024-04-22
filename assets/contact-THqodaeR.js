import{P as d,r as x,j as t,u as j}from"./index-CymTQMfU.js";const c={_origin:"https://api.emailjs.com"},v=(e,s="https://api.emailjs.com")=>{c._userID=e,c._origin=s},h=(e,s,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const p=(e,s,r={})=>new Promise((i,a)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:n})=>{const o=new u(n);o.status===200||o.text==="OK"?i(o):a(o)}),l.addEventListener("error",({target:n})=>{a(new u(n))}),l.open("POST",c._origin+e,!0),Object.keys(r).forEach(n=>{l.setRequestHeader(n,r[n])}),l.send(s)}),N=(e,s,r,i)=>{const a=i||c._userID;return h(a,e,s),p("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:a,service_id:e,template_id:s,template_params:r}),{"Content-type":"application/json"})},_=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},b=(e,s,r,i)=>{const a=i||c._userID,l=_(r);h(a,e,s);const n=new FormData(l);return n.append("lib_version","3.11.0"),n.append("service_id",e),n.append("template_id",s),n.append("user_id",a),p("/api/v1.0/email/send-form",n)},y={init:v,send:N,sendForm:b};function F(e){return/^[\p{L}]([-']?[\p{L}]+)*( [\p{L}]([-']?[\p{L}]+)*)+$/iu.test(e)}function P(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function L(e){return/^\d{9,16}$/.test(e)}function T(e,s,r,i){return!e||!F(e)?(alert("Please enter a valid name !"),!1):!s||!P(s)?(alert("Please enter a valid mail !"),!1):i&&!L(i)?(alert("Please enter a valid phone number !"),!1):r?29>r.length||r.length>700?(alert("Please enter a message between 30 and 800 characters !"),!1):!0:(alert("Please enter a valid message !"),!1)}function f({textContent:e}){const s=x.useRef();async function r(){try{const a=await y.sendForm("service_7s3blms","template_h0dq0xs",s.current,"owysP7P1HSFXLsPTL");console.log("success , result: ",a),alert("Message sent successfully !")}catch(a){console.log("error",a),alert("Message failed to send !")}}const i=async a=>{a.preventDefault();const l=a.target.user_name.value,n=a.target.user_email.value,o=a.target.message.value,g=a.target.user_phone.value;T(l,n,o,g)&&r()};return t.jsxs("form",{ref:s,className:"contactForm",onSubmit:i,children:[t.jsxs("div",{className:"fields",children:[t.jsxs("div",{className:"field",children:[t.jsxs("label",{htmlFor:"name",children:[e.name?e.name:"Votre Nom complet",": ",t.jsx("span",{className:"asterisk",children:"*"})]}),t.jsx("input",{type:"text",id:"name",name:"user_name",required:!0,maxLength:35})]}),t.jsxs("div",{className:"field",children:[t.jsxs("label",{htmlFor:"email",children:[e.email?e.email:"E-mail:",": ",t.jsx("span",{className:"asterisk",children:"*"})]}),t.jsx("input",{type:"email",id:"email",name:"user_email",required:!0})]}),t.jsxs("div",{className:"field",children:[t.jsxs("label",{htmlFor:"phone",children:[e.tel?e.tel:"Numéro de téléphone:",": "]}),t.jsx("input",{type:"tel",id:"phone",name:"user_phone",minLength:"9",maxLength:"16"})]}),t.jsxs("div",{className:"field",children:[t.jsxs("label",{htmlFor:"message",children:[e.message?e.message:"Message:",": ",t.jsx("span",{className:"asterisk",children:"*"})]}),t.jsx("textarea",{id:"message",rows:8,name:"message",required:!0,minLength:30,maxLength:700})]})]}),t.jsxs("div",{className:"contactForm__footer",children:[t.jsxs("button",{className:"submit",type:"submit",children:[e.send?e.send:"Envoyer le message"," !"]}),t.jsxs("span",{className:"asterisk",children:["* ",e.info?e.info:"Champs obligatoires"]})]})]})}f.propTypes={textContent:d.objectOf(d.string)};const w={fr:"Contact",en:"Contact",de:"Kontakt"},E={fr:{title:"Prenez contact",name:"Votre Nom complet",email:"E-mail",tel:"Numéro de téléphone",message:"Message",send:"Envoyer le message",info:"Champs obligatoires"},en:{title:"Get in touch",name:"Your full Name",email:"E-mail",tel:"Phone number",message:"Message",send:"Send Message",info:"Required fields"},de:{title:"Kontaktieren Sie mich",name:"Name",email:"Email",tel:"Telefonnummer",message:"Nachricht",send:"Nachricht senden",info:"Pflichtfelder"}},m={pageTitle:w,contactForm:E};function M(){const{language:e}=j(),s=m.pageTitle[e]?m.pageTitle[e]:"Contact";return document.title=s+" - Werlé Barthélémy",t.jsxs("main",{"data-testid":"contact-testid",className:"container",children:[t.jsx("div",{className:"contact-banner","data-after-content":s,children:t.jsx("h1",{className:"contact-banner__title",children:s})}),t.jsx("div",{className:"contact-wrapper",children:t.jsx(f,{textContent:m.contactForm[e]})})]})}export{M as default};
