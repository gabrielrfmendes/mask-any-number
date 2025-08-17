export default function maskNumber(value: string, masks: string[]) {
    const digits = value.replace(/\D/g, '');

    if (masks.length === 0) {
        return digits;
    }

    let mask = masks[0];
    for (let i = 0; i < masks.length; i++) {
        const zeros = (masks[i].match(/0/g) || []).length;
        if (digits.length <= zeros) {
            mask = masks[i];
            break;
        }
        if (i === masks.length - 1) {
            mask = masks[i];
        }
    }

    let formatted = '';
    let digitIndex = 0;

    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '0') {
            if (digitIndex < digits.length) {
                formatted += digits[digitIndex];
                digitIndex++;
            } else {
                break;
            }
        } else {
            const zerosAhead = (mask.slice(i + 1).match(/0/g) || []).length;
            if (digits.length > digitIndex) {
                formatted += mask[i];
            }
        }
    }

    return formatted;
}