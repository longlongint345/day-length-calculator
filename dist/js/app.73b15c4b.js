(function(t){function e(e){for(var a,r,o=e[0],s=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&p.push(u[r][0]),u[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==u[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},u={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},1287:function(t,e,n){},1801:function(t,e,n){},2308:function(t,e,n){"use strict";n("1801")},"2eb6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),u=n("5502"),i={id:"main"},r={id:"inputAndMap"},o={key:0,id:"output"};function s(t,e,n,u,s,l){var c=Object(a["l"])("Header"),d=Object(a["l"])("Input"),p=Object(a["l"])("Map"),f=Object(a["l"])("Output");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(c),Object(a["f"])("div",i,[Object(a["f"])("div",r,[Object(a["f"])(d),Object(a["f"])(p)]),l.showOutput?(Object(a["h"])(),Object(a["c"])("div",o,[Object(a["f"])(f)])):Object(a["d"])("",!0)])],64)}var l=Object(a["r"])("data-v-3ab01d78");Object(a["j"])("data-v-3ab01d78");var c=Object(a["f"])("h1",null,"Päeva pikkuse kalkulaator",-1);Object(a["i"])();var d=l((function(t,e,n,u,i,r){return Object(a["h"])(),Object(a["c"])("header",null,[c])})),p={name:"Header"};n("2308");p.render=d,p.__scopeId="data-v-3ab01d78";var f=p,h=Object(a["r"])("data-v-76290894");Object(a["j"])("data-v-76290894");var b={id:"mainContainer"},O=Object(a["f"])("p",null,"Päeva pikkuse arvutamiseks sisestage kuupäev ning koordinaadid või valige asukoht klikkides kaardile. ",-1),g=Object(a["f"])("label",null,"Kuupäev",-1),j=Object(a["f"])("br",null,null,-1),m=Object(a["f"])("br",null,null,-1),v=Object(a["f"])("label",null,"Laiuskraad",-1),D=Object(a["f"])("br",null,null,-1),y=Object(a["e"])("N"),k=Object(a["f"])("br",null,null,-1),I=Object(a["f"])("label",null,"Pikkuskraad",-1),P=Object(a["f"])("br",null,null,-1),M=Object(a["e"])("E"),L=Object(a["f"])("br",null,null,-1),S=Object(a["f"])("br",null,null,-1),$=Object(a["f"])("br",null,null,-1),w=Object(a["f"])("label",{for:"graphModeCheckbox"}," Sisesta ajavahemik ja kuva graafik",-1);Object(a["i"])();var Y=h((function(t,e,n,u,i,r){return Object(a["h"])(),Object(a["c"])("div",b,[O,Object(a["f"])("form",null,[g,j,Object(a["q"])(Object(a["f"])("input",{type:"date",id:"fromDate","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.dateInput=e})},null,512),[[a["o"],t.dateInput]]),t.graphMode?Object(a["q"])((Object(a["h"])(),Object(a["c"])("input",{key:0,type:"date",id:"toDate","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.endDateInput=e})},null,512)),[[a["o"],t.endDateInput]]):Object(a["d"])("",!0),m,v,D,Object(a["q"])(Object(a["f"])("input",{type:"text",id:"latitudeInputField",placeholder:"58.3831","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.latitudeInput=e})},null,512),[[a["o"],t.latitudeInput]]),y,k,I,P,Object(a["q"])(Object(a["f"])("input",{type:"text",id:"longitudeInputField",placeholder:"26.7245","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.longitudeInput=e})},null,512),[[a["o"],t.longitudeInput]]),M,L,Object(a["f"])("input",{id:"submitButton",type:"button",value:"Ok",onClick:e[5]||(e[5]=function(t){return r.submitForm()})}),Object(a["f"])("input",{type:"button",value:"Puhasta",id:"clearButton",onClick:e[6]||(e[6]=function(t){return r.clearForm()})}),S,$,Object(a["q"])(Object(a["f"])("input",{type:"checkbox",id:"graphModeCheckbox","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.graphMode=e})},null,512),[[a["n"],t.graphMode]]),w])])})),N=(n("a9e3"),{data:function(){return{latitudeInput:null,longitudeInput:null,dateInput:null,endDateInput:null,graphMode:!1}},methods:{submitForm:function(){if(null!=this.dateInput)if(this.graphMode&&null==this.endDateInput)alert("Palun sisestage ajavahemik!");else if(null!==this.longitudeInput&&null!==this.latitudeInput)if(isNaN(this.latitudeInput)||isNaN(this.longitudeInput))alert("Koordinaadid peavad oleama arvulised väärtused!");else{if(this.graphMode){var t=new Date(this.dateInput),e=new Date(this.endDateInput);if(t>e)return void alert("Lõppkuupäev peab olema alguskuupäevast hilisem!")}Number(this.latitudeInput)>=-90&&Number(this.latitudeInput)<=90&&Number(this.longitudeInput)>=-180&&Number(this.longitudeInput)<=180?(this.$store.commit("updateLatitude",Number(this.latitudeInput)),this.$store.commit("updateLongitude",Number(this.longitudeInput)),this.$store.commit("setStartDate",this.dateInput),this.$store.commit("setGraphMode",this.graphMode),this.$store.commit("setOutPutVisible",!0),this.$store.commit("setEndDate",this.endDateInput)):alert("Koordinaadid lubatud vahemikest väljas!")}else alert("Palun sisestage koordinaadid!");else alert("Palun sisestage kuupäev!")},clearForm:function(){this.latitudeInput=null,this.longitudeInput=null,this.dateInput=null,this.endDateInput=null,this.$store.commit("setOutPutVisible",!1)}},computed:{latitude:function(){return this.$store.getters.getLatitude},longitude:function(){return this.$store.getters.getLongitude}},watch:{latitude:function(){this.latitudeInput=this.$store.getters.getLatitude},longitude:function(){this.longitudeInput=this.$store.getters.getLongitude}}});n("f316");N.render=Y,N.__scopeId="data-v-76290894";var _=N,E=Object(a["r"])("data-v-2a0b7cb8");Object(a["j"])("data-v-2a0b7cb8");var x={id:"mapContainer"};Object(a["i"])();var U=E((function(t,e,n,u,i,r){return Object(a["h"])(),Object(a["c"])("div",x)})),C=(n("d81d"),n("6cc5"),n("e11e")),T=n.n(C),F={data:function(){return{map:null,marker:null}},methods:{setUpLeafLetMap:function(){var t=this;this.map=T.a.map("mapContainer").setView([30,0],2),T.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.map.on("click",(function(e){var n=e.latlng.lat,a=e.latlng.lng;t.$store.commit("updateLatitude",Number(n)),t.$store.commit("updateLongitude",Number(a))}))},addMarker:function(){null!=this.latitude&&null!=this.longitude&&(null!=this.marker&&this.map.removeLayer(this.marker),this.marker=T.a.marker([this.latitude,this.longitude]),this.marker.addTo(this.map))}},computed:{latitude:function(){return this.$store.getters.getLatitude},longitude:function(){return this.$store.getters.getLongitude}},mounted:function(){this.setUpLeafLetMap()},watch:{latitude:function(){this.addMarker()},longitude:function(){this.addMarker()}}};n("f7e2");F.render=U,F.__scopeId="data-v-2a0b7cb8";var V=F,q=n("5944"),K=n.n(q),z=Object(a["r"])("data-v-acd522ca");Object(a["j"])("data-v-acd522ca");var G={id:"mainContainer"},H={id:"dataContainer"},A={id:"startDateData"},B=Object(a["f"])("img",{src:K.a},null,-1),J={key:0,id:"endDateData"},R={key:0,id:"plotContainer"};Object(a["i"])();var Q=z((function(t,e,n,u,i,r){var o=Object(a["l"])("Plot");return Object(a["h"])(),Object(a["c"])("div",G,[Object(a["f"])("div",H,[Object(a["f"])("div",A,[Object(a["f"])("p",null,"Kuupäev: "+Object(a["m"])(r.startDate),1),Object(a["f"])("p",null,"Päikesetõus (UTC): "+Object(a["m"])(r.timePrettyPrint(r.sunrise)),1),Object(a["f"])("p",null,"Loojang (UTC): "+Object(a["m"])(r.timePrettyPrint(r.sunset)),1),Object(a["f"])("p",null,"Päeva pikkus: "+Object(a["m"])(r.timePrettyPrint(r.lengthOfDay)),1)]),B,r.graphMode?(Object(a["h"])(),Object(a["c"])("div",J,[Object(a["f"])("p",null,"Kuupäev: "+Object(a["m"])(r.endDate),1),Object(a["f"])("p",null,"Päikesetõus (UTC): "+Object(a["m"])(r.timePrettyPrint(r.sunriseEndDate)),1),Object(a["f"])("p",null,"Loojang (UTC): "+Object(a["m"])(r.timePrettyPrint(r.sunsetEndDate)),1),Object(a["f"])("p",null,"Päeva pikkus: "+Object(a["m"])(r.timePrettyPrint(r.lengthOfDayEndDate)),1)])):Object(a["d"])("",!0)]),r.graphMode?(Object(a["h"])(),Object(a["c"])("div",R,[Object(a["f"])(o,{suriseSunset:r.calcSunriseSunset,isLeapYear:r.isLeapYear,calcDoy:r.calcDayOfYear},null,8,["suriseSunset","isLeapYear","calcDoy"])])):Object(a["d"])("",!0)])})),W=(n("ac1f"),n("1276"),Object(a["r"])("data-v-602d6307"));Object(a["j"])("data-v-602d6307");var X={id:"plotDiv",ref:"plotDiv"};Object(a["i"])();var Z=W((function(t,e,n,u,i,r){return Object(a["h"])(),Object(a["c"])("div",X,null,512)})),tt=(n("a15b"),n("030a")),et=n.n(tt),nt={props:{suriseSunset:Function,isLeapYear:Function,calcDoy:Function},computed:{startDate:function(){return this.$store.getters.getStartDate},endDate:function(){return this.$store.getters.getEndDate},latitude:function(){return this.$store.getters.getLatitude},longitude:function(){return this.$store.getters.getLongitude},startDoy:function(){return this.calcDoy(this.startDate)},endDoy:function(){return this.calcDoy(this.endDate)},startYear:function(){return Number(this.startDate.split("-")[0])},endYear:function(){return Number(this.endDate.split("-")[0])},changeTracker:function(){return[this.startDate,this.endDate,this.longitude,this.latitude].join()}},methods:{initializePlot:function(){for(var t=this.startDate.split("-"),e=new Date(t[0],t[1]-1,t[2]),n=[],a=[],u=this.startYear;u<=this.endYear;u++){var i=void 0;i=u===this.endYear?this.endDoy:this.isLeapYear(u)?366:365;var r=void 0;r=u===this.startYear?this.startDoy:0;for(var o=r;o<=i;o++){var s=this.suriseSunset(this.latitude,this.longitude,o,12),l=s[1]-s[0];n.push(l/60),a.push(e.toISOString().substring(0,10)),e.setDate(e.getDate()+1)}}var c={x:a,y:n,mode:"lines"},d=[c],p={xaxis:{type:"date"},title:"Päeva pikkuse muutus"},f={responsive:!0,staticPlot:!0};et.a.newPlot("plotDiv",d,p,f)}},mounted:function(){this.initializePlot()},watch:{changeTracker:function(){this.initializePlot()}}};nt.render=Z,nt.__scopeId="data-v-602d6307";var at=nt,ut={components:{Plot:at},methods:{calcSunriseSunset:function(t,e,n,a){var u=Math.PI,i=Math.sin,r=Math.cos,o=Math.tan,s=Math.acos,l=2*u/365*(n-1+(a-12)/24),c=229.18*(75e-6+.001868*r(l)-.032077*i(l)-.014615*r(2*l)-.040849*i(2*l)),d=.006918-.399912*r(l)+.070257*i(l)-.006758*r(2*l)+907e-6*i(2*l)-.002697*r(3*l)+.00148*i(3*l);t*=u/180;var p=s(r(1.5853)/(r(t)*r(d))-o(t)*o(d))*(180/u),f=-p,h=720-4*(e+p)-c,b=720-4*(e+f)-c;return[h,b]},timePrettyPrint:function(t){if(isNaN(t))return"polaarpäev/-öö";var e=Math.floor(t/60),n=Math.round(60*(t/60-e));return n<10&&(n="0"+n),e<0&&(e=24+e),e+":"+n},calcDayOfYear:function(t){var e=t.split("-"),n=Number(e[0]),a=Number(e[1]),u=Number(e[2]),i=[31,28,31,30,31,30,31,31,30,31,30,31];this.isLeapYear(n)&&(i[1]=29);for(var r=0,o=0;o<a-1;o++)r+=i[o];return r+=u,r},isLeapYear:function(t){return t%100==0?t%400==0:t%4==0}},computed:{startDate:function(){return this.$store.getters.getStartDate},endDate:function(){return this.$store.getters.getEndDate},latitude:function(){return this.$store.getters.getLatitude},longitude:function(){return this.$store.getters.getLongitude},dayOfYear:function(){return this.calcDayOfYear(this.startDate)},dayOfYearEndDate:function(){return this.calcDayOfYear(this.endDate)},sunrise:function(){var t=this.calcSunriseSunset(this.latitude,this.longitude,this.dayOfYear,12)[0];return t},sunriseEndDate:function(){var t=this.calcSunriseSunset(this.latitude,this.longitude,this.dayOfYearEndDate,12)[0];return t},sunset:function(){return this.calcSunriseSunset(this.latitude,this.longitude,this.dayOfYear,12)[1]},sunsetEndDate:function(){return this.calcSunriseSunset(this.latitude,this.longitude,this.dayOfYearEndDate,12)[1]},lengthOfDay:function(){return this.sunset-this.sunrise},lengthOfDayEndDate:function(){return this.sunsetEndDate-this.sunriseEndDate},graphMode:function(){return this.$store.getters.getGraphMode}}};n("cbe6");ut.render=Q,ut.__scopeId="data-v-acd522ca";var it=ut,rt={name:"App",components:{Header:f,Input:_,Map:V,Output:it},data:function(){return{latitude:null,longitude:null,day_of_year:null}},computed:{showOutput:function(){return this.$store.getters.getDisplayOutput}}};n("fd8a");rt.render=s;var ot=rt;delete T.a.Icon.Default.prototype._getIconUrl,T.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var st=Object(u["a"])({state:{longitude:null,latitude:null,displayOutput:!1,graphMode:!1,startDate:null,endDate:null},mutations:{updateLongitude:function(t,e){t.longitude=e},updateLatitude:function(t,e){t.latitude=e},setOutPutVisible:function(t,e){t.displayOutput=e},setGraphMode:function(t,e){t.graphMode=e},setStartDate:function(t,e){t.startDate=e},setEndDate:function(t,e){t.endDate=e}},getters:{getLatitude:function(t){return t.latitude},getLongitude:function(t){return t.longitude},getDisplayOutput:function(t){return t.displayOutput},getGraphMode:function(t){return t.graphMode},getStartDate:function(t){return t.startDate},getEndDate:function(t){return t.endDate}}}),lt=Object(a["b"])(ot);lt.use(st),lt.mount("#app")},5944:function(t,e,n){t.exports=n.p+"img/sun.1f2bb080.jpg"},"72fd":function(t,e,n){},"9f80":function(t,e,n){},cbe6:function(t,e,n){"use strict";n("72fd")},f316:function(t,e,n){"use strict";n("9f80")},f7e2:function(t,e,n){"use strict";n("2eb6")},fd8a:function(t,e,n){"use strict";n("1287")}});
//# sourceMappingURL=app.73b15c4b.js.map