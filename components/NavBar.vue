<template>
    <Menubar :model="props.items">
        <template #item="{ item, props, hasSubmenu, root }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
                <span class="material-icons-outlined">{{ item.icon }}</span>
                <span class="ml-2">{{ item.label }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>
    </Menubar>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.router-link-exact-active {
    color: #1ba673
}
</style>