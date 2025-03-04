<template>
  <div>
    <h1 class="text-2xl">{{ $t("berries") }}</h1>
    
    <div class="flex justify-center">
      <div class="w-full sm:w-lg">
        <div class="flex flex-col sm:flex-row space-y-2 justify-between my-5">
          <input class="bg-white px-4 py-2 rounded-sm" type="text" v-model="searchQuery" :placeholder="`${ $t('search') }`" />
        </div>

        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left">No</th>
              <th class="text-left">Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(berry, index) in berries" :key="berry.name">
              <td class="py-2 border-t-1 border-gray-200">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
              <td class="py-2 border-t-1 border-gray-200">{{ berry.name }}</td>
              <td class="py-2 border-t-1 border-gray-200"><button class="bg-gray-800 text-white px-4 py-2 rounded-sm" @click="showDetail(berry)"><font-awesome-icon :icon="['fas', 'eye']" /></button></td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between items-center mt-4">
          <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-800 text-white px-4 py-2 rounded-sm">
            Previous
          </button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-800 text-white px-4 py-2 rounded-sm">
            Next
          </button>
        </div>

        <div class="mt-4">
          <label for="itemsPerPage">Show:</label>
          <select id="itemsPerPage" v-model="itemsPerPage" class="ml-2 p-2 border rounded">
            <option :value="10">10</option>
            <option :value="30">30</option>
            <option :value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBerryStore } from "@/stores/berryStore";
import { storeToRefs } from "pinia";

const {
  fetchBerries,
  prevPage,
  nextPage,
} = useBerryStore();

const {
  berries,
  searchQuery,
  currentPage,
  itemsPerPage,
  totalPages,
} = storeToRefs(useBerryStore())

const showDetail = (berry) => {
  alert("Berry: " + berry.name);
};

onMounted(fetchBerries);
</script>
