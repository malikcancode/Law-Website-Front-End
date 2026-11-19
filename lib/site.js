export const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const whatsappLink = (whatsapp, text = 'Hello, I would like to book a legal consultation regarding a financial fraud case.') =>
  `https://wa.me/${String(whatsapp || '').replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export const telLink = (phone) => `tel:${phone}`;
