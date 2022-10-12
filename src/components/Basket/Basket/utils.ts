export function positionEnding(count: number): string {
  if (count > 10 && count < 20) {
    return 'позиций';
  }
  switch (count % 10) {
    case 1:
      return 'позиция';
    case 2:
    case 3:
    case 4:
      return 'позиции';
    default:
      return 'позиций';
  }
}
