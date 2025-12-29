import { type User, type InsertUser, type VisitorStats } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getVisitorCount(): Promise<number>;
  incrementVisitorCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private visitorCount: number;

  constructor() {
    this.users = new Map();
    this.visitorCount = 0;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getVisitorCount(): Promise<number> {
    return this.visitorCount;
  }

  async incrementVisitorCount(): Promise<number> {
    this.visitorCount += 1;
    return this.visitorCount;
  }
}

export const storage = new MemStorage();
