const input = document.getElementById("value");
const select = document.getElementById("mask");

function handleChange() {
    const raw = input.value.replace(/\D/g, "");
    const mask = [select.value];
    const masked = maskNumber(raw, mask);

    input.value = masked;
}

input.addEventListener("input", handleChange);
select.addEventListener("change", handleChange);

function copyCode(button) {
    const code = button.parentElement.innerText.replace("📋", "").trim();
    navigator.clipboard.writeText(code);
    button.innerText = "✅";
    setTimeout(() => button.innerText = "📋", 2000);
}