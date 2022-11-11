const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json())
 
app.listen(3000, (err) => {
    if(err){
        console.log('error while running server')
    }
    else {
        console.log('Server is running on port 3000')
    }
})
 
var tab = [
    {
        name:'p1',
        price:10
    },
    {
        name:'p2',
        price:22
    },
    {
        name:'p4',
        price:50
 
    }
 
]
app.get('/products/:name', (req,res)=> {
    let productName = req.params.name
    let productToFetch = tab.filter(e => e.name === productName)
    res.send(productToFetch)
})
 
 
 
app.post('/add_product', (req,res)=> {
    let newProduct = req.body
    tab.push(newProduct)
    res.send(tab)
})
 
 
app.put('/modigy_product',(req,res) => {
    let modifiedProduct = req.body
    tab = tab.map
})
 
 
app.delete('/delete_product/:name', (req, res) => {
    let productToRemove = req.body.name
    tab = tab.filter(e =>e.name !== productToRemove)
 
    res.send(tab);
});
 
 
app.put('/products', (req,res) => {
 
 
    tab[1].price = 22 ;
       res.send(tab);
 
});
 
 
 
app.get('/products/:name',(req,res)=> {
    let productName =  req.params.name 
    let productToFetch = tab.filter(e => e.name === productName)
    res.send(productToFetch)
})