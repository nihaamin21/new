const arr4 = [
    [
        [1,2,3,4,5,6],
        ['apple','banana','anar']
    ],
    [
        ['a','b','c','d'],
        ['alif','baa','taa']
    ],
    [
        ['a','b','c','d'],
        [2,4,6,8,10]
    ]
]
    for(let i=0; i<arr4.length;i++){
        const array1 = arr4[i]
        for(let j=0; j<array1.length; j++){
            const array2 = array1[j]
            for(let l =0; l<array2.length; l++){
                console.log(array2[l]);
            }
        }
        // for(let j=0; j<arr4[i];j++){
        //     for(let h=0; h<arr4[i][j]; h++){
        //         console.log(arr4[i][j][h]);
        //     }
        // }
    }






// const arr3=[
//     [5,4,8,1,10],
//     ['apple','orange']
// ]
// for(let i=0; i<arr3.length;i++){
//     const newArr = arr3[i];//const newArr=[5,4,8,1,10]
    
//     for(let j=0; j<newArr.length;j++){
//     console.log(newArr[j]);
//     //multi diamentional array
    
//     }



// }



// for(let i=0;i<arr3.length;i++){
//     console.log(arr3[i]);
    
// }