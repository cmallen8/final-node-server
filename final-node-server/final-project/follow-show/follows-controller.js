/*

import * as followsDao from "./follows-dao"
import {userUnWatchedShow} from "./follows-dao";

function FollowsController(app) {
    const userWatchedShow = async (req, res) => {
        const watch = req.body;
        const newWatch = await followsDao.userWatchedShow(watch);
        res.json(newWatch);
    };
    const findWatchesByUserId = async (req, res) => {
        const userId = req.params.userId;
        const watches = await followsDao.findWatchesByUserId(userId);
        res.json(watches);
    };
    const findUserIdByWatchesId = async (req, res) => {
        const showId = req.params.showID;
        const userWatched = await followsDao.findUserIdByWatchesId(showId);
        res.json(userWatched);
    };
    const userUnWatchedShow = async (req, res) => {
        const watch = req.body;
        const status = await followsDao.userUnWatchedShow(watch);
        res.json(status);
    };

    app.post("/api/follows/:userId/show/:showId", userWatchedShow);
    app.get("/api/follows/watchesbyuid/:userId", findWatchesByUserId);
    app.get("/api/follows/userbywatches/:showId", findUserIdByWatchesId);
    app.delete("/api/follows/delete/:showId", userUnWatchedShow);
}

export default FollowsController;
*/
