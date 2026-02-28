import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:3001")
      .then(res => res.text())
      .then(data => {
        console.log("Respuesta:", data);
        setMensaje(data);
      })
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;