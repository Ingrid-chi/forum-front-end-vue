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

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Kennedy Nolan",
      tel: "276.445.9157 x42446",
      address: "937 Swaniawski Brook",
      opening_hours: "08:00",
      description: "Quod odio ut.\nRepellendus molestiae aut dignissimo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.09357724626103",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Stefan Stokes Jr.",
      tel: "1-784-020-5951",
      address: "75061 Rolfson Island",
      opening_hours: "08:00",
      description: "Qui et unde sunt est vel illum ratione sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.5836262763589746",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Anabel Bosco",
      tel: "881-227-3294",
      address: "7973 DuBuque Crest",
      opening_hours: "08:00",
      description: "Sed ex qui veritatis nihil ipsum vitae natus. Non ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.047571340087806",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Tamara Hermann",
      tel: "1-770-068-9501 x38790",
      address: "119 Rowe Glen",
      opening_hours: "08:00",
      description: "assumenda eum soluta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.85918602586477",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Ms. Diego Nienow",
      tel: "(595) 019-1786 x748",
      address: "0748 Wisoky Throughway",
      opening_hours: "08:00",
      description: "Repudiandae porro nobis nulla suscipit incidunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.8915570388912",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Wilber Kerluke",
      tel: "(126) 434-2023 x5025",
      address: "77531 Abshire Circles",
      opening_hours: "08:00",
      description: "Aperiam vero similique quo vitae veritatis quis in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.88292223428792",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Alberto Keebler",
      tel: "(861) 572-3496 x388",
      address: "4455 Jose Inlet",
      opening_hours: "08:00",
      description: "Ipsum quis odio voluptatem sapiente ullam debitis ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.47374272898089",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Olaf Zemlak",
      tel: "1-715-357-5762 x510",
      address: "58240 Gislason Trafficway",
      opening_hours: "08:00",
      description: "Nihil dolor ab facilis voluptatibus ipsam sit est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.74819861687143",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Evans Baumbach",
      tel: "1-387-335-0647",
      address: "79711 O'Kon Island",
      opening_hours: "08:00",
      description: "Dolorem sed aut quia quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.63631757887686",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Myrna Reynolds",
      tel: "1-654-123-0117 x527",
      address: "48043 Pansy Village",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.10127377304997",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

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
    fetchRestaurants() {
      const { restaurants } = dummyData;
      this.restaurants = restaurants;
    },
  },
};
</script>
