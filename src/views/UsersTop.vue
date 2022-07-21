<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <!-- 使用 UsersTopCard 元件 -->
    <div class="row text-center">
      <UsersTopCard v-for="user in users" :key="user.id" :initialUser="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UsersTopCard from "./../components/UsersTopCard";

// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    // 決定要有幾個小孩(UsersTopCard)，上面 v-for="user in users"
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    // fetchUsers() {
    //   const { users } = dummyData;
    //   this.users = users;
    // },
  },
};
</script>
