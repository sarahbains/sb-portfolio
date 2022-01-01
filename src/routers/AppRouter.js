import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainPage from '../pages/MainPage'
import ProjectsPage from '../pages/ProjectsPage';
import SingleProjectPage from '../pages/SingleProjectPage';
import ScrollToTop from './ScrollToTop';
import ParticlesComponant from '../components/ParticlesComponant';

function App() {
  return (
    <Router>
      <ScrollToTop>
      {/* <ParticlesComponant/> */}
      <Header/>
      <div>
          <Route path="/" exact> <MainPage/> </Route>
          <Route path="/all-projects" exact> <ProjectsPage/> </Route>
          <Route path="/project/:slug"> <SingleProjectPage/> </Route>
          <Route path="/project/:liveurl"> </Route>
          <Footer />
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
