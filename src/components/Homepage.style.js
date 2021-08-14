import React from "react";
import styled from "styled-components";
import {
  FaHouseDamage,
  FaBell,
  FaEnvelope,
  FaRegUserCircle,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.push("login");
  };

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
        <FaRegUserCircle size="20" onClick={handleLogOut} />
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
  cursor: pointer;
`;

export const HomeContainer = styled.div`
  background-color: lightgray;
  height: 100vh;
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
