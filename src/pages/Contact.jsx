import { useState } from 'react'

/**
 * Contact page component
 * 
 * To edit:
 * - Update email address in the email link and form action
 * - Modify the availability message
 * - Customize form fields if needed
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Edit this email address
  const email = 'berihumeron06@gmail.com'

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value) {
          error = 'Email is required'
        } else if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'name':
        if (!value.trim()) {
          error = 'Name is required'
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters'
        }
        break
      case 'subject':
        if (!value.trim()) {
          error = 'Subject is required'
        } else if (value.trim().length < 3) {
          error = 'Subject must be at least 3 characters'
        }
        break
      case 'message':
        if (!value.trim()) {
          error = 'Message is required'
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters'
        }
        break
      default:
        break
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({
        ...errors,
        [name]: error,
      })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({
      ...touched,
      [name]: true,
    })
    
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    }
    setTouched(allTouched)
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })
    
    setErrors(newErrors)
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    // In a real application, you would send this to a backend API
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setTouched({})
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="section-divider mt-6"></div>
        </div>

        {/* Availability Notice */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-600 p-6 mb-12 rounded-r-xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Open to Opportunities
              </h3>
              <p className="text-primary-800">
                I'm currently open to internships, freelance projects, and full-time roles. 
                Whether you have a specific project in mind or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></span>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" noValidate>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-500 focus:border-red-500 bg-red-50'
                      : touched.name && !errors.name
                      ? 'border-green-400 focus:ring-green-500 focus:border-green-500 bg-green-50'
                      : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1 animate-fade-in" role="alert">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-500 focus:border-red-500 bg-red-50'
                      : touched.email && !errors.email
                      ? 'border-green-400 focus:ring-green-500 focus:border-green-500 bg-green-50'
                      : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1 animate-fade-in" role="alert">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                    errors.subject
                      ? 'border-red-400 focus:ring-red-500 focus:border-red-500 bg-red-50'
                      : touched.subject && !errors.subject
                      ? 'border-green-400 focus:ring-green-500 focus:border-green-500 bg-green-50'
                      : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1 animate-fade-in" role="alert">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows="6"
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-500 focus:border-red-500 bg-red-50'
                      : touched.message && !errors.message
                      ? 'border-green-400 focus:ring-green-500 focus:border-green-500 bg-green-50'
                      : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-600 flex items-center gap-1 animate-fade-in" role="alert">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg animate-scale-in" role="alert" aria-live="polite">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label={isSubmitting ? 'Submitting form' : 'Submit contact form'}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></span>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: 'email', title: 'Email', link: `mailto:${email}`, text: email },
                  { icon: 'github', title: 'GitHub', link: 'https://github.com/Meron006', text: 'github.com/Meron006' },
                  { icon: 'linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/meron-berihu-849632397/', text: 'linkedin.com/in/meron-berihu-849632397' },
                ].map((item, index) => (
                  <div 
                    key={item.icon}
                    className="group flex items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                      {item.icon === 'email' && (
                        <svg className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.icon === 'github' && (
                        <svg className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {item.icon === 'linkedin' && (
                        <svg className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        target={item.icon !== 'email' ? '_blank' : undefined}
                        rel={item.icon !== 'email' ? 'noopener noreferrer' : undefined}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors flex items-center gap-2 group/link"
                      >
                        {item.text}
                        {item.icon !== 'email' && (
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 rounded-2xl p-8 border-2 border-primary-200/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary-200/50 rounded-lg">
                  <svg className="h-6 w-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I typically respond to messages within 24-48 hours. For urgent matters, 
                    please mention it in your message subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

