export default function handler(req, res) {

  const noticias = [
    {
      titulo: "Karol G anuncia nueva gira internacional",
      categoria: "Música",
      fecha: "30 junio 2026",
      resumen: "La artista confirmó nuevas fechas en Latinoamérica y Europa.",
      url: "https://www.billboard.com"
    },
    {
      titulo: "Bad Bunny rompe récord en plataformas digitales",
      categoria: "Streaming",
      fecha: "30 junio 2026",
      resumen: "Su nuevo álbum lidera los rankings globales de reproducción.",
      url: "https://www.rollingstone.com"
    },
    {
      titulo: "Festival de música 2026 confirma cartel oficial",
      categoria: "Eventos",
      fecha: "30 junio 2026",
      resumen: "Artistas internacionales encabezarán el evento más esperado del año.",
      url: "https://www.nme.com"
    }
  ];

  res.status(200).json(noticias);
}