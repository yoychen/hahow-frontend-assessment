import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  margin: 3em 0;
  text-align: center;
  font-weight: 600;
  color: #3a678b;
`;

export default function Loading() {
  return <LoadingWrapper>(Loading...)</LoadingWrapper>;
}
