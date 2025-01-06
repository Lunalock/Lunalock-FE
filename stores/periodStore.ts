import { defineStore } from 'pinia'

interface Period {
  date: string;
  cycleLength: number;
}

interface Mood {
  date: string;
  value: number;
}

export const usePeriodStore = defineStore('period', {
  state: () => ({
    periods: [] as Period[],
    moods: [] as Mood[]
  }),
  actions: {
    async fetchPeriods() {
      this.periods = [
        { date: '2024-08-01', cycleLength: 28 },
        { date: '2024-09-02', cycleLength: 32 },
        { date: '2024-10-01', cycleLength: 29 },
      ];
    },
    async fetchMoods() {
      this.moods = [
        { date: '2024-08-15', value: 3 },
        { date: '2024-09-15', value: 4 },
        { date: '2024-10-15', value: 2 },
      ];
    },
    addPeriod(period: Period) {
      this.periods.push(period);
    },
    addMood(mood: Mood) {
      this.moods.push(mood);
    }
  }
})
