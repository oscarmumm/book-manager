import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Profile() {
    const userContext = useContext(UserContext);
    if (!userContext) return null;
    const { logOut } = userContext;
    const handleClick = () => {
        logOut();
    };

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={handleClick}>Close Session</button>
        </div>
    );
}
