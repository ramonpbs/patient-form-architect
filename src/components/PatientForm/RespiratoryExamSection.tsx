
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const respirationTypes = [
  "Eupneico",
  "Dispneico",
  "Taquipneico",
  "Bradipneico",
  "Ortopneico",
];

const thoracicExpansibility = ["Preservada", "Ausente"];

export function RespiratoryExamSection({
  respiratory,
  handleRespiratoryChange,
}: {
  respiratory: any;
  handleRespiratoryChange: (field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Sistema Respiratório</h3>
      {/* Tórax */}
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <Label>Tórax</Label>
          <RadioGroup
            value={respiratory.thorax.symmetrical ? "Simétrico" : "Assimétrico"}
            onValueChange={(val) =>
              handleRespiratoryChange("thorax", {
                ...respiratory.thorax,
                symmetrical: val === "Simétrico",
                asymmetrical: val === "Assimétrico",
              })
            }
            className="flex space-x-4"
          >
            <RadioGroupItem value="Simétrico" id="torax-sim"/>
            <Label htmlFor="torax-sim">Simétrico</Label>
            <RadioGroupItem value="Assimétrico" id="torax-assim"/>
            <Label htmlFor="torax-assim">Assimétrico</Label>
          </RadioGroup>
        </div>
        <div className="flex flex-col">
          <Label>Uso de musculatura acessória</Label>
          <Switch
            checked={!!respiratory.thorax.accessoryMuscles}
            onCheckedChange={(v) =>
              handleRespiratoryChange("thorax", {
                ...respiratory.thorax,
                accessoryMuscles: v,
              })
            }
            id="muscles-switch"
          />
        </div>
      </div>
      
      {/* Tipo de respiração */}
      <div>
        <Label>Tipo de respiração</Label>
        <RadioGroup
          value={respiratory.respirationType || ""}
          onValueChange={(v) => handleRespiratoryChange("respirationType", v)}
          className="flex flex-wrap gap-2"
        >
          {respirationTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <RadioGroupItem value={type} id={`resp-${type}`} />
              <Label htmlFor={`resp-${type}`}>{type}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      {/* Mamilos */}
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col">
          <Label>Mamilos</Label>
          <RadioGroup
            value={respiratory.breasts.symmetrical ? "Simétrico" : "Assimétrico"}
            onValueChange={(val) =>
              handleRespiratoryChange("breasts", {
                ...respiratory.breasts,
                symmetrical: val === "Simétrico",
                asymmetrical: val === "Assimétrico",
              })
            }
            className="flex space-x-4"
          >
            <RadioGroupItem value="Simétrico" id="mama-sim"/>
            <Label htmlFor="mama-sim">Simétrico</Label>
            <RadioGroupItem value="Assimétrico" id="mama-assim"/>
            <Label htmlFor="mama-assim">Assimétrico</Label>
          </RadioGroup>
        </div>
        <div className="flex flex-col">
          <Label>Exame das mamas</Label>
          <Input
            value={respiratory.breasts.examination || ""}
            onChange={e =>
              handleRespiratoryChange("breasts", {
                ...respiratory.breasts,
                examination: e.target.value,
              })
            }
            placeholder="Descreva"
            className="w-48"
          />
        </div>
      </div>
      {/* Forma */}
      <div>
        <Label>Forma</Label>
        <RadioGroup
          value={respiratory.shape || ""}
          onValueChange={(v) => handleRespiratoryChange("shape", v)}
          className="flex flex-wrap gap-2"
        >
          {["Normal","Protuso","Invertido","Plano","Protuso ao estímulo"].map((f) => (
            <div key={f} className="flex items-center space-x-2">
              <RadioGroupItem value={f} id={`shape-${f}`} />
              <Label htmlFor={`shape-${f}`}>{f}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      {/* Ausculta Pulmonar */}
      <div>
        <Label>Ausculta pulmonar</Label>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!respiratory.pulmonaryAuscultation.vesicularSoundsRA}
              onChange={e =>
                handleRespiratoryChange("pulmonaryAuscultation", {
                  ...respiratory.pulmonaryAuscultation,
                  vesicularSoundsRA: e.target.checked,
                })
              }
            />
            <span className="ml-1">MV s/ RA</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!respiratory.pulmonaryAuscultation.vesicularSoundsRD}
              onChange={e =>
                handleRespiratoryChange("pulmonaryAuscultation", {
                  ...respiratory.pulmonaryAuscultation,
                  vesicularSoundsRD: e.target.checked,
                })
              }
            />
            <span className="ml-1">MV D</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!respiratory.pulmonaryAuscultation.vesicularSoundsRE}
              onChange={e =>
                handleRespiratoryChange("pulmonaryAuscultation", {
                  ...respiratory.pulmonaryAuscultation,
                  vesicularSoundsRE: e.target.checked,
                })
              }
            />
            <span className="ml-1">MV E</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!respiratory.pulmonaryAuscultation.wheezing}
              onChange={e =>
                handleRespiratoryChange("pulmonaryAuscultation", {
                  ...respiratory.pulmonaryAuscultation,
                  wheezing: e.target.checked,
                })
              }
            />
            <span className="ml-1">Roncos</span>
          </div>
        </div>
      </div>
      {/* Expansibilidade torácica */}
      <div>
        <Label>Expansibilidade torácica</Label>
        <RadioGroup
          value={respiratory.thoracicExpansibility || ""}
          onValueChange={v => handleRespiratoryChange("thoracicExpansibility", v)}
          className="flex flex-row gap-3"
        >
          {thoracicExpansibility.map(opt => (
            <div key={opt} className="flex items-center space-x-2">
              <RadioGroupItem value={opt} id={`exp-toracica-${opt}`} />
              <Label htmlFor={`exp-toracica-${opt}`}>{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
}
