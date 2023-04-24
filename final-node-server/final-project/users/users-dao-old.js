import usersModel from "./users-model.js";

export const createUser = (user) => usersModel.create(user);
//$set replaces  value of a field with the specified value.
// export const updateUser = (uid, user) =>
//  usersModel.updateOne({ _id: uid }, user);
export const updateUser = (id, user) => usersModel.updateOne({id: id}, {$set:user});
export const deleteUser = (id) => usersModel.deleteOne({id: id});

// find returns array
export const findUsers = () => usersModel.find();
export const findUserById = (id) => usersModel.findById(id);
export const findUserByUserName = (userName) => usersModel.findOne({userName});

// export const findUserByCredentials = (username, password) =>
//  usersModel.findOne({ username, password });
export const findByLogin = (userName, password) =>
    usersModel.findOne({userName, password}, {password: false});