import React, { Fragment } from 'react';

import './About.css';

const About = ({ profile }) => {
  return (
    <Fragment>
      {profile !== null ? (
        <div className="About">
          <div className="About__item">
            <p>
              <strong>Birthday:</strong>
            </p>
            <span>{profile.birthday}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>Location:</strong>
            </p>
            <span>{profile.location}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>Gender:</strong>
            </p>
            <span>{profile.gender}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>Relationship:</strong>{' '}
            </p>
            <span>{profile.relationshipStatus}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>High School:</strong>{' '}
            </p>
            <span>{profile.highSchool}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>Mobile:</strong>
            </p>
            <span>{profile.mobile}</span>
          </div>
          <div className="About__item">
            <p>
              <strong>About Me:</strong>{' '}
            </p>
            <span>{profile.aboutMe}</span>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default About;
