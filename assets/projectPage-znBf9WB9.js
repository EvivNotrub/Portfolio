import{p as v,j as e,F as w,P as h,r as t,d as L,e as I,u as R,c as D,a as C,S as N}from"./index-CymTQMfU.js";import{i as y,p as P}from"./imageRenderSizes-zodSHdAe.js";import{g as S,A as F}from"./Accordion-FPdTtyu9.js";function T({next:i,previous:o}){return e.jsx("div",{className:"slideshow__arrows",children:e.jsxs("div",{className:"buttonSlider",children:[e.jsx("button",{type:"button",onClick:()=>{o()},className:"buttonSlider__arrow --left","aria-label":"previous slide",children:e.jsx(w,{className:"svg",icon:"fa-solid fa-chevron-left"})}),e.jsx("button",{type:"button",onClick:()=>{i()},className:"buttonSlider__arrow --right","aria-label":"next slide",children:e.jsx(w,{className:"svg",icon:"fa-solid fa-chevron-right"})})]})})}T.propTypes={next:v.PropTypes.func,previous:v.PropTypes.func};function W({pictures:i,currentPicture:o,previousPicture:l,nextPicture:j,classFullscreen:s}){return i.map((r,d)=>{let a;switch(d){case o:a=" --current";break;case j:a=" --next";break;case l:a=" --previous";break;default:a=""}if(y&&r.src){const n=r.src,_=n.replace(/\.[^/\\.]+$/,"/"),m=n.substr(n.lastIndexOf("/")+1).replace(/\.[^/\\.]+$/,""),f=y.find(c=>c.fileName===m);if(f){const c=f.fileSizes.map(b=>_+m+"-"+b.sizeName+".webp "+b.size+"w").join(", ");r.srcset=c}}return e.jsx("img",{className:"slideshow__picture"+a+s,id:d,src:r.src,sizes:"(min-width: 1280px) 936px, (min-width: 960px) 836px, (min-width: 540px) 90vw, 100vw",srcSet:r.srcset?r.srcset:null,alt:r.alt,loading:a===" --current"?"eager":"lazy"},r.src+d)})}function E({isFullscreen:i,setIsFullscreen:o}){return e.jsx("button",{className:"slideshow__footer__viewbutton",onClick:()=>{o(!i)},"aria-label":"toggle fullscreen button",children:i?e.jsx(w,{icon:"fa-solid fa-compress"}):e.jsx(w,{icon:"fa-solid fa-expand"})})}E.propTypes={isFullscreen:v.PropTypes.bool,setIsFullscreen:v.PropTypes.func};function k({pictures:i,isFullscreen:o,setIsFullscreen:l,classFullscreen:j}){const[s,r]=t.useState(0),[d,a]=t.useState(i.length-1),[n,_]=t.useState(1),u=i.length;t.useEffect(()=>{function f(c){c.key==="Escape"&&o&&l(!1)}return document.addEventListener("keydown",c=>f(c)),()=>{document.removeEventListener("keydown",c=>f(c))}},[o,l]);function m(f){f==="next"?(a(s),r(n),_(n+1===u?0:n+1)):(a(d-1===-1?u-1:d-1),r(d),_(s))}return e.jsxs("div",{className:"slideshow"+j,children:[u>1&&e.jsx(T,{next:()=>{m("next")},previous:()=>{m({direction:"previous"})}}),e.jsx(W,{pictures:i,currentPicture:s,previousPicture:d,nextPicture:n,classFullscreen:j}),e.jsxs("div",{className:"slideshow__footer",children:[e.jsx("div",{className:"slideshow__footer__ghost"}),u>1&&e.jsx("h2",{className:"slideshow__footer__count",children:s+1+"/"+u}),e.jsx(E,{isFullscreen:o,setIsFullscreen:l})]})]})}k.propTypes={pictures:h.arrayOf(h.shape({src:h.string.isRequired,alt:h.string.isRequired})).isRequired,isFullscreen:h.bool,setIsFullscreen:h.func,classFullscreen:h.string};const A={fr:"En bref:",en:"In a nutshell:"},O={fr:"Objectif:",en:"Aim:"},q={fr:"Description complète",en:"Full Description"},g={summaryTitle:A,aimTitle:O,descriptionTitle:q};function $(){const[i,o]=t.useState(!1),l=i?" --fullscreen":" --normalview",{projectID:j}=L(),[s,r]=t.useState(null),[d,a]=t.useState(!0),[n,_]=t.useState(null),u=I(),[m,f]=t.useState(S()),[c,b]=t.useState(!1),{language:p}=R();if(t.useEffect(()=>{function x(){f(S())}return window.addEventListener("resize",x),m.innerWidth<768?b(!1):b(!0),()=>{window.removeEventListener("resize",x)}},[m]),t.useEffect(()=>{if(s){document.title="Project: "+s.name;return}document.title="My Work"},[s]),t.useEffect(()=>{if(P){const x=P.projects.find(z=>z.id===j);if(!x){_(new Error("No Project found")),a(!1);return}r(x),a(!1)}},[j]),t.useEffect(()=>{if(n){const x=setTimeout(()=>{u("/projects")},5e3);return()=>{clearTimeout(x)}}},[n,u]),d)return e.jsx("main",{className:"project-loading",children:e.jsx(D,{})});if(n)return e.jsx("main",{className:"project-page-error",children:e.jsxs("section",{children:[e.jsx("h1",{children:"Error"}),e.jsx("p",{children:n.message}),e.jsx("p",{children:"Page will redirect to Portfolio page."})]})});if(s)return e.jsxs("main",{"data-testid":"projectpage-testid",className:"project-info",children:[e.jsxs("section",{className:"project-info__major",children:[e.jsx("div",{className:"project-info__major__slide",children:e.jsx(k,{pictures:s.pictures,classFullscreen:l,setIsFullscreen:o,isFullscreen:i})}),e.jsxs("div",{className:"project-info__major__description",children:[e.jsx("h1",{className:"project-info__major__title "+l,children:s.name}),e.jsx("div",{className:"project-info__major__links "+l,children:e.jsxs(C,{children:[s.links.github&&e.jsx(N,{link:s.links.github,text:"GitHub",children:e.jsx(w,{icon:"fa-brands fa-github"})}),s.links.demo&&e.jsx(N,{link:s.links.demo,text:"GitHub Pages",children:e.jsx(w,{icon:"fa-solid fa-globe"})})]})})]})]}),e.jsxs("section",{className:"project-info__details "+l,children:[e.jsxs("article",{className:"project-info__details__summary",children:[e.jsx("h2",{className:"project-info__details__summary__title",children:g.summaryTitle[p]?g.summaryTitle[p]:"En bref:"}),e.jsx("p",{children:s.summary[p]}),e.jsx("h3",{children:g.aimTitle[p]?g.aimTitle[p]:"Objectif:"}),e.jsx("p",{children:s.aim[p]})]}),e.jsx(F,{title:g.descriptionTitle[p]?g.descriptionTitle[p]:"Description complète",datum:s.description[p],className:"project-info__details__description",expanded:c})]})]})}export{$ as default};
