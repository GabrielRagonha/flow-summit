<template>
  <section>
    <SubHeader />

    <ion-page id="main-content">
      <Header />

      <ion-content :fullscreen="true">
        <div id="container">
          <!-- Get user name and email -->
          <p>Nome:</p>
          <p>Email:</p>

          <!-- Get user confirmed events and display inside a table -->
          <p>Eventos com presença confirmada:</p>
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
</script>
