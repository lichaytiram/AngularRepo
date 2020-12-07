import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'email';

  public html: string;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const url: string = "https://video.fsdv2-1.fna.fbcdn.net/v/t39.25447-2/126509019_1499502583575169_6896266240240654946_n.mp4?_nc_cat=106&ccb=2&_nc_sid=5aebc0&efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfdjRfNXNlY2dvcF9ocTVfZnJhZ18yX3ZpZGVvIn0%3D&_nc_ohc=GL-ZEAGkM60AX_WFCIH&_nc_ht=video.fsdv2-1.fna&oh=ff10fdb1a0b31f79c989571cd6f3285e&oe=5FEB2AE8&bytestart=339825&byteend=402837";
    this.http.get<string>(url).subscribe(
      res => console.log(res)
      ,
      // res => this.html = res,
      err => console.log(err)
    )
  }


}
