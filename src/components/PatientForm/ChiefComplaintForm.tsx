
import { useState } from "react";
import FormSection from "./FormSection";
import { MessageSquare } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";

export function ChiefComplaintForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FormSection
      title="QUEIXA PRINCIPAL"
      icon={<MessageSquare className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="text-muted-foreground italic text-center py-6">
        Seção de queixa principal - pronto para implementação de campos detalhados.
      </div>
    </FormSection>
  );
}
