<script lang="ts" setup>
import { type Bet } from "@prisma/client";

const { bet } = defineProps<{ bet: Bet }>();
</script>

<template>
  <div class="p-4 bg-green-50 dark:bg-green-900 shadow-sm rounded-sm space-y-3">
    <div class="text-sm">
      Valor:
      {{ formatMoney(bet.amount) }}
    </div>
    <div class="text-sm">
      Valor esperado:
      {{ formatMoney(bet.finalAmount) }}
    </div>
    <div class="flex justify-end">
      <u-button color="gray" label="Finalizar aposta" />
    </div>
  </div>
</template>
