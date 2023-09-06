function nUser()
{
    let userNM=document.getElementById("nm").value;
    let userAN=document.getElementById("ac").value;
    let userty=document.getElementById("at").value;
    let userBal=document.getElementById("bal").value;
    let uPas=document.getElementById("p1").value;
    let user={
        nm:userNM,
        ty:userBal,
        np:uPas
    };
    user=JSON.stringify(user);
    localStorage.setItem(userAN,user);
}