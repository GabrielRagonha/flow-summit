<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <form class="h-full w-full flex flex-col py-10 px-4 text-center gap-8 justify-start"
            @submit.prevent="handleNewEvent()">
            <div class="flex flex-col gap-4">
              <ion-item>
                <ion-input type="text" label="Nome do evento" placeholder="Insira o nome do evento" :required="true"
                  v-model="newEvent.name" />
              </ion-item>

              <ion-item>
                <ion-input type="text" label="Descrição do evento" placeholder="Insira a descrição do evento"
                  :required="true" v-model="newEvent.description" />
              </ion-item>

              <ion-item>
                <ion-input type="datetime-local" label="Ínicio" :required="true" v-model="newEvent.startDate" />
              </ion-item>

              <ion-item>
                <ion-input type="datetime-local" label="Fim" :required="true" v-model="newEvent.endDate" />
              </ion-item>
            </div>

            <div class="flex flex-col gap-4">
              <ion-button fill="outline" color="dark" class="w-full h-14" type="submit">Criar</ion-button>
            </div>
          </form>
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import { IonContent, IonItem, IonButton, IonPage, IonInput } from "@ionic/vue";

import router from "@/router";
import { ref } from "vue";
import { createEvent } from "@/service/Event.service";
import { EventResponse } from "@/interfaces/EventResponse";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";

const newEvent = ref<EventResponse>({
  name: "",
  description: "",
  startDate: new Date(),
  endDate: new Date(),
});

async function handleNewEvent() {
  try {
    await createEvent(newEvent);

    router.push("/home")
  } catch (error) {
    console.error("Erro:", error);
  }
}
</script>
