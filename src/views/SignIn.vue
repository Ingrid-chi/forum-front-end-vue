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

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
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
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "SingIn",

  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },

  methods: {
    // async / await 用 try {} catch() {} 寫法
    async handleSubmit() {
      try {
        // 如果 email 或 password 為空，則使用 Toast 提示
        // 然後 return 不繼續往後執行
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        this.isProcessing = true;

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 email 和 password
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        // 取得 API 請求後的資料
        const { data } = response;

        // 如果 data.status 不是 success 的話，就需要透過 throw 拋出錯誤，另外在錯誤訊息帶入 data.message
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將 token 存放在 localStorage 內
        localStorage.setItem("token", data.token);

        // 成功登入後轉址到餐廳首頁
        this.$router.push("/restaurants");
        console.log("response", response);
      } catch (error) {
        // 將密碼欄位清空
        this.password = "";
        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing = false;

        // 顯示錯誤提示
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
        console.log("error", error);
      }
    },
  },

  // ※※※※※ promise 寫法 ※※※※※
  // authorizationAPI
  // .signIn({
  // email: this.email,
  // password: this.password,
  // })
  // .then((response) => {
  // 取得 API 請求後的資料
  // const { data } = response;

  // 如果 data.status 不是 success 的話，就需要透過 throw 拋出錯誤，另外在錯誤訊息帶入 data.message
  // if (data.status !== "success") {
  // throw new Error(data.message);
  // }
  // 將 token 存放在 localStorage 內
  // localStorage.setItem("token", data.token);

  // 成功登入後轉址到餐廳首頁
  // this.$router.push("/restaurants");

  // console.log("response", response);
  // })
  // .catch((error) => {
  // 將密碼欄位清空
  // this.password = "";
  // 因為登入失敗，所以要把按鈕狀態還原
  //   this.isProcessing = false;

  // 顯示錯誤提示
  // Toast.fire({
  // icon: "warning",
  // title: "請確認您輸入了正確的帳號密碼",
  // });

  //   console.log("error", error);
  // });

  // ※※※※※ 未取得 API 寫法 ※※※※※
  // const data = JSON.stringify({
  //   email: this.email,
  //   password: this.password,
  // });
  // TODO 向後端驗證使用者登入資訊是否合法
  // console.log("data", data);
  //   },
  // },
};
</script>
