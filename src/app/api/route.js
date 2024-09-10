import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  // bestpractice response for the request
  return NextResponse.json({
    url: req.url,
    code: 200,
    status: "OK",
    data: [],
    errors: [],
    pagination: {
      totalPage: 0,
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      limit: 10,
    },
  });
};
