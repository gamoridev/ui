import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as button from '@emcasa/ui/lib/components/Button'
import Group from '@emcasa/ui/lib/components/Group'

import View from '../View'

const Button = styled.button`
  ${(props) => props.fluid && 'display: block'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  & :hover {
    background-color: ${({active, disabled, theme: {colors}}) =>
      active && !disabled ? colors.pink : colors.white};
  }
  ${button.container};
  ${button.text};
  -webkit-font-smoothing: antialiased;
`

Button.defaultProps = {
  ...button.container.defaultProps,
  ...button.text.defaultProps
}

Button.propTypes = {
  ...button.container.propTypes,
  ...button.text.propTypes,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.displayName = 'Button'

Button.Group = Group(({onSelect, selected, disabled}, node) => ({
  disabled,
  onClick: () => onSelect(node.props.value),
  active: selected
}))(View)

export default Button
