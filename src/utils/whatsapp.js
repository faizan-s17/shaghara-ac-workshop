/**
 * Sends a message to WhatsApp
 * @param {string} phoneNumber - WhatsApp phone number (with country code, no + or spaces)
 * @param {string} message - Message to send
 * @returns {string} - WhatsApp URL
 */
export const sendToWhatsApp = (phoneNumber, message) => {
  // Remove any non-numeric characters except +
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank');
};

/**
 * Formats form data into WhatsApp message
 * @param {Object} formData - Form data object
 * @returns {string} - Formatted message
 */
export const formatBookingMessage = (formData) => {
  const { name, phone, location, appliance, problem, preferredTime } = formData;
  
  let message = 'Hello, I want to book a service.\n\n';
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Location: ${location}\n`;
  message += `Appliance: ${appliance}\n`;
  message += `Problem: ${problem}\n`;
  
  if (preferredTime) {
    message += `Preferred Time: ${preferredTime}\n`;
  }
  
  return message;
};

/**
 * Formats contact form data into WhatsApp message
 * @param {Object} formData - Form data object
 * @returns {string} - Formatted message
 */
export const formatContactMessage = (formData) => {
  const { name, phone, location, appliance, problem, preferredTime } = formData;
  
  let message = 'Hello, I have an inquiry.\n\n';
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Location: ${location}\n`;
  message += `Appliance: ${appliance}\n`;
  message += `Problem: ${problem}\n`;
  if (preferredTime) {
    message += `Preferred Time: ${preferredTime}\n`;
  }
  
  return message;
};

// Business phone numbers (placeholders - to be updated by client)
export const BUSINESS_PHONE = '+971507971172';
export const BUSINESS_WHATSAPP = '+971507971172';
