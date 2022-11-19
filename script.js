const wordsArea = document.querySelector(".text")
const btn = document.querySelector(".btn")
const count = document.querySelector(".count")

const counter = () => {
    let words = wordsArea.value;
    let wordCut = words.replace(/\s+/g, " ").trim()
    let splitWords = wordCut.split(" ")

    let numberOfWords = splitWords.length;
    console.log(numberOfWords)

    if (splitWords[0] == "") {
        numberOfWords = 0;
    }

    count.innerText = numberOfWords
}

btn.addEventListener("click", counter);