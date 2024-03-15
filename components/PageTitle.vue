<template>
    <div class="text-left text-lg md:text-xl lg:text-2xl mb-4">
        <slot/>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Page Title'
    }
})

</script>

<style lang="scss" scoped></style>