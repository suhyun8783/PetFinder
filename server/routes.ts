import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPetReportSchema, insertAdRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/pet-reports", async (req, res) => {
    try {
      const validatedData = insertPetReportSchema.parse(req.body);
      const petReport = await storage.createPetReport(validatedData);
      res.json({ success: true, data: petReport });
    } catch (error) {
      console.error("Error creating pet report:", error);
      res.status(400).json({ success: false, error: "Invalid data" });
    }
  });

  app.get("/api/pet-reports", async (req, res) => {
    try {
      const petReports = await storage.getAllPetReports();
      res.json({ success: true, data: petReports });
    } catch (error) {
      console.error("Error fetching pet reports:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

  app.post("/api/ad-requests", async (req, res) => {
    try {
      const validatedData = insertAdRequestSchema.parse(req.body);
      const adRequest = await storage.createAdRequest(validatedData);
      res.json({ success: true, data: adRequest });
    } catch (error) {
      console.error("Error creating ad request:", error);
      res.status(400).json({ success: false, error: "Invalid data" });
    }
  });

  app.get("/api/ad-requests", async (req, res) => {
    try {
      const adRequests = await storage.getAllAdRequests();
      res.json({ success: true, data: adRequests });
    } catch (error) {
      console.error("Error fetching ad requests:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (username === "admin" && password === "123456") {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, error: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ success: false, error: "Server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
