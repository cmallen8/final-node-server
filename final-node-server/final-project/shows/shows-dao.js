import showsModel from "./shows-model.js";

export const createShow = async (show) =>{
    return showsModel.create(show);
};