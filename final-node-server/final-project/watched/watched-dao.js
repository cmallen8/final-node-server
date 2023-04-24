import watchedModel from "./watched-model.js";

export const userWatchedShow = async (userId, showId) => {
    return await watchedModel.create({ userId, showId });
};

export const userUnWatchedShow = async (userId, showId) => {
    const status = await watchedModel.deleteOne({userId, showId});
    return status;
}


export const findWatchesByUserId = async (userId) => {
    return await watchedModel.find({ userId });
};

export const findUserIdByWatchesId = async (showId) => {
    return await watchedModel.find({ showId });
};