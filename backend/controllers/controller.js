const db = require("../db");

class UserController {
    async createRow(req, res) {
        const { date, name, count, distance } = req.body;
        console.log(date, name, count, distance);
        const newRow = await db.query(
            "INSERT INTO main_table (date, name, count, distance) values ($1, $2, $3, $4) RETURNING *", [date, name, count, distance]
        );
        res.json(newRow.rows[0]);
    }

    async getRows(req, res) {
        const data = await db.query("SELECT * FROM main_table");
        res.json(data.rows);
    }
}

module.exports = new UserController();