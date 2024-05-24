import './App.css';
import React, {Component} from 'react';
import Customer from './component/Customer';

const customer ={
  'id' : '54',
  'image' : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjgg%2FMDAxNzEyODk1MjY0MDgw.-0ROPmxFOFBDDmDOYaEVaDxP9eJ14F4AYHKp9ayOoFUg.RJRSoXzpwc0n0PRT_PFU0DYxaTAv8HRUcHLE4yHA1Fog.PNG%2Fimage.png&type=sc960_832',
  'name' : '고길동',
  'birthday' : '9554422',
  'gender' : 'male',
  'job' : 'mola'
}

const customers =[
  {
  'id' : '54',
  'image' : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjgg%2FMDAxNzEyODk1MjY0MDgw.-0ROPmxFOFBDDmDOYaEVaDxP9eJ14F4AYHKp9ayOoFUg.RJRSoXzpwc0n0PRT_PFU0DYxaTAv8HRUcHLE4yHA1Fog.PNG%2Fimage.png&type=sc960_832',
  'name' : 'oh길동',
  'birthday' : '9554422',
  'gender' : 'male',
  'job' : 'mola'
},
{
  'id' : '50',
  'image' : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjgg%2FMDAxNzEyODk1MjY0MDgw.-0ROPmxFOFBDDmDOYaEVaDxP9eJ14F4AYHKp9ayOoFUg.RJRSoXzpwc0n0PRT_PFU0DYxaTAv8HRUcHLE4yHA1Fog.PNG%2Fimage.png&type=sc960_832',
  'name' : '고길동',
  'birthday' : '9554422',
  'gender' : 'male',
  'job' : 'mola'
},
{
  'id' : '52',
  'image' : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjgg%2FMDAxNzEyODk1MjY0MDgw.-0ROPmxFOFBDDmDOYaEVaDxP9eJ14F4AYHKp9ayOoFUg.RJRSoXzpwc0n0PRT_PFU0DYxaTAv8HRUcHLE4yHA1Fog.PNG%2Fimage.png&type=sc960_832',
  'name' : 'go길동',
  'birthday' : '9554422',
  'gender' : 'male',
  'job' : 'mola'
}
]

function App() {
  return (
    <div>
      <Customer
      id ={customer.id}
      image ={customer.image}
      name ={customer.name}
      birthday = {customer.birthday}
      gender = {customer.gender}
      job ={customer.job}
      />
      <div>
        {
          customers.map( c =>{
          return(
            <Customer
            key = {c.id}
            id ={c.id}
            image ={c.image}
            name ={c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job ={c.job}
            />
          )
          }
         )

        }
      </div>
    </div>
     
  );
}

export default App;
