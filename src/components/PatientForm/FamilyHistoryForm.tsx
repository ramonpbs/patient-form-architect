
import { useState } from "react";
import FormSection from "./FormSection";
import { Users } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FIELDS = [
  { key: "diabetes", label: "DM (Diabetes Mellitus)" },
  { key: "hypertension", label: "OHAS (Hipertensão)" },
  { key: "kidneyFailure", label: "IRC (Insuficiência Renal Crônica)" },
  { key: "cancer", label: "Neoplasias" },
  { key: "obesity", label: "Obesidade" },
  { key: "respiratoryDiseases", label: "Doenças Respiratórias" },
  { key: "heartDiseases", label: "Cardiopatias" },
  { key: "other", label: "Outras" },
];

export function FamilyHistoryForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);

  const familyHistory = patient.familyHistory ?? {};

  const handleChange = (field: string, checked: boolean) => {
    updatePatient("familyHistory", {
      [field]: { ...familyHistory[field], has: checked }
    });
  };

  const handleRelChange = (field: string, value: string) => {
    updatePatient("familyHistory", {
      [field]: { ...familyHistory[field], relationship: value }
    });
  };

  const handleDescChange = (field: string, value: string) => {
    updatePatient("familyHistory", {
      [field]: { ...familyHistory[field], description: value }
    });
  };

  return (
    <FormSection
      title="ANTECEDENTES FAMILIARES"
      icon={<Users className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="grid gap-6">
        {FIELDS.map((f) => (
          <div key={f.key} className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Label className="w-48 min-w-[170px]">{f.label}:</Label>
            <Switch
              checked={!!familyHistory[f.key]?.has}
              onCheckedChange={(v) => handleChange(f.key, v)}
              id={`fh-${f.key}-switch`}
            />
            <span className="text-sm ml-1">Sim</span>
            <span className="mx-1 text-sm text-muted-foreground">/</span>
            <span className="text-sm">Não</span>
            {!!familyHistory[f.key]?.has && (
              <>
                <Input
                  className="ml-4 w-48"
                  placeholder="Grau de parentesco"
                  value={familyHistory[f.key]?.relationship || ""}
                  onChange={(e) => handleRelChange(f.key, e.target.value)}
                />
                {(f.key === "respiratoryDiseases" ||
                  f.key === "heartDiseases" ||
                  f.key === "other") && (
                  <Input
                    className="w-60 ml-2"
                    placeholder="Descrição"
                    value={familyHistory[f.key]?.description || ""}
                    onChange={(e) => handleDescChange(f.key, e.target.value)}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </FormSection>
  );
}
