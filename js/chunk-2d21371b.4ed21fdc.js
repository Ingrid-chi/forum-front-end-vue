(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21371b"],{ad68:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),e("hr"),e("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),e("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},s=[],n=(a("d9e2"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-lg-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"contact-info-wrap"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-lg-8"},[e("p",[t._v(t._s(t.restaurant.description))]),e("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:"{ id: restaurant.id }/dashboard"}}},[t._v(" Dashboard ")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),i=[],o=a("2708"),u=a("4cce"),c=a("2fa3"),d={name:"RestaurantDetail",mixins:[o["a"]],props:{initialRestaurant:{type:Object,required:!0}},data(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant(t){this.restaurant={...this.restaurant,...t}}},methods:{async addFavorite(t){try{const{data:e}=await u["a"].addFavorite({restaurantId:t});if("success"!==e.status)throw new Error(e.message)}catch(e){c["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"})}this.restaurant={...this.restaurant,isFavorited:!0}},async deleteFavorite(t){try{const{data:e}=await u["a"].deleteFavorite({restaurantId:t});if("success"!==e.status)throw new Error(e.message)}catch(e){c["a"].fire({icon:"error",title:"無法將餐廳取消最愛，請稍後再試"})}this.restaurant={...this.restaurant,isFavorited:!1}},async addLike(t){try{const{data:e}=await u["a"].addLike({restaurantId:t});if("success"!==e.status)throw new Error(e.message)}catch(e){c["a"].fire({icon:"error",title:"無法對餐廳 like，請稍後再試"})}this.restaurant={...this.restaurant,isLiked:!0}},async deleteLike(t){try{const{data:e}=await u["a"].deleteLike({restaurantId:t});if("success"!==e.status)throw new Error(e.message)}catch(e){c["a"].fire({icon:"error",title:"無法對餐廳取消  like，請稍後再試"})}this.restaurant={...this.restaurant,isLiked:!1}}}},l=d,m=a("2877"),p=Object(m["a"])(l,n,i,!1,null,null,null),h=p.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(a){return e("div",{key:a.id},[e("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleDeleteButtonClick(a.id)}}},[t._v(" Delete ")]):t._e(),e("h3",[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(a.User.name)+" ")])]),e("p",[t._v(t._s(a.text))]),e("footer",{staticClass:"blockquote-footer"},[t._v(t._s(a.createdAt))])]),e("hr")])}))],2)},f=[],v=a("2f62");const C=()=>localStorage.getItem("token");var g={create({restaurantId:t,text:e}){return c["b"].post("/comments",{restaurantId:t,text:e},{headers:{Authorization:"Bearer "+C()}})},delete({commentId:t}){return c["b"].delete("/comments/"+t,{headers:{Authorization:"Bearer "+C()}})}},_={name:"RestaurantComments",mixins:[o["b"]],props:{restaurantComments:{type:Array,required:!0}},methods:{handleDeleteButtonClick(t){console.log("handleDeleteButtonClick",t),this.deleteComment(t),this.$emit("after-delete-comment",t)},async deleteComment(t){try{await g.delete({commentId:t})}catch(e){c["a"].fire({icon:"error",title:"無法刪除評論，請稍後再試"})}}},computed:{...Object(v["b"])(["currentUser"])}},y=_,k=Object(m["a"])(y,b,f,!1,null,null,null),w=k.exports,x=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"text"}},[t._v("留下評論：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),e("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},I=[],D=a("ec26"),R={name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data(){return{text:""}},methods:{handleSubmit(){this.addComment(this.restaurantId,this.text),this.$emit("after-create-comment",{commentId:Object(D["a"])(),restaurantId:this.restaurantId,text:this.text}),this.text=""},async addComment(t,e){try{await g.create({restaurantId:t,text:e})}catch(a){c["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"})}}}},L=R,F=Object(m["a"])(L,x,I,!1,null,null,null),j=F.exports,O=a("c4c3"),U={name:"Restaurant",components:{RestaurantDetail:h,RestaurantComments:w,CreateComment:j},data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},computed:{...Object(v["b"])(["currentUser"])},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{console.log("fetchRestaurant id:",t);const{data:e}=await O["a"].getRestaurant({restaurantId:t});if("error"===e.status)throw new Error(e.message);const{restaurant:a,isFavorited:r,isLiked:s}=e,{id:n,name:i,Category:o,image:u,opening_hours:c,tel:d,address:l,description:m,Comments:p}=a;this.restaurant={id:n,name:i,categoryName:o?o.name:"未分類",image:u,openingHours:c,tel:d,address:l,description:m,isFavorited:r,isLiked:s},this.restaurantComments=p}catch(e){c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}},afterDeleteComment(t){this.restaurantComments=this.restaurantComments.filter(e=>e.id!==t)},afterCreateComment(t){const{commentId:e,restaurantId:a,text:r}=t;this.restaurantComments.push({id:e,RestaurantId:a,User:{id:this.currentUser.id,name:this.currentUser.name},text:r,createdAt:new Date})}}},A=U,P=Object(m["a"])(A,r,s,!1,null,null,null);e["default"]=P.exports}}]);
//# sourceMappingURL=chunk-2d21371b.4ed21fdc.js.map