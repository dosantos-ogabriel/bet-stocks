<script lang="ts" setup></script>

<template>
  <u-form class="space-y-4">
    <u-form-group label="Email">
      <u-input placeholder="email@email.com" />
    </u-form-group>

    <u-form-group label="Confirmar e-mail">
      <u-input placeholder="email@email.com" />
    </u-form-group>

    <u-form-group label="Senha">
      <u-input placeholder="Senha" />
    </u-form-group>

    <u-form-group label="Confirmar senha">
      <u-input placeholder="Confirme a senha" />
    </u-form-group>

    <div class="flex mt-4 justify-center">
      <u-button type="submit" label="Registrar" size="lg" />
    </div>
  </u-form>
</template>
