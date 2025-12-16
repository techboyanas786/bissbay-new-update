import validator from 'validator';

/**
 * Input sanitization and validation utilities
 */

export function sanitizeInput(input, options = {}) {
  if (typeof input !== 'string') {
    return input;
  }
  
  let sanitized = input.trim();
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');
  
  // HTML escape if requested
  if (options.escapeHtml !== false) {
    sanitized = validator.escape(sanitized);
  }
  
  // Remove control characters except newlines and tabs
  if (options.removeControlChars) {
    sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  }
  
  // Limit length
  if (options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength);
  }
  
  return sanitized;
}

export function validateUsername(username) {
  const errors = [];
  
  if (!username) {
    errors.push('Username is required');
    return { isValid: false, errors, sanitized: '' };
  }
  
  const sanitized = sanitizeInput(username, { maxLength: 50, escapeHtml: true });
  
  if (sanitized.length < 3) {
    errors.push('Username must be at least 3 characters long');
  }
  
  if (sanitized.length > 50) {
    errors.push('Username must be less than 50 characters');
  }
  
  // Only allow alphanumeric and underscore
  if (!/^[a-zA-Z0-9_]+$/.test(sanitized)) {
    errors.push('Username can only contain letters, numbers, and underscores');
  }
  
  // Prevent SQL injection keywords in username
  const sqlKeywords = ['select', 'insert', 'update', 'delete', 'drop', 'create', 'alter', 'union', 'script'];
  const lowerSanitized = sanitized.toLowerCase();
  if (sqlKeywords.some(keyword => lowerSanitized.includes(keyword))) {
    errors.push('Username contains prohibited content');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitized
  };
}

export function validatePassword(password) {
  const errors = [];
  
  if (!password) {
    errors.push('Password is required');
    return { isValid: false, errors };
  }
  
  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long');
  }
  
  if (password.length > 200) {
    errors.push('Password is too long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  // Check for spaces
  if (/\s/.test(password)) {
    errors.push('Password cannot contain spaces');
  }
  
  // Check for common weak patterns
  if (/(.)\1{2,}/.test(password)) {
    errors.push('Password cannot contain repeated characters');
  }
  
  // Check for sequential characters
  if (/123|abc|qwe/i.test(password)) {
    errors.push('Password cannot contain sequential characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function sanitizeUserAgent(userAgent) {
  if (!userAgent) return 'Unknown';
  
  // Limit length and remove potentially harmful content
  return sanitizeInput(userAgent, { 
    maxLength: 500, 
    escapeHtml: true,
    removeControlChars: true
  });
}

export function validateIPAddress(ip) {
  if (!ip) return false;
  
  // Check if it's a valid IPv4 or IPv6 address
  return validator.isIP(ip);
}

export function sanitizeIPAddress(ip) {
  if (!ip) return '127.0.0.1';
  
  // Validate and return clean IP
  const cleanIP = ip.split(',')[0].trim(); // Handle forwarded headers
  
  if (validateIPAddress(cleanIP)) {
    return cleanIP;
  }
  
  return '127.0.0.1';
}

export function detectSuspiciousActivity(request) {
  const suspiciousPatterns = [
    // SQL injection attempts
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|UNION)\b)/i,
    // XSS attempts
    /<script|javascript:|onload=|onerror=/i,
    // Path traversal
    /\.\./,
    // Command injection
    /[;&|`$(){}]/,
    // Null bytes
    /\0/,
  ];
  
  const checkContent = JSON.stringify(request.body || {}) + (request.url || '');
  
  return suspiciousPatterns.some(pattern => pattern.test(checkContent));
}

export function logSecurityEvent(eventType, details, severity = 'medium') {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    eventType,
    severity,
    details,
    source: 'bissbay-admin-security'
  };
  
  // In production, this should go to a proper logging service
  console.warn('SECURITY EVENT:', JSON.stringify(logEntry));
  
  // Could also store in database for analysis
  // await storeSecurityLog(logEntry);
}

export function createSecureHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google.com",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  };
}