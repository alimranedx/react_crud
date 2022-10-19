import {Link} from 'react-router-dom';
export default function Home(){
    return (
        <div>
            <Link to='/'>home page</Link>
            <Link to='/about'>about page</Link>
            <h2 className="text-center text-success">hello Home</h2>
        </div>
    );
}