import type { Request, Response } from "express"
import prisma from "../prismaClient"

export const createAdmin = async (req: Request, res: Response) => {
  const { username } = req.body

  try {
    const admin = await prisma.admin.create({
      data: { username },
    })
    res.status(201).json(admin)
  } catch (error) {
    res.status(400).json({ error: "Failed to create admin" })
  }
}

export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await prisma.admin.findMany()
    res.status(200).json(admins)
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch admins" })
  }
}

export const getAdmin = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const admin = await prisma.admin.findUnique({
      where: { id },
    })
    res.status(200).json(admin)
  } catch (error) {
    res.status(404).json({ error: "Admin not found" })
  }
}

export const updateAdmin = async (req: Request, res: Response) => {
  const { id } = req.params
  const { username } = req.body

  try {
    const admin = await prisma.admin.update({
      where: { id },
      data: { username },
    })
    res.status(200).json(admin)
  } catch (error) {
    res.status(400).json({ error: "Failed to update admin" })
  }
}

export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.admin.delete({
      where: { id },
    })
    res.status(200).json({ message: "Admin deleted successfully" })
  } catch (error) {
    res.status(400).json({ error: "Failed to delete admin" })
  }
}
