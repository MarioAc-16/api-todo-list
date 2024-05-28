var express = require('express');
var router = express.Router();

let goals = [];

router.get('/getGoals', function(req, res, next){
    res.json(goals);
    res.status(200).json(goals);
})
router.post('/addGoals', function(req, res, next){
    if (req.body && req.body.name && req.body.description && req.body.dueDate){
        let timestamp = Date.now()+Math.random();
        req.body.id = timestamp.toString();
        goals.push(req.body);
        res.json(goals);
        res.status(200).json(goals);
    } else {
        res.status(400).json({error:"No se estan enviado los datos correctos"})
    }
});

router.delete('/removeGoals/:id', function(req,  res, next){
    if (req.params && req.params.id) {
        let id = req.params.id;
        goals = goals.filter(goals => goals.id !== id);
        res.json(goals);
        res.status(200).json(goals);
    } else {
        res.status(400).json({error:"No se estan enviado los datos correctos"})
    }
});


module.exports = router;