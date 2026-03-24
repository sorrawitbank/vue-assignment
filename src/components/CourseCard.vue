<template>
  <div class="course-list">
    <div class="course-card">
      <h3>ชื่อคอร์ส: {{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
      <button v-if="showButton"
        @click="favorite.addFavorite({ id: course.id, title: course.title, price: course.price })">เพิ่มในรายการโปรด</button>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore } แล้วเขียนฟังก์ชันเพิ่มคอร์สลง store
import useFavoriteStore from "../stores/favorite"

const favorite = useFavoriteStore()
// TODO: defineProps({ course: Object })
defineProps(["course", "showButton"])
</script>

<style scoped>
.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: auto;
  padding: 16px;
}

.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9c6d;
}
</style>
