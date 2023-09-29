const express = require('express');
const cors = require('cors');
const knex = require('knex');
const { all } = require('axios');
require('dotenv').config();


const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
});


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// POST: Create Users and send to the database
app.post('/add-users', (req, res) => {

    const sentUserName = req.body.user
    const sentEmail = req.body.email
    const sentPassword = req.body.password
    //const hashedPassword = bcrypt.hashSync(sentPassword,  bcrypt.genSaltSync())
    const SQL = 'INSERT INTO register (username, email, password) values ($1, $2, $3)'
    const Values = [sentUserName, sentEmail, sentPassword]
    pool.query(SQL, Values, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            console.log("User Inserted Successfully!")
            return res.json({ message: 'New User Added', results })
        }
    })
})

//new Login 
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email or password exists in the database
        const query = 'SELECT * FROM register WHERE email = $1 and password = $2';
        const values = [email, password];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = result.rows[0];

        // Return a success response with the user data
        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})

app.post('/add-customers',(req,res) => {
    const sentName = req.body.customer_name
    const sentAge = req.body.customer_age
    const sentGender = req.body.customer_gender
    const sentEmailId = req.body.customer_emailid
    const sentMobile = req.body.customer_mobile
    const sentAddress= req.body.customer_address
    const sentPincode= req.body.customer_pincode
    const sentState= req.body.customer_state
    const sentCountry= req.body.customer_country
   

    //const hashedPassword = bcrypt.hashSync(sentPassword,  bcrypt.genSaltSync())
    const SQL = 'INSERT INTO customer (customer_name, customer_age, customer_gender, customer_emailid, customer_mobile, customer_address, customer_pincode, customer_state, customer_country) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    const Values = [sentName, sentAge, sentGender, sentEmailId, sentMobile, sentAddress, sentPincode, sentState, sentCountry]
    pool.query(SQL, Values, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            console.log("User Inserted Successfully!")
            res.json({ message: 'New User Added', results })
        }
    })

})


app.post('/add-products',(req,res) => {
    const sentCategory = req.body.product_category
    const sentQuantity = req.body.product_quantity
    const sentName = req.body.product_name 
    const sentPrice = req.body.product_price
    const sentQuantitySize = req.body.product_quantity_size
    const productdescription = req.body.product_description

    //const hashedPassword = bcrypt.hashSync(sentPassword,  bcrypt.genSaltSync())
    const SQL = 'INSERT INTO product (product_category, product_quantity, product_name, product_price, product_quantity_size, product_description) values ($1, $2, $3, $4, $5, $6)'
    const Values = [sentCategory,  sentQuantity , sentName, sentPrice, sentQuantitySize, productdescription]
    pool.query(SQL, Values, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            console.log("User Inserted Successfully!")
            res.json({ message: 'New User Added', results })
        }
    })

})




app.post('/Add-orders',(req,res) => {
    const sentName = req.body.customer_name
    const sentProduct = req.body.product_name
    const sentSize = req.body.product_size
    const sentPrice = req.body.product_price
    const sentLocation = req.body.product_delivery_location
    const sentOrder = req.body.order_date
    
    //const hashedPassword = bcrypt.hashSync(sentPassword,  bcrypt.genSaltSync())
    const SQL = 'INSERT INTO orders (customer_name, product_name , product_size, product_price, product_delivery_location, order_date  ) values ($1, $2, $3, $4, $5, $6)'
    const Values = [sentName,  sentProduct , sentSize, sentPrice, sentLocation, sentOrder]
    pool.query(SQL, Values, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            console.log("User Inserted Successfully!")
            res.json({ message: 'New User Added', results })
        }
    })

})





app.get('/getcustomers' , async(req,res) =>{
    try{
        const allcustomers = await pool.query("SELECT * FROM customer");
    res.json(allcustomers.rows);
    console.log("success");


}    catch(err) {
    console.error(err.message);
}
})


app.get('/getproducts' , async(req,res) =>{
    try{
        const allproducts = await pool.query("SELECT * FROM product");
    res.json(allproducts.rows);
    console.log("success");


}    catch(err) {
    console.error(err.message);
}
})


app.get('/getorders' , async(req,res) =>{
    try{
        const allorders = await pool.query("SELECT * FROM orders");
    res.json(allorders.rows);
    console.log("success");


}    catch(err) {
    console.error(err.message);
}
})



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));