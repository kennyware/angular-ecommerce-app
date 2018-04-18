const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Product = require('../models/product');

// GET http://localhost:8080/products
router.get('/', (req, res) => {
        Product.find((err, products) => {
            if(err) throw err;
            return res.json(products);
        });
});

// GET http://localhost:8080/products/:id
router.get('/:_id', (req, res) => {
    Product.getProductById(req.params._id, (err, product) => {
        if(err){
            return res.json({success: false, error: err});
        } else{
            return res.json(product);
        }
    });
});

// POST http://localhost:8080/products
router.post('/', (req, res) => {
    let newProduct = new Product({
        product_name: req.body.product_name,
        price: req.body.price,
        colors: [req.body.colors],
        brand: req.body.brand,
        section: req.body.section,
        img_path: req.body.img_path
    });

    passport.authenticate('jwt', (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({msg: 'Unauthorized Access.'});
        }

        if(user.username != 'masteraccount'){
            return res.json({msg: 'Unauthorized Access.'});
        }

        Product.addProduct(newProduct, (err, product) => {
            if(err){
                return res.json({success: false, msg: 'Failed to add product.', error: err});
            } else{
                return res.json({success: true, msg: 'Product added.'});
            }
        });
    })(req, res);
});

// PUT http://localhost:8080/products/:_id
router.put('/:_id', (req, res) => {
    let updatedProduct = new Product({
        product_name: req.body.product_name,
        price: req.body.price,
        colors: [req.body.colors],
        brand: req.body.brand,
        section: req.body.section,
        img_path: req.body.img_path
    });

    passport.authenticate('jwt', (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({msg: 'Unauthorized'});
        }

        if(user.username != 'masteraccount'){
            return res.json({msg: 'Unauthorized'});
        }

        Product.updateProduct(req.params._id, updatedProduct, (err) => {
            if(err){
                return res.json({success: false, error: err});
            } else{
                return res.json({success: true, msg: 'Product updated.'})
            }
        });
    })(req, res);   
});

// DELETE http://localhost:8080/products/:_id
router.delete('/:_id', (req, res) => {
    passport.authenticate('jwt', (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({msg: 'Unauthorized'});
        }

        if(user.username != 'masteraccount'){
            return res.json({msg: 'Unauthorized'});
        }

        Product.removeProduct(req.params._id, (err, product) => {
            if(err){
                return res.json({success: false, error: err});
            } else{
                return res.json({success: true, msg: 'Product removed'});
            }
        });
    })(req, res);
});

module.exports = router;