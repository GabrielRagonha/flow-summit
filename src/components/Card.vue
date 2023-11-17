<template>
  <ion-card>
    <img alt="{{ props.project.name }}" src="https://picsum.photos/1000" />

    <ion-card-header>
      <ion-card-title>{{ props.project.name }}</ion-card-title>
      <ion-card-subtitle>
        Começo: {{ toDate(props.project.startDate) }} <br>
        Fim: {{ toDate(props.project.endDate) }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ props.project.description }}
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/vue";

const props = defineProps(["project"]);

function toDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    (day < 10 ? "0" : "") +
    day +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    year +
    " às " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes
  );
}
</script>
