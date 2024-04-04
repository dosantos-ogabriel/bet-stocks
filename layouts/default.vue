<script lang="ts" setup>
const { getUser } = useUserStore();

onBeforeMount(getUser);
</script>

<template>
  <div class="default-layout min-h-[100vh] dark:bg-[#010d00]">
    <layout-header />
    <u-container>
      <main class="py-4">
        <slot />
      </main>
    </u-container>
  </div>
</template>
