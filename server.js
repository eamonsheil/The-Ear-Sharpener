const urlencoded = require("body-parser/lib/types/urlencoded");
const express = require("express");
require('dotenv').config();
// const dotenv = require('dotenv').config()
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;


connectDB()
const app = express();

app.use(cookieParser());

// app.use(cors(corsOptions));

app.use(express.json());
app.use(urlencoded({ extended: false }))
// app.use(require("./routes/record"));
// app.use('/api/chordRenames', require('./routes/chordRenamesRoutes'))
app.use('/users', require("./routes/userRoutes"));
app.use('/scores', require("./routes/scoresRoutes"));
app.use('/totals', require("./routes/totalScoresRoutes"));


// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client')))

    app.get('*', (req,res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'client', 'public', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(port, () => console.log(`Server is running on port: ${port}`));
