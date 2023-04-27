import watchedModel from "./watched-model.js";

/*
export const createWatched = async (watched) => {
    const newWatch = await watchedModel.create({ watched });
    return newWatch;
};

 */

export const userWatchedShow = async (userId, showId) => {
    const status = await watchedModel.create({userId, showId});
    return status;
}

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

/*
export const findUserAndShow = async (userId, showId) => {
    const show = await watchedModel.findOne({ userId, showId });
    return show;
};

 */