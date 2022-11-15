"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44831],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={slug:"2021-12-08-Taro-3.5-canary",title:"Taro v3.5 \u53d1\u5e03 canary \u7248\u672c \u2014\u2014 \u652f\u6301\u9002\u914d \u9e3f\u8499",authors:["JSZ","JJ"],tags:["v3"],description:""},p=void 0,i={permalink:"/taro-docs/blog/2021-12-08-Taro-3.5-canary",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2021-12-08-Taro-3.5-canary.md",source:"@site/blog/2021-12-08-Taro-3.5-canary.md",title:"Taro v3.5 \u53d1\u5e03 canary \u7248\u672c \u2014\u2014 \u652f\u6301\u9002\u914d \u9e3f\u8499",description:"",date:"2021-12-08T00:00:00.000Z",formattedDate:"2021\u5e7412\u67088\u65e5",tags:[{label:"v3",permalink:"/taro-docs/blog/tags/v-3"}],readingTime:9.43,hasTruncateMarker:!1,authors:[{name:"JSZ",title:"Taro \u8d21\u732e\u8005\u3001\u4eac\u4e1c\u9e3f\u8499\u5171\u5efa\u5c0f\u7ec4\u6210\u5458",url:"https://github.com/JSZabc",imageURL:"https://img11.360buyimg.com/imagetools/jfs/t1/159250/32/22645/93957/61b16ee5E9ed06399/e525bedd205b42a3.jpg",key:"JSZ"},{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2021-12-08-Taro-3.5-canary",title:"Taro v3.5 \u53d1\u5e03 canary \u7248\u672c \u2014\u2014 \u652f\u6301\u9002\u914d \u9e3f\u8499",authors:["JSZ","JJ"],tags:["v3"],description:""},prevItem:{title:"\u5982\u4f55\u53c2\u4e0e\u5927\u578b\u5f00\u6e90\u9879\u76ee-Taro \u5171\u5efa",permalink:"/taro-docs/blog/2022-01-19-how-to-join-Taro"},nextItem:{title:"Taro v3.4 \u53d1\u5e03 beta \u7248\u672c \u2014\u2014 \u652f\u6301\u4f7f\u7528 Preact \u8fdb\u884c\u5f00\u53d1",permalink:"/taro-docs/blog/2021-11-24-Taro-3.4-beta"}},u={authorsImageUrls:[void 0,void 0]},c=[{value:"\u4e00\u3001\u80cc\u666f",id:"\u4e00\u80cc\u666f",level:2},{value:"\u4e8c\u3001\u5b9e\u73b0\u7ec6\u8282",id:"\u4e8c\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"1. \u9e3f\u8499\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u5f02\u540c",id:"1-\u9e3f\u8499\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u5f02\u540c",level:3},{value:"1.1 \u9879\u76ee\u7ec4\u7ec7",id:"11-\u9879\u76ee\u7ec4\u7ec7",level:4},{value:"1.2 \u914d\u7f6e\u6587\u4ef6",id:"12-\u914d\u7f6e\u6587\u4ef6",level:4},{value:"1.3 \u6837\u5f0f",id:"13-\u6837\u5f0f",level:4},{value:"1.4 \u7ec4\u4ef6 &amp; API",id:"14-\u7ec4\u4ef6--api",level:4},{value:"2. \u517c\u5bb9\u7ec6\u8282",id:"2-\u517c\u5bb9\u7ec6\u8282",level:3},{value:"2.1 Taro \u53ef\u4ee5\u89e3\u51b3\u4ec0\u4e48\uff1f",id:"21-taro-\u53ef\u4ee5\u89e3\u51b3\u4ec0\u4e48",level:4},{value:"2.2 \u9e3f\u8499\u63d2\u4ef6",id:"22-\u9e3f\u8499\u63d2\u4ef6",level:4},{value:"3. \u67b6\u6784\u56fe",id:"3-\u67b6\u6784\u56fe",level:3},{value:"\u4e09\u3001\u4f7f\u7528\u65b9\u6cd5",id:"\u4e09\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"1. \u628a Taro \u5347\u7ea7\u5230 v3.5.0-canary.0 \u7248\u672c",id:"1-\u628a-taro-\u5347\u7ea7\u5230-v350-canary0-\u7248\u672c",level:3},{value:"2. \u5b89\u88c5 taro \u9002\u914d\u9e3f\u8499\u63d2\u4ef6",id:"2-\u5b89\u88c5-taro-\u9002\u914d\u9e3f\u8499\u63d2\u4ef6",level:3},{value:"3. \u51c6\u5907\u9e3f\u8499\u8fd0\u884c\u73af\u5883",id:"3-\u51c6\u5907\u9e3f\u8499\u8fd0\u884c\u73af\u5883",level:3},{value:"4. \u9879\u76ee\u8fd0\u884c",id:"4-\u9879\u76ee\u8fd0\u884c",level:3},{value:"\u56db\u3001\u6700\u540e",id:"\u56db\u6700\u540e",level:2}],m={toc:c};function s(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",r({},{id:"\u4e00\u80cc\u666f"}),"\u4e00\u3001\u80cc\u666f"),(0,a.kt)("p",null,"\u9e3f\u8499\u4f5c\u4e3a\u534e\u4e3a\u81ea\u7814\u5f00\u53d1\u7684\u4e00\u6b3e\u53ef\u4ee5\u5b9e\u73b0\u4e07\u7269\u4e92\u8054\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e00\u7ecf\u63a8\u51fa\u5c31\u53d7\u5230\u4e86\u5f88\u5927\u7684\u5173\u6ce8\uff0c\u88ab\u56fd\u4eba\u5bc4\u4e88\u4e86\u539a\u671b\u3002\u800c\u9e3f\u8499\u4e5f\u6ca1\u8ba9\u4eba\u5931\u671b\uff0c\u4eca\u5e74 Harmony2.0 \u6b63\u5f0f\u63a8\u51fa\u4f9b\u7528\u6237\u8fdb\u884c\u5347\u7ea7\u4e4b\u540e\uff0c\u5728\u77ed\u77ed\u7684\u4e09\u4e2a\u6708\u5185\u5b9e\u73b0\u4e86 1.2 \u4ebf\u7684\u88c5\u673a\u91cf\uff0c\u5e76\u4e14\u5728\u524d\u4e0d\u4e45\u7684\u534e\u4e3a\u5f00\u53d1\u8005\u5927\u4f1a\u4e0a\uff0c\u534e\u4e3a\u5ba3\u5e03 Harmony2.0 \u7684\u88c5\u673a\u91cf\u5df2\u7ecf\u7a81\u7834\u4e86 1.5 \u4ebf\u3002"),(0,a.kt)("p",null,"\u4f17\u591a\u5e94\u7528\u5382\u5546\u90fd\u9010\u6b65\u63a8\u51fa\u4e86\u9002\u914d\u7684\u9e3f\u8499\u5e94\u7528\uff0cTaro \u4f5c\u4e3a\u4e00\u4e2a\u5f00\u653e\u5f0f\u7684 \u8de8\u7aef\u8de8\u6846\u67b6 \u89e3\u51b3\u65b9\u6848\uff0c\u4e0d\u5c11\u5f00\u53d1\u8005\u671f\u5f85\u5c06\u5c0f\u7a0b\u5e8f\u7684\u80fd\u529b\u79fb\u690d\u5230\u9e3f\u8499 OS \u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528 Taro \u5f00\u53d1\u9e3f\u8499 && OpenHarmony \u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u9e3f\u8499\u7684\u65b9\u821f\u5f00\u53d1\u6846\u67b6\u63d0\u4f9b\u7c7b Web \u8303\u5f0f\u7f16\u7a0b\uff0c\u652f\u6301\u4f7f\u7528 JS \u5f00\u53d1 UI \u5c42\uff0c\u5176\u8bed\u6cd5\u4e0e\u5c0f\u7a0b\u5e8f\u76f8\u63a5\u8fd1\u3002\u7ecf\u8fc7\u524d\u671f\u8c03\u7814\uff0c\u53ef\u4ee5\u6cbf\u7528 Taro \u73b0\u6709\u7684\u67b6\u6784\u9002\u914d\u9e3f\u8499"),(0,a.kt)("p",null,"\u4eca\u5e74 6 \u6708\u4efd\u6211\u4eec\u65b0\u5efa\u4e86\u652f\u6301\u9e3f\u8499\u7684\u63d0\u6848\uff0c\u5e0c\u671b\u80fd\u8fbe\u6210\u4e09\u5927\u76ee\u6807\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 Taro \u5f00\u53d1\u9e3f\u8499\u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u628a\u73b0\u6709\u7684 Taro \u5e94\u7528\u9002\u914d\u5230\u9e3f\u8499\u5e73\u53f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 Taro \u7684\u53cd\u5411\u8f6c\u6362\u5de5\u5177\uff0c\u628a\u539f\u751f\u5f00\u53d1\u7684\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a Taro \u5e94\u7528\uff0c\u518d\u9002\u914d\u5230\u9e3f\u8499\u5e73\u53f0\u3002")),(0,a.kt)("p",null,"\u76ee\u524d Taro \u548c OpenHarmony \u5efa\u7acb\u4e86\u5b98\u65b9\u5408\u4f5c\u5173\u7cfb\uff0c\u53d7\u9080\u5e76\u6210\u7acb\u4e86",(0,a.kt)("a",r({parentName:"p"},{href:"https://gitee.com/tangjiao11/community/blob/master/sig/sig-crossplatformui/sig_crossplatformui_cn.md"}),"\u8de8\u5e73\u53f0\u524d\u7aef\u6846\u67b6\u5174\u8da3\u5c0f\u7ec4\uff08SIG-CROSS-PLATFORM-UI\uff09"),"\uff0c\u540c\u65f6 Taro \u4e0e\u534e\u4e3a\u9e3f\u8499 && OpenHarmony \u4fdd\u6301\u7740\u5185\u90e8\u6c9f\u901a\u4e0e\u5206\u4eab\uff0cTaro \u62e5\u6709\u7684\u6d77\u91cf\u5f00\u53d1\u8005\u548c\u4f18\u79c0\u6848\u4f8b\uff0c\u80fd\u6709\u6548\u8865\u5145\u534e\u4e3a\u9e3f\u8499 && OpenHarmony \u751f\u6001\u3002"),(0,a.kt)("h2",r({},{id:"\u4e8c\u5b9e\u73b0\u7ec6\u8282"}),"\u4e8c\u3001\u5b9e\u73b0\u7ec6\u8282"),(0,a.kt)("p",null,"\u9e3f\u8499\u7684 JS UI \u8bed\u6cd5\u4e0e\u5c0f\u7a0b\u5e8f\u7c7b\u4f3c\uff0c\u4f46\u6bd5\u7adf\u4e24\u8005\u5e95\u5c42\u539f\u7406\u4e0d\u4e00\u6837\uff0c\u4e0d\u53ef\u907f\u514d\u5730\u5b58\u5728\u8bb8\u591a\u5dee\u5f02\u3002\u63a5\u4e0b\u6765\u5c06\u7b80\u5355\u4ecb\u7ecd\u9e3f\u8499\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u4e3b\u8981\u5dee\u5f02\uff0c\u548c Taro \u53c8\u662f\u5982\u4f55\u5904\u7406\u8fd9\u4e9b\u5dee\u5f02\u7684\u3002"),(0,a.kt)("h3",r({},{id:"1-\u9e3f\u8499\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u5f02\u540c"}),"1. \u9e3f\u8499\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u5f02\u540c"),(0,a.kt)("h4",r({},{id:"11-\u9879\u76ee\u7ec4\u7ec7"}),"1.1 \u9879\u76ee\u7ec4\u7ec7"),(0,a.kt)("p",null,"\u9e3f\u8499\u7684\u9879\u76ee\u7ec4\u7ec7\u548c\u5c0f\u7a0b\u5e8f\u7c7b\u4f3c\uff0c\u6709\u5165\u53e3\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," \u3001\u9875\u9762\u3001\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u9875\u9762\u3001\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5747\u7531\u4e09\u7c7b\u6587\u4ef6\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".hml")," \u7528\u6765\u63cf\u8ff0\u5e03\u5c40\u7ed3\u6784\u3002\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u6a21\u677f\u6587\u4ef6\u76f8\u6bd4\uff0c\u8bed\u6cd5\u3001\u652f\u6301\u7684\u80fd\u529b\u6709\u5c11\u8bb8\u533a\u522b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".css")," \u7528\u6765\u63cf\u8ff0\u9875\u9762\u6837\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".js")," \u7528\u4e8e\u5904\u7406\u9875\u9762\u548c\u7528\u6237\u7684\u4ea4\u4e92\uff0c\u9ed8\u8ba4\u652f\u6301 ES6 \u8bed\u6cd5\u3002")),(0,a.kt)("h4",r({},{id:"12-\u914d\u7f6e\u6587\u4ef6"}),"1.2 \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u548c\u5c0f\u7a0b\u5e8f\u89c4\u5b9a\u7684\u5165\u53e3\u6587\u4ef6\u3001\u9875\u9762\u6587\u4ef6\u3001\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5404\u81ea\u5bf9\u5e94\u4e00\u4efd\u914d\u7f6e\u6587\u4ef6\u4e0d\u4e00\u6837\uff0c\u9e3f\u8499 JS UI \u7684\u914d\u7f6e\u6587\u4ef6\u53ea\u6709\u4e00\u4efd\u3002"),(0,a.kt)("p",null,"\u9e3f\u8499\u7684",(0,a.kt)("strong",{parentName:"p"},"\u8def\u7531"),"\u548c\u5c0f\u7a0b\u5e8f\u4e00\u6837\u662f\u914d\u7f6e\u5f0f\u7684\uff0c\u9700\u8981\u5728 JS UI \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h4",r({},{id:"13-\u6837\u5f0f"}),"1.3 \u6837\u5f0f"),(0,a.kt)("p",null,"CSS \u65b9\u9762\uff0c\u9e3f\u8499\u548c RN \u4e00\u6837\u6709\u7740\u8bf8\u591a\u9650\u5236\u3002\u4f8b\u5982\u4e0d\u652f\u6301\u76d2\u5b50\u6a21\u578b\u3001\u5404\u7ec4\u4ef6\u53ea\u652f\u6301\u90e8\u5206 CSS \u5c5e\u6027\u7b49\u3002"),(0,a.kt)("h4",r({},{id:"14-\u7ec4\u4ef6--api"}),"1.4 \u7ec4\u4ef6 & API"),(0,a.kt)("p",null,"\u9e3f\u8499\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u529f\u80fd\u4e30\u5bcc\u7684\u7ec4\u4ef6\uff0c\u4e0e\u5c0f\u7a0b\u5e8f\u7684\u7ec4\u4ef6\u76f8\u6bd4\uff0c\u547d\u540d\u3001\u529f\u80fd\u4e0a\u7565\u6709\u5dee\u522b\u3002"),(0,a.kt)("p",null,"API \u4e5f\u662f\u4e00\u6837\u7684\uff0c\u4e24\u8005\u7684 API \u96c6\u5408\u6709\u90e8\u5206\u4ea4\u96c6\uff0c\u7528\u6cd5\u3001\u529f\u80fd\u4e0a\u6709\u5dee\u522b\u3002"),(0,a.kt)("h3",r({},{id:"2-\u517c\u5bb9\u7ec6\u8282"}),"2. \u517c\u5bb9\u7ec6\u8282"),(0,a.kt)("h4",r({},{id:"21-taro-\u53ef\u4ee5\u89e3\u51b3\u4ec0\u4e48"}),"2.1 Taro \u53ef\u4ee5\u89e3\u51b3\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"Taro \u9002\u914d\u9e3f\u8499\u81f4\u529b\u4e8e\u5c3d\u53ef\u80fd\u5730\u62b9\u5e73\u5dee\u5f02\uff0c\u4f46\u4f5c\u4e3a\u4e00\u4e2a\u6846\u67b6\uff0c\u6ce8\u5b9a\u6709\u5b83\u80fd\u591f\u89e3\u51b3\u548c\u4e0d\u80fd\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\u5dee\u5f02\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u8fd0\u884c\u65f6\u6846\u67b6\u53bb\u5904\u7406\uff1b\u4f7f\u7528\u9e3f\u8499\u7684\u7ec4\u4ef6\u3001API \u53bb\u5c3d\u53ef\u80fd\u5730\u5b9e\u73b0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u7ec4\u4ef6\u548c API\uff0c\u4ee5\u62b9\u5e73\u4e24\u8005\u4e4b\u95f4\u7684\u4f7f\u7528\u5dee\u522b\u3002"),(0,a.kt)("p",null,"\u800c CSS \u7684\u5dee\u5f02\u3001\u7ec4\u4ef6\u548c API \u80fd\u529b\u4e0a\u7684\u5dee\u5f02\u7b49\u4f9d\u8d56\u7740\u9e3f\u8499\u5e95\u5c42\u5b9e\u73b0\uff0cTaro \u662f\u65e0\u6cd5\u89e3\u51b3\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://img11.360buyimg.com/imagetools/jfs/t1/207457/5/11670/466511/61b05b41E43730965/de2d1029083cc60d.png",alt:"\u9002\u914d\u65b9\u6848"}))),(0,a.kt)("h4",r({},{id:"22-\u9e3f\u8499\u63d2\u4ef6"}),"2.2 \u9e3f\u8499\u63d2\u4ef6"),(0,a.kt)("p",null,"Taro \u5728\u9e3f\u8499\u65b9\u9762\u7684\u517c\u5bb9\u5de5\u4f5c\u4e3b\u8981\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-platform-harmony")," \u63d2\u4ef6\u6765\u5b8c\u6210\uff0c\u5f00\u53d1\u8005\u5f15\u5165\u8be5\u63d2\u4ef6\u5373\u53ef\u7f16\u8bd1\u4e3a\u9e3f\u8499\u5e94\u7528\u3002\u5b83\u4e3b\u8981\u505a\u4e86\u8fd9\u4e9b\u9002\u914d\u5de5\u4f5c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) \u6a21\u677f")),(0,a.kt)("p",null,"\u719f\u6089 Taro \u7684\u540c\u5b66\u90fd\u5e94\u8be5\u6e05\u695a\uff0cTaro \u5728\u5c0f\u7a0b\u5e8f\u7aef\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \u6807\u7b7e\u7684\u9012\u5f52\u6765\u6e32\u67d3\u9875\u9762\u52a8\u6001\u7684 DOM \u6811\u3002\u800c\u9e3f\u8499\u4e2d\u5e76\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"<template>")," \uff0c\u56e0\u6b64\u6211\u4eec\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8fdb\u884c\u9012\u5f52\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) \u8fd0\u884c\u65f6")),(0,a.kt)("p",null,"\u8fd0\u884c\u65f6\u4e3b\u8981\u5728\u9e3f\u8499\u7aef\u517c\u5bb9\u4e86\u5c0f\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u548c\u6570\u636e\u66f4\u65b0\u65b9\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"setData")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"c) \u7ec4\u4ef6 & API")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u9e3f\u8499\u7684\u539f\u751f\u8bed\u6cd5\u5c01\u88c5\u4e86\u7b26\u5408\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303\u7684\u7ec4\u4ef6\u5e93\u548c API \u5e93\u3002\u5728\u517c\u5bb9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u5c5e\u6027\u7684\u540c\u65f6\uff0c\u4e5f\u4fdd\u7559\u4e86\u9e3f\u8499\u72ec\u6709\u7684\u652f\u6301\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u5171\u9002\u914d\u4e86 29 \u4e2a\u7ec4\u4ef6\uff0c16 \u7c7bAPI\u3002\u7ec4\u4ef6\u793a\u4f8b\u5e93\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-components-sample/tree/harmony"}),"taro-components-sample")),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://img14.360buyimg.com/imagetools/jfs/t1/137976/7/22742/2461697/61b17384Ebbb815c0/4949c696d9a49283.jpg",alt:"\u7ec4\u4ef6\u793a\u4f8b\u56fe"}))),(0,a.kt)("h3",r({},{id:"3-\u67b6\u6784\u56fe"}),"3. \u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://img14.360buyimg.com/imagetools/jfs/t1/215443/28/7034/1135729/61b05b42E21c6230a/5e8fc76941f98920.png",alt:"\u67b6\u6784\u56fe"}))),(0,a.kt)("h2",r({},{id:"\u4e09\u4f7f\u7528\u65b9\u6cd5"}),"\u4e09\u3001\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5982\u60a8\u662f\u65b0\u9879\u76ee\uff0c \u5347\u7ea7 Taro \u9009\u62e9\u9e3f\u8499\u6a21\u677f\u5373\u53ef\uff1b"),(0,a.kt)("p",null,"\u65e7\u9879\u76ee\u9700\u8981\u6309\u7167\u5982\u4e0b\u65b9\u6cd5\u8fdb\u884c\u624b\u52a8\u914d\u7f6e\uff1a"),(0,a.kt)("h3",r({},{id:"1-\u628a-taro-\u5347\u7ea7\u5230-v350-canary0-\u7248\u672c"}),"1. \u628a Taro \u5347\u7ea7\u5230 v3.5.0-canary.0 \u7248\u672c"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.5.0-canary.0")," \u7684 CLI \u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"npm i -g @tarojs/cli@canary\n")),(0,a.kt)("p",null,"\u7136\u540e\u66f4\u65b0\u9879\u76ee\u672c\u5730\u7684 Taro \u76f8\u5173\u4f9d\u8d56\uff1a\u628a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\xa0\u6587\u4ef6\u4e2d Taro \u76f8\u5173\u4f9d\u8d56\u7684\u7248\u672c\u4fee\u6539\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"~3.5.0-canary.0"),"\uff0c\u518d\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5b89\u88c5\u5931\u8d25\u6216\u6253\u5f00\u9879\u76ee\u5931\u8d25\uff0c\u53ef\u4ee5\u5220\u9664\xa0",(0,a.kt)("strong",{parentName:"p"},"node_modules"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"yarn.lock"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"package-lock.json"),"\xa0\u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u518d\u5c1d\u8bd5\u3002")),(0,a.kt)("h3",r({},{id:"2-\u5b89\u88c5-taro-\u9002\u914d\u9e3f\u8499\u63d2\u4ef6"}),"2. \u5b89\u88c5 taro \u9002\u914d\u9e3f\u8499\u63d2\u4ef6"),(0,a.kt)("p",null,"\uff081\uff09Taro \u9879\u76ee\u4e2d\u5b89\u88c5\u9e3f\u8499\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-platform-harmony")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"$ yarn add --dev @tarojs/plugin-platform-harmony\n")),(0,a.kt)("p",null,"\uff082\uff09\u5728 config/index.js \u4e2d\u589e\u52a0\u7f16\u8bd1\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"\nconfig = {\n  // \u914d\u7f6e\u4f7f\u7528\u63d2\u4ef6\n  plugins: ['@tarojs/plugin-platform-harmony'],\n  mini: {\n    // \u5982\u679c\u4f7f\u7528\u5f00\u53d1\u8005\u5de5\u5177\u7684\u9884\u89c8\u5668\uff08previewer\uff09\u8fdb\u884c\u9884\u89c8\u7684\u8bdd\uff0c\u9700\u8981\u4f7f\u7528 development \u7248\u672c\u7684 react-reconciler\u3002\n    // \u56e0\u4e3a previewer \u5bf9\u957f\u4e32\u7684\u538b\u7f29\u6587\u672c\u89e3\u6790\u6709\u95ee\u9898\u3002\uff08\u771f\u673a/\u8fdc\u7a0b\u771f\u673a\u6ca1\u6709\u6b64\u95ee\u9898\uff09\n    debugReact: true,\n    // \u5982\u679c\u9700\u8981\u771f\u673a\u65ad\u70b9\u8c03\u8bd5\uff0c\u9700\u8981\u5173\u95ed sourcemap \u7684\u751f\u6210\n    enableSourceMap: false\n  },\n  // harmony \u76f8\u5173\u914d\u7f6e\n  harmony: {\n    // \u3010\u5fc5\u586b\u3011\u9e3f\u8499\u5e94\u7528\u7684\u7edd\u5bf9\u8def\u5f84\n    projectPath: path.resolve(process.cwd(), '../MyApplication'),\n    // \u3010\u53ef\u9009\u3011HAP \u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a 'entry'\n    hapName: 'entry',\n    // \u3010\u53ef\u9009\u3011JS FA \u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a 'default'\n    jsFAName: 'default'\n  }\n}\n")),(0,a.kt)("h3",r({},{id:"3-\u51c6\u5907\u9e3f\u8499\u8fd0\u884c\u73af\u5883"}),"3. \u51c6\u5907\u9e3f\u8499\u8fd0\u884c\u73af\u5883"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u9e3f\u8499\u8f6f\u4ef6\u9700\u8981\u7528\u5230 HUAWEI DevEco Studio\uff0c\u5b83\u63d0\u4f9b\u4e86\u6a21\u677f\u521b\u5efa\u3001\u5f00\u53d1\u3001\u7f16\u8bd1\u3001\u8c03\u8bd5\u3001\u53d1\u5e03\u7b49\u670d\u52a1\u3002")),(0,a.kt)("p",null,"\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("p",null,"\uff081\uff09\u6ce8\u518c\u5f00\u53d1\u8005\u8d26\u53f7"),(0,a.kt)("p",null,"\uff082\uff09\u4e0b\u8f7d DevEco Studio \u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\uff083\uff09\u542f\u52a8 DevEco Studio\uff0c\u6839\u636e\u5de5\u5177\u5f15\u5bfc\u4e0b\u8f7d HarmonyOS SDK"),(0,a.kt)("p",null,"\uff084\uff09\u65b0\u5efa MyApplication JS\u9879\u76ee"),(0,a.kt)("p",null,"\uff085\uff09\u4f7f\u7528\u9884\u89c8\u5668\u6216\u771f\u673a\u67e5\u770b\u5e94\u7528\u6548\u679c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://juejin.cn/post/6972109475347955749"}),"\u300a\u521d\u7aa5\u9e3f\u8499\u300b")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.harmonyos.com/cn/develop/deveco-studio"}),"\u300a\u534e\u4e3a\u5f00\u53d1\u8005\u5de5\u5177\u300b"),(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.harmonyos.com/cn/documentation"}),"\u300a\u9e3f\u8499\u5f00\u53d1\u6587\u6863\u300b"))),(0,a.kt)("h3",r({},{id:"4-\u9879\u76ee\u8fd0\u884c"}),"4. \u9879\u76ee\u8fd0\u884c"),(0,a.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"$ taro build \u2014-type harmony \u2014-watch\n")),(0,a.kt)("p",null,"\u82e5\u60a8\u5728\u6b65\u9aa4 2(2) \u8bbe\u7f6e\u597d\u4e86\u6253\u5305\u8f93\u51fa\u5230\u9e3f\u8499\u9879\u76ee\u7684\u8def\u5f84\uff0c\u5373\u53ef\u67e5\u770b Taro \u9002\u914d\u9e3f\u8499\u7684\u5e94\u7528\u6548\u679c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"testHarmony \u4e3a\u60a8\u901a\u8fc7 DevEco Studio \u521b\u5efa\u7684 JS \u9879\u76ee\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",r({parentName:"p"},{src:"https://img13.360buyimg.com/imagetools/jfs/t1/218013/26/7034/2593615/61b05b43Ec927d51c/f2990eef38343eca.png",alt:"\u8fd0\u884c\u6548\u679c\u56fe"}))),(0,a.kt)("h2",r({},{id:"\u56db\u6700\u540e"}),"\u56db\u3001\u6700\u540e"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u7ee7\u7eed\u5b8c\u5584\u5bf9\u9e3f\u8499\u7684\u9002\u914d\u5de5\u4f5c\uff0c\u9884\u8ba1\u4f1a\u5728 2022 \u5e74 Q1 \u53d1\u5e03 v3.5 \u6b63\u5f0f\u7248\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u4e5f\u5e0c\u671b\u793e\u533a\u6709\u66f4\u591a\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5171\u5efa\uff0c\u65e0\u8bba\u662f\u63d0\u51fa Issues\u3001\u5728\u8bba\u575b\u53d1\u5e16\u3001\u63d0\u4ea4 PR \u8fd8\u662f\u5e2e\u52a9\u5efa\u8bbe\u5468\u8fb9\u751f\u6001\u7b49\uff0c\u5bf9\u6211\u4eec\u6765\u8bf4\u90fd\u662f\u5b9d\u8d35\u7684\u8d22\u5bcc\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u628a Taro \u5efa\u8bbe\u7684\u66f4\u5f3a\u3002"),(0,a.kt)("p",null,"Taro \u56e2\u961f\u8877\u5fc3\u611f\u8c22\u4e00\u8def\u8d70\u6765\u5927\u5bb6\u5bf9\u6211\u4eec\u7684\u652f\u6301\uff0c\u6b63\u662f\u56e0\u4e3a\u5927\u5bb6\u7684\u671f\u5f85\u3001\u4fe1\u8d56\u6566\u4fc3\u6211\u4eec\u8d70\u5411\u66f4\u597d\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u8be5\u7248\u672c\u9e3f\u8499\u7684\u9002\u914d\u7531\u4eac\u4e1c\u5185\u9e3f\u8499\u5171\u5efa\u5c0f\u7ec4\u5171\u540c\u5b8c\u6210\uff0c\u611f\u8c22\u4ee5\u4e0b\u540c\u5b66\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/AdvancedCat"}),"@AdvancedCat"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/jiaozitang"}),"@jiaozitang"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/huozhongyi123"}),"@huozhongyi123"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/troy-sxj"}),"@troy-sxj"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/JSZabc"}),"@JSZabc"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/crazyonebyone"}),"@crazyonebyone"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/evernoteHW"}),"@evernoteHW"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/soulhat"}),"@soulhat"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/xueshuai"}),"@xueshuai"),"\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/LuMeiling"}),"@LuMeiling")))}s.isMDXComponent=!0}}]);