import express from "express";
import cors from "cors";

import "./models/Anggota.js";
import "./models/Buku.js";
import "./models/Petugas.js";
import "./models/Peminjaman.js";
import "./models/Pengembalian.js";
import "./models/associations.js";

import anggotaRoutes from "./routes/anggotaRoutes.js";
import bukuRoutes from "./routes/bukuRoutes.js";
import petugasRoutes from "./routes/petugasRoutes.js";
import peminjamanRoutes from "./routes/peminjamanRoutes.js";
import pengembalianRoutes from "./routes/pengembalianRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { specs, swaggerUi } from "./config/swagger.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/anggota", anggotaRoutes);
app.use("/api/buku", bukuRoutes);
app.use("/api/petugas", petugasRoutes);
app.use("/api/peminjaman", peminjamanRoutes);
app.use("/api/pengembalian", pengembalianRoutes);

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "API Perpustakaan Docs",
  })
);

app.use(errorHandler);

export default app;
