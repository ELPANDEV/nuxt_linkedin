(window.webpackJsonp=window.webpackJsonp||[]).push([[39,8,31],{283:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({}),o=r(2),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",width:"16",height:"16",focusable:"false"}},[t("path",{attrs:{d:"M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"}})])}),[],!1,null,null,null);t.default=component.exports},313:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{user:Object}}),o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"v-user-network"},[r("v-picture",{staticClass:"sized",attrs:{src:e.x.get_image_src(e.user.bg_image)}}),e._v(" "),r("v-button",{staticClass:"close center"},[r("v-svg-close")],1),e._v(" "),r("header",[r("v-picture",{staticClass:"rounded sized",attrs:{src:e.user.image.src}}),e._v(" "),r("h3",[e._v(e._s(e.user.name))]),e._v(" "),r("p",[e._v(e._s(e.user.description))]),e._v(" "),r("span",[e._v(e._s(e.user.followers_count)+" seguidores")])],1),e._v(" "),r("footer",[r("v-button",[e._v("Seguir")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VPicture:r(189).default,VSvgClose:r(283).default,VButton:r(99).default})},323:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({}),o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"v-widget-network-users"},[r("header",[r("h3",[e._v("Te recomendamos")]),e._v(" "),r("v-button",[e._v("Ver todo")])],1),e._v(" "),r("div",{staticClass:"body"},e._l(e.store.users.concat(e.store.users,e.store.users),(function(t,i){return r("v-user-network",{key:"user"+i+e.uuid,attrs:{user:t}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VButton:r(99).default,VUserNetwork:r(313).default})}}]);