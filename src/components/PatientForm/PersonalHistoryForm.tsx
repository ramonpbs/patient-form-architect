
import { useState } from "react";
import FormSection from "./FormSection";
import { FileText } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PersonalHistoryForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);

  const personal = patient.personalHistory;

  const handleField = (field: string, value: any) => {
    updatePatient("personalHistory", { [field]: value });
  };

  // For nested/complex structures (chronicDiseases, etc.)
  const handleNested = (nest: string, field: string, value: any) => {
    updatePatient("personalHistory", {
      [nest]: { ...personal[nest as keyof typeof personal], [field]: value },
    });
  };

  return (
    <FormSection
      title="ANTECEDENTES PESSOAIS"
      icon={<FileText className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <form className="space-y-6">

        {/* Doenças crônicas */}
        <div>
          <Label className="block text-sm mb-2">Doenças crônicas:</Label>
          <div className="flex flex-wrap gap-4">
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.diabetes} onCheckedChange={v => handleNested('chronicDiseases', 'diabetes', !!v)} />
              DM
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.hypertension} onCheckedChange={v => handleNested('chronicDiseases', 'hypertension', !!v)} />
              HAS
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.kidneyFailure} onCheckedChange={v => handleNested('chronicDiseases', 'kidneyFailure', !!v)} />
              IRC
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.cancer} onCheckedChange={v => handleNested('chronicDiseases', 'cancer', !!v)} />
              Neoplasias
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.obesity} onCheckedChange={v => handleNested('chronicDiseases', 'obesity', !!v)} />
              Obesidade
            </Label>
          </div>
        </div>

        {/* Doenças Respiratórias, Cardiopatias, Outras */}
        <div>
          <Label className="block text-sm mb-2">Doenças Respiratórias:</Label>
          <Label className="flex items-center gap-2 mb-2">
            <Checkbox checked={personal.chronicDiseases.respiratoryDiseases} onCheckedChange={v => handleNested('chronicDiseases', 'respiratoryDiseases', !!v)} />
            Sim
            <Input
              placeholder="Quais?"
              className="ml-2 w-40"
              value={personal.chronicDiseases.respiratoryDescription}
              onChange={e => handleNested('chronicDiseases', 'respiratoryDescription', e.target.value)}
              disabled={!personal.chronicDiseases.respiratoryDiseases}
            />
          </Label>
          <Label className="block text-sm mb-2 mt-2">Cardiopatias:</Label>
          <Label className="flex items-center gap-2 mb-2">
            <Checkbox checked={personal.chronicDiseases.heartDiseases} onCheckedChange={v => handleNested('chronicDiseases', 'heartDiseases', !!v)} />
            Sim
            <Input
              placeholder="Quais?"
              className="ml-2 w-40"
              value={personal.chronicDiseases.heartDescription}
              onChange={e => handleNested('chronicDiseases', 'heartDescription', e.target.value)}
              disabled={!personal.chronicDiseases.heartDiseases}
            />
          </Label>
          <Label className="block text-sm mb-2 mt-2">Outras:</Label>
          <Label className="flex items-center gap-2">
            <Checkbox checked={personal.chronicDiseases.other} onCheckedChange={v => handleNested('chronicDiseases', 'other', !!v)} />
            Sim
            <Input
              placeholder="Descreva"
              className="ml-2 w-40"
              value={personal.chronicDiseases.otherDescription}
              onChange={e => handleNested('chronicDiseases', 'otherDescription', e.target.value)}
              disabled={!personal.chronicDiseases.other}
            />
          </Label>
        </div>

        {/* Internações anteriores */}
        <div>
          <Label className="block text-sm mb-2">Internações anteriores:</Label>
          <div className="flex items-center gap-4">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.previousHospitalizations} onCheckedChange={v => handleField('previousHospitalizations', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.previousHospitalizations} onCheckedChange={v => handleField('previousHospitalizations', !!v)} />
              Sim
            </Label>
            <Input
              placeholder="Motivo"
              className="w-32"
              value={personal.hospitalizationReason}
              onChange={e => handleField('hospitalizationReason', e.target.value)}
              disabled={!personal.previousHospitalizations}
            />
            <Input
              placeholder="Quando"
              type="text"
              className="w-24"
              value={personal.hospitalizationDate}
              onChange={e => handleField('hospitalizationDate', e.target.value)}
              disabled={!personal.previousHospitalizations}
            />
          </div>
        </div>

        {/* Cirurgias anteriores */}
        <div>
          <Label className="block text-sm mb-2">Cirurgias Anteriores:</Label>
          <div className="flex items-center gap-4">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.previousSurgeries} onCheckedChange={v => handleField('previousSurgeries', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.previousSurgeries} onCheckedChange={v => handleField('previousSurgeries', !!v)} />
              Sim
            </Label>
            <Input
              placeholder="Motivo"
              className="w-32"
              value={personal.surgeryReason}
              onChange={e => handleField('surgeryReason', e.target.value)}
              disabled={!personal.previousSurgeries}
            />
            <Input
              placeholder="Quando"
              type="text"
              className="w-24"
              value={personal.surgeryDate}
              onChange={e => handleField('surgeryDate', e.target.value)}
              disabled={!personal.previousSurgeries}
            />
          </div>
        </div>

        {/* Alergias */}
        <div>
          <Label className="block text-sm mb-2">Alergias:</Label>
          <div className="flex items-center gap-4">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.allergies} onCheckedChange={v => handleField('allergies', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.allergies} onCheckedChange={v => handleField('allergies', !!v)} />
              Sim
            </Label>
            <Input
              placeholder="Alergeno"
              className="w-32"
              value={personal.allergen}
              onChange={e => handleField('allergen', e.target.value)}
              disabled={!personal.allergies}
            />
            <Input
              placeholder="Manifestações"
              className="w-36"
              value={personal.allergyManifestations}
              onChange={e => handleField('allergyManifestations', e.target.value)}
              disabled={!personal.allergies}
            />
          </div>
        </div>

        {/* Ciclo Menstrual */}
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div>
            <Label className="block text-sm">Ciclo Menstrual:</Label>
            <div className="flex items-center gap-2">
              <Label className="flex items-center gap-1">
                <Checkbox
                  checked={personal.menstrualCycle === "Regular"}
                  onCheckedChange={() =>
                    handleField("menstrualCycle", "Regular")
                  }
                />
                Regular
              </Label>
              <Label className="flex items-center gap-1">
                <Checkbox
                  checked={personal.menstrualCycle === "Irregular"}
                  onCheckedChange={() =>
                    handleField("menstrualCycle", "Irregular")
                  }
                />
                Irregular
              </Label>
            </div>
          </div>
          <div>
            <Label className="block text-sm">Obs.:</Label>
            <Input
              className="w-36"
              placeholder="Observações"
              value={personal.menstrualObservations}
              onChange={e => handleField('menstrualObservations', e.target.value)}
            />
          </div>
        </div>

        {/* Uso de medicamentos */}
        <div>
          <Label className="block text-sm mb-2">Uso de medicamentos:</Label>
          <div className="flex items-center gap-3 mb-2">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.medicationUse} onCheckedChange={v => handleField('medicationUse', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.medicationUse} onCheckedChange={v => handleField('medicationUse', !!v)} />
              Sim
            </Label>
            <Input
              placeholder="Quais"
              className="w-32"
              value={personal.medications}
              onChange={e => handleField('medications', e.target.value)}
              disabled={!personal.medicationUse}
            />
            <Input
              placeholder="Há quanto tempo?"
              className="w-36"
              value={personal.medicationTime}
              onChange={e => handleField('medicationTime', e.target.value)}
              disabled={!personal.medicationUse}
            />
          </div>
        </div>

        {/* Esquema vacinal */}
        <div>
          <Label className="block text-sm mb-2">Esquema vacinal:</Label>
          <div className="flex items-center gap-3">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.vaccineSchedule} onCheckedChange={v => handleField('vaccineSchedule', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.vaccineSchedule} onCheckedChange={v => handleField('vaccineSchedule', !!v)} />
              Sim
            </Label>
            <Label className="ml-8 flex items-center gap-2">
              Adequado para a idade:
              <Checkbox checked={personal.ageAppropriateVaccines} onCheckedChange={v => handleField('ageAppropriateVaccines', !!v)} />
              Sim
              <Checkbox checked={!personal.ageAppropriateVaccines} onCheckedChange={v => handleField('ageAppropriateVaccines', !v)} />
              Não
            </Label>
          </div>
        </div>

        {/* Observações */}
        <div>
          <Label className="block text-sm">Obs.:</Label>
          <Input
            placeholder="Observações gerais"
            value={personal.observations}
            onChange={e => handleField('observations', e.target.value)}
          />
        </div>
      </form>
    </FormSection>
  );
}
