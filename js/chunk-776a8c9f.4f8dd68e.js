(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-776a8c9f"],{"1cf5":function(t,e,n){},a609:function(t,e,n){"use strict";var r=n("1cf5"),a=n.n(r);a.a},c84f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("div",{staticClass:"d-flex"},[n("h1",[t._v("Admins ")]),n("b-button",{staticClass:"ml-auto mb-auto mt-auto",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.$router.push({name:"Add User"})}}},[t._v("Add User")])],1),n("b-card",[n("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields,busy:t.loading.main},scopedSlots:t._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger "},[n("b-spinner",{staticClass:"align-middle",attrs:{variant:"primary",type:"grow"}})],1)]},proxy:!0},{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(e.item.first_name+" "+e.item.last_name)+" ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{staticClass:"ml-1 mr-1 small-btn",attrs:{variant:"primary",size:"sm"},on:{click:function(n){return t.$router.push({name:"User Profile",params:{id:e.item.id}})}}},[t._v("Profile")]),n("b-button",{staticClass:"ml-1 mr-1 small-btn",attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.$router.push({name:"Edit User",params:{id:e.item.id}})}}},[t._v("Edit")]),n("b-button",{staticClass:"ml-1 mr-1 small-btn",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.$bvModal.show(""+e.item.id)}}},[t._v("delete")]),n("b-modal",{attrs:{id:""+e.item.id,centered:"",title:"Delete","ok-variant":"danger","ok-title":"Yes","cancel-title":"No"},on:{ok:function(n){return t.deleteItem(e.item.id)}}},[n("div",[t._v("Are you sure that you want to delete this?")])])]}}])})],1)],1)],1)},a=[],i=n("bc3a"),o=n.n(i),s=n("e4b4"),c={name:"admin",data:function(){return{loading:{main:!1},fields:[{key:"name",label:"Name"},{key:"email"},{key:"location",label:"Location"},{key:"actions",label:"Actions"}],items:[]}},methods:{getData:function(){var t=this;this.loading.main=!0,o.a.get("/admin/v1/roles?role=admin").then((function(e){t.loading.main=!1,console.log(e),t.items=e.data.data[0].user})).catch((function(e){t.loading.main=!1,console.error(e)}))},deleteItem:function(t){var e=this;o.a.delete("/admin/v1/roles/".concat(t)).then((function(){Object(s["showToast"])("success","Success","Item deleted successfully!",e),e.items=e.items.filter((function(e){return e.id!=t}))})).catch((function(t){for(var n in e.loading.submit=!1,t.response.data.errors)Object(s["showToast"])("danger","".concat(n),"".concat(t.response.data.errors[n][0]),e);console.log(t.response)}))}},mounted:function(){this.getData()},watch:{$route:{immediate:!0,handler:function(t){t.query&&t.query.page&&(this.activePage=Number(t.query.page))}}}},l=c,u=(n("a609"),n("2877")),d=Object(u["a"])(l,r,a,!1,null,"092cec8a",null);e["default"]=d.exports},e4b4:function(t,e){function n(t,e){return s(t)||o(t,e)||a(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){a=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(a)throw i}}return n}}function s(t){if(Array.isArray(t))return t}function c(t,e,n,r){r.$bvToast.toast(n,{title:"".concat(e),variant:t,solid:!0,toaster:"b-toaster-top-right",autoHideDelay:5e3})}function l(t){for(var e=0,r=Object.entries(t);e<r.length;e++){var a=n(r[e],1),i=a[0];""!=t[i]&&null!=t[i]||delete t[i]}return t}function u(t){for(var e=0,r=Object.entries(t);e<r.length;e++){var a=n(r[e],1),i=a[0];t[i]="workshops"==i||"gallery"==i||"medical_services"==i?[]:""}return t}function d(t){var e,n=new FileReader;return n.onload=function(t){e=t},n.onerror=function(t){alert(t)},n.readAsDataURL(t),e}t.exports={showToast:c,removeEmptyProperties:l,imgUpload:d,resetProperties:u}}}]);
//# sourceMappingURL=chunk-776a8c9f.4f8dd68e.js.map