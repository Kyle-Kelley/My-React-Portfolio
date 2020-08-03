import NavMenu from './NavMenu';

const Header = () => {
    return(
    <div className='Header'>
        <NavMenu />
    <style jsx>{`
        .Header{
            padding: 10px;
        }
    `}</style>
    </div>
    )
}

export default Header;