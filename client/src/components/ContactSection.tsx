import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import sixthVideo from "@assets/6th_1764001382379.mp4";
import { useRef, useState } from "react";
import { useVideoLoader } from "@/hooks/useVideoLoader";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const videoRef7 = useRef<HTMLVideoElement>(null);
  useVideoLoader("contact", videoRef7);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // ✅ BACKEND CONNECTED HERE
  const onSubmit = async (data: ContactForm) => {
    try {
      setIsSubmitting(true);

      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent 🚀",
        description: "Thank you for reaching out. I’ll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      data-testid="section-contact"
    >
      {/* Background Video */}
      <video
        ref={videoRef7}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-cover pixel-video smooth-video"
        style={{ pointerEvents: "none" }}
      >
        <source src={sixthVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />

      {isVisible && (
        <div className="relative z-10 max-w-4xl mx-auto animate-section-load">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-pixel text-3xl md:text-4xl font-bold text-white/95 mb-4 pixel-shadow">
              GET IN TOUCH
            </h2>
            <p className="text-white/80 font-pixel text-xs">
              HAVE A PROJECT IN MIND OR JUST WANT TO CHAT? REACH OUT!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Info */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <Mail className="w-16 h-16 text-white/70" />
              </div>
              <p className="font-pixel text-xs text-white/80">
                BHAVESHDESALE16@GMAIL.COM
              </p>
                
                <p className="text-white/70 font-pixel text-xs drop-shadow-md">LET'S COLLABORATE!</p>
             
            </div>

            {/* Form */}
            <Card className="p-8 backdrop-blur-md bg-white/10 border-white/20">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-pixel text-xs text-white">
                          NAME
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-pixel text-xs text-white">
                          EMAIL
                        </FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-pixel text-xs text-white">
                          MESSAGE
                        </FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full font-pixel text-xs bg-white/20 hover:bg-white/30 border border-white/40"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
}
