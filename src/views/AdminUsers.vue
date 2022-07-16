<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="user.id !== currentUser.id"
              @click.stop.prevent="toggleIsAdmin(user.id)"
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin ? "set as admin" : "set as user" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$NSBIRKQnYTG4EbakrdgzA.pDzIgU6JFKUwA3AnlsUazdE1ZjoesT.",
      isAdmin: true,
      image: null,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$JRYafUdf.eIpohALPeWMm.kXc2ZXa.4C5qTeGCxtUnN8dxAIIyBR6",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$K7B8Qhcyb38HJcnWn3vM0ua92GTRVYmDLmgzlNmiNhguqg/F77e3e",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
    },
  ],
};

const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$NSBIRKQnYTG4EbakrdgzA.pDzIgU6JFKUwA3AnlsUazdE1ZjoesT.",
    isAdmin: true,
    image: null,
    createdAt: "2022-07-06T10:47:46.000Z",
    updatedAt: "2022-07-06T10:47:46.000Z",
  },
  isFollowed: false,
};

export default {
  name: "AdminUsers",

  components: {
    AdminNav,
  },

  data() {
    return {
      users: [],
      currentUser: {},
    };
  },

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = dummyUser.profile;
    },

    toggleIsAdmin(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    },
  },
};
</script>
