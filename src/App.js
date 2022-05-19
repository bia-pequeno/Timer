import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#607196;
   }
`
const Box = styled.div`
  display: flex;
  margin: 25vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BoxButton = styled.div`
   display: flex;
   flex-direction: row;
   margin: 4vh;
`
const Button = styled.button`
  cursor: pointer;
   margin: 2vh;
   padding: 2vh;
   border: none;
   border-radius: 50px;
   background-color:#BABFD1;
   &hover{
      border-radius: 50px;
      box-shadow:0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
   }
  `
export default class App extends React.Component {
   state = {
    number: 0
  }
  Start = () => {
    const Stop = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000)

    this.Stop = () => {
      clearInterval(Stop);
    }
  }

  Restart = () => {
    this.setState({ number: 0 });
  }
  componentDidUpdate() {
    document.title = this.state.number;
  }

  render(){
    return(
      <>
      <GlobalStyle/>
      <Box>
        <h2>{this.state.number}</h2>
        <BoxButton>
          <Button onClick={this.Start}> Start </Button>
          <Button onClick={this.Restart}> Restart </Button>
          <Button onClick={this.Stop}> Stop </Button>
        </BoxButton>
        
      </Box>
         
      </>
    )
  }
}
 