(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-183ec089"],{"5fa1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-card",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h2",{staticClass:"mb-0"},[t._v("New Order")])]},proxy:!0}])},[s("b-card-body",[s("b-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[s("b-row",[s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Title")]),s("b-input",{attrs:{placeholder:"Title",required:""},model:{value:t.info.title,callback:function(e){t.$set(t.info,"title",e)},expression:"info.title"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Price")]),s("b-input",{attrs:{placeholder:"Price",required:""},model:{value:t.info.price,callback:function(e){t.$set(t.info,"price",t._n(e))},expression:"info.price"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Description")]),s("b-textarea",{attrs:{placeholder:"Description",required:""},model:{value:t.info.description,callback:function(e){t.$set(t.info,"description",e)},expression:"info.description"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("User")]),s("b-input-group",{staticClass:"mb-3",scopedSlots:t._u([{key:"append",fn:function(){return[s("b-input-group",{attrs:{variant:"primary"}},[s("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.search()}}},[s("CIcon",{attrs:{name:"cil-search"}})],1)],1)]},proxy:!0}])},[s("b-form-input",{attrs:{placeholder:"Search user by email"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),t.loading.users?t._e():s("b-form-select",{attrs:{required:""},model:{value:t.info.user_id,callback:function(e){t.$set(t.info,"user_id",e)},expression:"info.user_id"}},[t._l(t.users,(function(e){return s("b-form-select-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.first_name+" "+e.last_name))])})),s("b-form-select-option",{attrs:{value:void 0,hidden:""}},[t._v("Select User ("+t._s(t.users.length)+")")])],2),t.loading.users?s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{type:"grow",variant:"primary"}})],1):t._e()],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Quantity")]),s("b-input",{attrs:{placeholder:"Quantity",required:""},model:{value:t.info.quantity,callback:function(e){t.$set(t.info,"quantity",e)},expression:"info.quantity"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Image")]),s("b-form-file",{ref:"image",attrs:{accept:"image/*",placeholder:"Select Image"},model:{value:t.info.image_path,callback:function(e){t.$set(t.info,"image_path",e)},expression:"info.image_path"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("First Name")]),s("b-input",{attrs:{placeholder:"First Name",required:""},model:{value:t.info.first_name,callback:function(e){t.$set(t.info,"first_name",e)},expression:"info.first_name"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Last Name")]),s("b-input",{attrs:{placeholder:"Last Name",required:""},model:{value:t.info.last_name,callback:function(e){t.$set(t.info,"last_name",e)},expression:"info.last_name"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Address")]),s("b-input",{attrs:{placeholder:"Address",required:""},model:{value:t.info.address,callback:function(e){t.$set(t.info,"address",e)},expression:"info.address"}})],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"6"}},[s("label",{staticClass:"pb-1 d-block"},[t._v("Phone")]),s("b-input",{attrs:{placeholder:"Phone",required:"",type:"tel"},model:{value:t.info.phone,callback:function(e){t.$set(t.info,"phone",t._n(e))},expression:"info.phone"}})],1),[s("b-col",{attrs:{sm:"12"}},[s("b-row",[s("b-col",{staticClass:"mt-2",attrs:{sm:"4"}},[s("label",[t._v("Country")]),s("b-form-select",{attrs:{required:"",options:t.countries,"text-field":"name","value-field":"id"},model:{value:t.info.country_id,callback:function(e){t.$set(t.info,"country_id",e)},expression:"info.country_id"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("Select Country")])],1)],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"4"}},[s("label",[t._v("States")]),s("b-form-select",{attrs:{required:"",disabled:t.states.length<1,options:t.states,"text-field":"name","value-field":"id"},model:{value:t.info.state_id,callback:function(e){t.$set(t.info,"state_id",e)},expression:"info.state_id"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("Select State")])],1)],1),s("b-col",{staticClass:"mt-2",attrs:{sm:"4"}},[s("label",[t._v("States")]),s("b-form-select",{attrs:{disabled:t.cities.length<1,options:t.cities,"text-field":"name","value-field":"id"},model:{value:t.info.city_id,callback:function(e){t.$set(t.info,"city_id",e)},expression:"info.city_id"}},[s("b-form-select-option",{attrs:{value:""}},[t._v("Select City")])],1)],1)],1)],1)],s("div",{staticClass:"d-flex w-100"},[s("b-button",{staticClass:"w-25 mt-3 ml-auto mr-3",attrs:{variant:"success",disabled:t.loading.submit,type:"submit"}},[t.loading.submit?t._e():s("span",[t._v("Submit")]),t.loading.submit?s("b-spinner",{attrs:{small:"",type:"grow"}}):t._e()],1)],1)],2)],1)],1)],1)],1)},a=[],n=s("bc3a"),o=s.n(n),r=s("e4b4"),l={name:"AddOrder",data:function(){return{info:{country_id:"",state_id:"",city_id:""},key:"",states:[],users:[],loading:{submit:!1,users:!1}}},computed:{countries:function(){return this.$store.state.countries},cities:function(){return this.$store.state.cities}},methods:{search:function(){var t=this;this.loading.users=!0,o.a.get("/admin/v1/users/search/".concat(this.key)).then((function(e){t.loading.users=!1,t.users=e.data.data})).catch((function(){t.loading.users=!1}))},getUsers:function(){var t=this;o.a.get("/admin/v1/users").then((function(e){t.users=e.data.data})).catch((function(t){console.error(t)}))},submit:function(){var t=this,e=new FormData;e.append("address",this.info.address),e.append("city_id",this.info.city_id),e.append("country_id",this.info.country_id),e.append("state_id",this.info.state_id),e.append("description",this.info.description),e.append("first_name",this.info.first_name),e.append("last_name",this.info.last_name),e.append("image_path",this.info.image_path),e.append("phone",this.info.phone),e.append("phone_code",this.info.phone_code),e.append("price",this.info.price),e.append("quantity",this.info.quantity),e.append("user_id",this.info.user_id),e.append("title",this.info.title),this.loading.submit=!0,o.a.post("/api/v1/orders",e).then((function(e){console.log(e),t.loading.submit=!1,Object(r["showToast"])("success","Success","Order has been created successfully!",t),t.info=Object(r["resetProperties"])(t.info),t.$refs.form.reset()})).catch((function(e){for(var s in t.loading.submit=!1,e.response.data.errors)Object(r["showToast"])("danger","".concat(s),"".concat(e.response.data.errors[s][0]),t);console.log(e.response)}))}},watch:{key:function(){this.search()},"info.country_id":function(){var t=this;if(this.info.country_id){var e=this.countries.find((function(e){return e.id==t.info.country_id}));this.info.phone_code=e.phonecode,o.a.get("/api/v1/countries/states/".concat(this.info.country_id)).then((function(e){t.states=e.data.data,console.log(e)}))}},"info.state_id":function(){this.info.state_id&&this.$store.dispatch("getCities",this.info.state_id)}},mounted:function(){this.$store.dispatch("getCountries")}},c=l,u=s("2877"),d=Object(u["a"])(c,i,a,!1,null,null,null);e["default"]=d.exports},e4b4:function(t,e){function s(t,e){return r(t)||o(t,e)||a(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return n(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],i=!0,a=!1,n=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done);i=!0)if(s.push(o.value),e&&s.length===e)break}catch(l){a=!0,n=l}finally{try{i||null==r["return"]||r["return"]()}finally{if(a)throw n}}return s}}function r(t){if(Array.isArray(t))return t}function l(t,e,s,i){i.$bvToast.toast(s,{title:"".concat(e),variant:t,solid:!0,toaster:"b-toaster-top-right",autoHideDelay:5e3})}function c(t){for(var e=0,i=Object.entries(t);e<i.length;e++){var a=s(i[e],1),n=a[0];""!=t[n]&&null!=t[n]||delete t[n]}return t}function u(t){for(var e=0,i=Object.entries(t);e<i.length;e++){var a=s(i[e],1),n=a[0];t[n]="workshops"==n||"gallery"==n||"medical_services"==n?[]:""}return t}function d(t){var e,s=new FileReader;return s.onload=function(t){e=t},s.onerror=function(t){alert(t)},s.readAsDataURL(t),e}t.exports={showToast:l,removeEmptyProperties:c,imgUpload:d,resetProperties:u}}}]);
//# sourceMappingURL=chunk-183ec089.c86652fa.js.map