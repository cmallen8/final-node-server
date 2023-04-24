import * as showsDao from "./shows-dao.js"

const ShowsController = (app) => {
    const createShow = async (req, res) => {
        const show = req.body;
        const newShow = await showsDao.createShow(show);
        res.json(newShow);
    };
    app.post("/api/shows", createShow);
};

export default ShowsController;