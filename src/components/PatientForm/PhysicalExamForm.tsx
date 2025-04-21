
import { useState } from "react";
import FormSection from "./FormSection";
import { Stethoscope } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";

export function PhysicalExamForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <FormSection
      title="EXAME FÍSICO"
      icon={<Stethoscope className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="text-muted-foreground italic text-center py-6">
        Seção de exame físico - pronto para implementação de campos detalhados.
      </div>
    </FormSection>
  );
}
