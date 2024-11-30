import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
    const users = useLoaderData();
    return (
        <div className="mx-auto w-10/12">
            <h1 className="text-center text-red font-bold text-3xl">User Number: {users.length}</h1>
            <div className="grid grid-cols-3 gap-6 text-center">
                {users.map((user) => (
                    // <User key={user.id}>{user.name}</User>
                    <User key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );
};

export default Users;