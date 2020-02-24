require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 2020;

app.use(express.static(`${__dirname}/client/build`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.DATABASE_LINK, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.route('/api')
  .get((req, res) => {
    Note.find((err, allNotes) => {
      if (!err) res.send(allNotes)
    })
  })
  .post((req, res) => {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content
    });
    newNote.save(err => {
      if (!err) res.send({res: 'Successfully added to database.'});
    });
  })
  .delete((req, res) => {
    Note.deleteOne({_id: req.body._id}, err => {
      if (!err) res.send({res: 'Successfully deleted from database.'});
    })
  }); 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
})