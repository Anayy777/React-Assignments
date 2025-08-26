import React, { useState } from 'react'
import AdopterData from './AdopterData'; 
import { validation } from '../utils/validation'

const PetAdoptionForm = () => {
  const [table , setTable] = useState(false)
  const [formData , setFormData] = useState([])
  const [values , setValues] = useState({
    petName : "" , 
    petType : "" , 
    breed : "" , 
    adopterName : "" , 
    email : "" ,  
    phoneNo : ""

  });  

  const [otherPetType , setOtherPetType] = useState("");
  const [errors ,  setErrors] = useState({
    petName : "" , 
    petType : "" , 
    breed : "" , 
    adopterName : "" , 
    email : "" ,  
    phoneNo : ""

  }); 


  
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
    if(values.petType === 'Other' && !otherPetType){
      alert("Pleaase specify the kind of pet");
      return;
    }

    if(!values.petName|| !values.petType || !values.breed || !values.adopterName || !values.phoneNo || !values.email){
      alert("Please fill the needful details");
      return;
    }

    const submission = {
      ...values , petType : values.petType === "Other" ? otherPetType : values.petType
    }

    const hasErrors = Object.values(errors).some((errorMessage) =>
      errorMessage)
    if(hasErrors){
      alert("Please fix the errors")
      return;
    }
    setFormData((prevData) => [...prevData, submission]);
    setTable(true);

    setValues({
      petName : "" , 
      petType : "Dog" , 
      breed : "" , 
      adopterName : "" , 
      email : "" ,  
      phoneNo : ""
    })

    setErrors({
      petName : "" , 
      petType : "" , 
      breed : "" , 
      adopterName : "" , 
      email : "" ,  
      phoneNo : ""
    })

    setOtherPetType("");
  }

  const goBack =() => {
    setTable(false);
  }

  return table ? (<AdopterData formData = {formData} handleGoBack = {goBack}/>) : (
    <div className='form'>
      <div>
        <label htmlFor='petName'>Pet Name</label>
        <input
          type='text'
          name='petName'
          placeholder='Pet Name'
          value={values.petName}
          onChange={handleChange}
        />
        <small>{errors.petName}</small>
      </div>
      <div>
        <label htmlFor='petType'>Pet Type</label>
        <select name='petType' value={values.petType} onChange={handleChange}>
          <option value={"Dog"}>Dog</option>
          <option value={"Cat"}>Cat</option>
          <option value={"Cow"}>Cow</option>
          <option value = {"Other"}>Other</option>

        </select>
        <small>{errors.petType}</small>
      </div>
      {values.petType === "Other" ? (
        <div>
          <label htmlFor='otherPetType'>Please Specify</label>
          <input type='text' placeholder='Enter pet name' name='otherPetType' 
          value={otherPetType}
          onChange={(e) => setOtherPetType(e.target.value)}
          >
          

          </input>

        </div>
      ) : null
      }
      <div>
        <label htmlFor="breed">Breed</label>
        <input
            type="text"
            name="breed"
            placeholder="Enter breed"
            value={values.breed}
            onChange={handleChange}
        />
        <small>{errors.breed}</small>
    </div>
    <div>
        <label htmlFor='adopterName'>Your Name</label>
        <input 
            type="text"
            name="adopterName"
            placeholder='Enter your name'
            value={values.adopterName}
            onChange={handleChange} 
        />
        <small>{errors.adopterName}</small>
    </div>
    <div>
        <label htmlFor='email'>Email</label>
        <input 
            type="email" 
            name="email" 
            placeholder='Enter your email' 
            value={values.email} 
            onChange={handleChange} 
        />
        <small>{errors.email}</small>
    </div>
    <div>
        <label htmlFor='phone'>Phone</label>
        <input 
            type="text"
            name="phoneNo"
            placeholder='Enter your phone number'
            value={values.phoneNo}
            onChange={handleChange} 
        />
        <small>{errors.phoneNo}</small>
    </div>
    <div>
        <button type="button" onClick={handleSubmit}>
            Submit
        </button>
    </div>

    </div>
  )
}

export default PetAdoptionForm