const stats = document.querySelector('.autocomplete')
stats.innerHTML = `
    <div class='reading-time'>reading time: </div>
    <div class='letters'>letters: </div>
    <div class='characters'>characters: </div>
    <div class='words'>words: </div>
    <div class='sentences'>sentences: </div>
    <div class='paragraphs'>paragraphs: </div>
    <div></div>
    <div class='adverbs'>adverbs: </div>
    <div class='passive-voice'>passive voice</div>
    <div class='complex words'>complex words</div>
    <div class='hard-sentence'></div>
`

const readingTime = document.querySelector('.reading-time');
const letters = document.querySelector('.letters');
const characters = document.querySelector('.characters');
const words = document.querySelector('.words');
const sentences = document.querySelector('paragraphs');

const inputText = document.querySelector('#textInput').value;

//want an event listener for when the input text chanages
inputText.addEventListener('input', console.log(inputText));

