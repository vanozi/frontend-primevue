<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <NavBar :items="items" />
        </header>
        <div class="flex-1 w-full px-4 md:px-8 lg:px-16 py-6">
            <slot />
        </div>
    </div>
</template>

<script setup>
import 'primeicons/primeicons.css'
const items = ref([
    {
        label: 'Uren',
        icon: 'calendar_today'
    },
    {
        label: 'Werkplaats',
        icon: 'build'
    },
    {
        label: 'Projects',
        items: [
            {
                label: 'Components',
            },
            {
                label: 'Blocks',
            },
            {
                label: 'UI Kit',
            },
            {
                label: 'Templates',
                items: [
                    {
                        label: 'Apollo',
                    },
                    {
                        label: 'Ultima',
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',

    }
]);
</script>

<style scoped>
.router-link-exact-active {
    color: #1ba673
}
</style>
