<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link v-if="currentUser.isAdmin" to="#" class="text-white mr-3">
          管理員後台
        </router-link>

        <!-- is user is login -->
        <!-- 新增一個 <template> 來包住使用者登入後才會看到的內容、並直接將 v-if 寫在這個 <template>上。 -->
        <!-- 不用 <div> 或其他標籤的原因，是因為如果使用 <div> 等標籤，最後產出的 HTML 就會多包一層 <div>；為了不影響樣式、並保持結構單純，在這裡我們就技巧性地選擇不會產生成 HTML 的<template> 標籤。 -->
        <template v-if="isAuthenticated">
          <router-link to="user" class="text-white mr-3">
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
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
  // Vue 會在沒有資料時使用此預設值
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },

  // 一般來說，只要是畫面上使用的資料，都會使用 created
  created() {
    this.fetchUser();
  },

  methods: {
    // 透過 fetchUser 來模擬「把 dummyUser 蓋過 currentUser」的動作
    // ... 用了 spread 運算子把兩組資料打開
    // 先打開 this.currentUser，再打開 dummyUser.currentUser，因此在 key 值相同時，dummyUser.currentUser 會覆蓋之前的資料
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
};
</script>
