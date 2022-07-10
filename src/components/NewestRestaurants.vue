<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <!-- 改成用動態綁定的方式，v-for 迴圈, 記得綁定 key -->
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
          <!-- 在 restaurant.Category 裡面，如果 restaurant.Category.name 找不到資料，則顯示'未分類'-->
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        <!-- 加上 JS 的時間換算 fromNow -->
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 10px;
}
</style>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "NewestRestaurants",

  mixins: [fromNowFilter],

  // 從父元件中，用 props 取得資料
  props: {
    restaurants: {
      // 標明傳進來的資料型態是 Array
      type: Array,
      // 標明這組資料是必要的，一定要傳進來
      required: true,
    },
  },
};
</script>
