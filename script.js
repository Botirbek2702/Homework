let numberOfSeries ;

function like () {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz", "")
    while( numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz", "")
    }
}
like()
let seriesDB = {
    count: numberOfSeries,
    series: {},
    actours: {},
    genres: [],
    privat: false
}
    
function showDb () {
    if (seriesDB.privat == false){
         console.log(seriesDB);
    }else {
        console.log("Ko'rsatib bo'lmaydi");
    }
}
showDb()

 
    function startapp () {
            for (let i = 0; i<2; i++) {
        const a = prompt("Oxirgi ko'rgan serialingiz ?"),
             b = prompt(" Necha baxo berasiz ?");

        if(a != null && b !=null && a!=""  && b != "") {
            seriesDB.series[a] = b
            console.log('done'); 
        }else{
            console.log('error')
            i--
        }
       
    }
    }

    startapp()

   function good () {
        if (seriesDB.count<5) {
            console.log("Kam serial ko'ryapsiz");
        }else if (seriesDB.count>=5 && seriesDB.count<10) {
            console.log("siz Clasik tomashabi ekansiz");
        }else if (seriesDB.count>=10){
            console.log('siz seriyalchi yuldi ekansiz');
        }else{
            console.log("error");
        }
   }
    good()

    
function writeGenres () {
    for (let i = 0; i <=2; i++) {
        const qu = prompt (`Yaxshi ko'rgan janiringiz ${i+1}`)
        seriesDB.genres[i]=qu;
    }
   
}
    
writeGenres() 
