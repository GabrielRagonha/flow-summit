<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="flex flex-col gap-2">
        <a
          href="/novo-evento"
          class="bg-[#F97316] shadow p-2 rounded-md flex items-center justify-center w-full text-white active:bg-[#f97316e6] hover:bg-[#f97316e6] transition-all"
          >Criar novo evento</a
        >

        <a
          href="#"
          class="bg-[#F97316] shadow p-2 rounded-md flex items-center justify-center w-full text-white active:bg-[#f97316e6] hover:bg-[#f97316e6] transition-all"
          >Ver perfil</a
        >

        <button
          class="bg-[#cf1d1d] shadow p-2 rounded-md flex items-center justify-center w-full text-white active:bg-[#cf1d1de6] hover:bg-[#cf1d1de6] transition-all"
          @click.prevent="handleLogout()"
        >
          Logout
        </button>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

function handleLogout() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")

  location.reload();
}
</script>
