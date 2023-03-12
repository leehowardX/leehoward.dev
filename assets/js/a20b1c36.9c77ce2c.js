"use strict";(self.webpackChunkleehoward_dev=self.webpackChunkleehoward_dev||[]).push([[37],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=n,k=m["".concat(p,".").concat(d)]||m[d]||g[d]||a;return o?r.createElement(k,l(l({ref:t},c),{},{components:o})):r.createElement(k,l({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5382:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={id:"googlemock",title:"Install Google Mock",sidebar_label:"Google Mock"},l=void 0,i={unversionedId:"software-dev/cpp/testing/googlemock",id:"software-dev/cpp/testing/googlemock",title:"Install Google Mock",description:"I ran into a few hiccups while getting googlemock to work for the book",source:"@site/docs/software-dev/cpp/testing/googlemock.md",sourceDirName:"software-dev/cpp/testing",slug:"/software-dev/cpp/testing/googlemock",permalink:"/docs/software-dev/cpp/testing/googlemock",draft:!1,tags:[],version:"current",frontMatter:{id:"googlemock",title:"Install Google Mock",sidebar_label:"Google Mock"},sidebar:"docs",previous:{title:"C++ Programming",permalink:"/docs/category/c-programming"},next:{title:"Escape Sequences",permalink:"/docs/software-dev/c/escape"}},p={},s=[{value:"Google Mock",id:"google-mock",level:2},{value:"Google Test",id:"google-test",level:2},{value:"Setup Enviroment Variables",id:"setup-enviroment-variables",level:2},{value:"Build Google Mock",id:"build-google-mock",level:2},{value:"Build Google Test",id:"build-google-test",level:2},{value:"Other Notes",id:"other-notes",level:2}],c={toc:s};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I ran into a few hiccups while getting googlemock to work for the book\n",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com/Modern-Programming-Test-Driven-Development-Better/dp/1937785483"},"Modern C++ Programming with Test-Driven Development")),(0,n.kt)("p",null,"The book is from 2013 and since then googlemock has been absorded by googletest\nin the newer versions. So this is how I got things up and running."),(0,n.kt)("h2",{id:"google-mock"},"Google Mock"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the correct version of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/googlemock/releases/tag/release-1.6.0"},"googlemock v1.6.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extract and put in root of home folder ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/$USER/googlemock-1.6.0")))),(0,n.kt)("h2",{id:"google-test"},"Google Test"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the correct version of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/googletest/releases/tag/release-1.6.0"},"googletest v1.6.0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extract and copy to inside root directory of googlemock folder\nthen rename to gtest"))),(0,n.kt)("h2",{id:"setup-enviroment-variables"},"Setup Enviroment Variables"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export GMOCK_HOME=/home/user/googlemock-1.6.0")),(0,n.kt)("h2",{id:"build-google-mock"},"Build Google Mock"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cd $GMOCK_HOME"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"mkdir mybuild"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"cd mybuild"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"cmake .."),"  "),(0,n.kt)("h2",{id:"build-google-test"},"Build Google Test"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cd $GMOCK_HOME/gtest"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"mkdir mybuild"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"cd mybuild"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"cmake .."),"  "),(0,n.kt)("p",null,"The above instructions are from Chapter 1.5 Google Mock section following the\ndirections for Unix."),(0,n.kt)("h2",{id:"other-notes"},"Other Notes"),(0,n.kt)("p",null,"While trying to build the examples from the book I ran into a pthread problem.\nIt seems that pthread needs to be linked after gtest is linked to.  "),(0,n.kt)("p",null,"Changing the order in CMakeLists.txt fixed the error. i.e:"),(0,n.kt)("p",null,"From:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test pthread)"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test gmock)"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test gtest)"),"  "),(0,n.kt)("p",null,"To:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test gmock)"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test gtest)"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"target_link_libraries(test pthread)")))}g.isMDXComponent=!0}}]);