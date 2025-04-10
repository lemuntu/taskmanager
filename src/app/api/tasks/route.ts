import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return Response.json(tasks)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newTask = await prisma.task.create({
    data: { title: body.title },
  })
  return Response.json(newTask)
}
