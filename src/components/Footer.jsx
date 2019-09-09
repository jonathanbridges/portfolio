import React from 'react';

export default class Footer extends React.Component {

  render () {
    return (
      <footer classname="colorlib-footer">
        <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
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