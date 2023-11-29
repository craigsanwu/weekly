<script setup lang="ts">
const props = defineProps <{
    modelValue?: boolean,
}> ()
</script>

<template>
    <div>
        hello world
        <slot/>
    </div>
</template>