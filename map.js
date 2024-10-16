const str="abhi"
const strMap=str.split("").map((x)=>x.toUpperCase()).join("")
console.log(strMap)

const keyValue=[
    {key:1,value:"Rahul"},
    {key:2,value:"Kumar"},
    {key:3,value:"Arun"}
]
const ValueUpperCase=keyValue.map(({key,value})=>
    value.toUpperCase())
console.log(ValueUpperCase)

const lower=ValueUpperCase.map((x)=>x.toLowerCase())
console.log(lower)