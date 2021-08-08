import React from "react";
import styled from "styled-components";
import {
  FaHouseDamage,
  FaBell,
  FaEnvelope,
  FaRegUserCircle,
} from "react-icons/fa";

export const Search = () => {
  return (
    <Container>
      <Icons>
        <FaHouseDamage size="20" />
      </Icons>
      <SearchBar type="text" placeholder="Search" />
      <Icons>
        <FaBell size="20" />
      </Icons>
      <Icons>
        <FaEnvelope size="20" />
      </Icons>
      <Icons>
        <FaRegUserCircle size="20" />
      </Icons>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 0;

  display: flex;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const HomeContainer = styled.div`
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
`;

const SearchBar = styled.input`
  display: block;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  max-width: 800px;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 17px;
`;
