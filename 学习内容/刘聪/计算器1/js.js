var str="";
function fun(t)   //显示屏获取数
{
    str+=document.getElementById(t).value;
    document.getElementById("q1").value=str;

}
function result()   //等于号计算结果
{    //采用if判断对所有连续输入符号的操作输出格式有误
    if((str.indexOf('..')!=-1)||(str.indexOf('++')!=-1)||(str.indexOf('--')!=-1)||(str.indexOf('**')!=-1)||(str.indexOf('//')!=-1))   //排除连续输入两个运算符的错误格式
    {
        document.getElementById("q1").value="格式输入有误！"
    }
    else
    {
        document.getElementById("q1").value=eval(str);
        document.getElementById("q0").value=str+"=";
        str="";
    }
}
function result2(op)   //相反数
{
    if(op=='dg')
        var t=document.getElementById("q1").value;
    document.getElementById("q1").value=-t;
    document.getElementById("q0").value=-t;
}
function cle()   //清零AC
{
    document.getElementById("q1").value=null;
    document.getElementById("q0").value=null;
    str="";
}
function del()    //删除前一位
{
    for(var i=0;i<str.length;i++)
    {
        document.getElementById("q1").value=str.substring(0,str.length-1)

    }
    str=document.getElementById("q1").value;
}