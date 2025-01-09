export function GET() {
  return Response.json({
    greeting: "Hello from an API route",
  });
}

export async function POST(request: Request) {
  const name = new URL(request.url).searchParams.get("name");
  return Response.json({
    greeting: `Greetings for ${name}`,
  });
}
