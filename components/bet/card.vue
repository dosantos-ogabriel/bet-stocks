<script lang="ts" setup>
import { type Bet } from "@prisma/client";

const { bet } = defineProps<{ bet: Bet }>();

const modal = ref(false);
</script>

<template>
  <u-card class="space-y-3">
    <div class="text-sm">
      Valor:
      {{ formatMoney(bet.amount) }}
    </div>
    <div class="text-sm">
      Valor esperado:
      {{ formatMoney(bet.finalAmount) }}
    </div>
    <div class="flex justify-end">
      <u-button color="gray" label="Finalizar aposta" @click="modal = true" />
    </div>

    <u-modal v-model="modal">
      <div class="p-6">
        <bet-finish-modal :bet @close="modal = false" />
      </div>
    </u-modal>
  </u-card>
</template>
