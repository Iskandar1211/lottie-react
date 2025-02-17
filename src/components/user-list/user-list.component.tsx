import useGetAllUsers from "../../shared/hooks/useGetAllUsers.tsx";
import LottieComponent from "../lottie/LottieComponent.tsx";
import setTraffic from '../../shared/lottie-files/setTraffic.json'

const UserListComponent = () => {
    const {users, loading} = useGetAllUsers()
    return (
        <div>
            {loading ? <LottieComponent animationData={setTraffic} loop={true}/> : users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default UserListComponent;