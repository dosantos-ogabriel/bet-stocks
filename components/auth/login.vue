<script lang="ts" setup></script>

<template>
  <u-form class="space-y-4">
    <u-form-group label="Email">
      <u-input placeholder="email@email.com" icon="i-heroicons-envelope" />
    </u-form-group>

    <u-form-group label="Senha">
      <u-input placeholder="Senha" icon="i-heroicons-lock-closed" />
    </u-form-group>

    <div class="flex mt-4 justify-center">
      <u-button type="submit" label="Entrar" size="lg" />
    </div>
  </u-form>
</template>
