(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{230:function(e,t,M){"use strict";M.r(t);var i=M(0),L=M.n(i),n=M(242),s=M(234),N=M(120).a.div(function(e){var t;return(t={display:"grid",gridGap:"0.7rem",padding:"0.5rem 0",gridTemplateColumns:e.templateColumns})[Object(s.c)(s.b.mobile)]={gridTemplateColumns:"100%"},t});var r=function(e){for(var t="",M=0;M<e.noCols;M++)void 0!==e.nSizes&&null!==e.nSizes&&M<e.nSizes.length?t+=e.nSizes[M]+"% ":t+="1fr ";return L.a.createElement(N,{templateColumns:t},e.children)},o=(M(50),M(14),M(8),M(9),M(2),M(17),M(18));function a(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),M.push.apply(M,i)}return M}function c(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?a(M,!0).forEach(function(t){u(e,t,M[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):a(M).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))})}return e}function u(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}var D=function(e){return Object(o.e)("div",{key:e.id,sx:c({margin:"0.5rem"},e.css)},e.children)},j=M(255),w=M.n(j),y=M(148);function l(e){e.image,e.caption;var t=Object(y.a)(),M=!1===t.rounded?"0%":"50%";return console.log(t.rounded),L.a.createElement(L.a.Fragment,null,L.a.createElement("img",{src:w.a,alt:"This is how John Doe looks",style:{color:"red",borderRadius:""+M}}))}l.defaultProps={caption:L.a.createElement("div",null)};var T=l,z=M(232),x=M(256),m=M(233),g=M(238);function d(e){var t=e.linkedin,M=e.github,i=e.twitter;return Object(o.e)("p",{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:[0,0,2]}},null!==t&&""!==t&&Object(o.e)("a",{href:"https://www.linkedin.com/"+t,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"LinkedIn"},Object(o.e)(g.a,{icon:["fab","linkedin-in"],size:"lg",sx:{color:"icons.linkedin"}})),null!==M&&""!==M&&Object(o.e)("a",{href:"https://www.github.com/"+M,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"Github"},Object(o.e)(g.a,{icon:["fab","github"],size:"lg",sx:{color:"icons.github"}})),null!==i&&""!==i&&Object(o.e)("a",{href:"https://www.twitter.com/"+i,target:"_blank",rel:"noopener noreferrer",style:{borderBottom:"none"},"aria-label":"Twitter"},Object(o.e)(g.a,{icon:["fab","twitter"],size:"lg",sx:{color:"icons.twitter"}})))}z.b.add(x.a,m.a,m.b,m.e),d.defaultProps={linkedin:"",github:"",twitter:""};var I=d;function S(e){var t=e.positions;return L.a.createElement("div",{style:{textAlign:"center"}},t.map(function(e,t){return L.a.createElement("p",{key:"position"+t},L.a.createElement("b",null,e.title),", ",e.company," (",e.duration,")")}))}S.defaultProps={};var b=S,O=M(257),E=M(259),C=function(){return E.data.mdx};function p(){var e=C();return L.a.createElement(O.MDXRenderer,null,e.body)}p.defaultProps={};var Y=p,f=M(235),h=M(260),U=function(){return h.data.authorYaml.positions};function A(e){var t,M=e.location,i=C(),N=Object(f.a)(),o=U(),a=i.frontmatter.title||"Home page",c=i.frontmatter.summary||"Home page",u=N.cover.childImageSharp;return L.a.createElement(n.a,{title:a,description:c,location:M},L.a.createElement(r,{noCols:2,nSizes:[40,60]},L.a.createElement(D,{id:"figureBio",css:(t={margin:"0 10%",display:"flex",flexDirection:"column",alignSelf:"flex-start"},t[Object(s.a)(s.b.mobile)]={position:"sticky",top:"15vh",placeSelf:"self-start stretch"},t)},null!=u&&L.a.createElement(T,{image:u}),L.a.createElement(I,{linkedin:N.username.linkedin,github:N.username.github,twitter:N.username.twitter}),null!=o&&o.length>0&&L.a.createElement(b,{positions:o})),L.a.createElement(D,{id:"descriptionBio",css:{padding:"0 1rem 1rem 1rem"}},L.a.createElement(Y,{description:i.body}))))}A.defaultProps={};t.default=A},234:function(e,t,M){"use strict";M.d(t,"a",function(){return L}),M.d(t,"c",function(){return n}),M.d(t,"b",function(){return s});var i=[20,40,48,64,80,86,120,240],L=function(e){return"@media screen and (min-width: "+e+"rem)"},n=function(e){return"@media screen and (max-width: "+e+"rem)"},s={mobile:i[1],minitablet:i[2],tablet:i[3],laptop:i[4],desktop:i[5],fullhd:i[6],ultrahd:i[7]}},235:function(e,t,M){"use strict";M.d(t,"a",function(){return L});var i=M(239),L=function(){return i.data.authorYaml}},236:function(e){e.exports={data:{site:{siteMetadata:{appName:"Demo of gatsby-theme-simple-bio",title:"Demo of gatsby-theme-simple-bio",author:"John Doe",siteUrl:"https://www.gatsbyjs.org",description:"This site is a demonstration for using theme gatsby-theme-simple-bio"}}}}},237:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOCAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNjYzMzk5O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9Im1vbm9ncmFtIj4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE0IiBjeT0iMTQiIHI9IjE0Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNi4yLDIxLjhDNC4xLDE5LjcsMywxNi45LDMsMTQuMkwxMy45LDI1QzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYuNCwyNC43TDMuMywxMS42QzQuNCw2LjcsOC44LDMsMTQsM2MzLjcsMCw2LjksMS44LDguOSw0LjVsLTEuNSwxLjNDMTkuNyw2LjUsMTcsNSwxNCw1CgkJCWMtMy45LDAtNy4yLDIuNS04LjUsNkwxNywyMi41YzIuOS0xLDUuMS0zLjUsNS44LTYuNUgxOHYtMmg3QzI1LDE5LjIsMjEuMywyMy42LDE2LjQsMjQuN3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},239:function(e){e.exports={data:{authorYaml:{name:"John Doe",username:{email:"john_doe@mail.com",github:"john-doe",twitter:"john_doe",linkedin:"john-doe",facebook:"john.doe"},cover:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAElEQVQ4y6VSW0hUURS989BKCAL96S8irB/xrYUfIRRkIkkz4ygkSGX1I5WVIGKKYVkaQSZqYkWW5aij+SjzQUTkI8OPIHCydMTUqSgt1BlnnLPa586d8Tr5+OjCunuffdZaZ5+HIKz9qQgKr5pijfq6nzd5O2EnYcsqXOVGZnKCjtBK+E2wEcYJdYR0aYENTd0TAZIR1oGV0E2IWMvUvU1/wrAkckhgEpzSeElmbFvL1D0okxGZlDMZ5GObNG5c7ezdgyZZd0yhUDClUgGKnu1u8lUzXx81k3Xau9qtq6RYwcUqpdLOyYWZKfg5eB+9hkK0VWXjdW0BZoceIiM1jhvZfdQqHiu9PFYMUqVVl1RKBasvvcRePshn+NoCTLXDUJrFbB+fsoGGa+4z5VzNP4aZqbGePGF/UB8nJsfHOD6038LlDD3DFyMcw3W4mJ7ITJ23gZluZ+LBaARs8/sMDG/mOs2B4OX2gBdCVV6KeDHTPQX5N7P0sPTfc2CihWHUCHyqZyLMTWA8Trbb3zdewYuyU0/cd4Dx6pWHyE1dO6D/zPPjmGyD02RYwlizE2basvkZKGdspMGOiVZgpPY6vl/1E/mLxpWX8u1VoRhtQ3c8NTKrwa9OWLuKsdBVzKw9JWy+o4jhRweZNXR7GjHXiGYDjy4sG7KUYGHqsatgqz6rnKJ36SjPVGO0udg+WLUwZ8zFn/octthXbqfzrGZv727lj2+hLlvNNZamHGHp5D5phSTXYSItUIAmXOX9nub6iyoxUklnX4H5dzcM3vPQhqu4Vu4l4PQOAXExCle3Qf5MG3IGyVH1i4d3m8YKY62z/XngGC85ZF2M32OCPqpB5BBX1JOWe3g6Y5IZdCFp0IRZoI+EiKNhmNbtYhPnIh0T56McFn0g4zXPPOeSxmPKO6WiymUWegLH9oI6A3QRLiSRSEdIDAaOBLtysSbNcy7XkFb04F4sIdrVnTY0lwpvCK1ME9ZBsYNHpqVcFyGC5/I5zhU1pBU9JC+eCP/7uT3+Aqxn34x6Pop3AAAAAElFTkSuQmCC",aspectRatio:1,src:"/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/647de/profile.png",srcSet:"/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/bf65b/profile.png 100w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/7c0ed/profile.png 200w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/647de/profile.png 400w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/59139/profile.png 600w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/af144/profile.png 800w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/ec873/profile.png 1920w",srcWebp:"/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/f4957/profile.webp",srcSetWebp:"/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/74729/profile.webp 100w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/1932c/profile.webp 200w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/f4957/profile.webp 400w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/6fae7/profile.webp 600w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/c6096/profile.webp 800w,\n/gatsby-theme-simple-bio/static/7846e2ae8d027f0caed3668139fb10b1/cb272/profile.webp 1920w",sizes:"(max-width: 400px) 100vw, 400px"}}}}}}},240:function(e){e.exports={data:{site:{buildTime:"Sat Jul 20 2019 16:43:03 +00:00"}}}},241:function(e){e.exports={data:{sitePlugin:{version:"0.1.3",name:"gatsby-theme-simple-bio"}}}},242:function(e,t,M){"use strict";var i=M(0),L=M.n(i),n=M(18),s=M(232),N=M(233),r=M(120),o=M(243),a=M.n(o),c=M(236),u=function(){return c.data.site.siteMetadata};function D(e){var t=e.lang,M=e.title,i=e.description,s=e.author,N=e.keywords,r=u(),o=Object(n.g)(),c=o.theme,D=o.colorMode,j="";"light"===D?j=c.colors.primary:"dark"===D&&(j=c.colors.modes.dark.primary);var w={title:""===M?r.title:M,author:""===r.author?s:r.author,description:i,keywords:N};return L.a.createElement(L.a.Fragment,null,L.a.createElement(a.a,{htmlAttributes:{lang:t},title:w.title,meta:[{name:"author",content:w.author},{name:"description",content:w.description},{name:"keywords",content:w.keywords},{name:"generator",content:"Gatsby site generator"},{name:"application-name",content:r.appName},{name:"theme-color",content:j}]}))}D.defaultProps={lang:"en",author:"John Doe",title:"",description:"",keywords:["gatsby","gatsby-theme","gatsby-theme-simple-bio","gatsby-plugin"]};var j=D;var w=function(e){var t=e.children;return Object(n.e)("div",{sx:{position:"relative",margin:"0 auto",width:["90%","90%","85%","80%"]}},t)};var y=function(){var e=u().author;return Object(n.e)("nav",{role:"navigation",sx:{display:"flex",flexDirection:"row",position:"fixed",width:"100%",zIndex:10,top:0,bg:"background"}},Object(n.e)(w,null,Object(n.e)(n.b.h1,null,e)))},l=(M(26),M(2),M(19),M(237)),T=M.n(l),z=M(238),x=M(234),m=M(235),g=M(240),d=function(){return g.data.site.buildTime},I=M(241),S=function(){return I.data.sitePlugin};s.b.add(N.c);var b=function(){var e,t,M=Object(m.a)(),i=d(),L=S();return Object(n.e)("footer",{style:{zIndex:4,fontSize:"0.8rem",width:"100%",backgroundColor:"",padding:"2rem",bottom:"-10rem",position:"relative",textAlign:"center"}},Object(n.e)("div",{style:{margin:"0.2rem auto"}},Object(n.e)("span",{id:"copyright"},"© ",Object(n.e)(n.b.a,{href:"/"},M.name)," ",(new Date).getFullYear(),". ")," ",Object(n.e)("br",null),Object(n.e)("span",{css:(e={},e[Object(x.c)(x.b.minitablet)]={display:"none"},e)},"Made in",Object(n.e)("span",null," ",Object(n.e)(z.a,{icon:["fas","heart"],size:"sm",color:"red"})," "),"with ",Object(n.e)("a",{href:"https://www.gatsbyjs.org/",sx:{textDecoration:"none",borderBottom:"none"}},Object(n.e)("img",{alt:"Gatsby icon",src:T.a,width:"18",height:"18",role:"presentation"})),". Powered by ",L.name," (Version: ",L.version,"). "),Object(n.e)("br",null),Object(n.e)("span",{css:(t={},t[Object(x.c)(x.b.mobile)]={display:"none"},t)},Object(n.e)("b",null,"Last modified: "),new Date(i).toString())))};function O(){var e=C(["\n  display: flex;\n  flex-direction: column;\n  top: 5rem;\n  position: relative;\n  margin-bottom: 5rem;\n"]);return O=function(){return e},e}function E(){var e=C(["\n  display: flex;\n  flex-direction: column;\n  /*width: 100%;\n  height: 100%;\n  position: absolute;*/\n"]);return E=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}var p=r.a.div(E()),Y=r.a.main(O());function f(e){var t=e.title,M=e.description,i=(e.location,e.children);return L.a.createElement(L.a.Fragment,null,L.a.createElement(j,{title:t,description:M}),L.a.createElement(p,null,L.a.createElement(y,null),L.a.createElement(Y,null,L.a.createElement(w,null,i)),L.a.createElement(b,null)))}var h=f;function U(e){var t=e.title,M=e.description,i=e.location,s=e.children;return L.a.createElement(h,{title:t,description:M,location:i},L.a.createElement(n.b.h1,null," ",L.a.createElement("span",null,t)),L.a.createElement("section",null,s))}f.defaultProps={description:""},s.b.add(N.d);t.a=U;U.defaultProps={description:""}},255:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDc2IDE2MTguOTciPjx0aXRsZT5Qcm9maWxlQXZhdGFyPC90aXRsZT48cGF0aCBkPSJNMjI0LDE3OTkuNWExNjUuNTQsMTY1LjU0LDAsMCwxLTEuNTEtMjIuMThjMC00Ni40NSwxOS40Ny05MS41Myw1Ny44Ny0xMzQsMzcuMTItNDEsOTAuMjgtNzcuODksMTU4LTEwOS41NXMxNDYuNjItNTYuNTMsMjM0LjQ2LTczLjljOTEtMTgsMTg3LjU3LTI3LjExLDI4Ny4xNy0yNy4xMXMxOTYuMjEsOS4xMiwyODcuMTcsMjcuMTFjODcuODQsMTcuMzcsMTY2LjcyLDQyLjIzLDIzNC40Niw3My45czEyMC44OCw2OC41MiwxNTgsMTA5LjU1YzM4LjQsNDIuNDQsNTcuODcsODcuNTIsNTcuODcsMTM0YTE2NS41NCwxNjUuNTQsMCwwLDEtMS41MSwyMi4xOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiIHN0eWxlPSJmaWxsOiNmZjUzMzMiLz48cGF0aCBkPSJNOTYwLDE0MzMuMjljOTkuNTYsMCwxOTYuMTUsOS4xMiwyODcuMDcsMjcuMSw4Ny44LDE3LjM2LDE2Ni42NSw0Mi4yMSwyMzQuMzUsNzMuODZzMTIwLjc2LDY4LjQ1LDE1Ny44NCwxMDkuNDRDMTY3Ny41NywxNjg2LDE2OTcsMTczMSwxNjk3LDE3NzcuMzJhMTY0LjgyLDE2NC44MiwwLDAsMS0xLjQ1LDIxLjY4SDIyNC40NWExNjQuODIsMTY0LjgyLDAsMCwxLTEuNDUtMjEuNjhjMC00Ni4zMiwxOS40My05MS4yOCw1Ny43NC0xMzMuNjMsMzcuMDgtNDEsOTAuMTgtNzcuODEsMTU3Ljg0LTEwOS40NHMxNDYuNTUtNTYuNSwyMzQuMzUtNzMuODZjOTAuOTItMTgsMTg3LjUxLTI3LjEsMjg3LjA3LTI3LjFtMC0xYy00MDcuNTksMC03MzgsMTU0LjQ4LTczOCwzNDVhMTYzLjM4LDE2My4zOCwwLDAsMCwxLjU4LDIyLjY4SDE2OTYuNDJhMTYzLjM4LDE2My4zOCwwLDAsMCwxLjU4LTIyLjY4YzAtMTkwLjU1LTMzMC40MS0zNDUtNzM4LTM0NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiIHN0eWxlPSJmaWxsOiNmZjhjMDAiLz48ZWxsaXBzZSBjeD0iMTE4OC4yNCIgY3k9Ijc2NS4wOSIgcng9IjExMC42MiIgcnk9IjEzOC40OSIgc3R5bGU9ImZpbGw6I2VhYzA4NiIvPjxwYXRoIGQ9Ik0xNDEwLjI0LDgwOC4xM2MyOS4zNywwLDU3LDE0LjMyLDc3LjgsNDAuMzNzMzIuMzMsNjAuNzYsMzIuMzMsOTcuNjUtMTEuNDksNzEuNTgtMzIuMzMsOTcuNjYtNDguNDMsNDAuMzMtNzcuOCw0MC4zMy01Ny0xNC4zMi03Ny43OS00MC4zMy0zMi4zMy02MC43Ni0zMi4zMy05Ny42NiwxMS40OC03MS41OCwzMi4zMy05Ny42NSw0OC40Mi00MC4zMyw3Ny43OS00MC4zM20wLTFjLTYxLjM3LDAtMTExLjEyLDYyLjIyLTExMS4xMiwxMzlzNDkuNzUsMTM5LDExMS4xMiwxMzksMTExLjEzLTYyLjIzLDExMS4xMy0xMzktNDkuNzYtMTM5LTExMS4xMy0xMzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIyIC0xODEuMDMpIiBzdHlsZT0iZmlsbDojZWFjMDg2Ii8+PGVsbGlwc2UgY3g9IjI5Ny41OSIgY3k9Ijc1My43IiByeD0iMTEwLjYyIiByeT0iMTM4LjQ5IiBzdHlsZT0iZmlsbDojZWFjMDg2Ii8+PHBhdGggZD0iTTUxOS41OSw3OTYuNzNjMjkuMzcsMCw1NywxNC4zMyw3Ny43OSw0MC4zNHMzMi4zMyw2MC43NSwzMi4zMyw5Ny42NS0xMS40OCw3MS41OC0zMi4zMyw5Ny42Ni00OC40Miw0MC4zMy03Ny43OSw0MC4zMy01Ny0xNC4zMi03Ny44LTQwLjMzLTMyLjMzLTYwLjc2LTMyLjMzLTk3LjY2LDExLjQ4LTcxLjU4LDMyLjMzLTk3LjY1LDQ4LjQzLTQwLjM0LDc3LjgtNDAuMzRtMC0xYy02MS4zNywwLTExMS4xMyw2Mi4yMy0xMTEuMTMsMTM5czQ5Ljc2LDEzOSwxMTEuMTMsMTM5LDExMS4xMi02Mi4yMywxMTEuMTItMTM5LTQ5Ljc1LTEzOS0xMTEuMTItMTM5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMiAtMTgxLjAzKSIgc3R5bGU9ImZpbGw6I2VhYzA4NiIvPjxwYXRoIGQ9Ik05NjUuMzMsMTM3NEE0NTcuNDksNDU3LjQ5LDAsMCwxLDc5MiwxMzQwLjMxYTQ0NS4xMyw0NDUuMTMsMCwwLDEtMTQxLjUzLTkxLjc3LDQyNi40NCw0MjYuNDQsMCwwLDEtOTUuNDItMTM2LjEyLDQxNC42Myw0MTQuNjMsMCwwLDEsMC0zMzMuMzcsNDI2LjQ0LDQyNi40NCwwLDAsMSw5NS40Mi0xMzYuMTJBNDQ1LjEzLDQ0NS4xMywwLDAsMSw3OTIsNTUxLjE2YTQ2Myw0NjMsMCwwLDEsMzQ2LjYyLDAsNDQ1LjEzLDQ0NS4xMywwLDAsMSwxNDEuNTMsOTEuNzcsNDI2LjI1LDQyNi4yNSwwLDAsMSw5NS40MSwxMzYuMTIsNDE0LjUyLDQxNC41MiwwLDAsMSwwLDMzMy4zNyw0MjYuMjUsNDI2LjI1LDAsMCwxLTk1LjQxLDEzNi4xMiw0NDUuMTMsNDQ1LjEzLDAsMCwxLTE0MS41Myw5MS43N0E0NTcuNDksNDU3LjQ5LDAsMCwxLDk2NS4zMywxMzc0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMiAtMTgxLjAzKSIgc3R5bGU9ImZpbGw6I2ZmZGJhYyIvPjxwYXRoIGQ9Ik05NjUuMzMsNTE4YTQ1Ny4yLDQ1Ny4yLDAsMCwxLDE3My4xMywzMy42Miw0NDQuNTUsNDQ0LjU1LDAsMCwxLDE0MS4zNiw5MS42Nyw0MjYsNDI2LDAsMCwxLDk1LjMxLDEzNiw0MTQuMDksNDE0LjA5LDAsMCwxLDAsMzMzLDQyNS43Nyw0MjUuNzcsMCwwLDEtOTUuMzEsMTM2LDQ0NC41OCw0NDQuNTgsMCwwLDEtMTQxLjM2LDkxLjY4LDQ2Mi41OSw0NjIuNTksMCwwLDEtMzQ2LjI2LDAsNDQ0LjU4LDQ0NC41OCwwLDAsMS0xNDEuMzYtOTEuNjgsNDI1LjYxLDQyNS42MSwwLDAsMS05NS4zMS0xMzYsNDE0LjA5LDQxNC4wOSwwLDAsMSwwLTMzMyw0MjUuODMsNDI1LjgzLDAsMCwxLDk1LjMxLTEzNkE0NDQuNTUsNDQ0LjU1LDAsMCwxLDc5Mi4yLDU1MS42Miw0NTcuMTYsNDU3LjE2LDAsMCwxLDk2NS4zMyw1MThtMC0xYy0yNDYuMTgsMC00NDUuNzQsMTkyLTQ0NS43NCw0MjguNzNzMTk5LjU2LDQyOC43NCw0NDUuNzQsNDI4Ljc0LDQ0NS43NC0xOTIsNDQ1Ljc0LTQyOC43NFMxMjExLjUxLDUxNyw5NjUuMzMsNTE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMiAtMTgxLjAzKSIgc3R5bGU9ImZpbGw6I2ZmZGJhYyIvPjxlbGxpcHNlIGN4PSI1NzAiIGN5PSI2OTEuOTciIHJ4PSI0Ni41IiByeT0iNjUuNSIvPjxwYXRoIGQ9Ik03OTIsODA4YzI1LjM2LDAsNDYsMjkuMTYsNDYsNjVzLTIwLjY0LDY1LTQ2LDY1LTQ2LTI5LjE2LTQ2LTY1LDIwLjY0LTY1LDQ2LTY1bTAtMWMtMjYsMC00NywyOS41NS00Nyw2NnMyMSw2Niw0Nyw2Niw0Ny0yOS41NSw0Ny02Ni0yMS02Ni00Ny02NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiLz48Y2lyY2xlIGN4PSI1NTEuNSIgY3k9IjY3Ni40NyIgcj0iMTUiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNNzczLjUsODQzQTE0LjUsMTQuNSwwLDEsMSw3NTksODU3LjUsMTQuNTEsMTQuNTEsMCwwLDEsNzczLjUsODQzbTAtMUExNS41LDE1LjUsMCwxLDAsNzg5LDg1Ny41LDE1LjUsMTUuNSwwLDAsMCw3NzMuNSw4NDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIyIC0xODEuMDMpIi8+PGVsbGlwc2UgY3g9Ijg5NiIgY3k9IjY5MS45NyIgcng9IjQ2LjUiIHJ5PSI2NS41Ii8+PHBhdGggZD0iTTExMTgsODA4YzI1LjM2LDAsNDYsMjkuMTYsNDYsNjVzLTIwLjY0LDY1LTQ2LDY1LTQ2LTI5LjE2LTQ2LTY1LDIwLjY0LTY1LDQ2LTY1bTAtMWMtMjYsMC00NywyOS41NS00Nyw2NnMyMSw2Niw0Nyw2Niw0Ny0yOS41NSw0Ny02Ni0yMS02Ni00Ny02NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiLz48Y2lyY2xlIGN4PSI4ODAuNSIgY3k9IjY3Ni40NyIgcj0iMTUiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNMTEwMi41LDg0M2ExNC41LDE0LjUsMCwxLDEtMTQuNSwxNC41LDE0LjUxLDE0LjUxLDAsMCwxLDE0LjUtMTQuNW0wLTFhMTUuNSwxNS41LDAsMSwwLDE1LjUsMTUuNSwxNS41LDE1LjUsMCwwLDAtMTUuNS0xNS41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMiAtMTgxLjAzKSIvPjxwYXRoIGQ9Ik05NjUuNSwxMjc2LjgzYy00Ni43MSwwLTkyLjMzLTcuNjYtMTI4LjQzLTIxLjU1LTM0LjgyLTEzLjQtNTkuMzktMzItNjkuNDEtNTIuNDUsNDksMjMuMjksMTIxLDM2LjYzLDE5Ny44NCwzNi42M3MxNDguODEtMTMuMzQsMTk3Ljg0LTM2LjYzYy0xMCwyMC40Ni0zNC41OSwzOS4wNS02OS40MSw1Mi40NUMxMDU3LjgzLDEyNjkuMTcsMTAxMi4yMSwxMjc2LjgzLDk2NS41LDEyNzYuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIyIC0xODEuMDMpIiBzdHlsZT0iZmlsbDojZDQzNTAwIi8+PHBhdGggZD0iTTc2OC43NiwxMjAzLjlDODE3LjgyLDEyMjYuODQsODg5LjI5LDEyNDAsOTY1LjUsMTI0MHMxNDcuNjgtMTMuMTIsMTk2Ljc0LTM2LjA2Yy0xMC4zNiwxOS44NC0zNC41MywzNy44NC02OC40OSw1MC45MS0zNiwxMy44OC04MS42LDIxLjUyLTEyOC4yNSwyMS41MnMtOTIuMi03LjY0LTEyOC4yNS0yMS41MmMtMzQtMTMuMDctNTguMTMtMzEuMDctNjguNDktNTAuOTFtMzk1LjYzLTIuMTNjLTQ3LDIyLjctMTE4LjY1LDM3LjE5LTE5OC44OSwzNy4xOXMtMTUxLjg2LTE0LjQ5LTE5OC44OS0zNy4xOWMxOS44LDQzLjE5LDEwMS4zMiw3NS41NiwxOTguODksNzUuNTZzMTc5LjA5LTMyLjM3LDE5OC44OS03NS41NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiIHN0eWxlPSJmaWxsOiNkNDM1MDAiLz48cGF0aCBkPSJNMTExNy4zMywxNDg3LjA2VjEzNDcuODlhNDY0LjMxLDQ2NC4zMSwwLDAsMS0zMDYuODMtMXYxNDAuMTdhODEuOCw4MS44LDAsMCwwLC41Niw5LjQ0aC0uNDlhMTkuMywxOS4zLDAsMCwwLDEuMzQsNS42QTgxLjUxLDgxLjUxLDAsMCwwLDg5MiwxNTY4LjU2aDE0My44M2E4MS41Myw4MS41MywwLDAsMCw3OS44OC02NS4yNiwyMCwyMCwwLDAsMCwxLjg2LTYuOGgtLjhBODEuOCw4MS44LDAsMCwwLDExMTcuMzMsMTQ4Ny4wNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjIgLTE4MS4wMykiIHN0eWxlPSJmaWxsOiNmMWMyN2Q7c3Ryb2tlOiNmMWMyN2Q7c3Ryb2tlLW1pdGVybGltaXQ6MTAiLz48cGF0aCBkPSJNNzcwLjU4LDE1MTcuNmEyNC43NCwyNC43NCwwLDAsMCwxLjY2LDdjOC43Miw0Ny40NSw0OS43MSw4My4zOCw5OSw4My4zOEgxMDQ5YzQ4Ljc1LDAsODkuNDEtMzUuMTYsOTguNzItODEuODdhMjUuNDIsMjUuNDIsMCwwLDAsMi4yOS04LjUzaC0xYTEwNS4zMywxMDUuMzMsMCwwLDAsLjY5LTExLjg1VjE0NDRxLTE2LjQ1LTMtMzMuMzgtNS40NnY0NS41MWE4MS44LDgxLjgsMCwwLDEtLjU2LDkuNDRoLjhhMjAsMjAsMCwwLDEtMS44Niw2LjgsODEuNTMsODEuNTMsMCwwLDEtNzkuODgsNjUuMjZIODkxYTgxLjUxLDgxLjUxLDAsMCwxLTgwLjA5LTY2LjQ2LDE5LjMsMTkuMywwLDAsMS0xLjM0LTUuNmguNDlhODEuOCw4MS44LDAsMCwxLS41Ni05LjQ0VjE0MzcuM3EtMTkuOCwyLjcxLTM5LDYuMTN2NjIuMzJhMTA1LjMzLDEwNS4zMywwLDAsMCwuNjksMTEuODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIyIC0xODEuMDMpIiBzdHlsZT0iZmlsbDojYzk0NDAwO3N0cm9rZTojYzk0NDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+PHBhdGggZD0iTTM1My41LDQ4MS41Yy0zMi43OCwzNi4wOC0zOC44MSw2My40My0zOCw4MiwuNzMsMTYuNzIsNy4xMSwyOSwzLDUzLTEuNTcsOS4xOC00LjU5LDE5LjYtMywzNSwuNjksNi42NSwxLjczLDkuMzMsNSwyMiwzLjE3LDEyLjI4LDgsMzAuODgsMTAsNDUsMywyMC43OC0xLDI1LjA3LDAsNDMsMi40LDQ0LjE3LDI5Ljc3LDc4LjQ0LDQzLDk1LDcuMDUsOC44MywxNC43LDE2LjU1LDMwLDMyLDEzLjU0LDEzLjY4LDE3LjY3LDE2Ljg3LDQwLDM4LDQyLjM0LDQwLjA3LDQ3LjA3LDQ3LjEzLDUwLDU3LDYuMjUsMjEuMDYtMi42MSwzMS4yNCw1LDM4LDEzLjY2LDEyLjEzLDU3LjY1LTEyLjM1LDg1LTM1LDIzLjk0LTE5LjgzLDM4LjUzLTQxLjA5LDU3LTY4LDcuNy0xMS4yMiwxNy42Ni0yNS44NiwyOC00N2EzMzguNTEsMzM4LjUxLDAsMCwwLDIyLTU4YzQuMDYtMTQuNjcsMi0xMS4wNiwxMC00NSw1LjY0LTIzLjg0LDcuODEtMzAuNDUsMTAtNDUsMi43OS0xOC41Nyw0LjE5LTI3Ljg1LDMtMzctNC43NS0zNi41NC00Mi45Mi01OS4wNi01My02NS0zMy0xOS40Ni03NC40Ni0yNC44My03Ny0xOC0zLjg2LDEwLjM3LDc1LjQ0LDY2LjY3LDE3MCw4MCw0Niw2LjQ4LDUwLjYtMy41MiwxNDIsMyw1Ni40MSw0LDU3LjY3LDgsMTA1LDEwLDQ5LjU2LDIsODguMjIsMy42MywxMzgtNSw0MS43Ni03LjI0LDYyLjY5LTE2LjcxLDEwNS0xNSw2LjQ1LjI2LDIwLjU5LDEuMDcsNDAuNzIuNiw1Mi42NS0xLjI0LDY0LjI5LTkuMzMsNjkuMjgtMTMuNiwxNC40LTEyLjMxLDIxLjI4LTMzLjcsMTctMzctOC02LjE3LTc1LjQ2LDM4LjMtODAsOTUtMS44OCwyMy41LDEwLjQxLDQ3LjMzLDM1LDk1LDQuNDgsOC42OCwxNC42NSwyNi40NSwzNSw2MiwyNS40Nyw0NC40OSwyNS44Niw0NC4yMiwyOCw1MCwxOC44Nyw1MC45My01LjQ5LDg3LjkxLDcsOTUsMTkuMzUsMTEsODYuNjEtNzIuODQsMTEwLTEwMiwzMC43OC0zOC4zNyw0MS44Mi01OC45LDQ1LTY1LDEyLjc5LTI0LjU4LDE5LjEzLTQ0LjQ4LDMzLTk4LDIxLjQtODIuNTksMzIuMS0xMjMuODgsMzItMTQ3LS4yNC01NS45NC0xNy43NS05OC0yNS0xMTUtNDMuNDktMTAxLjczLTEzMi42LTE1Mi4wNy0xODAtMTc4LTE2LjgzLTkuMjEtOTguMTItMzMuNi0yNjAtODItNTYtMTYuNzUtODYuOTEtMjUuODMtMTMyLTM1LTc1LjUtMTUuMzYtMTE4LjY4LTI0LjE0LTE3NS0xOC0zOSw0LjI2LTc5LjM3LDE5LjUtMTYwLDUwLTU0Ljc4LDIwLjcyLTgyLjE3LDMxLjA4LTExMyw1MC00MC4xNSwyNC42NC0zOC44NiwzMi41OS0xMDUsNzhhMzcwLDM3MCwwLDAsMC01MCw0MGMtOS44Niw5LjQ0LTIxLjYsMTguOTItMzIsMzVhMTM5LjcxLDEzOS43MSwwLDAsMC0xMiwyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMiAtMTgxLjAzKSIgc3R5bGU9InN0cm9rZTojMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+PC9zdmc+"},259:function(e){e.exports={data:{mdx:{frontmatter:{title:"Home",author:"",summary:""},body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Home",\n  "author": "",\n  "type": "home-page",\n  "summary": ""\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", null, "Hi, This is John Doe. I develop some stuff on web."), mdx("p", null, "I play with technologies like React, Kotlin and Flutter. I enjoy sky diving and swimming."), mdx("hr", null), mdx("p", null, "You may want to have a look at my ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "http://link-to-resume"\n  }), "resume"), "."));\n}\n;\nMDXContent.isMDXComponent = true;'}}}},260:function(e){e.exports={data:{authorYaml:{positions:[{title:"Position 1",duration:"July YYYY - Present",company:"XYZ Company"},{title:"Degree 2",duration:"YYYY - YYYY",company:"DEF University"},{title:"Degree 1",duration:"YYYY - YYYY",company:"ABC University"}]}}}}}]);
//# sourceMappingURL=component---gatsby-theme-simple-bio-src-templates-home-js-ecfcc6dee3c3db3cd2af.js.map