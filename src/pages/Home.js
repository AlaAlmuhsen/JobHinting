import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            <Header active='home'/>
            <Link to="/findjob">
                <button >search</button>
            </Link>
        </div>
    )
}
export default Home;