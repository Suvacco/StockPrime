require('dotenv').config()

/* 

** Todo List **

- OK Finish Remove Item System
- OK Add "+" Button to Homepage
- OK Start Restock System with Table
- OK Shutdown Account System
- OK Alert Low Percentage System with Tooltips and Alert Icon
- OK Deploy
- OK Show Multa when Shutting Down
- OK Activity Log

In Development:

- Indicators

** Ideas **

- Supplyer Account Side

*/

const express = require("express")
const mongoose = require('mongoose').set('strictQuery', true)
const bodyParser = require("body-parser")
const ejs = require('ejs');
const session = require('express-session')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({secret: 'StockPrime', resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@db-cluster.cjjdosp.mongodb.net/stockprime')

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    max_quantity: Number,
    alert_percentage: Number
})

const orderSchema = new mongoose.Schema({
    supplier: String,
    item: itemSchema,
    quantity: Number
})

const logSchema = new mongoose.Schema({
    action: String,
    object: itemSchema,
    quantity: Number,
    quantity_after: Number
})

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    state: String,
    city: String,
    cnpj: String,
    password: String,
    inventory: [itemSchema],
    orders: [orderSchema],
    logs: [logSchema]
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'cnpj'})

const User = new mongoose.model("User", userSchema)

const Item = new mongoose.model("Item", itemSchema)

const Order = new mongoose.model("Order", orderSchema)

const Log = new mongoose.model("Log", logSchema)

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

/* Gets */

app.get('/', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render("register")
})

app.get('/item-register', (req, res) => {
    res.render('item-register')
})

app.get('/home', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('home', {username: req.user.name, inventory: req.user.inventory})
    }
})

app.get('/logs', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('logs', {username: req.user.name, logs: req.user.logs})
    }
})

app.get('/orders', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('orders', {username: req.user.name, orders: req.user.orders})
    }
})

app.get('/logout', (req, res) => {
    if (req.isAuthenticated()) {
        req.logout((err) => {})
        res.redirect('/')
    }
})

app.get('/error/login', (req, res) => {
    res.render('error', {message: 'CNPJ ou senha incorreto.', actualPage: ''})
})

app.get('/shutdown', (req, res) => {
    res.render('shutdown', {user: req.user})
})

/* Posts */

app.post('/', (req, res) => {
    const user = new User({
        cnpj: req.body.cnpj,
        password: req.body.password
    })

    passport.authenticate('local', { failureRedirect: '/error/login' })(req, res, () => {
        req.login(user, (err) => {})
        res.redirect('/home')
    })
})

app.post('/item-register', (req, res) => {
    const item = new Item({
        name: req.body.nome,
        description: req.body.desc,
        quantity: 0,
        max_quantity: req.body.maxnumber,
        alert_percentage: req.body.percentagenumber
    })

    req.user.inventory.push(item)

    const log = new Log({
        action: 'Cadastro',
        object: item,
        quantity: 0,
        quantity_after: 0
    })

    req.user.logs.push(log)
    req.user.save()
    
    res.render('success', {message: 'Item cadastrado com sucesso!', actualPage: 'home'})
})

app.post('/register', (req, res) => {
    if (req.body.password === req.body.passwordRepeat) {
        User.register({
            name: req.body.nome,
            description: req.body.desc,
            state: req.body.estado,
            city: req.body.cidade,
            cnpj: req.body.cnpj}, req.body.password, (err, newUser) => {
            if (err) {
                console.log(err);
                res.render('error', {message: 'Não foi possivel criar a conta', actualPage: 'register'})
            } else {
                res.render('success', {message: 'Conta criada com sucesso!', actualPage: ''})
            }
        })
    } else {
        res.render('error', {message: 'As senhas não coincidem', actualPage: 'register'})
    }
})

app.post('/shutdown', (req, res) => {
    User.findOneAndDelete({_id: req.user._id}, (err) => {})

    req.logout((err) => {})

    res.render('success', {message: 'Conta encerrada com sucesso!', actualPage: ''})
})

