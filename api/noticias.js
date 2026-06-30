export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json([
    {
      titulo: "Carlos Vives anuncia gira internacional",
      imagen: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc",
      resumen: "El artista confirmó nuevas fechas en América y Europa.",
      categoria: "música",
      fecha: "2026-06-30"
    },
    {
      titulo: "Avances en inteligencia artificial impactan los medios",
      imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      resumen: "La IA está transformando la creación de contenido digital.",
      categoria: "tecnología",
      fecha: "2026-06-30"
    }
  ]);
}