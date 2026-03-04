import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJsonFile(filePath: string): any {
  const fullPath = path.join(CONTENT_DIR, filePath);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
}

function writeJsonFile(filePath: string, data: any): void {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), "utf-8");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/content/global", (_req, res) => {
    const data = readJsonFile("global.json");
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  });

  app.get("/api/content/pages/:page", (req, res) => {
    const { page } = req.params;
    const data = readJsonFile(`${page}.json`);
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  });

  app.get("/api/content/services/:slug", (req, res) => {
    const { slug } = req.params;
    const data = readJsonFile(`services/${slug}.json`);
    if (!data) return res.status(404).json({ error: "Not found" });
    res.json(data);
  });

  app.put("/api/content/global", (req, res) => {
    try {
      writeJsonFile("global.json", req.body);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to save" });
    }
  });

  app.put("/api/content/pages/:page", (req, res) => {
    try {
      const { page } = req.params;
      writeJsonFile(`${page}.json`, req.body);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to save" });
    }
  });

  app.put("/api/content/services/:slug", (req, res) => {
    try {
      const { slug } = req.params;
      writeJsonFile(`services/${slug}.json`, req.body);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to save" });
    }
  });

  app.get("/api/content/list", (_req, res) => {
    const pages: string[] = [];
    const services: string[] = [];

    if (fs.existsSync(CONTENT_DIR)) {
      for (const f of fs.readdirSync(CONTENT_DIR)) {
        if (f.endsWith(".json") && f !== "global.json") {
          pages.push(f.replace(".json", ""));
        }
      }
      const servicesDir = path.join(CONTENT_DIR, "services");
      if (fs.existsSync(servicesDir)) {
        for (const f of fs.readdirSync(servicesDir)) {
          if (f.endsWith(".json")) {
            services.push(f.replace(".json", ""));
          }
        }
      }
    }

    res.json({ pages, services });
  });

  return httpServer;
}
