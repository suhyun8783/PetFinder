import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const petReports = pgTable("pet_reports", {
  id: serial("id").primaryKey(),
  missingDate: text("missing_date").notNull(),
  missingLocation: text("missing_location").notNull(),
  petName: text("pet_name").notNull(),
  petType: text("pet_type").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertPetReportSchema = createInsertSchema(petReports).omit({
  id: true,
  submittedAt: true,
});

export type InsertPetReport = z.infer<typeof insertPetReportSchema>;
export type PetReport = typeof petReports.$inferSelect;

export const adRequests = pgTable("ad_requests", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  representativeName: text("representative_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertAdRequestSchema = createInsertSchema(adRequests).omit({
  id: true,
  submittedAt: true,
});

export type InsertAdRequest = z.infer<typeof insertAdRequestSchema>;
export type AdRequest = typeof adRequests.$inferSelect;
