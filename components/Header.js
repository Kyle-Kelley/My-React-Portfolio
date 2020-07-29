import Navbar from '../components/Navbar';

const Header = () => {
    return(
    <div className='Header'>
        <Navbar />
    <style jsx>{`
        .Header{
            padding: 10px;
        }
    `}</style>
    </div>
    )
}

export default Header;