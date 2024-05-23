var elestirelDevamsizlik = localStorage.getItem('elestirelDevamsizlik');
if (elestirelDevamsizlik === null) {
    elestirelDevamsizlik = 0;
} else {
    elestirelDevamsizlik = parseInt(elestirelDevamsizlik);
    document.getElementById("elestirel-devamsizlik").innerHTML += elestirelDevamsizlik;
}

var bilgiYonetimiDevamsizlik = localStorage.getItem('bilgiYonetimiDevamsizlik');
if (bilgiYonetimiDevamsizlik === null) {
    bilgiYonetimiDevamsizlik = 0;
} else {
    bilgiYonetimiDevamsizlik = parseInt(bilgiYonetimiDevamsizlik);
    document.getElementById("bilgi-yonetimi-devamsizlik").innerHTML += bilgiYonetimiDevamsizlik;
}

var webProgramlamaDevamsizlik = localStorage.getItem('webProgramlamaDevamsizlik');
if (webProgramlamaDevamsizlik === null) {
    webProgramlamaDevamsizlik = 0;
} else {
    webProgramlamaDevamsizlik = parseInt(webProgramlamaDevamsizlik);
    document.getElementById("web-programlama-devamsizlik").innerHTML += webProgramlamaDevamsizlik;
}

var istatistikDevamsizlik = localStorage.getItem('istatistikDevamsizlik');
if (istatistikDevamsizlik === null) {
    istatistikDevamsizlik = 0;
} else {
    istatistikDevamsizlik = parseInt(istatistikDevamsizlik);
    document.getElementById("istatistik-devamsizlik").innerHTML += istatistikDevamsizlik;
}

var girisimcilikDevamsizlik = localStorage.getItem('girisimcilikDevamsizlik');
if (girisimcilikDevamsizlik === null) {
    girisimcilikDevamsizlik = 0;
} else {
    girisimcilikDevamsizlik = parseInt(girisimcilikDevamsizlik);
    document.getElementById("girisimcilik-devamsizlik").innerHTML += girisimcilikDevamsizlik;
}

var pazarlamaArastirmalariDevamsizlik = localStorage.getItem('pazarlamaArastirmalariDevamsizlik');
if (pazarlamaArastirmalariDevamsizlik === null) {
    pazarlamaArastirmalariDevamsizlik = 0;
} else {
    pazarlamaArastirmalariDevamsizlik = parseInt(pazarlamaArastirmalariDevamsizlik);
    document.getElementById("pazarlama-arastirmalari-devamsizlik").innerHTML += pazarlamaArastirmalariDevamsizlik;
}

var dijitalMedyaDevamsizlik = localStorage.getItem('dijitalMedyaDevamsizlik');
if (dijitalMedyaDevamsizlik === null) {
    dijitalMedyaDevamsizlik = 0;
} else {
    dijitalMedyaDevamsizlik = parseInt(dijitalMedyaDevamsizlik);
    document.getElementById("dijital-medya-devamsizlik").innerHTML += dijitalMedyaDevamsizlik;
}

var oyunTasarimDevamsizlik = localStorage.getItem('oyunTasarimDevamsizlik');
if (oyunTasarimDevamsizlik === null) {
    oyunTasarimDevamsizlik = 0;
} else {
    oyunTasarimDevamsizlik = parseInt(oyunTasarimDevamsizlik);
    document.getElementById("oyun-tasarim-devamsizlik").innerHTML += oyunTasarimDevamsizlik;
}

var teknolojiYonetimiDevamsizlik = localStorage.getItem('teknolojiYonetimiDevamsizlik');
if (teknolojiYonetimiDevamsizlik === null) {
    teknolojiYonetimiDevamsizlik = 0;
} else {
    teknolojiYonetimiDevamsizlik = parseInt(teknolojiYonetimiDevamsizlik);
    document.getElementById("teknoloji-yonetimi-devamsizlik").innerHTML += teknolojiYonetimiDevamsizlik;
}


