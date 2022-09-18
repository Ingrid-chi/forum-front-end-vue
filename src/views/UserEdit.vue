<template>
  <div class="container py-5">
    <!-- <User /> -->
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="profile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>

        <img
          v-if="profile.image"
          :src="profile.image | emptyImage"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserEdit",

  mixins: [emptyImageFilter],

  data() {
    return {
      id: 0,
      image: "",
      name: "",
      email: "",
      // STEP 6: 新增並使用 isProcessing 屬性
      isProcessing: false,
    };
  },

  // STEP 2: 將 currentUser 的資料從 Vuex 中取出
  computed: {
    ...mapState(["currentUser"]),
  },
  // STEP 4: 透過 watch 監控 currentUser 有無變化
  watch: {
    currentUser() {
      this.setUser();
    },
  },

  created() {
    // STEP 5: 若使用者嘗試直接從路由進入其他使用者的 edit 頁
    const { id } = this.$route.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
  },

  // STEP 6: 路由改變時重新抓取資料
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
    next();
  },

  methods: {
    // STEP 3: 將 currentUser 的資料帶入該組件的 Vue 資料內
    setUser() {
      this.id = this.currentUser.id;
      this.image = this.currentUser.image;
      this.name = this.currentUser.name;
      this.email = this.currentUser.email;
    },

    handleFileChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.profile.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.profile.image = imageURL;
      }
    },

    // 準備傳送到後端伺服器
    async handleSubmit(e) {
      if (!this.name) {
        Toast.fire({
          type: "warning",
          title: "您尚未填寫姓名",
        });
        return;
      }
      // <form></form> 透過 e.target 取得表單本身
      const form = e.target;
      // 透過 new FormData(form) 來產生物件實例，存放在 formData 變數裡
      const formData = new FormData(form);
      // 透過 $emit 發送一個叫做 after-submit 的事件，同時攜帶表單資料
      // this.$emit("after-submit", formData);

      try {
        this.isProcessing = true;
        // STEP 3: 呼叫 API 更新使用者資料
        const { data, statusText } = await usersAPI.update({
          userId: this.id,
          formData,
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        // STEP 4: 更新完成後轉址到使用者詳細頁
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>