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
                success: false,
                error: "Debes enviar una consulta Prolog"
            });
        }

        // Programación funcional:
        // normalización de entrada
        const normalizedQuery = query
            .trim()
            .toLowerCase();

        const result = await runQuery(normalizedQuery);

        res.json({
            success: true,
            query: normalizedQuery,
            result: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: "Error al ejecutar la consulta",
            detail: error.message
        });

    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});