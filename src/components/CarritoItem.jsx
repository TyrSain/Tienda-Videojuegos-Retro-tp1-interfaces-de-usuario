import Button from "react-bootstrap/Button";

function CarritoItem({producto, onEliminar}) {
    return (
        <div
            className='p-3 d-flex flex-column flex-sm-row align-item-center justify-content-between border border-secondary gap-3'
            style={{
                backgroundColor: '#212529',
                borderRadius: '0px'
            }}
        >
            <div className='d-flex align-item-center gap-3 w-100'>
                <img 
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{
                        width: '90px',
                        height: '65px',
                        objectFit: 'contain',
                        border: '1px solid #444'
                    }}
                />
                <div>
                    <h5 className='mb-1  fw-bold text-light'>{producto.nombre}</h5>
                    <p className='mb-0 text-secondary small'>
                        {producto.categoria === 'Consola' ? 'Consola Retro' : 'Consola: ${producto.consola}'}
                    </p>
                    <span className='text-secondary small'>Cantidad: {producto.cantidad}</span>
                </div>
            </div>

            <div className='d-flex flex-row flex-sm-column align-items-end justify-content-between w-100 w-sm-auto gap-2'>
                <div className='fw-bold text-warning fs-5'>
                    ${Number(producto.precio) * Number(producto.cantidad)}
                </div>
                <Button
                    variant='outline-danger'
                    size='sm'
                    onClick={() => onEliminar(producto.id)}
                    style={{
                        borderRadius: '0px'
                    }}
                >
                    Eliminar
                </Button>
            </div>
        </div>
    );
}

export default CarritoItem;