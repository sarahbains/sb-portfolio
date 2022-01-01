import Home from '../components/Home';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

function MainPage() {
    return (
        <div className="main-content wrapper">
            <Home/>
            <About/>
            <FeaturedProjects/>
            <Contact/>
        </div>
    )
}

export default MainPage
