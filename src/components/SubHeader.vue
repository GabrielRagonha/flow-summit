<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Conteúdo do submenu</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>
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