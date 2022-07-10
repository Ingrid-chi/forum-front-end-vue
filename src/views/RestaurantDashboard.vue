<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Dovie West",
    tel: "994.374.0553",
    address: "881 Howe Common",
    opening_hours: "08:00",
    description:
      "Et quibusdam ratione in ea ut sint quia. Dolorem cupiditate non ut provident error reprehenderit. Iure tenetur ab doloribus officiis.\n \rAliquid perferendis distinctio voluptatibus vero qui perspiciatis. Natus exercitationem excepturi molestias. Consequuntur vitae ullam enim ut quos doloremque. Rerum quia consectetur magni possimus ut qui molestiae quidem.\n \rIn culpa molestiae illum ut aut aspernatur soluta consequatur. Autem perspiciatis tenetur eos aut deserunt eum vel. Doloribus quis velit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=4.080196809105563",
    viewCounts: 1,
    createdAt: "2022-07-06T10:47:46.000Z",
    updatedAt: "2022-07-07T19:24:20.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    Comments: [
      {
        id: 51,
        text: "Modi corporis quam sunt sint quibusdam.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$NSBIRKQnYTG4EbakrdgzA.pDzIgU6JFKUwA3AnlsUazdE1ZjoesT.",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
      {
        id: 1,
        text: "Nemo necessitatibus aut cumque officia enim.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
      {
        id: 101,
        text: "Necessitatibus quia molestiae aut et recusandae.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-06T10:47:46.000Z",
          updatedAt: "2022-07-06T10:47:46.000Z",
        },
      },
    ],
  },
};

export default {
  name: "RestaurantDashboard",

  data() {
    return {
      restaurant: dummyData.restaurant,
      Comments: dummyData.Comments,
    };
  },
};
</script>
