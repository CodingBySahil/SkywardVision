import * as yup from 'yup';

// Contact form validation schema
export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\+]?[0-9\s\-\(\)]{10,15}$/, 'Please enter a valid phone number'),
  subject: yup
    .string()
    .required('Please select a subject'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters'),
  file: yup
    .mixed()
    .nullable()
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      if (!value) return true;
      return value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test('fileType', 'Only images, PDFs, and documents are allowed', (value) => {
      if (!value) return true;
      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      return allowedTypes.includes(value.type);
    }),
});

// Newsletter subscription schema
export const newsletterSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
});

// Search form schema
export const searchSchema = yup.object().shape({
  query: yup
    .string()
    .required('Please enter a search term')
    .min(2, 'Search term must be at least 2 characters'),
});

export default {
  contactFormSchema,
  newsletterSchema,
  searchSchema,
};