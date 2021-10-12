const addUp = (num)=>{
    if(num===1){
       return  num
   } else {return num - addUp(num-1)}
}
