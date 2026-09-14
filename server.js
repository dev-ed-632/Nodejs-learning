require("dotenv").config();

const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 4011;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully.");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to database:", error);
    }
}

startServer();