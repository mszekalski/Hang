import React from "react";
import { Route, Link } from 'react-router-dom';

export default function() {
  return (
    <div className="splash-page-container">
      <div className="image-container">
        <img className="splash-image" src={window.staticImages.splashImage}/>
      </div>
      <div className="splash-content-container">
        <h1 className="splash-slogan">Where Productivity Occurs</h1>
        <p className="splash-paragraph">When your team needs to kick off a project,
          hire a new employee, deploy some code,
          review a sales contract,
          finalize next year's budget,
          measure an A/B test, plan your next office opening, and more,
          Hang has you covered.</p>

        <span className="splash-signup">
              <Link to="/signup">GET STARTED</Link>
          </span>
          <br/>
          <br/>
          <span className="splash-login">Already using Hang?
              <Link to="/login"> Sign in.</Link>
          </span>

      </div>
    </div>
  );
}
