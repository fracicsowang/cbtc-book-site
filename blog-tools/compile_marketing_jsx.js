// compile_marketing_jsx.js — pre-compiles the marketing-page JSX to plain JS.
// Edit the .jsx SOURCE in site/, then rerun to regenerate the .js the HTML loads:
//   cd /tmp && npm i @babel/standalone@7.29.0 && node /Users/chunjun/CBTC_book_site/blog-tools/compile_marketing_jsx.js
// (marketing pages ship compiled .js + React production — no in-browser Babel.)

const B=require('@babel/standalone');
const fs=require('fs'), path=require('path');
const ROOT="/Users/chunjun/CBTC_book_site/site";
const tx=code=>B.transform(code,{presets:[['react',{runtime:'classic'}]],compact:false}).code;
// 1) external jsx -> js
for(const rel of ["assets/components.jsx","assets/cover-mini.jsx","assets/volume.jsx","home.jsx"]){
  const p=path.join(ROOT,rel), out=p.replace(/\.jsx$/,".js");
  fs.writeFileSync(out, "/* compiled from "+path.basename(rel)+" — do not edit; edit the .jsx */\n"+tx(fs.readFileSync(p,"utf8")));
  console.log("compiled",rel,"->",path.basename(out));
}
// 2) rewrite each HTML page
const pages=fs.readdirSync(ROOT).filter(f=>f.endsWith(".html"));
for(const f of pages){
  const p=path.join(ROOT,f); let h=fs.readFileSync(p,"utf8"); const before=h;
  // dev react -> prod, drop integrity (hash differs)
  h=h.replace(/<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"[^>]*><\/script>/,
              '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>');
  h=h.replace(/<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"[^>]*><\/script>/,
              '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>');
  // remove babel standalone
  h=h.replace(/\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]*"[^>]*><\/script>/,'');
  // external text/babel .jsx -> plain .js
  h=h.replace(/<script type="text\/babel" src="([^"]+)\.jsx"><\/script>/g,'<script src="$1.js"></script>');
  // inline text/babel blocks -> compiled inline
  h=h.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/g,(m,code)=>'<script>\n'+tx(code)+'\n</script>');
  if(h!==before){ fs.writeFileSync(p,h); console.log("rewrote",f); } else console.log("(no change)",f);
}
console.log("done");