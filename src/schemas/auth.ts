import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(32),
});

export const signUpSchema = z.object({
  fullName: z.string().min(6),
  email: z.email(),
  password: z.string().min(8).max(32),
});
