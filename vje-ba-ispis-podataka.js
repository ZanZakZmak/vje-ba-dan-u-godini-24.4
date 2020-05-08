let pricelist = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    {from: "2020-03-02", to: "2020-05-15", price: 39.0},
    {from: "2020-05-16", to: "2020-06-15", price: 37.0},
   ];
   function logPricelist(pricelist) {
     let ispis=""
     let cjena;

    //sortiramo listu po price
     pricelist.sort((x,y)=>x.price - y.price)

     for(let i=0; i<pricelist.length; i++){
      //ako je cjena ista prijasnjem ispisujemo u isti red (druga stavci ne ispisujemo price)
       if(!(pricelist[i].price===cjena)){
          ispis+="\n" + pricelist[i].price + " : "+ pricelist[i].from + " do " + pricelist[i].to 
       }else{
         ispis+=" , "+ pricelist[i].from + " do " + pricelist[i].to 
       }
       cjena=pricelist[i].price

     }
    console.log(ispis)
   }


   logPricelist(pricelist);
   /*
    34.5 : 2020-01-01 do 2020-02-01
    37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
    39.0 : "2020-03-02 do 2020-05-15
    */