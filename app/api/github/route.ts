import { getContributionData } from "@/lib/github";
import { NextResponse } from "next/server";

let keydropInitPromise: Promise<void> | null = null;

async function initKeydropSecrets() {
  if (keydropInitPromise) {
    return keydropInitPromise;
  }

  keydropInitPromise = (async () => {
    if (process.env.GITHUB_TOKEN) {
      return;
    }

    const keydropKey = process.env.KEYDROP_KEY;
    if (!keydropKey) {
      console.warn("[KeyDrop] No KEYDROP_KEY found in environment. Skipping.");
      return;
    }

    const apiUrl = process.env.KEYDROP_API_URL || "https://keydrop-production-d38c.up.railway.app";
    const response = await fetch(`${apiUrl}/secrets`, {
      headers: {
        Authorization: `Bearer ${keydropKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`KeyDrop request failed with status ${response.status}`);
    }

    const data = await response.json();
    const secrets = data?.secrets;

    if (!secrets || typeof secrets !== "object") {
      throw new Error("KeyDrop returned an invalid secret payload");
    }

    for (const [key, value] of Object.entries(secrets)) {
      process.env[key] = String(value);
    }

    console.log(`[KeyDrop] Injected ${Object.keys(secrets).length} secret(s)`);
  })();

  return keydropInitPromise;
}

export async function GET() {
  try {
    await initKeydropSecrets();

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
    return NextResponse.json(
      { error: "Failed to fetch GitHub data", details: errorMessage },
      { status: 500 }
    );
  }
}
