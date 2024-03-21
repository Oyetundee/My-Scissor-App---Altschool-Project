import React from 'react';

const NewContainer: React.FC = () => {
  return (
    <section className="newcontainer">
      <div className="outercontainer">
        <div className="onestop">
          <h1>One Stop. <br /><span style={{ color: '#005AE2' }}>Four Possibilities</span>.</h1>
        </div>
        <div className="besideonestop">
          <div className="textcontainer">
            <h1>3M</h1>
            <p>Active users</p>
          </div>
          <div className="textcontainer">
            <h1>60M</h1>
            <p>Links & QR codes created</p>
          </div>
          <div className="textcontainer">
            <h1>1B</h1>
            <p>Clicked & Scanned connections</p>
          </div>
          <div className="textcontainer">
            <h1>300k</h1>
            <p>App Integrations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewContainer;
