<script lang="ts" setup>
const betStore = useBetStore();
const { getActiveBets } = betStore;
const { bets } = storeToRefs(betStore);

onMounted(getActiveBets);
</script>

<template>
  <div>
    <div class="text-xl">Apostas ativas</div>
    <u-divider class="my-4" />

    <div class="flex flex-col md:flex-row gap-4">
      <bet-card v-for="bet in bets" :key="bet.id" :bet class="w-full" />
    </div>
  </div>
</template>
