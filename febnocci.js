const feb=(n)=>{
if (n<2)
{
    return n
}
else
{
    return feb(n-1)+feb(n-2)
}
}
console.log(feb(4))
