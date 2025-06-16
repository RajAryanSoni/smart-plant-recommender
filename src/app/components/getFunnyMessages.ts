export const getFunnyMessage = (temp: number, humidity: number): string => {
  const hotResponses = [
    "Oof, it is blazing there! Time for some sun-loving succulents 🌞",
    "Desert vibes detected! Let us find a tough plant buddy 🌵",
    "Feels like your plants might need shades 😎",
    "Cooking up a cactus paradise, are not we? 🏜️",
    "Your plant might need sunscreen! ☀️",
    "Warning: Soil might bake itself 🔥",
    "How about a BBQ with your cactus? 🌶️",
    "Even the air smells like toast! 🍞",
    "It us so hot, plants may ask for AC 🌬️",
    "Perfect time for aloe vera and chill 🪴",
    "Aloe there! Surviving the sun? 🌞",
    "This is what they mean by hot roots! 🥵",
    "Your garden could fry an egg 🥚",
    "Sun-loving plants will throw a party 🌻",
    "Even cacti are sweating 🌡️",
    "It is not the heat, it is the humidity... oh wait, it is both 😅",
    "Sunshine state of mind! 🌇",
    "Your plants better love sunbaths ☀️",
    "Get ready to water extra or choose toughies 🌵",
    "Even the weeds carry water bottles here 💧"
  ];

  const coldResponses = [
    "Brrr... chilly roots incoming! 🥶",
    "We will need a snow-loving plant for that! ❄️",
    "Your place is perfect for cozy indoor greens 🌱",
    "Might wanna knit a sweater for your plant 🧶",
    "Are you sure you are not in the Himalayas? 🏔️",
    "Perfect for pine trees and hot cocoa ☕🌲",
    "Do plants hibernate too? Asking for a friend 💤",
    "Root-cicles incoming! ❄️🥔",
    "Hope your plants like fuzzy socks 🧦",
    "Indoor plants only, unless they are Eskimo 🌿",
    "Snowflakes and soil do not mix well 🧊",
    "Even your pot might freeze over! 🧊🪴",
    "It is so cold, your plant asked for coffee ☕",
    "Frosty the Fern, anyone? 🌿☃️",
    "Winter is planting... I mean, coming 🧊",
    "Your garden may be a fridge 📦",
    "Better not plant bananas 🌬️",
    "Your aloe just went into hibernation 🛌",
    "Perfect for evergreens and igloos 🌲",
    "Do plants like earmuffs? 🤔"
  ];

  const humidResponses = [
    "It is tropical out there — lucky you! 🌴",
    "Humidity like that? Ferns will love you! 🌿",
    "Feels like a spa day for your plants 💧",
    "Your room could grow a jungle 🌳",
    "Perfect climate for moss and magic ✨",
    "Plants will sip water from the air itself 💦",
    "Jungle vibes loading… 🐒",
    "You just unlocked Fern Heaven ✅",
    "Do not water your plant — just let it breathe 😄",
    "Your plants might need floaties 🏊",
    "Humidity is so high, even cacti look nervous 🌵😅",
    "Aloe there — it is like Bali in your backyard 🌺",
    "Plant paradise unlocked 🌼",
    "Too humid? No problem, let us grow rainforest stuff 🌧️",
    "Is that dew or a fog machine? 🌫️",
    "Air feels like soup — great for plants 🍲🌿",
    "Humidity like a warm hug! 🤗",
    "Ferns are texting each other about your place 📱🌿",
    "Your windows are fogged — but your plants are vibin 🔥",
    "It is not sweat, it is your plant saying thanks 🙏"
  ];

  const normalResponses = [
    "Nice balanced weather — most plants will thrive! 🌼",
    "Looks like a green thumbs-up! 👍",
    "The plant world approves of your climate 🌍",
    "Perfect conditions for leafy friends 🍃",
    "Plant any dream — your weather is a blessing 🙌",
    "This is the Goldilocks zone — just right 🌞🌱",
    "Time to get your inner gardener out 🌿🧤",
    "Every plant just clapped for your climate 👏",
    "Perfect day to get potting! 🪴",
    "The soil smiles at your weather 🌱😊",
    "Sunlight? Check. Moisture? Check. Go go go! ✅",
    "Nature says: You got this 🌏",
    "Balanced weather like balanced soil — beautiful 🌼",
    "Even the worms are excited 🪱",
    "Planting in this weather? A masterpiece 🎨",
    "Welcome to plant paradise 😇",
    "Sun and shade — a dream duo ☀️🌤️",
    "Today’s forecast: 100% chance of blooming 🌸",
    "Your weather deserves a gardening award 🏅",
    "Time to turn your balcony into a forest 🏡🌳"
  ];

  if (temp > 35) {
    return hotResponses[Math.floor(Math.random() * hotResponses.length)];
  } else if (temp < 12) {
    return coldResponses[Math.floor(Math.random() * coldResponses.length)];
  } else if (humidity > 70) {
    return humidResponses[Math.floor(Math.random() * humidResponses.length)];
  } else {
    return normalResponses[Math.floor(Math.random() * normalResponses.length)];
  }
};