app.post('/error', (req, res) => {
    const pageName = req.body.page

    res.redirect("/" + pageName)
})

app.post('/success', (req, res) => {
    const pageName = req.body.page

    res.redirect("/" + pageName)
})

app.post('/item-add', (req, res) => {
    const item = JSON.parse(req.body.itemObj)
    if (item.quantity == item.max_quantity) {
        res.render('error', {message: 'Não é possivel adicionar, o estoque está cheio', actualPage: 'home'})
    } else {
        res.render('item-add', {itemObj: req.body.itemObj, itemName: req.body.itemName, itemId: req.body.itemId})
    }
})

app.post('/item-add/submit', (req, res) => {
    const targetItem = JSON.parse(req.body.targetItem)

    const addQuantity = req.body.addQuantity

    if ((addQuantity * 1) + targetItem.quantity > targetItem.max_quantity) {
        res.render('error', {message: 'Não é possivel adicionar além da capacidade do estoque', actualPage: 'home'})
    } else {
        User.findOneAndUpdate({inventory: {$elemMatch: {_id: targetItem._id}}}, {$inc: {'inventory.$.quantity': addQuantity}}, {new: true}, (err, result) => {})
        res.render('success', {message: 'Quantidade adicionada!', actualPage: 'home'})
    
        const log = new Log({
            action: 'Adição',
            object: targetItem,
            quantity: addQuantity,
            quantity_after: targetItem.quantity + addQuantity
        })
    
        req.user.logs.push(log)
        req.user.save()
    }
})

app.post('/item-restock', (req, res) => {
    const item = JSON.parse(req.body.itemObj)
    if (item.quantity == item.max_quantity) {
        res.render('error', {message: 'Não é possivel reestocar, o estoque está cheio', actualPage: 'home'})
    } else {
        res.render('item-restock', {itemObj: req.body.itemObj, itemName: req.body.itemName, itemId: req.body.itemId})
    }
})

app.post('/item-restock/submit', (req, res) => {
    const targetItem = JSON.parse(req.body.targetItem)
    const addQuantity = req.body.addQuantity

    if ((addQuantity * 1) + targetItem.quantity > targetItem.max_quantity) {
        res.render('error', {message: 'Não é possivel reestocar além da capacidade do estoque', actualPage: 'home'})
    } else {
        const order = new Order({
            supplier: req.body.fornecedor,
            item: targetItem,
            quantity: addQuantity
        })

        req.user.orders.push(order)

        const log = new Log({
            action: 'Reestoque',
            object: targetItem,
            quantity: addQuantity,
            quantity_after: targetItem.quantity + addQuantity
        })
    
        req.user.logs.push(log)
        req.user.save()

        res.render('success', {message: 'Pedido de reestoque enviado!', actualPage: 'orders'})
    }
})

app.post('/item-remove', (req, res) => {
    const item = JSON.parse(req.body.itemObj)
    if (item.quantity == 0) {
        res.render('error', {message: 'Não há estoque disponivel', actualPage: 'home'})
    } else {
        res.render('item-remove', {itemObj: req.body.itemObj, itemName: req.body.itemName, itemId: req.body.itemId})
    }
})

app.post('/item-remove/submit', (req, res) => {
    const targetItem = JSON.parse(req.body.targetItem)
    
    const removeQuantity = req.body.removeQuantity

    if (targetItem.quantity - removeQuantity < 0) {
        res.render('error', {message: 'Não é possivel retirar mais do que há em estoque', actualPage: 'home'})
    } else {
        User.findOneAndUpdate({inventory: {$elemMatch: {_id: targetItem._id}}}, {$inc: {'inventory.$.quantity': -removeQuantity}}, {new: true}, (err, result) => {})
        res.render('success', {message: 'Quantidade removida!', actualPage: 'home'})
    
        const log = new Log({
            action: 'Remoção',
            object: targetItem,
            quantity: removeQuantity,
            quantity_after: targetItem.quantity - removeQuantity
        })
    
        req.user.logs.push(log)
        req.user.save()
    } 
})

//

app.listen(process.env.PORT)