import * as watchedDao from "./watched-dao.js"

const WatchedController = (app) => {
    const userWatchedShow = async (req, res) => {
       const userId = req.params.userId;
        const showId = req.params.showId;
        //const imageName = req.params.imageName;
        //const showName = req.params.showName;
        const watched = await watchedDao.userWatchedShow(userId, showId);
        //const watched = await watchedDao.userWatchedShow(req.body);
        res.json(watched);
    }

    const userUnWatchedShow = async (req, res) => {
        const showIdToDelete = req.body;
        const status = await watchedDao.userUnWatchedShow(showIdToDelete);
        res.json(status);
    }

    const findWatchesByUserId = async (req, res) => {
        const userId = req.params.userId;
        const watched = await watchedDao.findWatchesByUserId(userId);
        res.json(watched);
    };

    const findUserIdByWatchesId = async (req, res) => {
        const showId = req.params.showId;
        const watched = await watchedDao.findUserIdByWatchesId(showId);
        res.json(watched);
    };

    app.post("/api/users/:userId/watched/:showId", userWatchedShow);
    app.get("/api/users/:userId/watched", findWatchesByUserId);
    app.get("/api/watched/:showId/watched", findUserIdByWatchesId);
    app.delete("/api/users/:userId/watched/:showId", userUnWatchedShow);

}
export default WatchedController;