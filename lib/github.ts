export async function getContributionData(username: string) {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    throw new Error("GITHUB_TOKEN environment variable is not set");
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { username } }),
    cache: "no-store",
  });

  if (!res.ok) {
    const responseBody = await res.text();

    if (res.status === 401 || res.status === 403) {
      throw new Error(
        `GitHub token rejected by GitHub (${res.status} ${res.statusText}). Regenerate GITHUB_TOKEN and make sure it has access to the public profile data.`
      );
    }

    throw new Error(
      `Failed to fetch GitHub data: ${res.status} ${res.statusText}${responseBody ? ` - ${responseBody}` : ""}`
    );
  }

  const json = await res.json();
  
  if (json.errors) {
    throw new Error(`GitHub GraphQL Error: ${json.errors[0].message}`);
  }

  if (!json.data?.user?.contributionsCollection?.contributionCalendar) {
    throw new Error("Invalid response structure from GitHub API");
  } 

  return json.data.user.contributionsCollection.contributionCalendar;
}
