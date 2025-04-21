
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Form validation utilities
export function validateRequired(value: any): { valid: boolean; message: string } {
  if (value === undefined || value === null || value === '') {
    return { valid: false, message: 'Campo obrigatório' };
  }
  return { valid: true, message: '' };
}

export function validateEmail(email: string): { valid: boolean; message: string } {
  if (!email) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return { valid: false, message: 'Email inválido' };
  }
  return { valid: true, message: '' };
}

export function validateNumber(value: string): { valid: boolean; message: string } {
  if (!value) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  if (isNaN(Number(value))) {
    return { valid: false, message: 'Deve ser um número' };
  }
  return { valid: true, message: '' };
}

export function validateDate(date: string): { valid: boolean; message: string } {
  if (!date) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  // Check if it's a valid date
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    return { valid: false, message: 'Data inválida' };
  }
  return { valid: true, message: '' };
}

export function validatePhone(phone: string): { valid: boolean; message: string } {
  if (!phone) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  // Simple phone validation - can be customized for specific country formats
  const re = /^\+?[0-9]{10,15}$/;
  if (!re.test(phone.replace(/\s+/g, ''))) {
    return { valid: false, message: 'Telefone inválido' };
  }
  return { valid: true, message: '' };
}

export function validateMinLength(value: string, minLength: number): { valid: boolean; message: string } {
  if (!value) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  if (value.length < minLength) {
    return { valid: false, message: `Deve ter pelo menos ${minLength} caracteres` };
  }
  return { valid: true, message: '' };
}

export function validateMaxLength(value: string, maxLength: number): { valid: boolean; message: string } {
  if (!value) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  if (value.length > maxLength) {
    return { valid: false, message: `Deve ter no máximo ${maxLength} caracteres` };
  }
  return { valid: true, message: '' };
}

export function validateAge(value: number): { valid: boolean; message: string } {
  if (!value && value !== 0) return { valid: true, message: '' }; // Empty is allowed unless combined with required
  
  if (value < 0 || value > 120) {
    return { valid: false, message: 'Idade inválida' };
  }
  return { valid: true, message: '' };
}

export function formatDate(date: string): string {
  if (!date) return '';
  
  try {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR');
  } catch (e) {
    return date;
  }
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function calculateBMI(weight: number, height: number): number {
  if (!weight || !height) return 0;
  
  // Height in meters (convert from cm if necessary)
  const heightInMeters = height >= 3 ? height / 100 : height;
  
  // BMI formula: weight (kg) / (height (m) * height (m))
  return Math.round((weight / (heightInMeters * heightInMeters)) * 10) / 10;
}

export function getBMICategory(bmi: number): string {
  if (bmi === 0) return '';
  if (bmi < 18.5) return 'Abaixo do peso';
  if (bmi < 25) return 'Peso normal';
  if (bmi < 30) return 'Sobrepeso';
  if (bmi < 35) return 'Obesidade Grau I';
  if (bmi < 40) return 'Obesidade Grau II';
  return 'Obesidade Grau III';
}

export function getAgeFromBirthdate(birthdate: string): number {
  if (!birthdate) return 0;
  
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}
