module.exports = {
  Admins: ["513689576494071818", "513689576494071818"], 
  ExpressServer: true, 
  DefaultLocal: process.env.PortClient || "",
  Port: 3000, //Which port website gonna be hosted
  ClientSecret: process.env.ClientSecret || "oXHHONwsOBbn62-mxaWQ2hjEbtQCiA4X", 
  Scopes: ["identify", "disabledRightClick", "server.commands"],
  CallbackURL: "/api/callback", 
  CookieSecret: "fujoulab", 
  Website: process.env.Website || "read.fujoulab.repl.co", 
  
 
  //LocalCookie
  LocalCookie: {
    id: "Main",
    host: "fujoushi-fujoulab.radiantcodes.repl.co",
    port: 443,
    pass: "youshallnotpass",
    secure: true, 
  },
};


