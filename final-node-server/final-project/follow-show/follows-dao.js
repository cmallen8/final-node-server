/*
import followsModel from "./follows-model.js";

export const userWatchedShow = async (userId, show) => {
    return await followsModel.create({userId, show});
};

export const userUnWatchedShow = async (userId, show) => {
    const status = await followsModel.deleteOne({userId, show});
    return status;
}


export const findWatchesByUserId = async (userId) => {
    return await followsModel.find({ userId });
};

export const findUserIdByWatchesId = async (showId) => {
    return await followsModel.find({ showId });
};
*/
