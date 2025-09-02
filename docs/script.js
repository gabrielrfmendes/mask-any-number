const { maskNumber, countries } = window.maskNumber;

const input = document.getElementById('phoneNumberInput');
const select = document.getElementById('maskSelect');

countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.iso2;
    option.textContent = `${country.flag} ${country.name}`;
    select.appendChild(option);
});

function handleChange() {
    const country = countries.find(c => c.iso2 === select.value);
    const masked = maskNumber(input.value, country?.masks || []);
    input.value = masked;
}

input.addEventListener('input', handleChange);
select.addEventListener('change', handleChange);

function copyCode(button) {
    const code = button.parentElement.innerText.replace('📋', '').trim();
    navigator.clipboard.writeText(code);
    button.innerText = '✅';
    setTimeout(() => button.innerText = '📋', 2000);
}
