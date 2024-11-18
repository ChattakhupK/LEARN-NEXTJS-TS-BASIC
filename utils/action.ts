"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamps = async (prevState: any, formData: formData) => {
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
  //   const title = formData.get("title");
  //   const location = formData.get("location");

  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  // prisma.camp.create(.....)
  //   revalidatePath("/camp"); ทำให้ข้อมูลใหม่อยู่เสมอโดยการรีpath
  //   redirect("/"); ทำให้เมื่อข้อมูลมาถึงจะให้เปลี่ยนไปหน้าของpathที่กำหนด
  return "create camp success!!";
};

export const fetchCamp = async () => {
  //prisma.camp.findMany({})
  const camps = [
    { id: 1, title: "UD" },
    { id: 2, title: "BKK" },
    { id: 3, title: "KKN" },
  ];
  return camps;
};
