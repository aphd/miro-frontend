(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(53),l=a.n(c),i=(a(63),a(2)),s=a(3),o=a(5),u=a(4),d=a(6),f=(a(64),a(10)),h=a(17),p=a.n(h),m=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.cols.map(function(e){return r.a.createElement("th",{key:e.key},e.name)}))),r.a.createElement("tbody",null,this.props.data.map(function(t,a){return r.a.createElement("tr",{key:a},e.props.cols.map(function(e){return r.a.createElement("td",{key:e.key},t[e.key])}))}))))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onDrop=a.onDrop.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"suppress",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"onDrop",value:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return r.a.createElement("div",{onDrop:this.onDrop,onDragEnter:this.suppress,onDragOver:this.suppress},this.props.children)}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"file",className:"form-control",id:"file",accept:y,onChange:this.handleChange})))}}]),t}(r.a.Component),y=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map(function(e){return"."+e}).join(","),j=v,O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],cols:[]},a.handleFile=a.handleFile.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleFile",value:function(e){var t=this,a=new FileReader,n=!!a.readAsBinaryString;a.onload=function(e){var a=e.target.result,r=p.a.read(a,{type:n?"binary":"array",cellDates:!0}),c=r.SheetNames[0],l=r.Sheets[c],i=p.a.utils.sheet_to_json(l,{header:1,raw:!1});t.setState({data:i,cols:E(l)}),t.props.onLoadFile(t.state)},n?a.readAsBinaryString(e):a.readAsArrayBuffer(e)}},{key:"render",value:function(){return r.a.createElement(b,{handleFile:this.handleFile},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement(j,{handleFile:this.handleFile}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement(m,{data:this.state.data,cols:this.state.cols}))))}}]),t}(r.a.Component),E=function(e){for(var t=[],a=p.a.utils.decode_range(e["!ref"]).e.c+1,n=function(){var a=p.a.utils.encode_col(r);t[r]={name:a,head:e[a+"1"].w,key:r,type:e[a+"2"].t,data:Object.keys(e).filter(function(e){return e.match(a)}).map(function(t){return e[t].w})}},r=0;r<a;++r)n();return t},k=a(7),g=a(57),w=a(55),F=function(e){return x[e]||x.default},N=function(){return{datasets:w.zipWith.apply(void 0,Object(g.a)(this.map(function(e){return e.data.slice(1)})).concat([function(e,t,a,n){return{label:e,data:[{x:t,y:a,r:n}]}}]))}},x={Bubble:N,Scatter:N,default:function(){var e=this.find(function(e){return"s"===e.type}),t=this.filter(function(e){return"n"===e.type});return{labels:e.data.slice(1),datasets:t.map(function(e){return{label:e.data[0],data:e.data.slice(1)}})}}};function C(e){if(e.length>0)return[k.c,k.f,k.h,k.a,k.d,k.e,k.g,k.b,k.i].map(function(t,a){return r.a.createElement("div",{className:"col-md",key:a},r.a.createElement(t,{key:a,data:D(e,t.name)}))})}function D(e,t){return F(t).bind(e)()}var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],cols:[]},a.handleLoadFile=function(e){a.setState(e)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{data:this.state.data,onLoadFile:this.handleLoadFile}),r.a.createElement("div",{className:"row"},C(this.state.cols)))}}]),t}(r.a.Component),A=(a(164),a(56));l.a.render(r.a.createElement(S,null),document.getElementById("root")),A.a()},37:function(e,t){},58:function(e,t,a){e.exports=a(165)},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t){},70:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.8e18ddb4.chunk.js.map