const express = require('express');
const router = express.Router();

// Item model
const item = require('../../models/item');

// @route  GET api/items
// @desc  Get all items
// @access   Public

router.get('/',(req,res)=>{
    item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route  POST api/items
// @desc  Create an item
// @access   Public

router.post('/',(req,res)=>{
    const newItem = new item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item));
});


// @route  DELETE api/items
// @desc  Delete an item
// @access   Public

router.delete('/:id',(req,res)=>{
    item.findById(req.params.id)
        .then(item => item.remove().then(()=>res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports = router;