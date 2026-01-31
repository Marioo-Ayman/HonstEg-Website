import  { useState ,useEffect} from 'react';
import { 
  AppBar, Toolbar, Button, IconButton, 
  Drawer, List, ListItem, ListItemButton, ListItemText, Box, Container 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@/assets/honestEGLogo_dbrd.png';
import { Link } from "react-router-dom";
const navItems = ['Home', 'Services', 'About'];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <>
//       <AppBar position="sticky" sx={{ bgcolor: 'secondary.main', boxShadow: 3 }}>
//         <Container maxWidth="lg">
//           <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            
//             {/* Logo Section */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//               <img src={Logo} alt="Logo" style={{ height: '40px' }} />
//               <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '.1rem' }}>
//                 HonestEg
//               </Typography>
//             </Box>

//             {/* Desktop Links */}
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
//               {navItems.map((item) => (
//                 <Button key={item} sx={{ color: '#fff', textTransform: 'none', fontSize: '1rem' }}>
//                   {item}
//                 </Button>
//               ))}
//               <Button variant="contained" color="primary" sx={{ borderRadius: '8px', px: 3 }}>
//                 Contact Us
//               </Button>
//             </Box>

//             {/* Mobile Toggle */}
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ display: { md: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Mobile Menu Drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         PaperProps={{ sx: { width: 250, bgcolor: 'secondary.main', color: '#fff' } }}
//       >
//         <List>
//           {navItems.map((item) => (
//             <ListItem key={item} disablePadding>
//               <ListItemButton onClick={handleDrawerToggle}>
//                 <ListItemText primary={item} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//           <Box sx={{ p: 2 }}>
//             <Button variant="contained" fullWidth color="primary">Contact Us</Button>
//           </Box>
//         </List>
//       </Drawer>
//     </>
//   );
// }


const Navbar = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#About' },
    { label: 'Packages', href: '#Packs' },
    { label: 'CONTACT', href: '#CU' },
  ];
const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const [mounted, setMounted] = useState(false);
const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <AppBar
      position="fixed"
      className={`${mounted ? 'animate-navbar-enter ,animate-navbar-down' : ''} `}
      sx={{
        backgroundColor: isSticky ?' #0f172b': 'transparent',
        boxShadow: isSticky ? '0 6px 20px rgba(0,0,0,0.25)' : 'none',
        transition: 'box-shadow 0.3s ease , background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          {/* Logo */}
           <Link to="/">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="logo" className='h-12.5' />
                <span className="text-[#ffffff] font-bold text-lg">Honest Egy</span>
              </div>
           </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              // <Link to="/">
                <a
                  href={link.href}
                  key={link.label}
                  className="opacity-0 animate-link-drop text-white  font-medium cursor-pointer  hover:text-[#FFB300]"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                  }}
                  
                >
                  {link.label}
                </a>
              // </Link>
            ))}
          </div>

          {/* Join Us Button */}
          <Link to="/invest">
          <Button
            variant="outlined"
            sx={{
              color: '#FFB300',
              borderColor: '#FFB300',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: '25px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#FFB300',
                color: '#FFFFFF',
                borderColor: '#FFB300',
              },
            }}
          >
            Join Us
          </Button></Link>
          
              {/* Mobile Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 250, bgcolor: 'secondary.main', color: '#fff' } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ p: 2 }}>
            <Button variant="contained" fullWidth color="primary">Contact Us</Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
