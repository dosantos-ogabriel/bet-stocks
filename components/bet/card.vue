<script lang="ts" setup>
import { type Bet } from "@prisma/client";

const { bet } = defineProps<{ bet: Bet }>();
</script>

<template>
  <div class="p-5 bg-slate-200 dark:bg-slate-800 shadow-sm rounded-md">
    {{ bet.amount }}
  </div>
</template>
