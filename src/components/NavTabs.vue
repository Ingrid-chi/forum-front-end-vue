<template>
  <ul class="nav nav-tabs mb-4">
    <!-- 習慣在使用 v-for 時，為元素添加一個不重覆的 key 屬性，讓他能夠運用 key 值來追蹤節點，盡可能地使用高效的方法來渲染元素 -->
    <li v-for="tab in tabs" :key="tab.id" class="nav-item">
      <router-link :to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "NavTabs",
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "首頁",
          path: "/restaurants",
        },
        {
          id: uuidv4(),
          title: "最新動態",
          path: "/restaurants/feeds",
        },
        {
          id: uuidv4(),
          title: "TOP 10 人氣餐廳",
          path: "/restaurants/top",
        },
        {
          id: uuidv4(),
          title: "美食達人",
          path: "/users/top",
        },
      ],
    };
  },
};
</script>
