import useGetAllUsers from "../../shared/hooks/useGetAllUsers.tsx";
import LottieComponent from "../lottie/LottieComponent.tsx";
import setTraffic from '../../shared/lottie-files/setTraffic.json'
import laptopFloating from '../../shared/lottie-files/laptopFloating.json'
import styles from './user-list.module.scss'

const UserListComponent = () => {
    const {users, loading} = useGetAllUsers()
    return (
        <div className={styles.userListContainer}>
            <header className={styles.animateBox}>
                <LottieComponent
                    animationData={laptopFloating}
                    loop={true}
                    containerWidth={200}
                    containerHeight={200}
                    height={200}/>
                <div className={styles.title}>
                    User List
                </div>
            </header>
            <div className={styles.userCardContainer}>
                {loading ? <LottieComponent animationData={setTraffic} loop={true}/> : users.map((user) => (
                    <div key={user.id} className={styles.userCard}>
                        <p>UserName: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserListComponent;