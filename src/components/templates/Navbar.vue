<template>
  <div class="fixed flex items-center justify-between top-0 bg-gray-800 p-4 w-full h-20">
    <div class="flex space-x-4 text-white">
      <router-link to="/products" class="block p-2 hover:bg-gray-700">{{ $t("products") }}</router-link>
        
      <router-link to="/berries" class="block p-2 hover:bg-gray-700">{{ $t("berries") }}</router-link>
    </div>

    <select v-model="$i18n.locale" class="bg-white px-5 py-2 rounded-sm">
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </select>
  </div>
</template>