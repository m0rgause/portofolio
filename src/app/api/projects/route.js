import { PrismaClient } from "@prisma/client";
import { log } from "console";
import next from "next";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

const getURL = (url) => {
  return new URL(url).searchParams;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

// get all projects
export const GET = async (req) => {
  const projects = await prisma.projects.findMany();
  let urlPath = new URL(req.url).pathname;
  let limit = getURL(req.url).get("limit");
  limit = parseInt(limit) || 10;
  const totalPage = Math.ceil(projects.length / limit);
  let page = getURL(req.url).get("page");
  page = Number(totalPage < page ? totalPage : page);

  const nextPage =
    totalPage === page ? null : urlPath + `?page=${page + 1}&limit=${limit}`;

  const prevPage =
    page <= 1 ? null : urlPath + `?page=${page - 1}&limit=${limit}`;

  const code = projects.length > 0 ? 200 : 404;

  return NextResponse.json(
    {
      url: urlPath,
      code: code,
      status: "OK",
      data: projects,
      errors: code === 404 ? "No projects found" : null,
      pagination: {
        totalPage: totalPage,
        page: page,
        nextPage: nextPage,
        prevPage: prevPage,
        limit: limit,
      },
    },
    { status: code }
  );
};

// create a new project
export const POST = async (req) => {
  console.log(req.body);

  const { title, description, image, link, tags } = req.body;
  const project = await prisma.projects.create({
    data: {
      title,
      description,
      image,
      link,
      tags,
    },
  });

  if (!project) {
    return NextResponse.json(
      {
        code: 400,
        status: "Bad Request",
        data: [],
        errors:
          "Bad Request. Please make sure you have all the required fields",
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      code: 201,
      status: "Created",
      data: project,
      errors: null,
    },
    { status: 201 }
  );
};
