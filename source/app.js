

export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route:["", "home"], moduleId:"home/home", 
                title:"Home", nav:true, name:"Home" },

            { route:"report", moduleId:"report/report", 
            	title:"Report", nav:true},

            { route:"about", moduleId:"about/about", 
                title:"About", nav:true}
        ]);
    }

}


