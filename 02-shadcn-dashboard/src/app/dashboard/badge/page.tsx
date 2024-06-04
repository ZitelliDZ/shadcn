"use client";

import { Badge } from "@/components/ui/badge";

 

export default function Page() {
  return (
    <>
      <h1>Badge</h1>
      <div className="gap-4 flex flex-row">
         <Badge>Badge</Badge>
         <Badge variant="destructive">Destructive</Badge>
         <Badge variant="default">Default</Badge>
         <Badge variant="outline">Outline</Badge>
         <Badge variant="secondary">Secondary</Badge>
         <Badge variant="success">Success</Badge>
          <Badge variant="warning">asdasd</Badge>
          <Badge capitalize variant="info">asdasd</Badge>
          <Badge capitalize={false} variant="info">asdasd</Badge>
          <Badge capitalize={true} variant="info">asdasd</Badge>
          
         <Badge variant="danger">Danger</Badge>

         
         

      </div>
    </>
  );
}
