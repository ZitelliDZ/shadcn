"use client"
 
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
 
export default function Page() {


  const { toast } = useToast()

  const toastClick = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: (<ToastAction
        onClick={() => toastClick()}
        altText="Try again">Try again</ToastAction>),
    })
  }
 
  return (
    <>
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
    <Button
    variant="outline"
    onClick={() => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (<ToastAction
          onClick={() => toastClick()}
          altText="Try again">Try again</ToastAction>),
      })
    }}
  >
    Show Toast
  </Button>
    <Button
    variant="outline"
    onClick={() => {
      toast({
        variant: "success",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (<ToastAction
          onClick={() => toastClick()}
          altText="Try again">Try again</ToastAction>),
      })
    }}
  >
    Show Toast
  </Button>
  </>
  )
}