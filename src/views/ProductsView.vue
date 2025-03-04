<template>
  <div>
    <h1 class="text-2xl">{{ $t("products") }}</h1>
    
    <div class="flex flex-col sm:flex-row space-y-2 justify-between my-5">
      <input class="bg-white px-4 py-2 rounded-sm" type="text" v-model="productStore.searchQuery" :placeholder="`${ $t('search') }`" />

      <div class="flex space-x-2">
        <button class="bg-emerald-300 px-4 py-2 rounded-sm" @click="onSort" >
          {{$t("sort")}}
          <font-awesome-icon v-if="sortAsc" :icon="['fas', 'arrow-down-a-z']" />
          <font-awesome-icon v-else :icon="['fas', 'arrow-up-a-z']" />
        </button>

        <button class="bg-gray-800 text-white px-4 py-2 rounded-sm" @click="showModal = true">Tambah</button>
      </div>
    </div>
    
    <div v-if="productStore.loading">Loading...</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div v-for="product in filteredProducts" :key="product.id" class="bg-white overflow-hidden rounded-sm flex flex-col justify-between">
        <div class="flex-1 flex items-center p-2 ">
          <div class="h-40">
            <img :src="product.image" />
          </div>
        </div>
        <div class="p-4 bg-white/50">
          <h2 class="text-lg">{{ product.title }}</h2>
          <div class="my-4">
            <p>{{ product.category }}</p>
            <p>${{ product.price }}</p>
          </div>
          <div class="flex justify-between">
            <button class="bg-yellow-400 px-4 py-2 rounded-sm text-white" @click="editProduct(product)"><font-awesome-icon :icon="['fas', 'pen']" /></button>
            <button class="bg-red-400 px-4 py-2 rounded-sm text-white" @click="productStore.deleteProducts(product.id)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
  formProduct.value = {...product}
  showModal.value = true
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
