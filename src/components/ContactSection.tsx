import { Mail, MapPin, PhoneCallIcon, PhoneMissedIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";

export default function ContactSection() {
  return <section id="contact" className="relative min-h-screen py-24 px-4 ">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In<span className="text-primary"> Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        compose a great message to earge a person to get in touch.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <Mail className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all " />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Email</h4>
                <a href="mailto:nimmohkaranja12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  nimmohkaranja12@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <PhoneCallIcon className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all" />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Phone</h4>
                <a href="tel:+254 799 671 341" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 799 671 341
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10" >
                <MapPin className="h-6 w-6 text-primary hover:text-card hover:scale-120 transition-all" />
              </div>
              <div>
                <h4 className="font-medium flex items-start"> Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Lamu, Kenya.
                </a>
              </div>
            </div>

          </div>
          <div className="pt-8">
            <h4 className="font-medium mb-4"> Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="" target="_blank">
                <PhoneMissedIcon />
              </a>
              <a href="" target="_blank">
                <PhoneMissedIcon />
              </a>
              <a href="" target="_blank">
                <PhoneMissedIcon />
              </a>
              <a href="" target="_blank">
                <PhoneMissedIcon />
              </a>
              <a href="" target="_blank">
                <PhoneMissedIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs" >
          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Anne Karanja..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="anne@gmail.com..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <button type="submit" className={cn("button w-full flex items-center justify-center gap-2",
            )}>
              Send Message"

              <Send />

            </button>
          </form>

        </div>
      </div>
    </div>
  </section>
}