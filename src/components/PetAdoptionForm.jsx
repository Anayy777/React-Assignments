import React, { useState } from 'react'
import AdopterData from '../../solution/AdopterData';
import { validation } from '../utils/validation'

const PetAdoptionForm = () => {
  const [table , setTable] = useState(false)
  const [formData , setFormData] = useState([])
  const [values , setValues] = useState({
    petName : "" , 
    petType : "" , 
    breed : "dog" , 
    name : "" , 
    mail : "" ,  
    phoneNo : ""

  });  
  const [errors ,  setErrors] = useState({
    petName : "" , 
    petType : "" , 
    breed : "" , 
    name : "" , 
    mail : "" ,  
    phoneNo : ""

  }); 



  const {petName , petType , breed , name , mail , phoneNo} = values;
  
  
  const handleChange  = (event) => {
    const {name , value} = event.target;
    setValues((prevValues) => ({
      ...prevValues , 
      [name] : value ,
    }))
    let errorsCopy = {...errors};
    const error = validation(name , value , errorsCopy);
    setErrors(error);
  }

  const handleSubmit = () => {
    if(!values.petName|| !values.petType || !values.breed || !values.name || !values.phoneNo || !values.mail){
      alert("Please fill the needful details");
      return;
    }

    const hasErrors = Object.values(errors).some((errorMessage) =>
      errorMessage)
    if(hasErrors){
      alert("Please fix the errors")
      return;
    }

    setFormData((prevData) => [...prevData , values])

    setTable(true);

    setValues({
      petName : "" , 
      petType : "" , 
      breed : "dog" , 
      name : "" , 
      mail : "" ,  
      phoneNo : ""
    })

    setErrors({
      petName : "" , 
      petType : "" , 
      breed : "" , 
      name : "" , 
      mail : "" ,  
      phoneNo : ""
    })
  }

  const goBack =() => {
    setTable(false);
  }

  return table ? (<AdopterData formData = {formData} handleGoBack = {goBack}/>) : (
    <div className='form'></div>
  )
}

export default PetAdoptionForm