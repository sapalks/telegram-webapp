import moment from 'moment-timezone';
import 'moment/locale/ru';
import {
  formatVinOrFrame,
} from 'utils/normalisation';

moment.locale('ru');

export function toLocaleFixed(
  value: number | undefined,
  fractionDigits = 2,
  locale = 'ru-RU',
): string {
  return Number((value ?? 0).toFixed(fractionDigits)).toLocaleString(locale);
}

export function totalDeliveryDate(deliveryAt: number) {
  const format = {
    sameDay: '[сегодня]',
    nextDay: '[завтра]',
    nextWeek: 'DD.MM (ddd)',
    lastDay: 'DD.MM (ddd)',
    lastWeek: 'DD.MM (ddd)',
    sameElse: 'DD.MM (ddd)',
  };
  if (!deliveryAt) {
    return 'сегодня';
  }

  const date = moment(deliveryAt);
  return date.calendar(null, format).toLowerCase();
}

/**
 * html to plain text without tags
 * @param html source string
 * @returns plain text without text
 */
export function stripHtml<T extends string | undefined | null>(html: T): T {
  return html?.replace(/(<([^>]+)>)/gi, '').replace(/[<>]/gi, '') as T;
}

export function capitalize(
  input: string | undefined | null,
  willUpFirstSymbOfAllWords: boolean,
): string | undefined | null {
  if (!input) {
    return input;
  }
  const res: string[] = [];
  const symbs = /[a-zа-я]/gi;
  let willUpNext = true;
  for (const s of input) {
    symbs.lastIndex = 0;
    if (willUpFirstSymbOfAllWords && !symbs.test(s)) {
      willUpNext = true;
      res.push(s.toLowerCase());
      continue;
    }
    if (willUpNext) {
      willUpNext = false;
      res.push(s.toUpperCase());
      continue;
    }
    res.push(s.toLowerCase());
  }
  return res.join('');
}

const fakeVinPrefix = 'TADAM';

function isFakeVin(vin: string): boolean {
  return vin?.startsWith(fakeVinPrefix);
}

function getNote(option: { vin: string | null; note: string | null }) {
  const { vin, note } = option;
  const prepare = (value: string) => `(${value})`;
  if (note) {
    return prepare(note);
  }

  const vinOrFrame = formatVinOrFrame(vin);
  if (!vinOrFrame) {
    return '';
  }
  if (!isFakeVin(vinOrFrame)) {
    // shorted vinOrFrame when we don't have car note
    const start = vinOrFrame.substring(0, 3);
    const end = vinOrFrame.substring(
      vinOrFrame.length - 3,
      vinOrFrame.length,
    );
    const identity = `${start}...${end}`;
    return prepare(identity);
  }
  return '';
}

function getCarTitle(options: {
  model: string | null;
  vendor: string | null;
  vin: string | null;
}) {
  const { model, vendor, vin } = options;
  const hasVendor = vendor && vendor !== 'unknown';
  const hasModel = model && model !== 'unknown';
  const vinOrFrame = formatVinOrFrame(vin);

  if (!hasVendor || !hasModel) {
    if (vinOrFrame && isFakeVin(vinOrFrame)) {
      return 'VIN-КОД ПРИНЯТ';
    }
    return '';
  }

  const firstTwoWordsOfModel = model?.split(' ')
    .slice(0, 2)
    .join(' ');
  const modelWithoutHtml = stripHtml(firstTwoWordsOfModel);
  const vendorWithoutHtml = stripHtml(options.vendor);
  return capitalize(`${vendorWithoutHtml} ${modelWithoutHtml}`, true);
}

export function getCarCardTitle(option: {
  model: string | null;
  vendor: string | null;
  vin: string | null;
  note: string | null;
} | null): string {
  if (!option) {
    return 'Идет расспознование';
  }
  const {
    model, vendor, vin, note,
  } = option;
  const car = getCarTitle({ model, vendor, vin });
  const additional = getNote({ vin, note });
  return `${car} ${additional}`;
}
