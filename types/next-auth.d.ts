import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    role?: string
    phone?: string | null
    designation?: string | null
    posting?: string | null
    isApproved?: boolean
  }

  interface Session {
    user: User & {
      role?: string
      phone?: string | null
      designation?: string | null
      posting?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string
    phone?: string | null
    designation?: string | null
    posting?: string | null
  }
} 