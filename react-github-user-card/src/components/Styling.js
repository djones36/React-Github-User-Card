import React from "react";
import Styled from "styled-components";

export const AppStyling = Styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: grey;
`;
export const CardStyling = Styled.div`
    padding: 2%;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: rgba(58, 57, 57, 0.582);;
    margin-bottom: 30px;
    display: flex;
    flex-direction:column;
    align-items:center;
`;

export const FollowerStyling = Styled.div`
    padding: 2%;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: rgba(58, 57, 57, 0.582);;
    margin-bottom: 30px;

    
`;

export const ImgStyling = Styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    
`;

export const ListStyling = Styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction: row;
`;

export const ListItem = Styled.li`
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding-left: 40px;
  font-size: 20px;
  letter-spacing: 10px;
`;

export const FollowerStyle = Styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content:center;
    width: 600px;

`;
