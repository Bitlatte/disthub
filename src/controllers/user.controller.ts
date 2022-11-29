import { Prisma } from "@prisma/client";
import prisma from "../config/prisma.conf";
import { hash } from "bcryptjs";

export const create = (data: Prisma.UserCreateInput) => {
  return new Promise<void>(async (resolve, reject) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      reject("Invalid Data");
    }
    prisma.user
      .create({
        data: {
          name: name,
          email: email,
          password: await hash(password, 10),
        },
      })
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const update = (id: string, data: any) => {
  return new Promise<void>(async (resolve, reject) => {
    if (data.password) {
      data.password = await hash(data.password, 10);
    }

    prisma.user
      .update({
        where: {
          id: id,
        },
        data: data,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const remove = (id: string) => {
  return new Promise<void>((resolve, reject) => {
    prisma.user
      .delete({
        where: {
          id: id,
        },
      })
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const findById = (data: string) => {
  return new Promise((resolve, reject) => {
    prisma.user
      .findUnique({
        where: {
          id: data,
        },
      })
      .then((user) => {
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};
