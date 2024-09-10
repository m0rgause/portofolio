import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

const getURL = (url) => {
  return new URL(url).searchParams;
};

// update a project
export const PUT = async (req) => {
  const { id } = req.query;
  const { title, description, image, link, tags } = req.body;
  const project = await prisma.projects.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title,
      description,
      image,
      link,
      tags,
    },
  });

  return NextResponse.json({
    url: req.url,
    code: 200,
    status: "OK",
    data: project,
    errors: null,
  });
};

// delete a project
export const DELETE = async (req) => {
  const { id } = req.query;
  const project = await prisma.projects.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({
    url: req.url,
    code: 200,
    status: "OK",
    data: project,
    errors: null,
  });
};
