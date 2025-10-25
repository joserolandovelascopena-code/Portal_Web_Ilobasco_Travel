const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // sirve los archivos de la misma carpeta

// Conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",             
  host: "localhost",
  database: "postgres",          // tu base de datos
  password: "TojiSatoru12",
  port: 5432,
});

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Registrar usuario
app.post("/registrar", async (req, res) => {
  const { nombre, usuario, correo, telefono, contraseña } = req.body;
  try {
    await pool.query(
      `INSERT INTO public."Usuarios" (nombre, usuario, correo, telefono, "contraseña")
       VALUES ($1, $2, $3, $4, $5)`,
      [nombre, usuario, correo, telefono, contraseña]
    );
    res.json({ success: true, message: "✅ Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error al registrar:", error.message);
    res.status(500).json({ success: false, message: "Error al registrar usuario" });
  }
});

// Login usuario
app.post("/login", async (req, res) => {
  const { usuario, contraseña } = req.body;
  try {
    const result = await pool.query(
      `SELECT * FROM public."Usuarios" WHERE usuario = $1 AND "contraseña" = $2`,
      [usuario, contraseña]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, message: "✅ Login correcto" });
    } else {
      res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    console.error(" Error al iniciar sesión:", error.message);
    res.status(500).json({ success: false, message: "Error al iniciar sesión" });
  }
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


// === GUARDAR COMENTARIO ===
app.post("/comentarios", async (req, res) => {
  const { id_ventana, usuario, comentario } = req.body;

  if (!id_ventana || !usuario || !comentario) {
    return res.status(400).json({ success: false, message: "Datos incompletos" });
  }

  try {
    await pool.query(
      `INSERT INTO public."Comentarios" (id_ventana, usuario, comentario, fecha)
       VALUES ($1, $2, $3, NOW())`,
      [id_ventana, usuario, comentario]
    );

    res.json({ success: true, message: "✅ Comentario guardado correctamente" });
  } catch (error) {
    console.error("❌ Error al guardar comentario:", error.message);
    res.status(500).json({ success: false, message: "Error al guardar comentario" });
  }
});


// === OBTENER COMENTARIOS POR VENTANA ===
app.get("/comentarios/:id_ventana", async (req, res) => {
  const { id_ventana } = req.params;

  try {
    const result = await pool.query(
      `SELECT id, usuario, comentario, fecha
       FROM public."Comentarios"
       WHERE id_ventana = $1
       ORDER BY fecha ASC`,
      [id_ventana]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error al obtener comentarios:", error.message);
    res.status(500).json({ success: false, message: "Error al obtener comentarios" });
  }
});
