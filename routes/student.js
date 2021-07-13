const express = require('express')
const { ObjectID } = require('mongodb')
const { db } = require('../shared/mongo')

const router = express.Router()

router.get("/", async (req,res) => {
    const data = await db.collection('students').find().toArray()
    res.send(data)
})

router.get('/:id', async (req,res) => {
    const data = await db.collection('students').findOne({_id: ObjectID(req.params.id)})
    res.send(data)

})

router.post('/', async(req,res) => {
    const data = await db.collection('students').insertOne(req.body)
    res.send(data)
})

router.put('/:id', async(req,res) => {
    const data = await db.collection('students').findOneAndUpdate({_id : ObjectID(req.params.id)}, {$set : req.body})
    res.send(data)
})

router.delete('/:id', async (req,res) => {
    const data = await db.collection('students').remove({_id : ObjectID(req.params.id)})
    res.send(data)
})


module.exports = router


