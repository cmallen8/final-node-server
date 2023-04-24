import * as playlistedDao from "./playlisted-dao.js"

const PlaylistedController = (app) => {
    const userPlaylistedShow = async (req, res) => {
        const userId = req.params._id;
        const showId = req.params.sid;
        const playlisted = await playlistedDao.userPlaylistedShow(userId, showId);
        res.json(playlisted);
    }

    const findPlaylistedShowByUserId = async (req, res) => {
        const userId = req.params._id;
        const playlisted = await playlistedDao.findPlaylistedShowByUserId(userId);
        res.json(playlisted);
    };

    const findUserIdByPlaylistsId = async (req, res) => {
        const showId = req.params.sid;
        const playlisted = await playlistedDao.findUserIdByPlaylistsId(showId);
        res.json(playlisted);
    };

    app.post("/api/users/:_id/playlisted/:sid", userPlaylistedShow);
    app.get("/api/users/:_id/playlisted", findPlaylistedShowByUserId);
    app.get("/api/playlisted/:sid/playlisted", findUserIdByPlaylistsId);

}
export default PlaylistedController;