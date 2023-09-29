import React, { useState } from 'react'
import Axios from 'axios';

const Products = () => {
  const [productCategory, setCategory] = useState('');
  const [productQuantity, setQuantity] = useState('');
  const [productName, setName] = useState('');
  const [productPrice, setPrice] = useState('');
  const [productQuantitySize,setQuantitySize] = useState('');
  const [productdescription,setProductdescription] = useState('');
  const [alertMessage,setAlertMessage] = useState('');
  const createUser = () => {
      Axios.post('http://localhost:5000/add-products', {
         
         product_category : productCategory,
         product_quantity : productQuantity,
         product_name: productName,
         product_price : productPrice,
         product_quantity_size :productQuantitySize,
         product_description :productdescription
        
         


      }).then(() => {
          console.log('User has been created')
          setAlertMessage('User added successfully!');
          alert(alertMessage)
          
      }).catch(error => {
          const errorMessage = JSON.parse(error.request.response)
          console.log(errorMessage.message)
      })
  }



	return(
    <>
    <h1>Add Product </h1>
   <div className="container">
	 <form>
   <h2>Products Details</h2>
   <div className="form-row">  
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Category *</label>
      <select required className="form-control" 
      onChange={(event) => {setCategory(event.target.value)}}>
                          <option>--Select Category--</option>
													<option>Food&Beverages</option>
													<option>Personal Care Products</option>
													<option>House Hold Products</option>
													<option>Health Products</option>
													<option>Groceries</option>
                          </select>
      {/* <input type="" className="form-control" id="inputEmail4" placeholder=""/> */}
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Quantity Type *</label>
      <select  required className="form-control" 
      onChange={(event) => {setQuantity(event.target.value)}}>
													<option>--Select Type--</option>
                          <option>Kilograms</option>
                          <option>Liters</option>
													<option>Per Piece</option>
													<option>Dozens</option>
													<option>Packets</option>
													<option>Bags</option>
                          </select>
    </div>
  </div>
   <div className='form-row'>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Name *</label>
      <input required type="" className="form-control" id="inputEmail4" placeholder="Enter Product name"
         onChange={(event) => {setName(event.target.value)}}
      />
    </div>
	 <div className="form-group col-md-6">
      <label for="inputEmail4">Product Price *</label>
      <input required type="text" className="form-control" id="inputEmail4" placeholder="Enter Product Price"
        onChange={(event) => {setPrice(event.target.value)}}
      />
    </div>
	 </div>
	 <div className='form-row'>
   <div className="form-group col-md-6">
      <label for="inputEmail4">Product Quantity/Size *</label>
      
      <input required type="number" className="form-control" id="inputEmail4" placeholder="Enter Product Quantity/Size"
        onChange={(event) => {setQuantitySize(event.target.value)}}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Description</label>
      <input type="" className="form-control" id="inputEmail4" placeholder="Enter Product Description"
        onChange={(event) => {setProductdescription(event.target.value)}}
      />
    </div>
	 </div>
	<div>

  </div>
  <div className='float-right '>
  <button className="btn btn-danger mr-20 mt-10" >Reset</button>
  <button className="btn btn-success mr-20 mt-10" onClick={createUser}>Submit</button>
  </div>
	</form>

	</div>
  </>
  )  
}

export default Products
