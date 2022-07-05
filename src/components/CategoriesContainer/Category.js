import styled from 'styled-components'

const Category = ({ title }) => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>{title}</Heading>
        <p>Shop Now</p>
      </HeadingContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px solid black;
  display: grid;
  place-content: center;
  grid-column: span 2;
`
const HeadingContainer = styled.div`
  text-align: center;
  padding: 16px;
  border: 1px solid black;
`
const Heading = styled.h2`
  font-size: 1.5rem;
`

export default Category
