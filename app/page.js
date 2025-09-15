import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>Hello
      <br/>
      <Button>Login</Button>
      <Card className="w-full max-w-sm">
        <CardTitle>Intro</CardTitle>
        <CardDescription>Hi, I'm Aryan</CardDescription>
      </Card>
    </div>
  );
}
