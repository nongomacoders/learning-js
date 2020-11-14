// + means join strings

let fn = "bongiwe"
let sn = "ntshangase"

let fullname = fn + sn;   //fullname = bongiwentshangase
fullname = fn + " " + sn;   // full name = bongiwe ntshangase



//es6 backticks
fullname = `${fn} ${sn}`;    // dont have to use + sign .  put your variable inside ${}


//string methods

let caps = fn.toUpperCase();   // caps = BONGIWE

//more methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//get part of a string
fullname = "bongiwe ntshangase";
 //  substring. this gets part of the string . the first number is start index and the second is end  index but not including end
let partname = fullname.substring(0, 4);  //partname=bong
partname = fullname.substring(1, 3);   //partname=on
partname=fullname.substring(3)   //partname=giwe ntshangase . if you dont put end number 

let i = fullname.indexOf("b");  // i= 0
i = fullname.indexOf(" ");  //i=7
fn = fullname.substring(0, 7);   //fn = bongiwe
sn = fullanme.substring(8);         //sn=ntshangase
sn=fullname.substring()
