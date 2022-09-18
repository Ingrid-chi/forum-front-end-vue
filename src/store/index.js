import Vue from "vue";
import Vuex from "vuex";
import usersAPI from './../apis/users';

Vue.use(Vuex);

export default new Vuex.Store({
  // 像：data
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },

  getters: {},

  // 用來修改 state 的方法，像：methods
  mutations: {
    // state 是指上方內部的資料；currentUser 是從外部有使用這個 function 傳進來的參數
    setCurrentUser(state, currentUser) {
      // 上方的 state.currentUser
      state.currentUser = {
        // 複製一份進來
        ...state.currentUser,
        // 從外部傳進來的(通常透過 API 取得)，修改上方 state.currentUser 的資料
        ...currentUser,
      };

      // 因為已經取得外部資料了，通常代表已經驗證過了，所以改為 true
      state.isAuthenticated = true;
    },
  },

  // 透過 API 請求資料...
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser();

        const { id, name, email, image, isAdmin } = data;

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        });
        
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
        console.error("can not fetch user information");
      }
    },
  },

  // 拆解檔案，可建立多個 store
  modules: {},
});
