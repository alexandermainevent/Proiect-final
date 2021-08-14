import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 300px;
`;
export const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 48px;
  line-height: 72px;
  margin-bottom: 30px;
  font-family: sans-serif;
`;
export const Button = styled.div`
  display: block;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 10px;
  border-radius: 17px;
  border: 1px solid lightcoral;
  background-color: coral;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
`;
