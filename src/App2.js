import Form from "./Form";

export default function App() {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <Form onSubmit={getData} />
    </div>
  );
}
