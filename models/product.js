const mongoose = require('mongoose');
const config = require('../config/database');

const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    brand: {
        type: String
    },
    section: {
        type: String,
        required: true
    },
    img_path: {
        type: String,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.addProduct = function(newProduct, callback){
    newProduct.save(callback);
}

module.exports.getProductById = function(id, callback){
    Product.findById(id, callback);
}

module.exports.updateProduct = function(id, product, callback){
    const query = {$set: {
        product_name: product.product_name, 
        price: product.price, 
        colors: product.colors,
        brand: product.brand,
        section: product.section,
        img_path: product.img_path
    }};
    Product.findByIdAndUpdate(id, query, callback);
}

module.exports.removeProduct = function(id, callback){
    Product.findByIdAndRemove(id, callback);
}