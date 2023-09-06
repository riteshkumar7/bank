function signIn()
{
    let uId=document.getElementById("t1").Value;
    let uPas=document.getElementById("t2").Value;

    let name=document.getElementById("nm").value;
    let user=JSON.parse(localStorage.getItem(uId));
    console.log(user);
    if(uPas==user)
    {
        alert("valid....");
        sessionStorage.setItem("temp",uId);
        window.location.href="bank.html";
    }
    else{
        alert("invalid");
    }
}
function signUp()
{
    let uId=document.getElementById("t1").value;
    let uPas=document.getElementById("t2").value;
    localStorage.setItem(uId,uPas);
    window.location.href="NewUser.html";
}