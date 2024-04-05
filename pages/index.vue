<script lang="ts" setup>
const betHistoryStore = useBetHistoryStore();
const { getBetHistory } = betHistoryStore;
const { history } = storeToRefs(betHistoryStore);

onMounted(getBetHistory);

const chartData = computed(() => {
  return history.value.map((i) => i);
});
</script>

<template>
  <div>
    <div class="text-xl">Resumo</div>
    <u-divider class="my-4" />

    <home-chart :data="chartData" />
  </div>
</template>
