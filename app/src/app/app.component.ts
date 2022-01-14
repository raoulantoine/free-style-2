import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {StudentInformation} from './student-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'monApp';
  public studentInformation: StudentInformation = null;
  showSecret = false;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getStudentInformation().subscribe(
      (res: StudentInformation) => this.studentInformation = res,
      error => this.studentInformation = null);
  }
}
