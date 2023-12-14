<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-6">
    <h4 class="text-xl">Example:</h4>
    <RouterLink to="/demo" v-slot="{ isActive }">
      <span :class="{ underline: isActive }">Demo 1</span>
    </RouterLink>
    <RouterLink to="/demo-slot" v-slot="{ isActive }">
      <span :class="{ underline: isActive }">Demo 2</span>
    </RouterLink>
    <RouterLink to="/demo-ref" v-slot="{ isActive }">
      <span :class="{ underline: isActive }">Demo 3</span>
    </RouterLink>
  </div>

  <div class="text-center my-10">
    <h1 class="md:text-2xl text-lg mb-4">Vue 3 barcode & qrcode reader</h1>

    <a
      href="https://github.com/tomimandalap/vue3-barcode-qrcode-reader"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-md text-sm px-5 py-2.5"
      >Github</a
    >
    <a
      href="https://www.npmjs.com/package/vue3-barcode-qrcode-reader"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-md text-sm px-5 py-2.5 mx-2.5"
      >NPM</a
    >
    <a
      href="https://saweria.co/widgets/qr?streamKey=f2b619db8e63a3b30d372f042ed71b76"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-md text-sm px-5 py-2.5"
      >Give me Coffee</a
    >
  </div>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
