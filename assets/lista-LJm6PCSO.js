import{c as f,j as i}from"./index-BAbMMWt6.js";function u(d){const e=f.c(23),{title:l,children:t,className:o,id:m}=d,a=o===void 0?"":o,n=m===void 0?"":m;if(l==="h1"){if(n){const x=`text-3xl text-center font-bold mb-2 ${a}`;let r;return e[0]!==t||e[1]!==n||e[2]!==x?(r=i.jsx("h1",{id:n,className:x,children:t}),e[0]=t,e[1]=n,e[2]=x,e[3]=r):r=e[3],r}const s=`text-4xl text-center font-bold mb-2 ${a}`;let c;return e[4]!==t||e[5]!==s?(c=i.jsx("h1",{className:s,children:t}),e[4]=t,e[5]=s,e[6]=c):c=e[6],c}else if(l==="h2"){if(n){const x=`text-2xl font-semibold mb-2 mt-5 ${a}`;let r;return e[7]!==t||e[8]!==n||e[9]!==x?(r=i.jsx("h2",{id:n,className:x,children:t}),e[7]=t,e[8]=n,e[9]=x,e[10]=r):r=e[10],r}const s=`text-3xl font-semibold mb-2 ${a}`;let c;return e[11]!==t||e[12]!==s?(c=i.jsx("h2",{className:s,children:t}),e[11]=t,e[12]=s,e[13]=c):c=e[13],c}else if(l==="h3"){if(n){const x=`text-xl font-medium mb-2 mt-5 ${a}`;let r;return e[14]!==t||e[15]!==n||e[16]!==x?(r=i.jsx("h3",{id:n,className:x,children:t}),e[14]=t,e[15]=n,e[16]=x,e[17]=r):r=e[17],r}const s=`text-2xl font-medium mb-2 ${a}`;let c;return e[18]!==t||e[19]!==s?(c=i.jsx("h3",{className:s,children:t}),e[18]=t,e[19]=s,e[20]=c):c=e[20],c}else{let s;return e[21]!==t?(s=i.jsx(i.Fragment,{children:t}),e[21]=t,e[22]=s):s=e[22],s}}function p(d){const e=f.c(2),{children:l}=d;let t;return e[0]!==l?(t=i.jsx("div",{className:`
        bg-gray-900
        rounded-2xl
        h-fit
        min-w-2/4
        hyphens-auto hyphens: auto;
        wrap-break-word
        p-4
        `,children:l}),e[0]=l,e[1]=t):t=e[1],t}function b(d){const e=f.c(7),{children:l,temario:t}=d;let o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=i.jsx(u,{title:"h2",className:"select-none",children:"Temario"}),e[0]=o):o=e[0];let m;e[1]!==t||e[2]!==l?(m=i.jsx(t,{className:`
        bg-gray-900
        rounded-md
        p-4 mb-4
        list-decimal

        h-fit
        max-h-[80vh]     /* altura máxima del 80% del viewport */
        overflow-y-auto  /* scroll vertical */
        `,children:l}),e[1]=t,e[2]=l,e[3]=m):m=e[3];let a;return e[4]!==l||e[5]!==m?(a=i.jsxs("aside",{className:`
        hidden 2xl:block
        sticky top-5 self-start

        w-fit
        w-4/5 min-w-72
        `,children:[o,m,l]}),e[4]=l,e[5]=m,e[6]=a):a=e[6],a}function j(d){const e=f.c(3),{temario:l}=d;let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=i.jsx(u,{title:"h2",className:"2xl:hidden",children:"Temario"}),e[0]=t):t=e[0];let o;return e[1]!==l?(o=i.jsxs(i.Fragment,{children:[t,i.jsx(l,{className:`
      bg-gray-900
      rounded-md
      p-4 mb-4
      list-decimal
      2xl:hidden
      `})]}),e[1]=l,e[2]=o):o=e[2],o}function N(d){const e=f.c(6),{children:l,type:t,className:o}=d,m=t===void 0?"ul":t,a=o===void 0?"":o;if(m=="ol"){const n=`
    list-inside flex flex-col gap-2
    p-1 my-2 list-decimal
    text-lg text-gray-300 pl-6
    ${a}
  `;let s;return e[0]!==l||e[1]!==n?(s=i.jsx("ol",{className:n,children:l}),e[0]=l,e[1]=n,e[2]=s):s=e[2],s}if(m=="ul"){const n=`
        list-inside flex flex-col gap-2
        p1 list-disc my-2
        text-lg text-gray-300 pl-6
        ${a}
      `;let s;return e[3]!==l||e[4]!==n?(s=i.jsx("ul",{className:n,children:l}),e[3]=l,e[4]=n,e[5]=s):s=e[5],s}}export{p as E,N as L,b as T,j as a,u as b};
