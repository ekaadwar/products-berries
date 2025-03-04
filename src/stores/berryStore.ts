import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import axios from "axios";

export const useBerryStore = defineStore("berryStore", () => {
  const berries = ref<{ name: string }[]>([]);
  const searchQuery = ref("");
  const currentPage = ref(1);
  const itemsPerPage = ref(10);
  const totalItems = ref(0);

  const fetchBerries = async () => {
    try {
      const offset = (currentPage.value - 1) * itemsPerPage.value;
      const limit = itemsPerPage.value;
      const res = await axios.get(`https://pokeapi.co/api/v2/berry?offset=${offset}&limit=${limit}`);
      berries.value = res.data.results;
      totalItems.value = res.data.count;
    } catch (error) {
      console.error("Error fetching berries:", error);
    }
  };

  watch([currentPage, itemsPerPage], fetchBerries, { immediate: true });

  const filteredBerries = computed(() =>
    berries.value.filter((b) =>
      b.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  return {
    berries,
    searchQuery,
    fetchBerries,
    filteredBerries,
    currentPage,
    itemsPerPage,
    totalPages,
    prevPage,
    nextPage,
  };
});
