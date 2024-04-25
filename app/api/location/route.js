import { NextResponse } from "next/server";
import { getAllLocation } from "./location-util";

export async function GET() {
  const locations = await getAllLocation();

  return NextResponse.json(locations);
}
