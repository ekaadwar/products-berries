<template>
  <div class="fixed flex items-center justify-end top-0 bg-gray-800 p-4 w-full h-20">
    <select v-model="$i18n.locale" class="bg-white px-5 py-2 rounded-sm">
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </select>
  </div>
</template>