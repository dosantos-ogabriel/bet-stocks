import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
export default defineNuxtPlugin(() => {
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);
});
