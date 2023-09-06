let user;
let act;
function showACT()
{
    act=sessionStorage.getItem("temp");
    user=JSON.parse(localStorage.getItem(act));
    document.getElementById("B").innerHTML=act;
    document.getElementById("C").innerHTML=user.bal;
    document.getElementById("t1").innerHTML=user.nm;

}
function deposite()
{
    let amt=parseInt(document.getElementById("t").value);
    let b=0;
    b=parseInt(user.bal)+amt;
    user.bal=b;
    localStorage.setItem(act,JSON.stringify(user));
}
function width()
{
    let amt=parseInt(document.getElementById("t")).value;
    if(user.bal>=amt)
    {
        let b=0;
        b=parseInt(user.bal)-amt;
        user.bal=b;
        localStorage.setItem(act,JSON.stringify(user));
    }
    else{
        alert("can not widthdraw ....");
    }
}