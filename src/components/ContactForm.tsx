import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SendIcon, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);
    }, 1500);
  }

  return (
    <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10 animate-scale-in w-full max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-[#08AFF1] mb-3">Send Us a Message</h2>
        <p className="text-gray-600 text-lg">Fill out the form below, and we'll respond promptly.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      className="rounded-xl border-gray-300 focus:border-[#08AFF1] focus:ring-[#08AFF1]/20 transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="email@example.com" 
                      type="email"
                      className="rounded-xl border-gray-300 focus:border-[#08AFF1] focus:ring-[#08AFF1]/20 transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="How can we help you?" 
                    className="rounded-xl border-gray-300 focus:border-[#08AFF1] focus:ring-[#08AFF1]/20 transition-all"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your inquiry..." 
                    className="h-40 rounded-xl border-gray-300 focus:border-[#08AFF1] focus:ring-[#08AFF1]/20 resize-none transition-all"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className={`rounded-xl py-6 px-8 text-md font-semibold transition-all duration-200 w-full ${
              isSuccess ? 'bg-[#AACF45] hover:bg-[#AACF45]/90' : 'bg-[#08AFF1] hover:bg-[#08AFF1]/90'
            } hover:scale-[1.02] active:scale-[0.98]`}
          >
            {isSubmitting ? (
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : isSuccess ? (
              <CheckCircle className="mr-2 h-5 w-5" />
            ) : (
              <SendIcon className="mr-2 h-5 w-5" />
            )}
            {isSubmitting ? 'Sending...' : isSuccess ? 'Sent Successfully' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
}