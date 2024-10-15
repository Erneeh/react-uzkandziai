
import About from '../containers/About';
import Heading from '../containers/Heading';
import Photos from '../containers/Photos';

function Home()  {
  return <>
  <div className="bg-backgroundColor text-headerFooterText py-24 sm:py-2 ">
    <Heading></Heading>
    <About></About>
    <Photos></Photos>
  </div>
  </>
};

export default Home;