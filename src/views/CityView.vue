<template>
  <div class="text-gray-700">
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p class="text-center text-gray-400 p-20">Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AsyncCityView from "../components/AsyncCityView.vue";
</script>
