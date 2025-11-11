import { handlers } from "@/auth";

// Force Node.js runtime (not edge) so Prisma works
export const runtime = 'nodejs';

export const { GET, POST } = handlers;
