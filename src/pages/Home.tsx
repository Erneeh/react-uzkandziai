
import About from '../containers/About';
import HPHeading from '../containers/HPHeading';
import Photos from '../containers/PhotosDiv';

function Home()  {
  return <>
  <div className="bg-backgroundColor text-headerFooterText py-24 sm:py-2 ">
    <HPHeading></HPHeading>
    <About></About>
    <Photos></Photos>
  </div>
  </>
};

export default Home;