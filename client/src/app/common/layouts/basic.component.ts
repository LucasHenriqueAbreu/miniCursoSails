import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";

interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
}

@Component({
    selector: 'basic',
    templateUrl: 'basic.template.html'
})
export class BasicComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
