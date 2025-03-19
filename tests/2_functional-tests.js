const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');


chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator();

suite('Functional Tests', () => {
 
test('Translation with text and locale fields: POST request to /api/translate', function() {
    chai.request(server).keepOpen()
    .post('/api/translate')
    .send({text: "color", locale:"american-to-british"})
    .end(function(req, res) {

      assert.equal(res.status, 200)
      assert.equal(res.body.translation, '<span class=\"highlight\">colour</span>')

    })
})

  test('Translation with text and invalid locale field: POST request to /api/translate', function() {
      chai.request(server).keepOpen()
      .post('/api/translate')
      .send({text: "color", locale:"plombus-to-flombus"})
      .end(function(req, res) {

          assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Invalid value for locale field')
      })
  })

  test('Translation with missing text field: POST request to /api/translate', function() {
      chai.request(server).keepOpen()
      .post('/api/translate')
      .send({locale:"american-to-british"})
      .end(function(req, res) {
          assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
      })
  })

  test('Translation with missing locale field: POST request to /api/translate', function() {
      chai.request(server).keepOpen()
      .post('/api/translate')
      .send({text: "text goes here"})
      .end(function(req, res) {
          assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
      })
  })

  test('Translation with empty text: POST request to /api/translate', function() {
      chai.request(server).keepOpen()
      .post('/api/translate')
      .send({text: "", locale:"american-to-british"})
      .end(function(req, res) {
          assert.equal(res.status, 200)
        assert.equal(res.body.error, 'No text to translate')
      })
  })

  test('Translation with text that needs no translation: POST request to /api/translate', function() {
      chai.request(server).keepOpen()
      .post('/api/translate')
      .send({text: "the color is my favorite", locale:"british-to-american"})
      .end(function(req, res) {
          assert.equal(res.status, 200)
        assert.equal(res.body.translation, 'Everything looks good to me!')
      })
  })
  
  
});

