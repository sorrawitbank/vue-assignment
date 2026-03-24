<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favorite.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="name" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <ul>
        <li v-for="course in courses" :key="course.id">
          <CourseCard :course="course" :showButton="name.length" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
import axios from "axios";
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import useFavoriteStore from "../stores/favorite"

const courses = ref([]);
const name = ref("");
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
onMounted(async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    courses.value = res.data
  } catch { }
})
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const favorite = useFavoriteStore()

watch(name, (newName) => {
  favorite.setUsername(newName)
})
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.course-list {
  margin-top: 24px;
}
</style>
