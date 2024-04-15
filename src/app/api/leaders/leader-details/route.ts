import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Leader from "@/models/leadersModel";
connect();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    const leader = await Leader.findById(id);
    if (!leader) {
      return NextResponse.json({ error: "Leader not found" }, { status: 404 });
    }
    return NextResponse.json({
      message: "Leader fetched successfully",
      leader: leader,
    });
  } catch (error: any) {
    console.error("Error fetching leader:", error);
    return NextResponse.json(
      { error: "Failed to fetch leader" },
      { status: 500 }
    );
  }
}
