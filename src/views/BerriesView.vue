<template>
  <div>
    <h1 class="text-2xl">{{ $t("berries") }}</h1>
    
    <div class="flex justify-center">
      <div class="w-full sm:w-lg">
        <div class="flex flex-col sm:flex-row space-y-2 justify-between my-5">
          <input class="bg-white px-4 py-2 rounded-sm" type="text" v-model="searchQuery" :placeholder="`${ $t('search') }`" />
          <button class="bg-emerald-300 px-4 py-2 rounded-sm">
              {{$t("sort")}}
              <font-awesome-icon :icon="['fas', 'arrow-down-a-z']" />
              <!-- <font-awesome-icon v-else :icon="['fas', 'arrow-up-a-z']" /> -->
            </button>
        </div>

        <table class="w-full">
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(berry, index) in filteredBerries" :key="berry.name" >
            <td class="py-2 border-t-1 border-gray-200">{{ index + 1 }}</td>
            <td class="py-2 border-t-1 border-gray-200">{{ berry.name }}</td>
            <td class="py-2 border-t-1 border-gray-200"><button class="bg-gray-800 text-white px-4 py-2 rounded-sm" @click="showDetail(berry)"><font-awesome-icon :icon="['fas', 'eye']" /></button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const berries = ref([]);
const searchQuery = ref("");

const fetchBerries = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/berry");
  berries.value = res.data.results;
};

const filteredBerries = computed(() =>
  berries.value.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const showDetail = (berry) => {
  alert("Berry: " + berry.name);
};

onMounted(fetchBerries);
</script>
