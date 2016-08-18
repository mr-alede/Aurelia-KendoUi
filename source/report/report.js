//import {inject} from "aurelia-framework";
//import {MovieData} from "./movieData";

//@inject(MovieData)
export class Report {
	pageable = {
		refresh: true,
		pageSizes: true,
		buttonCount: 10
	};

	constructor() {
		this.datasource = {
			type: 'odata',
			transport: {
				read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
			},
			pageSize: 5
		};
	}
}


