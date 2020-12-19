import { TestBed } from '@angular/core/testing';
import { Cart } from './cart';
import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;
  const mockPlant: Cart = {
    id: 1,
    latinName: 'Monstera Deliciosa',
    name: 'Alfredo',
    price: 28.69,
    quantity: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the bought products', () => {
    service.boughtProductsToDb([mockPlant]);
    const boughtProducts = service.getBoughtProducts();
    expect(boughtProducts).toEqual([mockPlant]);
  });
});