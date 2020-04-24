let year, month, day;

//year=prompt('upišite godinu')
//month=prompt('upišite mesec')
//day=prompt('upišite dan')

function dayOfYear(year, month, day) {
  //sva 3 argumenta su cijeli brojevi
let broj_dana=0;
  // prolazi to tog datuma
  for(let i = 1; i<month; i++){
    //31
    if(i==1||i==3||i==5||i==7||i==8||i==10){broj_dana=broj_dana+31;}
    //30
    if(i==4||i==6||i==9||i==11){broj_dana=broj_dana+30;}
    // veljaća
    if(i==2){
      if((year%4)==0){broj_dana=broj_dana+1;}
      broj_dana=broj_dana+28;
    }
      
  }
broj_dana=broj_dana+day;
return broj_dana;
}

console.log(dayOfYear(2020, 10, 15));
console.log(dayOfYear(2020, 12, 31));
console.log(dayOfYear(2012, 1, 1));
console.log(dayOfYear(2012, 2, 1));
//console.log(dayOfYear(year, month, day));
