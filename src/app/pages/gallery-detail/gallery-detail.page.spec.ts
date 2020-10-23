import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryDetailPage } from './gallery-detail.page';

describe('GalleryDetailPage', () => {
  let component: GalleryDetailPage;
  let fixture: ComponentFixture<GalleryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
