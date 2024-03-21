import React from 'react';

const Container2: React.FC = () => {
  return (
    <section className="container2">
      <div className="outercontainer1">
        <div className="innercontainer">
          <img src="/Assets/Line 70.svg" alt="line70" />
          <h1 className="why">Why choose <span style={{ color: '#005AE2' }}>Scissors</span></h1>
          <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs,
            allow you creating custom ones for your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advanced analytics for all of these is second to none.</p>
        </div>
        <div className="innerflexbox">
          <div className="textbox">
            <img src="/Assets/Group 6.svg" alt="group6" />
            <h3>URL Shortening</h3>
            <p>Scissors allows you to shorten URLs of your business, events. Shorten your URL at scale, URL
              redirects.</p>
          </div>
          <div className="textbox">
            <img src="/Assets/custom.svg" alt="custom" />
            <h3>Custom URLs</h3>
            <p>With Scissors, you can create custom URLs, with the length you want! A solution for socials and
              businesses.</p>
          </div>
          <br />
          <div className="textbox">
            <img src="/Assets/Qr.svg" alt="qr" />
            <h3>QR Codes</h3>
            <p>Generate QR codes for your business, events. Bring your audience and customers to your doorstep
              with this scan and go solution.</p>
          </div>
          <div className="textbox">
            <img src="/Assets/Data.svg" width="40" alt="data" />
            <h3>Data Analytics</h3>
            <p>Receive data on the usage of either your shortened URL, custom URLs, or generated QR codes.
              Embedded to monitor progress.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Container2;
