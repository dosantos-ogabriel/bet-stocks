<script setup lang="ts">
const { logout } = useAuthStore();
const links = [
  [
    {
      label: "Início",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Apostas",
      icon: "i-heroicons-banknotes",
      to: "/apostas",
    },

    // {
    //   label: "Relatórios",
    //   icon: "material-symbols:assignment-outline",
    // },
  ],
  [
    {
      icon: "i-heroicons-cog-6-tooth",
    },
    {
      icon: "i-heroicons-arrow-right-start-on-rectangle",
      click: logout,
    },
  ],
];
</script>

<template>
  <header>
    <u-container>
      <u-horizontal-navigation :links="links" />
    </u-container>
    <u-divider />
  </header>
</template>
