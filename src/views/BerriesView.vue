<template>
  <div>
    <h1>{{ $t("berries") }}</h1>
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <button @click="fetchBerries">Refresh</button>
    
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(berry, index) in filteredBerries" :key="berry.name">
          <td>{{ index + 1 }}</td>
          <td>{{ berry.name }}</td>
          <td><button @click="showDetail(berry)">Detail</button></td>
        </tr>
      </tbody>
    </table>
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
