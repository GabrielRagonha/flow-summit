<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        class="h-full w-full flex flex-col py-10 px-4 text-center gap-8 justify-start"
      >
        <div class="flex flex-col gap-8">
          <AuthenticateTop
            :title="'Login'"
            :desc="'Entre agora e garanta acesso aos melhores eventos da região!'"
          />
        </div>

        <div class="flex flex-col gap-4">
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input
              type="password"
              placeholder="No mínimo 8 caracteres"
              :minlength="8"
              :required="true"
            />
          </ion-item>

          <ion-item>
            <ion-label>Senha</ion-label>
            <ion-input
              type="password"
              placeholder="No mínimo 8 caracteres"
              :minlength="8"
              :required="true"
            />
          </ion-item>
        </div>

        <div class="flex flex-col gap-6">
          <ion-button fill="outline" color="dark" class="w-full h-14">Entrar</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/vue";

import AuthenticateTop from "../components/AuthenticateTop.vue";
</script>
