 //var aContainer = document.querySelector(".content");
 var password= "";
 var numberCount = 0;
 var lowercaseCount=0;
 var uppercaseCount=0;
 var symbolCount=0;
 var incrementEl = document.querySelector("#increment");
 var clipEl = document.querySelector("#clip");
 var passwEl  = document.querySelector("#passw")

 
 
 //aContainer.style.textAlign= "center";
// aContainer.style.margin = "5%";
// aContainer.style.padding = "5px";


 //var wrapText = document.querySelector(".wrapper");
 //wrapText.style.textAlign= "left";
 //wraptText.stlye.margin = "10px";
 //wrapText.style.padding = "5px";

        
        function setPassText () {
            
            passwEl.textContent = password;
            
        }       

        
  
 incrementEl.addEventListener("click", function() {
    
      
        password= "";
        numberCount= 0;
        let listChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*@~^()_+";
        
        
        var plength = prompt("how long password do you want ? [min=8 & max=128] ?");
        length = parseInt(plength, 10);
        
            if (length<8||length>128) {
            alert("Criteria for password length is not met. Password must have minimum 8 and maximum 128 characters. Try again!")
            return;
            }

        else {
                alert (length);
                console.log(typeof length);

                    for (var i=0; i<length; i++) {

                    password = password + listChar.charAt(Math.floor(Math.random() * listChar.length));
                    
                    // `if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
                         
                    //     return;
                        
                    // }

                    

                    // else if (password.match(/[!#$%&*@~^()_+]+/)) {
                       
                    //     return;
                    // }
                    // else {
                    //     return; false;
                    // }`


                    }
                   
                    alert(password);
                    console.log(password);
                    
                    setPassText();
                    
                    
            }});    
        

            // copy to clipboard section !!


        function copyBoard () {
            document.getElementById("passw").select();
            document.execCommand("copy");
        alert("Password Copied to Clipboard")

      }






