export const isClient = (typeof document !== 'undefined');

export const isDevelopment = process.env.NODE_ENV !== 'production';