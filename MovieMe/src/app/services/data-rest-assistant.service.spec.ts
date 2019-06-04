import { TestBed } from '@angular/core/testing';

import { DataRestAssistantService } from './data-rest-assistant.service';

describe('DataRestAssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRestAssistantService = TestBed.get(DataRestAssistantService);
    expect(service).toBeTruthy();
  });
});
