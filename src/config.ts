import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    intra: {
        domain: process.env.DOMAIN || "https://api.intra.42.fr/",
        client_id: process.env.CLIENT_UID,
        client_secret: process.env.CLIENT_SECRET
    }
};