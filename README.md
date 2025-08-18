# 📜 mask-any-number
A lightweight, flexible number-masking library — supports multiple mask patterns and automatically picks the best fit based on the input length.

![npm version](https://img.shields.io/npm/v/gabrielrfmendes/mask-any-number)
![license](https://img.shields.io/npm/l/mask-any-number)
![types](https://img.shields.io/npm/types/mask-any-number)
![npm version](https://img.shields.io/npm/v/mask-any-number)
![license](https://img.shields.io/npm/l/mask-any-number)
![types](https://img.shields.io/npm/types/mask-any-number)
![npm downloads](https://img.shields.io/npm/dw/mask-any-number)

## 🔧 Installation
```sh
npm install mask-any-number
```

or

```sh
yarn add mask-any-number
```

# 🚀 Quick Example
```js
import maskNumber from 'mask-any-number';

// Basic usage
maskNumber('1234567890', ['000-000-0000']); // "123-456-7890"

// Multiple masks, chooses first that fits
maskNumber('12345', ['000-000', '00000']); // "12345"
maskNumber('123456', ['000-000', '00000']); // "123-456"

// 📘 Date & Phone Examples
### Dates
// US (MM/DD/YYYY)
maskNumber('12312025', ['00/00/0000']); // "12/31/2025"

// Europe (DD/MM/YYYY)
maskNumber('31122025', ['00/00/0000']); // "31/12/2025"

// China (YYYY/MM/DD)
maskNumber('20251231', ['0000/00/00']); // "2025/12/31"

### Phone Numbers
// US: (XXX) XXX-XXXX
maskNumber('1234567890', ['(000) 000-0000']); // "(123) 456-7890"

// Europe (DE): +49 XX XXXX XXXX
maskNumber('493012345678', ['+49 00 0000 0000']); // "+49 30 1234 5678"

// China: +86 10 1234 5678
maskNumber('861012345678', ['+86 00 0000 0000']); // "+86 10 1234 5678"
```

# ⚙️ API
| Parameter          | Type       | Description                                         |
|--------------------|------------|-----------------------------------------------------|
| `value`            | `string`   | Input numeric string to mask                        |
| `masks`            | `string[]` | Array of mask patterns using 0 as digit placeholder |

Return: `string` — formatted number according to the first mask that fits.

# 🔁 Visual Summary
| Type        | Input          | Mask                | Output          |
|------------|----------------|-------------------|----------------|
| EU Date    | 31122025       | 00/00/0000        | 31/12/2025     |
| CN Date    | 20251231       | 0000/00/00        | 2025/12/31     |
| US Phone   | 1234567890     | (000) 000-0000    | (123) 456-7890 |
| EU Phone   | 493012345678   | +49 00 0000 0000  | +49 30 1234 5678 |
| CN Phone   | 861012345678   | +86 00 0000 0000  | +86 10 1234 5678 |

# 🧪 Testing with Mock Data
```javascript
const examples = [
    { value: '1234567890', masks: ['000-000-0000'] },
    { value: '31122025', masks: ['00/00/0000'] },
];

examples.forEach(({ value, masks }) => {
    console.log(maskNumber(value, masks));
});
```

# 💡 Tips
Use multiple masks to handle variable-length numbers.

Keep 0 as the digit placeholder; all other characters are treated as literals.

Ideal for phone numbers, dates, IDs, and other numeric inputs.

# For local development:

# Inside the library folder
```sh
npm run build

npm link
```

## 💡 Tips
Use multiple masks to handle variable-length numbers.

Keep 0 as the digit placeholder; all other characters are treated as literals.

Ideal for phone numbers, dates, IDs, and other numeric inputs.

## For local development:

### Inside the library folder
```sh
npm run build

npm link

npm link mask-any-number
```

⚠️ After the initial link, you only need to run npm run build when updating the library.

<img src="https://avatars.githubusercontent.com/u/28657322?v=4" width="40" alt="Gabriel" />  Gabriel [GitHub](https://github.com/gabrielrfmendes)

# 🧾 License

MIT © 2025
