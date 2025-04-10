import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = await prisma.task.update({
    where: { id: Number(params.id) },
    data: { completed: body.completed },
  })
  return Response.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.task.delete({
    where: { id: Number(params.id) },
  })
  return new Response(null, { status: 204 })
}
