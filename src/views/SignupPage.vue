<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <form class="h-full w-full flex flex-col py-10 px-4 text-center gap-8 justify-start"
        @submit.prevent="handleSignup()">
        <div class="flex flex-col gap-8">
          <AuthenticateTop :title="'Crie sua conta'" :desc="'Faça agora seu registro e conheça o FlowSummit!'" />
        </div>

        <div class="flex flex-col gap-4">
          <ion-item>
            <ion-label>Nome</ion-label>
            <ion-input type="text" placeholder="No mínimo 8 caracteres" :required="true" v-model="name" />
          </ion-item>

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
          <button fill="outline" color="dark" type="submit" class="w-full h-14">Registrar</button>
          <p></p>
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
import { SignupResponse } from '@/interfaces/SignupResponse';
import { ref } from 'vue';
import AuthenticateTop from "../components/AuthenticateTop.vue";
import router from "@/router";

const name = ref("Gabriel10");
const email = ref("gabriel1@hotmail.com");
const pass = ref("123");

async function handleSignup() {
  try {
    const formData = {
      name: name.value,
      email: email.value,
      password: pass.value,
    }

    const httpService = new HttpService();

    const result = await httpService.post<SignupResponse>("user/signup", formData)

    result.status === 200 && router.push("/login");

  } catch (error: any) {
    console.error("Deu erro: ", error.message)
  }
}

</script>
