import { z } from 'zod'

export const RegisterSchema = z.object({
  team_name: z.string().min(3).max(24),
  project_topic: z.string().min(3).max(24),
  email: z.string().email().toLowerCase(),
  phone: z.string().min(10).max(14)
})

export const ContactSchema = z.object({
  email: z.string().email().toLowerCase(),
  full_name: z.string().min(6).max(40),
  message: z.string().min(10).max(700),
})