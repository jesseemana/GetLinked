import { z } from 'zod'

export const RegisterSchema = z.object({
  team_name: z.string().min(3).max(24),
  project_topic: z.string().min(3).max(24),
  email: z.string().email().toLowerCase(),
  phone: z.string().min(10).max(14),
  category: z.string(),
  group_size: z.string(),
  privacy_poclicy_accepted: z.boolean(),
})

export const ContactSchema = z.object({
  email: z.string().email().toLowerCase(),
  phone: z.string().min(10).max(14),
  full_name: z.string().min(6).max(40),
  message: z.string().min(10).max(700),
})