<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{
              name: 'admin-restaurant',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
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
    },
    {
      id: 2,
      name: "Della Raynor II",
      tel: "1-311-660-8908 x46917",
      address: "37296 Abe Lodge",
      opening_hours: "08:00",
      description:
        "Voluptas magnam reiciendis iure. Reiciendis non beatae earum nam veniam velit doloremque. Odio aut placeat. Molestiae alias ipsum. Vero dolore et commodi omnis deserunt facere. Et debitis modi iure ex numquam sit sed.\n \rAd ut ea optio qui quia aut ut consequuntur. Commodi voluptas ea. Nobis sit aliquid placeat dicta. Qui illum ab at.\n \rVoluptas et repudiandae repellendus libero corporis voluptate quod iste. Rerum possimus in vitae sit ut. Ipsum expedita occaecati deserunt architecto ipsum consequuntur nesciunt perspiciatis. Dolores iste ratione.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.35757111816216",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 3,
      name: "Magnolia Nikolaus",
      tel: "(258) 288-6797",
      address: "053 Jacobs Keys",
      opening_hours: "08:00",
      description: "consequatur at veniam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.86115930310543",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 4,
      name: "Trevion Beer",
      tel: "470.946.9757 x921",
      address: "8832 Stanton Ridge",
      opening_hours: "08:00",
      description:
        "Eius dolores repellendus molestias cumque minima expedita tempore exercitationem saepe. Accusamus voluptates maxime aut et ducimus eaque. Aut consequatur qui et quas rerum est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.28008969873773",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 5,
      name: "Elena Cummerata",
      tel: "1-441-598-5179 x902",
      address: "40756 Caden Villages",
      opening_hours: "08:00",
      description:
        "Voluptatibus voluptatem repellat consequatur quaerat. Sed autem voluptatibus sint magnam pariatur molestiae. Sit aspernatur et consequatur atque et. Corrupti corrupti eius ab sint nostrum facere. Maiores consequatur sint. Aut veniam sint possimus eos delectus quo quo ea sapiente.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.68448232548256",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 6,
      name: "Walker Kirlin",
      tel: "895-680-8401 x028",
      address: "133 Deonte Squares",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.676565682448273",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 7,
      name: "Esteban Rogahn",
      tel: "941-055-8370",
      address: "7327 June Fort",
      opening_hours: "08:00",
      description: "quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.8883556229971612",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 8,
      name: "Shakira Dietrich",
      tel: "(725) 760-4982",
      address: "279 Keebler Course",
      opening_hours: "08:00",
      description:
        "Aut qui molestiae ut quia sit dicta odit unde. Officia omnis fugit animi corrupti perferendis debitis id. Exercitationem aliquid omnis quae. Delectus reprehenderit quae praesentium. Est placeat earum natus aut aliquam qui. Sit necessitatibus dolor.\n \rLaboriosam recusandae illo officia est optio cupiditate. Ea fugit ipsum quisquam sapiente est ut eos velit totam. Natus nostrum incidunt culpa quaerat explicabo in aut pariatur. Dolore odit perspiciatis quia quam provident consectetur molestias.\n \rQui minima voluptas. Qui et consequatur repellendus. Quibusdam excepturi architecto ullam animi rerum. Natus tempora autem esse eos. Et quia consequatur quia quis qui reiciendis voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.29393359994512",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 9,
      name: "Stephen Hudson",
      tel: "180.613.3309 x5767",
      address: "5959 Grady Knolls",
      opening_hours: "08:00",
      description: "vitae et architecto",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.344720971275784",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 10,
      name: "Alanna Koelpin",
      tel: "051-623-0441",
      address: "37523 Torp Squares",
      opening_hours: "08:00",
      description:
        "Optio modi sit quos quod tempore eligendi nisi et dolores. Tempora ut ab sunt tenetur veritatis libero quia voluptatem. Illo asperiores perspiciatis consectetur iure. Sit expedita illum reiciendis excepturi aut ipsam cumque tempora.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.21855009282969",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 11,
      name: "Dr. Emilio Zemlak",
      tel: "616.882.6547",
      address: "920 Dietrich Forge",
      opening_hours: "08:00",
      description:
        "Similique quia cumque in. Sint porro quaerat. Non asperiores veniam neque quasi ut eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.67141480343322",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 12,
      name: "Zelda Bartoletti",
      tel: "(832) 592-6782 x5693",
      address: "31913 Earnestine Courts",
      opening_hours: "08:00",
      description: "In id sequi.\nSint aut autem impedit quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.11640291792255",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 13,
      name: "Carolyne Grimes",
      tel: "(745) 522-1706",
      address: "3814 Hintz Spur",
      opening_hours: "08:00",
      description:
        "Dicta qui eius omnis aliquam quis voluptatibus veritatis laboriosam et. Laboriosam exercitationem qui et assumenda quos. Dolorem reprehenderit corrupti cum placeat minus doloremque sapiente dicta. Nihil voluptas ipsum velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.92333023187387",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 14,
      name: "Micah Ratke",
      tel: "(219) 573-0883",
      address: "93600 Rosenbaum Garden",
      opening_hours: "08:00",
      description:
        "Ad fuga ad minima asperiores illum. Ratione ipsa consectetur omnis laudantium sit quo sit libero. Quia aut quod. Sunt laudantium vitae ut quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.83916339505549",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 15,
      name: "Adan West",
      tel: "136-949-8298 x30490",
      address: "5165 Hoeger Forks",
      opening_hours: "08:00",
      description: "consequuntur et dolor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.67628789264126",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 16,
      name: "Carlotta Wisoky",
      tel: "829-383-1539 x048",
      address: "12070 Gaylord Station",
      opening_hours: "08:00",
      description:
        "Non harum exercitationem illo alias eaque fuga animi alias sunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.62879529618179",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 17,
      name: "Talia Howe",
      tel: "932.305.2371 x67526",
      address: "45538 Maxie Views",
      opening_hours: "08:00",
      description:
        "Quidem ducimus voluptas quis quo rerum molestiae dolor reprehenderit autem. Atque ut et. Id praesentium qui minima soluta nostrum modi tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.62653244096423",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 18,
      name: "Carolina Jerde",
      tel: "537.214.4282 x619",
      address: "447 Swift Mission",
      opening_hours: "08:00",
      description:
        "Enim enim consectetur amet. Deleniti facere tempore dicta vel sed modi. Rerum possimus autem ducimus. Repellat illo eum cum soluta enim. Amet cumque est dolore veniam est. Error reiciendis reiciendis aut commodi modi corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.122580493791865",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 19,
      name: "Cathryn Leannon",
      tel: "1-736-810-6098 x1051",
      address: "7365 Carmine Islands",
      opening_hours: "08:00",
      description:
        "Quis officiis qui rem. Aut blanditiis autem. Deleniti minima iusto. Assumenda at qui repellendus ea praesentium temporibus saepe et debitis. Asperiores facere dolorem inventore molestias pariatur dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.51948954984797",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 20,
      name: "Franco Stokes PhD",
      tel: "1-585-495-8665",
      address: "70141 Brandon Village",
      opening_hours: "08:00",
      description:
        "Voluptas quibusdam ut odio iusto eum temporibus minus. Deleniti facilis perferendis dolores iste. Ratione odio aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.45696718464874",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 21,
      name: "Mr. Isabelle Blick",
      tel: "727-618-4232",
      address: "20055 Rowland Curve",
      opening_hours: "08:00",
      description:
        "Perferendis soluta excepturi voluptatem reprehenderit laboriosam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.996472193959217",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 22,
      name: "Rebeca Bogan Jr.",
      tel: "(922) 925-0069 x553",
      address: "8793 Reed Gardens",
      opening_hours: "08:00",
      description:
        "Blanditiis quaerat quaerat enim. Ad consequatur culpa amet. Aliquam qui reiciendis velit ipsam qui. Possimus a mollitia et omnis consequatur repudiandae. Ut est nam aut rerum rerum et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.758168452584698",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 23,
      name: "Gilberto Armstrong",
      tel: "664.703.1859 x761",
      address: "4228 King Mall",
      opening_hours: "08:00",
      description:
        "Quia quisquam rem est incidunt. Corrupti odit minus. Facere quo et similique est optio. Saepe cumque consequatur ut totam nostrum sequi. Nemo perspiciatis et illum. Tenetur repudiandae dolorem voluptas aperiam repellat fugit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.824271977456778",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 24,
      name: "Kamren Boyer",
      tel: "594-791-8617 x54016",
      address: "6794 Kirk Mountain",
      opening_hours: "08:00",
      description: "Non eum sint est fuga harum voluptates omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.349887704517341",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 25,
      name: "Kaylah Steuber",
      tel: "308.625.4969",
      address: "15024 Bednar Forest",
      opening_hours: "08:00",
      description:
        "Harum minus id rerum rerum quis aut tenetur ducimus aut. Nulla officiis reiciendis officiis quo illo maxime quo. Est omnis iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.16184235612337",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 26,
      name: "Fausto Mayert",
      tel: "292-912-3428",
      address: "784 Houston Overpass",
      opening_hours: "08:00",
      description: "recusandae molestiae exercitationem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.452495366239738",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 27,
      name: "Nicolas Waelchi",
      tel: "(203) 046-9766",
      address: "391 Shyann Fall",
      opening_hours: "08:00",
      description:
        "Accusamus voluptatem quia voluptatem est provident laboriosam. Optio molestias veritatis perspiciatis quam qui quidem. Non sunt nisi ratione quia suscipit sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.35182738920608",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 28,
      name: "Katelin Cummings MD",
      tel: "(791) 734-9653",
      address: "746 Mertz Spurs",
      opening_hours: "08:00",
      description:
        "Hic sint est inventore voluptates. Voluptas perspiciatis voluptatibus sit cum. Nulla unde ab illo ea hic sint laboriosam. Est natus ipsam vitae eos sunt quisquam sit vel. Ut cupiditate harum dignissimos voluptatem eos. Nihil aut sit animi quia impedit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.02257930708364",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 29,
      name: "Jonathon Lemke DDS",
      tel: "437-318-6773",
      address: "5082 Derrick Hill",
      opening_hours: "08:00",
      description:
        "Aut illo nam officiis cupiditate.\nSint consequuntur aut quaerat tempore.\nIllum dolor repellendus maxime ut quis molestiae labore suscipit tempore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.1830165367634",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 30,
      name: "Ned Bosco III",
      tel: "1-690-822-4972 x6511",
      address: "635 McKenzie Haven",
      opening_hours: "08:00",
      description: "quasi nam omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.05477693122252",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 31,
      name: "Benjamin D'Amore",
      tel: "938.961.2256",
      address: "755 Garett Flats",
      opening_hours: "08:00",
      description:
        "Aut sunt omnis. Qui autem voluptas vel tenetur sit aut. Molestias explicabo nobis ab consequuntur nobis possimus quod eius.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.38207588621651",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 32,
      name: "Kyler Kulas",
      tel: "(961) 246-3788 x45760",
      address: "83909 Russel Streets",
      opening_hours: "08:00",
      description: "et repudiandae placeat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.55618867310494",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 33,
      name: "Annabell Tromp",
      tel: "(050) 037-8182 x34573",
      address: "79511 Breitenberg Plain",
      opening_hours: "08:00",
      description:
        "Natus omnis aliquid. Laudantium expedita ut labore vero in omnis et enim. Et molestias sit. Autem velit doloremque hic non quas in.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.067519478277166",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 34,
      name: "Courtney Zboncak",
      tel: "(907) 445-7293",
      address: "449 Chanelle Ford",
      opening_hours: "08:00",
      description:
        "Quis libero sit et ratione est repudiandae.\nSoluta accusamus maiores dolores suscipit provident.\nUllam quaerat voluptatem ullam aut non maxime amet voluptatem minus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.893942269714296",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 35,
      name: "Ramiro Monahan",
      tel: "296.020.0793 x180",
      address: "8739 Kris Forge",
      opening_hours: "08:00",
      description:
        "Perferendis maxime et. Voluptates rerum earum. Dolor sequi est. Aperiam omnis aut praesentium necessitatibus cupiditate pariatur eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.42761004022633",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 36,
      name: "Leonie Cummerata",
      tel: "460-344-4514 x9706",
      address: "39200 Carli Gardens",
      opening_hours: "08:00",
      description: "Eius eum et praesentium vel similique ab accusantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.43575791746419",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 37,
      name: "Mrs. Kailey Okuneva",
      tel: "(472) 407-2299 x10563",
      address: "2654 Bernier Mountains",
      opening_hours: "08:00",
      description:
        "Eligendi corporis dignissimos eveniet in facilis. Ipsa accusantium totam natus magni commodi. Amet ut repellat asperiores. Voluptatem placeat perferendis dolores. Cum laudantium maxime repellat aut laboriosam quae sed quia optio. Delectus nemo veniam qui iste est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.035374236565275",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 38,
      name: "Theodora White",
      tel: "086.653.7606 x4954",
      address: "5940 Caesar Parkway",
      opening_hours: "08:00",
      description:
        "Et rerum veritatis fugit qui dolor et. Sint ut incidunt reiciendis quo. Consequuntur voluptas deserunt quam dolorem fugiat quos ipsam. Est consequatur repellendus corrupti ea molestiae doloribus dolorum eos. Magnam consequuntur quibusdam. Aliquam mollitia labore enim pariatur ut velit sed nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.931198233513",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 39,
      name: "Ms. Jordon Hodkiewicz",
      tel: "942.013.0405",
      address: "7907 Korey Walk",
      opening_hours: "08:00",
      description: "harum ipsam laborum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.42150167338887",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 40,
      name: "Rickie Medhurst",
      tel: "(320) 535-9948 x092",
      address: "38278 Mann Bridge",
      opening_hours: "08:00",
      description: "laborum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.897054453571723",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 43,
      name: "Olaf Zemlak",
      tel: "1-715-357-5762 x510",
      address: "58240 Gislason Trafficway",
      opening_hours: "08:00",
      description:
        "Nihil dolor ab facilis voluptatibus ipsam sit est.\nVoluptatum cumque enim atque vitae ipsum aperiam libero temporibus rerum.\nAb quo ut tempora est.\nCupiditate debitis cum ut quis praesentium optio consequuntur et.\nMolestiae incidunt autem voluptate quibusdam rerum molestias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.74819861687143",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 44,
      name: "Alberto Keebler",
      tel: "(861) 572-3496 x388",
      address: "4455 Jose Inlet",
      opening_hours: "08:00",
      description:
        "Ipsum quis odio voluptatem sapiente ullam debitis accusamus aut. Fuga illum eveniet rerum repudiandae rerum perspiciatis esse consequatur sunt. Quae voluptas excepturi non. Omnis rem autem eos eligendi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.47374272898089",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 45,
      name: "Wilber Kerluke",
      tel: "(126) 434-2023 x5025",
      address: "77531 Abshire Circles",
      opening_hours: "08:00",
      description:
        "Aperiam vero similique quo vitae veritatis quis in et. Maxime fugit sit commodi aut quia architecto. Omnis provident asperiores voluptate voluptatibus aut dignissimos. Tenetur adipisci qui non. Veniam similique voluptas. Sit aperiam voluptatem eos iure tenetur voluptate nemo ab.\n \rId quod aspernatur sit sit. Doloremque consectetur aut consequatur consequuntur sint quam ullam est. Aut iste rerum debitis. Quia tenetur assumenda vero odio inventore et. Quaerat saepe delectus soluta dolor est.\n \rUt et et qui ut. Velit qui iste quaerat porro impedit totam esse voluptas hic. Facilis blanditiis aut et ipsa. Repellendus voluptatem temporibus beatae. Autem deserunt vero et a. Minima saepe sunt voluptas id.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.88292223428792",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 48,
      name: "Anabel Bosco",
      tel: "881-227-3294",
      address: "7973 DuBuque Crest",
      opening_hours: "08:00",
      description:
        "Sed ex qui veritatis nihil ipsum vitae natus. Non ipsum veniam rem voluptas et maxime repudiandae harum labore. Ipsum consequatur illo. Autem praesentium in corrupti enim ut ut quo. Omnis similique rem at accusantium id et iusto. Doloremque et facilis quia iusto tenetur harum.\n \rSuscipit numquam exercitationem sed libero alias. Aliquid ipsum similique in quidem aut esse sunt repudiandae ipsam. Odit odit eligendi fugit quis qui dolores in. Provident debitis libero dolore dolores commodi dolorem quidem dolore.\n \rEarum qui consequatur aut. Hic dolorum et non et cupiditate aut. Aperiam et aut quia eveniet odit aut esse. Ut quia ab sit animi ab. Temporibus non maxime nulla. Maxime quae totam fuga qui officiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.047571340087806",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
    {
      id: 50,
      name: "Kennedy Nolan",
      tel: "276.445.9157 x42446",
      address: "937 Swaniawski Brook",
      opening_hours: "08:00",
      description:
        "Quod odio ut.\nRepellendus molestiae aut dignissimos similique consequatur at et sunt non.\nFugiat necessitatibus laborum eius nihil.\nSequi non non consequatur iusto et nihil commodi id et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.09357724626103",
      viewCounts: 0,
      createdAt: "2022-07-06T10:47:46.000Z",
      updatedAt: "2022-07-06T10:47:46.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-06T10:47:46.000Z",
        updatedAt: "2022-07-06T10:47:46.000Z",
      },
    },
  ],
};

export default {
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
      this.restaurants = dummyData.restaurants;
    },

    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
