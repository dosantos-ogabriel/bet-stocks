<script setup lang="ts">
const { logout } = useAuthStore();
const links = [
  {
    label: "Apostas",
    icon: "i-heroicons-banknotes",
    to: "/",
  },
];

const dropdownItems = [
  [
    {
      icon: "i-heroicons-cog-6-tooth",
      label: "Configurações",
    },
    {
      icon: "i-heroicons-arrow-right-start-on-rectangle",
      label: "Logout",
      click: logout,
    },
  ],
];
</script>

<template>
  <header>
    <u-container class="flex justify-between align-bottom">
      <u-horizontal-navigation :links="links" />

      <u-dropdown :items="dropdownItems" class="mt-2">
        <u-avatar icon="i-heroicons-user" />
      </u-dropdown>
    </u-container>
    <u-divider />
  </header>
</template>
