import express from "express";
import { userSignUp } from "../controllers/user/userSignup.js";
import { userLogin } from "../controllers/user/userLogin.js";
import { verifyEmail } from "../controllers/verifyEmail.js";
import { googleSignUp } from "../controllers/user/googleSignUp.js";
import { googleLogin } from "../controllers/user/googleLogin.js";
import { createCustomer } from "../controllers/customer/createCustomer.js";
import { updateCustomer } from "../controllers/customer/updateCustomer.js";
import { deleteCustomer } from "../controllers/customer/deleteCustomer.js";
import { getAllCustomers } from "../controllers/customer/getAllCustomer.js";
import { getCustomerById } from "../controllers/customer/getCustomerById.js";
import { createProduct } from "../controllers/Products/createProducts.js";
import { updateProduct } from "../controllers/Products/updateProduct.js";
import { deleteProduct } from "../controllers/Products/deleteProduct.js";
import { getAllProducts } from "../controllers/Products/getAllProducts.js";
import { getProductById } from "../controllers/Products/getProductById.js";
import createInvoiceController from "../controllers/invoice/createInvoice.js";
import getAllInvoices from "../controllers/invoice/getAllInvoice.js";
import getInvoiceById from "../controllers/invoice/getInvoiceById.js";
import deleteInvoice from "../controllers/invoice/deleteInvoice.js";

const userRoute =  express.Router()

//user operations
userRoute.post('/register',userSignUp)
userRoute.post('/login',userLogin)
userRoute.patch('/verify/:token',verifyEmail)
userRoute.post('/googleSignUp',googleSignUp)
userRoute.post('/googleLogin',googleLogin)

//customer operations
userRoute.post('/createCustomer',createCustomer)
userRoute.put('/editCustomer/:customerId',updateCustomer)
userRoute.delete('/deleteCustomer/:customerId',deleteCustomer)
userRoute.get('/getAllCustomers',getAllCustomers)
userRoute.get('/getCustomerById/:customerId',getCustomerById)

//product operations
userRoute.post('/createProduct',createProduct)
userRoute.put('/editProduct/:productId',updateProduct)
userRoute.delete('/deleteProduct/:productId',deleteProduct)
userRoute.get('/getAllProduct',getAllProducts)
userRoute.get('/getProductById/:productId',getProductById)

// Invoice operations
userRoute.post('/createInvoice',createInvoiceController)
userRoute.get('/getAllInvoices',getAllInvoices)
userRoute.get('/getInvoiceById/:id',getInvoiceById)
userRoute.delete('/deleteInvoice/:id',deleteInvoice)

export default userRoute