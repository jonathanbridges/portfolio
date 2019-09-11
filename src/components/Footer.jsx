import React from 'react';

export default class Footer extends React.Component {

  render () {
    return (
      <footer className="colorlib-footer">
        <p><small>
          This site made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true" />
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          <span>Thanks to <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for Inspiration</span></small></p>
        <ul>
          <li><a href="#"><i className="icon-facebook2" /></a></li>
          <li><a href="#"><i className="icon-twitter2" /></a></li>
          <li><a href="#"><i className="icon-instagram" /></a></li>
          <li><a href="#"><i className="icon-linkedin2" /></a></li>
        </ul>
      </footer>
    )
  }
}