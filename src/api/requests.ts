import request from "./resp";
import { IAnimal } from "./types";

export const getRandomAnimal = async () => {
  let animal = await request<IAnimal>({
    method: "GET",
    url: "/animals/rand",
  });

  return animal;
};
