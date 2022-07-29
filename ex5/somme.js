let input=document.querySelector("#entier")
let res=document.querySelector("#resultat")
let btn=document.querySelector("#btn")
res.innerHTML="" ;


    


function remp(t){
a=Number(input.value);
console.log(a);
    for(let i=0;i<=a;i++){
        t[i]=i;
    }
}

function somme(t){
    let s=0
    for(let i=0;i<t.length;i++){
    s+=t[i];
    }
    res.innerHTML=s ;}



btn.onclick=function(){
    let t=[];
    remp(t);
    somme(t);
}
