<template>
    <label v-if="labelText" :for="labelFor" class="flex space-x-1">
        <span>{{ labelText }}</span>
        <span v-if="mandatory" class="text-red-600">*</span>
    </label>
    <div class="relative w-full h-full">
        <button :id="labelFor" :disabled="disabled" @click="isOptionExpanded = !isOptionExpanded" @blur="closeToggle" class="flex items-center justify-between px-3 py-2 mb-1 w-full rounded-md border">
            <div>
                <slot name="selected" :slot-props="modelValue">
                    {{ getStringFromOption(modelValue, "text") }}
                </slot>
            </div>
            <span class="transform transition-transform" :class="{
                '-rotate-90': isOptionExpanded,
                'rotate-90': !isOptionExpanded
            }">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </button>
        <transition
            enter-active-class="transform transition duration-500 ease-custom"
            enter-class="-translate-y-1/2 scale-y-0 opacity-0"
            enter-to-class="translate-y-0 scale-y-100 opacity-100"
            leave-active-class="transform transition duration-300 ease-custom"
            leave-class="translate-y-0 scale-y-100 opacity-100"
            leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
            <ul v-if="!disabled && isOptionExpanded" class="absolute left-0 right-0 rounded-md overflow-auto max-h-52 z-50 shadow-sm border">
                <li v-for="(v, i) in options"
                    :key="i"
                    class="cursor-pointer px-3 py-2 transition-colors hover:bg-gray-300"
                    :value="typeof v === 'object' ? v.value : v"
                    @click="setOption(v)">
                    <slot name="option" :slot-props="v">{{ getStringFromOption(v, "text") }}</slot>
                </li>

            </ul>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Option } from '../types';
import { timer } from 'rxjs';

defineComponent({
    name: "SelectGista"
});

const isOptionExpanded = ref(false);

const props = withDefaults(
    defineProps<{
        modelValue: Option | string,
        options: Option[] | string[],
        labelText?: string,
        labelFor?: string,
        mandatory?: boolean,
        disabled?: boolean,
    }>(), {
        value: "",
        options: () => [],
        mandatory: false,
    }
);

const emit = defineEmits<{
    (e: "update:modelValue", value: Option | string): void,
}>();

function closeToggle(): void {
    timer(100).subscribe(() => {
        isOptionExpanded.value = false;
    });
}

function setOption(option: Option | string): void {
    emit("update:modelValue", option);
    isOptionExpanded.value = false;
}

function getStringFromOption(option: Option | string, takenProp: "text" | "value"): string {
    if (typeof option === "object") {
        return option[takenProp];
    } else return option;
}
</script>

<style>
.ease-custom {
    transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>