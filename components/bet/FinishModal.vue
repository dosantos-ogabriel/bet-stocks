<script lang="ts" setup>
import type { FormSubmitEvent } from "#ui/types";
import type { Bet } from "@prisma/client";
import { z } from "zod";

const { bet } = defineProps<{ bet: Bet }>();

const form = reactive({
  finalAmount: bet.finalAmount,
});

const schema = z.object({
  finalAmount: z
    .number({ invalid_type_error: "Digite um valor não negativo." })
    .min(0, "Digite um valor não negativo."),
});
type Schema = z.output<typeof schema>;

const submit = async (e: FormSubmitEvent<Schema>) => {
  console.log(e);
};
</script>

<template>
  <u-form class="space-y-4" :schema="schema" :state="form" @submit="submit">
    <u-form-group id="finalAmount" label="Confirme o valor final:" name="finalAmount">
      <u-input v-model="form.finalAmount" type="number" placeholder="0,00" />
    </u-form-group>

    <div class="flex justify-end">
      <u-button label="Confirmar" type="submit" color="gray" />
    </div>
  </u-form>
</template>
