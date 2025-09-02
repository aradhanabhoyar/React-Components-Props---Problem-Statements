import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Product from './Product'
import Greeting from './Greeting'
import Blog from './Blog'
import Student from './Student'
import Employee from './Employee'
import Movie from './Movie'
import Shopping from './Shopping'
import Course from './Course'
import Weather from './Weather'


function App() {
  const upc = {name : "Rohit Mehta", email : "rohit.mehta@example.com", role : "Admin"}
  const pi = {productName :"Bluetooth HeadPhones", price : 2499, inStock: "true"}
  const nm = {name : "Sneha"}
  const blog = {title :"Getting Started with React",author:"Kunal Verma",content : "React is a javascript library for building user."}
  const stud = {name : "Aditi Sharma", rollNo :"STU102",marks :35}
  const emp = {name : "Rajesh Kumr",department:"Finance",salary:55000}
  const movie = {title : "3 Idiots",director :{name:"RajKumar Hirani",age:60}}
  const shop = {item:"Laptop",quantity:2,price:45000}
  const course = {courseName:"Full Stack Development",modules:["HTML","CSS","JAvaScript","React","Node.js"]}
  const weather = {city :"Delhi",temperature:28,condition:"Sunny"}

  return (
    <>
    <User {...upc}/> <hr/>
    <Product {...pi}/> <hr/>
    <Greeting { ...nm}/> <hr/>
    <Blog {...blog}/> <hr/>
    <Student {...stud}/> <hr/>
    <Employee {...emp}/> <hr/>
    <Movie {...movie}/> <hr/>
    <Shopping {...shop}/> <hr/>
    <Course {...course}/> <hr/>
    <Weather {...weather}/>
  
    </>
  )
}

export default App
