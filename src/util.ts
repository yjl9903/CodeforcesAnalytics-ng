export function getColor(rating?: number) {
  if (rating === null || rating === undefined) {
    return 'black';
  }
  if (rating < 1200) return 'gray';
  if (rating < 1400) return 'green';
  if (rating < 1600) return '#03A89E';
  if (rating < 1900) return 'blue';
  if (rating < 2100) return '#a0a';
  if (rating < 2400) return '#FF8C00';
  return 'red';
}
