import {useEffect, useState} from "react";
import {UserType} from "../types";

const UseGetAllUsers = () => {
    const [users, setUsers] = useState<UserType[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        fetchUsers()
    })

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json()
        setUsers(json)
        setLoading(false)
    }

    return {loading, users, refetch: fetchUsers}
};

export default UseGetAllUsers;