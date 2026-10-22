
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";

function DetalleProducto({ onAgregar }) {
    const { id } = useParams();
    const [agregado, setAgregado] = useState(false);

    const producto = productos.find(
        (item) => item.id === Number(id)
    );

    if (!producto) {
        return (
            <main style={estilos.fondo}>
                <div style={estilos.contenedor}>
                    <h1>Producto no encontrado</h1>
                    <Link to="/productos" style={estilos.volver}>
                        ← Volver al catálogo
                    </Link>
                </div>
            </main>
        );
    }

    const sinStock = producto.stock <= 0;
    const esJuego = producto.categoria.toLowerCase() === "juego";

    const agregarAlCarrito = () => {
        if (sinStock || !onAgregar) return;

        onAgregar(producto);
        setAgregado(true);
    };

    return (
        <main style={estilos.fondo}>
            <div style={estilos.contenedor}>
                <Link to="/productos" style={estilos.volver}>
                    ← Volver al catálogo
                </Link>

                <div style={estilos.migas}>
                    INICIO <span> / </span> CATÁLOGO
                    <span> / </span> {producto.nombre.toUpperCase()}
                </div>

                <section style={estilos.panel}>
                    <div style={estilos.portada}>
                        <img
                            src={producto.imagen}
                            alt={`Portada de ${producto.nombre}`}
                            style={estilos.imagen}
                        />
                    </div>

                    <div style={estilos.info}>
                        <div style={estilos.etiquetas}>
                            <span style={estilos.etiqueta}>
                                {esJuego ? "VIDEOJUEGO" : "CONSOLA"}
                            </span>
                            {producto.consola && (
                                <span style={estilos.plataforma}>
                                    {producto.consola}
                                </span>
                            )}
                        </div>

                        <h1 style={estilos.titulo}>
                            {producto.nombre}
                        </h1>

                        <p style={estilos.subtitulo}>
                            {esJuego
                                ? `Un clásico retro para ${producto.consola}.`
                                : "Una pieza para tu colección retro."}
                        </p>

                        <div style={estilos.separador} />

                        <h2 style={estilos.tituloSeccion}>
                            Acerca de este producto
                        </h2>

                        <p style={estilos.descripcion}>
                            {producto.descripcion ||
                                "Consultá las características de este producto."}
                        </p>

                        <div style={estilos.detalles}>
                            <div>
                                <span style={estilos.label}>Categoría</span>
                                <strong>
                                    {esJuego ? "Videojuego retro" : "Consola"}
                                </strong>
                            </div>

                            {producto.consola && (
                                <div>
                                    <span style={estilos.label}>Plataforma</span>
                                    <strong>{producto.consola}</strong>
                                </div>
                            )}

                            <div>
                                <span style={estilos.label}>Disponibilidad</span>
                                <strong
                                    style={{
                                        color: sinStock ? "#ff6b6b" : "#a3d9a5"
                                    }}
                                >
                                    {sinStock
                                        ? "Sin stock"
                                        : `${producto.stock} unidades disponibles`}
                                </strong>
                            </div>
                        </div>

                        <div style={estilos.compra}>
                            <div>
                                <span style={estilos.label}>Precio</span>
                                <div style={estilos.precio}>
                                    ${producto.precio.toLocaleString("es-AR")}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={agregarAlCarrito}
                                disabled={sinStock}
                                style={{
                                    ...estilos.boton,
                                    opacity: sinStock ? 0.5 : 1,
                                    cursor: sinStock ? "not-allowed" : "pointer"
                                }}
                            >
                                {sinStock
                                    ? "Sin stock"
                                    : agregado
                                    ? "✓ Agregar otro al carrito"
                                    : "🛒 Agregar al carrito"}
                            </button>
                        </div>

                        {agregado && (
                            <div style={estilos.mensaje}>
                                ✓ ¡Producto agregado al carrito!
                                <Link to="/carrito" style={estilos.linkCarrito}>
                                    Ver carrito →
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                <div style={estilos.pie}>
                    <span>🎮</span>
                    <p>
                        Tu próxima aventura empieza acá.
                        <br />
                        <span style={{ color: "#9da9b8" }}>
                            Encontrá clásicos que nunca pasan de moda.
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}

const estilos = {
    fondo: {
        minHeight: "75vh",
        backgroundColor: "#1e1f1e",
        color: "#e8edf5",
        padding: "32px 20px 60px"
    },
    contenedor: {
        maxWidth: "1150px",
        margin: "0 auto"
    },
    volver: {
        display: "inline-block",
        color: "#ffffff",
        textDecoration: "none",
        marginBottom: "24px",
        fontSize: "14px"
    },
    migas: {
        color: "#8fa6bd",
        fontSize: "11px",
        letterSpacing: "1.5px",
        marginBottom: "20px",
        overflowWrap: "anywhere"
    },
    panel: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        gap: "36px",
        alignItems: "start",
        backgroundColor: "#212529",
        borderRadius: "10px",
        padding: "clamp(18px, 4vw, 36px)",
        boxShadow: "0 16px 45px rgba(0,0,0,0.25)"
    },
    portada: {
        borderRadius: "8px",
        padding: "20px",
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    imagen: {
        display: "block",
        width: "100%",
        maxHeight: "470px",
        objectFit: "contain",
        filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.4))"
    },
    info: {
        minWidth: 0,
        padding: "4px 0"
    },
    etiquetas: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        marginBottom: "16px"
    },
    etiqueta: {
        backgroundColor: "#ff2a6d",
        color: "#10202d",
        padding: "6px 10px",
        borderRadius: "3px",
        fontSize: "11px",
        fontWeight: "800",
        letterSpacing: "1px"
    },
    plataforma: {
        color: "#b8c7d8",
        fontSize: "13px"
    },
    titulo: {
        fontSize: "clamp(28px, 4vw, 42px)",
        lineHeight: 1.15,
        margin: "0 0 14px",
        overflowWrap: "anywhere"
    },
    subtitulo: {
        color: "#aab9c9",
        fontSize: "15px",
        lineHeight: 1.6,
        marginBottom: "24px"
    },
    separador: {
        height: "1px",
        backgroundColor: "#35475b",
        margin: "22px 0"
    },
    tituloSeccion: {
        fontSize: "18px",
        marginBottom: "12px"
    },
    descripcion: {
        color: "#c6d4e0",
        fontSize: "14px",
        lineHeight: 1.8
    },
    detalles: {
        display: "grid",
        gap: "15px",
        margin: "26px 0"
    },
    label: {
        display: "block",
        color: "#ffffff",
        fontSize: "12px",
        marginBottom: "5px"
    },
    compra: {
        backgroundColor: "#2f3b4e",
        borderRadius: "7px",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "18px",
        border: "1px solid #2c4054"
    },
    precio: {
        color: "#ffffff",
        fontSize: "30px",
        fontWeight: "700"
    },
    boton: {
        background: "linear-gradient(90deg, #75b900, #a1d63c)",
        color: "#14200c",
        border: "none",
        borderRadius: "4px",
        padding: "13px 18px",
        fontSize: "14px",
        fontWeight: "800",
        minHeight: "46px"
    },
    mensaje: {
        marginTop: "16px",
        padding: "14px",
        borderRadius: "5px",
        backgroundColor: "#203b36",
        color: "#a7e0bd",
        fontSize: "14px",
        lineHeight: 1.8
    },
    linkCarrito: {
        display: "inline-block",
        color: "#a8d8ff",
        marginLeft: "10px",
        fontWeight: "bold",
        textDecoration: "none"
    },
    pie: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginTop: "28px",
        padding: "20px",
        backgroundColor: "#212529",
        borderRadius: "8px",
        color: "#e8edf5",
        fontSize: "14px",
        lineHeight: 1.7
    }
};

export default DetalleProducto;
