import { Link } from 'react-router-dom';



const page = ({ route }) => {

    return (
        <div>
            Login gogogo 1222333
            <p><Link to="/account/admin">Admin</Link></p>
            <p><Link to="/account/control">Control</Link></p>
            <p><Link to="/account">account</Link></p>
        </div>
    );
}

export default page;