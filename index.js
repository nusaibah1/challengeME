import express from 'express'
import path from 'path'
import {connection as db} from './config/index.js' 

// Create express app
const app = express()  
const port =  parseInt(process.env.PORT) || 4000
const router = express.Router()

app.use(router,
express.static('./static'),
express.json(),
express.urlencoded ({
extended: true
})) 

// Endpoint

// GET: / which will send an index.html
router.get('^/$|/challenge', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/users', (req, res) => {
    try {
    const strQry = `
    SELECT userID, userName, userSurname, userAge, 
userEmail, userPwd
    FROM Users;`
    db.query(strQry, (err, results) => {
        if(err)  throw new Error(`Unable to fetch all users`) 
            res.json({
        status: res.statusCode, results
            })
    }) 
    } catch(e) {
        res.json({
            status: 404,
            msg: e.message //e.message is the error message in in the if statements
        })
    }
    })
    

// ● GET: /users to display all users
// router.get('/users', (req, res) => {
// try {
// const strQry = `
// SELECT userID, userName, userSurname, userAge, 
// userEmail
// FROM Users;`
// db.query(strQry, (err, results) => {
//     if(err)  throw new Error(`Unable to fetch all users`) 
//         res.json({
//     status: res.statusCode, results
//         })
// }) 
// } catch(e) {
//     res.json({
//         status: 404,
//         msg: 'Unable to fetch all users'
//     })
// }
// })


// ● GET: /user/:id to display a user based on the primary key
// router.get('/user/:id', (req, res) => {  
// try {
//     const strQry = `
//   SELECT userID, userName, userSurname, userAge, 
//   userEmail
//     WHERE userID = ${req.params.id};`
//     db.query(strQry, (err, result) => {
//         if(err) throw new Error ('Unable to retreive user.')
//             res.json({
//                 status: res.statusCode, 
//                 result: result[0]
//         })
//     })
    
// } catch(e) {
//     res.json({
//         status: 404,
//         msg: 'Unable to retreive user'
//     })
// }
// })

// POST: /register to add a user to the database
// router.post('/register', (req, res) => 
//     pool.query(


//     ))

    // ● PATCH: /user/:id to update a user
// router.patch('/user/:id', (req, res) => {

// })
    
//● DELETE: /user/:id to delete a specific user
// router.delete('/user/:id', (req, res) => {

// })
// ● GET: /products to display all products
// router.get('/products', (req, res) => {
//     try {
//     const productQry = `
//     SELECT firstname, lastName, age, emailAdd
//     FROM Producrs;`
//     db.query(productQry, (err, results) => {
//         if(err)  throw new Error(`Unable to fetch products. o(TヘTo)`) 
//             res.json({
//         status: res.statusCode, results
//             })
//     }) 
//     } catch(e) {
//         res.json({
//             status: 404,
//             msg: 'Unable to fetch requested data.Please try again later.o(TヘTo)'
//         })
//     }
//     })

// ● GET: /product/:id to display a product based on the primary key
// router.get('/product/:id', (req, res) => {  
//     try {
//         const productQry = `
//         SELECT  prodID,
// prodName,
// prodQuantity,
// prodPrice,
// prodURL,
// userID
//         FROM Users
//         WHERE userID = ${req.params.id};`
//         db.query(strQry, (err, result) => {
//             if(err) throw new Error ('Unable to retreive requested product. o(TヘTo)')
//                 res.json({
//                     status: res.statusCode, 
//                     result: result[0]
//             })
//         })
        
//     } catch(e) {
//         res.json({
//             status: 404,
//             msg: ' Something went wrong. Please try again later o(TヘTo).'
//         })
//     }
//     })

// ● POST: /addProduct to add a product to the database
/*prodID int AI PK 
prodName varchar(100) 
prodQuantity int 
prodPrice int 
userID int 
prodURL text
*/
// router.post('/addProduct', (req, res) => {
//     try {
// const productQry = `
// INSERT INTO Products 
// VALUES(DEFAULT, 'Dell-Latitude', 3, 15000, DEFAULT, 'https://takealot.com/computers/laptops-27404?filter=Brand:Dell%20Latitude&gad_source=1&gclid=Cj0KCQjwtsy1BhD7ARIsAHOi4xY1zat7jP3FkZMph_OZfrEXioTRfiY8foWbjprI6aMsWdmEdbnj-48aAm5xEALw_wcB&gclsrc=aw.ds'),
// (DEFAULT, 'Acer Nitro-5', 5, 20000, DEFAULT, )
// `
//     } catch(e) {
//         res.json({
//             status: 404,
//             msg: ' Something went wrong. Please try again later o(TヘTo).'
//         })
//         }

// })


// ● PATCH: /product/:id to update a product
// router.patch('/product/:id', (req, res) => {
// try {

// } catch(e) {
//     res.json({
//         status: 404,
//         msg: 'Something went wrong. Please try again later o(TヘTo).'
//     })
// }
// })


// ● DELETE: /product/:id to delete a specific product
// router.delete('/product/:id', (req, res) => {
// try {

// }catch(e) {
//     res.json({
//         status: 404,
//         msg: 'Something went wrong. Please try again later o(TヘTo).'
//     })
// }
// })
// app.listen(port, () => { 
//     console.log(`Server is running on ${port}`)
// })







// - Test your API using postman or Rest or Thunder client