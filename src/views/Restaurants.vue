<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!-- 因為 RestaurantCard 的 isFavorited 跟 isLiked 會改變 restaurant 所以改名為 initial-restaurant -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <!-- 加 categoryId 是防止在餐廳類別標籤頁內選取分頁時，直接跳回全部標籤的分頁頁籤 -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Dovie West",
      tel: "994.374.0553",
      address: "881 Howe Common",
      opening_hours: "08:00",
      description: "Et quibusdam ratione in ea ut sint quia. Dolorem c",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.080196809105563",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Della Raynor II",
      tel: "1-311-660-8908 x46917",
      address: "37296 Abe Lodge",
      opening_hours: "08:00",
      description: "Voluptas magnam reiciendis iure. Reiciendis non be",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.35757111816216",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Magnolia Nikolaus",
      tel: "(258) 288-6797",
      address: "053 Jacobs Keys",
      opening_hours: "08:00",
      description: "consequatur at veniam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.86115930310543",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Trevion Beer",
      tel: "470.946.9757 x921",
      address: "8832 Stanton Ridge",
      opening_hours: "08:00",
      description: "Eius dolores repellendus molestias cumque minima e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.28008969873773",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Elena Cummerata",
      tel: "1-441-598-5179 x902",
      address: "40756 Caden Villages",
      opening_hours: "08:00",
      description: "Voluptatibus voluptatem repellat consequatur quaer",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.68448232548256",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Walker Kirlin",
      tel: "895-680-8401 x028",
      address: "133 Deonte Squares",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.676565682448273",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Esteban Rogahn",
      tel: "941-055-8370",
      address: "7327 June Fort",
      opening_hours: "08:00",
      description: "quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.8883556229971612",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Shakira Dietrich",
      tel: "(725) 760-4982",
      address: "279 Keebler Course",
      opening_hours: "08:00",
      description: "Aut qui molestiae ut quia sit dicta odit unde. Off",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.29393359994512",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Stephen Hudson",
      tel: "180.613.3309 x5767",
      address: "5959 Grady Knolls",
      opening_hours: "08:00",
      description: "vitae et architecto",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.344720971275784",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Alanna Koelpin",
      tel: "051-623-0441",
      address: "37523 Torp Squares",
      opening_hours: "08:00",
      description: "Optio modi sit quos quod tempore eligendi nisi et ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.21855009282969",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    //  categoryId 和 totalPage 寫 -1，是因為這兩個資料一定來自後端(必須要被後端覆寫掉)，在後端提供資料之前，前端無法預測。
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
