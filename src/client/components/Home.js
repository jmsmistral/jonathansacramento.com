import React from 'react';

const Home = () => (
  <div>
    <div className="container">
      <div className="row">
        <img
          className="home__image"
          src="/profile.png"
          alt="profile"
          width="150"
          height="150"
        />
        <div className="flex-column">
          <h1 className="home__title">JONATHAN SACRAMENTO</h1>
          <h2 className="home__subtitle">
            I love writing
            {' '}
            <span className="letter-changer" />
            {' '}
            code.
          </h2>
        </div>
      </div>
      <p className="home__blurb">I work as an Lead Engineer for Oliver Wyman (OW Digital) based in Barcelona.</p>

      <p>I help clients make better business decisions through data-driven applications. I bring strong delivery focus and attention to detail, combined with a track-record of implementing complex software projects, managing multi-disciplinary teams and deep business understanding.</p>
      <p>These are some of the clients I've worked with.</p>
      <p>Previously I've worked as a Consultant for Oliver Wyman. I also co-founded a startup developing decision-support tools for clients in the telco space. Checkout my LinkedIn for more!</p>
      <p>When I'm not working, I like to spend time outdoors, meditate, and code pet-projects.</p>
      <p>Get in touch if you want to chat!</p>
    </div>
  </div>
);

export default Home;
