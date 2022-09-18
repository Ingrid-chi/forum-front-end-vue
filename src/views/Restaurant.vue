<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 監聽 after-delete-comment 事件，若事件發生了，就去執行 afterDeleteComment 動作」 -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
// STEP 1: 匯入 restaurantsAPI 和 Toast 顯示提示
import restaurantsAPI from './../apis/restaurants';
import { Toast } from './../utils/helpers';
// 取得 currentUser的資料
import { mapState } from 'vuex';

// STEP 2: 移除 dummyData

// 移除 dummyUser

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        // id: -1，代表預期這組初始值會被後端資料覆蓋
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },

  computed: {
    ...mapState(['currentUser'])
  },

 // 發現路由改變了，會重新取得資料
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },

  created() {
    // 在 created 階段觸發 fetchRestaurant 前，先透過 this.$route.params 取得網址結構中，對應到 :id 的內容
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    // STEP 3: 改用 async/await 語法
    async fetchRestaurant(restaurantId) {
     try {
      console.log("fetchRestaurant id:", restaurantId);
      // STEP 4: 透過 restaurantsAPI 取得餐廳資訊
      const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

      if (data.status === 'error') {
        throw new Error(data.message)
      }

      // STEP 5: 透過 restaurantsAPI 取得餐廳資訊
      const { restaurant, isFavorited, isLiked } = data;
      const {
        id,
        name,
        Category,
        image,
        opening_hours: openingHours,
        tel,
        address,
        description,
        Comments
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments;
    } catch (error) {
      // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
      Toast.fire({
        icon: 'error',
        title: '無法取得餐廳資料，請稍後再試'
      });
     }
    },

    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },

    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text, // text: text 的縮寫
        createdAt: new Date(), // 直接抓當下的時間
      });
    },
  },
};
</script>
