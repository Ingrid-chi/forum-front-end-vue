(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container py-5"},[s("UserProfileCard",{attrs:{user:t.user,initialIsFollowed:t.isFollowed}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("UserFollowingsCard",{attrs:{followings:t.followings}}),s("UserFollowersCard",{attrs:{followers:t.followers}})],1),s("div",{staticClass:"col-md-8"},[s("UserCommentsCard",{attrs:{comments:t.comments}}),s("UserFavoritedRestaurantsCard",{attrs:{favoritedRestaurants:t.favoritedRestaurants}})],1)])],1)},a=[],i=(e("d9e2"),function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:t._f("emptyImage")(t.user.image),width:"300px",height:"300px"}})]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.user.name)+" ")]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.user.email)+" ")]),s("ul",{staticClass:"list-unstyled"},[s("li",[s("strong",[t._v(t._s(t.user.commentsLength))]),t._v(" 已評論餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.user.favoritedRestaurantsLength))]),t._v(" 收藏的餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.user.followingsLength))]),t._v(" followings (追蹤者) ")]),s("li",[s("strong",[t._v(t._s(t.user.followersLength))]),t._v(" followers (追隨者) ")])]),t.currentUser.id===t.user.id?[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:t.user.id}}}},[t._v(" Edit ")])]:[t.isFollowed?s("button",{staticClass:"btn btn-danger",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 取消追蹤 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 追蹤 ")])]],2)])])])}),l=[],o=e("2708"),n=e("4cce"),d=e("2fa3"),c={name:"UserProfileCard",mixins:[o["a"]],props:{user:{type:Object,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data(){return{isFollowed:this.initialIsFollowed}},methods:{async addFollowing(t){try{const{data:s,statusText:e}=await n["a"].addFollowing({userId:t});if("OK"!==e||"success"!==s.status)throw new Error(e);this.isFollowed=!0}catch(s){d["a"].fire({type:"error",title:"無法加入追蹤，請稍後再試"})}},async deleteFollowing(t){try{const{data:s,statusText:e}=await n["a"].deleteFollowing({userId:t});if("OK"!==e||"success"!==s.status)throw new Error(e);this.isFollowed=!1}catch(s){d["a"].fire({type:"error",title:"無法取消追蹤，請稍後再試"})}}},watch:{initialIsFollowed(t){this.isFollowed=t}}},u=c,m=e("2877"),g=Object(m["a"])(u,i,l,!1,null,null,null),f=g.exports,w=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.comments.length))]),t._v(" 已評論餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return s("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t._f("emptyImage")(e.Restaurant.image),width:"60",height:"60"}})])})),1)])},h=[],v={name:"UserCommentsCard",mixins:[o["a"]],props:{comments:{type:Array,required:!0}}},p=v,_=Object(m["a"])(p,w,h,!1,null,null,null),C=_.exports,y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.favoritedRestaurants.length))]),t._v(" 收藏的餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.favoritedRestaurants,(function(e){return s("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},F=[],b={name:"UserFavoriteRestaurantsCard",mixins:[o["a"]],props:{favoritedRestaurants:{type:Array,required:!0}}},U=b,R=Object(m["a"])(U,y,F,!1,null,null,null),x=R.exports,k=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.followers.length))]),t._v(" followers (追隨者) ")]),s("div",{staticClass:"card-body"},t._l(t.followers,(function(e){return s("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},I=[],L={name:"UserFollowersCard",mixins:[o["a"]],props:{followers:{type:Array,required:!0}}},O=L,j=Object(m["a"])(O,k,I,!1,null,null,null),q=j.exports,P=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.followings.length))]),t._v(" followings (追蹤者) ")]),s("div",{staticClass:"card-body"},t._l(t.followings,(function(e){return s("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},A=[],E={name:"UserFollowingsCard",mixins:[o["a"]],props:{followings:{type:Array,required:!0}}},K=E,T=Object(m["a"])(K,P,A,!1,null,null,null),D=T.exports,J={name:"User",components:{UserProfileCard:f,UserCommentsCard:C,UserFavoritedRestaurantsCard:x,UserFollowersCard:q,UserFollowingsCard:D},props:{initialUser:{type:Object,default:()=>({name:"",image:""})}},data(){return{user:{id:0,name:"",email:"",image:"",followingsLength:0,followersLength:0,commentsLength:0,favoritedRestaurantsLength:0},comments:[],favoritedRestaurants:[],followers:[],followings:[],isFollowed:!1}},created(){const{id:t}=this.$route.params;this.fetchUser(t)},beforeRouteUpdate(t,s,e){const{id:r}=t.params;this.fetchUser(r),e()},methods:{async fetchUser(t){try{const{data:s,statusText:e}=await n["a"].get({userId:t}),{profile:r,isFollowed:a}=s;if("OK"!==e)throw new Error(e);this.user={...this.user,id:r.id,image:r.image,name:r.name,email:r.email,followingsLength:r.Followings.length,followersLength:r.Followers.length,commentsLength:r.Comments.length,favoritedRestaurantsLength:r.FavoritedRestaurants.length},this.isFollowed=a,this.followings=r.Followings,this.followers=r.Followers,this.favoritedRestaurants=r.FavoritedRestaurants,this.comments=r.Comments.filter(t=>t.Restaurant)}catch(s){d["a"].fire({type:"error",title:"無法取得使用者資料，請稍後再試"})}}}},B=J,$=Object(m["a"])(B,r,a,!1,null,null,null);s["default"]=$.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.5d96fb74.js.map