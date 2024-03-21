import React from 'react';

const BigContainer: React.FC = () => {
  return (
    <section>
      <div className="bigcontainer">
        <div className="column">
          <p>Basic</p>
          <h3>FREE</h3>
          <p className="small">Free plan for all users</p>
          <ul>
            <li>Unlimited URL Shortening</li>
            <li>Basic Link Analytics</li>
            <li>Customizable Short Links</li>
            <li>Standard Support</li>
            <li>Ad-supported</li>
          </ul>
        </div>
        <div className="column1">
          <p>Professional</p>
          <h3>$15/month</h3>
          <p className="small">Ideal for business creators</p>
          <ul>
            <li>Enhanced Link Analytics</li>
            <li>Custom Branded Domains</li>
            <li>Advanced Link Customization</li>
            <li>Priority Support</li>
            <li>Ad-free Experience</li>
          </ul>
        </div>
        <div className="column2">
          <p>Teams</p>
          <h3>$25/month</h3>
          <p className="small">Share with up to 10 users</p>
          <ul>
            <li>Team Collaboration</li>
            <li>User Roles and Permissions</li>
            <li>Enhanced Security</li>
            <li>API Access</li>
            <li>Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
      <div className="btncontainer">
        <a href="#" className="btn3">Get Custom Pricing</a>
        <a href="#" className="btn4">Select Pricing</a>
      </div>
    </section>
  );
}

export default BigContainer;
