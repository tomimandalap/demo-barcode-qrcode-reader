<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-2xl">404 | Not Found!</h1>

    <button
      class="px-10 py-2 rounded-md bg-gray-300 mt-6"
      @click="router.push('/home')"
    >
      Back to Home
    </button>
  </div>
</template>
