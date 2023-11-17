<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <CardList :projects="projects" />
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { ref, onMounted } from "vue";
import { getProjects } from "@/service/Project.service";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import CardList from "../components/CardList.vue";

const projects = ref<any>([]);

onMounted(async () => {
  try {
    const response = await getProjects();
    projects.value = response?.data;
  } catch (error) {
    console.error("Erro:", error);
  }
});
</script>
