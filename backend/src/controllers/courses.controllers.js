import db from "../database/db.js";

export async function createCourse(req, res) {
    const { title, price, description, theme } = req.body;

    try {
        const session = res.locals.session;

        const newCourse = {
            userId: session.userId,
            title,
            price,
            description,
            theme
        }

        const oldCourse = await db.collection("courses").find({ title, userId: session.userId }).toArray();
        if (oldCourse.length > 0) return res.status(409).send(session);



        await db.collection("courses").insertOne(newCourse);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCursos(req, res) {
    try {
        const cursos = await db.collection("courses").find().toArray()
        res.status(201).send(cursos);

    } catch (err) {
        res.status(500).send(err.message)
    }
}