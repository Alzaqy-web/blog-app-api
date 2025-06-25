import prisma from "../../config/prisma";

export const getSamplesService = async () => {
  const sample = await prisma.sample.findMany();
  return sample;
};
