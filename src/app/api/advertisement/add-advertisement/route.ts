import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/cloudinaryConfig/cloudinaryConfig";
import Advertisement from "@/models/advertisementModel";

connect();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
  const res = await uploadToCloudinary(fileUri, file.name);
  // link = res.result.secure_url;

  let message = "failure";
  let imgUrl = "";

  if (res.success && res.result) {
    message = "success";
    imgUrl = res.result.secure_url;

    const { name, email, title, description, startDate, endDate } =
      Object.fromEntries(formData.entries());

    const advertisement = new Advertisement({
      name,
      email,
      title,
      description,
      link: imgUrl,
      startDate,
      endDate,
    });

    await advertisement.save();
  }

  if (res.success && res.result) {
    return NextResponse.json({
      message: "success",
      imgUrl: res.result.secure_url,
    });
  } else return NextResponse.json({ message: "failure" });
}
