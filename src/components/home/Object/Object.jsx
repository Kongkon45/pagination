import React from 'react';

const Object = () => {
    // const person = {
    //     name : "kongkon",
    //     age : 22,
    //     department : "CMT"
    // }
    // const {name, age, department} = person;
    // console.log(name)
    // console.log({...person, name : "sujon"})

//     const names = ["kongkon", "sujon", "rakib"];
//   console.log([...names, "jakir"])
//     console.log({names})

const number = [1, 2, 3, 5, 9, 34, 20];
// const result = number.findIndex((num, index, arr) =>{
//     console.log(index)
//     console.log(arr)
//     return num > 3 
// })
const result = number.splice(-1, 3, 4,3)
console.log(result)
console.log(number)
    return (
        <div>
            hi
        </div>
    );
};

export default Object;