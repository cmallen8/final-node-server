import usersModel from "./users-model.js";
// fp - statuses outstanding

export const createUser = async (user) => {
    const newUser = await usersModel.create(user);
    return newUser;
};

export const updateUser = async (_id, user) => {
    const status = await usersModel.updateOne({ _id: _id }, user);
    return status;
};

export const deleteUser = async (_id) => {
    const status = await usersModel.deleteOne({ _id: _id });
    return status;
};


export const findUsers = async () => {
    const users = await usersModel.find();
    return users;
};

export const findUserById = async (_id) => {
    const user = await usersModel.findById(_id);
    return user;
};

export const findUserByUserName = async (username) => {
    const user = await usersModel.findOne({ username: username });
    return user;
};

export const findByLogin = async (username, password) => {
    const user = await usersModel.findOne({ username, password });
    return user;
};



