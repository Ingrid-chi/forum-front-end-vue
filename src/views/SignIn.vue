<template>
  <div class="container py-5">
    <!-- @ 是 v-on 縮寫; prevent 取消瀏覽器預設行為(發送表單資料，更新畫面),才能用 JS 檢查使用者的輸入，並進一步處理 API 的操作; stop 是 stopPropagation()指阻止事件冒泡 -->
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <!-- <a> 標籤，改成 <router-link>, 因為 Vue Router 中，大多數的連結並不是真的要重新從伺服器取得整個畫面，而只是去渲染不同的 component 而已 -->
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        email: this.email,
        password: this.password,
      });

      // TODO 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>
