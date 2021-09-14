import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const About = React.lazy(() => import("./components/pages/About"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Portfoliogrid = React.lazy(() => import("./components/pages/Portfoliogrid"));
const Portfolioslider = React.lazy(() => import("./components/pages/Portfolioslider"));
const Portfoliomasonary = React.lazy(() => import("./components/pages/Portfoliomasonary"));
const Portfoliodetails = React.lazy(() => import("./components/pages/Portfoliodetails"));
const Service = React.lazy(() => import("./components/pages/Service"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
const Whyus = React.lazy(() => import("./components/pages/Whyus"));
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Ongrid = React.lazy(() => import("./components/pages/OnGrid"));
const Offgrid = React.lazy(() => import("./components/pages/OffGrid"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Preloader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home-v2" component={Hometwo} />
          <Route path="/home-v3" component={Homethree} />
          <Route path="/about" component={About} />
          <Route path="/blog-standard" component={Blogstandard} />
          <Route path="/blog-grid" component={Bloggrid} />
          <Route path="/blog-details" component={Blogdetails} />
          <Route path="/portfolio-grid" component={Portfoliogrid} />
          <Route path="/portfolio-slider" component={Portfolioslider} />
          <Route path="/portfolio-masonary" component={Portfoliomasonary} />
          <Route path="/portfolio-details" component={Portfoliodetails} />
          <Route path="/services" component={Service} />
          <Route path="/service-details" component={Servicedetails} />
          <Route path="/team" component={Team} />
          <Route path="/team-details" component={Teamdetails} />
          <Route path="/why-us" component={Whyus} />
          <Route path="/faq" component={Faqs} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/on-grid" component={Ongrid} />
          <Route path="/off-grid" component={Offgrid} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
