export function calculateNextPeriod(lastPeriod: { date: string }, lastMood: { value: number }): string {
    const averageCycleLength = 28; // You might want to calculate this based on historical data
    const moodAdjustment = getMoodAdjustment(lastMood.value);
    
    const lastPeriodDate = new Date(lastPeriod.date);
    const nextPeriodDate = new Date(lastPeriodDate.getTime() + (averageCycleLength + moodAdjustment) * 24 * 60 * 60 * 1000);
    
    return nextPeriodDate.toISOString().split('T')[0]; // Return as YYYY-MM-DD
  }
  
  function getMoodAdjustment(mood: number): number {
    // This is a simplified example. In reality, you'd want a more sophisticated algorithm
    // based on research about how mood affects cycle length
    const moodMap: { [key: number]: number } = {
      1: 2, // Very bad mood might slightly lengthen cycle
      2: 1,
      3: 0, // Neutral mood, no adjustment
      4: -1,
      5: -2 // Very good mood might slightly shorten cycle
    };
    
    return moodMap[mood] || 0;
  }
  
  export function calculateCycleLength(currentPeriod: { date: string }, previousPeriod: { date: string }): number {
    const currentDate = new Date(currentPeriod.date);
    const previousDate = new Date(previousPeriod.date);
    const differenceInTime = currentDate.getTime() - previousDate.getTime();
    return Math.round(differenceInTime / (1000 * 3600 * 24));
  }