import GetAllUsersTask from "../Tasks/GetAllUsersTask";

export default () => {
    const users = GetAllUsersTask();
    return users;
}