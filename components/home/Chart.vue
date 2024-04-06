<script lang="ts" setup>
import { type ChartData } from "chart.js";
import { Line as LineChart } from "vue-chartjs";
const betHistoryStore = useBetHistoryStore();
const { history } = storeToRefs(betHistoryStore);

const labels = computed(() => [
  "06/04/2024",
  ...history.value.map((item) => formatDate(item.createdAt)),
]);

const dataset = computed(() => [
  1,
  ...history.value.map((item, index) => {
    const pastDeviation = history.value
      .slice(0, index)
      .reduce((acc, cur) => acc + cur.deviation, 1);
    return ParseFloat(item.deviation + pastDeviation);
  }),
]);

const data = computed<ChartData<"line">>(() => {
  return {
    labels: labels.value,
    datasets: [
      {
        data: dataset.value,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
      },
    ],
  };
});
</script>

<template>
  <div>
    <line-chart :data />
  </div>
</template>
