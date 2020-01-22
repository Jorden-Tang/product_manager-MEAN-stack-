const Person = require("../models/person.model")

module.exports = {
    createNewPerson(req, res){
        Person.create(req.body)
            .then( (newPerson) => res.json({newPerson: newPerson}))
            .catch( (err) => res.json({message: "error creating Person", error: err}))
    },
    index(req, res){
        Person.find()
            .then((allPeople)=> res.json({allPeople: allPeople}))
            .catch((err) => res.json({message: "error getting all Person", error: err}))
    }
}