import * as usersDao from "./users-dao.js"
// add find by credentials and find by username? to import?
// import {findUserByUserName, findByLogin} from "./users-dao.js";
// fp - statuses outstanding


//let currentUser = null;
function UsersController(app) {
    const createUser = async (req, res) => {
        const insertedUser = await usersDao.createUser(req.body);
        res.json(insertedUser);
    };
    const updateUser = async (req, res) => {
        const userIdtoUpdate = req.params._id;
        const currentUser = req.session["currentUser"];
        if (userIdtoUpdate === currentUser._id){
            req.session["currentUser"] = {...currentUser, ...req.body};
        }
        //const updates = req.body;
        const status = await usersDao.updateUser(userIdtoUpdate, req.body);
        res.json(status);
    };
    const deleteUser = async (req, res) => {
        const userIdToDelete = req.params._id;
        const status = await usersDao.deleteUser(userIdToDelete);
        res.json(status);
    };

    const findUsers = async (req, res) => {
        const users = await usersDao.findUsers()
        res.send(users);
    };

    // do i need this?
    const findUserById = async (req, res) => {
        const userId = req.params.userId;
        //const user = users.find((user) => user._id === userId);
/*        if(user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }*/
        const user = await usersDao.findUserById(userId);
        res.send(user);
    };
    // fail registration if user already exists
    const register = async (req, res) => {
        const user = req.body;
        const existingUser = await usersDao.findUserByUserName(req.body.username)
        if (existingUser) {
            res.sendStatus(409);
            return;
        } else
        {
            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            res.json(newUser);
        }
    };

    const login = async (req, res) => {
        const user = req.body;
        console.log(user);
        const foundUser = await usersDao.findByLogin(
            req.body.username,
            req.body.password
        );
        console.log(foundUser);
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        // create variable that holds the cookie
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        // currentUser = null;
        res.sendStatus(204);
    };

    app.post("/api/users", createUser);
    //app.put("/api/users/:_id", updateUser);
    app.put("/api/users/update/:_id", updateUser);
    app.get("/api/users", findUsers);
    app.get("/api/users/userId/:_id", findUserById);

    app.delete("/api/users/:_id", deleteUser);
    // for login or anything secure, use post
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
}
export default UsersController;