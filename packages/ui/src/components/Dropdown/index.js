import {css} from 'styled-components'
import {themeGet, color, width, maxHeight, textAlign} from 'styled-system'
import PropTypes from 'prop-types'

import {buttonHeight, fontSize} from '../../styles'
import {container as row} from '../Row'
import {container as col} from '../Col'

/**
 * Dropdown component structure:
 *
 * <target>
 *   <button></button>
 *   <container>
 *     <option />
 *     <option />
 *   </container>
 * <target>
 */

export const container = css`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-width: 1px;
  border-color: ${themeGet('colors.lightGrey')};
  border-top-width: 0px;
  padding-top: 5px;
  background-color: white;
  ${maxHeight};
`

container.contentContainer = css`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  ${col};
`

container.propTypes = {
  focused: PropTypes.bool,
  /**
   * Target element ref
   */
  target: PropTypes.object,
  /**
   * Triggers dropdown focus
   */
  onDropdownFocus: PropTypes.func,
  onDropdownBlur: PropTypes.func,
  ...width.propTypes,
  ...col.propTypes
}

export const button = css`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({focused, theme}) =>
    focused ? theme.colors.blue : theme.colors.lightGrey};
  background-color: white;
  ${row};
  ${width};
  ${buttonHeight};
`

button.textContainer = css`
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
`

button.text = css`
  color: ${themeGet('colors.dark')};
  ${textAlign};
  ${fontSize};
  ${color};
`

button.propTypes = {
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func,
  ...width.propTypes,
  ...buttonHeight.propTypes,
  ...textAlign.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...row.propTypes
}

export const option = css`
  flex-direction: row;
  align-items: center;
  margin: 0 5px 5px;
  padding: 0 10px;
  height: ${themeGet('buttonHeight.1')}px;
  border-width: 1px;
  border-color: ${({selected, theme}) =>
    selected ? theme.colors.pink : 'transparent'};
  border-radius: 4px;
  background-color: transparent;
  ${row};
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
`

option.text = css`
  text-align: left;
  ${fontSize};
  ${color};
`

option.hover = css`
  border-color: ${themeGet('colors.pink')};
`

option.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...row.propTypes
}

export const propTypes = {
  containerProps: PropTypes.shape(container.propTypes),
  ...button.propTypes
}
