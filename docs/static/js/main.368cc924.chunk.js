(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),c=a.n(l),s=(a(61),a(2)),i=a(3),o=a(5),u=a(4),d=a(6),h=(a(62),a(10)),f=a(17),m=a.n(f),p=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.cols.map(function(e){return r.a.createElement("th",{key:e.key},e.name)}))),r.a.createElement("tbody",null,this.props.data.map(function(t,a){return r.a.createElement("tr",{key:a},e.props.cols.map(function(e){return r.a.createElement("td",{key:e.key},t[e.key])}))}))))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onDrop=a.onDrop.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"suppress",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"onDrop",value:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return r.a.createElement("div",{onDrop:this.onDrop,onDragEnter:this.suppress,onDragOver:this.suppress},this.props.children)}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"file",className:"form-control",id:"file",accept:y,onChange:this.handleChange})))}}]),t}(r.a.Component),y=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map(function(e){return"."+e}).join(","),j=v,O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],cols:[]},a.handleFile=a.handleFile.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleFile",value:function(e){var t=this,a=new FileReader,n=!!a.readAsBinaryString;a.onload=function(e){var a=e.target.result,r=m.a.read(a,{type:n?"binary":"array",cellDates:!0}),l=r.SheetNames[0],c=r.Sheets[l],s=m.a.utils.sheet_to_json(c,{header:1,raw:!1});t.setState({data:s,cols:E(c)}),t.props.onLoadFile(t.state)},n?a.readAsBinaryString(e):a.readAsArrayBuffer(e)}},{key:"render",value:function(){return r.a.createElement(b,{handleFile:this.handleFile},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement(j,{handleFile:this.handleFile}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement(p,{data:this.state.data,cols:this.state.cols}))))}}]),t}(r.a.Component),E=function(e){for(var t=[],a=m.a.utils.decode_range(e["!ref"]).e.c+1,n=function(){var a=m.a.utils.encode_col(r);t[r]={name:a,head:e[a+"1"].w,key:r,type:e[a+"2"].t,data:Object.keys(e).filter(function(e){return e.match(a)}).map(function(t){return e[t].w})}},r=0;r<a;++r)n();return t},k=a(7);function g(e){if(e.length>0)return[k.c,k.f,k.h,k.a,k.d,k.e,k.g,k.b,k.i].map(function(t,a){return r.a.createElement("div",{className:"col-md",key:a},r.a.createElement(t,{key:a,data:w(e,t.name)}))})}function w(e,t){var a,n={};return n.datasets=[],(a=e.filter(function(e){return"s"===e.type}))&&(n.labels=a[0].data.slice(1)),(a=e.filter(function(e){return"n"===e.type})).forEach(function(e){return n.datasets.push({label:e.data[0],data:e.data.slice(1)})}),n}var F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],cols:[]},a.handleLoadFile=function(e){a.setState(e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{data:this.state.data,onLoadFile:this.handleLoadFile}),r.a.createElement("div",{className:"row"},g(this.state.cols)))}}]),t}(r.a.Component),N=(a(162),a(55));c.a.render(r.a.createElement(F,null),document.getElementById("root")),N.a()},37:function(e,t){},56:function(e,t,a){e.exports=a(163)},61:function(e,t,a){},62:function(e,t,a){},67:function(e,t){},68:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.368cc924.chunk.js.map