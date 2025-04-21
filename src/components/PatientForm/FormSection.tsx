
import { ReactNode } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function FormSection({ 
  title, 
  icon, 
  children, 
  isOpen, 
  onToggle,
  className
}: FormSectionProps) {
  return (
    <div className={cn("form-section", className)}>
      <button
        type="button"
        onClick={onToggle}
        className="form-section-title w-full text-left flex items-center"
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span className="flex-1">{title}</span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default FormSection;
