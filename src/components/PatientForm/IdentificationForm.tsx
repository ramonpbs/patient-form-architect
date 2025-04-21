
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { usePatient } from '@/contexts/PatientContext';
import { PatientIdentification } from '@/models/patient';
import FormSection from './FormSection';
import { UserRound } from 'lucide-react';
import { getAgeFromBirthdate } from '@/lib/utils';

export function IdentificationForm() {
  const { patient, updatePatient } = usePatient();
  const [isOpen, setIsOpen] = useState(true);
  
  const handleInputChange = (field: keyof PatientIdentification, value: any) => {
    // Handle special case for birth date to automatically calculate age
    if (field === 'birthDate') {
      const age = getAgeFromBirthdate(value);
      updatePatient('identification', { [field]: value, age });
    } else {
      updatePatient('identification', { [field]: value });
    }
  };
  
  return (
    <FormSection
      title="IDENTIFICAÇÃO DO PACIENTE"
      icon={<UserRound className="h-5 w-5" />}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            value={patient.identification.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Nome completo"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="birthDate">Data de Nascimento</Label>
          <Input
            id="birthDate"
            type="date"
            value={patient.identification.birthDate}
            onChange={(e) => handleInputChange('birthDate', e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="age">Idade</Label>
          <Input
            id="age"
            type="number"
            value={patient.identification.age || ''}
            onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
            placeholder="Idade"
          />
        </div>
        
        <div className="form-group">
          <Label>Sexo</Label>
          <RadioGroup
            value={patient.identification.gender}
            onValueChange={(value) => handleInputChange('gender', value)}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="F" id="gender-f" />
              <Label htmlFor="gender-f">F</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="M" id="gender-m" />
              <Label htmlFor="gender-m">M</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="form-group">
          <Label htmlFor="children">Filhos</Label>
          <Input
            id="children"
            type="number"
            value={patient.identification.children || ''}
            onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
            placeholder="Quantidade"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="race">Raça</Label>
          <Input
            id="race"
            value={patient.identification.race}
            onChange={(e) => handleInputChange('race', e.target.value)}
            placeholder="Raça"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="education">Escolaridade</Label>
          <Input
            id="education"
            value={patient.identification.education}
            onChange={(e) => handleInputChange('education', e.target.value)}
            placeholder="Escolaridade"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="profession">Profissão</Label>
          <Input
            id="profession"
            value={patient.identification.profession}
            onChange={(e) => handleInputChange('profession', e.target.value)}
            placeholder="Profissão"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="civilStatus">Estado Civil</Label>
          <Input
            id="civilStatus"
            value={patient.identification.civilStatus}
            onChange={(e) => handleInputChange('civilStatus', e.target.value)}
            placeholder="Estado Civil"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="nationality">Naturalidade</Label>
          <Input
            id="nationality"
            value={patient.identification.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            placeholder="Naturalidade"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="housingType">Tipo de moradia</Label>
          <Select 
            value={patient.identification.housingType}
            onValueChange={(value) => handleInputChange('housingType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Alvenaria">Alvenaria</SelectItem>
              <SelectItem value="Madeira">Madeira</SelectItem>
              <SelectItem value="Alugada">Alugada</SelectItem>
              <SelectItem value="Própria">Própria</SelectItem>
              <SelectItem value="Cedida">Cedida</SelectItem>
              <SelectItem value="Outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {patient.identification.housingType === 'Outros' && (
          <div className="form-group">
            <Label htmlFor="otherHousingType">Especifique</Label>
            <Input
              id="otherHousingType"
              value={patient.identification.otherHousingType || ''}
              onChange={(e) => handleInputChange('otherHousingType', e.target.value)}
              placeholder="Especifique"
            />
          </div>
        )}
        
        <div className="form-group">
          <Label htmlFor="residentsCount">Quantas pessoas residem na casa</Label>
          <Input
            id="residentsCount"
            type="number"
            value={patient.identification.residentsCount || ''}
            onChange={(e) => handleInputChange('residentsCount', parseInt(e.target.value) || 0)}
            placeholder="Quantidade"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasWater" 
              checked={patient.identification.hasWater}
              onCheckedChange={(checked) => handleInputChange('hasWater', checked === true)}
            />
            <Label htmlFor="hasWater">Água Encanada</Label>
          </div>
        </div>
        
        <div className="form-group">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasSewage" 
              checked={patient.identification.hasSewage}
              onCheckedChange={(checked) => handleInputChange('hasSewage', checked === true)}
            />
            <Label htmlFor="hasSewage">Rede de Esgoto</Label>
          </div>
        </div>
        
        <div className="form-group">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasSepticTank" 
              checked={patient.identification.hasSepticTank}
              onCheckedChange={(checked) => handleInputChange('hasSepticTank', checked === true)}
            />
            <Label htmlFor="hasSepticTank">Fossa Séptica</Label>
          </div>
        </div>
        
        <div className="form-group">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hasElectricity" 
              checked={patient.identification.hasElectricity}
              onCheckedChange={(checked) => handleInputChange('hasElectricity', checked === true)}
            />
            <Label htmlFor="hasElectricity">Energia Elétrica</Label>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <Label htmlFor="familyIncome">Renda Familiar</Label>
          <Input
            id="familyIncome"
            value={patient.identification.familyIncome}
            onChange={(e) => handleInputChange('familyIncome', e.target.value)}
            placeholder="Renda familiar"
          />
        </div>
      </div>
    </FormSection>
  );
}
