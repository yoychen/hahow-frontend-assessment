import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SaveBtnWrapper = styled.div`
  margin: 1em 0;
`;
const Button = styled.button`
  min-width: 130px;
  padding: 0.25em;
  font-size: 1.25em;
`;
const Status = styled.div`
  margin-bottom: 0.5em;
`;

export default function SaveBtn({ onSave, isLoading, availablePoints }) {
  const btnDisabled = isLoading || availablePoints > 0;

  return (
    <SaveBtnWrapper>
      <Status>剩餘點數： {availablePoints}</Status>
      <Button onClick={onSave} disabled={btnDisabled}>
        {isLoading ? "Uploading" : "儲存"}
      </Button>
    </SaveBtnWrapper>
  );
}

SaveBtn.propTypes = {
  onSave: PropTypes.func.isRequired,
  availablePoints: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
