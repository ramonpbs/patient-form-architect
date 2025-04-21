import { useState } from "react";
import FormSection from "./FormSection";
import { Stethoscope } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const conscienciaOptions = [
  "Consciente",
  "Inconsciente",
  "Orientado",
  "Desorientado",
  "Torporoso",
  "Prostado",
  "Apático"
];
const emocionalOptions = [
  "Medo",
  "Ansioso",
  "Depressivo",
  "Calmo",
  "Agitado",
  "Triste",
  "Alegre"
];
const selfCareOptions = [
  "Dependente",
  "Parcialmente dependente",
  "Independente"
];
const bodyCareOptions = [
  "Adequado",
  "Inadequado"
];
const bodyHygieneOptions = [
  "Aspersão",
  "Imersão",
  "Horário M",
  "Horário T"
];
const turgorOptions = [
  "Preservado",
  "Diminuído"
];
const perfusaoOptions = [
  "Preservado",
  "Diminuído",
  "Ausente"
];

export function PhysicalExamForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);

  const vitalSigns = patient.physicalExam.vitalSigns;
  const neurological = patient.physicalExam.neurological;
  const bodyCare = patient.physicalExam.bodyCare;

  const handleVitalChange = (field: string, value: string | number) => {
    updatePatient("physicalExam", {
      vitalSigns: { ...vitalSigns, [field]: value }
    });
  };

  const handleNeuroChange = (field: string, value: any) => {
    updatePatient("physicalExam", {
      neurological: { ...neurological, [field]: value }
    });
  };

  const handleBodyCareChange = (field: string, value: any) => {
    updatePatient("physicalExam", {
      bodyCare: { ...bodyCare, [field]: value }
    });
  };

  const handleAppearanceChange = (field: string, value: any) => {
    updatePatient("physicalExam", {
      bodyCare: {
        ...bodyCare,
        appearance: { ...bodyCare.appearance, [field]: value }
      }
    });
  };

  const handleOralHygieneChange = (field: string, value: any) => {
    updatePatient("physicalExam", {
      bodyCare: {
        ...bodyCare,
        oralHygiene: { ...bodyCare.oralHygiene, [field]: value }
      }
    });
  };

  return (
    <FormSection
      title="EXAME FÍSICO"
      icon={<Stethoscope className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="space-y-8">

        {/* SSVV */}
        <div>
          <h3 className="font-semibold mb-2">Sinais Vitais</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <Label htmlFor="pa">PA (mmHg)</Label>
              <Input
                id="pa"
                className="w-28"
                value={vitalSigns.bloodPressure}
                onChange={e => handleVitalChange("bloodPressure", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="fc">FC (bpm)</Label>
              <Input
                id="fc"
                className="w-20"
                type="number"
                value={vitalSigns.heartRate || ""}
                onChange={e => handleVitalChange("heartRate", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="fr">FR (rpm)</Label>
              <Input
                id="fr"
                className="w-20"
                type="number"
                value={vitalSigns.respiratoryRate || ""}
                onChange={e => handleVitalChange("respiratoryRate", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="t">T (&deg;C)</Label>
              <Input
                id="t"
                className="w-20"
                type="number"
                step="0.1"
                value={vitalSigns.temperature || ""}
                onChange={e => handleVitalChange("temperature", Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Dados antropométricos */}
        <div>
          <h3 className="font-semibold mb-2">Dados Antropométricos</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <Label>Peso (kg)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.weight || ""}
                onChange={e => handleVitalChange("weight", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>Altura (cm)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.height || ""}
                onChange={e => handleVitalChange("height", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>PC (cm)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.chestCircumference || ""}
                onChange={e => handleVitalChange("chestCircumference", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>PT (cm)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.waistCircumference || ""}
                onChange={e => handleVitalChange("waistCircumference", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>IMC (Kg/m²)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.bmi || ""}
                onChange={e => handleVitalChange("bmi", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>Cintura (cm)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.waistCircumference || ""}
                onChange={e => handleVitalChange("waistCircumference", Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <Label>Quadril (cm)</Label>
              <Input
                className="w-24"
                type="number"
                value={vitalSigns.hipCircumference || ""}
                onChange={e => handleVitalChange("hipCircumference", Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Observações */}
        <div>
          <Label>Observações</Label>
          <Input
            className="w-full"
            value={vitalSigns.observations}
            onChange={e => handleVitalChange("observations", e.target.value)}
            placeholder="..."
          />
        </div>

        {/* Exame Neurológico */}
        <div>
          <h3 className="font-semibold mb-2">Regulação Neurológica</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col">
              <Label>Escala de Glasgow (Total)</Label>
              <Input
                type="number"
                className="w-20"
                value={neurological.glasgowScale || ""}
                onChange={e => handleNeuroChange("glasgowScale", Number(e.target.value))}
              />
            </div>

            <div className="flex flex-col">
              <Label>Nível de Consciência</Label>
              <RadioGroup
                className="flex flex-col space-y-1"
                value={neurological.consciousnessLevel || ""}
                onValueChange={(v) => handleNeuroChange("consciousnessLevel", v)}
              >
                {conscienciaOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`consc_${opt}`} />
                    <Label htmlFor={`consc_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col">
              <Label>Estado emocional</Label>
              <RadioGroup
                className="flex flex-col space-y-1"
                value={neurological.emotionalState || ""}
                onValueChange={(v) => handleNeuroChange("emotionalState", v)}
              >
                {emocionalOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`emo_${opt}`} />
                    <Label htmlFor={`emo_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col">
              <Label>Autocuidado</Label>
              <RadioGroup
                className="flex flex-col space-y-1"
                value={neurological.selfCare || ""}
                onValueChange={(v) => handleNeuroChange("selfCare", v)}
              >
                {selfCareOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`ac_${opt}`} />
                    <Label htmlFor={`ac_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col">
              <Label>Pupilas</Label>
              <RadioGroup
                value={neurological.pupils || ""}
                onValueChange={v => handleNeuroChange("pupils", v)}
                className="flex space-x-4"
              >
                <RadioGroupItem value="Isocóricas" id="pupisocorica" />
                <Label htmlFor="pupisocorica" className="ml-1">Isocóricas</Label>
                <RadioGroupItem value="Anisocóricas" id="pupanisocorica" />
                <Label htmlFor="pupanisocorica" className="ml-1">Anisocóricas</Label>
                <RadioGroupItem value="Midríase" id="pupmidriase" />
                <Label htmlFor="pupmidriase" className="ml-1">Midríase</Label>
                <RadioGroupItem value="Miose" id="pupmiose" />
                <Label htmlFor="pupmiose" className="ml-1">Miose</Label>
              </RadioGroup>
            </div>
            <div className="flex flex-col">
              <Label>Fotorreatividade</Label>
              <div className="flex items-center gap-3 mt-2">
                <Switch
                  checked={!!neurological.photoreactivity}
                  onCheckedChange={v => handleNeuroChange("photoreactivity", v)}
                  id="photoreactivity-switch"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Label>Sedação</Label>
              <div className="flex items-center gap-3 mt-2">
                <Switch
                  checked={!!neurological.sedated}
                  onCheckedChange={v => handleNeuroChange("sedated", v)}
                  id="sedated-switch"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cuidado corporal */}
        <div>
          <h3 className="font-semibold mb-2">Cuidado corporal</h3>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col w-48">
              <Label>Cuidado corporal</Label>
              <RadioGroup
                value={bodyCare.bodyCare}
                onValueChange={v => handleBodyCareChange("bodyCare", v)}
                className="flex flex-col space-y-1"
              >
                {bodyCareOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`body_care_${opt}`} />
                    <Label htmlFor={`body_care_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col w-52">
              <Label>Higiene Corporal</Label>
              <RadioGroup
                value={bodyCare.bodyHygiene}
                onValueChange={v => handleBodyCareChange("bodyHygiene", v)}
                className="flex flex-col space-y-1"
              >
                {bodyHygieneOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`hbc_${opt}`} />
                    <Label htmlFor={`hbc_${opt}`}>{opt.replace("Horario ", "Horário ")}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col w-40">
              <Label>Frequência/dia</Label>
              <Input
                type="number"
                value={bodyCare.frequency || ""}
                onChange={e => handleBodyCareChange("frequency", Number(e.target.value))}
                min={0}
              />
            </div>
          </div>
        </div>
        
        {/* Higiene Oral */}
        <div>
          <h3 className="font-semibold mb-2">Higiene Oral</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="dentes"
                  checked={!!bodyCare.oralHygiene.teeth}
                  onChange={e => handleOralHygieneChange("teeth", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="dentes">Dentes</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sem_dentes"
                  checked={!!bodyCare.oralHygiene.noTeeth}
                  onChange={e => handleOralHygieneChange("noTeeth", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="sem_dentes">Ausência total de dentes</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="parcial_dentes"
                  checked={!!bodyCare.oralHygiene.partialTeethAbsence}
                  onChange={e => handleOralHygieneChange("partialTeethAbsence", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="parcial_dentes">Ausência parcial de dentes</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="protese"
                  checked={!!bodyCare.oralHygiene.prosthesis}
                  onChange={e => handleOralHygieneChange("prosthesis", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="protese">Prótese</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="aparelho"
                  checked={!!bodyCare.oralHygiene.braces}
                  onChange={e => handleOralHygieneChange("braces", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="aparelho">Aparelho ortodôntico</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="oral-other"
                  checked={!!bodyCare.oralHygiene.other}
                  onChange={e => handleOralHygieneChange("other", e.target.checked)}
                  className="mr-1"
                />
                <Label htmlFor="oral-other">Outros</Label>
                {bodyCare.oralHygiene.other && (
                  <Input
                    className="ml-2 w-32"
                    value={bodyCare.oralHygiene.otherDescription || ""}
                    onChange={e =>
                      handleOralHygieneChange("otherDescription", e.target.value)
                    }
                    placeholder="Descreva"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex flex-col">
                <Label>Produto para higiene da boca e dentes</Label>
                <Input
                  value={bodyCare.oralHygiene.product}
                  onChange={e => handleOralHygieneChange("product", e.target.value)}
                  className="w-40"
                  placeholder="Ex: creme dental"
                />
              </div>
              <div className="flex flex-col">
                <Label>Frequência/dia</Label>
                <Input
                  type="number"
                  min={0}
                  value={bodyCare.oralHygiene.frequency || ""}
                  onChange={e => handleOralHygieneChange("frequency", Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Aparência geral */}
        <div>
          <h3 className="font-semibold mb-2">Aparência geral</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
            <div className="flex flex-col">
              <Label>Anictérico</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.anicteric}
                onChange={e =>
                  handleAppearanceChange("anicteric", e.target.checked)
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>Ictérico</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.icteric}
                onChange={e =>
                  handleAppearanceChange("icteric", e.target.checked)
                }
              />
              {bodyCare.appearance.icteric && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.icterusLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("icterusLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Acianótico</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.acyanotic}
                onChange={e =>
                  handleAppearanceChange("acyanotic", e.target.checked)
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>Cianótico</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.cyanotic}
                onChange={e =>
                  handleAppearanceChange("cyanotic", e.target.checked)
                }
              />
              {bodyCare.appearance.cyanotic && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.cyanosisLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("cyanosisLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Corado</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.flushed}
                onChange={e =>
                  handleAppearanceChange("flushed", e.target.checked)
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>Hipocorado</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.palid}
                onChange={e =>
                  handleAppearanceChange("palid", e.target.checked)
                }
              />
              {bodyCare.appearance.palid && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.palidLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("palidLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Hidratado</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.hydrated}
                onChange={e =>
                  handleAppearanceChange("hydrated", e.target.checked)
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>Desidratado</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.dehydrated}
                onChange={e =>
                  handleAppearanceChange("dehydrated", e.target.checked)
                }
              />
              {bodyCare.appearance.dehydrated && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.dehydrationLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("dehydrationLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Edema</Label>
              <input
                type="checkbox"
                checked={!!bodyCare.appearance.edema}
                onChange={e =>
                  handleAppearanceChange("edema", e.target.checked)
                }
              />
              {bodyCare.appearance.edema && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.edemaLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("edemaLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Turgor</Label>
              <RadioGroup
                value={bodyCare.appearance.turgor}
                onValueChange={v => handleAppearanceChange("turgor", v)}
                className="flex flex-col space-y-1"
              >
                {turgorOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`turgor_${opt}`} />
                    <Label htmlFor={`turgor_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
              {bodyCare.appearance.turgor && (
                <Input
                  className="w-14 mt-1"
                  type="number"
                  min={0}
                  max={4}
                  step={0.25}
                  value={bodyCare.appearance.turgorLevel || ""}
                  onChange={e =>
                    handleAppearanceChange("turgorLevel", Number(e.target.value))
                  }
                  placeholder="+/4+"
                />
              )}
            </div>
            <div className="flex flex-col">
              <Label>Perfusão Periférica</Label>
              <RadioGroup
                value={bodyCare.appearance.peripheralPerfusion}
                onValueChange={v => handleAppearanceChange("peripheralPerfusion", v)}
                className="flex flex-col space-y-1"
              >
                {perfusaoOptions.map(opt => (
                  <div key={opt} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt} id={`perfusao_${opt}`} />
                    <Label htmlFor={`perfusao_${opt}`}>{opt}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}
