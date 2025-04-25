import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../services/plant.service';
import { Plant } from '../models/plant';
import { provideHttpClient } from '@angular/common/http';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  const mockPlants: Plant[] = [
    { 
      id: 1, 
      nombre_comun: "Lengua de vaca",
      tipo: "Interior",
      clima: "Templado, cálido",
      nombre_cientifico: "Monstera deliciosa",
      altura_maxima: 100,
      sustrato_siembra: "Tierra de hoja"
    },
    { 
      id: 2, 
      nombre_comun: "Chachafruto",
      tipo: "Exterior",
      clima: "Todos",
      nombre_cientifico: "Solanum jasminoides",
      altura_maxima: 150,
      sustrato_siembra: "Tierra de hoja"
    },
    { 
      id: 3, 
      nombre_comun: "Espatifilo",
      tipo: "Interior",
      clima: "Templado, cálido",
      nombre_cientifico: "Spathiphyllum wallisii",
      altura_maxima: 120,
      sustrato_siembra: "Tierra de hoja"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ PlantListComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load 3 plants on init', () => {

    const plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.plants.length).toBe(3);
  });

  it('should calculate correct totals for interior and exterior plants', () => {
    const plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  });

  it('should display all plants in the table', () => {
    const plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    component.ngOnInit();
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
  });

  it('should display correct plant names', () => {
    const plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    component.ngOnInit();
    fixture.detectChanges();
    const plantNames = fixture.nativeElement.querySelectorAll('td:nth-child(2)');
    expect(plantNames[0].textContent).toContain('Lengua de vaca');
    expect(plantNames[1].textContent).toContain('Chachafruto');
    expect(plantNames[2].textContent).toContain('Espatifilo');
  });
});
