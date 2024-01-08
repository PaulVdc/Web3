const mongoose = require('mongoose')

const password = process.argv[2]


const url =
  `mongodb+srv://fullstack:${password}@atlascluster.6w6uzuw.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'PHP is Easy',
//   important: false,
// })


// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({important:false}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })