//Grab today's date
today=new Date();

//grab the great gathering's day (my bday)
var gg=new Date(today.getFullYear(), 2, 20);

//if today is the 
if (today.getMonth()==2 && today.getDate()>20) 
{
    //grab the current year
    gg.setFullYear(gg.getFullYear()+1); 
}  

var one_day=1000*60*60*24;

//ceil means the smallest integer greater than or equal to the given number
//grab the current time aka today and now and divide it by the one day time

document.write(Math.ceil((gg.getTime()-today.getTime())/(one_day))+
" days left until the Great Gathering!");