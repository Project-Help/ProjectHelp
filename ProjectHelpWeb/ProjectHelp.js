var i = 20;
var string23423 = "Project help is a constantly growing project developed by students themselves to aspire academic sucess and innovation among fellow scholars and friends. \nThrough this project, our team hopes to assist as many students as possible, in negligence of ability or siuation. \n Our project aspires to provide knowledge and homework help to all available, and take off the ever so experienced stress of being a student.";
var f = 0; 
var textcontent = document.getElementById("title");
var dropdown =  document.getElementById("dropdown");
var caseOnl = true;
var isunhvr = false;
var isani = false;
window.onload = function onLOAD()
{
    
    
    
    
    document.getElementById("gallery1").style.opacity = 0;
    document.getElementById("gallery2").style.opacity = 0;
    document.getElementById("gallery3").style.opacity = 0;
    document.getElementById("gallery4").style.opacity = 0;
    
    document.getElementById("logo").style.opacity = 0;
    document.getElementById("dropdown").style.backgroundColor = "transparent";
    document.getElementById("top-padding").style.backgroundColor = "transparent";
    document.getElementById("dropdown").style.borderColor = "transparent";
    document.getElementById("signupPad").innerHTML = "";
    document.getElementById("disc-req").style.width = "0px";
    document.getElementById("disc-req").style.height = "0px";
    document.getElementById("informative-brain").style.opacity = 0;
    
    
    
    
    
setTimeout(function title()
    {
     
     
     f++;
         //test loop delete later
         textcontent.innerHTML += ".";
         if (f<3)
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
    document.getElementById("title").innerHTML = "Allow us to help";
    document.getElementById("cont").style.top = "40%";
    document.getElementById("cont").style.left = "45%";
    document.createElement("div").id = "gallery1";
    document.createElement("div").id = "gallery2";
    document.createElement("div").id = "gallery3";
    document.createElement("div").id = "gallery4";

    
    
    
    z++;
    if (z == 2)
    {
        document.getElementById("logo").opacity = 1;
        document.getElementById("dropdown").style.backgroundColor = "black";   //condense into CSS Class later?
        document.getElementById("top-padding").style.backgroundColor = "black";  //condense into CSS Class later?
        document.getElementById("dropdown").style.borderColor = "black";  //condense into CSS Class later?
        document.getElementById("cont").innerHTML = "";
        document.getElementById("title").innerHTML = "";
        document.getElementById("pg-Intro").innerHTML = "Expand your academic capabilities and recieve help in virtually any subject. \n Created by students, for students. ";
        document.getElementById("gallery1").src = "images/KevinSnippet.jpg";
        document.getElementById("gallery2").src = "images/codeSnip.png";
        //document.getElementById("disc-req").style.width = "200px";
        //document.getElementById("disc-req").style.height = "50px";
        document.getElementById("gallery1").style.opacity = 1;
        document.getElementById("gallery2").style.opacity = 1;
        document.getElementById("gallery3").style.opacity = 1;
        document.getElementById("gallery4").style.opacity = 1;
        document.getElementById("tiTle").innerHTML = "Project Help";
        document.getElementById("logo").src = "logo.png";
        
       
       
    }
}










function imgFocusIdentification(direc, identity)
{
    var f = 0;
    var galler1 = document.getElementById("gallery1");
    var galler2 = document.getElementById("gallery2");
    var galler3 = document.getElementById("gallery3");
    var galler4 = document.getElementById("gallery4");
    var b = document.getElementById("informative-brain");
    var currentH = document.getElementById("informative-brain").style.left;
    var currentV = document.getElementById("informative-brain").style.left
    if (direc == "unfocus")
    {
      if (z >= 2)
      {
          /*
        setTimeout(function unfoc(){
           


           switch (identity)
           {
               case "gallery1":  
               gallery2.onmouseover = imgFocusIdentification();
               gallery3.onmouseover = imgFocusIdentification();
               gallery4.onmouseover = imgFocusIdentification();
               break;
             
                case "gallery2":
                    gallery1.onmouseover = imgFocusIdentification();
                    gallery3.onmouseover = imgFocusIdentification();
                    gallery4.onmouseover = imgFocusIdentification();
                    break;
                    case "gallery3":
                        gallery1.onmouseover = imgFocusIdentification();
                        gallery2.onmouseover = imgFocusIdentification();
                        gallery4.onmouseover = imgFocusIdentification();
                        break;
                        case "gallery4":
                            gallery1.onmouseover = imgFocusIdentification();
                            gallery2.onmouseover = imgFocusIdentification();
                            gallery3.onmouseover = imgFocusIdentification();
                            break;
           }
           },100); 
      }
      */
           
        gallery1.style.opacity = 1;
        gallery2.style.opacity = 1;
        gallery3.style.opacity = 1;
        gallery4.style.opacity = 1;
        b.style.opacity = 0;


        
       
       
       
    }
}
    else 
    {
        if (z >=2)
        {
            
                switch (identity)
                 {
                     
                    case "gallery1":
                    galler2.style.opacity ="0.1";
                    galler3.style.opacity ="0.1";
                    galler4.style.opacity ="0.1";
                    b.style.opacity = 1;
                    b.style.left = "470px";
                    b.style.top = "170px";
                    runnn();
                  function runnn()
                   {  setTimeout(function animation()
                        {
                           var vertamt = intParser(currentV) +(f*2);
                          var horzamt = IntParser(currentH)+(f*2);
                          alert (""+horzamt + ""+ vertamt+ "" );
                        b.style.left = ""+horzamt+"px";
                        b.style.top = ""+ vertamt + "px";
                        b.style.transform = "rotate("+f+"deg)";
                        if (f<25)
                        {
                            runnn();
                        }
                        },1);
                    }
                    
                
                    
                    
                    
                    // ending coords: b.style.left = "43.5%";
                   //ending coords:   b.style.top = "3%";
                   //ending transformation: rotate(25deg);
                    
                    
                    
                    
                    //gallery2.onmouseover = nullify();
                    //gallery3.onmouseover = nullify();
                    //gallery4.onmouseover = nullify();
                    break;
                    
                    
                    
                    
                    case "gallery2":   
                    galler1.style.opacity ="0.1";
                    galler3.style.opacity ="0.1";
                    galler4.style.opacity ="0.1";
                   // gallery1.onmouseover = nullify();
                   // gallery3.onmouseover = nullify();
                   // gallery4.onmouseover = nullify();

                    break;
                    
                    
                    
                    
                    
                    case "gallery3":
                    galler2.style.opacity ="0.1";
                    galler1.style.opacity ="0.1";
                    galler4.style.opacity ="0.1";
                   // gallery1.onmouseover = nullify();
                  //  gallery2.onmouseover = nullify();
                   // gallery4.onmouseover = nullify();
                    break;
                
                
                
                
                
                    case "gallery4": 
                    galler2.style.opacity ="0.1";
                    galler3.style.opacity ="0.1";
                    galler1.style.opacity ="0.1";
                  //  gallery1.onmouseover = nullify();
                  //  gallery2.onmouseover = nullify();
                   // gallery3.onmouseover = nullify();
                    break;
                }
            
        
         
         }
    }
}
function intParser(Str)
{
    var string = Str;
    for (var v = 0;v<string.length;v++)
    {
        if (!(string.charAt(v)) > 0 && !(Str.charAt < 9))
        {
            string = string.slice(v);
        }
        else continue;
    }
    var fin = parseInt(string);
    return fin;
}

/*function nullify()
{
    null;
}
*/
/*
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



     hash loop beginning.
        hash loop is still insecure, however.
        possibly move it to its own function and add a setinterval to randomize hashing every now and then?? 
    
  
  
  
  
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
        alert("Insufficient password");
    }
}



function enc()
{
    //: experimental
}
*/


/*function unhvr(variant)
{
    if (isunhvr == true)
    {
        nullify();
    }
     isunhvr = true;
    if (variant == "topP")
    {
        setTimeout(function topP()
                  {
                     
                     
                    isunhvr = true;
                      
                      setTimeout(function go()
                      {
                        i-=2;
                        if (i > 20)
                        {
                            
                            document.getElementById("DDhover").style.height = ""+i+"px";
                            document.getElementById("top-padding").style.height=""+i+"px";
                            topP();
                        }
                      }
                      ,0.5);
                    
                  }
            ,200);
        
    }
    
}

function Ani()
{  
    isani = true;
    if (isunhvr == true)
    {
        nullify();
    }
    
    document.getElementById("top-padding").height = "75px";
    setTimeout(
    setTimeout(function innerAni()
    {
        isani = true;
        i+=2; //originally i++ EXPIREMENTAL
       
        
        if (i < 75)
        {
            document.getElementById("DDhover").style.height = ""+i+"px";
            document.getElementById("DDhover").onmouseover = nullify(); //expiremental righ here    
            Ani();
        }
    },0.5),100);
}

*/
