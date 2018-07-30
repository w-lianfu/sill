// @flow
import styled from 'styled-components';

import color from './color';

// const FlexCenter = styled.div`
//   display: flex;
//   align-items: center;
//   justify-conent: center;
// `;

const HomeTopComp = styled.ul`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${color.eee};
`;

const FlexBox = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SillButton = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  margin: 0;
  padding: 0;
  margin-right: 10px;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid ${color.fff};
  border-bottom: 3px solid ${color.fff};

  &.active {
    border-bottom: 3px solid ${color.sred};
  }
`;

export {
  HomeTopComp,
  FlexBox,
  SillButton,
}
