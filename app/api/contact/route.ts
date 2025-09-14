import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log("[v0] Contact form submission:", body)
  return NextResponse.json({ ok: true })
}
