import React from "react"
import styled from "styled-components"

const Tag = props => <TagWrapper props={props}>{props.children}</TagWrapper>

const TagWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 6px 18px;
  cursor: pointer;

  background: ${props => props.props.background || "#1f1d1f"};
  color: ${props => props.props.color || "#DFD9B2"};
  font-size: ${props => props.props.fontSize || "12px"};
  font-weight: ${props => props.props.fontWeight || "400"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  /* Scale background */
  position: relative;
  display: inline-block;

  &::after {
    border-radius: 6px;
    background-color: #1f1d1f;
    transition: transform 250ms;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &:hover::after {
    transform: scale(1.1);
  }
`

export default Tag
