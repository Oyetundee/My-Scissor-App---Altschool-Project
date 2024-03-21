import React from 'react';

const Faqs: React.FC = () => {
  return (
    <section className="faqs">
      <img src="/Assets/Line 70.svg" height="30" alt="Line" />
      <h1 className="why">FAQs</h1>
      <div className="faqscontainer">
        <details>
          <summary>How does URL shortening work?</summary>
          <div>
            <p>
              URL shortening works by taking a long URL and creating a shorter, condensed version that redirects
              to the original URL. When a user clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
          </div>
        </details>
        <details>
          <summary>Is it necessary to create an account to use the URL shortening service?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>Are the shortened links permanent? Will they expire?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>Are there any limitations on the number of URLs I can shorten?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>Can I customize the shortened URLs to reflect my brand or content?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>Can I track the performance of my shortened URLs?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>How secure is the URL shortening service? Are the shortened links protected against spam or
            malicious activity?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>What is a QR code and what can it do?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
        <details>
          <summary>Is there an API available for integrating the URL shortening service into my own applications
            or websites?</summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default Faqs;
