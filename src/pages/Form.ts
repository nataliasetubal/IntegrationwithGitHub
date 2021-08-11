// import { FormEvent } from 'react';

import styled, { css } from 'styled-components'
interface FormProps {
    hasError: boolean
  }

 const Form = styled.form<FormProps>`
    ${(props: { hasError: any }) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
`

export {Form}