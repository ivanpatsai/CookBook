const express = require('express'),
  bodyParser = require('body-parser'),
  router = express.Router();

const Recipe = require('./../models/recipe');

router.use(bodyParser.json()); // for parsing application/json

router.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

router.get('/recipes', function (req, res) {
  const recipesArr = [];
  Recipe.find({}).then((recipes) => {
    recipes.forEach((recipe) => {
      recipesArr.push({
        id: recipe._id,
        recipe: recipe.versions[recipe.versions.length - 1]
      });
    });
    res.send(recipesArr);
  });
});

router.post('/recipes', (req, res) => {
  const recipe = new Recipe({
    versions: {
      recipeText: req.body.recipeText
    }
  });
  recipe.save().then((doc) => {
    res.status(200).send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});

router.put('/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id).then((recipe) => {
    if (!recipe) {
      return res.status(404).send();
    }
    if (recipe.versions[recipe.versions.length - 1] === req.body.recipeText){
      res.status(400).send();
    }
    recipe.versions.push({
      recipeText: req.body.recipeText,
      created: new Date()
    });
    recipe.save().then((doc) => {
      res.status(200).send(doc);
    }, (e) => {
      res.status(400).send(e);
    })
  })
});

router.get('/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id).then((recipe) => {
    if (!recipe) {
      return res.status(404).send();
    }
    res.status(200).send({
      id: recipe._id,
      recipe: recipe.versions[recipe.versions.length - 1]
    })
  }).catch((e) => {
    res.status(400).send(e);
  })
});

router.get('/:id/history', (req, res) => {
  Recipe.findById(req.params.id).then((recipe) => {
    if (!recipe) {
      return res.status(404).send();
    }
    res.status(200).send({
      id: recipe._id,
      versions: recipe.versions.slice(0, recipe.versions.length-1)
    })
  }).catch((e) => {
    res.status(400).send(e);
  })
});

module.exports = router;


