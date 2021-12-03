const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const furtunes = ["todays going to be great!",
					 "youre going to find your lover!",
					 "what is up so is below",
           "next person youll meet will change your life",
           "its not going to rain today!"
  ];

  let randomIndex = Math.floor(Math.random() * furtunes.length);
  let randomfortune = furtunes[randomIndex];

  res.status(200).send(randomfortune );
})
app.get("/api/goal", (req, res) => {
  const goal = ["run 1 mile today!",
					 "read 10 mins a day ",
					 "do a 100 pushups ",
           "do something nice for loved ones"
           
  ];

  let index = Math.floor(Math.random() * goal.length);
  let randomgoal = goal[index];

  res.status(200).send(randomgoal);
})
app.post('/api/users', (req, res) => {
  console.log(req.body) 
  let username = req.body.username
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  res.status(200).send(`Welcome, ${username}! I have been waiting so long to meet you! ${firstName} ${lastName}.`)
})




app
app.listen(4000, () => console.log("Server running on 4000"))
