<script lang="ts" setup>
import { AuthTitle } from '@/components'
</script>

<template>
  <div class="login__container">
    <AuthTitle
      title="Bem vindo à Chamado.app"
      subtitle="Faça login para continuar" />

    <q-form class="login__form">
      <QRow gutter="lg">
        <QCol>
          <q-input label="E-mail" type="email" model-value="">
            <template v-slot:prepend>
              <q-icon name="mdi-email-outline" />
            </template>
          </q-input>
        </QCol>
        <QCol>
          <q-input label="Senha" type="password" model-value="">
            <template v-slot:prepend>
              <q-icon name="mdi-lock-outline" />
            </template>
            <template v-slot:append>
              <q-btn round flat icon="mdi-eye-off-outline" />
            </template>
          </q-input>
        </QCol>
        <QCol class="login__form-submit">
          <q-btn label="entrar" color="primary" />
        </QCol>
      </QRow>
    </q-form>
  </div>
</template>

<style lang="scss">
.login {
  &__container {
    display: grid;
    grid-gap: 3rem;
  }

  &__form {
    &-submit {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
  }
}
</style>
