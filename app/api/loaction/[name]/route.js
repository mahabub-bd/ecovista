import { NextResponse } from "next/server";
import { getLocationByName } from "../loaction-util";

export async function GET(request, { params: { name } }) {
  const locations = await getLocationByName(name);

  return NextResponse.json(locations);
}
