
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

  // Funções helper focadas só no necessário da imagem
  const handleField = (field: keyof typeof personal, value: any) => {
    updatePatient("personalHistory", { [field]: value });
  };
  const handleChronicField = (field: keyof typeof personal.chronicDiseases, value: boolean | string) => {
    updatePatient("personalHistory", {
      chronicDiseases: { ...personal.chronicDiseases, [field]: value }
    });
  };

  return (
    <FormSection
      title="ANTECEDENTES PESSOAIS"
      icon={<FileText className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <form className="space-y-5">

        {/* Doenças crônicas */}
        <div>
          <Label className="block font-semibold mb-2">Doenças crônicas:</Label>
          <div className="flex flex-wrap gap-4">
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.diabetes} onCheckedChange={v => handleChronicField("diabetes", !!v)} />
              DM
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.hypertension} onCheckedChange={v => handleChronicField("hypertension", !!v)} />
              HAS
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.kidneyFailure} onCheckedChange={v => handleChronicField("kidneyFailure", !!v)} />
              IRC
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.cancer} onCheckedChange={v => handleChronicField("cancer", !!v)} />
              Neoplasias
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.chronicDiseases.obesity} onCheckedChange={v => handleChronicField("obesity", !!v)} />
              Obesidade
            </Label>
          </div>
        </div>

        {/* Doenças Respiratórias, Cardiopatias, Outras */}
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <Label className="block mb-1">Doenças Respiratórias:</Label>
            <Checkbox checked={personal.chronicDiseases.respiratoryDiseases} onCheckedChange={v => handleChronicField('respiratoryDiseases', !!v)} />{" "}
            <Input
              placeholder="Quais?"
              className="w-full mt-1"
              value={personal.chronicDiseases.respiratoryDescription}
              onChange={e => handleChronicField('respiratoryDescription', e.target.value)}
              disabled={!personal.chronicDiseases.respiratoryDiseases}
            />
          </div>
          <div>
            <Label className="block mb-1">Cardiopatias:</Label>
            <Checkbox checked={personal.chronicDiseases.heartDiseases} onCheckedChange={v => handleChronicField('heartDiseases', !!v)} />{" "}
            <Input
              placeholder="Quais?"
              className="w-full mt-1"
              value={personal.chronicDiseases.heartDescription}
              onChange={e => handleChronicField('heartDescription', e.target.value)}
              disabled={!personal.chronicDiseases.heartDiseases}
            />
          </div>
          <div>
            <Label className="block mb-1">Outras:</Label>
            <Checkbox checked={personal.chronicDiseases.other} onCheckedChange={v => handleChronicField('other', !!v)} />{" "}
            <Input
              placeholder="Descreva"
              className="w-full mt-1"
              value={personal.chronicDiseases.otherDescription}
              onChange={e => handleChronicField('otherDescription', e.target.value)}
              disabled={!personal.chronicDiseases.other}
            />
          </div>
        </div>

        {/* Internações anteriores */}
        <div>
          <Label className="block mb-1">Internações anteriores:</Label>
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
          <Label className="block mb-1">Cirurgias anteriores:</Label>
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
          <Label className="block mb-1">Alergias:</Label>
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
        <div className="flex flex-row gap-6 items-end">
          <div>
            <Label className="block mb-1">Ciclo Menstrual:</Label>
            <div className="flex items-center gap-2">
              <Label className="flex items-center gap-1">
                <Checkbox
                  checked={personal.menstrualCycle === "Regular"}
                  onCheckedChange={() => handleField("menstrualCycle", "Regular")}
                />
                Regular
              </Label>
              <Label className="flex items-center gap-1">
                <Checkbox
                  checked={personal.menstrualCycle === "Irregular"}
                  onCheckedChange={() => handleField("menstrualCycle", "Irregular")}
                />
                Irregular
              </Label>
            </div>
          </div>
          <div>
            <Label className="block mb-1">Obs.:</Label>
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
          <Label className="block mb-1">Uso de medicamentos:</Label>
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
          <Label className="block mb-1">Esquema vacinal:</Label>
          <div className="flex items-center gap-3">
            <Label className="flex items-center gap-2">
              <Checkbox checked={!personal.vaccineSchedule} onCheckedChange={v => handleField('vaccineSchedule', !v)} />
              Não
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox checked={personal.vaccineSchedule} onCheckedChange={v => handleField('vaccineSchedule', !!v)} />
              Sim
            </Label>
            <Label className="ml-6 flex items-center gap-2">
              Adequado para a idade:
              <Checkbox checked={personal.ageAppropriateVaccines} onCheckedChange={v => handleField('ageAppropriateVaccines', !!v)} />
              Sim
              <Checkbox checked={!personal.ageAppropriateVaccines} onCheckedChange={v => handleField('ageAppropriateVaccines', !v)} />
              Não
            </Label>
          </div>
        </div>
        {/* Observação final */}
        <div>
          <Label className="block">Obs.:</Label>
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
