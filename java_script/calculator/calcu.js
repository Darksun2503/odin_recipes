let myc = document.getElementById("display") ;

function appendvalue(val) {
    myc.value += val;
}

function cleardisplay () {
    myc.value = "" ;
}


function deletelast() {
    myc.value= myc.value.slice(0,-1) ;
    
}

function calculate() {
    try{
         myc.value= eval(myc.value);
    }

    catch{
        myc.value = "Error" ;
    }
}


