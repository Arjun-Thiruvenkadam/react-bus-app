/**
 *
 * StyledInput
 *
 */

import styled from 'styled-components';

const StyledInput = styled.input`
  .InputElement {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .InputElement:focus {
    outline: none;
    background-color: #ccc;
  }

  .Invalid {
    border: 1px solid red;
    background-color: #fda49a;
  }
`;

export default StyledInput;
