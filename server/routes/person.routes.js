const personController = require('../controllers/person.controller')

module.exports = (app) =>{
    app.get("/api/person", personController.index);
    app.post("/api/person", personController.createNewPerson);
}