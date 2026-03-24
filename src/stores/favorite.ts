import { defineStore } from "pinia";

/** Course shape used when adding to favorites (matches Fake Store API fields we use). */
export type FavoriteCourse = {
  id: number;
  title: string;
  price: number;
};

const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "" as string,
    favorites: [] as FavoriteCourse[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: FavoriteCourse) {
      if (this.favorites.some((c) => c.id === course.id)) return;
      this.favorites.push(course);
    },
  },
});

export default useFavoriteStore;
