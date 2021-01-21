import React, { Fragment,useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../form-elements/Button'

import {authStart} from '../../store/actions/auth'
import {getProfile} from '../../store/actions/profile'
import profileDefaultIcon from '../../assets/profileDefault__icon.PNG';
import './Avatar.css';

const Avatar = (props) => {
useEffect(()=>{
  props.authStart();
  props.getProfile();
},[])

  return (
    <div className="Avatar">
      {props.defaultAvatar ? (
        <img
          src={profileDefaultIcon}
          style={{
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius,
          }}
        />
      ) : (
        <Fragment>
          {props.profile !== null /*&& props.auth.user._id === props.profile.user._id*/ && !props.buzzAvatar ? (
            <Button to="/profile">

              <img
                src={`data:image/jpeg;base64,${props.avatar}`}
                alt="profileImg"
                style={{
                  width: props.width,
                  height: props.height,
                  borderRadius: props.borderRadius,
                }}
              />
            </Button>
          ) : (
            <img
              src={`data:image/jpeg;base64,${props.buzzAvatar}`}
              alt={props.alt}
              onClick={props.onClick}
              style={{
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
              }}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  buzz: state.buzz,
  auth: state.auth,
});

export default connect(mapStateToProps, {authStart,getProfile})(Avatar);
