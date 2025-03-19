'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  let translator = new Translator();


  app.route('/api/translate')
    .post((req, res) => {
      let string = req.body.text;
      let locale = req.body.locale;
      //american-to-british, british-to-american
      if (!locale || !('text' in req.body)) {
        res.json({error: "Required field(s) missing"})
      }
      else if (string == "") {
        res.json({ error: "No text to translate" })
      }

      else if (!(locale == "american-to-british" || locale == "british-to-american")) {
        res.json({ error: "Invalid value for locale field" })
      }

      else {
        if(locale == "american-to-british"){
        let result = translator.americanToBritish(string, locale)

        if (result == string) {
          res.json({text: string, translation: "Everything looks good to me!"})
        }
        else {
        res.json({text: string, translation: result})
        }
        }

        else if(locale == "british-to-american"){
          let result = translator.britishToAmerican(string, locale)
          if (result == string) {
            res.json({text: string, translation: "Everything looks good to me!"})
          }
          else {
          res.json({text: string, translation: result})
          }
          }
      }
      })



};

