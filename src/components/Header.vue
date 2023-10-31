<template>
  <ion-header>
    <ion-toolbar>
      <a href="/home">
        <ion-img
          src="/icons/logo.svg"
          class="max-w-[150px] md:max-w-lg ml-5"
          alt="FlowSummit logo"
        ></ion-img>
      </a>

      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonImg,
  IonButtons,
  IonMenuButton,
  IonToolbar,
} from "@ionic/vue";
</script>
