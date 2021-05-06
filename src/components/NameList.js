import React from "react";
import Person from "./Person";

function NameList(){
    const names = ['Vinayak', 'Umesh', 'Samy']
    const nameList = names.map((name,index) => <h2 key={index}> {index} {name}</h2>)
    return <div>{nameList}</div>

    const persons =[
        {
            id:1,
            name:'Vinayak',
            age:12,
            skill:'React'
        },
        {
            id:2,
            name:'Umesh',
            age:18,
            skill:'Csharp'
        }
    ]
    // const personList= persons.map(person => (<h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>))
    // return <div>{personList}</div>

    const personList= persons.map(person => (<Person key ={person.id} person={person}></Person>))
    return <div>{personList}</div>


}
export default NameList