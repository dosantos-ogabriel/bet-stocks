<script lang="ts" setup>
const betHistoryStore = useBetHistoryStore();
const { getBetHistory } = betHistoryStore;

onMounted(getBetHistory);
</script>

<template>
  <div>
    <div class="text-xl">Resumo</div>
    <u-divider class="my-4" />

    <home-chart class="h-[50vh]" />
  </div>
</template>
