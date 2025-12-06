/**
 * Contact Information Data
 * Centralized contact details for the website
 */

export interface ContactInfo {
    email: string;
    phone: string;
    whatsapp: string;
    whatsappNumber: string; // Format: 970591234567 (without +)
    location: {
        ar: string;
        en: string;
    };
}

export const contactInfo: ContactInfo = {
    email: 'info@sirbit.com',
    phone: '+970 59 123 4567',
    whatsapp: '+970 59 123 4567',
    whatsappNumber: '970591234567', // Used for WhatsApp link
    location: {
        ar: 'فلسطين - نعمل عن بعد عالميًا',
        en: 'Palestine - Working Remotely Worldwide',
    },
};

/**
 * Get WhatsApp link with optional pre-filled message
 */
export function getWhatsAppLink(message?: string): string {
    const baseUrl = `https://wa.me/${contactInfo.whatsappNumber}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}
