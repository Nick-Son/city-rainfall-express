const express = require('express');
const Record = require('../models/record');

const router = express.Router();

// View all entries

router.get('/records', (req, res) => {
  Record.find()
    .then((records) => {
      res.json(records)
    })
})

// View individual entry

// router.get('/records/:id', (req, res) => {
//   const id = req.params.id
//   Record.findById(id)
//     .then((record) => {
//       if (record) {
//         res.json(record)
//       }
//       else {
//         res.status(404).json({ error: 'there is no rainfall entry with that ID' })
//       }
//     })
// })

// Delete
router.delete('/records/:id', (req, res) => {
  const id = req.params.id
  if (Record.findById(id)) {
    Record.findByIdAndRemove(id)
      .then((record) => {
        if (record) {
          res.json(record)
        }
        else {
          res.status(400).json({ error: error })
        }
      })
  }
})

// Add
router.post('/records', (req,res) => {
  const attributes = req.body
  Record.create(attributes)
    .then((records) => {
      res.status(201).json(city)
    })
    .catch((error) => {
      res.status(400).json({ error: error})
    })
})

// Melbourne Average
router.get('/records/melbourne', (req, res) => {
  // const name = req.params.name
  Record.find({"name": "Australia/Melbourne"})
  // Record.find({"name": ":"})
    .then((records) => {
      if (records) {
        const recordCount = records.length;
        let rainFallTotal = 0;
        
        // Average calculation
        records.forEach((record) => {
          rainFallTotal += record.rainFall
        })
        const average = rainFallTotal / recordCount
        
        // Median calculation
        let rainfallValues = [];
        records.forEach((record) => {
          rainfallValues.push(record.rainFall)
        })
        console.log(rainfallValues)
        const maxValue = rainfallValues.reduce((function(a, b) {
          return Math.max(a, b)
        }))
        const median = rainfallValues[Math.round(recordCount / 2)]

        res.json({
          average: average,
          median: median,
          max: maxValue 
        })
      }
      else {
        res.status(404).json({ error: 'there is no rainfall entry with that ID' })
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

module.exports = router;