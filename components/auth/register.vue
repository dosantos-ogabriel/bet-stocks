<script lang="ts" setup>
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const form = reactive({
  name: undefined,
  email: undefined,
  confirmEmail: undefined,
  password: undefined,
  confirmPassword: undefined,
});

const schema = z.object({
  name: z.string({ required_error: "Campo obrigatório" }),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("Digite um e-mail válido"),
  confirmEmail: z
    .string({ required_error: "Campo obrigatório" })
    .email("Digite um e-mail válido")
    .refine(async (v) => v === form.email, "Os campos de e-mail devem ser iguais"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(6, "A senha deve possuir no mínimo 6 caracteres"),
  confirmPassword: z
    .string({ required_error: "Campo obrigatório" })
    .refine(async (v) => v === form.password, "Os campos de senha devem ser iguais"),
});
type Schema = z.output<typeof schema>;

const { register } = useAuthStore();

const submit = async (e: FormSubmitEvent<Schema>) => {
  const data: Optional<Schema, "confirmEmail" | "confirmPassword"> = e.data;

  delete data.confirmEmail;
  delete data.confirmPassword;

  await register(data);

  navigateTo("");
};
</script>

<template>
  <u-form :schema="schema" :state="form" class="space-y-4" @submit="submit">
    <u-form-group required label="Nome completo" size="lg" name="name">
      <u-input v-model="form.name" placeholder="Digite seu nome completo" />
    </u-form-group>

    <u-form-group required label="E-mail" size="lg" name="email">
      <u-input v-model="form.email" type="email" placeholder="exemplo@email.com" />
    </u-form-group>
    <u-form-group required label="Confirmar e-mail" size="lg" name="confirmEmail">
      <u-input
        v-model="form.confirmEmail"
        type="email"
        placeholder="exemplo@email.com"
      />
    </u-form-group>

    <u-form-group required label="Senha" size="lg" name="password">
      <u-input v-model="form.password" type="password" placeholder="Digite sua senha" />
    </u-form-group>
    <u-form-group required label="Confirmar senha" size="lg" name="confirmPassword">
      <u-input
        v-model="form.confirmPassword"
        type="password"
        placeholder="Repita sua senha"
      />
    </u-form-group>

    <div class="flex mt-4 justify-center">
      <u-button type="submit" label="Registrar" size="lg" />
    </div>
  </u-form>
</template>
