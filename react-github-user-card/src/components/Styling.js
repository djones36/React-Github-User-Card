import React from "react";
import Styled from "styled-components";

export const AppStyling = Styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-items: center;
`;
export const CardStyling = Styled.div`
    padding: 2%;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: rgba(58, 57, 57, 0.582);;
    margin-bottom: 30px;
`;

export const ImgStyling = Styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;

export const ListStyling = Styled.ul`
    list-style-type: none;
`;
