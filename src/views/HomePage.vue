<template>
  <section>
    <SubHeader />
  
    <ion-page id="main-content">
      <Header />
  
      <ion-content :fullscreen="true">
        <div id="container">
          <CardList />
        </div>
      </ion-content>
    </ion-page>
  </section>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";

import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import CardList from "../components/CardList.vue";
</script>
