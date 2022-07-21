<template>
  <div class="container py-5">
    <!-- 監聽來自子元件的 after-submit 事件，若收到事件，就觸發 handleAfterSubmit 函式 -->
    <AdminRestaurantForm
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
    <!-- 餐廳表單 AdminRestaurantForm -->
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";
// STEP 1: 匯入 adminAPI 和錯誤提示用的 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantNew",

  components: {
    AdminRestaurantForm,
  },

  data() {
    return {
      isProcessing: false,
    };
  },

  methods: {
    // STEP 2: 改成 async...await 語法
    async handleAfterSubmit(formData) {
      try {
        // STEP 3: 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // STEP 4: 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },

    // handleAfterSubmit(formData) {
    // 取得表單內容，需透過 entries() 來逐條列出表單的欄位和值
    // for (let [name, value] of formData.entries()) {
    // console.log(name + ":" + value);
    // }
    // },
  },
};
</script>
