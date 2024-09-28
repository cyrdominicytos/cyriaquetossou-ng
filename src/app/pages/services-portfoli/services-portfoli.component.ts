import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app-service.service";

@Component({
  selector: 'app-services-portfoli',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './services-portfoli.component.html',
  styleUrl: './services-portfoli.component.css'
})
export class ServicesPortfoliComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.appService.jumpToSection(fragment);
      else this.appService.jumpToSection(null);
    });
  }
}
