import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AbilityCounter from "./AbilityCounter";
import SaveBtn from "./SaveBtn";
import Loading from "../Loading";

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
    <div>
      {Object.entries(profile.abilities).map(([name, count]) => (
        <AbilityCounter
          onChange={(newCount) => onAbilityChange(name, newCount)}
          key={name}
          name={name}
          count={count}
          noMorePoint={noMorePoint}
        />
      ))}
      <SaveBtn />
    </div>
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
