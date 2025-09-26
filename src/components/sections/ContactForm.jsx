import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Send, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Upload, X } from 'lucide-react';
import { contactFormSchema } from '@/lib/validators';
import { sendContactForm } from '@/lib/api';
import { CONTACT_SUBJECTS } from '@/utils/constants';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onChange'
  });

  const subject = watch('subject');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === 'file' && data[key] && data[key][0]) {
          formData.append(key, data[key][0]);
        } else if (key !== 'file') {
          formData.append(key, data[key]);
        }
      });

      await sendContactForm(formData);
      
      setSubmitSuccess(true);
      toast.success('Message sent successfully!', {
        description: 'We will get back to you within 24 hours.',
      });
      
      reset();
      setSelectedFile(null);
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setValue('file', e.target.files);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setValue('file', null);
    // Reset the file input
    const fileInput = document.getElementById('file');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  if (submitSuccess) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-xl">
            <CardContent className="pt-16 pb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blackish mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting SkywardVision. We have received your message 
                and will get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-gradient-to-r from-sky-400 to-blue-600"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-4">
              Ready to Start Your
              <span className="text-primary block">Next Project?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you with a customized solution 
              tailored to your business needs.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-blackish">
                Contact Form
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blackish font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className={errors.name ? 'border-red-500' : ''}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p 
                      id="name-error" 
                      className="text-red-500 text-sm flex items-center space-x-1"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blackish font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={errors.email ? 'border-red-500' : ''}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p 
                      id="email-error" 
                      className="text-red-500 text-sm flex items-center space-x-1"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blackish font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={errors.phone ? 'border-red-500' : ''}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p 
                      id="phone-error" 
                      className="text-red-500 text-sm flex items-center space-x-1"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone.message}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-blackish font-semibold">
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <Select 
                    onValueChange={(value) => setValue('subject', value)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  >
                    <SelectTrigger 
                      className={errors.subject ? 'border-red-500' : ''}
                      aria-invalid={errors.subject ? 'true' : 'false'}
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_SUBJECTS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p 
                      id="subject-error" 
                      className="text-red-500 text-sm flex items-center space-x-1"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blackish font-semibold">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className={errors.message ? 'border-red-500' : ''}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p 
                      id="message-error" 
                      className="text-red-500 text-sm flex items-center space-x-1"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* File Upload Field */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-blackish font-semibold">
                    Attach File (Optional)
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="file"
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      aria-describedby="file-help file-error"
                    />
                    <p id="file-help" className="text-sm text-gray-500">
                      Max file size: 5MB. Supported formats: JPG, PNG, GIF, PDF, DOC, DOCX
                    </p>
                    
                    {selectedFile && (
                      <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Upload className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-blue-800 font-medium">
                            {selectedFile.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </Badge>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                          aria-label="Remove attached file"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    
                    {errors.file && (
                      <p 
                        id="file-error" 
                        className="text-red-500 text-sm flex items-center space-x-1"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.file.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                  Or contact us directly at{' '}
                  <a 
                    href="tel:+923001234567" 
                    className="text-primary hover:underline font-semibold"
                  >
                    +92 300 1234567
                  </a>{' '}
                  or{' '}
                  <a 
                    href="mailto:info@skywardvision.com" 
                    className="text-primary hover:underline font-semibold"
                  >
                    info@skywardvision.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;