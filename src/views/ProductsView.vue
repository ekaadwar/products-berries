<template>
  <div>
    <h1>{{ $t("products") }}</h1>
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <button @click="fetchProducts">Refresh</button>
    
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="product in filteredProducts" :key="product.id" class="card">
        <img :src="product.image" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <p>${{ product.price }}</p>
        <button @click="editProduct(product)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
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
