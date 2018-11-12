var express = require("express");
var app = express();

app.set("views","./views");
app.set("view engine", "ejs");

app.use("/css", express.static("css"));
app.use("/images", express.static("images"));
app.use("/media", express.static("media"));
app.use("/js", express.static("js"));
app.use("/vendor", express.static("vendor"));
app.use("/doc", express.static("doc"));

var menu =  {
    
};

var scripts =  ["",""];

var pages = [{
    active: false,
    nom: "Tableau de bord",
    adresse: "/",
    faIcone: "fa-tachometer-alt"
},{
    active: false,
    nom: "Statistiques",
    adresse: "defi_stats.html",
    faIcone: "fa-chart-area"    
},{
    active: false,
    nom: "Mon défi",
    adresse: "defi.html",
    faIcone: "fa-table"    
},{
    active: false,
    nom: "Agenda",
    adresse: "ateliers.html",
    faIcone: "fa-calendar-alt"    
}
];

var notifs = [
    {
        type:"alert-info",
        titre:"Information !",
        secureToken:"",
        contenu: "Ce message est mis depuis le panel admin",
        id: "",
        
        
    }
];


app.get("/", (req,res) => {
    var pagesL = pages;
    pagesL[0].active = true;
    res.status(200).render("index", {
        pageTitle: "LuluZed - Tableau de Bord",
        scripts: ["carte","demo/chart-area-demo"],
        filAriane: [pagesL[0],{
                        active: true,
                        nom: "Aperçu",
                        adresse: "",   
                    }],
        notifs: notifs,
        pages: pagesL
    });


    
});

app.get("/login.html", (req,res) => {
    
    
});

app.get("/register.html", (req,res) => {
    
    
});

app.get("/defi.html", (req,res) => {

    var pagesL = pages;
    pagesL[2].active = true;
    res.status(200).render("defi", {
        pageTitle: "LuluZed - Mon Défi",
        scripts: ["defi","demo/datatables-demo"],
        filAriane: [pagesL[0], pagesL[2]],
        notifs: notifs,
        pages: pagesL
    });    
    
});

app.get("/defi_stats.html", (req,res) => {
    
    var pagesL = pages;
    pagesL[1].active = true;
    res.status(200).render("defi_stats", {
        pageTitle: "LuluZed - Statistiques Défi",
        scripts: ["defi_stats"],
        filAriane: [pagesL[0], pagesL[1]],
        notifs: notifs,
        pages: pagesL
    });  

});

app.get("/ateliers.html", (req,res) => {

    var pagesL = pages;
    pagesL[3].active = true;
    res.status(200).render("ateliers", {
        pageTitle: "LuluZed - Agenda",
        scripts: ["demo/chart-area-demo", "demo/datatables-demo"],
        filAriane: [pagesL[0], pagesL[3]],
        notifs: notifs,
        pages: pagesL
    });  
    
});








app.listen(8080, function() {
    
});
