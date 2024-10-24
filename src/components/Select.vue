<template>
    <div>{{ value }}</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { Option } from '../types';

defineComponent({
    name: "SelectGista"
});

withDefaults(
    defineProps<{
        value: Option | string,
        options: Option[] | string[],
    }>(), {
        value: "",
        options: () => [],
    }
);
</script>