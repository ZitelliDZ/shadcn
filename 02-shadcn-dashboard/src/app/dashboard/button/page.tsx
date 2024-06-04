import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "lucide-react";

 


export default function Page() {
  return (
    <div>
      <h1>Button</h1>
       <div className="grid grid-cols-5 gap-2"> 
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button> 

        <Button  disabled variant="default">Default</Button>
        <Button  disabled variant="secondary">Secondary</Button>
        <Button  disabled variant="destructive">Destructive</Button>
        <Button  disabled variant="ghost">Ghost</Button>
        <Button  disabled variant="link">Link</Button>
        <Button  disabled variant="outline">Outline</Button> 

        <Button variant="outline" size={'icon'}>
        <ChevronRightIcon className="h-6 w-6" /> 
        </Button>

  
        <Button variant="default">
        <EnvelopeOpenIcon className="mr-3 h-6 w-6" /> Login
        </Button>
        
        <Button disabled>
        <ReloadIcon className="mr-3 h-6 w-6 animate-spin" /> Login
        </Button>
        <Button disabled>
        <EnvelopeOpenIcon className="mr-3 h-6 w-6 animate-spin" /> Login
        </Button>
       </div>
    </div>
  );
}
