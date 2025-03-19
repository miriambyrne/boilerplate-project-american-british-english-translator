const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
britishToAmerican(str) {
    let swapAmericanOnly = Object.entries(americanOnly).map(
      ([prop, propValue]) => {
        return [propValue, prop];
      },
    );
    let swapAmericanToBritishSpelling = Object.entries(
      americanToBritishSpelling,
    ).map(([prop, propValue]) => {
      return [propValue, prop];
    });
    let swapAmericanToBritishTitles = Object.entries(
      americanToBritishTitles,
    ).map(([prop, propValue]) => {
      return [propValue, prop];
    });

    let britishToAmerican = Object.fromEntries(swapAmericanOnly);
    let britishToAmericanSpelling = Object.fromEntries(
      swapAmericanToBritishSpelling,
    );
    let britishToAmericanTitles = Object.fromEntries(
      swapAmericanToBritishTitles,
    );

    const combinedBritish = {
      ...britishToAmerican,
      ...britishToAmericanSpelling,
      ...britishOnly,
    };

    let keyArray = Object.keys(combinedBritish).sort(
      (a, b) => b.length - a.length,
    );
    keyArray.forEach((word) => {
      let regex = new RegExp(`\\b${word}\\b`, "gi");

      if (str.match(regex)) {
        str = str.replaceAll(
          regex,
          '<span class="highlight">' + combinedBritish[word] + "</span>",
        );
      }
    });
    let titleKeys = Object.keys(britishToAmericanTitles);

    titleKeys.forEach((key) => {
      if (str.toLowerCase().split(" ").indexOf(key) >= 0) {
        str = str.replace(
          new RegExp(`${key}`, "gi"),
          '<span class="highlight">' +
            britishToAmericanTitles[key].charAt(0).toUpperCase() +
            britishToAmericanTitles[key].slice(1) +
            "</span>",
        );
      }
    });

    if (str.match(/\d{1,2}\.\d{2}/g)) {
      str = str.replace(
        /(\d{1,2})\.(\d{2})/,
        '<span class="highlight">$1:$2</span>',
      );
    }
    return str;
  }
  americanToBritish(str) {
    let swapBritishOnly = Object.entries(britishOnly).map(
      ([prop, propValue]) => {
        return [propValue, prop];
      },
    );
    let americanToBritish = Object.fromEntries(swapBritishOnly);

    const combinedAmerican = {
      ...americanOnly,
      ...americanToBritishSpelling,
      ...americanToBritish,
    };

    let keyArray = Object.keys(combinedAmerican).sort(
      (a, b) => b.length - a.length,
    );
    keyArray.forEach((word) => {
      let regex = new RegExp(`\\b${word}\\b`, "gi");

      if (str.match(regex)) {
        str = str.replaceAll(
          regex,
          '<span class="highlight">' + combinedAmerican[word] + "</span>",
        );
      }
    });
    let titleKeys = Object.keys(americanToBritishTitles);

    titleKeys.forEach((key) => {
      if (str.toLowerCase().split(" ").indexOf(key) >= 0) {
        str = str.replace(
          new RegExp(`${key}`, "gi"),
          '<span class="highlight">' +
            americanToBritishTitles[key].charAt(0).toUpperCase() +
            americanToBritishTitles[key].slice(1) +
            "</span>",
        );
      }
    });

    if (str.match(/\d{1,2}\:\d{2}/g)) {
      str = str.replace(
        /(\d{1,2})\:(\d{2})/,
        '<span class="highlight">$1.$2</span>',
      );
    }
    return str;
  }
}

module.exports = Translator;
