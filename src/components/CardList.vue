<template>
  <ion-grid v-if="props.events.length !== 0">
    <ion-row>
      <ion-col>
        <Card v-for="(event, index) in props.events" :key="index" :event="event" />
      </ion-col>
    </ion-row>
  </ion-grid>

  <div v-else class="h-[91.5vh] flex justify-center items-center">
    <p class="text-center max-w-[95%]">
      Nenhum projeto está disponível no momento =(
    </p>
  </div>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import Card from "./Card.vue";

const props = defineProps(["events"]);
</script>
