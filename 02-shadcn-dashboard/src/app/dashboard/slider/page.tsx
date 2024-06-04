'use client'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
 
type SliderProps = React.ComponentProps<typeof Slider>
 
export default function Page({ className, ...props }: SliderProps) {

  const [sliderValue, setSliderValue] = useState(10)
  const [rangeValue, setRangerValue] = useState<number[]>([40 ,60])
  
  return (
    <>
    
    <Slider
      defaultValue={[sliderValue]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
      onValueChange={(values) => {
        setSliderValue(values[0])
      }}
    />
    
    <div>
      {sliderValue}
    </div>

    
    <Slider
      defaultValue={rangeValue}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
      onValueChange={
        (values) => {
          setRangerValue(values) 
        }
      }
    />

    <div>
      {rangeValue.join(' - ')}
    </div>
    </>
  )
}