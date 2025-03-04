<template>
  <div class="min-h-screen bg-gray-100 relative">
    <Navbar />
    <div class="flex pt-20">
      <main class="flex-1 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/templates/Navbar.vue";
import Sidebar from "@/components/templates/Sidebar.vue";
</script>
