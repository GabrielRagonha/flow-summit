<template>
  <SubHeader />

  <ion-page id="main-content">
    <Header />

    <ion-content :fullscreen="true">
      <div id="container">
        <CardList />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";

import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import CardList from "../components/CardList.vue";
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
