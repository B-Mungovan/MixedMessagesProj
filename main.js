const generateRandomNumber = (num) =>{
        return Math.floor(Math.random() * num)  
};

const collectiveOutputs = {
    motivationalQuotes: [
      "Believe you can and you're halfway there.",
      "In the middle of difficulty lies opportunity.",
      "The only way to do great work is to love what you do.",
      "You are never too old to set another goal or to dream a new dream.",
      "You are braver than you believe, stronger than you seem, and smarter than you think."
    ],
    inspirationalQuotes: [
      "The future belongs to those who believe in the beauty of their dreams.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      "The mind is everything. What you think you become.",
      "Happiness is not by chance, but by choice."
    ],
    wisdomQuotes: [
      "The only true wisdom is in knowing you know nothing.",
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "Life is a journey, not a destination."
    ]
  };

  let personalMessage = []

  for (let prop in collectiveWisdom){
    let optionIndx = generateRandomNumber(collectiveOutputs[prop.length])

    switch(prop) {
        case 'motivational':
            personalMessage.push(`your motivational message for today is "${collectiveOutputs[prop][optionIndx]}".`)
            break
        case "inspirational":
            personalMessage.push(`your motivational message for today is "${collectiveOutputs[prop][optionIndx]}".`)
            break
        case "wisdom":
            personalMessage.push(`your motivational message for today is "${collectiveOutputs[prop][optionIndx]}".`)
            break
        default:
            personalMessage.push('Looks Like your all quoted Up!')

    }
  }

  