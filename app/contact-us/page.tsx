import { MailIcon } from "lucide-react";
import Link from "next/link";

const ContactUs = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-center">
      <div className="flex justify-center max-w-(--breakpoint-xl) px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-pink-400 text-primary shadow-xl/2 dark:bg-pink-400">
            <MailIcon />
          </div>
          <b className="font-semibold mt-4 text-lg md:text-2xl uppercase">
            Contact Us
          </b>
          <p className="mt-2 text-muted-foreground md:text-xl">
            Our friendly team is here to help.
          </p>
          <Link
            className="mt-4 font-medium text-primary text-2xl md:text-3xl"
            href="mailto:admin@cavefoundation.com"
          >
            admin@cavefoundation.com
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
