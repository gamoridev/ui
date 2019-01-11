import React from 'react'
import styled from 'styled-components'
import * as field from '@emcasa/ui/lib/components/Field'
import View from '../View'
import Text from '../Text'

const LabelText = styled(Text).attrs({inline: true})`
  ${field.textContainer};
  ${field.label};
`

const ErrorText = styled(Text).attrs({inline: true})`
  ${field.textContainer};
  ${field.error};
`

function Field({
  hideLabelView,
  hideErrorView,
  label,
  error,
  children,
  Component,
  ...props
}) {
  return (
    <View>
      {!hideLabelView && <LabelText>{label}</LabelText>}
      {Component ? <Component {...props} /> : children}
      {!hideErrorView && <ErrorText>{error}</ErrorText>}
    </View>
  )
}

Field.propTypes = field.container.propTypes

Field.defaultProps = field.container.defaultPropTypes

export default Field
