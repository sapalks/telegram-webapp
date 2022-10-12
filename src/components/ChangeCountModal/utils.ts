export function itemsEnding(count: number) {
  if (count > 10 && count < 20) {
    return 'штук';
  }
  switch (count % 10) {
    case 1:
      return 'штука';
    case 2:
    case 3:
    case 4:
      return 'штуки';
    default:
      return 'штук';
  }
}

export function packageEnding(count: number) {
  if (count > 10 && count < 20) {
    return 'упаковок';
  }
  switch (count % 10) {
    case 1:
      return 'упаковка';
    case 2:
    case 3:
    case 4:
      return 'упаковки';
    default:
      return 'упаковок';
  }
}
