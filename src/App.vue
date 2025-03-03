<template>
  <div class="min-h-screen bg-gray-100 relative">
    <Navbar />
    <div class="flex pt-20">
      <Sidebar />
      <main class="flex-1 p-4 ml-64">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
