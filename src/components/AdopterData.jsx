import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
    const {formData , handleGoBack} = this.props;
    return (
      
      <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet type</th>
              <th>Breed</th>
              <th>Your Name</th>
              <th>Email</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data , index) => (
              <tr key={index}>
                <td>{data.PetName}</td>
                <td>{data.PetType}</td>
                <td>{data.breed}</td>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{marginTop : "20px" , textAlign : "center"}}>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default AdopterData