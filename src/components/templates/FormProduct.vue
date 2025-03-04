<template>
  <div v-if="show" class="fixed inset-0 bg-black/70 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto">
      <label class="block mb-2">Title</label>
      <input v-model="form.title" type="text" class="w-full p-2 border rounded mb-4" />
      
      <label class="block mb-2">Category</label>
      <select v-model="form.category" class="w-full p-2 border rounded mb-4">
        <option v-for="option in categories" :key="option" :value="option">{{ option || "Pilih Kategori" }}</option>
      </select>

      <label class="block mb-2">Price</label>
      <input v-model.number="form.price" type="number" class="w-full p-2 border rounded mb-4" />

      <label class="block mb-2">Description</label>
      <input v-model="form.description" type="text" class="w-full p-2 border rounded mb-4" />

      <img :src="form.image" />

      <label class="block mb-2">Rate</label>
      <input v-model.number="form.rating.rate" type="number" class="w-full p-2 border rounded mb-4" />

      <label class="block mb-2">Count</label>
      <input v-model.number="form.rating.count" type="number" class="w-full p-2 border rounded mb-4" />

      <div class="flex justify-between">
        <button class="bg-gray-300 px-4 py-2 rounded-sm" @click="emit('close')">Close</button>
        <button @click="handleSubmit" class="bg-gray-800 text-white bg-blue-300 px-4 py-2 rounded-sm">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits } from 'vue';

const categories = [
  "",
  "jewelery",
  "elentronic",
  "men's clothing",
  "women's clothing"
]

const props = defineProps<{
  show:boolean,
  form: {
    id: number,
    title : string,
    category : string,
    price : number,
    description : string,
    image : string,
    rating : {
      rate : number,
      count : number
    }
  }
}>()

const emit = defineEmits(["close", "submit"])


const handleSubmit = () => {
  if (!props.form.title || !props.form.category || props.form.price <= 0) {
    alert("Harap isi semua field dengan benar.");
    return;
  }
  emit("submit", props.form);
};
</script>