import PropTypes from 'prop-types'

function Child(props) {
  const { text, abc, isBook ,foo } = props
  console.log(props)

  return(
    <>
      <h1>{text}</h1>
      <p>{abc}</p>
      <button onClick={foo}>Click me!</button>
    </>
  )
}

Child.propTypes = {
  text: PropTypes.string.isRequired,
  abc: PropTypes.number.isRequired,
}

Child.defaultProps = {
  text: '沒給文字',
  abc: 0,
}

export default Child
