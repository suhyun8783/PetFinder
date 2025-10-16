import { 
  users, 
  petReports, 
  adRequests,
  type User, 
  type InsertUser,
  type PetReport,
  type InsertPetReport,
  type AdRequest,
  type InsertAdRequest
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createPetReport(report: InsertPetReport): Promise<PetReport>;
  getAllPetReports(): Promise<PetReport[]>;
  
  createAdRequest(request: InsertAdRequest): Promise<AdRequest>;
  getAllAdRequests(): Promise<AdRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createPetReport(report: InsertPetReport): Promise<PetReport> {
    const [petReport] = await db
      .insert(petReports)
      .values(report)
      .returning();
    return petReport;
  }

  async getAllPetReports(): Promise<PetReport[]> {
    return await db.select().from(petReports).orderBy(petReports.submittedAt);
  }

  async createAdRequest(request: InsertAdRequest): Promise<AdRequest> {
    const [adRequest] = await db
      .insert(adRequests)
      .values(request)
      .returning();
    return adRequest;
  }

  async getAllAdRequests(): Promise<AdRequest[]> {
    return await db.select().from(adRequests).orderBy(adRequests.submittedAt);
  }
}

export const storage = new DatabaseStorage();
