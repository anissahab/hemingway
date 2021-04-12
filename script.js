const hi = 'hello this is my string.'

console.log(hi.charAt(5));


// use with looping function to find # of letters
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  console.log(isCharacterALetter('a'));

var my_string = `Hemingway App makes your writing bold and clear.
The app highlights lengthy, complex sentences and common errors; if you see a yellow sentence, shorten or split it. If you see a red highlight, your sentence is so dense and complicated that your readers will get lost trying to follow its meandering, splitting logic — try editing this sentence to remove the red.
You can utilize a shorter word in place of a purple one. Mouse over them for hints.
Adverbs and weakening phrases are helpfully shown in blue. Get rid of them and pick words with force, perhaps.

Phrases in green have been marked to show passive voice.

You can format your text with the toolbar.

Paste in something you're working on and edit away. Or, click the Write button and compose something new.`;

const spaceCount = (my_string.split(/\s+/).length - 1);
console.log(spaceCount)


//regex for # sentences
const dotCount = my_string.split(/[\.\!\?]+/).length - 1;
console.log(dotCount)

const parCount = my_string.split(/\n+/).length;

console.log(parCount);