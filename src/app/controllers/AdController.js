const Ad = require('../models/Ad')

class AdController {
  // mostrar todos os add
  async index (req, res) {
    const ads = await Ad.find()

    return res.json(ads)
  }

  // mostrar um unico add
  async show (req, res) {
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }

  // crair um novo add
  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })

    return res.json(ad)
  }

  // Editar add
  async update (req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ad)
  }

  // delete add
  async destroy (req, res) {
    await Ad.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new AdController()
