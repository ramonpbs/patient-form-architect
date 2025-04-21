
import { useState } from "react";
import FormSection from "./FormSection";
import { FileText } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Patient } from "@/models/patient";

export function PersonalHistoryForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FormSection
      title="ANTECEDENTES PESSOAIS"
      icon={<FileText className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="text-muted-foreground italic text-center py-6">
        Seção de antecedentes pessoais - pronto para implementação de campos detalhados.
      </div>
    </FormSection>
  );
}
