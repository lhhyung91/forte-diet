import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IoWater } from 'react-icons/io5';
import { RiRestaurantFill } from 'react-icons/ri';

const StyledWaterDose = styled(IoWater)``;
const StyledCalories = styled(RiRestaurantFill)``;

const StyledNav = styled(motion.nav)`
  width: 150px;
  height: 395px;
  position: fixed;
  top: 100px;
  right: 10px;
  overflow: hidden;
  font-size: 1.3rem;
  z-index: 1;
  display: flex;
  border-radius: 5px;
`;

const StyledLi = styled(motion.li)`
  width: 85%;
  font-size: 1rem;
  text-align: center;
  padding: 1px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto 25px;
  border-radius: 5px;
  ${({ theme }) => css`
    background: linear-gradient(
      to bottom,
      ${theme.themePrimaryThick},
      ${theme.themePrimary}
    );
  `}

  div {
    display: flex;
    flex-flow: column nowrap;
    ${({ theme }) => css`
      background: ${theme.themeDefaultWhite};
    `}
    padding: 15px 0px 10px 0;
    border-radius: 4px;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      ${({ theme }) => css`
        color: ${theme.themePrimaryThick};
      `}
    }

    div {
      color: rgba(20, 24, 44, 0.8);
      padding: 2px;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }

    span {
      height: 7px;
    }
    ${StyledWaterDose} {
      width: 16px;
      height: 18px;
    }
    ${StyledCalories} {
      width: 16px;
      height: 18px;
      margin-right: 4px;
    }
  }
`;

const StyledHeader = styled(motion.div)`
  width: inherit;
  height: 40px;
  ${({ theme }) => css`
    background: linear-gradient(
      to left,
      ${theme.themePrimaryThick},
      ${theme.themePrimary}
    );
  `}
`;

const StyledContainer = styled(motion.div)`
  width: inherit;
  height: inherit;
  ${({ theme }) => css`
    background: ${theme.themeDefaultWhite};
  `}
  box-shadow: 1px 1px 2px 0;

  ${StyledHeader}
`;

const StyledUl = styled(motion.ul)`
  width: inherit;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px;

  ${StyledLi}
`;

const StyledButton = styled(motion.button)`
  padding: 13px 13px 5px 12px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  position: fixed;
  top: 101px;
  right: 10px;
  z-index: 2;
  background: none;
`;

export {
  StyledNav,
  StyledContainer,
  StyledUl,
  StyledLi,
  StyledWaterDose,
  StyledButton,
  StyledHeader,
  StyledCalories
};
