
import { useState } from "react";
import FormSection from "./FormSection";
import { Users } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";

export function FamilyHistoryForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FormSection
      title="ANTECEDENTES FAMILIARES"
      icon={<Users className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="text-muted-foreground italic text-center py-6">
        Seção de antecedentes familiares - pronto para implementação de campos detalhados.
      </div>
    </FormSection>
  );
}
