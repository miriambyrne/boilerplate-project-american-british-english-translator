const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

let translator = new Translator();

suite("Unit Tests", () => {
  suite("translate", () => {
    test("translate We watched the footie match for a while. to american english", function () {
      assert.equal(
        translator.britishToAmerican(
          "We watched the footie match for a while.",
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.',
      );
    });

    test("translate Paracetamol takes up to an hour to work. to american english", function () {
      assert.equal(
        translator.britishToAmerican(
          "Paracetamol takes up to an hour to work.",
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.',
      );
    });
    test("translate First, caramelise the onions. to american english", function () {
      assert.equal(
        translator.britishToAmerican("First, caramelise the onions."),
        'First, <span class="highlight">caramelize</span> the onions.',
      );
    });

    test("translate  I spent the bank holiday at the funfair. to american english", function () {
      assert.equal(
        translator.britishToAmerican(
          "I spent the bank holiday at the funfair.",
        ),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
      );
    });

    test("translate I had a bicky then went to the chippy. to american english", function () {
      assert.equal(
        translator.britishToAmerican("I had a bicky then went to the chippy."),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
      );
    });
    test("translate I've just got bits and bobs in my bum bag. to american english", function () {
      assert.equal(
        translator.britishToAmerican(
          "I've just got bits and bobs in my bum bag.",
        ),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
      );
    });
    test("translate The car boot sale at boxted airfield was called off. to american english", function () {
      assert.equal(
        translator.britishToAmerican(
          "The car boot sale at Boxted Airfield was called off.",
        ),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
      );
    });

    test("translate Have you met Mrs Kalyani? to american english", function () {
      assert.equal(
        translator.britishToAmerican("Have you met Mrs Kalyani?"),
        'Have you met <span class="highlight">Mrs.</span> Kalyani?',
      );
    });
    test("translate Prof Joyner of King's College, London. to american english", function () {
      assert.equal(
        translator.britishToAmerican("Prof Joyner of King's College, London."),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
      );
    });
    test("translate Tea time is usually around 4 or 4.30. to american english", function () {
      assert.equal(
        translator.britishToAmerican("Tea time is usually around 4 or 4.30."),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
      );
    });
    test("translate Mangoes are my favorite fruit. to british english", function () {
      assert.equal(
        translator.americanToBritish("Mangoes are my favorite fruit."),
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
      );
    });
    test("translate I ate yogurt for breakfast. to british english", function () {
      assert.equal(
        translator.americanToBritish("I ate yogurt for breakfast."),
        'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekky</span>.',
      );
    });
    test("translate We had a party at my friend's condo. to british english", function () {
      assert.equal(
        translator.americanToBritish("We had a party at my friend's condo."),
        'We had a party at my friend\'s <span class="highlight">flat</span>.',
      );
    });
    test("translate Can you toss this in the trashcan for me? to british english", function () {
      assert.equal(
        translator.americanToBritish(
          "Can you toss this in the trashcan for me?",
        ),
        'Can you toss this in the <span class="highlight">bin</span> for me?',
      );
    });
    test("translate The parking lot was full. to british english", function () {
      assert.equal(
        translator.americanToBritish("The parking lot was full."),
        'The <span class="highlight">car park</span> was full.',
      );
    });
    test("translate Like a high tech Rube Goldberg machine. to british english", function () {
      assert.equal(
        translator.americanToBritish("Like a high tech Rube Goldberg machine."),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.',
      );
    });
    test("translate To play hooky means to skip class or work.  to british english", function () {
      assert.equal(
        translator.americanToBritish(
          "To play hooky means to skip class or work.",
        ),
        'To <span class="highlight">bunk off</span> means to skip class or work.',
      );
    });
    test("translate No Mr. Bond, i expect you to die. to british english", function () {;
    assert.equal(
      translator.americanToBritish("No Mr. Bond, i expect you to die."),
      'No <span class="highlight">Mr</span> Bond, i expect you to die.',
    )
    });

    test("translate Dr. Grosh will see you now. to british english", function () {
      assert.equal(
        translator.americanToBritish("Dr. Grosh will see you now."),
        '<span class="highlight">Dr</span> Grosh will see you now.',
      );
    });

    test("translate Lunch is at 12:15 today. to british english", function () {
      assert.equal(
        translator.americanToBritish("Lunch is at 12:15 today."),
        'Lunch is at <span class="highlight">12.15</span> today.',
      );
    });
  });

  suite("highlight", () => {
    test("highlight translation in Mangoes are my favorite fruit.", function () {
      assert.equal(
        translator.americanToBritish("favorite"),
        '<span class="highlight">favourite</span>',
      );
      assert.include(
        translator.americanToBritish("Mangoes are my favorite fruit."),
        "highlight",
      );
    });

    test("highlight translation in I ate yogurt for breakfast.", function () {
      assert.equal(
        translator.americanToBritish("yogurt"),
        '<span class="highlight">yoghurt</span>',
      );
      assert.include(
        translator.americanToBritish("I ate yogurt for breakfast."),
        "highlight",
      );
    });

    test("highlight translation in We watched the footie match for a while.", function () {
      assert.equal(
        translator.britishToAmerican("footie"),
        '<span class="highlight">soccer</span>',
      );
      assert.include(
        translator.britishToAmerican(
          "We watched the footie match for a while.",
        ),
        "highlight",
      );
    });

    test("highlight translation in Paracetamol takes up to an hour to work.", function () {
      assert.equal(
        translator.britishToAmerican("Paracetamol"),
        '<span class="highlight">Tylenol</span>',
      );
    });
    assert.include(
      translator.britishToAmerican("Paracetamol takes up to an hour to work."),
      "highlight",
    );
  });

 

  

  
});

