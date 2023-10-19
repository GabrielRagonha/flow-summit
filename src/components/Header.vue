<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>FlowSummit</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButtons,
      IonContent, 
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
