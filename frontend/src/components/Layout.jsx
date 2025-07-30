import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import CursorTrail from './CursorTrail';

function Layout() {
  return (
    <>
      <CursorTrail />
      <CustomCursor />
      <div className='min-h-screen flex flex-col'>
        <Navigation />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
