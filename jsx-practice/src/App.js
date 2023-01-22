import "./App.css";

function App() {
  const name = "이창민";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      {/* 주석은 이렇게 적습니당~ */}
    </>
  );
}

export default App;
