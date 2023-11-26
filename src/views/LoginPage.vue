<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <form class="h-full w-full flex flex-col py-10 px-4 text-center gap-8 justify-start"
        @submit.prevent="handleLogin()">
        <div class="flex flex-col gap-8">
          <AuthenticateTop :title="'Login'" :desc="'Entre agora e garanta acesso aos melhores eventos da região!'" />
        </div>

        <div class="flex flex-col gap-4">
          <ion-item>
            <ion-input type="email" label="Email" placeholder="No mínimo 8 caracteres" :required="true" v-model="email" />
          </ion-item>

          <ion-item>
            <ion-input type="password" label="Senha" placeholder="No mínimo 8 caracteres" :required="true"
              v-model="pass" />
          </ion-item>
        </div>

        <div class="flex flex-col gap-4">
          <button class="w-full h-14 text-white font-bold bg-[#F97316] rounded-lg" fill="outline" color="dark" type="submit">Entrar</button>
          <p class="mb-5">Não possui um cadastro?
            <a href="/cadastro" class="underline">Faça agora!</a>
          </p>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonItem,
  IonButton,
  IonPage,
  IonInput,
} from "@ionic/vue";

import { HttpService } from "@/service/Http.service";
import { LoginResponse } from "@/interfaces/LoginResponse";
import { ref } from "vue";
import AuthenticateTop from "../components/AuthenticateTop.vue";
import router from "@/router";

const email = ref();
const pass = ref();

async function handleLogin() {
  try {
    const formData = {
      email: email.value,
      password: pass.value,
    };

    const httpService = new HttpService();

    const result = await httpService.post<LoginResponse>(
      "user/login",
      formData
    );

    const { user, token } = result.data

    localStorage.user = JSON.stringify({
      ...user,
      password: null
    })
    localStorage.token = token

    result.status === 200 && router.push("/home");
  } catch (error: any) {
    console.error("Erro: ", error.message);
  }
}
</script>
