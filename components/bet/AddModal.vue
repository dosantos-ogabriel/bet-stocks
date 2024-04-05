<script lang="ts" setup>
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const emit = defineEmits(["close"]);
const { createBet, getActiveBets } = useBetStore();

const form = reactive({
  amount: undefined,
  finalAmount: undefined,
});

const schema = z.object({
  amount: z
    .number({ invalid_type_error: "Digite um valor não negativo." })
    .min(0, "Digite um valor não negativo."),
  finalAmount: z
    .number({ invalid_type_error: "Digite um valor não negativo." })
    .min(0, "Digite um valor não negativo."),
});
type Schema = z.output<typeof schema>;

const submit = async (e: FormSubmitEvent<Schema>) => {
  const body = e.data;

  await createBet(body);

  emit("close");
  getActiveBets();
};
</script>

<template>
  <u-form class="space-y-4" :schema="schema" :state="form" @submit="submit">
    <u-form-group id="amount" label="Confirme o valor apostado:" name="amount">
      <u-input v-model="form.amount" type="number" placeholder="0,00" step="0.01" />
    </u-form-group>
    <u-form-group id="finalAmount" label="Confirme o valor final:" name="finalAmount">
      <u-input
        v-model="form.finalAmount"
        type="number"
        placeholder="0,00"
        step="0.01"
      />
    </u-form-group>

    <div class="flex justify-end">
      <u-button label="Confirmar" type="submit" color="gray" />
    </div>
  </u-form>
</template>
