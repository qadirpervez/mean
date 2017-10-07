const express = require('express');
const router = express.Router();

//model
const Contact = require('../models/contacts');

//retrieve data
router.get('/contacts', function(req, res, next){
  Contact.find(function(err, contacts){
    res.json(contacts);
  })
});

//add contacts
router.post('/contact', function(req, res, next){
  //logic to add contact.
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });
  newContact.save(function(err, contact){
      if(err){
        res.json({msg: 'Failed to add Contact.'+ err});
      } else {
        res.json({msg: 'Contact added sucessfully.'});
      }
  });
});

//delete contact
router.delete('/contact/:id', function(req, res, next){
  //logic to delete contact.
  console.log(req.params.id);
  Contact.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

module.exports = router;
