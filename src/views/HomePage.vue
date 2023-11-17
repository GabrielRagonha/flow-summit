<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <CardList :events="events" />
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ref, onMounted } from "vue";
import { getEvents } from "@/service/Event.service";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import CardList from "../components/CardList.vue";

const events = ref<any>([]);

onMounted(async () => {
  try {
    const response = await getEvents();
    events.value = response?.data;
  } catch (error) {
    console.error("Erro:", error);
  }
});
</script>
