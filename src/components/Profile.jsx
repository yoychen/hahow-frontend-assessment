import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  padding: 2em;
`;

export default function Profile({ heroId }) {
  return <ProfileWrapper>{heroId}</ProfileWrapper>;
}

Profile.propTypes = {
  heroId: PropTypes.string.isRequired,
};
