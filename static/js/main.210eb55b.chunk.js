(this["webpackJsonpmath-race"]=this["webpackJsonpmath-race"]||[]).push([[0],{1:function(e,t,a){e.exports={_0:"PlayerSection__0__16GFq",_1:"PlayerSection__1__1EQA8",PlayerCharacter:"PlayerSection_PlayerCharacter__118mI",QuestionBar:"PlayerSection_QuestionBar__K1Czx",Question:"PlayerSection_Question__3Ac7J",Close:"PlayerSection_Close__1gOHI",ButtonBar:"PlayerSection_ButtonBar__2tk7H",Answer:"PlayerSection_Answer__1JQjr",BtnGo:"PlayerSection_BtnGo__No7ze",BtnNumber:"PlayerSection_BtnNumber__kbZb7",HideQuestion:"PlayerSection_HideQuestion__2Rf4I","hide-question":"PlayerSection_hide-question___kcKy",ShowQuestion:"PlayerSection_ShowQuestion__PJYlO","show-question":"PlayerSection_show-question__1c6wT",DisplayMessage:"PlayerSection_DisplayMessage__3hzSb",MessageAnimate:"PlayerSection_MessageAnimate__1NLY0","hide-animation":"PlayerSection_hide-animation__1WCrl",Correct:"PlayerSection_Correct__3LiMU",Wrong:"PlayerSection_Wrong__l9GG-",points0:"PlayerSection_points0__3RGGb","\xd2":"PlayerSection_\xd2__iN7sG",points1:"PlayerSection_points1__18mF8",points2:"PlayerSection_points2__2M6od",points3:"PlayerSection_points3__X6CcJ",points4:"PlayerSection_points4__3bNiR",points5:"PlayerSection_points5__YsW7z",points6:"PlayerSection_points6__2GBKu",points7:"PlayerSection_points7__2GXH2",points8:"PlayerSection_points8__2T4s2",points9:"PlayerSection_points9__3Vkzb",points10:"PlayerSection_points10__3q6zW"}},19:function(e,t,a){e.exports={BtnGo:"RaceSetup_BtnGo__1olAv",BtnNumber:"RaceSetup_BtnNumber__1nWwX",RaceSetup:"RaceSetup_RaceSetup__2MTWI",Players:"RaceSetup_Players__3Mw1p",Options:"RaceSetup_Options__3gKGI"}},20:function(e,t,a){e.exports={DisplayMessage:"DisplayMessage_DisplayMessage__qsfDJ",Correct:"DisplayMessage_Correct__2Iu6S",Wrong:"DisplayMessage_Wrong__2oP-U","hide-animation":"DisplayMessage_hide-animation__2oQFU"}},24:function(e,t,a){e.exports={Race:"RaceWrapper_Race__273Aj"}},33:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__zFzWk"}},34:function(e,t,a){e.exports={Modal:"Modal_Modal__16SAR",Close:"Modal_Close__2D0xG"}},35:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),s=(a(40),a(23)),i=a(10),c=a(11),u=a(32),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(45);var d=a(3),y=a(14),h=a(15),f=a(17),b=a(16),E=a(4),v=function(e){for(var t=0,a="",n=0,r=e.nos,l=e.digits,o=e.decimals,s=void 0===o?0:o,i=l+s,c=0;c<r;c+=1){var u=0===c||n<Math.pow(10,i-1)?1:w(),p=Math.pow(10,i)-1,m=Math.pow(10,i-1)+1;u<0&&p>n&&(p=n),n+=u*(t=_(m,p,s)),a="".concat(a).concat(t>0&&u>0?c>0?" + ":"":" - ").concat(t/(0===s?1:Math.pow(10,s)))}return n/=0===s?1:Math.pow(10,s),console.log("".concat(a," ? ").concat(n)),{question:a,answer:n}},_=function(e,t,a){return Math.floor(Math.random()*(t-e+1)+e)},w=function(){return 2*Math.round(Math.random())-1},g=a(19),N=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.form,a=t.player1,r=t.player2,l=t.digits,o=t.numbers,s=t.decimals,i=t.type,c=t.points,u={type:i.value,nos:+o.value,digits:+l.value,decimals:+s.value,points:+c.value};console.log(u),n.props.start(a.value,r.value,u)},n.state={type:"+-"},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;console.log("[RaceSetup] render");var t=this.props.questiontype,a=this.props.players&&this.props.players[1].name||"Nanna",l=this.props.players&&this.props.players[0].name||"Hasana";return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){e.form=t}},r.a.createElement("h2",{style:{textAlign:"center"}},"Maths Race"),r.a.createElement("div",{className:g.RaceSetup},r.a.createElement("div",{className:g.Players},r.a.createElement("div",null,r.a.createElement("h2",null,"Player2"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player2",value:"Hasana",defaultChecked:"Hasana"===a}),r.a.createElement("label",null,"Hasana")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player2",value:"Nanna",defaultChecked:"Nanna"===a}),r.a.createElement("label",null,"Nanna")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player2",value:"Amma",defaultChecked:"Amma"===a}),r.a.createElement("label",null,"Amma"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Player1"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player1",value:"Hasana",defaultChecked:"Hasana"===l}),r.a.createElement("label",null,"Hasana")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player1",value:"Nanna",defaultChecked:"Nanna"===l}),r.a.createElement("label",null,"Nanna")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"player1",value:"Amma",defaultChecked:"Amma"===l}),r.a.createElement("label",null,"Amma")))),r.a.createElement("div",{className:g.Options},r.a.createElement("div",null,r.a.createElement("h2",null,"Type"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"type",value:"+-",onChange:function(t){return e.setState({type:t.currentTarget.value})},defaultChecked:"true"}),r.a.createElement("label",null,"+-"))),r.a.createElement("div",{style:{display:"+-"===this.state.type?"flex":"none"}},r.a.createElement("h2",null,"Digits"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits",value:"1",defaultChecked:1===t.digits}),r.a.createElement("label",null,"1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits",value:"2",defaultChecked:2===t.digits}),r.a.createElement("label",null,"2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"digits",value:"3",defaultChecked:3===t.digits}),r.a.createElement("label",null,"3"))),r.a.createElement("div",{style:{display:"+-"===this.state.type?"flex":"none"}},r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers",value:"2",defaultChecked:2===t.nos}),r.a.createElement("label",null,"2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers",value:"3",defaultChecked:3===t.nos}),r.a.createElement("label",null,"3")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers",value:"4",defaultChecked:4===t.nos}),r.a.createElement("label",null,"4")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"numbers",value:"5",defaultChecked:5===t.nos}),r.a.createElement("label",null,"5"))),r.a.createElement("div",{style:{display:"+-"===this.state.type?"flex":"none"}},r.a.createElement("h2",null,"Decimals"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals",value:"0",defaultChecked:0===t.decimals}),r.a.createElement("label",null,"0")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals",value:"1",defaultChecked:1===t.decimals}),r.a.createElement("label",null,"1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"decimals",value:"2",defaultChecked:2===t.decimals}),r.a.createElement("label",null,"2"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Points"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points",value:"5",defaultChecked:5===t.points}),r.a.createElement("label",null,"5")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points",value:"10",defaultChecked:10===t.points}),r.a.createElement("label",null,"10")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points",value:"15",defaultChecked:15===t.points}),r.a.createElement("label",null,"15")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points",value:"20",defaultChecked:20===t.points}),r.a.createElement("label",null,"20")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"points",value:"25",defaultChecked:25===t.points}),r.a.createElement("label",null,"25"))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",value:"Start",className:["w3-btn","w3-round-large",g.BtnGo].join(" ")},"Start >>"))))))}}]),a}(n.PureComponent),k=Object(i.b)((function(e){return{players:e.game.players,questiontype:e.game.questiontype}}),(function(e){return{start:function(t,a,n){return e(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{type:"+-",nos:2,digits:2,decimals:0,points:10};return{type:"START",questiontype:a,players:[Object(E.a)(Object(E.a)({id:0,name:e,points:0,wrong:0},v(a)),{},{answerresult:""}),Object(E.a)(Object(E.a)({id:1,name:t,points:0,wrong:0},v(a)),{},{answerresult:""})]}}(t,a,n))}}}))(N),C=a(1),S=a.n(C);a(20);var j=a(33);var P=function(e){return e.show?r.a.createElement("div",{className:j.Backdrop,onClick:e.clicked,onKeyPress:e.clicked,role:"button",tabIndex:"0"}):r.a.createElement(n.Fragment,null)},O=a(34);var R=function(e){return e.show?r.a.createElement(n.Fragment,null,r.a.createElement(P,{show:e.show,clicked:e.modelClosed}),r.a.createElement("div",{className:O.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)):r.a.createElement(n.Fragment,null)},A=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={closedisplay:!1},n.buttonTheme=function(){return"1"===n.props.playerno?"w3-ripple w3-hover-indigo w3-indigo":"w3-ripple w3-hover-red w3-pink"},n.sectionTheme=function(){return"1"===n.props.playerno?"w3-indigo":"w3-pink"},n.goClick=function(){var e=n.props.players[n.props.playerno],t=n.correctRef.current,a=n.questionRef.current,r=n.wrongRef.current;if(n.inputAnswer.value)if(+n.inputAnswer.value===+e.answer){if(e.points===n.props.totalpoints-1)return void n.props.complete(n.props.playerno);a.classList.remove(S.a.ShowQuestion),t.classList.add(S.a.MessageAnimate),a.classList.add(S.a.HideQuestion),setTimeout((function(){n.props.nextQuestion(n.props.playerno),n.inputAnswer.value="",t.classList.remove(S.a.MessageAnimate),a.classList.remove(S.a.HideQuestion),a.classList.add(S.a.ShowQuestion)}),1e3)}else r.classList.add(S.a.MessageAnimate),setTimeout((function(){n.props.wrongAnswer(n.props.playerno),n.inputAnswer.value="",r.classList.remove(S.a.MessageAnimate)}),1e3)},n.appendAnswer=function(e){"<"===e?n.inputAnswer.value=n.inputAnswer.value.slice(0,-1):n.inputAnswer.value+="".concat(e)},n.correctRef=r.a.createRef(),n.wrongRef=r.a.createRef(),n.questionRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){console.log("[PlayerSection] componentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("[PlayerSection] componentDidUpdate")}},{key:"render",value:function(){var e=this,t=this.props.players[this.props.playerno];console.log("[PlayerSection] render",this.props.playerno,t.answerresult,"Points",t.points*(+this.props.questiontype.points-1));var a=r.a.createElement(n.Fragment,null,r.a.createElement("div",{ref:this.correctRef,className:[S.a.DisplayMessage,S.a.Correct].join(" ")},r.a.createElement("i",{style:{margin:"5px"},className:"fa fa-check"})),r.a.createElement("div",{ref:this.wrongRef,className:[S.a.DisplayMessage,S.a.Wrong].join(" ")},t.answer));return r.a.createElement("div",{className:["0"===this.props.playerno?S.a._0:S.a._1].join(" ")},r.a.createElement(R,{show:!!this.state.closedisplay,modelClosed:function(){return e.setState({closedisplay:!1})}},r.a.createElement("span",null,"Do you want to exit the game?"),r.a.createElement("div",null,r.a.createElement("a",{role:"button",onClick:this.props.reset,tabIndex:0,onKeyPress:this.props.reset,style:{margin:"10px"},className:["w3-button","w3-round-large",this.buttonTheme()].join(" ")}," ","Restart"),r.a.createElement("a",{role:"button",onClick:function(){return e.setState({closedisplay:!1})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!1})},style:{margin:"10px"},className:["w3-button","w3-round-large","w3-grey"].join(" ")}," ","Cancel"))),a,r.a.createElement("div",{className:[S.a.PlayerCharacter].join(" ")},r.a.createElement("img",{style:{position:"absolute",transform:"scaleX(1)",transition:"1s",left:"".concat(t.points*(90/+this.props.questiontype.points),"vw")},alt:this.props.playerno,className:[S.a.PlayerCharacter,1===this.props.playerno?S.a._1:S.a._2].join(" "),height:"auto",width:"100px",src:"".concat("/math-race","/images/Fish_").concat(this.props.playerno,".svg")})),r.a.createElement("div",{className:S.a.QuestionBar},r.a.createElement("span",{className:[this.sectionTheme()].join(" ")},r.a.createElement("span",{className:[S.a.PlayerName].join(" ")},t.name)),r.a.createElement("span",{ref:this.questionRef,className:S.a.Question},r.a.createElement("span",{style:{fontSize:"3em"}},"".concat(t.question,"?")),r.a.createElement("input",{ref:function(t){e.inputAnswer=t},onKeyDown:function(){return!1},onKeyPress:function(){return!1},onKeyUp:function(){return!1},type:"text",maxLength:"7",className:["w3-btn","w3-round-large",this.sectionTheme(),S.a.Answer].join(" ")})),r.a.createElement("span",{style:{position:"relative"},className:[this.sectionTheme()].join(" ")},r.a.createElement("span",{className:["fa-stack",S.a.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x",style:{color:"#000"}},t.points)),r.a.createElement("div",null,r.a.createElement("a",{role:"button",onClick:function(){return e.setState({closedisplay:!0})},tabIndex:0,onKeyPress:function(){return e.setState({closedisplay:!0})},className:S.a.Close},r.a.createElement("i",{className:"fa fa-window-close"}))))),r.a.createElement("div",{className:S.a.ButtonBar},r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("1")},className:["w3-button","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"1"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("2")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"2"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("3")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"3"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("4")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"4"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("5")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"5"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("6")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"6"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("7")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"7"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("8")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"8"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("9")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"9"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("0")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"0"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer(".")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"."),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("-")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"-"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(){return e.appendAnswer("<")},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnNumber].join(" ")},"<"),r.a.createElement("button",{type:"button","data-playerno":this.props.playerno,onClick:function(t){return e.goClick(t.currentTarget.dataset.playerno)},className:["w3-btn","w3-round-large",this.buttonTheme(),S.a.BtnGo].join(" ")},"GO")))}}]),a}(n.PureComponent),T=Object(i.b)((function(e){return{players:e.game.players,questiontype:e.game.questiontype,totalpoints:e.game.questiontype.points}}),(function(e){return{reset:function(){return e({type:"RESET"})},nextQuestion:function(t){return e(function(e){return function(t,a){t(Object(E.a)({type:"CORRECT",playerno:e},v(a().game.questiontype)))}}(t))},wrongAnswer:function(t){return e(function(e){return function(t,a){t(Object(E.a)({type:"WRONG",playerno:e},v(a().game.questiontype)))}}(t))},complete:function(t){return e(function(e){return{playerno:e,type:"COMPLETE"}}(t))}}}))(A),B=a(24),M=a(9);var x=function(e){var t=e.players[0].points>=e.players[1].points?e.players[0].name:e.players[1].name,a=e.players.reverse().map((function(e){var a=+e.points-e.wrong+(t===e.name?10:0);return r.a.createElement("div",{key:e.key},r.a.createElement("h1",null,e.name,","," ",t===e.name?"You won!!":"Opps You lost!!"),r.a.createElement("span",{className:["fa-stack",M.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},e.points),r.a.createElement("span",{className:M.ScoreLabel},"Correct")),r.a.createElement("span",{className:["fa-stack",M.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},-e.wrong),r.a.createElement("span",{className:M.ScoreLabel},"Wrong")),r.a.createElement("span",{className:["fa-stack",M.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},t===e.name?10:0),r.a.createElement("span",{className:M.ScoreLabel},"Win Bonus")),r.a.createElement("span",{className:["fa-stack",M.Score].join(" ")},r.a.createElement("span",{className:["fa fa-star fa-stack-2x"].join(" ")}),r.a.createElement("strong",{className:"fa-stack-1x"},a),r.a.createElement("span",{className:M.ScoreLabel},"Total")))}));return r.a.createElement("div",{className:M.RaceComplete},a,r.a.createElement("button",{type:"button",onClick:function(t){return e.reset()},onKeyPress:function(t){return e.reset()},className:["w3-btn","w3-round-large",M.BtnGo].join(" ")},"Play Again >>"))},q=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(y.a)(this,a),n=t.call(this,e),console.log("[Racewrapper] constructor"),n.state={},n.props.reset(),n}return Object(h.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("[RaceWrapper] shouldComponentUpdate",!this.props.players&&e.players),!this.props.players&&e.players||this.props.starttime!==e.starttime||this.props.endtime!==e.endtime}},{key:"render",value:function(){if(console.log("[Racewrapper] render",this.props.players,this.props.endtime),!this.props.starttime)return r.a.createElement("div",{className:B.Race},r.a.createElement(k,null));if(this.props.endtime)return r.a.createElement("div",{className:B.Race},r.a.createElement(x,{players:this.props.players,reset:this.props.reset}));var e=this.props.players.map((function(e,t){return r.a.createElement(T,{key:e.id,playerno:"".concat(e.id)})}));return r.a.createElement("div",{className:B.Race,style:{backgroundImage:"url(".concat("/math-race","/images/rock.svg), url(").concat("/math-race","/images/underwater.jpg)")}},e)}}]),a}(n.Component),W=Object(i.b)((function(e){return{players:e.game.players,starttime:e.game.starttime,endtime:e.game.endtime}}),(function(e){return{reset:function(){return e({type:"RESET"})}}}))(q);var D=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:W}))};var L=function(){return r.a.createElement(D,null)},G=a(12),Q={starttime:null,endtime:null,questiontype:{type:"+-",nos:3,digits:3,decimals:0,points:10},players:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;console.log("[reducer]",t.type);var a=null;switch(t.type){case"RESET":return Object(E.a)(Object(E.a)({},e),{},{starttime:null,endtime:null});case"START":return Object(E.a)(Object(E.a)({},e),{},{starttime:new Date,questiontype:t.questiontype,players:Object(G.a)(t.players)});case"CORRECT":return(a=Object(G.a)(e.players))[t.playerno].points+=1,a[t.playerno].question=t.question,a[t.playerno].answer=t.answer,a[t.playerno].answerresult="CORRECT",Object(E.a)(Object(E.a)({},e),{},{players:Object(G.a)(a)});case"WRONG":return(a=Object(G.a)(e.players))[t.playerno].wrong+=1,a[t.playerno].question=t.question,a[t.playerno].answer=t.answer,a[t.playerno].answerresult="WRONG",Object(E.a)(Object(E.a)({},e),{},{players:a});case"COMPLETE":return(a=Object(G.a)(e.players))[t.playerno].points+=1,Object(E.a)(Object(E.a)({},e),{},{endtime:new Date,players:Object(G.a)(a)});default:return e}},I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,U=Object(c.c)({game:H}),K=Object(c.e)(U,I(Object(c.a)(u.a)));o.a.render(r.a.createElement(i.a,{store:K},r.a.createElement(s.a,null,r.a.createElement(L,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/math-race",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/math-race/service-worker.js";p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},9:function(e,t,a){e.exports={Score:"RaceComplete_Score__1hh63",RaceComplete:"RaceComplete_RaceComplete__3X8Bw",ScoreLabel:"RaceComplete_ScoreLabel__UTyaQ"}}},[[35,1,2]]]);
//# sourceMappingURL=main.210eb55b.chunk.js.map