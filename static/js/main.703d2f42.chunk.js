(this["webpackJsonpmath-race"]=this["webpackJsonpmath-race"]||[]).push([[0],[,function(e,t,a){e.exports={_0:"PlayerSection__0__16GFq",_1:"PlayerSection__1__1EQA8",PlayerCharacter:"PlayerSection_PlayerCharacter__118mI",QuestionBar:"PlayerSection_QuestionBar__K1Czx",Question:"PlayerSection_Question__3Ac7J",Close:"PlayerSection_Close__1gOHI",ButtonBar:"PlayerSection_ButtonBar__2tk7H",Answer:"PlayerSection_Answer__1JQjr",BtnGo:"PlayerSection_BtnGo__No7ze",BtnNumber:"PlayerSection_BtnNumber__kbZb7",HideQuestion:"PlayerSection_HideQuestion__2Rf4I","hide-question":"PlayerSection_hide-question___kcKy",ShowQuestion:"PlayerSection_ShowQuestion__PJYlO","show-question":"PlayerSection_show-question__1c6wT",DisplayMessage:"PlayerSection_DisplayMessage__3hzSb",MessageAnimate:"PlayerSection_MessageAnimate__1NLY0","hide-animation":"PlayerSection_hide-animation__1WCrl",Correct:"PlayerSection_Correct__3LiMU",Wrong:"PlayerSection_Wrong__l9GG-",points0:"PlayerSection_points0__3RGGb","\xd2":"PlayerSection_\xd2__iN7sG",points1:"PlayerSection_points1__18mF8",points2:"PlayerSection_points2__2M6od",points3:"PlayerSection_points3__X6CcJ",points4:"PlayerSection_points4__3bNiR",points5:"PlayerSection_points5__YsW7z",points6:"PlayerSection_points6__2GBKu",points7:"PlayerSection_points7__2GXH2",points8:"PlayerSection_points8__2T4s2",points9:"PlayerSection_points9__3Vkzb",points10:"PlayerSection_points10__3q6zW"}},,,,,,,,,function(e,t,a){e.exports={Score:"RaceComplete_Score__1hh63",RaceComplete:"RaceComplete_RaceComplete__3X8Bw",ScoreLabel:"RaceComplete_ScoreLabel__UTyaQ"}},,,,,,,,,function(e,t,a){e.exports={BtnGo:"RaceSetup_BtnGo__1olAv",BtnNumber:"RaceSetup_BtnNumber__1nWwX",RaceSetup:"RaceSetup_RaceSetup__2MTWI",Players:"RaceSetup_Players__3Mw1p",Options:"RaceSetup_Options__3gKGI"}},,,,function(e,t,a){e.exports={DisplayMessage:"DisplayMessage_DisplayMessage__qsfDJ",Correct:"DisplayMessage_Correct__2Iu6S",Wrong:"DisplayMessage_Wrong__2oP-U","hide-animation":"DisplayMessage_hide-animation__2oQFU"}},,,,,function(e,t,a){e.exports={Race:"RaceWrapper_Race__273Aj"}},,,,,,,,,,function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__zFzWk"}},function(e,t,a){e.exports={Modal:"Modal_Modal__16SAR",Close:"Modal_Close__2D0xG"}},function(e,t,a){e.exports=a.p+"static/media/success.9145040e.mp3"},function(e,t,a){e.exports=a.p+"static/media/wrong.1cb7c040.mp3"},function(e,t,a){e.exports=a.p+"static/media/movingfish.a2c3c21e.mp3"},function(e,t,a){e.exports=a.p+"static/media/click.200de8e8.mp3"},function(e,t,a){e.exports=a.p+"static/media/claps.e824b4a4.mp3"},function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),s=(a(50),a(26)),c=a(12),i=a(13),u=a(36),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(55);var d=a(4),y=a(15),f=a(16),b=a(18),h=a(17),v=a(3),E=a(37),w=function(e){return e>=100},g=function(e){return e>=20&&e<=99},_=[{number:1e12,text:"trillion"},{number:1e9,text:"billion"},{number:1e6,text:"million"},{number:1e3,text:"thousand"},{number:100,text:"hundred"},{number:90,text:"ninety"},{number:80,text:"eighty"},{number:70,text:"seventy"},{number:60,text:"sixty"},{number:50,text:"fifty"},{number:40,text:"forty"},{number:30,text:"thirty"},{number:20,text:"twenty"},{number:19,text:"nineteen"},{number:18,text:"eighteen"},{number:17,text:"seventeen"},{number:16,text:"sixteen"},{number:15,text:"fifteen"},{number:14,text:"fourteen"},{number:13,text:"thirteen"},{number:12,text:"twelve"},{number:11,text:"eleven"},{number:10,text:"ten"},{number:9,text:"nine"},{number:8,text:"eight"},{number:7,text:"seven"},{number:6,text:"six"},{number:5,text:"five"},{number:4,text:"four"},{number:3,text:"three"},{number:2,text:"two"},{number:1,text:"one"},{number:0,text:"zero"}],k=function e(t){var a,n,r,l,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=o.ands||!1,c=o.commas?",":"",i=s?"".concat("and"," "):"",u="",p=parseInt(t,10);if(isNaN(p))return"not a number";if(!isFinite(p))return"infinity";p<0&&(u+="negative ",p*=-1);var m,d=Object(E.a)(_);try{for(d.s();!(m=d.n()).done;){var y=m.value,f=y.number,b=y.text;if(p===f)return w(f)&&(u+="one "),u+=b;if(p>f){r=f,l=b;break}}}catch(h){d.e(h)}finally{d.f()}return(1!==(a=Math.floor(p/r))||w(r))&&(u+="".concat(e(a,o)," ")),u+=l,(n=p-a*r)>0&&g(r)?u+="-":u+=r>=1e3&&n>0&&n<100?"".concat(c," ").concat(i):r>=1e3&&n>0?"".concat(c," "):100===r&&n>0?" ".concat(i):" ",n>0&&(u+=e(n,o)),u.trim()},N=function(e){var t=e.type;e.nos,e.digits,e.inwords;return"+-"===t||"+-x"===t?C(e):{question:"",answer:""}},C=function(e){var t=0,a="",n=0,r=e.type,l=e.nos,o=e.digits,s=e.inwords,c=e.decimals,i=void 0===c?0:c;s&&(i=0);for(var u=[],p=o+i,m=0;m<l;m+=1){var d=r,y="+";y=0===m||n<Math.pow(10,p-1)?"+":(n>=100||n<=10)&&"+-x"===r&&o>1||n>10&&"+-x"===r&&1===o?j("+-"):m>1&&"+-x"===r&&!u.includes("x")&&n>9&&n<100&&o>1||m>1&&"+-x"===r&&!u.includes("x")&&n<10&&1===o?"x":j(d),u.push(y);var f=Math.pow(10,p)-1,b=Math.pow(10,p-1)+1;if("x"===y?(b=2,f=9):"-"===y&&f>n&&(f=n),t=x(b,f),"+"===y||"-"===y?n+=("+"===y?1:-1)*t:"x"===y&&(n*=t),s){if(s){var h=k(t);a="".concat(a).concat(m<=0?"":"+"===y?" <u><i>plus</i></u> ":"-"===y?" <u><i>minus</i></u> ":" <u><i>times</i></u> ").concat(h)}}else a="".concat(a," ").concat(m>0?y:""," ").concat(t/(0===i?1:Math.pow(10,i)))}return n/=0===i?1:Math.pow(10,i),console.log("".concat(a," ? ").concat(n)),{question:a,answer:n}},x=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},j=function(e){var t=e.split("");return t[x(0,t.length-1)]},S=a(9),O=a(19),P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(y.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.form,a=t.player0,r=t.player1,l=t.digits0,o=t.numbers0,s=t.decimals0,c=t.type0,i=t.points0,u=t.inwords0,p=t.digits1,m=t.numbers1,d=t.decimals1,y=t.type1,f=t.points1,b=t.inwords1,h={type:c.value,nos:+o.value,digits:+l.value,decimals:+s.value,points:+i.value,inwords:"true"===u.value},v={type:y.value,nos:+m.value,digits:+p.value,points:+f.value,decimals:+d.value,inwords:"true"===b.value};n.props.start(a.value,r.value,h,v)};var r=[e.players&&e.players[0].name||"Hasana",e.players&&e.players[1].name||""],l=[e.players&&e.players[0].questiontype.type||"+-",e.players&&e.players[1].questiontype.type||"+-"];return n.state={type0:l[0],type1:l[1],player0:r[0],player1:r[1]},console.log("RaceSetup[constructor]",n.state),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this;console.log("[RaceSetup] render");var t=[this.props.players&&this.props.players[0].name||"Hasana",this.props.players&&this.props.players[1].name||""],a=[1,0].map((function(a){var n=e.props.players[a],l=(n.name,n.questiontype);return r.a.createElement("div",{key:a,className:O.RaceSetup},r.a.createElement("div",{className:O.Players},r.a.createElement("div",null,r.a.createElement("h2",null,"Player - ".concat(a+1)),r.a.createElement("div",{style:{display:1===a?"block":"none"}},r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:!t[a]}),r.a.createElement("label",null,"None")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"Bruhathi",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:"Bruhathi"===t[a]}),r.a.createElement("label",null,"Bruhathi")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"Hasana",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:"Hasana"===t[a]}),r.a.createElement("label",null,"Hasana")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"Krishna",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:"Krishna"===t[a]}),r.a.createElement("label",null,"Krishna")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"Nanna",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:"Nanna"===t[a]}),r.a.createElement("label",null,"Nanna")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player".concat(a),value:"Amma",onChange:function(t){return e.setState(Object(S.a)({},"player".concat(a),t.currentTarget.value))},defaultChecked:"Amma"===t[a]}),r.a.createElement("label",null,"Amma")))),r.a.createElement("div",{style:{display:e.state["player".concat(a)]?"flex":"none"},className:O.Options},r.a.createElement("div",{className:O.ExtraWide},r.a.createElement("h2",null,"Type"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"type".concat(a),value:"+-",onChange:function(t){return e.setState(Object(S.a)({},"type".concat(a),t.currentTarget.value))},defaultChecked:"+-"===l.type}),r.a.createElement("label",null,"+-")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"type".concat(a),value:"+-x",onChange:function(t){return e.setState(Object(S.a)({},"type".concat(a),t.currentTarget.value))},defaultChecked:"+-x"===l.type}),r.a.createElement("label",null,"+-x"))),r.a.createElement("div",{style:{display:["+-","+-x"].includes(e.state["type".concat(a)])?"flex":"none"}},r.a.createElement("h2",null,"Digits"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits".concat(a),value:"1",defaultChecked:1===l.digits}),r.a.createElement("label",null,"1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits".concat(a),value:"2",defaultChecked:2===l.digits}),r.a.createElement("label",null,"2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits".concat(a),value:"3",defaultChecked:3===l.digits}),r.a.createElement("label",null,"3"))),r.a.createElement("div",{style:{display:["+-","+-x"].includes(e.state["type".concat(a)])?"flex":"none"}},r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers".concat(a),value:"2",defaultChecked:2===l.nos}),r.a.createElement("label",null,"2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers".concat(a),value:"3",defaultChecked:3===l.nos}),r.a.createElement("label",null,"3")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers".concat(a),value:"4",defaultChecked:4===l.nos}),r.a.createElement("label",null,"4")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers".concat(a),value:"5",defaultChecked:5===l.nos}),r.a.createElement("label",null,"5"))),r.a.createElement("div",{style:{display:"+-"===e.state["type".concat(a)]?"flex":"none"}},r.a.createElement("h2",null,"Decimals"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals".concat(a),value:"0",defaultChecked:0===l.decimals}),r.a.createElement("label",null,"0")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals".concat(a),value:"1",defaultChecked:1===l.decimals}),r.a.createElement("label",null,"1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals".concat(a),value:"2",defaultChecked:2===l.decimals}),r.a.createElement("label",null,"2"))),r.a.createElement("div",null,r.a.createElement("h2",null,"In Words"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"inwords".concat(a),value:"true",defaultChecked:!!l.inwords}),r.a.createElement("label",null,"Yes")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"inwords".concat(a),value:"false",defaultChecked:!l.inwords}),r.a.createElement("label",null,"No"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Points"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points".concat(a),value:"5",defaultChecked:5===l.points}),r.a.createElement("label",null,"5")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points".concat(a),value:"10",defaultChecked:10===l.points}),r.a.createElement("label",null,"10")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points".concat(a),value:"15",defaultChecked:15===l.points}),r.a.createElement("label",null,"15")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points".concat(a),value:"20",defaultChecked:20===l.points}),r.a.createElement("label",null,"20")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points".concat(a),value:"25",defaultChecked:25===l.points}),r.a.createElement("label",null,"25")))))}));return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){e.form=t}},r.a.createElement("h2",{style:{textAlign:"center"}},"Maths Race"),r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",value:"Start",className:["w3-btn","w3-round-large",O.BtnGo].join(" ")},"Start >>"))))}}]),a}(n.PureComponent),R=Object(c.b)((function(e){return{players:e.game.players}}),(function(e){return{start:function(t,a,n,r){return e(function(e,t,a,n){return{type:"START",players:[Object(v.a)(Object(v.a)({id:0,name:e,points:0,wrong:0},N(a)),{},{answerresult:"",questiontype:a}),Object(v.a)(Object(v.a)({id:1,name:t,points:0,wrong:0},N(n)),{},{answerresult:"",questiontype:n})]}}(t,a,n,r))}}}))(P),T=a(20),A=a(1),B=a.n(A);a(23);var M=a(38);var W=function(e){return e.show?r.a.createElement("div",{className:M.Backdrop,onClick:e.clicked,onKeyPress:e.clicked,role:"button",tabIndex:"0"}):r.a.createElement(n.Fragment,null)},q=a(39);var D=function(e){return e.show?r.a.createElement(n.Fragment,null,r.a.createElement(W,{show:e.show,clicked:e.modelClosed}),r.a.createElement("div",{className:q.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)):r.a.createElement(n.Fragment,null)},L=a(40),G=a.n(L),Q=a(41),H=a.n(Q),I=a(42),K=a.n(I),F=a(43),U=a.n(F),z=a(44),X=a.n(z),Y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).success=new T.Howl({src:G.a,volume:.1}),n.wrong=new T.Howl({src:H.a,volume:.1}),n.click=new T.Howl({src:U.a,volume:.5}),n.movingfish=new T.Howl({src:K.a,volume:1}),n.claps=new T.Howl({src:X.a,volume:.5}),n.state={closedisplay:!1},n.buttonTheme=function(){return"1"===n.props.playerno?"w3-ripple w3-hover-indigo w3-indigo":"w3-ripple w3-hover-red w3-pink"},n.sectionTheme=function(){return"1"===n.props.playerno?"w3-indigo":"w3-pink"},n.goClick=function(){var e=n.props.players[n.props.playerno],t=n.correctRef.current,a=n.questionRef.current,r=n.wrongRef.current;if(n.inputAnswer.value)if(+n.inputAnswer.value===+e.answer){if(e.points===e.questiontype.points-1)return n.success.play(),n.movingfish.play(),n.props.win(n.props.playerno),void setTimeout((function(){n.props.complete(n.props.playerno),n.claps.play()}),2e3);a.classList.remove(B.a.ShowQuestion),t.classList.add(B.a.MessageAnimate),a.classList.add(B.a.HideQuestion),setTimeout((function(){n.props.nextQuestion(n.props.playerno),n.inputAnswer.value="",t.classList.remove(B.a.MessageAnimate),a.classList.remove(B.a.HideQuestion),a.classList.add(B.a.ShowQuestion)}),1e3),n.success.play(),n.movingfish.play()}else r.classList.add(B.a.MessageAnimate),setTimeout((function(){n.props.wrongAnswer(n.props.playerno),n.inputAnswer.value="",r.classList.remove(B.a.MessageAnimate)}),1e3),n.wrong.play()},n.appendAnswer=function(e){"<"===e?n.inputAnswer.value=n.inputAnswer.value.slice(0,-1):n.inputAnswer.value+="".concat(e),n.click.play()},n.correctRef=r.a.createRef(),n.wrongRef=r.a.createRef(),n.questionRef=r.a.createRef(),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){console.log("[PlayerSection] componentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("[PlayerSection] componentDidUpdate")}},{key:"render",value:function(){var e=this,t=this.props.players[this.props.playerno];console.log("[PlayerSection] render",this.props.playerno,t.answerresult,"Points",t.points*(+t.questiontype.points-1));var a=r.a.createElement(n.Fragment,null,r.a.createElement("div",{ref:this.correctRef,className:[B.a.DisplayMessage,B.a.Correct].join(" ")},r.a.createElement("i",{style:{margin:"5px"},className:"fa fa-check"})),r.a.createElement("div",{ref:this.wrongRef,className:[B.a.DisplayMessage,B.a.Wrong].join(" ")},t.answer));return r.a.createElement("div",{className:["0"===this.props.playerno?B.a._0:B.a._1].join(" ")},r.a.createElement(D,{show:!!this.state.closedisplay,modelClosed:function(){return e.setState({closedisplay:!1})}},r.a.createElement("span",null,"Do you want to exit the game?"),r.a.createElement("div",null,r.a.createElement("a",{role:"button",onClick:this.props.reset,tabIndex:0,onKeyPress:this.props.reset,style:{margin:"10px"},className:["w3-button","w3-round-large",this.buttonTheme()].join(" ")}," ","Restart"),r.a.createElement("a",{role:"button",onClick:function(){return e.setState({closedisplay:!1})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!1})},style:{margin:"10px"},className:["w3-button","w3-round-large","w3-grey"].join(" ")}," ","Cancel"))),a,r.a.createElement("div",{className:[B.a.PlayerCharacter].join(" ")},r.a.createElement("img",{style:{position:"absolute",transform:0===+this.props.playerno?"scaleX(1)":"rotateX(180deg)",transition:"2s",left:"".concat(t.points*(90/+t.questiontype.points),"vw")},alt:this.props.playerno,className:[B.a.PlayerCharacter,1===this.props.playerno?B.a._1:B.a._2].join(" "),height:"auto",width:"100px",src:"".concat("/math-race","/images/Fish_").concat(this.props.playerno,".svg")})),r.a.createElement("div",{className:B.a.QuestionBar},r.a.createElement("div",null,r.a.createElement("span",{className:[this.sectionTheme()].join(" ")},r.a.createElement("span",{className:[B.a.PlayerName].join(" ")},t.name)),r.a.createElement("span",{style:{position:"relative"},className:[this.sectionTheme()].join(" ")},r.a.createElement("span",{className:["fa-stack",B.a.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x",style:{color:"#000"}},t.points)),r.a.createElement("div",null,r.a.createElement("a",{role:"button",onClick:function(){return e.setState({closedisplay:!0})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!0})},className:B.a.Close},r.a.createElement("i",{className:"fa fa-window-close"}))))),r.a.createElement("span",{ref:this.questionRef,className:B.a.Question},r.a.createElement("span",{style:{fontSize:"2.5em"},dangerouslySetInnerHTML:{__html:t.question}}),r.a.createElement("input",{ref:function(t){e.inputAnswer=t},onKeyDown:function(){return!1},onKeyPress:function(){return!1},onKeyUp:function(){return!1},type:"text",maxLength:"7",className:["w3-btn","w3-round-large",this.sectionTheme(),B.a.Answer].join(" ")}))),r.a.createElement("div",{className:B.a.ButtonBar},r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("1")},className:["w3-button","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"1"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("2")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"2"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("3")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"3"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("4")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"4"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("5")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"5"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("6")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"6"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("7")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"7"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("8")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"8"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("9")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"9"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("0")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"0"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer(".")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"."),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("-")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"-"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("<")},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnNumber].join(" ")},"<"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(t){return e.goClick(t.currentTarget.dataset.playerno)},className:["w3-btn","w3-round-large",this.buttonTheme(),B.a.BtnGo].join(" ")},"GO")))}}]),a}(n.PureComponent),J=Object(c.b)((function(e){return{players:e.game.players}}),(function(e){return{reset:function(){return e({type:"RESET"})},nextQuestion:function(t){return e(function(e){return function(t,a){t(Object(v.a)({type:"CORRECT",playerno:e},N(a().game.players[e].questiontype)))}}(t))},wrongAnswer:function(t){return e(function(e){return function(t,a){t(Object(v.a)({type:"WRONG",playerno:e},N(a().game.players[e].questiontype)))}}(t))},win:function(t){return e(function(e){return{playerno:e,type:"WIN"}}(t))},complete:function(){return e({type:"COMPLETE"})}}}))(Y),V=a(28),Z=a(11),$=a(10);var ee=function(e){var t=e.players[0].points>=e.players[1].points?e.players[0].name:e.players[1].name,a=Object(Z.a)(e.players).reverse().map((function(e){if(!e.name)return r.a.createElement(n.Fragment,{key:e.id});var a=+e.points-e.wrong+(t===e.name?10:0);return r.a.createElement("div",{key:e.id},r.a.createElement("h1",null,e.name,", ",t===e.name?"You won!!":"Opps You lost!!"),r.a.createElement("span",{className:["fa-stack",$.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},e.points),r.a.createElement("span",{className:$.ScoreLabel},"Correct")),r.a.createElement("span",{className:["fa-stack",$.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},-e.wrong),r.a.createElement("span",{className:$.ScoreLabel},"Wrong")),r.a.createElement("span",{className:["fa-stack",$.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},t===e.name?10:0),r.a.createElement("span",{className:$.ScoreLabel},"Win Bonus")),r.a.createElement("span",{className:["fa-stack",$.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},a),r.a.createElement("span",{className:$.ScoreLabel},"Total")))}));return r.a.createElement("div",{className:$.RaceComplete},a,r.a.createElement("button",{type:"button",onClick:function(t){return e.reset()},onKeyPress:function(t){return e.reset()},className:["w3-btn","w3-round-large",$.BtnGo].join(" ")},"Play Again >>"))},te=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),console.log("[Racewrapper] constructor"),n.state={},n.props.reset(),n}return Object(f.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("[RaceWrapper] shouldComponentUpdate",!this.props.players&&e.players),!this.props.players&&e.players||this.props.starttime!==e.starttime||this.props.endtime!==e.endtime}},{key:"render",value:function(){if(console.log("[Racewrapper] render",this.props.players,this.props.endtime),!this.props.starttime)return r.a.createElement("div",{className:V.Race},r.a.createElement(R,null));if(this.props.endtime)return r.a.createElement("div",{className:V.Race},r.a.createElement(ee,{players:this.props.players,reset:this.props.reset}));var e=this.props.players.map((function(e,t){return e.name?r.a.createElement(J,{key:e.id,playerno:"".concat(e.id)}):r.a.createElement(n.Fragment,{key:e.id})}));return r.a.createElement("div",{className:V.Race,style:{backgroundImage:"url(".concat("/math-race","/images/underwater.png)")}},e)}}]),a}(n.Component),ae=Object(c.b)((function(e){return{players:e.game.players,starttime:e.game.starttime,endtime:e.game.endtime}}),(function(e){return{reset:function(){return e({type:"RESET"})}}}))(te);var ne=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:ae}))};var re=function(){return r.a.createElement(ne,null)},le={name:null,points:0,wrong:0,question:null,answer:null,answerresult:null,questiontype:Object(v.a)({},{type:"+-",nos:2,digits:2,decimals:0,points:10,inwords:!1})},oe={starttime:null,endtime:null,players:[Object(v.a)({id:0},le),Object(v.a)({id:1},le)]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;console.log("[reducer]",t.type);var a=null;switch(t.type){case"RESET":return Object(v.a)(Object(v.a)({},e),{},{starttime:null,endtime:null});case"START":return Object(v.a)(Object(v.a)({},e),{},{starttime:new Date,players:Object(Z.a)(t.players)});case"CORRECT":return(a=Object(Z.a)(e.players))[t.playerno].points+=1,a[t.playerno].question=t.question,a[t.playerno].answer=t.answer,a[t.playerno].answerresult="CORRECT",Object(v.a)(Object(v.a)({},e),{},{players:Object(Z.a)(a)});case"WRONG":return(a=Object(Z.a)(e.players))[t.playerno].wrong+=1,a[t.playerno].question=t.question,a[t.playerno].answer=t.answer,a[t.playerno].answerresult="WRONG",Object(v.a)(Object(v.a)({},e),{},{players:a});case"WIN":return(a=Object(Z.a)(e.players))[t.playerno].points+=1,Object(v.a)(Object(v.a)({},e),{},{players:Object(Z.a)(a)});case"COMPLETE":return Object(v.a)(Object(v.a)({},e),{},{endtime:new Date});default:return e}},ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ie=Object(i.c)({game:se}),ue=Object(i.e)(ie,ce(Object(i.a)(u.a)));o.a.render(r.a.createElement(c.a,{store:ue},r.a.createElement(s.a,null,r.a.createElement(re,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/math-race",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/math-race/service-worker.js";p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[45,1,2]]]);
//# sourceMappingURL=main.703d2f42.chunk.js.map