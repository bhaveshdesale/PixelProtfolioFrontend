export async function fetchAndIncrementVisitors(): Promise<number> {
  const res = await fetch("http://localhost:3000/api/visitors", {
    method: "GET",
    credentials: "omit",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch visitor count");
  }

  const data = await res.json();

  // backend returns a number directly
  return Number(data);
}
