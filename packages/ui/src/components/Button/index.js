import PropTypes from 'prop-types'
import {
  color,
  space,
  fontFamily,
  flex,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system'
import {css} from 'styled-components'

import {
  letterSpacing,
  buttonHeight,
  fontSize,
  defaultFontFamily
} from '../../styles'

const buttonProps = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool
}

export const container = css`
  padding: 0 20px 0 20px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({active, disabled, theme: {colors}}) =>
    active && !disabled ? colors.pink : colors.lightGrey};
  background-color: ${({active, disabled, theme: {colors}}) =>
    active && !disabled ? colors.pink : colors.white};
  width: ${({fluid}) => (fluid ? '100%' : 'auto')};
  ${buttonHeight}
  ${space}
  ${flex}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

container.propTypes = {
  ...buttonProps,
  ...buttonHeight.propTypes,
  ...space.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

container.defaultProps = {
  height: 'medium',
  fluid: false
}

export const text = css`
  color: ${({active, disabled, theme: {colors}}) => {
    if (disabled) return colors.disabled
    else if (active) return colors.white
    else return colors.dark
  }};
  ${defaultFontFamily}
  ${letterSpacing}
  ${fontFamily}
  ${fontSize}
  ${color}
`

text.propTypes = {
  ...buttonProps,
  ...letterSpacing.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
}

text.defaultProps = {
  fontSize: 'default'
}
