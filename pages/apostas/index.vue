<script lang="ts" setup>
const betStore = useBetStore();
const { getActiveBets } = betStore;
const { bets } = storeToRefs(betStore);

onMounted(getActiveBets);

const modal = ref(false);
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="text-xl">Apostas ativas</div>
      <u-button
        label="Adicionar aposta"
        icon="i-heroicons-plus"
        @click="modal = true"
      />
    </div>
    <u-divider class="my-4" />

    <div class="flex flex-col md:flex-row gap-4">
      <bet-card v-for="bet in bets" :key="bet.id" :bet class="w-full md:w-1/3" />
    </div>

    <u-modal v-model="modal">
      <bet-add-modal class="p-6" />
    </u-modal>
  </div>
</template>
