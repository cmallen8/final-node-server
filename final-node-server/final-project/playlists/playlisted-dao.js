import playlistedModel from "./playlisted-model.js";

export const userPlaylistedShow = async (userId, showId) => {
    return await playlistedModel.create({ userId, showId });
};

export const userUnPlaylistedShow = async (userId, showId) => {
    const status = await playlistedModel.deleteOne({userId, showId});
    return status;
}

export const findPlaylistedShowByUserId = async (userId) => {
    return await playlistedModel.find({ userId });
};

export const findUserIdByPlaylistsId = async (showId) => {
    return await playlistedModel.find({ showId });
};