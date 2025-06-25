// Typing Effect
const katikSubtitles = "Hello there! Welcome to katik.io";
const typingElement = document.getElementById("katikSubtitle");
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typingElement.textContent = katikSubtitles.substring(0, index + 1);
        index++;
    if (index === katikSubtitles.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
} else {
    typingElement.textContent = katikSubtitles.substring(0, index - 1);
    index--;
    if (index === 0) {
        isDeleting = false;
    }
}
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

    typeEffect();

function showCard(cardId) {
    const cards = ['beranda', 'luas', 'keliling'];
    cards.forEach(id => {
        const card = document.getElementById('card-' + id);
        if (id === cardId) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}


const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const luasInput = document.getElementById('luas');
const resetBtnLuass = document.getElementById('resetBtnLuas');

function hitungLuas() {
    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);
    
    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        luasInput.value = Number.isInteger(luas) ? luas : luas.toFixed(2);
    } else {
        luasInput.value = '';
    }
}
alasInput.addEventListener('input', hitungLuas);
tinggiInput.addEventListener('input', hitungLuas);

resetBtnLuass.addEventListener('click', function() {
    alas.value = '';
    tinggi.value = '';
    luas.value = '';
    alas.focus();
});

const sisiA = document.getElementById('sisiA');
const sisiB = document.getElementById('sisiB');
const sisiC = document.getElementById('sisiC');
const output = document.getElementById('keliling');
const resetBtnKelilings = document.getElementById('resetBtnKeliling');

sisiA.addEventListener('input', hitungKeliling);
sisiB.addEventListener('input', hitungKeliling);
sisiC.addEventListener('input', hitungKeliling);

function hitungKeliling() {
    const a = parseFloat(sisiA.value);
    const b = parseFloat(sisiB.value);
    const c = parseFloat(sisiC.value);
    if (a > 0 && b > 0 && c > 0) {
        const keliling = a + b + c;
        output.value = keliling;
    } else {
        output.value = '';
    }
}

resetBtnKelilings.addEventListener('click', function(){
    sisiA.value = '';
    sisiB.value = '';
    sisiC.value = '';
    output.value = '';
    sisiA.focus();
});