
import React, {  } from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vane.cuevar98@gmail.com",
      href: "mailto:vane.cuevar98@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+52 3331831794",
      href: "tel:+523331831794"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Guadalajara, Mexico",
      href: "https://www.google.com/maps/place/Guadalajara,+Jalisco,+Mexico"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new opportunities 
              and collaborate on innovative projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm currently open to new opportunities and interesting projects. 
                  Whether you're looking for a full-time software engineer, need help with a specific project, 
                  or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-start space-y-4 w-full max-w-md">
                <div className="flex items-center space-x-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 w-full">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      Available for new opportunities
                    </span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-sm m-0">
                    Currently seeking full-time software engineering positions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
