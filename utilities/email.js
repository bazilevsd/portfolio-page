import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const sendEmail = (
  name,
  email,

  message
) => {
  console.log(
    "process.env.YOUR_SERVICE_ID",
    `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`
  );

  //   const SERVICE_ID = process.env.YOUR_SERVICE_ID;
  emailjs
    .send(
      `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,

      {
        // to_email: receiverEmail,
        name,
        email: email,
        message,
      },
      `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success("Session booked successfully!");
      },
      (error) => {
        console.log(error.text);
        toast.error(error.text);
      }
    );
};
