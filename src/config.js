module.exports = {
    PORT: process.env.PORT || 9090,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DB_URL || 'postgresql://postgres@localhost/notefuldb',
}