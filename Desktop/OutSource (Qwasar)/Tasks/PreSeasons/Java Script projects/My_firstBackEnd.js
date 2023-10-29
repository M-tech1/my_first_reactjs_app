const express = require('express')
const app = express()
const port = 8080;
const List = { 
    songs:[ 
"son of Man", "God is able", "am a winner man", "songs of angels" , "i lift my voice",
"hallelujah", "Kadosh", "you reign", "mighty you are", "holy you are", "see me here",
"Man can win", "God is king", "im victorious ", "songs by men" , "i lift my eyes",
"hallelujah the king is here", "Kadosh mighty God", "you reign in heaven & earth", "mighty are your works", ],

Wives:["Nancy Barbato", "Ava Gardner", "Mia Farrow", "Barbara Marx",],
    Name: "Francis Albert Sinatra",
    Birth_City: "Hoboken, New Jersey",
    Birth_Date: "December 12, 1915",
    Picture:"https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg",
  };

  app.get('/', (req, res)=>{ let songs = List.songs[Math.trunc(Math.random() * List.songs.length)];
    res.send(songs)
})

app.get('/', (req, res)=>{ let songs = List.songs[Math.trunc(Math.random() * List.songs.length)];
    res.send(songs)
})

app.get('/Birth_Date', (req, res) =>{ let birth_date = List.Birth_Date;
    res.send(birth_date)
})

app.get('/Birth_City', (req, res) =>{ let birth_city = List.Birth_City;
    res.send(birth_city)
})


app.get('/Wives', (req, res) => { let wives = List.Wives.join(", "); 
    res.send(wives)
})

app.get('/Picture', (req, res) =>{ res.redirect(List.Picture)
})

//Route to public
app.get('/public', (req, res) =>{ res.send("Everybody can see this page")
})

//Route to protected
app.get("/protected", (req, res) => { const authenticate = req.headers.authorization; 
  

    if (!authenticate) {res.status(401);
        res.write("Not authorized\n");
      } else {
        const Encode = authenticate.split(" ")[1]; 
        const Decode = Buffer.from(Encode, "base64").toString();
    
        const User_name = Decode.substring(0, Decode.indexOf(":")); 
        const Pass_word = Decode.substring(Decode.indexOf(":") + 1);
    
      if (User_name !== "admin" || Pass_word !== "admin") {
          res.status(401);
          res.write("Not authorized\n");
        } else {
          res.write("Welcome, authenticated client\n");
        } //End else
    } //End else
      res.end();
    });
  
  app.listen(port, () => {console.log("listening on port 8080")})

