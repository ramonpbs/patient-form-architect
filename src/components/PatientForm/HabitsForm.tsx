
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { usePatient } from '@/contexts/PatientContext';
import { PatientHabits } from '@/models/patient';
import FormSection from './FormSection';
import { Coffee } from 'lucide-react';

export function HabitsForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  
  const handleInputChange = (field: keyof PatientHabits, value: any) => {
    updatePatient('habits', { [field]: value });
  };
  
  const handleNestedChange = (parentField: keyof PatientHabits, field: string, value: any) => {
    updatePatient('habits', { 
      [parentField]: { 
        ...patient.habits[parentField] as any, 
        [field]: value 
      } 
    });
  };
  
  return (
    <FormSection
      title="HÁBITOS E COSTUMES"
      icon={<Coffee className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="religion">Religião</Label>
          <Input
            id="religion"
            value={patient.habits.religion}
            onChange={(e) => handleInputChange('religion', e.target.value)}
            placeholder="Religião"
          />
        </div>
        
        <div className="form-group">
          <Label>Praticante</Label>
          <RadioGroup
            value={patient.habits.practicesReligion ? "sim" : "não"}
            onValueChange={(value) => handleInputChange('practicesReligion', value === "sim")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="practices-yes" />
              <Label htmlFor="practices-yes">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="practices-no" />
              <Label htmlFor="practices-no">Não</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Tabagista</Label>
          <RadioGroup
            value={patient.habits.smoker ? "sim" : "não"}
            onValueChange={(value) => handleInputChange('smoker', value === "sim")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="smoker-no" />
              <Label htmlFor="smoker-no">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="smoker-yes" />
              <Label htmlFor="smoker-yes">Sim</Label>
            </div>
          </RadioGroup>
        </div>
        
        {patient.habits.smoker && (
          <div className="form-group">
            <Label htmlFor="cigarettesPerDay">Qtd/dia</Label>
            <Input
              id="cigarettesPerDay"
              type="number"
              value={patient.habits.cigarettesPerDay || ''}
              onChange={(e) => handleInputChange('cigarettesPerDay', parseInt(e.target.value) || 0)}
              placeholder="Quantidade"
            />
          </div>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Drogas</Label>
          <RadioGroup
            value={patient.habits.drugUser ? "sim" : "não"}
            onValueChange={(value) => handleInputChange('drugUser', value === "sim")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="drugs-no" />
              <Label htmlFor="drugs-no">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="drugs-yes" />
              <Label htmlFor="drugs-yes">Sim</Label>
            </div>
          </RadioGroup>
        </div>
        
        {patient.habits.drugUser && (
          <>
            <div className="form-group">
              <Label htmlFor="drugType">Tipo</Label>
              <Input
                id="drugType"
                value={patient.habits.drugType}
                onChange={(e) => handleInputChange('drugType', e.target.value)}
                placeholder="Tipo de droga"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="drugFrequency">Frequência</Label>
              <Input
                id="drugFrequency"
                value={patient.habits.drugFrequency}
                onChange={(e) => handleInputChange('drugFrequency', e.target.value)}
                placeholder="Frequência de uso"
              />
            </div>
          </>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Etilista</Label>
          <RadioGroup
            value={patient.habits.alcoholSocially ? "socialmente" : (patient.habits.alcoholUser ? "sim" : "não")}
            onValueChange={(value) => {
              handleInputChange('alcoholUser', value === "sim");
              handleInputChange('alcoholSocially', value === "socialmente");
            }}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="alcohol-no" />
              <Label htmlFor="alcohol-no">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="socialmente" id="alcohol-social" />
              <Label htmlFor="alcohol-social">Não, mas bebe socialmente</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="alcohol-yes" />
              <Label htmlFor="alcohol-yes">Sim</Label>
            </div>
          </RadioGroup>
        </div>
        
        {(patient.habits.alcoholUser || patient.habits.alcoholSocially) && (
          <>
            <div className="form-group">
              <Label htmlFor="alcoholQuantity">Qtd.</Label>
              <Input
                id="alcoholQuantity"
                value={patient.habits.alcoholQuantity}
                onChange={(e) => handleInputChange('alcoholQuantity', e.target.value)}
                placeholder="Quantidade"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="alcoholFrequency">Frequência</Label>
              <Input
                id="alcoholFrequency"
                value={patient.habits.alcoholFrequency}
                onChange={(e) => handleInputChange('alcoholFrequency', e.target.value)}
                placeholder="Frequência"
              />
            </div>
          </>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Alimentação: Apetite</Label>
          <Select
            value={patient.habits.appetite}
            onValueChange={(value) => handleInputChange('appetite', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Preservado">Preservado</SelectItem>
              <SelectItem value="Diminuído">Diminuído</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="form-group">
          <Label htmlFor="mealsPerDay">Quantas refeições durante o dia</Label>
          <Input
            id="mealsPerDay"
            type="number"
            value={patient.habits.mealsPerDay || ''}
            onChange={(e) => handleInputChange('mealsPerDay', parseInt(e.target.value) || 0)}
            placeholder="Quantidade"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="preferredFoods">Quais os alimentos preferidos</Label>
          <Textarea
            id="preferredFoods"
            value={patient.habits.preferredFoods?.join(', ') || ''}
            onChange={(e) => handleInputChange('preferredFoods', e.target.value.split(',').map(item => item.trim()))}
            placeholder="Alimentos preferidos (separados por vírgula)"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Problemas</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="chewing"
                checked={patient.habits.feedingProblems?.chewing}
                onCheckedChange={(checked) => handleNestedChange('feedingProblems', 'chewing', checked === true)}
              />
              <Label htmlFor="chewing">Mastigação</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="swallowing"
                checked={patient.habits.feedingProblems?.swallowing}
                onCheckedChange={(checked) => handleNestedChange('feedingProblems', 'swallowing', checked === true)}
              />
              <Label htmlFor="swallowing">Deglutição</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="digestion"
                checked={patient.habits.feedingProblems?.digestion}
                onCheckedChange={(checked) => handleNestedChange('feedingProblems', 'digestion', checked === true)}
              />
              <Label htmlFor="digestion">Digestão</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="nausea"
                checked={patient.habits.feedingProblems?.nausea}
                onCheckedChange={(checked) => handleNestedChange('feedingProblems', 'nausea', checked === true)}
              />
              <Label htmlFor="nausea">Náuseas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="pyrosis"
                checked={patient.habits.feedingProblems?.pyrosis}
                onCheckedChange={(checked) => handleNestedChange('feedingProblems', 'pyrosis', checked === true)}
              />
              <Label htmlFor="pyrosis">Pirose</Label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <Label htmlFor="dailyWaterIntake">Ingesta Hídrica: volume diário</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="dailyWaterIntake"
              type="number"
              value={patient.habits.dailyWaterIntake || ''}
              onChange={(e) => handleInputChange('dailyWaterIntake', parseInt(e.target.value) || 0)}
              placeholder="Volume"
            />
            <span>ml</span>
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Recreação e Lazer</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="tv"
                checked={patient.habits.recreation?.tv}
                onCheckedChange={(checked) => handleNestedChange('recreation', 'tv', checked === true)}
              />
              <Label htmlFor="tv">TV</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newspaper"
                checked={patient.habits.recreation?.newspaper}
                onCheckedChange={(checked) => handleNestedChange('recreation', 'newspaper', checked === true)}
              />
              <Label htmlFor="newspaper">Jornal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="books"
                checked={patient.habits.recreation?.books}
                onCheckedChange={(checked) => handleNestedChange('recreation', 'books', checked === true)}
              />
              <Label htmlFor="books">Livros</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="music"
                checked={patient.habits.recreation?.music}
                onCheckedChange={(checked) => handleNestedChange('recreation', 'music', checked === true)}
              />
              <Label htmlFor="music">Músicas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="recreation-other"
                checked={patient.habits.recreation?.other}
                onCheckedChange={(checked) => handleNestedChange('recreation', 'other', checked === true)}
              />
              <Label htmlFor="recreation-other">Outros</Label>
            </div>
          </div>
        </div>
        
        {patient.habits.recreation?.other && (
          <div className="form-group">
            <Label htmlFor="recreationOther">Especifique</Label>
            <Input
              id="recreationOther"
              value={patient.habits.recreation?.otherDescription || ''}
              onChange={(e) => handleNestedChange('recreation', 'otherDescription', e.target.value)}
              placeholder="Outros tipos de recreação"
            />
          </div>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Atividade Física</Label>
          <RadioGroup
            value={patient.habits.physicalActivity ? "praticante" : "não-praticante"}
            onValueChange={(value) => handleInputChange('physicalActivity', value === "praticante")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não-praticante" id="activity-no" />
              <Label htmlFor="activity-no">Não praticante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="praticante" id="activity-yes" />
              <Label htmlFor="activity-yes">Praticante</Label>
            </div>
          </RadioGroup>
        </div>
        
        {patient.habits.physicalActivity && (
          <>
            <div className="form-group">
              <Label htmlFor="activityType">Qual</Label>
              <Input
                id="activityType"
                value={patient.habits.activityType}
                onChange={(e) => handleInputChange('activityType', e.target.value)}
                placeholder="Tipo de atividade"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="activityFrequency">Frequência</Label>
              <Input
                id="activityFrequency"
                value={patient.habits.activityFrequency}
                onChange={(e) => handleInputChange('activityFrequency', e.target.value)}
                placeholder="Frequência"
              />
            </div>
          </>
        )}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Sono e Repouso</Label>
          <div className="space-y-4 mt-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label>Tem dificuldades para dormir</Label>
                <RadioGroup
                  value={patient.habits.sleepDifficulties ? "sim" : "não"}
                  onValueChange={(value) => handleInputChange('sleepDifficulties', value === "sim")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="sleep-diff-no" />
                    <Label htmlFor="sleep-diff-no">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="sleep-diff-yes" />
                    <Label htmlFor="sleep-diff-yes">Sim</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Label htmlFor="normalSleepHours">Tempo normal de sono</Label>
              <Input
                id="normalSleepHours"
                type="number"
                value={patient.habits.normalSleepHours || ''}
                onChange={(e) => handleInputChange('normalSleepHours', parseInt(e.target.value) || 0)}
                placeholder="Horas"
                className="w-20"
              />
              <span>horas</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <Label>Atividade sexual</Label>
          <RadioGroup
            value={patient.habits.sexuallyActive ? "sim" : "não"}
            onValueChange={(value) => handleInputChange('sexuallyActive', value === "sim")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="sexual-no" />
              <Label htmlFor="sexual-no">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="sexual-yes" />
              <Label htmlFor="sexual-yes">Sim</Label>
            </div>
          </RadioGroup>
        </div>
        
        {patient.habits.sexuallyActive && (
          <>
            <div className="form-group">
              <Label htmlFor="sexFrequency">Frequência</Label>
              <Input
                id="sexFrequency"
                value={patient.habits.sexFrequency}
                onChange={(e) => handleInputChange('sexFrequency', e.target.value)}
                placeholder="Frequência"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="sexChanges">Alterações</Label>
              <Input
                id="sexChanges"
                value={patient.habits.sexChanges}
                onChange={(e) => handleInputChange('sexChanges', e.target.value)}
                placeholder="Alterações"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="painDuringSex">Sente dor</Label>
              <Input
                id="painDuringSex"
                value={patient.habits.painDuringSex}
                onChange={(e) => handleInputChange('painDuringSex', e.target.value)}
                placeholder="Sente dor"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="contraceptiveUse">Uso de contraceptivo</Label>
              <Input
                id="contraceptiveUse"
                value={patient.habits.contraceptiveUse}
                onChange={(e) => handleInputChange('contraceptiveUse', e.target.value)}
                placeholder="Uso de contraceptivo"
              />
            </div>
          </>
        )}
      </div>
    </FormSection>
  );
}
