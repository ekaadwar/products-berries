<template>
  <aside class="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
    <nav class="p-4">
      <ul>
        <li class="mb-2">
          <router-link to="/products" class="block p-2 hover:bg-gray-700">{{ $t("products") }}</router-link>
        </li>
        <li>
          <router-link to="/berries" class="block p-2 hover:bg-gray-700">{{ $t("berries") }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
