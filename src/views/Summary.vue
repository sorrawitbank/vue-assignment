<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <p>ชื่อผู้ใช้: {{ favorite.username }}</p>
    <p>จำนวนคอร์สที่ถูกใจ: {{ favorite.favorites.length }}</p>
  </div>
  <ul>
    <li v-for="course in favorite.favorites" :key="course.id">
      <CourseCard :course="course" :showButton="false" />
    </li>
  </ul>
</template>

<script setup>
// TODO: import { useFavoriteStore }
import CourseCard from "../components/CourseCard.vue";
import useFavoriteStore from "../stores/favorite"

const favorite = useFavoriteStore()
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
