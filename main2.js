
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

//indication based calculation


    if (indication2 == "Cardiac") {
        protocol2 = "cardiac";
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
        } else {
            finalinfusion2 = roundToFifty(calculatedinfusion2) // call round function to round to multiples of 50
        }
    }
    else if (indication2 == "Transplant/Vascular") {
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
    var results2 = {indication: protocol2, weight: actualweight2, height: actualheight2, bolus: finalbolus2, infusion: finalinfusion2, goal: Goal};

    //alert(JSON.stringify(results2));

    document.getElementById('results').innerHTML = JSON.stringify(results2);
    document.getElementById('bolus').innerHTML = results2.bolus;
    document.getElementById('infusion3').innerHTML = results2.infusion;

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
