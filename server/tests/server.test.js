const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const app = require('./../server');
const Recipe = require('./../models/recipe');


const recipes = [
  {
    _id: new ObjectID(),
    versions: [
      {
        recipeText: "Some tasty food",
        _id: new ObjectID(),
        created: 432
      }
    ]
  },
  {
    _id: new ObjectID(),
    versions: [
      {
        recipeText: "Some tasty food 2",
        _id: new ObjectID(),
        created: 4632
      },
      {
        recipeText: "Some tasty food 2 update",
        _id: new ObjectID(),
        created: 4652
      },
      {
        recipeText: "Some tasty food 3 update",
        _id: new ObjectID(),
        created: 4652
      }
    ]
  }
];

beforeEach((done) => {
  Recipe.remove({}).then(() => {
    return Recipe.insertMany(recipes);
  }).then(() => done());
});

describe('POST /recipes', () => {
  const recipeText = 'Some test text';
  it('should create new recipe', (done) => {
    request(app)
      .post('/recipes')
      .send({recipeText})
      .expect(200)
      .end(function (err, res) {
        expect(err).toNotExist();
        Recipe.find({}).then((recipe) => {
          expect(recipe[2].versions[0].recipeText).toBe(recipeText);
          expect(recipe[2].versions[0].created).toExist();
          done();
        }).catch((e) => {
          done(e)
        })
      })
  });
  it('should not create recipe with empty field', (done) => {
    request(app)
      .post('/recipes')
      .send({})
      .expect(400)
      .end(function (err, res) {
        expect(err).toNotExist();
        Recipe.find({}).then((recipe) => {
          expect(recipe.length).toBe(2);
          done();
        }).catch((e) => {
          done(e)
        })
      })
  })
});

describe('PUT /recipes/:id', () => {
  const recipeText = 'Some test text';
  it('should push new recipe version into version array', (done) => {
    request(app)
      .put(`/recipes/${recipes[0]._id.toHexString()}`)
      .send({recipeText})
      .expect(200)
      .end(function (err, res) {
        expect(err).toNotExist();
        Recipe.find({}).then((recipe) => {
          expect(recipe.length).toBe(2);
          done();
        }).catch((e) => {
          done(e)
        })
      })
  });
  it('should not create recipe with empty field', (done) => {
    request(app)
      .put(`/recipes/${recipes[0]._id.toHexString()}`)
      .send({})
      .expect(400)
      .end(function (err, res) {
        expect(err).toNotExist();
        Recipe.findById(recipes[0]._id).then((recipe) => {
          expect(recipe.versions.length).toBe(1);
          done();
        }).catch((e) => {
          done(e)
        })
      })
  });
  it('should not duplicate versions of recipe', (done) => {
    request(app)
      .put(`/recipes/${recipes[1]._id.toHexString()}`)
      .send(recipes[1].versions[2].recipeText)
      .expect(400)
      .end(function (err, res) {
        expect(err).toNotExist();
        Recipe.findById(recipes[1]._id).then((recipe) => {
          expect(recipe.versions.length).toBe(3);
          done();
        }).catch((e) => {
          done(e)
        })
      })
  })
});

describe('GET /', () => {
  it('should send index.html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toExist();
        expect(res.header['content-type']).toInclude('text/html');
      })
      .end(done)
  });
});

describe('GET /recipes', () => {
  it('should get all recipes', (done) => {
    request(app)
      .get('/recipes')
      .expect(200)
      .expect((res) => {
        expect(res.header['content-type']).toInclude('application/json');
        expect(res.body.length).toBe(2);
      })
      .end(done)
  });
});

describe('GET /recipes/:id', () => {
  it('should get recipe', (done) => {
    request(app)
      .get(`/recipes/${recipes[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.header['content-type']).toInclude('application/json');
        expect(res.body.recipe.recipeText).toBe(recipes[0].versions[0].recipeText);
      })
      .end(done)
  });
});

describe('GET /:id/history', () => {
  it('should get history of recipe', (done) => {
    request(app)
      .get(`/${recipes[1]._id.toHexString()}/history`)
      .expect(200)
      .expect((res) => {
        expect(res.header['content-type']).toInclude('application/json');
        expect(res.body.versions.length).toBe(2);
      })
      .end(done)
  });
  it('should not include actual version of recipe into history', (done) => {
    request(app)
      .get(`/${recipes[1]._id.toHexString()}/history`)
      .expect(200)
      .expect((res) => {
        expect(res.body.versions[0].recipeText).toNotBe(recipes[1].versions[2].recipeText);
        expect(res.body.versions[1].recipeText).toNotBe(recipes[1].versions[2].recipeText);
      })
      .end(done)
  });
});