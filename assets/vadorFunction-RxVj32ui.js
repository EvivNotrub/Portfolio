function c(){for(let e=0;e<document.styleSheets.length;e++)try{for(let t=0;t<document.styleSheets[e].cssRules.length;t++){const r=document.styleSheets[e].cssRules[t];if(r&&r.media&&r.media.mediaText.includes("prefers-color-scheme")){const s=r.media.mediaText;let o;s.includes("light")&&(o=s.replace("light","dark")),s.includes("dark")&&(o=s.replace("dark","light")),r.media.deleteMedium(s),r.media.appendMedium(o)}}}catch(t){const r=document.styleSheets[e].href;console.warn(r+" broke something with theme toggle : "+t)}}function n(e){const t=document.querySelector('meta[name="color-scheme"]');t?t.setAttribute("content",e?"dark":"light"):document.head.insertAdjacentHTML("beforeend",`<meta name="color-scheme" content="${e?"dark":"light"}">`),e===null&&document.querySelector('meta[name="color-scheme"]').setAttribute("content","dark light")}const i=async e=>{try{await new Promise((o,l)=>{e.onload=o,e.onerror=l});const t=e.sheet;if(!t){console.error("Failed to retrieve stylesheet from node.");return}const r=[],s=t.cssRules;for(let o=0;o<s.length;o++){const l=s[o];l.media&&l.media.mediaText.includes("prefers-color-scheme")&&r.push(l)}r.forEach(o=>{let l=o.media.mediaText;l.includes("light")?l=l.replace("light","dark"):l.includes("dark")&&(l=l.replace("dark","light")),o.media.mediaText=l})}catch(t){console.error("Failed to load stylesheet:",t)}};export{i as adjustStylesheetForThemeMode,n as setMetaColorScheme,c as switch_theme_rules};