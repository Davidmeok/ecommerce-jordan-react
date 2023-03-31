import { IconArrowDownZa, IconArrowUpAz, IconMagnifyingGlass } from '@/components'
import styled from 'styled-components'

const SearchOptionsStyled = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const FormStyled = styled('form')`
  font-size: clamp(1rem, 1vw, 2rem);
  flex-grow: 1;
  position: relative;
`
const WrapperMagnifyingGlass = styled('button')`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(50%,-50%);
  width: clamp(1rem, 1.5vw, 3rem);
  height: clamp(1rem, 1.5vw, 3rem);

  & svg {
    fill: black;
  }
`
const InputStyled = styled('input')`
  width: 100%;
  border-radius: clamp(3rem, 3vw, 6rem);
  background-color: rgb(209, 208, 214);
  padding: clamp(.75rem, 1vw, 2rem) clamp(.75rem, 1vw, 2rem) clamp(.75rem, 1vw, 2rem) clamp(2rem, 3vw, 6rem);
  outline: none;
`
const WrapperIcons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.75rem, 1vw, 2rem);
`
const WrapperIcon = styled('button')`
  width: clamp(2.75rem, 4vw, 7rem);
  height: clamp(2.75rem, 4vw, 7rem);
  background-color: rgb(209, 208, 214);
  border-radius: clamp(1rem, 1vw, 2rem);
  padding: clamp(0.5rem, .5vw, 1rem);

  & svg {
    fill: black;
  }
`

const SearchOptions = () => {
  return (
    <SearchOptionsStyled>
      <FormStyled>
        <WrapperMagnifyingGlass><IconMagnifyingGlass /></WrapperMagnifyingGlass>
        <InputStyled type='search' name='' id='' placeholder='One Multicolor' />
      </FormStyled>
      <WrapperIcons>
        <WrapperIcon><IconArrowUpAz /></WrapperIcon>
        <WrapperIcon><IconArrowDownZa /></WrapperIcon>
      </WrapperIcons>
    </SearchOptionsStyled>
  )
}

export { SearchOptions }