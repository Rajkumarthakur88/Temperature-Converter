
let input1 = document.querySelector(".cel");
let input2 = document.querySelector(".fah");

input1.addEventListener("input", tofah);
input2.addEventListener("input", tocel);
function tofah() {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    input2.value = f;
}
function tocel() {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    input1.value = c;
}