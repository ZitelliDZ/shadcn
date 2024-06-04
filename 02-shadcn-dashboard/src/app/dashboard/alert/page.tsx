import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RocketIcon } from "lucide-react"


export default function Page() {
  return (
    <div>
      <h1>Alert Page</h1>
      <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <hr />
    
    <Alert variant={"success"}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Éxito</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <hr />
    <Alert variant={"info"}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Información</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <hr />
    <Alert variant={"warning"}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Alerta</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <hr />
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
    </div>
  );
}
