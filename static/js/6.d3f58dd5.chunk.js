(this["webpackJsonpben-howard-lyrics-app"]=this["webpackJsonpben-howard-lyrics-app"]||[]).push([[6],{101:function(e,a,l){},102:function(e,a,l){"use strict";var t=l(0),n=l.n(t),r=(l(101),l(42)),i=l.n(r),s=function(){return(s=Object.assign||function(e){for(var a,l=1,t=arguments.length;l<t;l++)for(var n in a=arguments[l])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},c=function(e){for(var a=e.url,l=e.allowFullScreen,t=e.position,r=e.display,c=e.height,o=e.width,m=e.overflow,u=e.styles,d=e.onLoad,p=e.onMouseOver,g=e.onMouseOut,b=e.scrolling,f=e.id,v=e.frameBorder,_=e.ariaHidden,E=e.sandbox,h=e.allow,y=e.className,N=e.title,w=e.ariaLabel,O=e.ariaLabelledby,j=e.name,k=e.target,I=e.loading,L=e.importance,S=e.referrerpolicy,M=e.allowpaymentrequest,U=e.src,x=i()({src:U||a,target:k||null,style:{position:t||null,display:r||"block",overflow:m||null},scrolling:b||null,allowpaymentrequest:M||null,importance:L||null,sandbox:E||null,loading:I||null,styles:u||null,name:j||null,className:y||null,referrerpolicy:S||null,title:N||null,allow:h||null,id:f||null,"aria-labelledby":O||null,"aria-hidden":_||null,"aria-label":w||null,width:o||null,height:c||null,onLoad:d||null,onMouseOver:p||null,onMouseOut:g||null}),R=Object.create(null),P=0,q=Object.keys(x);P<q.length;P++){var H=q[P];null!=x[H]&&(R[H]=x[H])}for(var J=0,T=Object.keys(R.style);J<T.length;J++){var A=T[J];null==R.style[A]&&delete R.style[A]}if(l)if("allow"in R){var B=R.allow.replace("fullscreen","");R.allow=("fullscreen "+B.trim()).trim()}else R.allow="fullscreen";return v>=0&&(R.style.hasOwnProperty("border")||(R.style.border=v)),n.a.createElement("iframe",s({},R))};a.a=function(e){var a=e.spotifyUri,l=e.id,t=e.lyrics;return n.a.createElement("div",{className:t?"spotifyplayer spotifyplayer-height":"spotifyplayer"},n.a.createElement(c,{url:"https://open.spotify.com/embed/".concat(encodeURI(a)),id:l,display:"initial",position:"relative"}))}},124:function(e,a,l){},125:function(e,a,l){},126:function(e,a,l){e.exports=l.p+"static/media/album_1.a69e59d5.jpg"},127:function(e,a,l){e.exports=l.p+"static/media/album_2.df2d1524.jpg"},128:function(e,a,l){e.exports=l.p+"static/media/album_3.41e31f21.jpg"},151:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(11),i=(l(124),l(88)),s=(l(125),function(e){var a=e.album,l=a.title,t=a.info,r=a.length,i=a.producer,s=a.year,c=a.wikiUrl,o=t.split("\n").map((function(e){return"<p>".concat(e,"</p>")})).join("");return n.a.createElement("div",{className:"albuminfo"},n.a.createElement("h2",null,l),n.a.createElement("div",{className:"albuminfo__options"},n.a.createElement("div",{className:"albuminfo__option"},n.a.createElement("h4",null,"Realease date: "),n.a.createElement("p",null,s)),n.a.createElement("div",{className:"albuminfo__option"},n.a.createElement("h4",null,"Length: "),n.a.createElement("p",null,r," h")),n.a.createElement("div",{className:"albuminfo__option"},n.a.createElement("h4",null,"Producer: "),n.a.createElement("p",null,i)),n.a.createElement("div",{className:"albuminfo__option-last"},n.a.createElement("h4",null,"Album info:"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:o},className:"albuminfo__scroll"}),n.a.createElement("a",{className:"albuminfo__link",href:"".concat(c),alt:"Wikipedia",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"Read more...")))))}),c=l(102),o=l(126),m=l.n(o),u=l(127),d=l.n(u),p=l(128),g=l.n(p),b=l(94);a.default=Object(r.b)((function(e,a){return{album:Object(i.a)(a.match.params.albumId)(e)}}))((function(e){var a=e.album,l=a.title,t=a.spotifyUri,r=a.imageUrl,i=a.id;return n.a.createElement("div",{className:"album-page"},n.a.createElement("div",{className:"album-page__div-intro"},n.a.createElement("div",{className:2===i?"album-page__div-heading album-page__div-heading-font":"album-page__div-heading"},n.a.createElement("h2",null,l)),n.a.createElement("div",{className:"album-page__div-cover",style:{backgroundImage:"url(".concat(r,")")}})),n.a.createElement("div",{className:"album-page__div-container"},n.a.createElement("div",{className:"album-page__div-info"},n.a.createElement(s,{album:a})),n.a.createElement("div",{className:"album-page__div-image",style:{backgroundImage:"url(".concat(m.a,")")}})),n.a.createElement("div",{className:"album-page__div-container-reverse"},n.a.createElement("div",{className:"album-page__div-songs"},n.a.createElement(b.a,{album:a})),n.a.createElement("div",{className:"album-page__div-image",style:{backgroundImage:"url(".concat(d.a,")")}})),n.a.createElement("div",{className:"album-page__div-container"},n.a.createElement("div",{className:"album-page__div-player"},n.a.createElement(c.a,{spotifyUri:t})),n.a.createElement("div",{className:"album-page__div-image",style:{backgroundImage:"url(".concat(g.a,")")}})))}))},92:function(e,a,l){},93:function(e,a,l){},94:function(e,a,l){"use strict";var t=l(87),n=l(0),r=l.n(n),i=(l(92),l(93),l(17)),s=Object(i.g)((function(e){var a=e.name,l=e.duration,t=e.history,n=(e.match,e.id);return r.a.createElement("div",{onClick:function(){return t.push("/songs/".concat(n))},className:"similarsongslistelement"},r.a.createElement("div",{className:"similarsongslistelement__column-left"},r.a.createElement("h4",null,a)),r.a.createElement("div",{className:"similarsongslistelement__column-right"},r.a.createElement("p",null,l)))})),c=l(10),o=l(11),m=l(88),u=Object(c.b)({allSongs:m.c});a.a=Object(o.b)(u)((function(e){var a,l,n=e.album,i=e.allSongs,c=e.id,o=e.favSongs;return n?(a=n.songs,l="Songs on the album"):o?(a=o,l="Your favourite songs"):(a=i.filter((function(e){return e.id!==c})).sort((function(){return.5-Math.random()})).slice(0,10),l="Related songs"),r.a.createElement("div",{className:o?"similarsongslist similarsongslist-row":"similarsongslist"},r.a.createElement("h2",null,l),r.a.createElement("div",{className:"similarsongslist__columns"},r.a.createElement("div",{className:"similarsongslist__column-left"},r.a.createElement("h5",null,"Song title")),r.a.createElement("div",{className:"similarsongslist__column-right"},r.a.createElement("h5",null,"Length"))),r.a.createElement("div",{className:"similarsongslist__scroll"},a.length?a.map((function(e){var a=e.id,l=Object(t.a)(e,["id"]);return r.a.createElement(s,Object.assign({key:a,id:a},l))})):r.a.createElement("h2",{style:{marginTop:"2rem"}},"Oooooops it's empty")))}))}}]);
//# sourceMappingURL=6.d3f58dd5.chunk.js.map