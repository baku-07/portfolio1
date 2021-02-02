/* nilai dari const tidak berubah */ 
const txtElement = ['Web Developer','Graphic Designer']; 
let count = 0;
let txtIndex = 0;
let currentTxt = ''; /* mengetahui huruf yang akan dimunculkan */
let words = '';

/* membuat fungsi yang akan dijalannkan */
(function ngetik() {
    
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        textIndex = 0;
    }

    setTimeout(ngetik, 400); /* 500 adalah detik, jadi sampai semua kalimat muncul butuh 500 detik */

})();