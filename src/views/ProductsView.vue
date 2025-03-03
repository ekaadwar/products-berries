<template>
  <div>
    <h1>{{ $t("products") }}</h1>
    <div class="my-5 ">
      <input class="bg-white px-4 py-2 rounded-sm mr-2" type="text" v-model="searchQuery" placeholder="Search..." />
      <button class="bg-green-300 px-4 py-2 rounded-sm" @click="fetchProducts">Refresh</button>
    </div>
    
    <div v-if="loading">Loading...</div>
    <div v-else class="grid grid-cols-4 gap-4">
      <div v-for="product in filteredProducts" :key="product.id" class="bg-white overflow-hidden rounded-sm flex flex-col justify-between">
        <div class="flex-1 flex items-center p-2">
          <img :src="product.image" />
        </div>
        <div class="p-8">
          <h2 class="text-2xl">{{ product.title }}</h2>
          <div class="my-4">
            <p>{{ product.category }}</p>
            <p>${{ product.price }}</p>
          </div>
          <div class="flex justify-between">
            <button class="bg-yellow-400 px-4 py-2 rounded-sm" @click="editProduct(product)">Edit</button>
            <button class="bg-red-400 px-4 py-2 rounded-sm" @click="deleteProduct(product.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const searchQuery = ref("");
const loading = ref(false);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    products.value = res.data;
  } finally {
    loading.value = false;
  }
};

const filteredProducts = computed(() =>
  products.value.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const editProduct = (product) => {
  console.log("Edit", product);
};

const deleteProduct = (id) => {
  products.value = products.value.filter((p) => p.id !== id);
};

onMounted(fetchProducts);
</script>
