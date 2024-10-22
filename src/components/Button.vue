<template>
    <button
        class="flex items-center justify-center transition text-base font-semibold py-3 px-6 border rounded-lg"
        :class="[cursor, color]"
        @click="click">
        <slot name="icon-left" class="mr-2"></slot>
        <slot></slot>
        <slot name="icon-right" class="ml-2"></slot>
    </button>
</template>

<script setup lang="ts">
import { Ref, computed, defineComponent } from 'vue';
import { ButtonColor } from "../types/index";

defineComponent({
    name: "ButtonGista"
});

const props = withDefaults(
    defineProps<{
        disabled?: boolean,
        color?: ButtonColor
    }>(), {
        color: 'default',
        disabled: false,
    }
)

const emit = defineEmits(["click"]);

const cursor = computed(() => {
    return props.disabled ? "cursor-not-allowed" : "cursor-pointer";
});

const color: Ref<string> = computed(() => {
    if (props.color === "red") {
        return "bg-red-200 hover:bg-red-100 text-red-950 disabled:bg-red-50 disabled:text-red-700";
    } else if (props.color === "yellow") {
        return "bg-yellow-200 hover:bg-yellow-100 text-yellow-950 disabled:bg-yellow-50 disabled:text-yellow-700";
    } else if (props.color === "green") {
        return "bg-green-200 hover:bg-green-100 text-green-950 disabled:bg-green-50 disabled:text-green-700";
    } else if (props.color === "blue") {
        return "bg-blue-200 hover:bg-blue-100 text-blue-950 disabled:bg-blue-50 disabled:text-blue-700";
    } else {
        return "bg-gray-200 hover:bg-gray-100 text-gray-950 disabled:bg-gray-50 disabled:text-gray-700";
    }
})

function click(): void {
    emit("click");
}
</script>