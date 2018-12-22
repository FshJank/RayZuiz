const Discord = require("discord.js");
const  client = new Discord.Client();
//LINEA DE CONFIG AL ARCHIVO DEL BOT
const config = require("./config.json");

client.on("ready", () => {
    console.log("Siempre Listo!");
    
    client.user.setPresence( {
        status: "online",
        game: {
            name: "|/ayuda | Enfocrafters",
            type: "WATCHING"
        }
    } );
 
 });

var prefix = config.prefix;

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.on("message", (message) => {
    const prefixes = ['|/','|!', '|?', '|+'];
    let prefix = false;
    for(const thisPrefix of prefixes) {
      if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if(!prefix) return;    

	mensaje = message.content.toLowerCase();    
    if (mensaje.startsWith(prefix +"ayuda" )){
        message.delete(1);
        message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
        const embed = new Discord.RichEmbed()
        .setTitle("--=Comandos=--")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0x00AE86)
        .setFooter("Ayuda", client.user.avatarURL)
        .setImage(message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .addField(prefix+ '**Afk**  :'          , '**Para activar el afk**',true )
        .addField(prefix+ '**Offafk**  :'       , '**Para desactivar el afk**',true) 
        .addField(prefix+ '**Reporte**  :'       , '**Reportar a un usuario**',true)
        .addField(prefix+ '**Server**  :'     , '**Informacion del Servidor**',true)
        .addField(prefix+ '**Web**  :'          , '**Sitios Web**',true)
        .addField(prefix+ '**Chat**  :'          , '**Limpia el chat lim. 100**',true)
        .addField(prefix+ '**User**  :'          , '**Informacion del Usuario**',true) 
        .addField(prefix+ '**Sugerencia**  :'          , '**Sugerencia para mejorar**',true)
        .addField(prefix+ '**Info**  :'          , '**Informacion del Bot**',true)
        .addField(prefix+ '**Postulados**  :'          , '**Lista de Postulados**',true)
        message.author.send (embed);
    }

    mensaje = message.content.toLowerCase();      
    if (mensaje.startsWith(prefix +"reporte" )){
        message.delete(1);
        var args = message.content.substring(prefix.length).split(" ");
        var user = message.mentions.members.first();
        var razon = args.slice(2).join (" ");
        if (!user) return message.channel.send('Menciona a un Usuario');
        if (!razon) return message.channel.send ('Di una Razon');
        message.channel.send('**Gracias por su reporte.**');
            const embed = new Discord.RichEmbed() 
             .setTitle("Reporte.")
             .setAuthor(message.author.username, message.author.avatarURL)
                    .setColor(0x00AE86)
                    .setTimestamp()
                    .setFooter("Tiempo", client.user.avatarURL)
                    .setThumbnail(message.author.avatarURL)
                    .addField("Usuario", `${user.displayName}`, true)
                    .addField("Motivo", `${razon}`, true);
                    message.guild.channels.find(c => c.name == "【📣】ʀeportes").send (embed);
        }

        mensaje = message.content.toLowerCase(); 
        if (mensaje.startsWith(prefix +"web" )){
            message.delete(1);
                const embed = new Discord.RichEmbed() 
                 .setTitle("Paginas Web")
                        .setAuthor(message.author.username, message.author.avatarURL)
                        .setColor(0x00AE86)
                        .addField("Youtube.",
                        "https://ouo.io/k9ocOZ.")
                        .addField("Facebook.",
                        "https://ouo.io/YyySyH.") 
                        .addField("Formulario de Staff.",
                        "https://ouo.io/1SzdQM.")
                        .addField("Textura pack del Server Gama Media.",
                        "https://ouo.io/btg6Pd.")
                        .addField("Tienda del Servidor.",
                        "https://ouo.io/in5JtS.")              
                        .setTimestamp()
                        .setFooter("Tiempo", client.user.avatarURL)
                        .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
            } 
            
            mensaje = message.content.toLowerCase();             
            if (mensaje.startsWith(prefix +"offafk" )){ 
                message.delete(1);     
                const embed = new Discord.RichEmbed() 
                .setTitle("Staff Afk.")
                .setAuthor(message.author.username, message.author.avatarURL)                
                .setColor(0x00AE86)
                .addField("Usuario", message.author.username, true)
                .setTimestamp()
                .addField("Afk Apagado", desactivado);
                message.channel.send({embed});       
            }

            mensaje = message.content.toLowerCase(); 
            if (mensaje.startsWith(prefix +"afk" )){
                message.delete(1);    
                const embed = new Discord.RichEmbed() 
                .setTitle("Staff Afk.")
                .setAuthor(message.author.username, message.author.avatarURL)                
                .setColor(0x00AE86)
                .addField("Usuario", message.author.username, activado)
                .setTimestamp()
                .addField("Afk Encendido", true);
                message.channel.send({embed});       
            }

            var mensaje = message.content.toLowerCase();
            if (mensaje.startsWith(prefix +"chat" )){
            let permiso = message.member.hasPermission("MANAGE_MESSAGES");    
            var args = message.content.substring(prefix.length).split(" ");                                        
            var chat = args.slice(1).join (" ");
            if (!chat) return message.channel.send ('Escribe un numero para borrar chat');
            const embed = new Discord.RichEmbed() 
            .setTitle("Chat.")
                   .setAuthor(message.author.username, message.author.avatarURL)
                   .setColor(0x00AE86)
                   .setTimestamp()
                   .setFooter("Chat borrado", client.user.avatarURL)
                   .setThumbnail(message.author.avatarURL)					
                   .addField("Cantidad de chat Borrado", `${chat}`, true)       
            message.channel.bulkDelete(parseInt(chat))                  
            message.channel.send({embed});
          }

          mensaje = message.content.toLowerCase();           
            if (mensaje.startsWith(prefix +"server" )){
                let permiso = message.member.hasPermission("ADMINISTRATOR");
                message.delete(1);
                var server = message.guild;
                const embed = new Discord.RichEmbed()
                .setThumbnail(server.iconURL)
                .setAuthor(server.name, server.iconURL)
                .addField('ID', server.id, true)
                .addField('Region', server.region, true)
                .addField('Creado el', server.joinedAt.toDateString(), true)
                .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
                .addField('Miembros', server.memberCount, true)
                .addField('Roles', server.roles.size, true)
                .setColor(0x66b3ff)
               message.channel.send({embed});    
              }              

              mensaje = message.content.toLowerCase(); 
              if (mensaje.startsWith(prefix +"sancion" )){
                  var args = message.content.substring(prefix.length).split(" ");
                  var user = message.mentions.members.first();
                var sancion = args.slice(2).join (" ");		
                var razon = args.slice(3).join (" ");
                var time = args.slice(4).join (" ");		
                  if (!user) return message.channel.send('Menciona a un Usuario');
                  if (!sancion) return message.channel.send ('Menciona que sanción tiene');		
                  if (!razon) return message.channel.send ('Di una Razon');
                  if (!time) return message.channel.send ('Di un Tiempo');
                  message.delete(1);
                  const embed = new Discord.RichEmbed() 
                       .setTitle("Sanción.")
                              .setAuthor(message.author.username, message.author.avatarURL)
                              .setColor(0x00AE86)
                              .setTimestamp()
                              .setFooter("Inicio de Sanción", client.user.avatarURL)
                              .setThumbnail(message.author.avatarURL)					
                              .addField("Usuario", `${user.displayName}`, true)
                              .addField("Sanción", `${sancion}`, true)                              
                              .addField("Motivo", `${razon}`, true)
                              .addField("Tiempo", `${time}`, true);	
                              message.guild.channels.find(c => c.name == "【📣】ʀeportes").send (embed);
                  }

                  mensaje = message.content.toLowerCase(); 
                    if(mensaje.startsWith(prefix + "user")){
                        let permiso = message.member.hasPermission("ADMINISTRATOR");
                        let userm = message.mentions.users.first()
                        if(!userm){
                          var user = message.author;
                            const embed = new Discord.RichEmbed()
                            .setThumbnail(user.avatarURL)
                            .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
                            .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
                            .addField('ID', user.id, true)
                            .addField('Estado', user.presence.status, true)
                            .addField('Apodo', message.member.nickname, true)
                            .addField('Cuenta Creada', user.createdAt.toDateString(), true)
                            .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
                            .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
                            .setColor(0x66b3ff)
                           message.channel.send({embed});
                        }else{
                          const embed = new Discord.RichEmbed()
                          .setThumbnail(userm.avatarURL)
                          .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
                          .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
                          .addField('ID', userm.id, true)
                          .addField('Estado', userm.presence.status, true)
                          .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
                          .setColor(0x66b3ff)
                         message.channel.send({embed});
                        }   
                    }

                    mensaje = message.content.toLowerCase(); 
                    if(mensaje.startsWith(prefix + "sugerencia")){ 
                        var args = message.content.substring(prefix.length).split(" ");
                        var reason = args.slice(1).join(" ")
                        if(!reason) return message.channel.send("Te falta la idea o sugerencia")
                        message.channel.send("La Sugerencia ha sido enviada!")
                        const embed = new Discord.RichEmbed()
                        .setColor(0x00AE86)
                        .setTitle('Sugerencia de : ' + message.author.username)
                        .addField(message.author.username+'#' +message.author.discriminator, reason,)
                        message.delete()
                               message.channel.send({embed})
                               .then(function (message) {
                                message.react("✅")
                                message.react("❎") 
                                message.pin()
                            });
                        }

                        mensaje = message.content.toLowerCase(); 
                        if(mensaje.startsWith(prefix + "postulados")){
                            const embed = new Discord.RichEmbed()
                            .setColor(0x00AE86)
                            .setTitle('Lista de postulados :')
                            .addField('**KarelysQueen.\n Scarlxrd.\n _Querubin_.\n silverio_galleta.\n AaronMunoz. **' ,"s----------------------s")
                            .addField("Fecha Limite de postulacion 22/12/18","**Esta Lista se actualizara cada dia**")
                            message.delete()
                                   message.channel.send({embed})
                                   .then(function (message) {
                                    message.react("✅")
                                    message.react("💓")                                     
                                    message.pin()
                                });
                            }

                            mensaje = message.content.toLowerCase(); 
                            if(mensaje.startsWith(prefix + "info")){
                                const embed = new Discord.RichEmbed()
                                .setColor(0x00AE86)
                                .setTitle('Info del Bot :')
                                .addField('**Creador Fsh_Jank.\n** **Ideas\n** ValeriaGamer.\n Roman2.\n Dmax.\n **Creditos a.\n** AgentLew.\n Agate.\n ValeriaGamer.\n Qzada.\n Ides<3.\n',"s----------------------s")
                                message.delete()
                                       message.channel.send({embed})
                                       .then(function (message) {                                       
                                        message.react("✅")
                                        message.react("💓") 
                                        message.pin()
                                    });
                                }

                                mensaje = message.content.toLowerCase();
                                if(mensaje.startsWith(prefix + "8ball")){
                                    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
                                    var args = message.content.substring(prefix.length).split(" ");                                        
                                    var texto = args.slice(1).join (" ");
                                    if (!texto) return message.reply(`Escriba una pregunta.`);
                                    const embed = new Discord.RichEmbed()
                                    .setColor(0x00AE86)    
                                    .setTitle('La pregunta de : ' + message.author.username)
                                    .addField("**Es : " +texto+ '**\n**Mi respuesta es : \n**'+ rpts[Math.floor(Math.random() * rpts.length)], '**')
                                    message.channel.send({embed})                               
                                }

                                mensaje = message.content.toLowerCase(); 
                                if(mensaje.startsWith(prefix + "ausencia")){ 
                                    var args = message.content.substring(prefix.length).split(" ");
                                    var reason = args.slice(1).join(" ")
                                    if(!reason) return message.channel.send("Te falta el motivo de tu Ausencia")
                                    message.channel.send("Tu Ausencia ha sido enviada!")
                                    const embed = new Discord.RichEmbed()
                                    .setColor(0x00AE86)
                                    .setTitle('Ausencia de : ' + message.author.username)
                                    .addField(message.author.username+'#' +message.author.discriminator, reason,)
                                    .addField("Esperamos y Regreses pronto sea cual sea tu motivo de ausencia en el Servidor")
                                    message.delete()
                                           message.channel.send({embed})
                                           .then(function (message) {
                                            message.react("✅") 
                                            message.pin()
                                        });
                                    }

});
client.login(process.env.TOKEN);
