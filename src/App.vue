<template>
  <div id="restaurant-forum">
    <Navbar />

    <main class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap"; // 載入 js 檔案
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export default {
  components: {
    // Navbar: Navbar 的縮寫
    Navbar,
  },
};
</script>
