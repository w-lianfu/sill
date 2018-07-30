// @flow
import styled from 'styled-components';

import COLOR from './color';

const SNav = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 320px;
  height: 46px;
  position: fixed;
  bottom: 0;
  left: auto;
  display: flex;
  border-top: 1px solid ${COLOR.eee};

  a, div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${COLOR.c666};

    &.active {
      color: ${COLOR.sred};
    }

    i { font-size: 24px; line-height: 1; }
    label {
      font-size: 12px;
      line-height: 1;
      margin-top: 3px;
    }
  }
`;

export default SNav;
