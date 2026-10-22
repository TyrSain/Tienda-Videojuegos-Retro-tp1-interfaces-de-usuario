// IMPORTACIONES:
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTE PRINCIPAL:
function ScrollToTop() {
    // Obtiene la ruta actual mediante el hook de React Router
    const {pathname} = useLocation();

    // Efecto que se ejecuta cada vez que cambia la ruta URL
    useEffect(() => {
        // Hace scroll automatico hacia las coordenadas superiores (x:0, y:0)
        window.scrollTo(0, 0);
    }, [pathname]);

    // Este componente no renderiza ningun elemento visual en la interfaz
    return null;
}

// EXPORTACION:
export default ScrollToTop;