//let msg=()=>{
    document.write("happy birthday<br>")
//}
//msg()
//msg()
//let str1="hello gla"
//console.log(str1);
//let str2=new String("hello")
//console.log(str2);
var students={
    id:101,
    sname:"kapil",
    ispassed:true,
    
}
//console.log(students);
let show=`<div style="text-align:center">
 
<h1 style="background:tomato;color:white;"> student name:${students.sname}</h1><hr>
<h2>id:${students.id}</h2>
<h2>passed:${students.ispassed? "pass out":"pursuing"}
</div>
`
document.write(show)