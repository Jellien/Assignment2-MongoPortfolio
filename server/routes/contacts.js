const { Router } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactsController = require('../controllers/contacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactsController.displayContactList);

/* GET Route for displaying the ADD page - CREATE Operation */
router.get('/add', requireAuth, contactsController.displayAddPage);

/* GET Route for processing the ADD page - CREATE Operation */
router.post('/add', requireAuth, contactsController.processAddPage);

/* GET Route for displaying Edit page - Update Operation */
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

/* GET Route for processing Edit page - Update Operation */
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

/* GET to perfrom Contact Deletion - Delete Operation */
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;