<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <ion-list class="px-4">
            <ion-item-group>
              <ion-item-divider class="p-0 bg-black px-4 rounded-md">
                <span class="text-white text-sm">Dados da conta</span>
              </ion-item-divider>

              <ion-item>
                <ion-label> Nome: {{ user.name }} </ion-label>
              </ion-item>

              <ion-item>
                <ion-label>Email: {{ user.email }}</ion-label>
              </ion-item>
            </ion-item-group>

            <ion-item-group>
              <ion-item-divider class="p-0 bg-black px-4 rounded-md">
                <span class="text-white text-sm"
                  >Eventos com presença confirmada</span
                >
              </ion-item-divider>

              <ion-item v-for="event in events" :key="event?.data?.idEvent">
                <a class="text-sm my-3 line-clamp-2" v-bind:href="'/eventos/' + event?.data?.idEvent">{{ event?.data?.name }}</a>
              </ion-item>
            </ion-item-group>
          </ion-list>
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonLabel,
  IonItemDivider,
  IonItem,
  IonItemGroup,
  IonList,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import { getSchedule } from "@/service/User.service";
import { getEvent } from "@/service/Event.service";

const user = JSON.parse(localStorage.getItem("user")!);
const events = ref<any>([]);

onMounted(async () => {
  const scheduleUser = await getSchedule();

  const confirmedEvents = await Promise.all(
    scheduleUser.map(
      async (scheduleEvent) => await getEvent(scheduleEvent.idEvent)
    )
  );

  events.value = confirmedEvents;
});
</script>
