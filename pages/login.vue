<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const activeTab = ref<"login" | "register">("login");
</script>

<template>
  <div class="flex">
    <div
      class="lg:w-[50%] lg:min-h-[100vh] flex items-center justify-center"
      :class="{ 'bg-green-200': activeTab == 'register' }"
    >
      <div
        v-if="activeTab == 'login'"
        class="w-[70%] p-4 rounded-sm shadow-sm bg-gray-100 dark:bg-gray-800"
      >
        login
      </div>
    </div>
    <div
      class="lg:w-[50%] lg:min-h-[100vh] flex items-center justify-center"
      :class="{ 'bg-green-200': activeTab == 'login' }"
    >
      <div
        v-if="activeTab == 'register'"
        class="w-[70%] p-4 rounded-sm shadow-sm bg-gray-100 dark:bg-gray-800"
      >
        register
      </div>
    </div>
  </div>
</template>
