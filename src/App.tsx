import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/navbar/navbar";
import { Container } from "@mui/material";
import Form from "./components/form/form";
import { useState } from "react";
import DisplayData from "./components/dataDisplay/datadisplay";

function App() {
  const [text, setText] = useState("");
  const [enable, setEnable] = useState(false);

  const handelTextState = (val: string) => {
    console.log(val)
    setText(val);
    setEnable(true);
  };

  const { isLoading, error, data } = useQuery({
    enabled: enable,
    queryKey: ["dictionary"],
    queryFn: () => {
      return fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      ).then((res) => res.json());
    },
  });

  if (isLoading) {
    return (
      <>
        <Navbar></Navbar>
        <Container>
          <Form handelTextState={handelTextState}></Form>
          <DisplayData></DisplayData>
        </Container>
      </>
    );
  }
  if (error) return "An error has occurred: " + error.message;

 if(data){
  console.log(data)
  return(
    <>
    <Navbar></Navbar>
    <Container>
      <Form handelTextState={handelTextState}></Form>
      <DisplayData data={data}></DisplayData>
    </Container>
  </>
  )
 }

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Form handelTextState={handelTextState}></Form>
      </Container>
    </>
  );
}

export default App;
