import * as playlistedDao from "./playlisted-dao.js"


const PlaylistedController = (app) => {
    const userPlaylistedShow = async (req, res) => {
        const userId = req.params.userId;
        const showId = req.params.showId;
        const playlisted = await playlistedDao.userPlaylistedShow(userId, showId);
        res.json(playlisted);
    }

    const userUnPlaylistedShow = async (req, res) => {
        const showIdToDelete = req.params.showId;
        const userIdToDelete = req.params.userId;
        const status = await playlistedDao.userUnPlaylistedShow(userIdToDelete, showIdToDelete);
        res.json(status);
    }

    const findPlaylistedShowByUserId = async (req, res) => {
        const userId = req.params.userId;
        const playlisted = await playlistedDao.findPlaylistedShowByUserId(userId);
        res.json(playlisted);
    };

    const findUserIdByPlaylistsId = async (req, res) => {
        const showId = req.params.showId;
        const playlisted = await playlistedDao.findUserIdByPlaylistsId(showId);
        res.json(playlisted);
    };

    app.post("/api/users/:userId/playlisted/:showId", userPlaylistedShow);
    app.get("/api/users/:userId/playlisted", findPlaylistedShowByUserId);
    app.get("/api/playlisted/:showId/playlisted", findUserIdByPlaylistsId);
    app.delete("/api/users/:userId/playlisted/:showId", userUnPlaylistedShow);

}
export default PlaylistedController;