(this["webpackJsonpben-howard-lyrics-app"]=this["webpackJsonpben-howard-lyrics-app"]||[]).push([[3],{100:function(e,t,n){},103:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(11),i=n(10),l=n(98),c=n.n(l),o=n(40),u=n(17),m=(n(99),Object(u.g)(Object(s.b)(null,(function(e){return{addCurrentAlbum:function(t){return e(Object(o.a)(t))}}}))((function(e){var t=e.album,n=e.addCurrentAlbum,a=e.albumsPage,s=e.history,i=e.match,l=t.imageUrl,o=t.id,u=t.title;return r.a.createElement("div",{onClick:a?function(){return s.push("".concat(i.url,"/").concat(o))}:function(){return n(t)},className:"directory-card"},r.a.createElement(c.a,{classname:"tilt__div",options:{max:20,perspective:4e3,scale:1}},r.a.createElement("img",{className:a?"directory-card__img-albumspage":"directory-card__img ",src:"".concat(l),alt:"album"}),a?r.a.createElement("div",{className:"directory-card-info"},r.a.createElement("div",{className:"directory-card-title"},r.a.createElement("h2",null,u)),r.a.createElement("div",{className:"directory-card-icon"},"i"),r.a.createElement("div",{className:"directory-card-text"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."," ")):null))})))),d=n(88),h=(n(100),Object(i.b)({albums:d.b}));t.a=Object(s.b)(h)((function(e){var t=e.albums,n=e.albumsPage;return r.a.createElement("div",{className:n?"animated slow slideInLeft directory-albums":"directory-row"},t.map((function(e){return r.a.createElement(m,{albumsPage:n,key:e.id,album:e})})))}))},129:function(e,t,n){},130:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(0)),i=n(0),l=function(e){var t=e.flipDirection,n=e.infinite,r=e.flipSpeedFrontToBack,l=e.flipSpeedBackToFront,c=e.cardStyles,o=c.front,u=c.back,m=e.containerStyle,d=e.cardZIndex,h=i.useState(e.isFlipped),p=h[0],f=h[1],b=i.useState(0),v=b[0],g=b[1];i.useEffect((function(){e.isFlipped!==p&&(f(e.isFlipped),g((function(e){return e+180})))}),[e.isFlipped]);var y=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},E="rotateY("+(n?v+180:p?0:-180)+"deg)",_="rotateX("+(n?v+180:p?0:-180)+"deg)",O={container:{perspective:"1000px",zIndex:""+d},flipper:{position:"relative",width:"100%",height:"100%"},front:a({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",left:"0",position:p?"absolute":"relative",top:"0",transform:"horizontal"===t?"rotateY("+(n?v:p?180:0)+"deg)":"rotateX("+(n?v:p?180:0)+"deg)",transformStyle:"preserve-3d",width:"100%",height:"100%",zIndex:"2",transition:l+"s"},o),back:a({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",left:"0",position:p?"relative":"absolute",transform:"horizontal"===t?E:_,transformStyle:"preserve-3d",top:"0",width:"100%",height:"100%",transition:r+"s"},u)};return s.createElement("div",{className:"react-card-flip",style:a(a({},O.container),m)},s.createElement("div",{className:"react-card-flipper",style:O.flipper},s.createElement("div",{className:"react-card-front",style:O.front},y(0)),s.createElement("div",{className:"react-card-back",style:O.back},y(1))))};l.defaultProps={containerStyle:{},cardStyles:{front:{},back:{}},cardZIndex:"auto",flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=l},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n(36),s=n(38),i=n(37),l=n(39),c=n(0),o=n.n(c),u=n(10),m=n(11),d=n(88),h=n(40),p=(n(129),n(87)),f=n(130),b=n.n(f),v=n(3),g=n(14),y=n(23),E=(n(131),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.short,a=e.duration,r=e.year,s=e.id,i=e.currentUser,l=this.state.isFlipped;return o.a.createElement(b.a,{isFlipped:l,flipDirection:"horizontal",flipSpeedFrontToBack:.8,flipSpeedBackToFront:.8},o.a.createElement("div",{is:"".concat(n,"-front"),onClick:this.handleClick},o.a.createElement("h3",null,t)),o.a.createElement("div",{onClick:this.handleClick,className:"react-card-back-".concat(n)},o.a.createElement("span",{className:"directorycardsongs__span"},o.a.createElement("h4",null,"Duration:"),o.a.createElement("p",null,a)),o.a.createElement("span",{className:"directorycardsongs__span"},o.a.createElement("h4",null,"Year:"),o.a.createElement("p",null,r)),o.a.createElement("span",{onClick:function(){return i?Object(g.f)(i.id):null},className:"directorycardsongs__span"},o.a.createElement("em",null,o.a.createElement(v.b,{to:"/songs/".concat(s)},"See lyrics")))))}}]),t}(o.a.Component)),_=Object(u.b)({currentUser:y.a}),O=Object(m.b)(_)(E),j=(n(132),function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){this.props.clearCurrentAlbum()}},{key:"render",value:function(){var e,t=this.props,n=t.allSongs,a=t.searchValue,r=t.currentAlbum,s=t.selectValue,i=this.props.currentSongs;Object.keys(r).includes("title")||a.length||s||(i=n.sort((function(e,t){return e.id-t.id})));var l=i.length;return e=0===l&&a.length>0?"Sorry, there is no such song":null,o.a.createElement("div",{className:"directorysongs"},o.a.createElement("div",{className:l>3?"directorysongs-grid animated slow fadeIn":"directorysongs-flex"},i.map((function(e){var t=e.id,n=Object(p.a)(e,["id"]);return o.a.createElement(O,Object.assign({key:t,id:t},n))})),o.a.createElement("h2",null,e)))}}]),t}(o.a.Component)),S=Object(u.b)({currentSongs:d.f,currentAlbum:d.e,allSongs:d.c}),k=Object(m.b)(S,(function(e){return{clearCurrentAlbum:function(){return e(Object(h.c)())}}}))(j);function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(133);var w=function(e){var t=e.label,n=Object(p.a)(e,["label"]);return o.a.createElement("div",{className:"form"},o.a.createElement("input",Object.assign({className:"form__input"},n)),o.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form__label")},t))},C=(n(134),n(90)),M=(n(135),function(e){e.label;var t=e.guitarTypes,n=e.handleSubmit,a=e.handleSelectChange,r=e.value;return o.a.createElement("div",{className:"selectform"},o.a.createElement("div",{className:"selectform__form-div"},o.a.createElement("form",{className:"selectform__form",onSubmit:n,value:r},o.a.createElement("select",{className:"selectform__select",onChange:a},t.map((function(e){return o.a.createElement("option",{className:"selectform__option",value:e},e.toUpperCase())}))))))}),F=Object(u.b)({allSongs:d.c}),x=Object(m.b)(F,(function(e){return{clearSearch:function(t){return e(Object(h.b)(t))}}}))((function(e){var t=e.handleSearchChange,n=e.searchValue,a=e.allSongs,r=e.clearSearch,s=e.clear,i=e.handleSelectChange,l=e.handleSubmit,c=e.value,u=N(new Set(a.map((function(e){return e.guitar}))));return o.a.createElement("div",{className:"searchbar"},o.a.createElement("div",{className:"searchbar__searchForms"},o.a.createElement("div",{className:"searchbar__textInput"},o.a.createElement(w,{onChange:t,name:"text",type:"text",label:"Enter song title",value:n})),o.a.createElement("div",{className:"searchbar__text"},o.a.createElement("h4",null,"or select guitar type")),o.a.createElement("div",{className:"searchbar__select"},o.a.createElement(M,{handleSelectChange:i,handleSubmit:l,value:c,guitarTypes:u}))),o.a.createElement("div",{className:"searchbar__buttons"},o.a.createElement("div",{onClick:function(){r(a),s()},className:"searchbar__button"},o.a.createElement(C.a,null,"Reset"))))})),T=(n(136),function(){return o.a.createElement("div",{className:"legend"},o.a.createElement("div",{className:"legend__block"},o.a.createElement("div",{className:"legend__block-color1"}),o.a.createElement("span",{className:"legend__span"},o.a.createElement("p",null,"Every Kingdom"))),o.a.createElement("div",{className:"legend__block"},o.a.createElement("div",{className:"legend__block-color2"}),o.a.createElement("span",{className:"legend__span"},o.a.createElement("p",null,"I Forget Where We Were"))),o.a.createElement("div",{className:"legend__block"},o.a.createElement("div",{className:"legend__block-color3"}),o.a.createElement("span",{className:"legend__span"},o.a.createElement("p",null,"Noonday Dream"))))}),A=n(103),P=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).handleSearchChange=function(t){e.setState({searchField:t.target.value,value:""})},e.handleSelectChange=function(t){e.setState({value:t.target.value,searchField:""})},e.handleSubmit=function(e){e.preventDefault()},e.state={searchField:"",value:""},e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.searchField,a=t.value,r=this.props,s=r.allSongs,i=r.addFiltredSongs,l=s.filter((function(e){return e.guitar.toLowerCase().includes(a.toLowerCase())}));a.length>0?i(l):0===a.length&&i([]);var c=s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return n.length>0&&i(c),o.a.createElement("section",{className:"songs-list"},o.a.createElement("h2",null,"Find your song!"),o.a.createElement("div",{className:"songs-list__div-columns"},o.a.createElement("div",{className:"songs-list__div-column-1"},o.a.createElement("p",null,"There are three ways to find your song:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Select one from the window on the right hand side"),o.a.createElement("li",null,"Enter your song title in box bellow"),o.a.createElement("li",null,"Maybe you like specific type of guitar? Look bellow"),o.a.createElement("li",null,"Select one of albums")),o.a.createElement("div",{className:"song-list__div-search-bar-container"},o.a.createElement("h3",null,"Filter songs"),o.a.createElement("div",{className:"song-list__div-search-bar"},o.a.createElement(x,{handleSearchChange:this.handleSearchChange,handleSelectChange:this.handleSelectChange,handleSubmit:this.handleSubmit,searchValue:n,clear:function(){e.setState({searchField:"",value:""})},value:this.state.value}))),o.a.createElement("div",{className:"song-list__div-albums-container"},o.a.createElement("h3",null,"Select album"),o.a.createElement("div",{className:"song-list__div-albums"},o.a.createElement(A.a,null)))),o.a.createElement("div",{className:"songs-list__div-column-2"},o.a.createElement("div",{className:"song-list__div-legend"},o.a.createElement(T,null)),o.a.createElement("div",{className:"song-list__div-songs-container"},o.a.createElement(k,{searchValue:n,selectValue:a})))))}}]),t}(o.a.Component),L=Object(u.b)({allSongs:d.c});t.default=Object(m.b)(L,(function(e){return{addFiltredSongs:function(t){return e(Object(h.b)(t))}}}))(P)},90:function(e,t,n){"use strict";var a=n(87),r=n(0),s=n.n(r);n(91);t.a=function(e){e.pageName;var t=e.children,n=e.buttonClass,r=Object(a.a)(e,["pageName","children","buttonClass"]);return s.a.createElement("button",Object.assign({},r,{className:"button ".concat(n)}),t)}},91:function(e,t,n){},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=(a=i)&&a.__esModule?a:{default:a},c=n(22);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={style:{}};return n.width=null,n.height=null,n.left=null,n.top=null,n.transitionTimeout=null,n.updateCall=null,n.element=null,n.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},n.props.options),n.reverse=n.settings.reverse?-1:1,n.onMouseEnter=n.onMouseEnter.bind(n,n.props.onMouseEnter),n.onMouseMove=n.onMouseMove.bind(n,n.props.onMouseMove),n.onMouseLeave=n.onMouseLeave.bind(n,n.props.onMouseLeave),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.element=(0,c.findDOMNode)(this)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:r({},this.state.style,{willChange:"transform"})})),this.setTransition(),e(t)}},{key:"reset",value:function(){var e=this;window.requestAnimationFrame((function(){e.setState(Object.assign({},e.state,{style:r({},e.state.style,{transform:"perspective("+e.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))}))}},{key:"onMouseMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return t.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.update.bind(this,t)),e(t)}},{key:"setTransition",value:function(){var e=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:r({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout((function(){e.setState(Object.assign({},e.state,{style:r({},e.state.style,{transition:""})}))}),this.settings.speed)}},{key:"onMouseLeave",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments[1];return this.setTransition(),this.settings.reset&&this.reset(),e(t)}},{key:"getValues",value:function(e){var t=(e.nativeEvent.clientX-this.left)/this.width,n=(e.nativeEvent.clientY-this.top)/this.height,a=Math.min(Math.max(t,0),1),r=Math.min(Math.max(n,0),1);return{tiltX:(this.reverse*(this.settings.max/2-a*this.settings.max)).toFixed(2),tiltY:(this.reverse*(r*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*a,percentageY:100*r}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(e){var t=this.getValues(e);this.setState(Object.assign({},this.state,{style:r({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var e=Object.assign({},this.props.style,this.state.style);return l.default.createElement("div",{style:e,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.props.children)}}]),t}(i.Component);t.default=o},99:function(e,t,n){}}]);
//# sourceMappingURL=3.c9a01b4f.chunk.js.map