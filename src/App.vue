<template>
  <h1 class="text-center">Vite Project Library</h1>
  <div class="flex items-center justify-center space-x-2">
    <Button @click="showAlert('red')" :color="'red'">Test</Button>
    <Button @click="showAlert('yellow')" :color="'yellow'">Test</Button>
    <Button @click="showAlert('green')" :color="'green'">Test</Button>
    <Button @click="showAlert('blue')" :color="'blue'">Test</Button>
    <Button @click="showAlert('default')">Test</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";

function showAlert(color: string): void {
  window.alert("Test " + color);
}
</script>