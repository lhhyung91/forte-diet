import styled from "styled-components";

const StyleReviewBox = styled.div`
  position: relative;

  label {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0); /* IE 6,7 */
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }

  input {
    width: 660px;
    height: 30px;
    outline: none;
    border: 1px solid #395b9d;
    border-radius: 5px;
    background-color: #fefdf8;
    padding: 0 15px;
    margin: 15px 0;
  }

  textarea {
    width: 660px;
    min-height: 160px;
    outline: none;
    border: 1px solid #395b9d;
    border-radius: 5px;
    padding: 20px 15px;
    background-color: #fefdf8;
  }

  p {
    position: absolute;
    left: 15px;
    bottom: -25px;
    color: #ff0000;
    font-size: 12px;
    margin: 5px 0;
  }
`;

export default StyleReviewBox;
