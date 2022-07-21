<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

// STEP 1: 匯入 adminAPI 和錯誤提示用的 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

// 刪除 dummyData

export default {
  name: "AdminRestaurantEdit",

  components: {
    AdminRestaurantForm,
  },

  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },

      isProcessing: false,
    };
  },

  // 透過 this.$route.params 取得網址上的 id，才會知道現在編輯的是哪一筆餐廳資料
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },

  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },

  methods: {
    // STEP 2: 改成 async...await 語法
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });

        // STEP 3: 透過解構賦值將需要的資料取出
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        // STEP 4: 將資料帶入 Vue 內
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };
      } catch (error) {
        //  STEP 5: 錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
        console.log("error", error);
      }
    },

    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;

        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料，請稍後再試",
        });
        console.log("error", error);
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
