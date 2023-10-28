<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <form class="h-full w-full flex flex-col py-10 px-4 text-center gap-8 justify-start"
        @submit.prevent="handleLogin()">
        <div class="flex flex-col gap-8">
          <AuthenticateTop :title="'Login'" :desc="'Entre agora e garanta acesso aos melhores eventos da região!'" />
        </div>

        <div class="flex flex-col gap-4">
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email" placeholder="No mínimo 8 caracteres" :required="true" v-model="email" />
          </ion-item>

          <ion-item>
            <ion-label>Senha</ion-label>
            <ion-input type="password" placeholder="No mínimo 8 caracteres" :required="true" v-model="pass" />
          </ion-item>
        </div>

        <div class="flex flex-col gap-6">
          <button fill="outline" color="dark" class="w-full h-14" type="submit">Entrar</button>
        </div>
      </form>
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
  IonLabel,
} from "@ionic/vue";

import { HttpService } from '@/service/Http.service';
import { LoginResponse } from '@/interfaces/LoginResponse';
import { ref } from 'vue';
import AuthenticateTop from "../components/AuthenticateTop.vue";
import router from "@/router";

const email = ref();
const pass = ref();

async function handleLogin() {
  try {
    const formData = {
      email: email.value,
      password: pass.value,
    }

    const httpService = new HttpService();

    const result = await httpService.post<LoginResponse>("user/login", formData)

    result.status === 200 && router.push("/home");
  } catch (error: any) {
    console.error("Erro: ", error.message)
  }
}
</script>
