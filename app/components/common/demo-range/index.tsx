"use client"

import * as React from "react"
import { Slider } from "@/app/components/common/shadecn/ui/slider"
import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof Slider>

export function RangeSlider({ className, ...props }: SliderProps) {
  const [value, setValue] = React.useState([50]) // Default start value

  return (
    <div className={cn("w-[20%] space-y-4", className)}>
      <div className="flex justify-between ">
        <label className="text-sm font-medium">Volume</label>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        value={value}
        onValueChange={setValue}
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  )
}