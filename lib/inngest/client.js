import { Inngest } from "inngest";
import { Resend } from "resend";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "split-ai", name: "SplitAi" });

export const resend =  new Resend(process.env.RESEND_API_KEY);