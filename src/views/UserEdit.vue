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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  profile: {
    id: 1,
    name: "root",
    image: "https://i.imgur.com/58ImzMM.png",
  },
};

export default {
  name: "UserEdit",

  mixins: [emptyImageFilter],

  data() {
    return {
      profile: {
        name: "",
        image: "",
      },
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },

  methods: {
    fetchUser(userId) {
      console.log("fetchUser id:", userId);
      const { profile } = dummyData;
      this.profile = {
        ...this.profile,
        name: profile.name,
        image: profile.image,
      };
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
    handleSubmit(e) {
      // <form></form> 透過 e.target 取得表單本身
      const form = e.target;
      // 透過 new FormData(form) 來產生物件實例，存放在 formData 變數裡
      const formData = new FormData(form);
      // 透過 $emit 發送一個叫做 after-submit 的事件，同時攜帶表單資料
      this.$emit("after-submit", formData);
    },
  },
};
</script>
