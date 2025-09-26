//keep your bp level normal

function f1(x=3)
{
    console.log(x);

}

f1(4);
f1();

/*
function f1()
{
let x=[];
x[0]=1;
//raise the bp level of kids
x[1]=function(){console.log("is bp level normal");};
return x;
}

let z = f1();
let [basic,always]=z;


always();
// we are taking first element from Z array and assinging to a variable
//called basic. sinc first element of the array is number, basic
//will be a numbe.

//we are taking the second element of the array and assinging
//to a varible always.. since second element of the array is function
//always is also a function. it is assignged not called.

*/










/*
will line is bp level normal get printed..
answer is no , why.. function is not called.
then what is done function is assinged to z varible.


*/