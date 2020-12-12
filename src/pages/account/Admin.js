import { Link } from 'react-router-dom';

const page = ({ route }) => {

    return (
        <div>
            管理admin
            x
            <p>123456</p>
            <p><Link to="/account/admin">Admin</Link></p>
            <p><Link to="/account/control">Control</Link></p>
        </div>
    );
}

export default page;