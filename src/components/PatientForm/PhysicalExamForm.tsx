
import { useState } from "react";
import FormSection from "./FormSection";
import { Stethoscope } from "lucide-react";
import { usePatient } from "@/contexts/PatientContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function PhysicalExamForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);

  const vitalSigns = patient.physicalExam.vitalSigns;
  const neurological = patient.physicalExam.neurological;

  // Vital signs update
  const handleVitalChange = (field: string, value: string | number) => {
    updatePatient("physicalExam", {
      vitalSigns: { ...vitalSigns, [field]: value }
    });
  };

  // Neurological update
  const handleNeuroChange = (field: string, value: any) => {
    updatePatient("physicalExam", {
      neurological: { ...neurological, [field]: value }
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

        {/* Regulação Neurológica */}
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
              <Label>Sedação</Label>
              <div className="flex items-center gap-3 mt-2">
                <span>Não</span>
                <Switch
                  checked={!!neurological.sedated}
                  onCheckedChange={v => handleNeuroChange("sedated", v)}
                  id="sedated-switch"
                />
                <span>Sim</span>
              </div>
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
                <span>Não</span>
                <Switch
                  checked={!!neurological.photoreactivity}
                  onCheckedChange={v => handleNeuroChange("photoreactivity", v)}
                  id="photoreactivity-switch"
                />
                <span>Sim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}
