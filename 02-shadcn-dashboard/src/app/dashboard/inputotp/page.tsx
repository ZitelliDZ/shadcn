'use client'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function Page() {
  const [otp, setOtp] = useState<string>("");
  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };
  return (
    <>
      <InputOTP maxLength={9} value={otp} onChange={handleOtpChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
        </InputOTPGroup>
      </InputOTP>

      <div>
        <h1>OTP</h1>
        <p>{otp}</p>
      </div>
    </>
  );
}
