<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <div class="h-full w-full px-4">
            <ion-card class="my-2 mx-0">
              <ion-card-header>
                <ion-card-title>{{ event?.name }}</ion-card-title>
                <ion-card-subtitle> Evento universitário </ion-card-subtitle>
              </ion-card-header>
  
              <ion-card-content>
                <img
                  src="https://picsum.photos/1000"
                  v-bind:alt="'Imagem do evento ' + event?.name"
                />
              </ion-card-content>
            </ion-card>
  
            <ion-card class="my-2 mx-0">
              <ion-item class="text-sm py-5">
                {{ event?.description }}
              </ion-item>
            </ion-card>
              
              <div class="mb-5">
                <ion-button fill="outline" color="dark" class="w-full h-14" type="submit">Confirmar presença</ion-button>
              </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/vue";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getEvent } from "@/service/Event.service";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";

const router = useRoute();
const event = ref<any>([]);

onMounted(async () => {
  try {
    const response = await getEvent(router.path.split("/")[2]);

    event.value = response?.data;
  } catch (error) {
    console.error("Erro:", error);
  }
});
</script>
