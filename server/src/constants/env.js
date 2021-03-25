const {
    DB_NAME,
    MONGO_PASSWORD,
    MONGO_USERNAME,
    API_PORT,
    JWT_SECRET, 
} = process.env;

exports.DB_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.17orc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
exports.API_PORT = API_PORT;
exports.JWT_SECRET = JWT_SECRET;
