// Input: any integer.
// Operation: round the result of dividing any integer with 50, and then multiplying it with 50.
function roundToFifty(someNum){
    return Math.round(someNum / 50) * 50;
}

function GetDose() {
//initial input by end user
    // Get all table
    var indication2 = document.getElementById("indication2box").value;
    var cardiacTable = document.querySelector(".cardiac-wrapper");
    var dvtTable = document.querySelector(".dvt-wrapper");
    var strokeTable = document.querySelector(".stroke-wrapper");
    var procedureTable = document.querySelector(".procedure-wrapper");
    //Display the right table
    switch (indication2) {
        case "Cardiac":
            cardiacTable.style.display = "block";
            dvtTable.style.display = "none";
            strokeTable.style.display = "none";
            procedureTable.style.display = "none";
            break;
        case "DVT/PE":
            cardiacTable.style.display = "none";
            dvtTable.style.display = "block";
            strokeTable.style.display = "none";
            procedureTable.style.display = "none";
            break;

        case "Stroke/TIA/Surgery":
            cardiacTable.style.display = "none";
            dvtTable.style.display = "none";
            strokeTable.style.display = "block";
            procedureTable.style.display = "none";
            break;
        case "Transplant/Vascular":
            cardiacTable.style.display = "none";
            dvtTable.style.display = "none";
            strokeTable.style.display = "none";
            procedureTable.style.display = "block";
            break;

    }
//initial input by end user
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
// maximum value for bolus in the adjustment table for DVT is 10000
    dvtboluscormax = 10000;
    boluscor80 = dosingweight2*80;
    boluscor40 = dosingweight2*40;
    // DVT bolus adjustment values rounded to 50s and compare to max of 10000
    var boluscor80a;
    var boluscor40a;
    if (boluscor80> dvtboluscormax) {boluscor80a = dvtboluscormax} else {boluscor80a =roundToFifty( boluscor80)}
     if (boluscor40> dvtboluscormax) {boluscor40a = dvtboluscormax} else {boluscor40a = roundToFifty (boluscor40)}
//cardiac adjustment bolus
    cardiacbolusmax = 5000;
    boluscor60 = dosingweight2*60;
    boluscor30 = dosingweight2*30;
    // rounded up and compare to max of 5000
    var boluscor60a;
    var boluscor30a;
    if (boluscor60 >cardiacbolusmax) {boluscor60a = cardiacbolusmax} else {boluscor60a = roundToFifty(boluscor60)}
    if (boluscor30 >cardiacbolusmax) {boluscor30a = cardiacbolusmax} else {boluscor30a = roundToFifty(boluscor30)}

//infusion adjustment for all
    maxadjust = 500;
    infusioncor4 = dosingweight2*4;
    infusioncor3 = dosingweight2*3;
    infusioncor2= dosingweight2*2;
    // rounded up and compare to max of 500
    var infusioncor4a;
    var infusioncor3a;
    var infusioncor2a;
    if (infusioncor4 >maxadjust) {infusioncor4a = maxadjust} else {infusioncor4a = roundToFifty(infusioncor4)}
    if (infusioncor3 >maxadjust) {infusioncor3a = maxadjust} else {infusioncor3a = roundToFifty(infusioncor3)}
    if (infusioncor2 >maxadjust) {infusioncor2a = maxadjust} else {infusioncor2a = roundToFifty(infusioncor2)}

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
        bolus2 = 80;
        infusion2 = 18;
        maxbolus2 = 10000;
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
        bolus2 = 0;
        maxbolus2 = 0;
        infusion2 = 12;
        maxinfusion2 = 2100;
        calculatedbolus2 = bolus2 * dosingweight2;
        calculatedinfusion2 = infusion2 * dosingweight2;

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
    var results2 = { indication: protocol2, weight: actualweight2, height: actualheight2, bolus: finalbolus2, infusion: finalinfusion2,
        goal: Goal,
        cardiacBolus60: boluscor60a,
        cardiacBolus30:boluscor30a,
        dvtBolus80: boluscor80a,
        dvtBolus40: boluscor40a,
        infusionX4: infusioncor4a,
        infusionX3: infusioncor3a,
        infusionX2: infusioncor2a};



    //alert(JSON.stringify(results2));

    document.getElementById('results').innerHTML = JSON.stringify(results2);
    document.getElementById('bolus').innerHTML = results2.bolus;
    document.getElementById('infusion3').innerHTML = results2.infusion;
    document.getElementById('correct80').innerHTML = results2.dvtBolus80;
    document.getElementById('correct60').innerHTML = results2.cardiacBolus60;
    document.getElementById('correct40').innerHTML = results2.dvtBolus40;
    document.getElementById('correct30').innerHTML = results2.cardiacBolus30;
    //cardiac infusion adjustment
    document.getElementById('cardiacRow1').innerHTML = results2.infusionX4;
    document.getElementById('cardiacRow6').innerHTML = results2.infusionX3;
    document.getElementById('cardiacRow2').innerHTML = results2.infusionX2;
    document.getElementById('cardiacRow3').innerHTML = results2.infusionX2;
    document.getElementById('cardiacRow5').innerHTML = results2.infusionX2;
    //DVT infusion adjustment
    document.getElementById('dvtRow1').innerHTML = results2.infusionX4;
    document.getElementById('dvtRow6').innerHTML = results2.infusionX3;
    document.getElementById('dvtRow2').innerHTML = results2.infusionX2;
    document.getElementById('dvtRow3').innerHTML = results2.infusionX2;
    document.getElementById('dvtRow5').innerHTML = results2.infusionX2;
    //Stroke infusion adjustment
    document.getElementById('strokeRow1').innerHTML = results2.infusionX4;
    document.getElementById('strokeRow6').innerHTML = results2.infusionX4;
    document.getElementById('strokeRow2').innerHTML = results2.infusionX2;
    document.getElementById('strokeRow3').innerHTML = results2.infusionX2;
    document.getElementById('strokeRow5').innerHTML = results2.infusionX3;

    document.getElementById('indication').innerHTML = results2.indication;






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
