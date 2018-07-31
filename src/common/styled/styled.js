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
  height: 2.6rem;
  display: flex;
  border-bottom: 1px solid ${color.eee};

  li {
    flex: 1;
    display: flex;

    &:nth-child(2) {
      justify-content: center;
    }
    &:last-child {
      justify-content: flex-end;
    }

    a {
      width: 100%;
      height: 100%;
      display: inline-flex;
      align-items: center;
    }
  }
`;

const FlexBox = styled.div`
  height: ${props => props.height ? props.height : '100%'};
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SillButton = styled.button`
  height: ${props => props.height ? props.height : '100%'};
  margin: 0 10px;
  padding: 0;
  border: none;
  background: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid ${color.fff};
  border-bottom: 3px solid ${color.fff};

  &.active {
    border-bottom: 3px solid ${color.sred};
  }

  i {
    position: absolute;
    right: -6px;
    top: 2px;
    transform: scale(0.5);
    font-size: 12px;
    color: ${color.sred};
  }
`;

export {
  HomeTopComp,
  FlexBox,
  SillButton,
}
