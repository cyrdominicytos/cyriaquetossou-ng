import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {WorkDetailsComponent} from "../../components/work-details/work-details.component";
import {AboutComponent} from "../../components/about/about.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app-service.service";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    WorkDetailsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements  OnInit{

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.appService.jumpToSection(fragment);
    });
  }
}
