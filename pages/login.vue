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
        <div class="text-center text-xl mb-4">Acessar sua conta</div>
        <auth-login />
        <div class="flex justify-end mt-4">
          <u-button
            label="Não possuo uma conta"
            variant="link"
            @click="activeTab = 'register'"
          />
        </div>
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
        <div class="text-center text-xl mb-4">Registrar conta</div>
        <auth-register />
        <div class="flex justify-end mt-4">
          <u-button
            label="Já possuo uma conta"
            variant="link"
            @click="activeTab = 'login'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
