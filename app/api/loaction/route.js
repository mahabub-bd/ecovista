import { NextResponse } from "next/server";
import { getAllLocation } from "./loaction-util";

export async function GET() {
  const locations = await getAllLocation();

  return NextResponse.json(locations);
}
