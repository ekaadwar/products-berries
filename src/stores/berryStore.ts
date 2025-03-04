import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useBerryStore = defineStore("berryStore", () => {
  const berries = ref([]);
  const currentPage = ref(1);
  const itemsPerPage = ref(10);
  const totalPages = computed(() => Math.ceil(64 / itemsPerPage.value)); // Karena total count dari API adalah 64

  const fetchBerries = async () => {
    try {
      const offset = (currentPage.value - 1) * itemsPerPage.value;
      const res = await axios.get(`https://pokeapi.co/api/v2/berry?offset=${offset}&limit=${itemsPerPage.value}`);

      console.log("Response Data:", res.data);

      if (res.status === 200 && res.data.results) {
        berries.value = res.data.results;
      } else {
        console.error("Data tidak valid:", res.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data berries:", error);
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchBerries();
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      fetchBerries();
    }
  };

  return {
    berries,
    currentPage,
    itemsPerPage,
    totalPages,
    fetchBerries,
    prevPage,
    nextPage,
  };
});
