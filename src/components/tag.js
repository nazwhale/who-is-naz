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
  letter-spacing: 2px;

  background: ${props => props.props.background || "#002E4D"};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "12px"};
  font-weight: ${props => props.props.fontWeight || "400"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`

export default Tag
