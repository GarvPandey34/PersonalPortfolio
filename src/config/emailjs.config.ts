// 📧 EmailJS Configuration
// 
// ⚡ QUICK SETUP (5 minutes):
// 1. Create free account at https://www.emailjs.com/
// 2. Add email service (Gmail recommended)
// 3. Create email template
// 4. Copy your 3 IDs below
// 
// 📖 Detailed guide: /EMAILJS_SETUP.md
// 
// 🔍 Find your IDs:
// - Service ID: https://dashboard.emailjs.com/admin
// - Template ID: https://dashboard.emailjs.com/admin/templates
// - Public Key: https://dashboard.emailjs.com/admin/account

export const emailJsConfig = {
  serviceId: "service_rqnniin",     // Your EmailJS Service ID
  templateId: "template_39emmtp",   // Your EmailJS Template ID (✅ Updated)
  publicKey: "2p9v5zEjWPaIyQqUJ",   // Your EmailJS Public Key
};

// ⚠️ Don't edit below this line unless you know what you're doing

// Check if EmailJS is configured
export const isEmailJsConfigured = () => {
  return (
    emailJsConfig.serviceId !== "YOUR_SERVICE_ID" &&
    emailJsConfig.templateId !== "YOUR_TEMPLATE_ID" &&
    emailJsConfig.publicKey !== "YOUR_PUBLIC_KEY"
  );
};
