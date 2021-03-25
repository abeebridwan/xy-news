const express = require('express');
const axios = require('axios');
const newsr= express.Router();

newsr.get('/',async(req,res)=>{
    try {        
        var url = process.env.NewsApi_URL_1;

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.post('/search',async(req,res)=>{
    const search = req.body.search
    // console.log(req.body.search)

    try {
        var url = process.env.NewsApi_URL_2;

        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=newsr