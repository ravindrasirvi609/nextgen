import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Leader from "@/models/leadersModel";
import { uploadToCloudinary } from "@/cloudinaryConfig/cloudinaryConfig";

connect();

export async function POST(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const fileBuffer = await file.arrayBuffer();
    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");
    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
    const res = await uploadToCloudinary(fileUri, file.name);
    console.log("Cloudinary response:", res);

    let message = "failure";
    let imgUrl = "";

    if (res.success && res.result) {
      message = "success";
      imgUrl = res.result.secure_url;
      const {
        name,
        position,
        bio,
        imageUrl = imgUrl,
        email,
        phone,
        location,
        education,
        linkedin,
        dateOfBirth,
        nationality,
        languages,
        achievements,
        publications,
        awards,
        socialMediaLinks,
        experience,
      } = Object.fromEntries(formData.entries());

      const newLeader = new Leader({
        name,
        position,
        bio,
        imageUrl,
        email,
        phone,
        location,
        education,
        linkedin,
        dateOfBirth,
        nationality,
        languages,
        achievements,
        publications,
        awards,
        socialMediaLinks,
        experience,
      });

      const savedLeader = await newLeader.save();
      console.log("Leader added successfully:", savedLeader);
      return NextResponse.json({
        message: "Leader added successfully",
        leader: savedLeader,
      });
    }
  } catch (error: any) {
    console.error("Error adding leader:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error: any) => error.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to add leader" },
        { status: 500 }
      );
    }
  }
}
