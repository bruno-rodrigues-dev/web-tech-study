const Footer = (props) => {
  const footerStyle = {
    background: '#BEBEBE',
    padding: '20px',
    textAlign: 'center',
    borderTop: '2px solid #696969'
  }

  const textStyle = {
    margin: 0,
    color: '#191970'
  }

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>{props.text}</p>
    </footer>
  )
}

export default Footer