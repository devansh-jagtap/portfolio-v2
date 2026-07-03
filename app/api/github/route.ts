import { getContributionData } from "@/lib/github";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.warn("GITHUB_TOKEN is not set");
      return NextResponse.json(
        { error: "GitHub token not configured", details: "GITHUB_TOKEN environment variable is missing" },
        { status: 503 }
      );
    }

    const calendar = await getContributionData("devansh-jagtap");
    return NextResponse.json(calendar);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("GitHub API Error:", errorMessage);
    const status = errorMessage.includes("GitHub token rejected") ? 401 : 500;
    return NextResponse.json(
      { error: "Failed to fetch GitHub data", details: errorMessage },
      { status }
    );
  }
}
