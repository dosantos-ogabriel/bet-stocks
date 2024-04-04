<script lang="ts" setup>
const betStore = useBetStore();
const { getActiveBets } = betStore;
const { bets } = storeToRefs(betStore);

onMounted(getActiveBets);
</script>

<template>
  <div>
    <div class="text-xl">Apostas ativas</div>
    <u-divider class="my-2" />

    <div class="flex gap-4">
      <bet-card v-for="bet in bets" :key="bet.id" :bet>
        {{ bet }}
      </bet-card>
    </div>
  </div>
</template>
