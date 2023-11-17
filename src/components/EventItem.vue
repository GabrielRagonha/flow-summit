<template>
    <ion-item>
        <ion-label>{{ info }}</ion-label>
    </ion-item>
</template>

<script lang="ts">
export default {
    props: {
        info: String,
    },
};
</script>