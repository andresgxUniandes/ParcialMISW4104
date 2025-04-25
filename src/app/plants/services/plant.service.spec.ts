import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  let service: PlantService;
  let httpMock: HttpTestingController;

  const mockPlants = [
    { 
      id: 1, 
      nombre_comun: "Lengua de vaca",
      nombre_cientifico: "Sansevieria Trifasciata",
      tipo: "Interior",
      altura_maxima: 140,
      clima: "Templado, cálido",
      sustrato_siembra: "Tierra orgánica con buen drenaje"
    },
    { 
      id: 2, 
      nombre_comun: "Chachafruto",
      nombre_cientifico: "Schefflera actinophylla",
      tipo: "Exterior",
      altura_maxima: 1000,
      clima: "Todos",
      sustrato_siembra: "Sustrato para huerto"
    },
    { 
      id: 3, 
      nombre_comun: "Espatifilo",
      nombre_cientifico: "Spathiphyllum Wallasii",
      tipo: "Interior",
      altura_maxima: 65,
      clima: "Templado, cálido",
      sustrato_siembra: "Tierra orgánica"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService]
    });

    service = TestBed.inject(PlantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get plants from the API', () => {
    service.getPlants().subscribe(plants => {
      expect(plants).toBeTruthy();
      expect(plants.length).toBe(3);
      expect(plants).toEqual(mockPlants);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockPlants);
  });

  it('should match plant interface structure', () => {
    service.getPlants().subscribe(plants => {
      const plant = plants[0];
      expect(plant.id).toBeDefined();
      expect(plant.nombre_comun).toBeDefined();
      expect(plant.nombre_cientifico).toBeDefined();
      expect(plant.tipo).toBeDefined();
      expect(plant.altura_maxima).toBeDefined();
      expect(plant.clima).toBeDefined();
      expect(plant.sustrato_siembra).toBeDefined();
    });

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush(mockPlants);
  });

  it('should handle http error', () => {
    service.getPlants().subscribe({
      error: (error) => {
        expect(error.status).toBe(404);
      }
    });

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush('Error', {
      status: 404,
      statusText: 'Not Found'
    });
  });

  it('should return plants with correct types', () => {
    service.getPlants().subscribe(plants => {
      const interiorPlants = plants.filter(p => p.tipo === 'Interior');
      const exteriorPlants = plants.filter(p => p.tipo === 'Exterior');
      
      expect(interiorPlants.length).toBe(2);
      expect(exteriorPlants.length).toBe(1);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush(mockPlants);
  });
});
