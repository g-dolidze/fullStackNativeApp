const express=require('express')
const mongoose= require('mongoose')

const App=express()

mongoose.connect('mongodb+srv://giorgidolidze55:<password>@cluster0.mncwaev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
