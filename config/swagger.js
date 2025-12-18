import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Perpustakaan By Wahyu Pratama",
      version: "1.0.0",
      description: "Dokumentasi API untuk Sistem Manajemen Perpustakaan",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        // Schema Anggota
        Anggota: {
          type: "object",
          required: ["nama_anggota", "jenis_kelamin"],
          properties: {
            id_anggota: {
              type: "integer",
              description: "ID anggota (auto-generated)",
            },
            nama_anggota: {
              type: "string",
              example: "Budi Santoso",
            },
            jenis_kelamin: {
              type: "string",
              enum: ["Laki-laki", "Perempuan"],
              example: "Laki-laki",
            },
            alamat: {
              type: "string",
              example: "Jl. Merdeka No. 123",
            },
            no_telp: {
              type: "string",
              example: "081234567890",
            },
            email: {
              type: "string",
              format: "email",
              example: "budi@email.com",
            },
            tanggal_daftar: {
              type: "string",
              format: "date",
              example: "2024-01-15",
            },
            status_anggota: {
              type: "string",
              enum: ["Aktif", "Tidak Aktif"],
              example: "Aktif",
            },
          },
        },
        // Schema Buku
        Buku: {
          type: "object",
          required: [
            "judul_buku",
            "nama_penerbit",
            "nama_penulis",
            "jumlah_halaman",
            "jumlah_buku",
          ],
          properties: {
            id_buku: {
              type: "integer",
              description: "ID buku (auto-generated)",
            },
            judul_buku: {
              type: "string",
              example: "Laskar Pelangi",
            },
            nama_penerbit: {
              type: "string",
              example: "Gramedia",
            },
            nama_penulis: {
              type: "string",
              example: "Andrea Hirata",
            },
            jumlah_halaman: {
              type: "integer",
              minimum: 1,
              example: 529,
            },
            jumlah_buku: {
              type: "integer",
              minimum: 0,
              example: 10,
            },
          },
        },
        // Schema Petugas
        Petugas: {
          type: "object",
          required: ["nama_petugas", "username", "password", "role"],
          properties: {
            id_petugas: {
              type: "integer",
              description: "ID petugas (auto-generated)",
            },
            nama_petugas: {
              type: "string",
              example: "Siti Nurhaliza",
            },
            username: {
              type: "string",
              example: "siti.admin",
            },
            password: {
              type: "string",
              format: "password",
              example:
                "$2b$10$KxYx6G1PqZJ3mZyZr4XHDez2KQeGZ7rTqHcF4W9JY6P3Wz4Kc0x9e",
            },
            role: {
              type: "string",
              enum: ["Admin", "Petugas"],
              example: "Petugas",
            },
          },
        },
        // Schema Peminjaman
        Peminjaman: {
          type: "object",
          required: ["id_buku", "id_anggota", "id_petugas"],
          properties: {
            id_peminjaman: {
              type: "integer",
              description: "ID peminjaman (auto-generated)",
            },
            id_buku: {
              type: "integer",
              example: 1,
            },
            id_anggota: {
              type: "integer",
              example: 1,
            },
            id_petugas: {
              type: "integer",
              example: 1,
            },
            tanggal_peminjaman: {
              type: "string",
              format: "date",
              example: "2024-01-15",
            },
            status_pinjam: {
              type: "string",
              enum: ["Dipinjam", "Dikembalikan"],
              example: "Dipinjam",
            },
            tanggal_pengembalian: {
              type: "string",
              format: "date",
              nullable: true,
              example: null,
            },
          },
        },
        // Schema Pengembalian
        Pengembalian: {
          type: "object",
          required: ["id_peminjaman", "id_petugas", "status_buku"],
          properties: {
            id_pengembalian: {
              type: "integer",
              description: "ID pengembalian (auto-generated)",
            },
            id_peminjaman: {
              type: "integer",
              example: 1,
            },
            id_petugas: {
              type: "integer",
              example: 1,
            },
            status_buku: {
              type: "string",
              enum: ["Bagus", "Rusak", "Hilang"],
              example: "Bagus",
            },
            tanggal_pengembalian: {
              type: "string",
              format: "date",
              example: "2024-01-20",
            },
          },
        },
        // Schema Error
        Error: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "error",
            },
            message: {
              type: "string",
              example: "Error message",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // Path ke file routes
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
