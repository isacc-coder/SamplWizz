import styled from 'styled-components'
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  BOX_BORDER,
  CONTAINER_PADDING,
  CONTENT_MIN_WIDTH,
  CONTENT_WIDTH,
  FONT_SIZE,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
} from './BaseStyle';


export const ContentContainer = styled.div`
  padding: ${CONTAINER_PADDING};
  text-align: center;
  /* background-color: ${BACKGROUND_COLOR}; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: ${CONTENT_WIDTH};
  min-width: ${CONTENT_MIN_WIDTH};
  justify-content: center;
  font-size: ${FONT_SIZE};
`;

export const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;

export const AccordionListContainer = styled.div<{ t: boolean }>`
  width: 100%;
  border-radius: none;
	
  .MuiAccordion-root {
		margin-top: 15px;
    box-shadow: none;
    background: ${({ t }) => t ? SECONDARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR_DARK};
    border-radius: none;
    /* border: ${BOX_BORDER}; */
    /* border-radius: ${BORDER_RADIUS}; */
  }

  .MuiAccordionDetails-root {
    padding: 0 0 ${CONTAINER_PADDING} 0;
  }

  .MuiTypography-root {
    font-weight: bold;
    margin: 0 auto;
  }
`;

export const ButtonBlock = styled.span`
  .MuiOutlinedInput-root {
    border-radius: ${BORDER_RADIUS};
  }

  .MuiButton-outlinedSizeLarge {
    padding: 8px 5px;
  }

  .MuiButton-root {
    margin: 0 5px;
    min-width: 42px;
    border-radius: ${BORDER_RADIUS};

    .MuiButton-startIcon {
      margin: 0;
    }

    svg {
      font-size: 24px;
    }
  }
`;

export const AccordionListCount = styled.span`
  margin-left: 3px;
`;

export const ErrorContainer = styled.div`
  margin: 50px;
  font-size: 25px;

  svg {
    margin-bottom: 20px;
  }
`;
