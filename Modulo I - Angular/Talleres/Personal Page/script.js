function smoothScroll(id)
{
    let elemento=document.getElementById(id);
    elemento.scrollIntoView({behavior: 'smooth'});
}

function validateForm()
{
  var name = document.forms["timeline"]["nombre"].value;
  var text = document.forms["timeline"]["message"].value;
  var error = 0;

  document.getElementById("name").innerHTML="";
  document.getElementById("message").innerHTML ="";

  if(name == "")
  {
    document.getElementById("name").innerHTML="Debe escribir su nombre";
    error=1;
  }
  if(text == "")
  {
    document.getElementById("message").innerHTML="Debe escribir un mensaje";
    error=1;
  }
  if(error)
  {
    document.getElementById("form").focus;
  }
  if(document.getElementById("txt").value.length>300)
  {
    document.getElementById("message").innerHTML="El texto no puede tener más de 300 caracteres";
    error=1;
  }
  else
  {
    showMsg();
  }
}

function showMsg()
{
   document.getElementById("chatbox").innerHTML+=document.forms["timeline"]["nombre"].value + ": "+ document.forms["timeline"]["message"].value + "<br />";
   
}
