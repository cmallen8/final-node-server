import playlistedModel from "./playlisted-model.js";

export const userPlaylistedShow = async (userId, showId) => {
    return await playlistedModel.create({ userId, showId });
};

export const findPlaylistedShowByUserId = async (userId) => {
    return await playlistedModel.find({ userId });
};

export const findUserIdByPlaylistsId = async (userId) => {
    return await playlistedModel.find({ userId });
};