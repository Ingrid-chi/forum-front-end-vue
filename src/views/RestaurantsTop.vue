<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <!-- 使用 RestaurantsTopCard 元件 -->
    <RestaurantsTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initialTop="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantsTopCard from "./../components/RestaurantsTopCard";

import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
    RestaurantsTopCard,
  },

  data() {
    return {
      restaurants: [],
    };
  },

  created() {
    this.fetchRestaurants();
  },

  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        console.log(data);
        this.restaurants = data.restaurants;
        // fetchRestaurants() {
        //   const { restaurants } = dummyData;
        //   this.restaurants = restaurants;
        // },
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得 TOP10 人氣餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>
