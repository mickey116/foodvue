(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20e0a066"],{"16a3":function(t,a,s){"use strict";var i=s("cd8c"),e=s.n(i);e.a},8418:function(t,a,s){"use strict";var i=s("c04e"),e=s("9bf2"),n=s("5c6c");t.exports=function(t,a,s){var r=i(a);r in t?e.f(t,r,n(0,s)):t[r]=s}},8657:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"layout"}},[s("Navbar"),s("router-view"),t._m(0)],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"py-3 fixed-bottom"},[s("div",{staticClass:"container d-flex justify-content-between align-items-center"},[s("div",{staticClass:"copyright"},[t._v("© 2020 Puzzle All Rights Reserved.")]),s("ul",{staticClass:"list-inline mb-0"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://github.com/mickey116/PuzzleVue",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square fa-2x text-white"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://github.com/mickey116/PuzzleVue",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram fa-2x text-white"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://github.com/mickey116/PuzzleVue",target:"_blank"}},[s("i",{staticClass:"fab fa-line fa-2x text-white"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"https://github.com/mickey116/PuzzleVue",target:"_blank"}},[s("i",{staticClass:"fab fa-google-plus-square fa-2x text-white"})])])])])])}],n=s("d178"),r={name:"Layout",components:{Navbar:n["a"]}},c=r,l=(s("a521"),s("2877")),o=Object(l["a"])(c,i,e,!1,null,null,null);a["default"]=o.exports},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),n=s("e8b5"),r=s("861d"),c=s("7b0b"),l=s("50c4"),o=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),v=s("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",p=v>=51||!e((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),C=u("concat"),m=function(t){if(!r(t))return!1;var a=t[b];return void 0!==a?!!a:n(t)},_=!p||!C;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,i,e,n,r=c(this),u=d(r,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?r:arguments[a],m(n)){if(e=l(n.length),f+e>h)throw TypeError(g);for(s=0;s<e;s++,f++)s in n&&o(u,f,n[s])}else{if(f>=h)throw TypeError(g);o(u,f++,n)}return u.length=f,u}})},"9c7f":function(t,a,s){},a521:function(t,a,s){"use strict";var i=s("9c7f"),e=s.n(i);e.a},cd8c:function(t,a,s){},d178:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-white position-relative fixed-top",attrs:{id:"navbar"}},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar px-0 navbar-expand-lg navbar-light bg-white custom-navbar"},[t._m(0),s("router-link",{staticClass:"navbar-brand mr-0",attrs:{to:"/"}},[t._v(" PUZZLE")]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav mx-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/goods"}},[t._v("產品列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("關於我們")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/getcoupon"}},[t._v("專屬優惠")])],1)])]),s("div",{staticClass:"d-flex user"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/favorite"}},[s("i",{staticClass:"fas fa-heart"})]),s("div",{staticClass:"dropdown ml-auto cart"},[s("button",{staticClass:"btn btn-md position-relative nav-link",attrs:{"data-toggle":"dropdown","data-flip":"false"}},[s("i",{staticClass:"fas fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t.cart.length?s("span",{staticClass:"badge badge-pill badge-danger "},[t._v(t._s(t.cart.length))]):t._e()]),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[t.cart.length?s("div",{staticClass:"p-2"},[s("h6",{staticClass:"text-center"},[t._v("已選擇商品")]),s("table",{staticClass:"table text-center table-sm"},[s("tbody",t._l(t.cart,(function(a){return s("tr",{key:a.product.id},[s("td",{staticClass:"align-middle",attrs:{width:"30"}},[s("a",{staticClass:"text-secondary trash",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.removeCartItem(a.product.id)}}},[s("i",{staticClass:"far fa-trash-alt ",attrs:{"aria-hidden":"true"}})])]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),s("td",{staticClass:"align-middle",attrs:{width:"80"}},[t._v(" "+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")]),s("td",{staticClass:"align-middle text-right"},[t._v("$"+t._s(a.product.price))])])})),0)]),s("router-link",{staticClass:"btn btn-primary btn-block text-white",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-cart-arrow-down"}),t._v(" 結帳去 ")])],1):s("div",{staticClass:"p-2"},[s("h6",{staticClass:"text-center mb-3"},[t._v("購物車沒有商品喔！")]),s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"btn btn-primary text-white ",attrs:{to:"/goods"}},[t._v(" 選購去 ")])],1)])])])],1)],1)])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n=(s("99af"),{name:"Navbar",data:function(){return{cart:{},isLoading:!1}},methods:{getCart:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io","/api/").concat("b2a0a13b-3f39-4e27-abe0-72d7b7e3eda8","/ec/shopping");t.isLoading=!0,t.$http.get(a).then((function(a){t.cart=a.data.data,t.isLoading=!1}))},removeCartItem:function(t){var a=this,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("b2a0a13b-3f39-4e27-abe0-72d7b7e3eda8","/ec/shopping/").concat(t);a.isLoading=!0,a.$http.delete(s).then((function(){a.getCart(),a.isLoading=!1}))}},created:function(){var t=this;this.getCart(),this.$bus.$on("getcart",(function(){t.getCart()}))}}),r=n,c=(s("16a3"),s("2877")),l=Object(c["a"])(r,i,e,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-20e0a066.192b082e.js.map