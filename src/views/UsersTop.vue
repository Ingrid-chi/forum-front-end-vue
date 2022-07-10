<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <!-- 使用 UsersTopCard 元件 -->
    <div class="row text-center">
      <UsersTopCard v-for="user in users" :key="user.id" :initialUser="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UsersTopCard from "./../components/UsersTopCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$NSBIRKQnYTG4EbakrdgzA.pDzIgU6JFKUwA3AnlsUazdE1ZjoesT.",
      isAdmin: true,
      image:
        "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
      isAdmin: false,
      image:
        "https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$K7B8Qhcyb38HJcnWn3vM0ua92GTRVYmDLmgzlNmiNhguqg/F77e3e",
      isAdmin: false,
      image:
        "https://i.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU",
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
  },
};
</script>
