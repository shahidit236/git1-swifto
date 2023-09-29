import React, { useState } from 'react'
import Axios from 'axios'
import './customer.css'

const Customers = () => {
    const [CustomerName, setName] = useState('')
    const [CustomerAge, setAge] = useState('')
    const [CustomerGender, setGender] = useState('')
    const [CustomerEmailId, setEmailId] = useState('')
    const [CustomerMobile, setMobile] = useState('')
    const [CustomerAddress, setAddress] = useState('')
    const [CustomerPincode, setPincode] = useState('')
    const [CustomerState, setState] = useState('')
    const [CustomerCountry, setCountry] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const createUser = () => {
        Axios.post('http://localhost:5000/add-customers', {
            customer_name: CustomerName,
            customer_age: CustomerAge,
            customer_gender: CustomerGender,
            customer_emailid: CustomerEmailId,
            customer_mobile: CustomerMobile,
            customer_address: CustomerAddress,
            customer_pincode: CustomerPincode,
            customer_state: CustomerState,
            customer_country: CustomerCountry
        })
            .then(() => {
                console.log('User has been created')
                setAlertMessage('User added successfully!')
                alert(alertMessage)
            })
            .catch((error) => {
                const errorMessage = JSON.parse(error.request.response)
                console.log(errorMessage.message)
            })
    }

    return (
        <>
            <h1>Add Customer </h1>
            <div className="container">
                <form>
                    <h2>Customer Details</h2>
                    <div className="form-row ">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Customer Name *</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter Customer Namae"
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">Customer Age</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter Customer Age"
                            onChange={(event) => {
                                setAge(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group col-md-3">
                        <label for="inputEmail4">Customer Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter Customer Gender"
                            onChange={(event) => {
                                setGender(event.target.value)
                            }}
                        />
                    </div>
                    </div>
                    <div className="form-row ">
                    <div className="form-group col-md-3">
                        <label for="inputEmail4">Customer Email id *</label>
                        <input
                            required
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter Customer Email id"
                            onChange={(event) => {
                                setEmailId(event.target.value)
                            }}
                        />
                    </div>

                        <div className="form-group col-md-3">
                            <label for="inputEmail4">Customer Mobile *</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter Customer Mobile Number"
                                onChange={(event) => {
                                    setMobile(event.target.value)
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Customer Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter Customer Adddress"
                                onChange={(event) => {
                                    setAddress(event.target.value)
                                }}
                            />
                        </div>
                        </div>
                    <div className="form-row ">
                    <div className="form-group col-md-2">
                        <label for="inputEmail4"> customer Pincode</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter  Pincode"
                            onChange={(event) => {
                                setPincode(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group col-md-2">
                        <label for="inputEmail4"> customer State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter  State"
                            onChange={(event) => {
                                setState(event.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputEmail4"> customer Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Enter  Country"
                            onChange={(event) => {
                                setCountry(event.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group col-md-2 image">
      <label className="mx-3"> Customer Image  </label>
      <input className="d-none" type="file" />
      {/* <button className='btn btn-primary'>Upload</button> */}
    </div>
                    </div>

                    <div className="container float-right butt ">
                        <button className="btn btn-danger mr-20 mt-10">Reset</button>
                        <button className="btn btn-success mr-20 mt-10" onClick={createUser}>
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Customers
