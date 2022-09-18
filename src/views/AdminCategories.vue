<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <!-- 這邊的 v-model 可以看 newCategoryName -->
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <!-- (3) 這個 function 要傳 name 進去 對應的是 data 裡面的 newCategoryName -->
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory(newCategoryName)"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
// import { v4 as uuidv4 } from "uuid";

// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import adminAPI from "./../apis/admin";
// error
import { Toast } from "./../utils/helpers";

//  2. 定義暫時使用的資料 (已刪除 dummyData)

export default {
  name: "AdminCategories",

  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    // 在每一個 category 中都添加一個 isEditing 屬性 (map)
    // 省略 return {} 物件的寫法，在最外層加 ()
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        console.log({response})

        const { data, statusText } = response;

        if (response.status !== 200) {
          throw new Error(statusText);
        }

        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別資料，請稍後再試",
        });
        console.log("error", error);
      }
    },
    // fetchCategories() {
    //   this.categories = dummyData.categories.map((category) => ({
    //     ...category,
    //     isEditing: false,
    //     nameCached: "",
    //   }));
    // },

    async createCategory(name) {
      try {
        // (2) 這邊也要傳 name 參數
        const response = await adminAPI.categories.created({ name });

        const { data, statusText } = response;

        if (response.status !== 200) {
          throw new Error(statusText);
        }

        this.categories.push({
          // (4) id 記得換成 api 給的
          id: data.categoryId,
          name: this.newCategoryName,
        });

        this.newCategoryName = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別資料，請稍後再試",
        });
        console.log("error", error);
      }
    },

    // createCategory() {
    // TODO 透過 API 告知伺服器欲新增的餐廳類別...

    // 將新的類別添加到陣列中
    // this.categories.push({
    // id: uuidv4(),
    // name: this.newCategoryName,
    // });

    // 清空原本欄位中的內容
    // this.newCategoryName = "";
    // },

    async deleteCategory(categoryId) {
      try {
        const response = await adminAPI.categories.delete({ categoryId });
        const { statusText } = response;

        if (response.status !== 200) {
          throw new Error(statusText);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳類別資料，請稍後再試",
        });
        console.log("error", error);
      }
    },

    // deleteCategory(categoryId) {
    // TODO 透過 API 告知伺服器欲刪除的餐廳類別

    // 將該餐廳類別從陣列中移除
    // this.categories = this.categories.filter(
    // (category) => category.id !== categoryId
    // );
    // },

    // 加入 API 後的寫法 updateCategory({ categoryId, name })
    // updateCategory({ categoryId }) {
    // TODO 透過 API 向伺服器更新餐廳類別名稱
    // this.toggleIsEditing(categoryId);
    // },

    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }

        return category;
      });
    },

    async updateCategory({ categoryId, name }) {
      try {
        // admin.js 用 put; AdminRestaurants 用 update 取出
        const { data } = await adminAPI.categories.update({
          categoryId,
          name,
        });
        console.log("data", data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法修改類別名稱，請稍後再試",
        });
      }
    },

    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,

            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }

        return category;
      });

      // 確認後要把編輯狀態設定回初始狀態 false
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<!-- CSS 天性是全域的，所以 Vue.js 做了一個 scoped 屬性，用來確保這組 CSS 只會作用到當下的這一個 component -->
<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