function arttirDevamsizlik(ders) {
    if (ders === 'elestirel') {
        elestirelDevamsizlik++;
        document.getElementById("elestirel-devamsizlik").innerHTML = "Toplam Devamsızlık: " + elestirelDevamsizlik;
        localStorage.setItem('elestirelDevamsizlik', elestirelDevamsizlik);
    } else if (ders === 'bilgiYonetimi') {
        bilgiYonetimiDevamsizlik++;
        document.getElementById("bilgi-yonetimi-devamsizlik").innerHTML = "Toplam Devamsızlık: " + bilgiYonetimiDevamsizlik;
        localStorage.setItem('bilgiYonetimiDevamsizlik', bilgiYonetimiDevamsizlik);
    } else if (ders === 'webProgramlama') {
        webProgramlamaDevamsizlik++;
        document.getElementById("web-programlama-devamsizlik").innerHTML = "Toplam Devamsızlık: " + webProgramlamaDevamsizlik;
        localStorage.setItem('webProgramlamaDevamsizlik', webProgramlamaDevamsizlik);
    } else if (ders === 'istatistik') {
        istatistikDevamsizlik++;
        document.getElementById("istatistik-devamsizlik").innerHTML = "Toplam Devamsızlık: " + istatistikDevamsizlik;
        localStorage.setItem('istatistikDevamsizlik', istatistikDevamsizlik);
    } else if (ders === 'girisimcilik') {
        girisimcilikDevamsizlik++;
        document.getElementById("girisimcilik-devamsizlik").innerHTML = "Toplam Devamsızlık: " + girisimcilikDevamsizlik;
        localStorage.setItem('girisimcilikDevamsizlik', girisimcilikDevamsizlik);
    } else if (ders === 'pazarlamaArastirmalari') {
        pazarlamaArastirmalariDevamsizlik++;
        document.getElementById("pazarlama-arastirmalari-devamsizlik").innerHTML = "Toplam Devamsızlık: " + pazarlamaArastirmalariDevamsizlik;
        localStorage.setItem('pazarlamaArastirmalariDevamsizlik', pazarlamaArastirmalariDevamsizlik);
    } else if (ders === 'dijitalMedya') {
        dijitalMedyaDevamsizlik++;
        document.getElementById("dijital-medya-devamsizlik").innerHTML = "Toplam Devamsızlık: " + dijitalMedyaDevamsizlik;
        localStorage.setItem('dijitalMedyaDevamsizlik', dijitalMedyaDevamsizlik);
    } else if (ders === 'oyunTasarim') {
        oyunTasarimDevamsizlik++;
        document.getElementById("oyun-tasarim-devamsizlik").innerHTML = "Toplam Devamsızlık: " + oyunTasarimDevamsizlik;
        localStorage.setItem('oyunTasarimDevamsizlik', oyunTasarimDevamsizlik);
    } else if (ders === 'teknolojiYonetimi') {
        teknolojiYonetimiDevamsizlik++;
        document.getElementById("teknoloji-yonetimi-devamsizlik").innerHTML = "Toplam Devamsızlık: " + teknolojiYonetimiDevamsizlik;
        localStorage.setItem('teknolojiYonetimiDevamsizlik', teknolojiYonetimiDevamsizlik);
    }

}

function sifirlaDevamsizlik(ders) {
    if (ders === 'elestirel') {
        elestirelDevamsizlik--;
        document.getElementById("elestirel-devamsizlik").innerHTML = "Toplam Devamsızlık: " + elestirelDevamsizlik;
        localStorage.removeItem('elestirelDevamsizlik');
    } else if (ders === 'bilgiYonetimi') {
        bilgiYonetimiDevamsizlik--;
        document.getElementById("bilgi-yonetimi-devamsizlik").innerHTML = "Toplam Devamsızlık: " + bilgiYonetimiDevamsizlik;
        localStorage.removeItem('bilgiYonetimiDevamsizlik');
    } else if (ders === 'webProgramlama') {
        webProgramlamaDevamsizlik--;
        document.getElementById("web-programlama-devamsizlik").innerHTML = "Toplam Devamsızlık: " + webProgramlamaDevamsizlik;
        localStorage.removeItem('webProgramlamaDevamsizlik');
    } else if (ders === 'istatistik') {
        istatistikDevamsizlik--;
        document.getElementById("istatistik-devamsizlik").innerHTML = "Toplam Devamsızlık: " + istatistikDevamsizlik;
        localStorage.removeItem('istatistikDevamsizlik');
    } else if (ders === 'girisimcilik') {
        girisimcilikDevamsizlik--;
        document.getElementById("girisimcilik-devamsizlik").innerHTML = "Toplam Devamsızlık: " + girisimcilikDevamsizlik;
        localStorage.removeItem('girisimcilikDevamsizlik');
    } else if (ders === 'pazarlamaArastirmalari') {
        pazarlamaArastirmalariDevamsizlik--;
        document.getElementById("pazarlama-arastirmalari-devamsizlik").innerHTML = "Toplam Devamsızlık: " + pazarlamaArastirmalariDevamsizlik;
        localStorage.removeItem('pazarlamaArastirmalariDevamsizlik');
    } else if (ders === 'dijitalMedya') {
        dijitalMedyaDevamsizlik--;
        document.getElementById("dijital-medya-devamsizlik").innerHTML = "Toplam Devamsızlık: " + dijitalMedyaDevamsizlik;
        localStorage.removeItem('dijitalMedyaDevamsizlik');
    } else if (ders === 'oyunTasarim') {
        oyunTasarimDevamsizlik--;
        document.getElementById("oyun-tasarim-devamsizlik").innerHTML = "Toplam Devamsızlık: " + oyunTasarimDevamsizlik;
        localStorage.removeItem('oyunTasarimDevamsizlik');
    } else if (ders === 'teknolojiYonetimi') {
        teknolojiYonetimiDevamsizlik--;
        document.getElementById("teknoloji-yonetimi-devamsizlik").innerHTML = "Toplam Devamsızlık: " + teknolojiYonetimiDevamsizlik;
        localStorage.removeItem('teknolojiYonetimiDevamsizlik');
    }
}