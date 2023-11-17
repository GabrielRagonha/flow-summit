<template>
  <ion-grid v-if="props.projects.length !== 0">
    <ion-row>
      <ion-col>
        <Card
          v-for="(project, index) in props.projects"
          :key="index"
          :project="project"
        />
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

const props = defineProps(["projects"]);

import Card from "../components/Card.vue";
</script>
