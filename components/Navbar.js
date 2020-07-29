import styled from 'styled-components';
import NavButton from '../components/NavButton';

const Nav = styled.nav`
width: 100%;
height: 65px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px 0 20px;
display: flex;
justify-content: space-between;

.logo {
  padding: 15px 0;
}
`;


import React from 'react'

const Navbar = () => {
  return (
    <div className='logo'>
      <Nav>
        <NavButton />
      </Nav>
    </div>
  )
}

export default Navbar



  




{/* <div className={styles.Navbar}>
<Link href='/'>
    <button className={styles.navButton}>Home</button>
</Link>
<Link href='/about'>
    <button className={styles.navButton}>About Me</button>
</Link>
<Link href='/blog'>
    <button className={styles.navButton}>Blog</button>
</Link>
<Link href='/contact'>
    <button className={styles.navButton}>Contact</button>
</Link>
<Link href='/projects'>
    <button className={styles.navButton}>Projects</button>
</Link>
</div> */}

// class Navbar extends Component {
//   constructor(props){
//       super(props);
//       this.state = {
//           menuOpen: false
//       }
//       this.handleMenuClick = this.handleMenuClick.bind(this);
//       this.handleLinkClick = this.handleLinkClick.bind(this);
//   }
//   handleMenuClick(){
//       this.setState({menuOpen: !this.state.menuOpen})
//   }
//   handleLinkClick(){
//       this,this.setState({menuOpen: false});
//   }
//   render(){
//       const styles= 
//       {
//         container:{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           zIndex: '99',
//           opacity: 0.9,
//           display:'flex',
//           alignItems:'center',
//           background: 'black',
//           width: '100%',
//           color: 'white',
//           fontFamily:'Lobster',
//         },
//         logo: {
//           margin: '0 auto',
//         },
//         body: {
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '100vw',
//           height: '100vh',
//           filter: this.state.menuOpen ? 'blur(2px)':null,
//           transition: 'filter 0.5s ease',
//         },
//       }
//       const menu = ['Home', 'About Me', 'Blog', 'Contact', 'Projects'];
//       const menuItems = menu.map((val, index) => {
//           return(
//               <MenuItem
//                   key={index}
//                   delay={`${index * 0.1}s`}
//                   onClick={() => {this.handleLinkClick()}}>{val}</MenuItem>
//           )
//       })
//   return(
//       <div>
//       <div style={styles.container}>
//         <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
//         <div style={styles.logo}>Logo</div>
//       </div>
//       <Menu open={this.state.menuOpen}>
//         {menuItems}
//       </Menu>
//       <div style={styles.body}>
//       </div>
//     </div>
//   )}
// }