<template>
  <!-- 首要處理「按下 Submit 按鈕」後的流程(事件的監聽和處理) -->
  <!-- 「提交表單」的動作發生在 <form> 而不是 <button>，所以監聽綁在 <form> -->
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";

export default {
  name: "CreateComment",

  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      text: "",
    };
  },

  methods: {
    handleSubmit() {
      // TODO 向 API 發送 POST 請求
      this.addComment(this.restaurantId, this.text);
      // 伺服器新增 Comment 成功後...
      this.$emit("after-create-comment", {
        commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        text: this.text,
      });
      this.text = ""; // 將表單內的資料清空
    },

    async addComment(restaurantId, text) {
      try {
        await commentsAPI.create({ restaurantId, text });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試",
        });
      }
    },
  },
};
</script>