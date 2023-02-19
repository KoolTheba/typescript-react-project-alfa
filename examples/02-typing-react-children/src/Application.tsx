// Which is the correct props for BoxProps children?

type BoxProps = {
  children: React.ReactNode,
  style?: React.CSSProperties
}

const Box = ({children, style = {}}: BoxProps) => {
  return (
    <section style={{ padding: "1rem", border: "0.9rem solid black", ...style}}>
      {children}
    </section>
  )
}

const Application = () => {
  return (
    <Box>
      <p>Just a string</p>
      <p>Some HTML that is added</p>
      <Box>
        <p>Another React component with 1 child</p>
      </Box>
      <Box>
        <p>Another React component with 2 children</p>
        <span>I'm the second child!</span>
      </Box>
    </Box>
  )
}

export default Application;
