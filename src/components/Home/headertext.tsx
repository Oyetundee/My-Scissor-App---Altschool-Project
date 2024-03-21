import React from 'react';
import { Link } from 'react-router-dom';

const HeaderText: React.FC = () => {
  return (
    <section className="container">
      <div className="headertext">
        <h1>Optimize Your Online Experience with Our Advanced <span style={{ color: '#005AE2' }}> URL Shortening </span>
            Solution</h1>
        <img src="Assets/Vector3.svg" alt="line" id="line" />
        <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links,
            and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            <Link to="/signUp" className="btn2">Sign up</Link>
        <a href="#" className="text2">Learn more</a>
      </div>
    </section>
  );
}

export default HeaderText;
