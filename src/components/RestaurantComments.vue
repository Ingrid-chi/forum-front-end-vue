<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#"> {{ comment.User.name }} </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">{{ comment.createdAt }}</footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";

// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "管理者",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//   },
//   isAuthenticated: true,
// };

export default {
  name: "RestaurantComments",

  mixins: [fromNowFilter],

  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },

  // data() {
  //   return {
  //     currentUser: dummyUser.currentUser,
  //   };
  // },

  methods: {
    handleDeleteButtonClick(commentId) {
      console.log("handleDeleteButtonClick", commentId);
      // TODO 請求 API 伺服器刪除 id 為 commentId 的評論
      this.deleteComment(commentId);
      // 觸發父層事件 - $emit( '事件名稱', 傳遞的資料 ),需和父元件的 v-on 監聽搭配
      this.$emit("after-delete-comment", commentId);
    },
    async deleteComment(commentId) {
      try {
        await commentsAPI.delete({commentId});
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
      }
    },
  },

  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>