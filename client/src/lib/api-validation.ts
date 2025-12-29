import { z } from "zod";

export const visitorCountSchema = z.number().int().nonnegative();

export function validateVisitorCount(data: unknown): number {
  return visitorCountSchema.parse(data);
}
