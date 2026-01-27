import { MailIcon } from "lucide-react";
import Link from "next/link";

const ContactUs = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-center">
      <b className="font-semibold text-muted-foreground text-sm uppercase">
        Contact Us
      </b>
      <h2 className="mt-3 font-semibold text-2xl tracking-tight md:text-4xl">
        Get In Touch
      </h2>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Our friendly team is always here to chat.
      </p>
      <div className="flex justify-center max-w-(--breakpoint-xl) px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-pink-400 text-primary shadow-xl/2 dark:bg-pink-400">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="mt-4 font-medium text-primary"
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
