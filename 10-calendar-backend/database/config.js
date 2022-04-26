
const mongoose = require('mongoose');

const dbConexion = async () => {
    console.log(process.env.DB_CNN);
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('Base de datos ONLINE');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    dbConexion
}