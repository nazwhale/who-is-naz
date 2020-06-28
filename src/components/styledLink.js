import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-transform: ${props => props.small && "uppercase"};
  letter-spacing: ${props => props.small && "0.2rem"};
  font-size: ${props => props.small && "12px"};

  box-shadow: none;

  &:hover {
    color: #e3340b;
  }
`
export default StyledLink
