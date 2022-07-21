<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image | emptyImage" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <span class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>

          <!-- <a href="#" class="btn btn-primary mr-2"> Show </a> -->
          <router-link
            class="btn btn-primary mr-2"
            :to="{
              name: 'restaurant',
              params: { id: restaurant.id },
            }"
          >
            Show
          </router-link>

          <button
            v-if="restaurant.isFavorited"
            type="button"
            class="btn btn-danger mr-2"
            @click.stop.prevent="deleteFavorite(restaurant.id)"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFavorite(restaurant.id)"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantsTopCard",

  mixins: [emptyImageFilter],

  props: {
    initialTop: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      restaurant: this.initialTop,
    };
  },

  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.addFavorite({ restaurantId });
        console.log("data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          favoriteCount: this.favoriteCount + 1,
          isFavorited: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: '"無法加入最愛，請稍後再試"',
        });
      }
    },

    async deleteFavorite(restaurantId) {
      try {
        const { data } = await restaurantsAPI.deleteFavorite({ restaurantId });
        console.log("data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          favoriteCount: this.favoriteCount - 1,
          isFavorited: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: '"無法刪除最愛，請稍後再試"',
        });
      }
    },
    // addFavorite() {
    //   this.restaurant = {
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
  },
};
</script>
