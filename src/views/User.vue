<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <!-- :initialIsFollowed="isFollowed" 設定初始值從 dummyData 抓 isFollowed: false(預設為未登入狀態) -->
    <!-- "user" 在下方 methods 有重新定義 -->
    <UserProfileCard :user="user" :initialIsFollowed="isFollowed" />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import usersAPI from "../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",

  components: {
    UserProfileCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
  },

  props: {
    initialUser: {
      type: Object,
      default: () => {
        return {
          name: "",
          image: "",
        };
      },
    },
  },

  data() {
    return {
      user: {
        id: 0,
        name: "",
        email: "",
        image: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },

  // 在 beforeRouteUpdate 時要再重新取得使用者資料
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },

  // "user 從這來 = dummyData.profile"
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId });
        const { profile, isFollowed } = data;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.user = {
          ...this.user,
          id: profile.id,
          image: profile.image,
          name: profile.name,
          email: profile.email,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
        };

        this.isFollowed = isFollowed;
        this.followings = profile.Followings;
        this.followers = profile.Followers;
        this.favoritedRestaurants = profile.FavoritedRestaurants;

        // 處理 comment.Restaurant 可能有空值的情況
        this.comments = profile.Comments.filter(
          (comment) => comment.Restaurant
        );
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>