const pl = require("tau-prolog");
const fs = require("fs/promises");

async function runQuery(query) {
    const knowledgeBase = await fs.readFile("./src/knowledge.pl", "utf8");

    return new Promise((resolve, reject) => {
        const session = pl.create(1000);

        session.consult(knowledgeBase, {
            success: () => {
                session.query(query, {
                    success: () => {
                        session.answer({
                            success: (answer) => {
                                resolve(session.format_answer(answer));
                            },
                            fail: () => {
                                resolve("false.");
                            },
                            error: (err) => {
                                reject(err);
                            }
                        });
                    },
                    error: (err) => {
                        reject(err);
                    }
                });
            },
            error: (err) => {
                reject(err);
            }
        });
    });
}

module.exports = { runQuery };