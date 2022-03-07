import User from "../Models/User";

export default () => {
    const users: Array<User> = [{
        name: 'Usuario 1',
        email: 'usuario1@mail.com',
        password: 'asd123',
    }];
    return users;
}