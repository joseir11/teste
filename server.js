const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const API_BASE = "https://api.cartola.globo.com";

/* ── CORS — LIBERA PARA QUALQUER ORIGEM ───────────────── */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

/* ── ROTAS DO PROXY CARTOLA ───────────────────────────── */

// STATUS DO MERCADO
app.get("/mercado/status", async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/mercado/status`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// CLUBES
app.get("/clubes", async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/clubes`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// PARTIDAS DA RODADA ATUAL
app.get("/partidas", async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/partidas`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// PARTIDAS DE UMA RODADA ESPECÍFICA
app.get("/partidas/:rodada", async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/partidas/${req.params.rodada}`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// ATLETAS DO MERCADO
app.get("/atletas/mercado", async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/atletas/mercado`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

/* ── ARQUIVOS ESTÁTICOS DO PWA ────────────────────────── */
app.use(express.static(__dirname));

/* ── FALLBACK SPA (DEIXA POR ÚLTIMO!) ─────────────────── */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor + Proxy rodando na porta ${PORT}`);
});
