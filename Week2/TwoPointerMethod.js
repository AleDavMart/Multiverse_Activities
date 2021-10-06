// Two pointer method to order array in ascending order
//Dont want to create any new arrays
//only iterate through the array once
// 0(1) space 0(n)- means only using the array once

function sort(arr){
    
    //two pointers 
    //starting from the left 
    let p1 = 0;

    //the right most nuber
    let p2 = arr.length - 1


    while(p1 < arr.length){
        //swap the elements 
        if(arr[p1] > arr[2]){
            let temp = arr[p1]// will hold the value of p1 temporarily
            
            arr[p1]=arr[p2]
            arr[p2]= temp
            p2-- //decrementing p2

        }
        //reset the pointers 
        if(p1 === p2){
            p2 = arr.length - 1
            p1++
        }

        //decrement p2
        p2--
    }
    return arr
}

//p1            p2
//[] 7, 5, 1, 3, 4]
//1. check arr[p1] < arr[p2] checking that p1 is always less than p2
// if arr[p1] is greater than arr[p2] then we will swap order of the values
// we have to reset P2 to the end of the array and increment p1 by 1
//everytime at the end of the loop p1 will be reset to the next array index 

console.log(sort([7,5,1,3,4]))