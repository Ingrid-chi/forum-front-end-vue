<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <!-- 記得把 src v-bind 才取得到資料，不用 {{}} -->
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">
          {{
            restaurant.Category !== null
              ? restaurant.Category.name
              : "餐廳未分類"
          }}
        </span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantCard",

  mixins: [emptyImageFilter],

  props: {
    initialRestaurant: {
      // 在父層用 for 迴圈從陣列中取出，所以是物件
      type: Object,
      required: true,
    },
  },
  data() {
    // 把傳進來的 initial-restaurant 再放到新的變數裡 restaurant，才能再做後續的操作
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    // STEP 2: 將 addFavorite 改成 async/await 語法
    async addFavorite(restaurantId) {
      try {
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const { data } = await usersAPI.addFavorite({ restaurantId });

        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        // STEP 6: 請求失敗的話則跳出錯誤提示
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },

    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },

    async addLike(restaurantId) {
      try {
        const { data } = await usersAPI.addLike({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法對餐廳按like，請稍後再試",
        });
      }
    },

    async deleteLike(restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId });

        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消like，請稍後再試",
        });
      }
    },

    // addFavorite() {
    //   this.restaurant = {
    //     // 保留餐廳內原有的資料
    //     ...this.restaurant,
    //     isFavorited: true,
    //   };
    // },
    // deleteFavorite() {
    //   this.restaurant = {
    //     ...this.restaurant,
    //     isFavorited: false,
    //   };
    // },
    // addLike() {
    //   this.restaurant = {
    //     ...this.restaurant,
    //     isLiked: true,
    //   };
    // },
    // deleteLike() {
    //   this.restaurant = {
    //     ...this.restaurant,
    //     isLiked: false,
    //   };
    // },
  },
};
</script>
