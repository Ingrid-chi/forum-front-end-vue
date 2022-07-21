// 第一步建立 getRestaurants 方法
import { apiHelper } from "../utils/helpers";
// 第二步用 getItem 取出 LocalStorage 裡的 token，並回傳給 getToken
const getToken = () => localStorage.getItem("token");

export default {
  getRestaurants({ page, categoryId }) {
    // 這種原生方法通常都是物件建構子，在使用時要用 new 的方式來產生實例，再透過 URLSearchParams.toString() 來產生 queryString
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // JWT 的規範使用 HTTP Authorization 的 Bearer 類別
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  getTopRestaurants() {
    return apiHelper.get(`restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
