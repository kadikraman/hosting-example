export function GET() {
  console.log("About to greet!");
  return Response.json({
    greeting: "Hello from an API route",
    MY_VALUE: process.env.MY_VALUE,
    EXPO_PUBLIC_VALUE: process.env.EXPO_PUBLIC_VALUE,
  });
}

export async function POST(request: Request) {
  const name = new URL(request.url).searchParams.get("name");
  return Response.json({
    greeting: `Greetings for ${name}`,
  });
}
