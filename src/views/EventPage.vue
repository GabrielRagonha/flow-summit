<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container" class="h-full">
          <div class="h-full w-full px-4 flex flex-col justify-between">
            <div>
              <ion-card class="my-2 mx-0">
                <ion-card-header>
                  <ion-card-title>{{ event?.name }}</ion-card-title>
                  <ion-card-subtitle> Evento </ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <img
                    src="https://picsum.photos/1000"
                    v-bind:alt="'Imagem do evento ' + event?.name"
                  />
                </ion-card-content>
                
                <div class="text-sm p-5 text-black">
                  {{ event?.description }}
                </div>
              </ion-card>
            </div>

            <div class="py-5">
              <button
                id="confirm-btn"
                @click.prevent="handleConfirm()"
                fill="outline"
                color="dark"
                class="w-full text-white h-14 font-bold bg-[#F97316] rounded-lg"
                type="submit"
              >
                Confirmar presença
              </button>
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
} from "@ionic/vue";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { confirmEvent, getEvent } from "@/service/Event.service";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import { getSchedule } from "@/service/User.service";

const router = useRoute();
const event = ref<any>([]);
const user = JSON.parse(localStorage.getItem("user")!);

onMounted(async () => {
  try {
    const eventData = await getEvent(router.path.split("/")[2]);
    const scheduleUser = await getSchedule();
    event.value = eventData?.data;

    if (
      scheduleUser.find((schedule) => schedule.idEvent === event.value.idEvent)
    ) {
      const btn = document.getElementById("confirm-btn");
      btn.innerHTML = "Presença confirmada";
      btn.style.backgroundColor = "#008000";
    }
  } catch (error) {
    console.error("Erro:", error);
  }
});

async function handleConfirm() {
  try {
    const response = await confirmEvent({
      idEvent: router.path.split("/")[2],
      idUser: user.idUser,
    });

    if (response?.status === 200) {
      const btn = document.getElementById("confirm-btn");
      btn.innerHTML = "Presença confirmada";
      btn.style.backgroundColor = "#008000";
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
</script>
