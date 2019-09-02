window.onload=init;
function init() {
    document.getElementById("add").onclick=add;
    document.getElementById("sub").onclick=sub;
    document.getElementById("mul").onclick=mul;
    document.getElementById("div").onclick=div;
}
function add()
{
    n1=document.getElementById("num1");
    if(isNaN(n1.value))
    {
        alert("num1输入错误，请正确输入！");
        n1.value="";
        return;
    }
    var n1=parseFloat(n1.value);
    n2=document.getElementById("num2");
    if(isNaN(n2.value))
    {
        alert("num2输入错误，请正确输入！");
        n2.value="";
        return;
    }
    var n2=parseFloat(n2.value);
    result=document.getElementById("result");
    result.value=n1+n2;
}
function sub()
{
    n1=document.getElementById("num1");
    if(isNaN(n1.value))
    {
        alert("num1输入错误，请正确输入！");
        n1.value="";
        return;
    }
    var n1=parseFloat(n1.value);
    n2=document.getElementById("num2");
    if(isNaN(n2.value))
    {
        alert("num2输入错误，请正确输入！");
        n2.value="";
        return;
    }
    var n2=parseFloat(n2.value);
    result=document.getElementById("result");
    result.value=n1-n2;
}
function mul()
{
    n1=document.getElementById("num1");
    if(isNaN(n1.value))
    {
        alert("num1输入错误，请正确输入！");
        n1.value="";
        return;
    }
    var n1=parseFloat(n1.value);
    n2=document.getElementById("num2");
    if(isNaN(n2.value))
    {
        alert("num2输入错误，请正确输入！");
        n2.value="";
        return;
    }
    var n2=parseFloat(n2.value);
    result=document.getElementById("result");
    result.value=n1*n2;
}
function div()
{
    n1=document.getElementById("num1");
    if(isNaN(n1.value))
    {
        alert("num1输入错误，请正确输入！");
        n1.value="";
        return;
    }
    var n1=parseFloat(n1.value);
    n2=document.getElementById("num2");
    if(isNaN(n2.value))
    {
        alert("num2输入错误，请正确输入！");
        n2.value="";
        return;
    }
    var n2=parseFloat(n2.value);
    result=document.getElementById("result");
    result.value=n1/n2;
}
function del()
{
    n1=document.getElementById("num1");
    // if(isNaN(n1.value))
    // {
    //     alert("num1输入错误，请正确输入！");
    //     n1.value="";
    //     return;
    // }
    // var n1=parseFloat(n1.value);
    n2=document.getElementById("num2");
    // if(isNaN(n2.value))
    // {
    //     alert("num2输入错误，请正确输入！");
    //     n2.value="";
    //     return;
    // }
    n1.value="";
    n2.value="";
    // var n2=parseFloat(n2.value);
    result=document.getElementById("result");
    // result.value=n1/n2;
    result.value="";
}