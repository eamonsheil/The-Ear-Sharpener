### The Ear Sharpener v2
- featuring... pretty much everything it did before. but better!




## Introducing... The Ear Sharpener
A MERN stack app built with then intention of helping musicians practice ear training exercises away from a piano.

Watch the demo [here](https://youtu.be/oA9t7GJMut4)

- An app designed for musicians to practice chord and pitch recognition.

### In this app you will find 2 exercises:

#### Chord Exercise
###### Gameplay
- In this exercise, users can choose to play the exercise with a time limit (anywhere from 30 seconds to 3 minutes) or without, for infinite practice.
- Users are presented with 9 options, which represent the possible quality of the given chord. 
- Upon pressinng the "Begin" button, a randomly selected chord, with a randomly selected root note will play.
- If playing with a time limit, the user will have between 3 and 5 seconds to correctly select the correct quality of the played chord (this can be changed in the game settings dropdown menu)
- If playing without a time limit, the user has unlimited time to select a chord, and also has the option to hear the given chord as many times as they like before selecting an answer.
- During gameplay, the user's lifetime score and percentage is displayed, for easy score tracking. This data is persisted in a MongoDB database.

##### Pitch Exercise
###### Gameplay
- In this exercise, users try to select the correct (randomly selected) note which plays immediately after a I-IV-V-V7-I chord progression.
- The reason for the preceeding chord progression is to establish a key. The most effective way to use this exercise is to try and hear the randomly selected note in relation to the established key.
- There are 2 modes for this exercise: Set Base Key to "C Major", and Set Base key to "Random"
  - The idea behind this is that early on the user will practice this exercise in C major only, and learn to recognize pitches in relation to C Major (i.e, if the key is set to C major, and the 'random pitch' is an 'E', the user should recognize that as the "major 3rd" of C major, which is therefore,'E')
  - When the base key is set to random, the establishing chord progression will be different every time, so the challenge will be recognizing (for example) that an 'E' in D Major is the 2nd, versus in Bb Major, where the 'E' is the TriTone (b5 or #4)
    - therefore, in a sense, this makes the pitch exercise an interval recognition exercise as well
    
### Technologies Used:
##### Frontend: React.js, 
- Routing: React Router
- Styling: Material UI, custom CSS styles for layout
- Sound Production: Tone.js
##### Backend: Express.js
- Server: Node.js, Express.js
- Database: MongoDB
- Password hashing: BCrypt
- User Session/login: JSON Web Token
