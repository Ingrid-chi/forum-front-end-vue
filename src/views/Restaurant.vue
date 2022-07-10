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

const dummyData = {
  restaurant: {
    id: 1,
    name: "Dovie West",
    tel: "994.374.0553",
    address: "881 Howe Common",
    opening_hours: "08:00",
    description:
      "Et quibusdam ratione in ea ut sint quia. Dolorem cupiditate non ut provident error reprehenderit. Iure tenetur ab doloribus officiis.\n \rAliquid perferendis distinctio voluptatibus vero qui perspiciatis. Natus exercitationem excepturi molestias. Consequuntur vitae ullam enim ut quos doloremque. Rerum quia consectetur magni possimus ut qui molestiae quidem.\n \rIn culpa molestiae illum ut aut aspernatur soluta consequatur. Autem perspiciatis tenetur eos aut deserunt eum vel. Doloribus quis velit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=4.080196809105563",
    viewCounts: 1,
    createdAt: "2022-07-06T10:47:46.000Z",
    updatedAt: "2022-07-07T19:24:20.774Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 51,
        text: "Modi corporis quam sunt sint quibusdam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$NSBIRKQnYTG4EbakrdgzA.pDzIgU6JFKUwA3AnlsUazdE1ZjoesT.",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
      {
        id: 1,
        text: "Nemo necessitatibus aut cumque officia enim.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
      {
        id: 101,
        text: "Necessitatibus quia molestiae aut et recusandae.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

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
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    // 在 created 階段觸發 fetchRestaurant 前，先透過 this.$route.params 取得網址結構中，對應到 :id 的內容
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id:", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
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
