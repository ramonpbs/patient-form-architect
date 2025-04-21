
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function GenitourinaryExamSection({
  genitourinary,
  handleGenitourinaryChange,
}: {
  genitourinary: any;
  handleGenitourinaryChange: (field: string, value: any) => void;
}) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-lg">Sistema Geniturinário</h3>
      <div className="flex flex-wrap gap-6">
        {/* Higiene */}
        <div className="flex flex-col">
          <Label>Higiene</Label>
          <RadioGroup
            value={genitourinary.hygiene}
            onValueChange={v => handleGenitourinaryChange("hygiene", v)}
            className="flex flex-row gap-3"
          >
            <RadioGroupItem value="Satisfatória" id="hig-sat" />
            <Label htmlFor="hig-sat">Satisfatória</Label>
            <RadioGroupItem value="Insatisfatória" id="hig-insat" />
            <Label htmlFor="hig-insat">Insatisfatória</Label>
          </RadioGroup>
        </div>
        {/* Integridade */}
        <div className="flex flex-col">
          <Label>Integridade</Label>
          <RadioGroup
            value={genitourinary.integrity}
            onValueChange={v => handleGenitourinaryChange("integrity", v)}
            className="flex flex-row gap-3"
          >
            <RadioGroupItem value="Preservada" id="int-pres" />
            <Label htmlFor="int-pres">Preservada</Label>
            <RadioGroupItem value="Ausente" id="int-aus" />
            <Label htmlFor="int-aus">Ausente</Label>
          </RadioGroup>
        </div>
      </div>
      {/* Urina */}
      <div>
        <Label>Urina</Label>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.clear}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  clear: e.target.checked,
                })
              }
            />
            <span className="ml-1">Límpida</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.cloudy}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  cloudy: e.target.checked,
                })
              }
            />
            <span className="ml-1">Turva</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.sediments}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  sediments: e.target.checked,
                })
              }
            />
            <span className="ml-1">Sedimentos</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.hematuria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  hematuria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Hematúria</span>
          </div>
          {/* Linhas extras */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.anuria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  anuria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Anúria</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.polyuria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  polyuria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Poliúria</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.oliguria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  oliguria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Oligúria</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.dysuria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  dysuria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Disúria</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={!!genitourinary.urine.polyakiuria}
              onChange={e =>
                handleGenitourinaryChange("urine", {
                  ...genitourinary.urine,
                  polyakiuria: e.target.checked,
                })
              }
            />
            <span className="ml-1">Polaciúria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
