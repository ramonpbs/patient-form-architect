
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const abdomenOptions = [
  "Globoso",
  "Flácido",
  "Plano",
  "Escavado",
  "Distendido",
];

export function DigestiveExamSection({
  digestive,
  handleDigestiveChange,
}: {
  digestive: any;
  handleDigestiveChange: (field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Sistema Digestório</h3>
      {/* Presença de ... */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={!!digestive.presence.scars}
            onChange={e =>
              handleDigestiveChange("presence", {
                ...digestive.presence,
                scars: e.target.checked,
              })
            }
          />
          <Label className="ml-1">Cicatrizes</Label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={!!digestive.presence.striae}
            onChange={e =>
              handleDigestiveChange("presence", {
                ...digestive.presence,
                striae: e.target.checked,
              })
            }
          />
          <Label className="ml-1">Estrias</Label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={!!digestive.presence.dilatedVeins}
            onChange={e =>
              handleDigestiveChange("presence", {
                ...digestive.presence,
                dilatedVeins: e.target.checked,
              })
            }
          />
          <Label className="ml-1">Veias dilatadas</Label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={!!digestive.presence.lesions}
            onChange={e =>
              handleDigestiveChange("presence", {
                ...digestive.presence,
                lesions: e.target.checked,
              })
            }
          />
          <Label className="ml-1">Lesões</Label>
        </div>
        <Input
          className="w-40"
          placeholder="Outras/obs."
          value={digestive.presence.observations}
          onChange={e =>
            handleDigestiveChange("presence", {
              ...digestive.presence,
              observations: e.target.value,
            })
          }
        />
      </div>
      {/* Abdome */}
      <div>
        <Label>Abdome</Label>
        <RadioGroup
          value={digestive.abdomen || ""}
          onValueChange={v => handleDigestiveChange("abdomen", v)}
          className="flex flex-wrap gap-2"
        >
          {abdomenOptions.map((opt) => (
            <div key={opt} className="flex items-center space-x-2">
              <RadioGroupItem value={opt} id={`abd-${opt}`} />
              <Label htmlFor={`abd-${opt}`}>{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      {/* RH/Sons hidro-aéreos */}
      <div>
        <Label>RH / Sons hidro-aéreos</Label>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.bowelSounds.present}
              onChange={e =>
                handleDigestiveChange("bowelSounds", {
                  ...digestive.bowelSounds,
                  present: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Presentes</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.bowelSounds.decreased}
              onChange={e =>
                handleDigestiveChange("bowelSounds", {
                  ...digestive.bowelSounds,
                  decreased: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Diminuidos</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.bowelSounds.hyperactive}
              onChange={e =>
                handleDigestiveChange("bowelSounds", {
                  ...digestive.bowelSounds,
                  hyperactive: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Hiperativos</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.bowelSounds.absent}
              onChange={e =>
                handleDigestiveChange("bowelSounds", {
                  ...digestive.bowelSounds,
                  absent: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Ausentes</Label>
          </div>
        </div>
      </div>
      {/* Timpanismo */}
      <div>
        <Label>Timpanismo</Label>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.tympanism.present}
              onChange={e =>
                handleDigestiveChange("tympanism", {
                  ...digestive.tympanism,
                  present: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Presentes</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.tympanism.decreased}
              onChange={e =>
                handleDigestiveChange("tympanism", {
                  ...digestive.tympanism,
                  decreased: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Diminuídos</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!digestive.tympanism.absent}
              onChange={e =>
                handleDigestiveChange("tympanism", {
                  ...digestive.tympanism,
                  absent: e.target.checked,
                })
              }
            />
            <Label className="ml-1">Ausentes</Label>
          </div>
        </div>
      </div>
      {/* Visceromegalias */}
      <div className="flex flex-wrap gap-3 items-center">
        <Label>Visceromegalias</Label>
        <RadioGroup
          value={
            digestive.visceromegaly.absent
              ? "Ausentes"
              : digestive.visceromegaly.present
              ? "Presentes"
              : ""
          }
          onValueChange={(v) =>
            handleDigestiveChange("visceromegaly", {
              ...digestive.visceromegaly,
              absent: v === "Ausentes",
              present: v === "Presentes",
            })
          }
          className="flex flex-row gap-3"
        >
          <RadioGroupItem value="Ausentes" id="visc-aus" />
          <Label htmlFor="visc-aus">Ausentes</Label>
          <RadioGroupItem value="Presentes" id="visc-pres" />
          <Label htmlFor="visc-pres">Presentes</Label>
        </RadioGroup>
        {digestive.visceromegaly.present && (
          <Input
            className="w-40"
            placeholder="Local"
            value={digestive.visceromegaly.location}
            onChange={e =>
              handleDigestiveChange("visceromegaly", {
                ...digestive.visceromegaly,
                location: e.target.value,
              })
            }
          />
        )}
      </div>
      {/* Eliminações */}
      <div className="flex flex-wrap gap-3 items-center">
        <Label>Eliminações</Label>
        <RadioGroup
          value={
            digestive.elimination.present
              ? "Presentes"
              : digestive.elimination.absent
              ? "Ausentes"
              : ""
          }
          onValueChange={val =>
            handleDigestiveChange("elimination", {
              ...digestive.elimination,
              present: val === "Presentes",
              absent: val === "Ausentes",
            })
          }
          className="flex flex-row gap-2"
        >
          <RadioGroupItem value="Presentes" id="elim-pres" />
          <Label htmlFor="elim-pres">Presentes</Label>
          <RadioGroupItem value="Ausentes" id="elim-aus" />
          <Label htmlFor="elim-aus">Ausentes</Label>
        </RadioGroup>
        <Input
          className="w-24"
          placeholder="Dias"
          value={digestive.elimination.days}
          onChange={e =>
            handleDigestiveChange("elimination", {
              ...digestive.elimination,
              days: e.target.value,
            })
          }
        />
      </div>
    </section>
  );
}
