<template>
  <!-- 監聽 submit 事件，並且設定 handleSubmit 函式 -->
  <!-- 只有在 isLoading: false 的情況下，才會把表單顯示給使用者 -->
  <form v-show="!isLoading" @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <!-- 使用 :src="restaurant.image" 來綁定暫存網址 -->
      <!-- 使用 v-if 來檢查網址是否存在 (也就是圖片是否存在)，有若的話，就把圖片顯示出來 -->
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <!-- @change="handleFileChange" 監聽使用者是否有和「選擇檔案」按鈕互動 -->
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
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>

<script>
// STEP 1: 匯入 adminAPI 和錯誤提示用的 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

// STEP 5: 移除 dummyData

export default {
  name: "AdminRestaurantForm",

  // props 屬性裡的 default，這是在寫入預設值，這裡沒有用 required 來設定必填，當資料不是必填時，比較好的習慣是要用 default 設定一組預設值
  // 要為物件或陣列類型的資料設定預設值時，需要使用 () => ({}) 的寫法來回傳物件。注意括號，在 arrow function 的語法裡，() => {} 是一般的函式，但如果你想要回傳 object literal，因為 object literal 本身也有一個大括號，所以要在外層加一個小括號。
  props: {
    initialRestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          categoryId: "",
          tel: "",
          address: "",
          description: "",
          image: "",
          openingHours: "",
        };
      },
    },

    isProcessing: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      restaurant: {
        ...this.initialRestaurant,
      },
      categories: [],
      isLoading: true,
    };
  },

  // 利用 watch 來監控 initialRestaurant 屬性，一旦 API 回傳餐廳資料後，initialRestaurant 變更，就會要求更新表單裡的 restaurant 資料
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },

  created() {
    this.fetchCategories();
  },

  methods: {
    // STEP 2: 改成 async...await 語法
    async fetchCategories() {
      try {
        // STEP 3: 向伺服器取得餐廳類別清單
        const response = await adminAPI.categories.get();
        const { data } = response;
        // const { data } = await adminAPI.categories.get();
        console.log(response);
        if (response.status !== 200) {
          throw new Error(data.message);
        }

        this.categories = data.categories;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        // STEP 4: 在 catch 中進行錯誤處理
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },
    // fetchCategories() {
    //   this.categories = dummyData.categories;
    // },

    handleFileChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },

    handleSubmit(e) {
      // 狀況處理：避免使用者漏填
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱",
        });
        return;
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別",
        });
        return;
      }

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
