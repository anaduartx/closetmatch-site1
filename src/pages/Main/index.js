import NavBar from '../../components/NavBar';
import Home from '../Home';
import QuemSomos from '../QuemSomos';
import ComoFunciona from '../ComoFunciona';
import Faq from '../Faq';
import Tutorial from '../Tutorial';
import Download from '../Download';

export const Main = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <QuemSomos />
      <ComoFunciona />
      <Faq />
      <Tutorial />
      <Download />
    </div>
  );
}