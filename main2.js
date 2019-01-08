// Input: any integer.
// Operation: round the result of dividing any integer with 50, and then multiplying it with 50.
function roundToFifty(someNum){
    return Math.round(someNum / 50) * 50;
}

function GetDose() {
//initial input by end user
    var indication2 = document.getElementById("indication2box").value;
    var gender2  = document.getElementById("gender2box").value;
    var actualweightlb =  document.getElementById("actualweightlbbox").value;
    var actualweight2 = (actualweightlb * 0.453592);
    var actualheight2 =  document.getElementById("actualheight2box").value;
    var protocol2;
//initial weight calculations
    var idealweight2 ;
    if (gender2 = "male") {
        idealweight2 = 2.3 * ( actualheight2 - 60 ) + 50
    }
    else if(gender2="female") {
        idealweight2 = 2.3 * ( actualheight2 - 60 ) + 45
    }
    var idealweightx1302 = idealweight2 * 1.3;
    var adjustedweight2 = (actualweight2 + 0.4 * (actualweight2 - idealweight2));
    var dosingweight2;
    if (actualweight2 < idealweightx1302) {
        dosingweight2 = actualweight2
    } else {
        dosingweight2 = adjustedweight2
    }
//initial bolus dose  calculations
    var bolus2;
    var maxbolus2;
    var calculatedbolus2;
    var finalbolus2;
//initial infusion dose  calculations
    var infusion2;
    var calculatedinfusion2;
    var maxinfusion2;
    var finalinfusion2;
    var Goal;
    var finalBolusRound;

//correction stuff
    //maximum value for bolus in the adjustment table for DVT is 10000
dvtboluscormax = 10000;
boluscor80 = dosingweight2*80;
boluscor40 = dosingweight2*40;
 if (boluscor80> dvtboluscormax) {boluscor80a = dvtboluscormax} else {boluscor80a =roundToFifty( boluscor80)}
 if (boluscor40> dvtboluscormax) {boluscor40a = dvtboluscormax} else {boluscor40a = roundToFifty (boluscor40)}

maxadjust = 500;
calccor60 = dosingweight2*6;
calccor40 = dosingweight2*4;
calccor30 = dosingweight2*3;
calccor20= dosingweight2*2;
// making sure its less than 500
    // rounded up

    if (calccor60 >maxadjust) {cor60 = maxadjust} else {cor60 = roundToFifty(calccor60)}
    if (calccor40 >maxadjust) {cor40 = maxadjust} else {cor40 = roundToFifty(calccor40)}
    if (calccor30 >maxadjust) {cor30 = maxadjust} else {cor30 = roundToFifty(calccor30)}
    if (calccor20 >maxadjust) {cor20 = maxadjust} else {cor20 = roundToFifty(calccor20)}












//indication based calculation


    if (indication2 == "Cardiac") {
        protocol2 = "Cardiac";
        bolus2 = 60;
        infusion2 = 12;
        maxbolus2 = 5000;
        calculatedbolus2 = bolus2 * dosingweight2;
        calculatedinfusion2 = infusion2 * dosingweight2;
        maxinfusion2 = 1000;
        Goal = "72-104";
        if (calculatedbolus2 > maxbolus2) {
            finalbolus2 = maxbolus2
        } else {
            finalbolus2 = roundToFifty(calculatedbolus2) // call round function to round to multiples of 50
        }
        if (calculatedinfusion2 > maxinfusion2) {
            finalinfusion2 = maxinfusion2
        } else {
            finalinfusion2 = roundToFifty(calculatedinfusion2) // call round function to round to multiples of 50
        }
    }
    else if (indication2 == "DVT/PE") {
        protocol2 = "DVT/PE";
        bolus2 = 0;
        infusion2 = 12;
        maxbolus2 = 0;
        calculatedbolus2 = bolus2 * dosingweight2;
        calculatedinfusion2 = infusion2 * dosingweight2;
        maxinfusion2 = 1000;
        Goal = "69-90";
        if (calculatedbolus2 > maxbolus2) {
            finalbolus2 = maxbolus2
        } else {
            finalbolus2 = roundToFifty(calculatedbolus2) // call round function to round to multiples of 50
        }
        if (calculatedinfusion2 > maxinfusion2) {
            finalinfusion2 = maxinfusion2
        } else {
            finalinfusion2 = roundToFifty(calculatedinfusion2) // call round function to round to multiples of 50
        }
    }
    else if (indication2 == "Stroke/TIA/Surgery") {
        protocol2 = "Stroke/TIA/Surgery";
        bolus2 = 80;
        infusion2 = 18;
        calculatedbolus2 = bolus2 * dosingweight2;
        calculatedinfusion2 = infusion2 * dosingweight2;
        maxbolus2 = 10000;
        maxinfusion2 = 2100;
        Goal = "72-104";
        if (calculatedbolus2 > maxbolus2) {
            finalbolus2 = maxbolus2
        } else {
            finalbolus2 = roundToFifty(calculatedbolus2) // call round function to round to multiples of 50
        }
        if (calculatedinfusion2 > maxinfusion2) {
            finalinfusion2 = maxinfusion2
        } else {''
            finalinfusion2 = roundToFifty(calculatedinfusion2) // call round function to round to multiples of 50
        }
    }
    else if (indication2 == "Transplant/Vascular") {
        protocol2 == "Transplant/Vascular"
        finalbolus2 = 0;
        finalinfusion2 = 500
    }
    else {
        indication2 = 0;
        protocol2 = "0";
        bolus2 = 0;
        infusion2 = 0;
        maxbolus2 = 0;
        maxinfusion2 = 0;
        Goal = 0;
        finalinfusion2 = 0;
        finalbolus2 = 0;
    }

    //results.push(finalbolus2);
    //results.push(finalinfusion2
    // document.getElementById('res2').value = finalinfusion2;
    var results2 = { indication: protocol2, weight: actualweight2, height: actualheight2, bolus: finalbolus2, infusion: finalinfusion2, goal: Goal,
        correction6: cor60, correction4: cor40, correction3 : cor30, correction2: cor20, boluscor80 : boluscor80a, boluscor40 : boluscor40a};

    //alert(JSON.stringify(results2));

    document.getElementById('results').innerHTML = JSON.stringify(results2);
    document.getElementById('bolus').innerHTML = results2.bolus;
    document.getElementById('infusion3').innerHTML = results2.infusion;
    document.getElementById('correct6').innerHTML = results2.correction6;
    document.getElementById('correct4').innerHTML = results2.correction4;
    document.getElementById('correct3').innerHTML = results2.correction3;
    document.getElementById('correct2').innerHTML = results2.correction2;
    document.getElementById('correct33').innerHTML = results2.correction3;
    document.getElementById('correct22').innerHTML = results2.correction2;
    document.getElementById('correct222').innerHTML = results2.correction2;
    document.getElementById('indication').innerHTML = results2.indication;
    document.getElementById('bolus80').innerHTML= results2.boluscor80;
    document.getElementById('bolus40').innerHTML= results2.boluscor40;
    //last column in dvt table
    document.getElementById('dvtrow1').innerHTML = results2.correction4;
    document.getElementById('dvtrow2').innerHTML = results2.correction2;
    document.getElementById('dvtrow3').innerHTML = results2.correction2;

    document.getElementById('dvtrow5').innerHTML = results2.correction2;
    document.getElementById('dvtrow6').innerHTML = results2.correction3;
//last column in stroke table
    document.getElementById('strokerow1').innerHTML = results2.correction4;
    document.getElementById('strokerow2').innerHTML = results2.correction2;
    document.getElementById('strokerow3').innerHTML = results2.correction2;

    document.getElementById('strokerow5').innerHTML = results2.correction3;
    document.getElementById('strokerow6').innerHTML = results2.correction4;



    //   alert(("Your patient is" + actualweightlb +"lbs" +", "+ gender2 + " who needs to be started on heparin, for a  " + indication2 +  " related issue,given than,"  +"the initial bolus dose is" + (finalbolus2) +"units" + " the initial infusion is" +finalinfusion2 +"units per hour"));
    return false;

}
/*
function toggleShowHid()
{
    if (status == true){
        //change css to clickToShow class
    }

    else
    {
        //change css to clickToHide class
    }

    switch (idx) {
        1: {
            //showTable1;
        }

        2:{
            //showTable2;
        }

    }
}
*/
