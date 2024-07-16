import { lusitana } from "../ui/fonts"


interface Point {
    x: number;
    y: number;
}
// Función para redondear las coordenadas a la tolerancia más cercana
function roundToTolerance(value: number, tolerance: number) {
    return Math.round(value / tolerance) * tolerance;
}

// Función para contar ocurrencias de cada punto con tolerancia
function getMostFrequentPoints(data: Point[], tolerance: number = 5) {
    const counts: Record<string, Point & { count: number }> = {};
    data.forEach(point => {
        // Redondeamos las coordenadas a la tolerancia más cercana
        const roundedX = roundToTolerance(point.x, tolerance);
        const roundedY = roundToTolerance(point.y, tolerance);
        const key = `${roundedX},${roundedY}`;

        if (!counts[key]) {
            counts[key] = { x: roundedX, y: roundedY, count: 0 };
        }
        counts[key].count++;
    });

    // Convertimos el objeto a un array y ordenamos por el número de ocurrencias
    const sortedPoints = Object.values(counts).sort((a, b) => b.count - a.count);

    // Filtramos los puntos que más se repiten (en este caso, tomamos los top 5)
    return sortedPoints.slice(0, 5);
}


export default async function Page() {
    // Para API esto funciona solo en los REACT SERVER COMPONENTS
    const res = await fetch('https://api-seguim-ocular.vercel.app/api/data');
    const json = await res.json();

    // Procesar los datos
    const frequentPoints = getMostFrequentPoints(json);

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Página de prueba</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {frequentPoints.map((point, index) => (
                    <div key={index} className="border p-4">
                        <p>X: {point.x}</p>
                        <p>Y: {point.y}</p>
                        <p>Repeticiones: {point.count}</p>
                    </div>
                ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
                {/* Aquí puedes agregar más contenido si es necesario */}
            </div>
        </main>
    )
}
