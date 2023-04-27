import * as watchedDao from "./watched-dao.js"


const WatchedController = (app) => {

    //let currentWatch = null;

    /*
    const createWatched = async (req, res) => {
        const insertedWatched = await watchedDao.createWatched(req.body);
        res.json(insertedWatched);
    };

     */
    const userWatchedShow = async (req, res) => {
        const userId = req.params.userId;
        const showId = req.params.showId;
       // const userId = req.params.userId;
        //const showId = req.params.showId;
        //const poster_path = req.params.poster_path;
        //const showName = req.params.showName;
        //const newWatched = await watchedDao.createWatched(userId, showId, poster_path, showName);
        const newWatched = await watchedDao.userWatchedShow(userId, showId);
        res.json(newWatched);
    }

    const userUnWatchedShow = async (req, res) => {
        const showIdToDelete = req.params.showId;
        const userIdToDelete = req.params.userId;
        const status = await watchedDao.userUnWatchedShow(userIdToDelete, showIdToDelete);
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

    /*
    const findUserAndShow = async (req, res) => {
        const show = req.body;
        console.log(show);
        const foundShow = await watchedDao.findUserAndShow(
            req.body.userId,
            req.body.showId
        );
        console.log(foundShow);
        if (foundShow) {
           // currentWatch = foundShow;
            res.send(foundShow);
        } else {
            res.sendStatus(404);
        }
    };

     */

    //app.post("/api/watched/watch", createWatched);
    app.post("/api/users/:userId/watched/:showId", userWatchedShow);
    app.get("/api/users/:userId/watched", findWatchesByUserId);
    app.get("/api/watched/:showId/watched", findUserIdByWatchesId);
    app.delete("/api/users/:userId/watched/:showId", userUnWatchedShow);
  //  app.post("/api/watched/:showId/watch-user/:userId", findUserAndShow);


}
export default WatchedController;