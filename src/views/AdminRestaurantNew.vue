<template>
  <div class="container py-5">
    <!-- 監聽來自子元件的 after-submit 事件，若收到事件，就觸發 handleAfterSubmit 函式 -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
    <!-- 餐廳表單 AdminRestaurantForm -->
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

export default {
  name: "AdminRestaurantNew",

  components: {
    AdminRestaurantForm,
  },

  methods: {
    handleAfterSubmit(formData) {
      // 取得表單內容，需透過 entries() 來逐條列出表單的欄位和值
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>
