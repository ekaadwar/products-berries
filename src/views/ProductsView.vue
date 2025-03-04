<template>
  <div>
    <h1>{{ $t("products") }}</h1>
    
    <div class="my-5 ">
      <input class="bg-white px-4 py-2 rounded-sm" type="text" v-model="productStore.searchQuery" :placeholder="`${ $t('search') }`" />

      <button class="bg-emerald-300 px-4 py-2 rounded-sm" @click="onSort" >
        {{$t("sort")}}
        <font-awesome-icon v-if="sortAsc" :icon="['fas', 'arrow-down-a-z']" />
        <font-awesome-icon v-else :icon="['fas', 'arrow-up-a-z']" />
      </button>

      <button class="bg-orange-300 px-4 py-2 rounded-sm" @click="showModal = true">Tambah</button>

      <button class="bg-green-300 px-4 py-2 rounded-sm" @click="productStore.fetchProducts">{{ $t('refresh') }}</button>
    </div>
    
    <div v-if="productStore.loading">Loading...</div>
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
            <button class="bg-red-400 px-4 py-2 rounded-sm" @click="productStore.deleteProducts(product.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <FormProduct :show="showModal" @close="closeForm" @submit="addProduct" :form="formProduct"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref } from "vue";
import { storeToRefs} from "pinia"
import {useProductStore} from "@/stores/productStore"
import FormProduct from "@/components/templates/FormProduct.vue";

const productStore = useProductStore()
const {sortAsc, filteredProducts} = storeToRefs(useProductStore())

const showModal = ref(false)
const formProduct = ref({
  id: 0,
  title : "",
  category : "",
  price : 0,
  description : "",
  image : "/src/assets/images/products/additional_image.jpg",
  rating : {
    rate : 0,
    count : 0
  }
})

onMounted(()=>{
  productStore.fetchProducts()
})

const onSort = () : void =>{
  sortAsc.value = !sortAsc.value
}

const editProduct = (product: any): void => {
  console.log("Edit", product);
};

const addProduct = (product: any) => {
  productStore.createProduct(product)
};

const closeForm = () : void =>{
  showModal.value = false
  formProduct.value = {
    id: 0,
    title : "",
    category : "",
    price : 0,
    description : "",
    image : "/src/assets/images/products/additional_image.jpg",
    rating : {
      rate : 0,
      count : 0
    }
  }
}
</script>
