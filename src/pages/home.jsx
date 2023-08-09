import { Outlet, Link, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
    </>
  );
};
export default Home;
