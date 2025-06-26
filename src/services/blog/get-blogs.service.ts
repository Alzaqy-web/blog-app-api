import { title } from "process";
import prisma from "../../config/prisma";
import { Prisma } from "../../generated/prisma";
import { PaginationQueryParams } from "../../types/paginision";

export const getBlogsService = async (query: PaginationQueryParams) => {
  const { page, take, sortBy, sortOrder, search } = query;

  const whereClause: Prisma.BlogWhereInput = {};

  // for fitur search
  if (search) {
    whereClause.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
    // whereClause.title = { contains: search, mode: "insensitive" }; // ->untuk fitur search
  }

  const blogs = await prisma.blog.findMany({
    where: whereClause,
    take: take, // raw sql = Limit
    skip: (page - 1) * take, // raw sql = offset
    orderBy: { [sortBy]: sortOrder },
  });

  const count = await prisma.blog.count({ where: whereClause });

  return {
    date: blogs,
    meta: { page, take, total: count },
  };
};

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// untuk tau meta data , total data , dan pege & take
