(this["webpackJsonpmath-race"]=this["webpackJsonpmath-race"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(3),r=n.n(s),c=n(25),i=n.n(c),o=(n(82),n(47)),l=n(28),u=n(32),p=n(69),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(86);var b=n(12),h=n(26),y=n(27),m=n(30),x=n(29),O=n(40),f=n.n(O),v=n(7),g=n(48),w="RESET",_="LOAD_QUESTIONS",k="START",C="CORRECT",S="WRONG",N="WIN",q="COMPLETE",R=n(118),P=n(70),T=function(e){return e>=100},A=function(e){return e>=20&&e<=99},B=[{number:1e12,text:"trillion"},{number:1e9,text:"billion"},{number:1e6,text:"million"},{number:1e3,text:"thousand"},{number:100,text:"hundred"},{number:90,text:"ninety"},{number:80,text:"eighty"},{number:70,text:"seventy"},{number:60,text:"sixty"},{number:50,text:"fifty"},{number:40,text:"forty"},{number:30,text:"thirty"},{number:20,text:"twenty"},{number:19,text:"nineteen"},{number:18,text:"eighteen"},{number:17,text:"seventeen"},{number:16,text:"sixteen"},{number:15,text:"fifteen"},{number:14,text:"fourteen"},{number:13,text:"thirteen"},{number:12,text:"twelve"},{number:11,text:"eleven"},{number:10,text:"ten"},{number:9,text:"nine"},{number:8,text:"eight"},{number:7,text:"seven"},{number:6,text:"six"},{number:5,text:"five"},{number:4,text:"four"},{number:3,text:"three"},{number:2,text:"two"},{number:1,text:"one"},{number:0,text:"zero"}],M=function e(t){var n,a,s,r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c.ands||!1,o=c.commas?",":"",l=i?"".concat("and"," "):"",u="",p=parseInt(t,10);if(isNaN(p))return"not a number";if(!isFinite(p))return"infinity";p<0&&(u+="negative ",p*=-1);var d,j=Object(P.a)(B);try{for(j.s();!(d=j.n()).done;){var b=d.value,h=b.number,y=b.text;if(p===h)return T(h)&&(u+="one "),u+=y;if(p>h){s=h,r=y;break}}}catch(m){j.e(m)}finally{j.f()}return(1!==(n=Math.floor(p/s))||T(s))&&(u+="".concat(e(n,c)," ")),u+=r,(a=p-n*s)>0&&A(s)?u+="-":u+=s>=1e3&&a>0&&a<100?"".concat(o," ").concat(l):s>=1e3&&a>0?"".concat(o," "):100===s&&a>0?" ".concat(l):" ",a>0&&(u+=e(a,c)),u.trim()},W=function(e,t){var n=e.type;e.nos,e.digits,e.inwords;return"+-"===n||"+-x"===n?L(e):"X2"===n?D(e):"WORD"===n?I(e,t):{question:"",questions:[],answer:""}},D=function(e){var t,n,a="",s=(e.type,e.digits),r=e.inwords,c=e.tens,i=e.decimals,o=void 0===i?0:i;r&&(o=0);var l=s+o,u=Math.pow(10,l)-1;"Y"===c&&2===l&&(u=19);var p=Math.pow(10,l-1)+1;if(t=Q(p,u),r){if(r){var d=M(t);a="".concat(d,"<sup>2</sup>")}}else a="".concat(t,"<sup>2</sup>");return n=t*t,console.log("".concat(a," ? ").concat(n)),{question:a,questions:[],answer:n}},I=function(e,t){var n=t[Q(0,t.length-1)],a=(e.type,e.nos,e.digits),s=e.inwords,r=e.decimals,c=void 0===r?0:r;s&&(c=0);for(var i=a+c,o=Math.pow(10,i)-1,l=Math.pow(10,i-1)+1,u=(n.question,{}),p=0;p in n;p+=1)u[p]=n[p];return Object.keys(u).sort().forEach((function(e){var t=Object(v.a)({},u),n=u[e];n.indexOf("{val}")>-1&&(t.val=Q(l,o));var a=K(n,t),s=G(a);u[e]=s})),{answer:G(K(n.answer,u)),question:K(n.question,u),questions:[]}},L=function(e){var t=0,n="",a=[],s=0,r=e.type,c=e.nos,i=e.digits,o=e.inwords,l=e.decimals,u=void 0===l?0:l;o&&(u=0);for(var p=[],d=i+u,j=0;j<c;j+=1){var b=r,h="+";h=0===j||s<Math.pow(10,d-1)?"+":(s>=100||s<=10)&&"+-x"===r&&i>1||s>10&&"+-x"===r&&1===i?E("+-"):j>1&&"+-x"===r&&!p.includes("x")&&s>9&&s<100&&i>1||j>1&&"+-x"===r&&!p.includes("x")&&s<10&&1===i?"x":E(b),p.push(h);var y=Math.pow(10,d)-1,m=Math.pow(10,d-1)+1;"x"===h?(m=2,y=9):"-"===h&&y>s&&(y=s),t=Q(m,y);var x="";if("+"===h||"-"===h?s+=("+"===h?1:-1)*t:"x"===h&&(s*=t),o){if(o){var O=M(t);x="".concat(j<=0?"":"+"===h?" <u><i>plus</i></u> ":"-"===h?" <u><i>minus</i></u> ":" <u><i>times</i></u> ").concat(O),n="".concat(n).concat(x),a.push(x.replace("+",""))}}else x="".concat(j>0?h:""," ").concat(t/(0===u?1:Math.pow(10,u))),n="".concat(n," ").concat(x),a.push(x.replace("+",""))}return s/=0===u?1:Math.pow(10,u),console.log("".concat(n," ? ").concat(s)),a.push("?"),{question:n,questions:a,answer:s}},Q=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},E=function(e){var t=e.split("");return t[Q(0,t.length-1)]},G=function(e){return R.a(e)},K=function(e,t){var n=e;return n=n.replace(/{\w+}/g,(function(e){return console.log("[Utils.replaceValue]",e),t[e.replace("{","").replace("}","")]}))},H=n(57);H.a.initializeApp({apiKey:"AIzaSyDgKDrBQ_-BRnVOuUlqLd7hx1w0R9bBnrA",authDomain:"math-race-7ea5f.firebaseapp.com",projectId:"math-race-7ea5f",storageBucket:"math-race-7ea5f.appspot.com",messagingSenderId:"793417309877",appId:"1:793417309877:web:6764942ec5b237291a68fc"});H.a;var U=n(72),X=n.n(U).a.create({baseURL:"https://math-race-7ea5f-default-rtdb.europe-west1.firebasedatabase.app"}),z=function(){return{type:w}},F=n(17),Y=n(41),J=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;Object(h.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.form,n=t.player0,s=t.player1,r=t.digits0,c=t.numbers0,i=t.decimals0,o=t.type0,l=t.points0,u=t.inwords0,p=t.digits1,d=t.numbers1,j=t.decimals1,b=t.type1,h=t.points1,y=t.inwords1,m=t.tens0,x=t.tens1,O=t.delay0,f=t.delay1,v={type:o.value,nos:+c.value,digits:+r.value,decimals:+i.value,points:+l.value,delay:["+-","+-x"].includes(o.value)?+O.value:0,tens:m.value,inwords:"true"===u.value},g={type:b.value,nos:+d.value,digits:+p.value,points:+h.value,decimals:+j.value,delay:["+-","+-x"].includes(b.value)?+f.value:0,tens:x.value,inwords:"true"===y.value};a.props.start(n.value,s.value,v,g)};var s=[e.players&&e.players[0].name||"Hasana",e.players&&e.players[1].name||""],r=[e.players&&e.players[0].questiontype.type||"+-",e.players&&e.players[1].questiontype.type||"+-"],c=[e.players&&e.players[0].questiontype.digits||"2",e.players&&e.players[1].questiontype.digits||"2"];return a.state={type0:r[0],type1:r[1],digits0:c[0],digits1:c[1],player0:s[0],player1:s[1]},console.log("RaceSetup[constructor]",a.state),a}return Object(y.a)(n,[{key:"render",value:function(){var e=this;console.log("[RaceSetup] render");var t=[this.props.players&&this.props.players[0].name||"Hasana",this.props.players&&this.props.players[1].name||""],n=[1,0].map((function(n){var s=e.props.players[n],r=(s.name,s.questiontype);return Object(a.jsxs)("div",{className:Y.RaceSetup,children:[Object(a.jsx)("div",{className:Y.Players,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Player - ".concat(n+1)}),Object(a.jsxs)("div",{style:{display:1===n?"block":"none"},children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:!t[n]}),Object(a.jsx)("label",{children:"None"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Bruhathi",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Bruhathi"===t[n]}),Object(a.jsx)("label",{children:"Bruhathi"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Hasana",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Hasana"===t[n]}),Object(a.jsx)("label",{children:"Hasana"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Krishna",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Krishna"===t[n]}),Object(a.jsx)("label",{children:"Krishna"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Ritvik",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Ritvik"===t[n]}),Object(a.jsx)("label",{children:"Ritvik"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Nanna",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Nanna"===t[n]}),Object(a.jsx)("label",{children:"Nanna"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"player".concat(n),value:"Amma",onChange:function(t){return e.setState(Object(F.a)({},"player".concat(n),t.currentTarget.value))},defaultChecked:"Amma"===t[n]}),Object(a.jsx)("label",{children:"Amma"})]})]})}),Object(a.jsxs)("div",{style:{display:e.state["player".concat(n)]?"flex":"none"},className:Y.Options,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Type"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"type".concat(n),value:"+-",onChange:function(t){return e.setState(Object(F.a)({},"type".concat(n),t.currentTarget.value))},defaultChecked:"+-"===r.type}),Object(a.jsx)("label",{children:"+-"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"type".concat(n),value:"+-x",onChange:function(t){return e.setState(Object(F.a)({},"type".concat(n),t.currentTarget.value))},defaultChecked:"+-x"===r.type}),Object(a.jsx)("label",{children:"+-x"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"type".concat(n),value:"X2",onChange:function(t){return e.setState(Object(F.a)({},"type".concat(n),t.currentTarget.value))},defaultChecked:"X2"===r.type}),Object(a.jsxs)("label",{children:["X",Object(a.jsx)("sup",{children:"2"})]})]}),Object(a.jsxs)("div",{className:Y.ExtraWide,children:[Object(a.jsx)("input",{type:"radio",name:"type".concat(n),value:"WORD",onChange:function(t){return e.setState(Object(F.a)({},"type".concat(n),t.currentTarget.value))},defaultChecked:"WORD"===r.type}),Object(a.jsx)("label",{children:"Word"})]})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsxs)("div",{style:{display:["+-","+-x","X2","WORD"].includes(e.state["type".concat(n)])?"flex":"none"},children:[Object(a.jsx)("h2",{children:"Digits"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"digits".concat(n),onChange:function(t){return e.setState(Object(F.a)({},"digits".concat(n),t.currentTarget.value))},value:"1",defaultChecked:1===r.digits}),Object(a.jsx)("label",{children:"1"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"digits".concat(n),onChange:function(t){return e.setState(Object(F.a)({},"digits".concat(n),t.currentTarget.value))},value:"2",defaultChecked:2===r.digits}),Object(a.jsx)("label",{children:"2"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"digits".concat(n),onChange:function(t){return e.setState(Object(F.a)({},"digits".concat(n),t.currentTarget.value))},value:"3",defaultChecked:3===r.digits}),Object(a.jsx)("label",{children:"3"})]})]}),Object(a.jsxs)("div",{style:{marginLeft:"50px",display:["+-","+-x"].includes(e.state["type".concat(n)])?"flex":"none"},children:[Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"numbers".concat(n),value:"2",defaultChecked:2===r.nos}),Object(a.jsx)("label",{children:"2"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"numbers".concat(n),value:"3",defaultChecked:3===r.nos}),Object(a.jsx)("label",{children:"3"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"numbers".concat(n),value:"4",defaultChecked:4===r.nos}),Object(a.jsx)("label",{children:"4"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"numbers".concat(n),value:"5",defaultChecked:5===r.nos}),Object(a.jsx)("label",{children:"5"})]})]})]}),Object(a.jsxs)("div",{style:{display:2===e.state["digits".concat(n)]&&["X2"].includes(e.state["type".concat(n)])?"flex":"none"},children:[Object(a.jsx)("h2",{children:"Tens only"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"tens".concat(n),value:"Y",defaultChecked:"Y"===r.tens}),Object(a.jsx)("label",{children:"Yes"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"tens".concat(n),value:"N",defaultChecked:"N"===r.tens}),Object(a.jsx)("label",{children:"No"})]})]}),Object(a.jsxs)("div",{style:{display:["+-","+-x"].includes(e.state["type".concat(n)])?"flex":"none"},children:[Object(a.jsx)("h2",{children:"Delay"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"0",defaultChecked:0===r.delay}),Object(a.jsx)("label",{children:"-"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"2",defaultChecked:2===r.delay}),Object(a.jsx)("label",{children:"2s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"3",defaultChecked:3===r.delay}),Object(a.jsx)("label",{children:"3s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"4",defaultChecked:4===r.delay}),Object(a.jsx)("label",{children:"4s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"5",defaultChecked:5===r.delay}),Object(a.jsx)("label",{children:"5s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"6",defaultChecked:6===r.delay}),Object(a.jsx)("label",{children:"6s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"7",defaultChecked:7===r.delay}),Object(a.jsx)("label",{children:"7s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"8",defaultChecked:8===r.delay}),Object(a.jsx)("label",{children:"8s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"9",defaultChecked:9===r.delay}),Object(a.jsx)("label",{children:"9s"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"delay".concat(n),value:"10",defaultChecked:10===r.delay}),Object(a.jsx)("label",{children:"10s"})]})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("h2",{children:"In Words"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"inwords".concat(n),value:"true",defaultChecked:!!r.inwords}),Object(a.jsx)("label",{children:"Yes"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"inwords".concat(n),value:"false",defaultChecked:!r.inwords}),Object(a.jsx)("label",{children:"No"})]})]}),Object(a.jsxs)("div",{style:{marginLeft:"100px",display:"+-"===e.state["type".concat(n)]?"flex":"none"},children:[Object(a.jsx)("h2",{children:"Decimals"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"decimals".concat(n),value:"0",defaultChecked:0===r.decimals}),Object(a.jsx)("label",{children:"0"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"decimals".concat(n),value:"1",defaultChecked:1===r.decimals}),Object(a.jsx)("label",{children:"1"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"decimals".concat(n),value:"2",defaultChecked:2===r.decimals}),Object(a.jsx)("label",{children:"2"})]})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Points"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"points".concat(n),value:"5",defaultChecked:5===r.points}),Object(a.jsx)("label",{children:"5"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"points".concat(n),value:"10",defaultChecked:10===r.points}),Object(a.jsx)("label",{children:"10"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"points".concat(n),value:"15",defaultChecked:15===r.points}),Object(a.jsx)("label",{children:"15"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"points".concat(n),value:"20",defaultChecked:20===r.points}),Object(a.jsx)("label",{children:"20"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",name:"points".concat(n),value:"25",defaultChecked:25===r.points}),Object(a.jsx)("label",{children:"25"})]})]})]})]},n)}));return Object(a.jsx)(s.Fragment,{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,ref:function(t){e.form=t},children:[Object(a.jsx)("h2",{style:{textAlign:"center"},children:"Maths Race"}),Object(a.jsx)("div",{children:n}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",value:"Start",className:["w3-btn","w3-round-large",Y.BtnGo].join(" "),children:"Start >>"})})]})})}}]),n}(s.PureComponent),V=Object(l.b)((function(e){return{players:e.game.players}}),(function(e){return{start:function(t,n,a,s){return e(function(e,t,n,a){return function(){var s=Object(g.a)(f.a.mark((function s(r,c){var i,o;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if("WORD"!==n.type&&"WORD"!==a.type||c().game.questions){s.next=13;break}return i=[],s.next=4,X.get("/questions.json");case 4:return o=s.sent,s.next=7,o;case 7:return s.sent.data.Word.forEach((function(e,t){e.active&&"N"===e.active||i.push(Object(v.a)({id:t},e))})),console.log(i),s.next=13,r({type:_,questions:i});case 13:r({type:k,players:[Object(v.a)(Object(v.a)({id:0,name:e,points:0,wrong:0},W(n,c().game.wordquestions)),{},{answerresult:"",questiontype:n}),Object(v.a)(Object(v.a)({id:1,name:t,points:0,wrong:0},W(a,c().game.wordquestions)),{},{answerresult:"",questiontype:a})]});case 14:case"end":return s.stop()}}),s)})));return function(e,t){return s.apply(this,arguments)}}()}(t,n,a,s))}}}))(J),Z=n(119),$=n(42),ee=n(6),te=n.n(ee);n(45);var ne=n(73);var ae=function(e){return e.show?Object(a.jsx)("div",{className:ne.Backdrop,onClick:e.clicked,onKeyPress:e.clicked,role:"button",tabIndex:"0"}):Object(a.jsx)(s.Fragment,{})},se=n(74);var re=function(e){return e.show?Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(ae,{show:e.show,clicked:e.modelClosed}),Object(a.jsx)("div",{className:se.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]}):Object(a.jsx)(s.Fragment,{})},ce=n.p+"static/media/success.9e3ceb9f.mp3",ie=n.p+"static/media/wrong.a523fd75.mp3",oe=n.p+"static/media/movingfish.b08d01f0.mp3",le=n.p+"static/media/click.8515d2a4.mp3",ue=n.p+"static/media/claps.fd683cd7.mp3",pe=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).success=new $.Howl({src:ce,volume:1}),a.wrong=new $.Howl({src:ie,volume:1}),a.click=new $.Howl({src:le,volume:1}),a.movingfish=new $.Howl({src:oe,volume:1}),a.claps=new $.Howl({src:ue,volume:1}),a.timers=[],a.state={closedisplay:!1,question:"",fullquestion:""},a.animateQuestion=function(e){e.questions.forEach((function(t,n){var s=setTimeout((function(){a.setState({question:t,fullquestion:e.question})}),1e3*n*e.questiontype.delay);a.timers.push(s)}))},a.buttonTheme=function(){return"1"===a.props.playerno?"w3-ripple w3-hover-indigo w3-indigo":"w3-ripple w3-hover-red w3-pink"},a.sectionTheme=function(){return"1"===a.props.playerno?"w3-indigo":"w3-pink"},a.goClick=function(){var e=a.props.players[a.props.playerno],t=a.correctRef.current,n=a.questionRef.current,s=a.wrongRef.current;if(a.inputAnswer.value)if(a.timers.forEach((function(e){clearInterval(e)})),+a.inputAnswer.value===+e.answer){if(e.points===e.questiontype.points-1)return a.success.play(),a.movingfish.play(),a.props.win(a.props.playerno),void setTimeout((function(){a.props.complete(a.props.playerno),a.claps.play()}),2e3);n.classList.remove(te.a.ShowQuestion),t.classList.add(te.a.MessageAnimate),n.classList.add(te.a.HideQuestion),setTimeout((function(){a.props.nextQuestion(a.props.playerno),a.inputAnswer.value="",t.classList.remove(te.a.MessageAnimate),n.classList.remove(te.a.HideQuestion),n.classList.add(te.a.ShowQuestion)}),1e3),a.success.play(),a.movingfish.play()}else s.classList.add(te.a.MessageAnimate),setTimeout((function(){a.props.wrongAnswer(a.props.playerno),a.inputAnswer.value="",s.classList.remove(te.a.MessageAnimate)}),1e3),a.wrong.play()},a.restart=function(){var e=a.props.players[a.props.playerno];a.timers.forEach((function(e){clearInterval(e)})),a.setState({question:"",fullquestion:e.question});setTimeout((function(){a.animateQuestion(e)}),1e3)},a.appendAnswer=function(e){"<"===e?a.inputAnswer.value=a.inputAnswer.value.slice(0,-1):a.inputAnswer.value+="".concat(e),a.click.play()},a.correctRef=r.a.createRef(),a.wrongRef=r.a.createRef(),a.questionRef=r.a.createRef(),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.players[this.props.playerno];0===e.questiontype.delay?this.setState({question:e.question,fullquestion:e.question}):this.animateQuestion(e),console.log("[PlayerSection] componentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("[PlayerSection] componentDidUpdate");var e=this.props.players[this.props.playerno];e.question!==this.state.fullquestion&&(0===e.questiontype.delay?this.setState({question:e.question,fullquestion:e.question}):this.animateQuestion(e))}},{key:"render",value:function(){var e=this,t=this.props.players[this.props.playerno];console.log("[PlayerSection] render",this.props.playerno,t.answerresult,t.question,"questions",t.questions);var n=Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{ref:this.correctRef,className:[te.a.DisplayMessage,te.a.Correct].join(" "),children:Object(a.jsx)("i",{style:{margin:"5px"},className:"fa fa-check"})}),Object(a.jsx)("div",{ref:this.wrongRef,className:[te.a.DisplayMessage,te.a.Wrong].join(" "),children:t.answer})]});return Object(a.jsxs)("div",{className:["0"===this.props.playerno?te.a._0:te.a._1].join(" "),children:[Object(a.jsxs)(re,{show:!!this.state.closedisplay,modelClosed:function(){return e.setState({closedisplay:!1})},children:[Object(a.jsx)("span",{children:"Do you want to exit the game?"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("a",{role:"button",onClick:this.props.reset,tabIndex:0,onKeyPress:this.props.reset,style:{margin:"10px"},className:["w3-button","w3-round-large",this.buttonTheme()].join(" "),children:[" ","Restart"]}),Object(a.jsxs)("a",{role:"button",onClick:function(){return e.setState({closedisplay:!1})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!1})},style:{margin:"10px"},className:["w3-button","w3-round-large","w3-grey"].join(" "),children:[" ","Cancel"]})]})]}),n,Object(a.jsx)("div",{className:[te.a.PlayerCharacter].join(" "),children:Object(a.jsx)("img",{style:{position:"absolute",transform:0===+this.props.playerno?"scaleX(1)":"rotateX(180deg)",transition:"2s",left:"".concat(t.points*(90/+t.questiontype.points),"vw")},alt:this.props.playerno,className:[te.a.PlayerCharacter,1===this.props.playerno?te.a._1:te.a._2].join(" "),height:"auto",width:"100px",src:"".concat("/math-race","/images/Fish_").concat(this.props.playerno,".svg")})}),Object(a.jsxs)("div",{className:te.a.QuestionBar,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:[this.sectionTheme()].join(" "),children:Object(a.jsx)("span",{className:[te.a.PlayerName].join(" "),children:t.name})}),Object(a.jsxs)("span",{style:{position:"relative"},className:[this.sectionTheme()].join(" "),children:[Object(a.jsxs)("span",{className:["fa-stack",te.a.Score].join(" "),children:[Object(a.jsx)("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),Object(a.jsx)("strong",{className:"fa-stack-1x",style:{color:"#000"},children:t.points})]}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{role:"button",onClick:function(){return e.setState({closedisplay:!0})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!0})},className:te.a.Close,children:Object(a.jsx)("i",{className:"fa fa-window-close"})})})]})]}),Object(a.jsxs)("span",{ref:this.questionRef,className:te.a.Question,children:[Object(a.jsx)(Z.a,{classNames:"question",timeout:200,children:Object(a.jsx)("div",{children:Object(a.jsx)("span",{style:{fontSize:"2.5em"},dangerouslySetInnerHTML:{__html:this.state.question}})})}),Object(a.jsx)("a",{style:{display:0===t.questiontype.delay?"none":"block"},role:"button",onClick:this.restart,tabIndex:0,onKeyPress:this.restart,className:te.a.Refresh,children:Object(a.jsx)("i",{className:"fa fa-refresh"})}),Object(a.jsx)("input",{ref:function(t){e.inputAnswer=t},onKeyDown:function(){return!1},onKeyPress:function(){return!1},onKeyUp:function(){return!1},type:"text",maxLength:"7",className:["w3-btn","w3-round-large",this.sectionTheme(),te.a.Answer].join(" ")})]})]}),Object(a.jsxs)("div",{className:te.a.ButtonBar,children:[Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("1")},className:["w3-button","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"1"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("2")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"2"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("3")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"3"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("4")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"4"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("5")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"5"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("6")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"6"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("7")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"7"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("8")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"8"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("9")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"9"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("0")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"0"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer(".")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"."}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("-")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"-"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("<")},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnNumber].join(" "),children:"<"}),Object(a.jsx)("button",{type:"button","data-playerno":this.props.playerno,onClick:function(t){return e.goClick(t.currentTarget.dataset.playerno)},className:["w3-btn","w3-round-large",this.buttonTheme(),te.a.BtnGo].join(" "),children:"GO"})]})]})}}]),n}(s.PureComponent),de=Object(l.b)((function(e){return{players:e.game.players}}),(function(e){return{reset:function(){return e(z())},nextQuestion:function(t){return e(function(e){return function(t,n){t(Object(v.a)({type:C,playerno:e},W(n().game.players[e].questiontype,n().game.wordquestions)))}}(t))},wrongAnswer:function(t){return e(function(e){return function(t,n){t(Object(v.a)({type:S,playerno:e},W(n().game.players[e].questiontype,n().game.wordquestions)))}}(t))},win:function(t){return e(function(e){return{playerno:e,type:N}}(t))},complete:function(){return e({type:q})}}}))(pe),je=n(49),be=n(15),he=n(23);var ye=function(e){var t=e.players[0].points>=e.players[1].points?e.players[0].name:e.players[1].name,n=Object(be.a)(e.players).reverse().map((function(e){if(!e.name)return Object(a.jsx)(s.Fragment,{},e.id);var n=+e.points-e.wrong+(t===e.name?10:0);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[e.name,", ",t===e.name?"You won!!":"Opps You lost!!"]}),Object(a.jsxs)("span",{className:["fa-stack",he.Score].join(" "),children:[Object(a.jsx)("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),Object(a.jsx)("strong",{className:"fa-stack-1x",children:e.points}),Object(a.jsx)("span",{className:he.ScoreLabel,children:"Correct"})]}),Object(a.jsxs)("span",{className:["fa-stack",he.Score].join(" "),children:[Object(a.jsx)("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),Object(a.jsx)("strong",{className:"fa-stack-1x",children:-e.wrong}),Object(a.jsx)("span",{className:he.ScoreLabel,children:"Wrong"})]}),Object(a.jsxs)("span",{className:["fa-stack",he.Score].join(" "),children:[Object(a.jsx)("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),Object(a.jsx)("strong",{className:"fa-stack-1x",children:t===e.name?10:0}),Object(a.jsx)("span",{className:he.ScoreLabel,children:"Win Bonus"})]}),Object(a.jsxs)("span",{className:["fa-stack",he.Score].join(" "),children:[Object(a.jsx)("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),Object(a.jsx)("strong",{className:"fa-stack-1x",children:n}),Object(a.jsx)("span",{className:he.ScoreLabel,children:"Total"})]})]},e.id)}));return Object(a.jsxs)("div",{className:he.RaceComplete,children:[n,Object(a.jsx)("button",{type:"button",onClick:function(t){return e.reset()},onKeyPress:function(t){return e.reset()},className:["w3-btn","w3-round-large",he.BtnGo].join(" "),children:"Play Again >>"})]})},me=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(h.a)(this,n),a=t.call(this,e),console.log("[Racewrapper] constructor"),a.state={},a.props.reset(),a}return Object(y.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("[RaceWrapper] shouldComponentUpdate",!this.props.players&&e.players),!this.props.players&&e.players||this.props.starttime!==e.starttime||this.props.endtime!==e.endtime}},{key:"render",value:function(){if(console.log("[Racewrapper] render",this.props.players,this.props.endtime),!this.props.starttime)return Object(a.jsx)("div",{className:je.Race,children:Object(a.jsx)(V,{})});if(this.props.endtime)return Object(a.jsx)("div",{className:je.Race,children:Object(a.jsx)(ye,{players:this.props.players,reset:this.props.reset})});var e=this.props.players.map((function(e,t){return e.name?Object(a.jsx)(de,{playerno:"".concat(e.id)},e.id):Object(a.jsx)(s.Fragment,{},e.id)}));return Object(a.jsx)("div",{className:je.Race,style:{backgroundImage:"url(".concat("/math-race","/images/underwater.png)")},children:e})}}]),n}(s.Component),xe=Object(l.b)((function(e){return{players:e.game.players,starttime:e.game.starttime,endtime:e.game.endtime}}),(function(e){return{reset:function(){return e(z())}}}))(me);s.Component;var Oe=function(){return Object(a.jsx)(b.c,{children:Object(a.jsx)(b.a,{path:"/",component:xe})})};var fe=function(){return Object(a.jsx)(Oe,{})},ve={name:null,points:0,wrong:0,question:null,answer:null,answerresult:null,questiontype:Object(v.a)({},{type:"+-",nos:2,digits:2,decimals:0,points:10,tens:"Y",delay:0,inwords:!1})},ge={starttime:null,endtime:null,players:[Object(v.a)({id:0},ve),Object(v.a)({id:1},ve)],wordquestions:null},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;console.log("[reducer]",t.type);var n=null;switch(t.type){case w:return Object(v.a)(Object(v.a)({},e),{},{starttime:null,endtime:null});case _:return Object(v.a)(Object(v.a)({},e),{},{wordquestions:t.questions});case k:return Object(v.a)(Object(v.a)({},e),{},{starttime:new Date,players:Object(be.a)(t.players)});case C:return(n=Object(be.a)(e.players))[t.playerno].points+=1,n[t.playerno].question=t.question,n[t.playerno].questions=t.questions,n[t.playerno].answer=t.answer,n[t.playerno].answerresult="CORRECT",Object(v.a)(Object(v.a)({},e),{},{players:Object(be.a)(n)});case S:return(n=Object(be.a)(e.players))[t.playerno].wrong+=1,n[t.playerno].question=t.question,n[t.playerno].questions=t.questions,n[t.playerno].answer=t.answer,n[t.playerno].answerresult="WRONG",Object(v.a)(Object(v.a)({},e),{},{players:n});case N:return(n=Object(be.a)(e.players))[t.playerno].points+=1,Object(v.a)(Object(v.a)({},e),{},{players:Object(be.a)(n)});case q:return Object(v.a)(Object(v.a)({},e),{},{endtime:new Date});default:return e}},_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,ke=Object(u.c)({game:we}),Ce=Object(u.e)(ke,_e(Object(u.a)(p.a)));i.a.render(Object(a.jsx)(l.a,{store:Ce,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(fe,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/math-race",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/math-race/service-worker.js";d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},23:function(e,t,n){e.exports={Score:"RaceComplete_Score__1hh63",RaceComplete:"RaceComplete_RaceComplete__3X8Bw",ScoreLabel:"RaceComplete_ScoreLabel__UTyaQ"}},41:function(e,t,n){e.exports={BtnGo:"RaceSetup_BtnGo__1olAv",BtnNumber:"RaceSetup_BtnNumber__1nWwX",RaceSetup:"RaceSetup_RaceSetup__2MTWI",Options:"RaceSetup_Options__3gKGI",Players:"RaceSetup_Players__3Mw1p",ExtraWide:"RaceSetup_ExtraWide__2bkI0"}},45:function(e,t,n){e.exports={DisplayMessage:"DisplayMessage_DisplayMessage__qsfDJ",Correct:"DisplayMessage_Correct__2Iu6S",Wrong:"DisplayMessage_Wrong__2oP-U","hide-animation":"DisplayMessage_hide-animation__2oQFU"}},49:function(e,t,n){e.exports={Race:"RaceWrapper_Race__273Aj"}},6:function(e,t,n){e.exports={_0:"PlayerSection__0__16GFq",_1:"PlayerSection__1__1EQA8",PlayerCharacter:"PlayerSection_PlayerCharacter__118mI",QuestionBar:"PlayerSection_QuestionBar__K1Czx","question-enter":"PlayerSection_question-enter__2Vxks","question-enter-active":"PlayerSection_question-enter-active__3qDzs","question-exit":"PlayerSection_question-exit__1u7-1","question-exit-active":"PlayerSection_question-exit-active__Kkl02",Question:"PlayerSection_Question__3Ac7J",Close:"PlayerSection_Close__1gOHI",Refresh:"PlayerSection_Refresh__2TJJI",ButtonBar:"PlayerSection_ButtonBar__2tk7H",Answer:"PlayerSection_Answer__1JQjr",BtnGo:"PlayerSection_BtnGo__No7ze",BtnNumber:"PlayerSection_BtnNumber__kbZb7",HideQuestion:"PlayerSection_HideQuestion__2Rf4I","hide-question":"PlayerSection_hide-question___kcKy",ShowQuestion:"PlayerSection_ShowQuestion__PJYlO","show-question":"PlayerSection_show-question__1c6wT",DisplayMessage:"PlayerSection_DisplayMessage__3hzSb",MessageAnimate:"PlayerSection_MessageAnimate__1NLY0","hide-animation":"PlayerSection_hide-animation__1WCrl",Correct:"PlayerSection_Correct__3LiMU",Wrong:"PlayerSection_Wrong__l9GG-",points0:"PlayerSection_points0__3RGGb","\xd2":"PlayerSection_\xd2__iN7sG",points1:"PlayerSection_points1__18mF8",points2:"PlayerSection_points2__2M6od",points3:"PlayerSection_points3__X6CcJ",points4:"PlayerSection_points4__3bNiR",points5:"PlayerSection_points5__YsW7z",points6:"PlayerSection_points6__2GBKu",points7:"PlayerSection_points7__2GXH2",points8:"PlayerSection_points8__2T4s2",points9:"PlayerSection_points9__3Vkzb",points10:"PlayerSection_points10__3q6zW"}},73:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__zFzWk"}},74:function(e,t,n){e.exports={Modal:"Modal_Modal__16SAR",Close:"Modal_Close__2D0xG"}},82:function(e,t,n){},86:function(e,t,n){},95:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.7ebb48fd.chunk.js.map