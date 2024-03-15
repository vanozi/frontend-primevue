<template>    <div class="flex items-center justify-center space-x-4 my-4">            <span >{{startOfCurrentWeek}} - {{endOfCurrentWeek}}</span></div>

    <div class="flex items-center justify-center space-x-4 my-4">
        <Button icon="pi pi-angle-left" text rounded aria-label="Filter" />
        <span >Week: {{weekNumber}} </span>

        <Button icon="pi pi-angle-right" text rounded aria-label="Filter" />
            

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDates } from '../composables/dates.ts'
const { today, year, weekDates, weekNumber, subtractWeek, addWeek, isAllowedToAddWeek, getWeeksInYear, startOfCurrentWeek, endOfCurrentWeek  } = useDates()
// Starting with the current week



</script>