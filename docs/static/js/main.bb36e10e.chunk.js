(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Bar",function(){return k}),a.d(n,"Pie",function(){return x}),a.d(n,"Box",function(){return A}),a.d(n,"HeatMap",function(){return T}),a.d(n,"LineTimeSeries",function(){return J});var r=a(0),c=a.n(r),o=a(58),i=a.n(o),s=(a(67),a(2)),u=a(5),l=a(1),d=a(3),f=a(4),p=(a(68),a(10)),h=a(18),b=a.n(h),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,this.props.cols.map(function(e){return c.a.createElement("th",{key:e.key},e.name)}))),c.a.createElement("tbody",null,this.props.data.map(function(t,a){return c.a.createElement("tr",{key:a},e.props.cols.map(function(e){return c.a.createElement("td",{key:e.key},t[e.key])}))}))))}}]),t}(c.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).onDrop=a.onDrop.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"suppress",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"onDrop",value:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return c.a.createElement("div",{onDrop:this.onDrop,onDragEnter:this.suppress,onDragOver:this.suppress},this.props.children)}}]),t}(c.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return c.a.createElement("form",{className:"form-inline"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"file",className:"form-control",id:"file",accept:j,onChange:this.handleChange})))}}]),t}(c.a.Component),j=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map(function(e){return"."+e}).join(","),y=v,g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).get_data=function(e,t){return Object.keys(e).filter(function(e){return e.match(t)}).map(function(t){return e[t].w}).slice(0,a.LIMIT)},a.get_cols=function(e){for(var t=[],n=b.a.utils.decode_range(e["!ref"]).e.c+1,r=0;r<n;++r){var c=b.a.utils.encode_col(r),o=a.get_data(e,c),i=e[c+"2"].t;o="n"===i?o.map(function(e,t){return t>0?Number(e):e}):o,t[r]={name:c,head:e[c+"1"].w,key:r,type:i,distinctValuesCount:Array.from(new Set(o.slice(1))).length,data:o}}return t},a.state={data:[],cols:[]},a.LIMIT=1e3,a.handleFile=a.handleFile.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleFile",value:function(e){var t=this,a=new FileReader,n=!!a.readAsBinaryString;a.onload=function(e){var a=e.target.result,r=b.a.read(a,{type:n?"binary":"array",cellDates:!0}),c=r.SheetNames[0],o=r.Sheets[c],i=b.a.utils.sheet_to_json(o,{header:1,raw:!1});t.setState({data:i,cols:t.get_cols(o)}),t.props.onLoadFile(t.state)},n?a.readAsBinaryString(e):a.readAsArrayBuffer(e)}},{key:"render",value:function(){return c.a.createElement(O,{handleFile:this.handleFile},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement(y,{handleFile:this.handleFile}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement(m,{data:this.state.data.slice(0,this.LIMIT),cols:this.state.cols}))))}}]),t}(c.a.Component),E=a(9),F=a.n(E),C=a(26);var k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).acceptedDataframe=function(){return["n2P","s2P"]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e){return c.a.createElement(C.a,{data:(t=F.a.countBy(e.data.slice(1)),{labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}),options:{title:{display:!0,text:e.data[0]}}});var t}}]),t}(c.a.Component);var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).acceptedDataframe=function(){return["n1P","s1P"]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e){return c.a.createElement(C.b,{data:(t=F.a.countBy(e.data.slice(1)),{labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}),options:{title:{display:!0,text:e.data[0]}}});var t}}]),t}(c.a.Component),w=(a(37),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),t}(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).canvas=c.a.createRef(),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){new window.Chart(this.canvas.current.getContext("2d"),this.props.data)}},{key:"render",value:function(){return c.a.createElement("canvas",{ref:this.canvas})}}]),t}(c.a.Component)));var A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).acceptedDataframe=function(){return["n3P"]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e){return c.a.createElement(w,{data:(t=e,{type:"boxplot",data:{datasets:[{label:t.data[0],borderColor:"red",borderWidth:1,outlierRadius:3,itemRadius:3,outlierColor:"#999999",data:[t.data.slice(1)]}]},options:{responsive:!0,legend:{position:"top"},scales:{xAxes:[{categoryPercentage:.9,barPercentage:.8}]}}})});var t}}]),t}(c.a.Component),D=a(61),N=a(17),P=a.n(N),B=a(27),M=a.n(B),L=a(38);function S(e,t){var a=Math.min,n=Math.pow,r=Math.sqrt,c=function(e,t){return e+t},o=a(e.length,t.length);if(0===o)return 0;var i=[e.slice(0,o),t.slice(0,o)],s=[e=i[0],t=i[1]].map(function(e){return e.reduce(c)}),u=Object(L.a)(s,2),l=u[0],d=u[1],f=[e,t].map(function(e){return e.reduce(function(e,t){return e+n(t,2)},0)}),p=Object(L.a)(f,2),h=p[0],b=p[1],m=e.map(function(e,a){return e*t[a]}).reduce(c),O=r((h-n(l,2)/o)*(b-n(d,2)/o));return 0===O?0:(m-l*d/o)/O}var _=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).acceptedDataframe=function(){return["heatMap"]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e){return c.a.createElement(z,{options:R(e)})}}]),t}(c.a.Component),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).props=e,a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(M.a,{highcharts:P.a,options:this.props.options})}}]),t}(c.a.Component);function I(e,t){var a;return e=function(e){return e.map(function(e){if("string"===typeof e[1]){var t=F.a.uniq(e.slice(1));return[e[0]].concat(e.slice(1).map(function(e){return t.indexOf(e)}))}return e})}(e),(a=[]).concat.apply(a,Object(D.a)(e.map(function(a,n){return e.slice(n+1).map(function(e,n){return[t.indexOf(a[0]),t.indexOf(e[0]),Math.abs(S(a.slice(1),e.slice(1)).toFixed(1))]})})))}function R(e){var t=e.data,a=t.map(function(e){return e[0]});return{title:{text:null},chart:{type:"heatmap"},xAxis:{categories:a},yAxis:{categories:a},colorAxis:{min:0,minColor:"#FFFFFF",maxColor:P.a.getOptions().colors[0]},tooltip:{formatter:function(){return"<b>"+this.series.xAxis.categories[this.point.x]+"</b> sold <br><b>"+this.point.value+"</b> items on <br><b>"+this.series.yAxis.categories[this.point.y]+"</b>"}},series:[{borderWidth:1,data:I(t,a),dataLabels:{enabled:!0,color:"#000000"}}]}}var T=_,q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).acceptedDataframe=function(){return["d3P"]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e,t){return c.a.createElement(V,{options:$(e,t)})}}]),t}(c.a.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).props=e,a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(M.a,{highcharts:P.a,options:this.props.options})}}]),t}(c.a.Component);function $(e,t){return{title:{text:"Line Time Series"},xAxis:{categories:e.data.slice(1)},series:t.filter(function(e){return"n3P"===e.normalized}).map(function(e){return{name:e.data[0],data:e.data.slice(1)}})}}var J=q;var K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).areFLoat=function(e){return e.some(function(e){return e%1!==0})},a.areManyCategorical=function(e){return"s"===e.type&&e.distinctValuesCount>5},a.arePK=function(e){return"n"===e.type&&e.distinctValuesCount===e.data.length-1&&!a.areFLoat(e.data.slice(1))},a.props=e.cols.filter(function(e){return!a.arePK(e)}).filter(function(e){return!a.areManyCategorical(e)}),a.normalize(),Object(l.a)(a,a.props)}return Object(f.a)(t,e),Object(u.a)(t,[{key:"strings2Numbers",value:function(){this.props.cols.map(function(e){return"n"===e.type?e.map(function(e,t){return t>0?Number(e):e}):e})}},{key:"normalize",value:function(){this.props.map(function(e){var t=String(e.distinctValuesCount),a=new Map;a.set(/^[1-3]$/,"1P"),a.set(/^[4-9]$/,"2P"),a.set(/^[1-9]\d{1,}$/,"3P"),a.forEach(function(a,n){t=t.replace(n,e.type+a)}),e.normalized=t})}}]),t}(c.a.Component),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],cols:[]},a.handleLoadFile=function(e){a.setState({cols:new K(e)})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.cols.length>0&&c.a.createElement("div",{className:"row"},function(e){var t={};return Object.values(n).forEach(function(e){Reflect.construct(e,[]).acceptedDataframe().forEach(function(a){return t[a]=e})}),(e=[{normalized:"heatMap",data:e.map(function(e){return e.data}),className:"col-lg-12 col-md-12"}].concat(e)).map(function(a,n){return t[a.normalized]&&c.a.createElement("div",{className:a.className||"col-lg-4 col-md-6",key:n},Reflect.construct(t[a.normalized],[]).render(a,e))})}(this.state.cols)),c.a.createElement(g,{data:this.state.data,onLoadFile:this.handleLoadFile}))}}]),t}(c.a.Component),H=(a(169),a(60));i.a.render(c.a.createElement(W,null),document.getElementById("root")),H.a()},42:function(e,t){},62:function(e,t,a){e.exports=a(170)},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t){},74:function(e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.bb36e10e.chunk.js.map