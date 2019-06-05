import { TestBed } from '@angular/core/testing';
import { StorageAssistantService } from './storage-assistant.service';



describe('StorageAssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageAssistantService = TestBed.get(StorageAssistantService);
    expect(service).toBeTruthy();
  });
});
