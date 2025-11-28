import { z } from 'zod';

export const UserRegistrationSchema = z.object({
    email: z.string()
        .trim()
        .email("Invalid email address")
        .refine(val => !/[<>]/.test(val), { message: "Invalid characters in email" }), // Basic XSS prevention
});

export type UserRegistrationForm = z.infer<typeof UserRegistrationSchema>;
