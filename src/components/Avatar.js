import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import TiPencil from 'react-icons/lib/ti/pencil';
import MdPerson from 'react-icons/lib/md/person';
import { get } from 'lodash';
import { darkRed, brandBlue } from '../colors';

const SIZES = {
  small: 31,
  medium: 47,
  large: 83,
  huge: 116
};

const Avatar = ({ firebase, badge, size, editable, uid, avatarUrl }) => {
  const onFilesDrop = (files) => (
    firebase
      .uploadFile('avatars', files[0], 'avatars', { name: uid })
      .then((response) => firebase.updateProfile({ avatarUrl: response.File.downloadURL, avatarKey: response.key }))
      .catch(err => console.error(err))
  );

  const url = avatarUrl ? avatarUrl : 'https://s3.amazonaws.com/scriptd-avatars/32.png';

  return (
    <Dropzone onDrop={onFilesDrop} disabled={!editable} multiple={false} style={{}}>
      <Frame size={size} imgSrc={url}>
        { badge == 'pencil' && <Badge><TiPencil /></Badge> }
        { badge == 'logo' && <Badge>S</Badge> }
      </Frame>
    </Dropzone>
  );
};

Avatar.propTypes = {
  uid: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  badge: PropTypes.string,
  size: PropTypes.string,
};

const mapStateToProps = ({ firebase: { auth, profile, data }}, ownProps) => ({
  editable: !ownProps.author && auth.uid == ownProps.uid,
  avatarUrl: get(data, ownProps.author ? `authors.${ownProps.uid}.avatar` : `users.${ownProps.uid}.avatarUrl`),
  profile,
});

export default compose(
  firebaseConnect(({ uid, author }) => [author ? `authors/${uid}/avatar` : `users/${uid}/avatarUrl`]),
  connect(mapStateToProps)
)(Avatar);

const Placeholder = glamorous.div({
  width: '100%',
  height: '100%',
  background: brandBlue,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Badge = glamorous.div({
  fontFamily: 'Superclarendon-Regular',
  position: 'absolute',
  background: brandBlue,
  borderRadius: '50%',
  right: 0,
  bottom: 0,
  width: '20%',
  height: '20%',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const Frame = glamorous.div({
  borderRadius: '50%',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  border: 'solid 1px #ffffff',
  position: 'relative'
}, ({ size, imgSrc }) => ({
  width: `${SIZES[size]}px`,
  height: `${SIZES[size]}px`,
  background: imgSrc ? `url(${imgSrc}) center/cover no-repeat` : null
}));
