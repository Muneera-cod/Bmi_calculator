import React from 'react'
import { useState } from 'react'
import BmiFormula from './BmiFormula';
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
const[data,setData]=useState({
  height:'',
  weight:'',
  age:'',
})
const [bmi,setBmi]=useState(null)
const [message,setMessage]=useState('')

const handleChange = (e) => {
  const { name, value } = e.target
  setData((prevData) => ({
    ...prevData, 
    [name]: value, 
  }))
}
const calcBmi=()=>{
  const weight=parseFloat(data.weight)
  const height=parseFloat(data.height)
  const age=parseInt(data.age)
  if(weight<=0 || height<=0 || age<=0 || age>100){
      toast.error("Weight,Height,Age must be valid")
     }

  else{
        if(isNaN(weight) || isNaN(height) || isNaN(age))
          {
            toast.error("Please enter your Weight,Height,Age")
          }
        else
          {
              toast.success("Your Bmi Calculated successfully")
              const yourbmi=weight/(height*height)
              setBmi(yourbmi.toFixed(2))

                  if(yourbmi<=18 ){
                    setMessage("Underweight")
                  
                  }
                  else if( yourbmi<25){
                    setMessage("Normal")
                  }
                  
                  else if(yourbmi<30){
                    setMessage("OverWeight")
                  }
                  else if(yourbmi<35){
                    setMessage("Mild Obesity")
                  }
                  else if(yourbmi<40){
                    setMessage("Moderate Obesity")
                  }
                  else{
                    setMessage("Severe Obesity")
                  }
                  
          }
  }
}
const reload=()=>{
  setMessage('')
  setBmi(null)
}

  console.log(data)
  return (
    <div className='w-full min-h-screen p-16 flex items-center justify-center imgbg'>
      <ToastContainer/>
      <div className='sm:w-full md:w-7/12 lg:w-6/12  xl:w-5/12 min-h-3/4 bg-black opacity-80  rounded-md flex flex-col p-10'>
           <div>
            <label className='text-white font-bold'>
              Age
              <input name="age"  value={data.age} className='block my-3 w-full p-3 bg-white bg-opacity-20 rounded font-semibold' type='text' onChange={handleChange}></input>

              {/* <input value={data.age} className='block my-3 w-full p-3 bg-white bg-opacity-20 rounded font-semibold' type='text' onChange={(e)=>{setData(...data,e.target.value)}}></input> */}
            </label>
            <label  className='text-white  font-bold'>
              Weight(kg)
              <input  name="weight" value={data.weight} className='block my-3 w-full  p-3 bg-white bg-opacity-20 rounded  font-semibold' type='text' onChange={handleChange}></input>
            </label>
            <label  className='text-white  font-bold'>
              Height(m)
              <input  name="height" value={data.height} className='block my-3 w-full  p-3 bg-white bg-opacity-20 rounded  font-semibold' type='text' onChange={handleChange}></input>
            </label>
            <div className='flex justify-between items-center text-white  font-bold py-6 '>
              <button type='submit' className='bg-green-500 bg-opacity-30 p-4 min-w-1/4 rounded hover:bg-opacity-90  flex items-center justify-center '  onClick={calcBmi}>Calculate</button>
              <button type='submit' className='bg-red-500 bg-opacity-30 p-4 min-w-1/4 rounded hover:bg-opacity-90  flex items-center justify-center' onClick={reload}>Reload</button>
            </div>
           </div>
           {/* {console.log(age,weight,height)} */}
           <div className='py-10 flex gap-3'>
            <h1 className='text-white font-bold text-lg'>Your BMI:</h1><h1  className='text-white font-bold text-lg'> {bmi}</h1>
           </div>
          <center> <h1  className='text-white font-bold text-lg'>{message?message:<BmiFormula/>}</h1></center>
      </div>
    </div>
  )
}

export default App