<template>
    <ion-page>

        <ion-header>
            <ion-toolbar>
                Teste
                <ion-buttons slot="start">
                    <ion-back-button default-href="#"></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-menu-button :auto-hide="false"></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        Nome do Evento
                    </ion-card-title>
                    <ion-card-subtile>
                        Subtitulo
                    </ion-card-subtile>
                </ion-card-header>
                <ion-card-content>
                    <img src="https://fakeimg.pl/500" alt="">
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-item>
                    the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                    dolor
                    sit amet..", comes from a line in section 1.10.32 the theory of ethics, very popular during the
                    Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                </ion-item>
            </ion-card>
            <ion-card>
                <ion-list lines="full" mode="md">
                    <EvenItem :info="'item 1'" />
                </ion-list>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import { defineComponent } from 'vue';
import EventItem from "../components/EventItem.vue";

export default defineComponent({
    components: { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar },
    setup() {
        return { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star };
    },
});
</script>
