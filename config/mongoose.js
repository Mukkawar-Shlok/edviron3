const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
