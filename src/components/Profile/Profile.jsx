import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AbilityCounter from "./AbilityCounter";
import SaveBtn from "./SaveBtn";
import Loading from "../Loading";
import devices from "../../utils/devices";

const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
`;

const Col = styled.div`
  flex-basis: 100%;
  padding: 1em;
  box-sizing: border-box;

  @media screen and ${devices.sm} {
    flex-basis: 50%;
  }
`;

const StatusCol = styled(Col)`
  @media screen and ${devices.sm} {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export default function Profile({
  fetchProfile,
  clearProfile,
  onAbilityChange,
  heroId,
  profile,
  availablePoints,
}) {
  useEffect(() => {
    fetchProfile(heroId);

    return () => clearProfile();
  }, [fetchProfile, clearProfile, heroId]);

  const noMorePoint = availablePoints === 0;

  if (!profile) {
    return <Loading />;
  }

  return (
    <ProfileWrapper>
      <Col>
        {Object.entries(profile.abilities).map(([name, count]) => (
          <AbilityCounter
            onChange={(newCount) => onAbilityChange(name, newCount)}
            key={name}
            name={name}
            count={count}
            noMorePoint={noMorePoint}
          />
        ))}
      </Col>
      <StatusCol>
        <SaveBtn />
      </StatusCol>
    </ProfileWrapper>
  );
}

Profile.defaultProps = {
  profile: null,
};

Profile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  onAbilityChange: PropTypes.func.isRequired,
  heroId: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    abilities: PropTypes.objectOf(PropTypes.number),
    totalPoints: PropTypes.number,
  }),
  availablePoints: PropTypes.number.isRequired,
};
