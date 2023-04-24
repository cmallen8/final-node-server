import * as followsDao from "./follows-dao.js"
import {findFollowsByFollowedId, findFollowsByFollowerId, unfollowUser, userFollowsUser} from "./follows-dao.js";

function FollowsController(app) {
    const userFollowsUser = async (req, res) => {
        const follow = req.body;
        const newFollow = await followsDao.userFollowsUser(follow);
        res.json(newFollow);
    };
    const findFollowsByFollowerId = async (req, res) => {
        const userId = req.params.userId;
        const followers = await followsDao.findFollowsByFollowerId(userId);
        res.json(followers);
    };
    const findFollowsByFollowedId = async (req, res) => {
        const userId = req.params.userId;
        const followed = await followsDao.findFollowsByFollowedId(userId);
        res.json(followed);
    };
    const unfollowUser = async (req, res) => {
        const follow = req.body;
        const status = await followsDao.unfollowUser(follow);
        res.json(status);
    };

    app.post("/api/follows", userFollowsUser);
    app.get("/api/follows/followers/:userId", findFollowsByFollowerId);
    app.get("/api/follows/followed/:userId", findFollowsByFollowedId);
    app.delete("/api/follows", unfollowUser);
}

export default FollowsController;