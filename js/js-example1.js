let userName = prompt("kullanıcı adını giriniz");
if(userName){
    let kodluyoruz = document.querySelector("#kodluyoruz")
    kodluyoruz.innerHTML="KODLUYORUZ";
    let user = document.querySelector("#user")
    user.innerHTML=` Merhaba ${userName} ! Hoş Geldin`;
    
    // tarih ve saat için kullanılan fonksiyon
    function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        
        var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('date').innerHTML =  `${h}:${m}:${s}  ${gunler[today.getDay()]} <br>
        tarihinde
        <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
        Javascript <br> bölümü 1. Ödevindesiniz.
         ` ;
        setTimeout(showTime, 1000);
        
      }
      // saniye 0-9 arası ise başına 0 eklemek için kullanılan fonksiyon
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
      }
      showTime()
}