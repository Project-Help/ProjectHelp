
function refh(hrefcode)
{
 window.location.href = "file:///C:/Users/kgmat/Desktop/ProjectHelpWeb/"+hrefcode+".html";
   //fill in later once website is published ;)
}
var z = 75;
function unhvr(variant)
{
    if (variant == "topP")
    {
        setTimeout(function topP()
                  {
                      i = 0;
                      
                      setTimeout(function go()
                      {
                        z-=2;
                        if (z > 20)
                        {
                            
                            document.getElementById("DDhover").style.height = ""+z+"px";
                            document.getElementById("top-padding").style.height=""+z+"px";
                            topP();
                        }
                      }
                      ,0.5);
                    
                  }
            ,200);
        
    }
    else if (variant = "dd")
    {
        
        
        base.style.height = '75px;';
        Ani();
        
    }
}
var i = 20;
function Ani()
{
    z = 75;
    document.getElementById("top-padding").height = "75px";
    
    setTimeout(function innerAni()
    {
        i+=2; //originally i++ EXPIREMENTAL
       
        
        if (i < 75)
        {
            document.getElementById("DDhover").style.height = ""+i+"px";
            document.getElementById("DDhover").onmouseover = nullify(); /*expiremental here    */
            Ani();
        }
    },0.5);
}
function nullify()
{
    null;
}
