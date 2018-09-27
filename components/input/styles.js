import styled from 'styled-components'
import COLORS from 'shared/colors'
import MEASURES from 'shared/measures'

const Input = styled.input`
  -webkit-appearance: none;
  outline: none;

  font-size: ${MEASURES.font.default};
  letter-spacing: ${MEASURES.defaultLetterSpacing};
  padding: 18px 14px 18px 14px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${props => props.active && !props.disabled ? COLORS.pink : COLORS.lightGrey};

  color: ${props => props.disabled ? COLORS.disabled : COLORS.dark};

  height: ${MEASURES.buttonHeight.tall};

  :focus {
    border-color: ${COLORS.blue};
  }

  ::placeholder {
    color: ${COLORS.disabled}
  }
`

export default Input
