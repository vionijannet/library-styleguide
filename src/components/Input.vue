<template>
    <label v-if="labelText" :for="labelFor">{{ labelText }}</label>
    <input :id="labelFor" :name="labelFor" v-model="value"
        @blur="emit('blur')" v-bind="attrs"
        class="w-full border rounded-lg border-gray-950 p-2" />
</template>

<script setup lang="ts">
import { useAttrs, computed } from "vue";

const props = withDefaults(
    defineProps<{
        modelValue: string,
        labelText?: string,
        labelFor?: string,
        disabled?: boolean,
    }>(), {
        disabled: false,
    }
)

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void,
    (e: "blur"): void
}>();

const value = computed({
    get() {
        return props.modelValue
    },
    set(newValue: string) {
        emit("update:modelValue", newValue);
    }
})

const attrs = useAttrs();
</script>