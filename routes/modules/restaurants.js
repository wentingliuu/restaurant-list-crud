const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurantSchema')

// new.hbs (create)
router.get('/new', (req, res) => { return res.render('new') })
router.post('/', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// detail.hbs (read)
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})
// edit.hbs (update)
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByIdAndUpdate(id, { $set: req.body })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})
// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByIdAndRemove(id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
