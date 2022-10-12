export function formatVin(
    vin: string | undefined | null,
): string | undefined | null {
    if (!vin) {
        return vin;
    }
    //a-hj-nopr-z0-9авекмнорстух
    const dict: { [id: string]: string } = {
        а: 'a',
        в: 'b',
        е: 'e',
        к: 'k',
        м: 'm',
        н: 'h',
        о: '0',
        р: 'p',
        с: 'c',
        т: 't',
        у: 'y',
        х: 'x',
        o: '0',
        i: '1',
        q: '0',
    };
    const trimmed = vin
        .trim()
        .replace(/^['"]+|['"]+$/g, '')
        .toLowerCase();
    let res = '';
    for (let i = 0; i < trimmed.length; i++) {
        const c = trimmed[i];
        res += dict[c] ?? c;
    }
    return res.toUpperCase();
}

export const vinsSymbols = 'abcdefghjklmnopqrstuvwxyz0123456789авекмнорстух';

export function getVins(text: string | undefined): string[] {
    if (!text) {
        return [];
    }
    // const regexp = /[a-hj-nopqr-z0-9авекмнорстух]{17}/gi;
    const regexp = /[a-hj-z0-9авекмнорстух]{17}/gi;
    const words = text.split(/(,|\s)+/).filter(p => p !== ' ' && p !== ',');
    const res: string[] = [];
    for (const word of words) {
        const trimmedString = word.trim();
        if (!trimmedString) {
            continue;
        }
        if (trimmedString.length !== 17) {
            continue;
        }
        regexp.lastIndex = 0;
        if (!regexp.test(trimmedString)) {
            continue;
        }
        res.push(formatVin(trimmedString)!);
    }
    return res;
}


export function formatFrame(
    frame: string | undefined | null,
): string | undefined | null {
    if (!frame) {
        return frame;
    }
    //a-hj-nopr-z0-9авекмнорстух
    const dict: { [id: string]: string } = {
        а: 'a',
        к: 'k',
        о: '0',
        т: 't',
        o: '0',
        в: 'b',
        м: 'm',
        р: 'p',
        у: 'y',
        i: '1',
        е: 'e',
        н: 'h',
        с: 'c',
        х: 'x', // q: '0',
    };
    const trimmed = frame
        .trim()
        .replace(/^['"]+|['"]+$/g, '')
        .toLowerCase();
    let res = '';
    for (let i = 0; i < trimmed.length; i++) {
        const c = trimmed[i];
        res += dict[c] ?? c;
    }
    return res.toUpperCase();
}

export function formatVinOrFrame(
    text: string | undefined | null,
): string | undefined | null {
    if (!text) {
        return text;
    }

    const isVin = !!getVins(text ?? undefined).length;
    const formatted = isVin ? formatVin(text) : formatFrame(text);
    return formatted;
}