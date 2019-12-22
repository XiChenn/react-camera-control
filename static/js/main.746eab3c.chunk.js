(this["webpackJsonpreact-camera-control-example"]=this["webpackJsonpreact-camera-control-example"]||[]).push([[0],{11:function(e,t,r){e.exports=r(22)},16:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),i=r.n(o),c=(r(16),r(1)),s=r.n(c),u=r(6),l=r(7),p=r(9),f=r(8),d=r(10),v=r(2),h=r.n(v),m=r(3),b=r.n(m),y=function(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,o){try{var i=t[a](o),c=i.value}catch(s){return void r(s)}if(!i.done)return Promise.resolve(c).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(c)}("next")}))}},g=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},w=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},x=function(e){function t(e){g(this,t);var r=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={videoTrack:null,capabilities:null,errorMessage:null},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),w(t,[{key:"componentDidMount",value:function(){var e=y(s.a.mark((function e(){var t,r,n,a,o,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.video,n=t.audio,!navigator.mediaDevices){e.next=22;break}return e.prev=2,e.next=5,navigator.mediaDevices.getUserMedia({video:r,audio:n});case 5:return a=e.sent,o=a.getVideoTracks()[0],e.next=9,this.sleep(1e3);case 9:return i=o.getCapabilities(),this.setState({videoTrack:o,capabilities:i}),this.video.srcObject=a,e.next=14,this.video.play();case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),this.setState({errorMessage:e.t0.name});case 20:e.next=25;break;case 22:c="Check browser compatibility - Chrome > 57",console.error(c),this.setState({errorMessage:c});case 25:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"sleep",value:function(){var e=y(s.a.mark((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"capture",value:function(){return new window.ImageCapture(this.state.videoTrack).takePhoto()}},{key:"zoom",value:function(){var e=y(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state,n=r.videoTrack,!("zoom"in r.capabilities)){e.next=5;break}return e.next=4,n.applyConstraints({advanced:[{zoom:Number(t.target.value)}]});case 4:this.setState({videoTrack:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(null===this.state.videoTrack)return console.log(this.state.errorMessage),h.a.createElement("div",null,this.state.errorMessage||"loading...");var t=this.state,r=t.videoTrack,n=t.capabilities,a=r.getSettings(),o="zoom"in n;return h.a.createElement("div",{style:j.preview},this.props.children,h.a.createElement("div",{style:j.slider},h.a.createElement("input",{type:"range",hidden:!o,min:o?n.zoom.min:0,max:o?n.zoom.max:0,step:o?n.zoom.step:0,value:o?a.zoom:0,onChange:function(t){return e.zoom(t)}})),h.a.createElement("video",{style:j.video,ref:function(t){e.video=t}}))}}]),t}(h.a.Component);x.propTypes={audio:b.a.bool,video:b.a.bool,children:b.a.element},x.defaultProps={audio:!1,video:!0,style:{},children:null};var j={preview:{position:"relative"},video:{width:"100%",height:"100%"},slider:{display:"flex",position:"absolute",justifyContent:"center",zIndex:1,bottom:0,width:"100%"}},O=x,C=function(e){function t(){var e,r;Object(u.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).takePicture=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(r.camera.capture());case 2:e=t.sent,r.img.src=URL.createObjectURL(e),r.img.onload=function(){URL.revokeObjectURL(r.src)};case 5:case"end":return t.stop()}}))},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(O,{ref:function(t){e.camera=t}},a.a.createElement("div",{style:E.captureContainer,onClick:this.takePicture},a.a.createElement("div",{style:E.captureButton}))),a.a.createElement("img",{style:E.captureImage,ref:function(t){e.img=t},alt:""}))}}]),t}(n.Component),E={captureContainer:{display:"flex",position:"absolute",justifyContent:"center",zIndex:1,bottom:0,width:"100%"},captureButton:{backgroundColor:"#fff",borderRadius:"50%",height:28,width:28,color:"#000",margin:20},captureImage:{width:"100%"}};i.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.746eab3c.chunk.js.map