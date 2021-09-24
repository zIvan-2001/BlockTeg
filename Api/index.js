import express from "express";
import RutaUser from "./Components/user";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(RutaUser);

const PORT = 5000;

app.listen(PORT);
