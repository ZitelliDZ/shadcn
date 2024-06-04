"use client"
  
 
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
 
export default function Page() {
  const [progress, setProgress] = useState(13)
 
  useEffect(() => {
    // const timer = setTimeout(() => setProgress(66), 500)
    // return () => clearTimeout(timer)

    const interval = setInterval(() => {
      setProgress((progress) => (progress >= 100 ? 0 : progress + 10))
    }, 100)

    return () => clearInterval(interval)

  }, [])
 
  return (<>
    <Progress value={progress} className="w-[60%]" />
  <div className="mt-10" />
  <Progress value={progress} indicatorColor={
    cn({
      'bg-primary': progress < 50,
      'bg-green-500': progress >= 50 && progress < 80,
      'bg-red-500': progress >= 80
    
    })
  } />
  <div className="mt-10" />
  <Progress value={progress} className="bg-blue-400"  />
  </>)
}