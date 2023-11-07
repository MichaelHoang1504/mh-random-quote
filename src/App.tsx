import { useState } from 'react';
import quotes from './assets/quotes.json';
import {FaTwitter,FaTumblr,FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
}
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const randomQuote = (): Quote => {
  return quotes.quotes[Math.floor(Math.random()*quotes.quotes.length)];
}
const randomColor = () => {
  return colors[Math.floor(Math.random()*colors.length)];
}
function App() {
  const [quote, setQuote] = useState<Quote>(randomQuote());
  const [color, setColor] = useState(randomColor());
  const newQuote = () => {
    setQuote(randomQuote());
    setColor(randomColor());
  };

  return (
    <div className='background' style={{backgroundColor:color}}>
    <div id='quote-box'>
      <div className='quote-content' style={{color: color}}>
        <div id ='text'>
          <FaQuoteLeft className='left' style={{marginRight:'10px'}} />
          <span className='quote-text'>{quote.quote}</span>
          <FaQuoteRight className='right' style={{margin:'10pLeftx'}} />
        </div>
        <div id='author'>- {quote.author}</div>
      </div>
      <div className='buttons'>
        <a className="button" href='twitter.com/intent/tweet' id='tweet-quote' target="_top" title="Tweet this quote!" style={{backgroundColor:color}}>
          <FaTwitter />
        </a>
        <a className="button" href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DVince%2BLombardi%26content%3DWinning%2Bisn%25E2%2580%2599t%2Beverything%252C%2Bbut%2Bwanting%2Bto%2Bwin%2Bis.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button' id='tumblr-quote' target="_blank" title="Post this quote on tumblr!" style={{backgroundColor:color}}>
          <FaTumblr />
        </a>
        <button className="button" id="new-quote" onClick={newQuote} style={{backgroundColor:color}}>New quote</button>
      </div>
    </div>
    </div>
  )
}

export default App
