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
  const headAndNeck = patient.physicalExam.headAndNeck;

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

  const handleHeadNeckChange = (key: string, value: any) => {
    updatePatient("physicalExam", {
      headAndNeck: { ...headAndNeck, [key]: value }
    });
  };

  const handleHeadChange = (key: string, value: any) => {
    handleHeadNeckChange("head", { ...headAndNeck.head, [key]: value });
  };
  const handleSkullChange = (key: string, value: any) => {
    handleHeadNeckChange("skull", { ...headAndNeck.skull, [key]: value });
  };
  const handleFaciesChange = (key: string, value: any) => {
    handleHeadNeckChange("facies", { ...headAndNeck.facies, [key]: value });
  };
  const handleEyesChange = (key: string, value: any) => {
    handleHeadNeckChange("eyes", { ...headAndNeck.eyes, [key]: value });
  };
  const handleConjunctivasChange = (key: string, value: any) => {
    handleEyesChange("conjunctivas", { ...headAndNeck.eyes.conjunctivas, [key]: value });
  };
  const handleHairyCoverChange = (key: string, value: any) => {
    handleHeadNeckChange("hairyCover", { ...headAndNeck.hairyCover, [key]: value });
  };
  const handleHairChange = (key: string, value: any) => {
    handleHairyCoverChange("hair", { ...headAndNeck.hairyCover.hair, [key]: value });
  };
  const handleEarsChange = (key: string, value: any) => {
    handleHeadNeckChange("ears", { ...headAndNeck.ears, [key]: value });
  };
  const handleImplantationChange = (key: string, value: any) => {
    handleEarsChange("implantation", { ...headAndNeck.ears.implantation, [key]: value });
  };
  const handleExternalAuditoryCanalChange = (key: string, value: any) => {
    handleEarsChange("externalAuditoryCanal", { ...headAndNeck.ears.externalAuditoryCanal, [key]: value });
  };
  const handleNoseChange = (key: string, value: any) => {
    handleHeadNeckChange("nose", { ...headAndNeck.nose, [key]: value });
  };
  const handleMouthChange = (key: string, value: any) => {
    handleHeadNeckChange("mouth", { ...headAndNeck.mouth, [key]: value });
  };
  const handleLipsChange = (key: string, value: any) => {
    handleMouthChange("lips", { ...headAndNeck.mouth.lips, [key]: value });
  };
  const handleGumsChange = (key: string, value: any) => {
    handleMouthChange("gums", { ...headAndNeck.mouth.gums, [key]: value });
  };
  const handleTongueChange = (key: string, value: any) => {
    handleMouthChange("tongue", { ...headAndNeck.mouth.tongue, [key]: value });
  };
  const handleThroatOroChange = (key: string, value: any) => {
    handleHeadNeckChange("throatAndOropharynx", { ...headAndNeck.throatAndOropharynx, [key]: value });
  };
  const handleNeckChange = (key: string, value: any) => {
    handleHeadNeckChange("neck", { ...headAndNeck.neck, [key]: value });
  };
  const handleLymphNodesChange = (key: string, value: any) => {
    handleNeckChange("lymphNodes", { ...headAndNeck.neck.lymphNodes, [key]: value });
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

        {/* ========== NOVA SEÇÃO CABEÇA E PESCOÇO ========== */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Cabeça e Pescoço</h3>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Cabeça */}
            <div>
              <Label className="font-medium">Cabeça:</Label>
              <div className="space-x-2 flex flex-wrap mt-1">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.head.normocephalic} onChange={e => handleHeadChange("normocephalic", e.target.checked)} /> <span>Normocefalia</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.head.microcephalic} onChange={e => handleHeadChange("microcephalic", e.target.checked)} /> <span>Microcefalia</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.head.macrocephalic} onChange={e => handleHeadChange("macrocephalic", e.target.checked)} /> <span>Macrocefalia</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.head.hydrocephalic} onChange={e => handleHeadChange("hydrocephalic", e.target.checked)} /> <span>Hidrocefalia</span>
                </label>
              </div>
            </div>

            {/* Crânio */}
            <div>
              <Label className="font-medium">Crânio:</Label>
              <div className="space-x-2 flex flex-wrap mt-1">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.skull.symmetrical} onChange={e => handleSkullChange("symmetrical", e.target.checked)} /><span>Simétrico</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.skull.asymmetrical} onChange={e => handleSkullChange("asymmetrical", e.target.checked)} /><span>Assimétrico</span>
                </label>
              </div>
            </div>
            
            {/* Faces */}
            <div>
              <Label className="font-medium">Faces:</Label>
              <div className="space-x-2 flex flex-wrap mt-1">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.down} onChange={e => handleFaciesChange("down", e.target.checked)} /><span>Síndrome de Down</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.basedowian} onChange={e => handleFaciesChange("basedowian", e.target.checked)} /><span>Basedowiana</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.renal} onChange={e => handleFaciesChange("renal", e.target.checked)} /><span>Renal</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.hippocratic} onChange={e => handleFaciesChange("hippocratic", e.target.checked)} /><span>Hipocrática</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.cushingoid} onChange={e => handleFaciesChange("cushingoid", e.target.checked)} /><span>Cushingoide</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.facies.parkinsonian} onChange={e => handleFaciesChange("parkinsonian", e.target.checked)} /><span>Parkinsoniana</span>
                </label>
              </div>
            </div>

            {/* Olhos */}
            <div>
              <Label className="font-medium">Olhos:</Label>
              <div className="space-x-2 flex flex-wrap mt-1">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.eyes.symmetrical} onChange={e => handleEyesChange("symmetrical", e.target.checked)} /><span>Simétrico</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.eyes.asymmetrical} onChange={e => handleEyesChange("asymmetrical", e.target.checked)} /><span>Assimétrico</span>
                </label>
              </div>
              {/* Conjuntivas */}
              <Label className="block mt-2">Conjuntivas:</Label>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-24">Hipocoradas:</span>
                  <span>D:</span>
                  <input type="checkbox" checked={!!headAndNeck.eyes.conjunctivas.hypochromatic} onChange={e => handleConjunctivasChange("hypochromatic", e.target.checked)} />
                  <Input className="w-16 ml-2" type="text" value={headAndNeck.eyes.conjunctivas.hypochromaticLevel || ""} onChange={e => handleConjunctivasChange("hypochromaticLevel", e.target.value)} placeholder="+/4+" />
                  <span>E:</span>
                  <Input className="w-16 ml-2" type="text" value={headAndNeck.eyes.conjunctivas.normochromaticLevel || ""} onChange={e => handleConjunctivasChange("normochromaticLevel", e.target.value)} placeholder="+/4+" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24">Normocoradas:</span>
                  <span>D:</span>
                  <Input className="w-16 ml-2" type="text" value={headAndNeck.eyes.conjunctivas.normochromaticLevel || ""} onChange={e => handleConjunctivasChange("normochromaticLevel", e.target.value)} placeholder="+/4+" />
                  <span>E:</span>
                  <Input className="w-16 ml-2" type="text" value={headAndNeck.eyes.conjunctivas.normochromaticLevel || ""} onChange={e => handleConjunctivasChange("normochromaticLevel", e.target.value)} placeholder="+/4+" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-24">Hipercoradas:</span>
                  <span>D/E:</span>
                  <Input className="w-16 ml-2" type="text" value={headAndNeck.eyes.conjunctivas.hyperchromaticLevel || ""} onChange={e => handleConjunctivasChange("hyperchromaticLevel", e.target.value)} placeholder="+/4+" />
                </div>
              </div>
              {/* Presença de alterações */}
              <div className="flex flex-wrap gap-2 mt-2">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.eyes.tearing} onChange={e => handleEyesChange("tearing", e.target.checked)} />
                  <span>Lacrimejamento</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.eyes.eyeLidEdema} onChange={e => handleEyesChange("eyeLidEdema", e.target.checked)} />
                  <span>Edema palpebral</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.eyes.secretion} onChange={e => handleEyesChange("secretion", e.target.checked)} />
                  <span>Secreção</span>
                </label>
              </div>
            </div>

            {/* Couro cabeludo / Cabelo */}
            <div>
              <Label className="font-medium">Couro Cabeludo e Cabelo:</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="w-20">Higiene:</span>
                <select className="border rounded p-1" value={headAndNeck.hairyCover.hair.hygiene || ""} onChange={e => handleHairChange("hygiene", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Satisfatório">Satisfatório</option>
                  <option value="Insatisfatório">Insatisfatório</option>
                </select>
                <span>Brilho:</span>
                <input type="checkbox" checked={!!headAndNeck.hairyCover.hair.shine} onChange={e => handleHairChange("shine", e.target.checked)} /><span>Sim</span>
                <span>Cor:</span>
                <Input className="w-24" type="text" value={headAndNeck.hairyCover.color || ""} onChange={e => handleHairyCoverChange("color", e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Integridade:</span>
                <input type="checkbox" checked={!!headAndNeck.hairyCover.integrity} onChange={e => handleHairyCoverChange("integrity", e.target.checked)} /><span>Sim</span>
                <span>Quebradiço:</span>
                <input type="checkbox" checked={!!headAndNeck.hairyCover.breakage} onChange={e => handleHairyCoverChange("breakage", e.target.checked)} /><span>Sim</span>
                <span>Parasitas:</span>
                <input type="checkbox" checked={!!headAndNeck.hairyCover.parasites} onChange={e => handleHairyCoverChange("parasites", e.target.checked)} /><span>Sim</span>
                <span>Alopecia:</span>
                <input type="checkbox" checked={!!headAndNeck.hairyCover.alopecia} onChange={e => handleHairyCoverChange("alopecia", e.target.checked)} /><span>Sim</span>
              </div>
            </div>

            {/* Ouvidos */}
            <div>
              <Label className="font-medium">Ouvidos (Pavilhão auricular):</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Simetria:</span>
                <input type="checkbox" checked={!!headAndNeck.ears.pavilionSymmetry} onChange={e => handleEarsChange("pavilionSymmetry", e.target.checked)} /><span>Sim</span>
                <span>Malformações:</span>
                <input type="checkbox" checked={!!headAndNeck.ears.malformations} onChange={e => handleEarsChange("malformations", e.target.checked)} /><span>Sim</span>
                <span>Integridade:</span>
                <input type="checkbox" checked={!!headAndNeck.ears.integrity} onChange={e => handleEarsChange("integrity", e.target.checked)} /><span>Sim</span>
              </div>
              {/* Implantação */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Implantação Higiene:</span>
                <select className="border rounded p-1" value={headAndNeck.ears.implantation.hygiene || ""} onChange={e => handleImplantationChange("hygiene", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Satisfatória">Satisfatória</option>
                  <option value="Insatisfatória">Insatisfatória</option>
                </select>
                <Input className="w-24" value={headAndNeck.ears.implantation.observations || ""} onChange={e => handleImplantationChange("observations", e.target.value)} placeholder="Obs." />
              </div>
              {/* Conduto auditivo externo */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Conduto auditivo externo:</span>
                <span>Integridade:</span>
                <input type="checkbox" checked={!!headAndNeck.ears.externalAuditoryCanal.integrity} onChange={e => handleExternalAuditoryCanalChange("integrity", e.target.checked)} /><span>Sim</span>
                <span>Higiene:</span>
                <select className="border rounded p-1" value={headAndNeck.ears.externalAuditoryCanal.hygiene || ""} onChange={e => handleExternalAuditoryCanalChange("hygiene", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Satisfatória">Satisfatória</option>
                  <option value="Insatisfatória">Insatisfatória</option>
                </select>
              </div>
            </div>

            {/* Nariz */}
            <div>
              <Label className="font-medium">Nariz:</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Simetria:</span>
                <input type="checkbox" checked={!!headAndNeck.nose.symmetry} onChange={e => handleNoseChange("symmetry", e.target.checked)} /><span>Sim</span>
                <span>Integridade:</span>
                <input type="checkbox" checked={!!headAndNeck.nose.integrity} onChange={e => handleNoseChange("integrity", e.target.checked)} /><span>Sim</span>
                <span>Fluxo nasal:</span>
                <input type="checkbox" checked={!!headAndNeck.nose.nasalFlow} onChange={e => handleNoseChange("nasalFlow", e.target.checked)} /><span>Sim</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Higiene:</span>
                <select className="border rounded p-1" value={headAndNeck.nose.hygiene || ""} onChange={e => handleNoseChange("hygiene", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Satisfatória">Satisfatória</option>
                  <option value="Insatisfatória">Insatisfatória</option>
                </select>
                <span>Secreção:</span>
                <input type="checkbox" checked={!!headAndNeck.nose.secretion} onChange={e => handleNoseChange("secretion", e.target.checked)} /><span>Sim</span>
                <span>Aspecto:</span>
                <Input className="w-20" value={headAndNeck.nose.aspect || ""} onChange={e => handleNoseChange("aspect", e.target.value)} />
                <span>Coloração:</span>
                <Input className="w-20" value={headAndNeck.nose.color || ""} onChange={e => handleNoseChange("color", e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Desvio de septo:</span>
                <input type="checkbox" checked={!!headAndNeck.nose.septumDeviation} onChange={e => handleNoseChange("septumDeviation", e.target.checked)} /><span>Sim</span>
                <span>Obs.:</span>
                <Input className="w-24" value={headAndNeck.nose.observations || ""} onChange={e => handleNoseChange("observations", e.target.value)} />
              </div>
            </div>

            {/* Boca */}
            <div>
              <Label className="font-medium">Boca:</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Lábios:</span>
                <Input className="w-32" value={headAndNeck.mouth.lips.generalAspect || ""} onChange={e => handleLipsChange("generalAspect", e.target.value)} placeholder="Aspecto geral" />
                <span>Gengivas - Integridade:</span>
                <input type="checkbox" checked={!!headAndNeck.mouth.gums.integrity} onChange={e => handleGumsChange("integrity", e.target.checked)} /><span>Sim</span>
                <span>Gengivas - Edema:</span>
                <input type="checkbox" checked={!!headAndNeck.mouth.gums.edema} onChange={e => handleGumsChange("edema", e.target.checked)} /><span>Sim</span>
                <span>Dentição:</span>
                <select className="border rounded p-1" value={headAndNeck.mouth.gums.dentition || ""} onChange={e => handleGumsChange("dentition", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Preservada">Preservada</option>
                  <option value="Ausente">Ausente</option>
                  <option value="Em formação">Em formação</option>
                </select>
                <span>Hálito:</span>
                <Input className="w-24" value={headAndNeck.mouth.breath || ""} onChange={e => handleMouthChange("breath", e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Língua:</span>
                <input type="checkbox" checked={!!headAndNeck.mouth.tongue.preserved} onChange={e => handleTongueChange("preserved", e.target.checked)} /><span>Preservada</span>
                <input type="checkbox" checked={!!headAndNeck.mouth.tongue.absent} onChange={e => handleTongueChange("absent", e.target.checked)} /><span>Ausente</span>
                <span>Tamanho:</span>
                <Input className="w-16" value={headAndNeck.mouth.tongue.size || ""} onChange={e => handleTongueChange("size", e.target.value)} />
                <span>Mobilidade:</span>
                <select className="border rounded p-1" value={headAndNeck.mouth.tongue.mobility || ""} onChange={e => handleTongueChange("mobility", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Preservada">Preservada</option>
                  <option value="Ausente">Ausente</option>
                </select>
                <span>Aspecto:</span>
                <select className="border rounded p-1" value={headAndNeck.mouth.tongue.aspect || ""} onChange={e => handleTongueChange("aspect", e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Saburrosa">Saburrosa</option>
                  <option value="Lisa">Lisa</option>
                </select>
              </div>
            </div>

            {/* Garganta e orofaringe */}
            <div>
              <Label className="font-medium">Garganta e orofaringe:</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.sialorrhea} onChange={e => handleThroatOroChange("sialorrhea", e.target.checked)} /> <span>Sialorreia</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.moniliasis} onChange={e => handleThroatOroChange("moniliasis", e.target.checked)} /> <span>Monilíase</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.fissures} onChange={e => handleThroatOroChange("fissures", e.target.checked)} /> <span>Fissuras</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.bleeding} onChange={e => handleThroatOroChange("bleeding", e.target.checked)} /> <span>Sangramento</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.purulentPlaques} onChange={e => handleThroatOroChange("purulentPlaques", e.target.checked)} /> <span>Placas purulentas</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" checked={!!headAndNeck.throatAndOropharynx.hyperemia} onChange={e => handleThroatOroChange("hyperemia", e.target.checked)} /> <span>Hiperemia</span>
                </label>
                <Input className="w-40" value={headAndNeck.throatAndOropharynx.other || ""} onChange={e => handleThroatOroChange("other", e.target.value)} placeholder="Outros" />
              </div>
            </div>

            {/* Pescoço */}
            <div>
              <Label className="font-medium">Pescoço:</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Mobilidade:</span>
                <Input className="w-24" value={headAndNeck.neck.mobility || ""} onChange={e => handleNeckChange("mobility", e.target.value)} />
                <span>Tonicidade muscular:</span>
                <Input className="w-24" value={headAndNeck.neck.muscleTone || ""} onChange={e => handleNeckChange("muscleTone", e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span>Linfonodos:</span>
                <span>Localização:</span>
                <Input className="w-20" value={headAndNeck.neck.lymphNodes.location || ""} onChange={e => handleLymphNodesChange("location", e.target.value)} />
                <span>Tamanho:</span>
                <Input className="w-20" value={headAndNeck.neck.lymphNodes.size || ""} onChange={e => handleLymphNodesChange("size", e.target.value)} />
                <span>Consistência:</span>
                <Input className="w-20" value={headAndNeck.neck.lymphNodes.consistency || ""} onChange={e => handleLymphNodesChange("consistency", e.target.value)} />
                <span>Sensib. à palpação:</span>
                <Input className="w-20" value={headAndNeck.neck.lymphNodes.sensitivity || ""} onChange={e => handleLymphNodesChange("sensitivity", e.target.value)} />
                <span>Alteração pele:</span>
                <Input className="w-24" value={headAndNeck.neck.lymphNodes.skinChanges || ""} onChange={e => handleLymphNodesChange("skinChanges", e.target.value)} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </FormSection>
  );
}
