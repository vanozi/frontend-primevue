import { ref, computed } from 'vue';
import { format, getISOWeek, getYear, getMonth, startOfWeek, endOfWeek, addDays, addWeeks, subWeeks, isBefore, startOfYear, eachWeekOfInterval, endOfYear, formatISO } from 'date-fns';
import { nl } from 'date-fns/locale';

export function useDates() {
  const today = ref(new Date());
  
  const weekNumber = computed(() => getISOWeek(today.value));
  
  const year = computed(() => getYear(today.value));
  
  const month = computed(() => getMonth(today.value) + 1); // date-fns months are 0-indexed
  
  const startOfCurrentWeek = computed(() => format(startOfWeek(today.value, { weekStartsOn: 1 }),'dd-MM-yyyy', { locale: nl }));
  
  const endOfCurrentWeek = computed(() => format(endOfWeek(today.value, { weekStartsOn: 1 }),'dd-MM-yyyy', { locale: nl }));
  
  const weekDates = computed(() => {
    const dates = [];
    let currentDate = new Date(startOfCurrentWeek.value);
    while (isBefore(currentDate, addDays(endOfCurrentWeek.value, 1))) {
      dates.push(format(currentDate, 'yyyy-MM-dd', { locale: nl }));
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  });

  const subtractWeek = () => {
    today.value = subWeeks(today.value, 1);
  };

  const addWeek = () => {
    today.value = addWeeks(today.value, 1);
  };

  const isAllowedToAddWeek = computed(() => {
    return getISOWeek(today.value) + 1 <= getISOWeek(new Date());
  });

  const isAllowedToAddMonth = computed(() => {
    // Simply checks if the month of the adjusted date is before the current month
    const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1));
    return getMonth(today.value) < getMonth(nextMonth);
  });


  const getWeeksInYear = computed(() => {
    const weeks = [];
    const startDate = new Date(year.value, 0, 1); // January 1st of the given year
    const endDate = new Date(year.value, 11, 31); // December 31st of the given year

    let currentDate = startOfWeek(startDate.value, { weekStartsOn: 1 });
    while (isBefore(currentDate, addDays(endDate.value, 1))) {
      const weekNumber = getISOWeek(currentDate);
      const firstDayOfWeek = format(currentDate, 'yyyy-MM-dd', { locale: nl });
      const lastDayWeek = format(endOfWeek(currentDate, { weekStartsOn: 1 }), 'yyyy-MM-dd', { locale: nl });

      weeks.push({ weekNumber, firstDayOfWeek, lastDayWeek });

      currentDate = addWeeks(currentDate, 1);
    }

    return weeks;
  });



// Example usage:


  return {
    today: computed(() => format(today.value, 'yyyy-MM-dd')),
    weekNumber,
    year,
    month,
    weekDates,
    subtractWeek,
    addWeek,
    isAllowedToAddWeek,
    isAllowedToAddMonth,
    getWeeksInYear,
    startOfCurrentWeek,
    endOfCurrentWeek,
  };
}