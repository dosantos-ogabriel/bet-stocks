<script lang="ts" setup>
import { useAuthStore } from "#imports";
import type { FormSubmitEvent } from "#ui/types";
import z from "zod";

const form = reactive({
  email: undefined,
  password: undefined,
});

const schema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório." })
    .email("Digite um e-mail válido"),
  password: z.string({ required_error: "Campo obrigatório." }),
});
type Schema = z.output<typeof schema>;

const { login } = useAuthStore();

const submit = async (event: FormSubmitEvent<Schema>) => {
  const body = event.data;

  await login(body);
};
</script>

<template>
  <u-form class="space-y-4" :state="form" :schema="schema" @submit="submit">
    <u-form-group id="email" label="Email" name="email">
      <u-input
        v-model="form.email"
        placeholder="email@email.com"
        icon="i-heroicons-envelope"
      />
    </u-form-group>

    <u-form-group id="password" label="Senha" name="password">
      <u-input
        v-model="form.password"
        placeholder="Senha"
        type="password"
        icon="i-heroicons-lock-closed"
      />
    </u-form-group>

    <div class="flex mt-4 justify-center">
      <u-button type="submit" label="Entrar" size="lg" />
    </div>
  </u-form>
</template>
