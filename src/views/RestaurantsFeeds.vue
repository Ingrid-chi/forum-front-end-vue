<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <!-- <NewestRestaurants /> -->
        <!-- 在父元件綁定 v-bind:restaurants 給子元件 <NewestRestaurants> 取得其屬性-->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from "./../apis/restaurants";
// error
import { Toast } from "./../utils/helpers";

// STEP 2-1： 將 dummyData 刪除

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getFeeds();

        const { restaurants, comments } = response.data;

        this.restaurants = restaurants;
        this.comments = comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
        console.log("response", response);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
        console.log("error", error);
      }
    },

    // fetchFeeds() {
    //   const { restaurants, comments } = dummyData;
    //   this.restaurants = restaurants;
    // comment.Restaurant 是 null 就不回傳
    // 如果 comment.Restaurant 存在，而且 comment.text 也存在的話，資料才會被保留下來
    //   this.comments = comments.filter(
    //     (comment) => comment.Restaurant && comment.text
    //   );
    // },
  },
};
</script>
