var submit1 = document.getElementById("submit");
var titelBog = document.querySelector("input");
var søgTitel = document.getElementById("søgTitel");
var ul = document.querySelector("ul");
var liLength = document.querySelectorAll("li");
var nyforfatter = document.getElementById("nyforfatter");
var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");
var reset = document.getElementById("reset");
var reset2 = document.getElementById("reset2");
var submit2 = document.getElementById("submit2");
var arrayOfForfatter = [];
var unique = [];



submit1.addEventListener("click", function(){
    if(titelBog.value === ""){
        nyforfatter.value = "";
        select1.value = "";
        alert("Indtast titel!!!");
    }

    else if(nyforfatter.value !== "" && select1.value === ""){
               

        var li = document.createElement("li");
    
        
        
        li.appendChild(document.createTextNode('"' + titelBog.value + '" ' + nyforfatter.value));

  
        ul.appendChild(li);
                

        
        arrayOfForfatter.push(nyforfatter.value);

        unique = [...new Set(arrayOfForfatter)];

         
        let options = unique.map(a => `<option value=${a.toLowerCase()}>${a}</option>`).join("\n");
        
        select1.innerHTML = options;
        select2.innerHTML = options;

        titelBog.value ="";
        nyforfatter.value = "";
        søgTitel.value = "";
        select1.value = "";
        select2.value = "";

        

    }
    else if(nyforfatter.value === "" && select1.value !== ""){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode('"' + titelBog.value + '" ' + select1.value));
        ul.appendChild(li);
        titelBog.value = "";
        select1.value="";

    }

    else {
        titelBog.value="";
        nyforfatter.value = "";
        select1.value ="";
        alert("Der skal være kun en forfatter!!!");

    }
    
    
    var li = document.querySelectorAll("li");

    for(var i = 0; i < li.length; i++){
        li[i].style.border = "none";
    }
    

})

reset.addEventListener("click", function() {
    select1.value = "";
})

reset2.addEventListener("click", function() {
    select2.value = "";
})


submit2.addEventListener("click", function(){
    
    if(søgTitel.value === ""){
        søgTitel.value = "";
        select2.value = "";
        alert("Indtast titel!!!");
    }

    else if(søgTitel !== "" && select2.value !== ""){
        
        var li = document.querySelectorAll("li");

        var checker = '"' + søgTitel.value+ '" ' + select2.value;
        

        for(var i = 0; i < li.length; ++i){
            if(li[i].innerHTML == checker){
                var answer = li[i];
                function border(){
                    answer.style.border = "2px solid red";
                }

                setTimeout(border, -3000);

               
                
                console.log("for")
            }
            
         


        }


    }

    else{
        alert("Indtast fuld data!!!")
    }

})

/*
let options = unique.map(a => `<option value=${a.toLowerCase()}>${a}</option>`).join("\n");



*/