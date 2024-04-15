import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Leader from "@/models/leadersModel";
connect();

export async function GET(req: NextRequest) {
  try {
    const leaders = await Leader.find({});
    return NextResponse.json({
      message: "Leaders fetched successfully",
      leaders: leaders,
    });
  } catch (error: any) {
    console.error("Error fetching leaders:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaders" },
      { status: 500 }
    );
  }
}
