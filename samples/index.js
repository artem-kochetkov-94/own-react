import OwnReact from '../src'
import Test from './test.jsx'
import randomInteger from '../src/utils/randomInteger'

let alphabet = [
  "а", "б", "в", "г", "д", "е",
  "ё", "ж", "з", "и", "й", "к",
  "л", "м", "н", "о", "п", "р",
  "с", "т", "у", "ф", "х", "ц",
  "ч", "ш", "щ", "ъ", "ы", "ь",
  "э", "ю", "я"
]

const rootDom = document.getElementById("root")
OwnReact.render(OwnReact.createElement(Test,
  { alphabet }
), rootDom)

function mixArray() {
  for (let i = 0; i < 5; i++) {
    const prevPosition = randomInteger(0, alphabet.length - 1)
    
    while (true) {
      const nextPosition = randomInteger(0, alphabet.length - 1)
  
      if (nextPosition == prevPosition) {
        continue
      }
  
      const prevLetter = alphabet[prevPosition]
      const nextLetter = alphabet[nextPosition]
  
      alphabet[prevPosition] = nextLetter
      alphabet[nextPosition] = prevLetter
      
      break
    }
  }
}

setInterval(() => {
  mixArray()

  OwnReact.render(OwnReact.createElement(Test,
    { alphabet }
  ), rootDom)
}, 5000)