import React, { useState } from 'react';
import axios from 'axios';

const FormSection: React.FC = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalURL(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://url-shortener-service.p.rapidapi.com/shorten',
        { url: originalURL },
        {
          headers: {
            'X-RapidAPI-Key': 'f581c7c90amsh71ceb571d9e980bp1a87b9jsne1c08aadf51a',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
          }
        }
      );
      setShortenedURL(response.data.result_url);
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
    }
  };

  return (
    <section className="formsection">
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Paste URL here..." className="input1" value={originalURL} onChange={handleInputChange} />
        <button type="submit" className="submit">Trim Url <img src="/Assets/magic wand.svg" alt="Magic wand" /></button>
        <img src="/Assets/magic wand.svg" alt="Magic wand" id="magicwand" />
        <p>By clicking TrimURL, I agree to the <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and
          Use of Cookies.</p>
      </form>
      {error && <p>{error}</p>}
      {shortenedURL && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">{shortenedURL}</a>
        </div>
      )}
    </section>
  );
};

export default FormSection;
