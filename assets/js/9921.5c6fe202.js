"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9921],{2653:(t,e,i)=>{i.d(e,{z:()=>n});var a=i(4283);class s{#t;#e;#i;#a=(0,a.O)(!1);get supported(){return this.#a()}constructor(t,e){this.#t=t,this.#e=e,this.#s()}#s(){this.#t?.remote&&this.canPrompt&&(this.#t.remote.watchAvailability((t=>{this.#a.set(t)})).catch((()=>{this.#a.set(!1)})),(0,a.QZ)(this.#n.bind(this)))}#n(){if(!this.#a())return;const t=["connecting","connect","disconnect"],e=this.#o.bind(this);e(),(0,a.k6)(this.#t,"playing",e);const i=new a.En(this.#t.remote);for(const a of t)i.add(a,e)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return"airplay"===this.type&&this.#t.webkitShowPlaybackTargetPicker?this.#t.webkitShowPlaybackTargetPicker():this.#t.remote.prompt()}#o(t){const e=this.#t.remote.state;if(e===this.#i)return;const i={type:this.type,state:e};this.#e.notify("remote-playback-change",i,t),this.#i=e}}class n extends s{type="airplay";get canPrompt(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}},5719:(t,e,i)=>{i.d(e,{e:()=>s});var a=i(4283);class s{#d;#h;constructor(t){this.#h=t}start(){(0,a.b0)(this.#d)&&this.#r()}stop(){(0,a.Et)(this.#d)&&window.cancelAnimationFrame(this.#d),this.#d=void 0}#r(){this.#d=window.requestAnimationFrame((()=>{(0,a.b0)(this.#d)||(this.#h(),this.#r())}))}}},5949:(t,e,i)=>{i.d(e,{B:()=>f});var a=i(4344),s=i(4283),n=i(5719),o=i(8118),d=i(5534);let h=null,r=[],c=[];function u(){return h??=new AudioContext}function l(){h&&0===r.length&&0===c.length&&h.close().then((()=>{h=null}))}class m{#t;#c;#u=null;#l=null;get currentGain(){return this.#u?.gain?.value??null}get supported(){return!0}constructor(t,e){this.#t=t,this.#c=e}setGain(t){const e=this.currentGain;t!==this.currentGain&&(1!==t||1===e?(this.#u||(this.#u=function(){const t=u(),e=t.createGain();return e.connect(t.destination),r.push(e),e}(),this.#l&&this.#l.connect(this.#u)),this.#l||(this.#l=function(t,e){const i=u().createMediaElementSource(t);return e&&i.connect(e),c.push(i),i}(this.#t,this.#u)),this.#u.gain.value=t,this.#c(t)):this.removeGain())}removeGain(){this.#u&&(this.#l&&this.#l.connect(u().destination),this.#m(),this.#c(null))}destroy(){this.#p(),this.#m()}#p(){if(this.#l)try{!function(t){const e=c.indexOf(t);-1!==e&&(c.splice(e,1),t.disconnect(),l())}(this.#l)}catch(t){}finally{this.#l=null}}#m(){if(this.#u)try{!function(t){const e=r.indexOf(t);-1!==e&&(r.splice(e,1),t.disconnect(),l())}(this.#u)}catch(t){}finally{this.#u=null}}}const p=["focus","blur","visibilitychange","pageshow","pagehide"];class g{#i=(0,s.O)(v());#g=(0,s.O)(document.visibilityState);#v;connect(){const t=new s.En(window),e=this.#y.bind(this);for(const i of p)t.add(i,e);a.Yw&&t.add("beforeunload",(t=>{this.#v=setTimeout((()=>{t.defaultPrevented||t.returnValue.length>0||(this.#i.set("hidden"),this.#g.set("hidden"))}),0)}))}get pageState(){return this.#i()}get visibility(){return this.#g()}#y(t){a.Yw&&window.clearTimeout(this.#v),"blur"===t.type&&"active"!==this.#i()||(this.#i.set(v(t)),this.#g.set("hidden"==document.visibilityState?"hidden":"visible"))}}function v(t){return"blur"===t?.type||"hidden"===document.visibilityState?"hidden":document.hasFocus()?"active":"passive"}class y{#b;#e;#f=!1;#k=!1;#T=!1;#x=new n.e(this.#S.bind(this));#w=new g;#E;get#t(){return this.#b.media}constructor(t,e){this.#b=t,this.#e=e,this.#E=new s.En(t.media),this.#L(),this.#w.connect(),(0,s.QZ)(this.#C.bind(this)),(0,s.zp)(this.#N.bind(this))}#N(){this.#k=!1,this.#T=!1,this.#x.stop(),this.#E.abort(),this.#P?.clear()}#A=0;#$=-1;#S(){const t=this.#t.currentTime;a.Yw&&t-this.#$<.35||this.#A===t||(this.#D(t),this.#A=t)}#L(){this.#R("loadstart",this.#F),this.#R("abort",this.#G),this.#R("emptied",this.#B),this.#R("error",this.#M),this.#R("volumechange",this.#q)}#O(){this.#k||(this.#R("loadeddata",this.#U),this.#R("loadedmetadata",this.#j),this.#R("canplay",this.#V),this.#R("canplaythrough",this.#I),this.#R("durationchange",this.#Y),this.#R("play",this.#z),this.#R("progress",this.#Q),this.#R("stalled",this.#W),this.#R("suspend",this.#H),this.#R("ratechange",this.#K),this.#k=!0)}#Z(){this.#T||(this.#R("pause",this.#_),this.#R("playing",this.#J),this.#R("seeked",this.#X),this.#R("seeking",this.#tt),this.#R("ended",this.#et),this.#R("waiting",this.#it),this.#T=!0)}#P=void 0;#at=void 0;#R(t,e){this.#E.add(t,e.bind(this))}#st(t){}#D(t,e){const i=Math.min(t,this.#e.$state.seekableEnd());this.#e.notify("time-change",i,e)}#F(t){3!==this.#t.networkState?(this.#O(),this.#e.notify("load-start",void 0,t)):this.#G(t)}#G(t){this.#e.notify("abort",void 0,t)}#B(){this.#e.notify("emptied",void 0,event)}#U(t){this.#e.notify("loaded-data",void 0,t)}#j(t){this.#A=0,this.#$=-1,this.#Z(),this.#e.notify("loaded-metadata",void 0,t),(a.pz||a.Yw&&(0,a.YJ)(this.#e.$state.source()))&&this.#e.delegate.ready(this.#nt(),t)}#nt(){return{provider:(0,s.se)(this.#e.$provider),duration:this.#t.duration,buffered:this.#t.buffered,seekable:this.#t.seekable}}#z(t){this.#e.$state.canPlay&&this.#e.notify("play",void 0,t)}#_(t){(1!==this.#t.readyState||this.#f)&&(this.#f=!1,this.#x.stop(),this.#e.notify("pause",void 0,t))}#V(t){this.#e.delegate.ready(this.#nt(),t)}#I(t){this.#e.$state.started()||this.#e.notify("can-play-through",this.#nt(),t)}#J(t){this.#t.paused||(this.#f=!1,this.#e.notify("playing",void 0,t),this.#x.start())}#W(t){this.#e.notify("stalled",void 0,t),this.#t.readyState<3&&(this.#f=!0,this.#e.notify("waiting",void 0,t))}#it(t){this.#t.readyState<3&&(this.#f=!0,this.#e.notify("waiting",void 0,t))}#et(t){this.#x.stop(),this.#D(this.#t.duration,t),this.#e.notify("end",void 0,t),this.#e.$state.loop()&&(0,s.gD)(this.#t.controls)&&(this.#t.controls=!1)}#C(){const t=this.#e.$state.paused(),e="hidden"===this.#w.visibility;(t||e)&&(0,s.k6)(this.#t,"timeupdate",this.#ot.bind(this))}#ot(t){this.#D(this.#t.currentTime,t)}#Y(t){this.#e.$state.ended()&&this.#D(this.#t.duration,t),this.#e.notify("duration-change",this.#t.duration,t)}#q(t){const e={volume:this.#t.volume,muted:this.#t.muted};this.#e.notify("volume-change",e,t)}#X(t){this.#$=this.#t.currentTime,this.#D(this.#t.currentTime,t),this.#e.notify("seeked",this.#t.currentTime,t),Math.trunc(this.#t.currentTime)===Math.trunc(this.#t.duration)&&(0,o.Q4)(this.#t.duration)>(0,o.Q4)(this.#t.currentTime)&&(this.#D(this.#t.duration,t),this.#t.ended||this.#e.player.dispatch(new s.vP("media-play-request",{trigger:t})))}#tt(t){this.#e.notify("seeking",this.#t.currentTime,t)}#Q(t){const e={buffered:this.#t.buffered,seekable:this.#t.seekable};this.#e.notify("progress",e,t)}#H(t){this.#e.notify("suspend",void 0,t)}#K(t){this.#e.notify("rate-change",this.#t.playbackRate,t)}#M(t){const e=this.#t.error;if(!e)return;const i={message:e.message,code:e.code,mediaError:e};this.#e.notify("error",i,t)}}class b{#b;#e;get#dt(){return this.#b.media.audioTracks}constructor(t,e){this.#b=t,this.#e=e,this.#dt.onaddtrack=this.#ht.bind(this),this.#dt.onremovetrack=this.#rt.bind(this),this.#dt.onchange=this.#ct.bind(this),(0,s.k6)(this.#e.audioTracks,"change",this.#ut.bind(this))}#ht(t){const e=t.track;if(""===e.label)return;const i={id:e.id.toString()||`native-audio-${this.#e.audioTracks.length}`,label:e.label,language:e.language,kind:e.kind,selected:!1};this.#e.audioTracks[d.j.add](i,t),e.enabled&&(i.selected=!0)}#rt(t){const e=this.#e.audioTracks.getById(t.track.id);e&&this.#e.audioTracks[d.j.remove](e,t)}#ct(t){let e=this.#lt();if(!e)return;const i=this.#e.audioTracks.getById(e.id);i&&this.#e.audioTracks[d.j.select](i,!0,t)}#lt(){return Array.from(this.#dt).find((t=>t.enabled))}#ut(t){const{current:e}=t.detail;if(!e)return;const i=this.#dt.getTrackById(e.id);if(i){const t=this.#lt();t&&(t.enabled=!1),i.enabled=!0}}}class f{constructor(t,e){this.media=t,this.ctx=e,this.audioGain=new m(t,(t=>{this.ctx.notify("audio-gain-change",t)}))}scope=(0,s.Ds)();currentSrc=null;audioGain;setup(){new y(this,this.ctx),"audioTracks"in this.media&&new b(this,this.ctx),(0,s.zp)((()=>{this.audioGain.destroy(),this.media.srcObject=null,this.media.removeAttribute("src");for(const t of this.media.querySelectorAll("source"))t.remove();this.media.load()}))}get type(){return""}setPlaybackRate(t){this.media.playbackRate=t}async play(){return this.media.play()}async pause(){return this.media.pause()}setMuted(t){this.media.muted=t}setVolume(t){this.media.volume=t}setCurrentTime(t){this.media.currentTime=t}setPlaysInline(t){(0,s.Bq)(this.media,"playsinline",t)}async loadSource({src:t,type:e},i){this.media.preload=i||"",(0,a.dv)(t)?(this.removeSource(),this.media.srcObject=t):(this.media.srcObject=null,(0,s.Kg)(t)?"?"!==e?this.appendSource({src:t,type:e}):(this.removeSource(),this.media.src=this.#mt(t)):(this.removeSource(),this.media.src=window.URL.createObjectURL(t))),this.media.load(),this.currentSrc={src:t,type:e}}appendSource(t,e){const i=this.media.querySelector("source[data-vds]"),a=i??document.createElement("source");(0,s.Bq)(a,"src",this.#mt(t.src)),(0,s.Bq)(a,"type","?"!==t.type?t.type:e),(0,s.Bq)(a,"data-vds",""),i||this.media.append(a)}removeSource(){this.media.querySelector("source[data-vds]")?.remove()}#mt(t){const{clipStartTime:e,clipEndTime:i}=this.ctx.$state,a=e(),s=i();return a>0&&s>0?`${t}#t=${a},${s}`:a>0?`${t}#t=${a}`:s>0?`${t}#t=0,${s}`:t}}}}]);