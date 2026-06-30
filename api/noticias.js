export default function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const noticias = [
    {
      titulo: "Karol G anuncia nueva gira internacional",
      categoria: "Música",
      fecha: "30 junio 2026",
      resumen: "La artista confirmó nuevas fechas en Latinoamérica y Europa."
    },
    {
      titulo: "Bad Bunny domina el streaming global",
      categoria: "Streaming",
      fecha: "30 junio 2026",
      resumen: "Su nuevo álbum lidera todas las plataformas digitales."
    },
    {
      titulo: "Festival 2026 confirma cartel oficial",
      categoria: "Eventos",
      fecha: "30 junio 2026",
      resumen: "Artistas globales encabezan el evento más esperado del año."
    }
  ];

  return res.status(200).json(noticias);
}