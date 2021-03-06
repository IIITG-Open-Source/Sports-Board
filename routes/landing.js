// Landing Routes
const express = require('express')
const router = express.Router()

const {renderEventPage,renderCricketPage,renderFootballPage,
        renderVolleyballPage,renderAthleticsPage,renderChessPage,renderCarromPage,
        renderTableTennisPage,renderBadmintonPage, displayEvents,displayCoordinators} = require('../controllers/landing')




/*----------------------
  GET ROUTES
------------------------*/
router.get('/',displayEvents)
router.get('/events',renderEventPage)
router.get('/contact',displayCoordinators)
router.get('/outdoor/cricket',renderCricketPage)
router.get('/outdoor/football',renderFootballPage)
router.get('/outdoor/volleyball',renderVolleyballPage)
router.get('/outdoor/athletics',renderAthleticsPage)
router.get('/indoor/chess',renderChessPage)
router.get('/indoor/carrom',renderCarromPage)
router.get('/indoor/tableTennis',renderTableTennisPage)
router.get('/indoor/badminton',renderBadmintonPage)

module.exports = router