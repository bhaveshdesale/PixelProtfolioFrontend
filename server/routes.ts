import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/visitors", async (_req, res) => {
    try {
      const count = await storage.getVisitorCount();
      res.json(count);
    } catch (error) {
      res.status(500).json({ error: "Failed to get visitor count" });
    }
  });

  app.post("/api/visitors/increment", async (_req, res) => {
    try {
      const count = await storage.incrementVisitorCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: "Failed to increment visitor count" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
