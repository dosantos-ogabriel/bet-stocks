<script lang="ts" setup>
import { Line } from "vue-chartjs";

const { data } = defineProps<{ data: unknown[] }>();

const config = {
  type: "line",
  data: {},
  options: {},
  plugins: [],
};
</script>

<template>
  <line :config />
</template>
