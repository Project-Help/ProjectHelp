
var i = 0;
var textcontent = document.getElementById("title");
var dropdown =  document.getElementById("dropdown");
window.onload = function onLOAD()
{
    document.getElementById("dropdown").style.backgroundColor = "transparent";
    document.getElementById("top-padding").style.backgroundColor = "transparent";
    document.getElementById("dropdown").style.borderColor = "transparent";
    

setTimeout(function title()
    {
     
     
     i++;
         //test loop delete later
         textcontent.innerHTML += ".";
         if (i<3)
        {
            onLOAD();
        }
        //recursive if statement
    
    },500); //end interval 
}//end onLOAD func


function incompatPsswd()
{
    // oh no! your password ABSOLUTELY SUCKS. REPLACE IT YOU BAFOON. lol. 
} 
var z = 0;
function cont()
{
    document.getElementById("title").style.left = "25%";
    document.getElementById("title").style.top = "30%";
    document.getElementById("title").innerHTML = "Allow us to help...";
    document.getElementById("cont").style.top = "40%";
    document.getElementById("cont").style.left = "45%";
    
    z++;
    if (z == 2)
    {
        document.getElementById("dropdown").style.backgroundColor = "crimson";   //condense into CSS Class later?
        document.getElementById("top-padding").style.backgroundColor = "crimson";  //condense into CSS Class later?
        document.getElementById("dropdown").style.borderColor = "black";
        document.getElementById("signupPad").style.backgroundColor = "crimson";  //condense into CSS Class later?
        document.getElementById("cont").innerHTML = "";
        document.getElementById("title").innerHTML = "";
        document.getElementById("realTitle").innerHTML = "Project Help";
        document.getElementById("pg-Intro").innerHTML = "Project help is a constantly growing project developed by students themselves to aspire academic sucess and innovation \n among fellow scholars and friends. Through this project, our team hopes to \n assist as many students as possible, \n in negligence of ability or situation. \n Our project aspires to provide completely free knowledge and \n homework help to all available, and take \n off the ever so experienced stress of being a student.";
        document.getElementbyID("signupPadding").borderColor = black;
    
    }
}


function SecureStore()
{
    var SecureUser = document.getElementById("INPUT-PRIV-01").innerHTML;
   var numReq = false;
   var specialChar = false;
   var lengthReq = false;
   const regChars = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0];
   
   if (!SecureUser.length < 8 || !SecureUser.length > 20)
   {
    lengthReq = true;
   }
   //end length query

   
   
   for (var i = 0; i < SecureUser.length; i++)
    {
        if (SecureUser.charAt(i) >= 0 || SecureUser.charAt(i) <=9)
        {
            numReq = true;

        }
        //sets numReq true because a number has been detected in the INPUT-PRIV-01 string
        
        for (var a = 0;a<regChars.length;a++) //for loop to run through each value of the regChars array to test for special chars
        {
            if (SecureUser.charAt(i) != regChars[a]) //if true, the for loop will continue to the next value of the regChar array and test the same char of the INPUT-PRIV-01 string
            {
                continue;
            }
            
            else if (SecureUser.charAt(i == regChars[a]  ))
            {
                break;
            }
            else if (i = regChars.length-1)
            {
            
                break;
            }
        } //end of special char query
    } //end of  query



    /* hash loop beginning.
        hash loop is still insecure, however.
        possibly move it to its own function and add a setinterval to randomize hashing every now and then?? 
    */
  
  
  
  
    if (numReq == true && specialChar == true && lengthReq == true)
    {
        var hash = 7;
        for (var i = 0; i < SecureUser.length; i++)
        {
        hash = hash*31 + charAt(i);
        } //end hash for loop
    } //end if
    else 
    {
        incompatPsswd();
        print("Insufficient password");
    }
}



function enc()
{
    //: experimental
}