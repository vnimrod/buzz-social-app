import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../../shared/form-elements/Button';
import trashIcon from '../../assets/trash__icon.PNG';
import { deleteEducation } from '../../store/actions/profile';

import './Education.css';

const Education = ({ education, deleteEducation, deleteNull }) => {
  return (
    <div className="Education">
      {education.map((edu) => {
        return (
          <Fragment>
            <div className="Education__items">
              {education === null ? null : (
                <Fragment>
                  <div className="Education__items_info">
                    <div className="Education__item">
                      <p>
                        <strong>College:</strong>
                      </p>
                      <span>{edu.college}</span>
                    </div>
                    <div className="Education__item">
                      <p>
                        <strong>Degree:</strong>
                      </p>
                      <span>{edu.degree}</span>
                    </div>
                    <div className="Education__item">
                      <p>
                        <strong>Field Of Study:</strong>
                      </p>
                      <span>{edu.fieldofstudy}</span>
                    </div>
                  </div>
                  {deleteNull === null ? null : (
                    <div className="Education__items__trash-icon">
                      <Button
                        onClick={() => deleteEducation(edu._id)}
                        style={{ border: 'none' }}
                        type="button"
                      >
                        <img src={trashIcon} alt="trashicon" />
                      </Button>
                    </div>
                  )}
                </Fragment>
              )}
            </div>
            <hr className="hr" />
          </Fragment>
        );
      })}
    </div>
  );
};

export default connect(null, { deleteEducation })(Education);
