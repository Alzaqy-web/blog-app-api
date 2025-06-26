import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api.error";

export const getBlogtBySlugService = async (slug: string) => {
  const blog = await prisma.blog.findFirst({
    where: { slug },
  });

  if (!blog) {
    throw new ApiError("blog not found", 400);
  }

  return blog;
};
