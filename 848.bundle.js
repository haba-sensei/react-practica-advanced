"use strict";(self.webpackChunkreact_practico_hexa=self.webpackChunkreact_practico_hexa||[]).push([[848],{3848:(t,A,n)=>{n.r(A),n.d(A,{default:()=>f});var e=n(7294),o=n(9936),r=n(3379),a=n.n(r),i=n(7795),l=n.n(i),C=n(569),s=n.n(C),p=n(3565),m=n.n(p),c=n(9216),d=n.n(c),g=n(4589),u=n.n(g),h=n(7541),b={};b.styleTagTransform=u(),b.setAttributes=m(),b.insert=s().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d();a()(h.Z,b);h.Z&&h.Z.locals&&h.Z.locals;var x=n(4133);const f=function(){var t=(0,e.useRef)(null);return e.createElement(o.Z,null,e.createElement("div",{className:"Login"},e.createElement("div",{className:"Login-container"},e.createElement("img",{src:x,width:"100",height:"50",alt:"logo",className:"logo"}),e.createElement("form",{action:"/",className:"form",ref:t},e.createElement("label",{htmlFor:"email",className:"label"},"Email address"),e.createElement("input",{type:"text",name:"email",placeholder:"platzi@example.cm",className:"input input-email"}),e.createElement("label",{htmlFor:"password",className:"label"},"Password"),e.createElement("input",{type:"password",name:"password",placeholder:"*********",className:"input input-password"}),e.createElement("button",{type:"submit",className:"primary-button login-button",onClick:function(A){A.preventDefault();var n=new FormData(t.current);n.get("email"),n.get("password")}},"Log in"),e.createElement("a",{href:"/"},"Forgot my password")),e.createElement("button",{className:"secondary-button signup-button"},"Sign up"))))}},9936:(t,A,n)=>{n.d(A,{Z:()=>a});var e=n(7294),o=n(2615),r={initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100}};const a=function(t){var A=t.children;return e.createElement(o.E.div,{variants:r,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.5}},A)}},7541:(t,A,n)=>{n.d(A,{Z:()=>i});var e=n(7537),o=n.n(e),r=n(3645),a=n.n(r)()(o());a.push([t.id,":root{--white: #FFFFFF;--black: #000000;--very-light-pink: #C7C7C7;--text-input-field: #F7F7F7;--hospital-green: #ACD9B2;--sm: 14px;--md: 16px;--lg: 18px}.Login{width:100%;height:100vh;display:grid;place-items:center}.Login-container{display:grid;grid-template-rows:auto 1fr auto;width:300px}.logo{width:150px;margin-bottom:48px;justify-self:center;display:none}.form{display:flex;flex-direction:column}.form a{color:var(--hospital-green);font-size:var(--sm);text-align:center;text-decoration:none;margin-bottom:52px}.label{font-size:var(--sm);font-weight:bold;margin-bottom:4px}.input{background-color:var(--text-input-field);border:none;border-radius:8px;height:30px;font-size:var(--md);padding:6px;margin-bottom:12px}.input-email{margin-bottom:22px}.primary-button{background-color:var(--hospital-green);border-radius:8px;border:none;color:var(--white);width:100%;cursor:pointer;font-size:var(--md);font-weight:bold;height:50px}.secondary-button{background-color:var(--white);border-radius:8px;border:1px solid var(--hospital-green);color:var(--hospital-green);width:100%;cursor:pointer;font-size:var(--md);font-weight:bold;height:50px}.login-button{margin-top:14px;margin-bottom:30px}@media(max-width: 640px){.logo{display:block}}","",{version:3,sources:["webpack://./src/Core-ui/_vars.scss","webpack://./src/Pages/Login/Style.scss"],names:[],mappings:"AAAA,MACC,gBAAA,CACA,gBAAA,CACA,0BAAA,CACA,2BAAA,CACA,yBAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CCND,OACC,UAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CAED,iBACC,YAAA,CACA,gCAAA,CACA,WAAA,CAED,MACC,WAAA,CACA,kBAAA,CACA,mBAAA,CACA,YAAA,CAED,MACC,YAAA,CACA,qBAAA,CAED,QACC,2BAAA,CACA,mBAAA,CACA,iBAAA,CACA,oBAAA,CACA,kBAAA,CAED,OACC,mBAAA,CACA,gBAAA,CACA,iBAAA,CAED,OACC,wCAAA,CACA,WAAA,CACA,iBAAA,CACA,WAAA,CACA,mBAAA,CACA,WAAA,CACA,kBAAA,CAED,aACC,kBAAA,CAED,gBACC,sCAAA,CACA,iBAAA,CACA,WAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,mBAAA,CACA,gBAAA,CACA,WAAA,CAED,kBACC,6BAAA,CACA,iBAAA,CACA,sCAAA,CACA,2BAAA,CACA,UAAA,CACA,cAAA,CACA,mBAAA,CACA,gBAAA,CACA,WAAA,CAED,cACC,eAAA,CACA,kBAAA,CAED,yBACC,MACC,aAAA,CAAA",sourcesContent:[":root {\n\t--white: #FFFFFF;\n\t--black: #000000;\n\t--very-light-pink: #C7C7C7;\n\t--text-input-field: #F7F7F7;\n\t--hospital-green: #ACD9B2;\n\t--sm: 14px;\n\t--md: 16px;\n\t--lg: 18px;\n}\n","@import '@core-ui/vars';\n\n.Login {\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: grid;\n\tplace-items: center;\n}\n.Login-container {\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr auto;\n\twidth: 300px;\n}\n.logo {\n\twidth: 150px;\n\tmargin-bottom: 48px;\n\tjustify-self: center;\n\tdisplay: none;\n}\n.form {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n.form a {\n\tcolor: var(--hospital-green);\n\tfont-size: var(--sm);\n\ttext-align: center;\n\ttext-decoration: none;\n\tmargin-bottom: 52px;\n}\n.label {\n\tfont-size: var(--sm);\n\tfont-weight: bold;\n\tmargin-bottom: 4px;\n}\n.input {\n\tbackground-color: var(--text-input-field);\n\tborder: none;\n\tborder-radius: 8px;\n\theight: 30px;\n\tfont-size: var(--md);\n\tpadding: 6px;\n\tmargin-bottom: 12px;\n}\n.input-email {\n\tmargin-bottom: 22px;\n}\n.primary-button {\n\tbackground-color: var(--hospital-green);\n\tborder-radius: 8px;\n\tborder: none;\n\tcolor: var(--white);\n\twidth: 100%;\n\tcursor: pointer;\n\tfont-size: var(--md);\n\tfont-weight: bold;\n\theight: 50px;\n}\n.secondary-button {\n\tbackground-color: var(--white);\n\tborder-radius: 8px;\n\tborder: 1px solid var(--hospital-green);\n\tcolor: var(--hospital-green);\n\twidth: 100%;\n\tcursor: pointer;\n\tfont-size: var(--md);\n\tfont-weight: bold;\n\theight: 50px;\n}\n.login-button {\n\tmargin-top: 14px;\n\tmargin-bottom: 30px;\n}\n@media (max-width: 640px) {\n\t.logo {\n\t\tdisplay: block;\n\t}\n}\n"],sourceRoot:""}]);const i=a}}]);
//# sourceMappingURL=848.bundle.js.map