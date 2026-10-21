// src/pages/FormularioCompra.jsx (o donde lo tengas)
import { useState } from "react";
import { Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// 1. Los campos que vamos a manejar en el formulario y sus valores iniciales
const estadoInicial = {
  nombre: "",
  email: "",
  mensaje: "",
  telefono: "",
  direccion: "",
  metodoEntrega: "envio", // valor por defecto
};

// 2. Validacion de los campos del formulario
function validar(datos) {
  const errores = {};
  if (!datos.nombre.trim()) errores.nombre = "El nombre es obligatorio.";
  
  if (!datos.email.trim()) {
    errores.email = "El email es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
    errores.email = "Ingresá un email con formato válido.";
  }
  
   if (!datos.telefono.trim()) {    errores.telefono = "El teléfono es obligatorio.";}
   else if (!/^\d+$/.test(datos.telefono)) {   errores.telefono = "El teléfono debe contener solo números.";
  }

  if (!datos.direccion.trim()) {
    errores.direccion = "La dirección es obligatoria.";
  } else {
    const regexDireccion = /[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+\s+\d+/;
    
    if (!regexDireccion.test(datos.direccion)) {
      errores.direccion = "Ingresá calle y número (ej: Av. San Martín 123).";
    }
  }


  return errores;
}

// 3. Componente principal
export default function FormularioCompra({ carritoVacio, onConfirmar }) {
  // Estados
  const [datos, setDatos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [confirmado, setConfirmado] = useState(false);
  const [errorCarrito, setErrorCarrito] = useState(false);
  const navigate = useNavigate();
  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificamos si el carrito está vacío
    if (carritoVacio) {
      setErrorCarrito(true);
      return;
    }
    setErrorCarrito(false);

    // Validamos los datos
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
   

    if (Object.keys(nuevosErrores).length > 0) return;

    if (onConfirmar) onConfirmar(); // Avisamos para que vacíe el carrito, esto se pasa desde App.jsx (REVISAR)
    setConfirmado(true);
    setDatos(estadoInicial);
  };

  const campo = (name, label, type = "text", placeholder = "") => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={datos[name] || ""}
        onChange={handleChange}
        className={`form-control ${errores[name] ? "is-invalid" : ""}`}
        placeholder={placeholder}
      />
      {errores[name] && <div className="invalid-feedback">{errores[name]}</div>}
    </div>
  );

  // 4. Renderizado condicional: Si ya se confirmó, mostramos el mensaje de éxito
  if (confirmado) {
    return (
      <div className="alert alert-success p-4">
        <h4 className="alert-heading">¡Compra simulada confirmada!</h4>
        <p className="mb-0">
          Gracias por tu compra. Te enviaremos un email con los detalles del pedido.
        </p>
        <button onClick={() => navigate("/")} className="btn btn-warning mt-4">
          Volver al inicio
        </button>
      </div>
    );
  }

  //Esto es el formulario en sí
  return (
    <form onSubmit={handleSubmit} noValidate className="card card-body border-0 shadow p-4 bg-dark text-white">
      {/* avisa si el carrito esta vacio (ver carritoVacio en App.jsx) */}
      {errorCarrito && (
        <div className="alert alert-warning">
          Tu carrito está vacío. Agregá productos antes de confirmar.
        </div>
      )}

      {}
      <div className="row">
        <div className="col-md-6">{campo("nombre", "Nombre y apellido", "text", "Ingrese su nombre y apellido")}</div>
        <div className="col-md-6">{campo("email", "Email", "email", "Ingrese su email")}</div>
        <div className="col-md-6">{campo("telefono", "Teléfono", "tel", "Ingrese su teléfono")}</div>
        <div className="col-md-6">{campo("direccion", "Dirección o localidad", "text", "Ingrese su dirección")}</div>
      </div>

      {}
      <div className="mb-3">
        <label htmlFor="metodoEntrega" className="form-label">Método de entrega</label>
        <select 
          id="metodoEntrega" 
          name="metodoEntrega" 
          value={datos.metodoEntrega} 
          onChange={handleChange} 
          className="form-select"
        >
          <option value="envio">Envío a domicilio</option>
          <option value="retiro">Retiro en local</option>
        </select>
      </div>

      {}
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje o aclaración (opcional)</label>
        <textarea 
          id="mensaje" 
          name="mensaje" 
          rows="3" 
          value={datos.mensaje} 
          onChange={handleChange} 
          className="form-control" 
           placeholder="Ej: Dejar en portería, timbre 2B..."
        />
      </div>

      {}
      <button type="submit" className="btn btn-warning btn-lg w-100 mt-3"> Confirmar compra</button>
    </form>
  );
}