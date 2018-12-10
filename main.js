weight
var actwt ;
( inserted by user)
var acwtKg = (actwt / 2.5);
( acwtlbs / 2.5)
var height;
( inserted by user)
var sex;
( inserted by user)
var ibwt;
( from table by looking at  3 & 4)
var ibwt3 ;
( from table)
var adwt ;
( see below section for calculation)
    2nd set

var dosingwt;
if( actwt < ibwt3) { dosingwt = actwt}
else { dosingwt = adwt}

var indication;
var bolus;
var infusion;
var MaxBolus;
var MaxInfusion;
var goal;
//assigning stuff
if (indication =  "Cardiac")
{
    Bolus =  60,
        Infusion = 12,
        Maxbolus = 5000,
        Maxinfusion = 1000,
        Goal = "72-104"
}
if (indication =  "Stroke/TIA & Surgery")
{
    Bolus =  0,
        Infusion = 12,
        Maxbolus = 0,
        Maxinfusion = 1000 ,
        Goal ="“69-90";
}
if (indication = "PE/DVT")
{
    Bolus =  80,
        Infusion = 18,
        Maxbolus = 10000,
        Maxinfusion = 2100,
        Goal ="72-104"
}


//Calculations


var bolusdose = dosingwt * bolus;
var infusiondose = dosingwt* infusion ;
var finalbolus;
    if (MaxBolus < bolusdose) {finalbolus = MaxBolus}
    else {finalbolus = bolusdose};
var finalinfusion;
    if (MaxInfusion<infusiondose)  {finalinfusion = MaxInfusion}
    else {finalinfusion = infusiondose}
    var  xx;
    function GetIt () {


                {xx= ("the heparin bolus does for your patient is " + finalbolus + " units!" + " the initial infusion dose is " + finalinfusion + " units per hour")+
                    ("the weight is " + (actwt))+ ("the indication is "+(indication))+   (height) + (sex)}
        (document.write(xx));
    }


