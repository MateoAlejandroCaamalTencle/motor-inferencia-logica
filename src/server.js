const express = require("express");
const { runQuery } = require("./prologEngine");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Motor de Inferencia Lógica funcionando");
});

app.post("/query", async (req, res) => {
    try {
        const query = req.body.query;

        if (!query) {
            return res.status(400).json({
                error: "Debes enviar una consulta Prolog"
            });
        }

        const result = await runQuery(query);

        res.json({
            query: query,
            result: result
        });

    } catch (error) {
        res.status(500).json({
            error: "Error al ejecutar la consulta",
            detail: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});