const peliculas = [
    {   
        img: 'images/avatar.jpg',
        titulo: 'AVATAR',
        genero: 'Acción, Aventura, Fantasía',
        clasificacion: 'Mayores de 12 años',
        sinopsis: `Avatar es una película de ciencia ficción y acción dirigida por James Cameron. La historia se desarrolla en un futuro 
                   lejano en un planeta llamado Pandora, donde la humanidad intenta explotar los recursos naturales de la tierra habitada por los Na'vi, 
                   una raza indígena extraterrestre. La trama se centra en un exmarine llamado Jake Sully, quien se une a los Na'vi y se enamora de una de sus guerreras 
                   llamada Neytiri. La película presenta un impresionante mundo visual y efectos especiales revolucionarios, además de temas importantes como la 
                   conservación del medio ambiente y el respeto a las culturas indígenas.`,
        duracion: 162,
        puntaje: 4,
    },
    {   
        img: 'images/fury.jpg',
        titulo: 'Fury',
        genero: 'Acción, drama bélico',
        clasificacion: 'Mayores de 17 años',
        sinopsis: `"Fury" es una película de guerra que sigue a un equipo de cinco soldados estadounidenses liderados por el 
                   sargento Don "Wardaddy" Collier a bordo de un tanque Sherman llamado "Fury". Durante la Segunda Guerra Mundial,
                   enfrentan varios peligros y desafíos mientras avanzan en territorio alemán. La película muestra la brutalidad 
                   de la guerra y su impacto emocional en los soldados, así como la camaradería que se forma entre ellos. Recibió 
                   críticas positivas por su actuación, dirección y realismo en la representación de la guerra.`,
        duracion: 135,
        puntaje: 3,
    }, 
    {   
        img: 'images/theHobbit.jpg',
        titulo: 'The hobbit',
        genero: 'Acción, drama bélico',
        clasificacion: 'Mayores de 17 años',
        sinopsis: `"The Hobbit" es una película de fantasía épica que sigue a Bilbo Baggins, un hobbit que se 
                   une a un grupo de enanos liderados por Thorin Escudo de Roble en una misión para recuperar su
                   hogar y su tesoro del dragón Smaug. A lo largo de su aventura, Bilbo y los enanos se enfrentan
                    a peligrosos enemigos y personajes familiares de "El Señor de los Anillos". La película es 
                    una historia sobre amistad, coraje y redención que explora temas como la codicia, la valentía
                    y la importancia del hogar.`,
        duracion: 135,
        puntaje: 3,
    },
    {   
        img: 'images/avengers.jpg',
        titulo: 'Avengers',
        genero: 'Acción, drama bélico',
        clasificacion: 'Mayores de 17 años',
        sinopsis: `"Avengers" es una película de superhéroes de Marvel que sigue a Iron Man, Capitán América, 
                   Thor, Hulk, Black Widow y Hawkeye mientras unen sus fuerzas para luchar contra el villano 
                   Loki y su ejército alienígena. La película presenta una emocionante acción de superhéroes, 
                   efectos especiales impresionantes y un elenco estelar de actores. Los Vengadores deben 
                   trabajar juntos para salvar al mundo de la destrucción total y proteger a la humanidad de 
                   futuras amenazas. La película fue un gran éxito comercial y generó varias secuelas y 
                   spin-offs de Marvel.`,
        duracion: 135,
        puntaje: 4,
        id: 4
    },
    {   
        img: 'images/deadpool.jpg',
        titulo: 'Deadpool',
        genero: 'Acción, Comedia, Aventura, Ciencia Ficción',
        clasificacion: 'Mayores de 17 años',
        sinopsis: `"Deadpool" es una película de superhéroes de Marvel que sigue a Wade Wilson, un ex-operativo
                     de las Fuerzas Especiales convertido en mercenario, quien adquiere habilidades sobrenaturales después 
                    de someterse a un experimento secreto para curar su cáncer. Adoptando la identidad de 
                    "Deadpool", Wade busca venganza contra el hombre responsable de su transformación mientras 
                    lucha contra enemigos peligrosos y utiliza su humor irreverente y su capacidad para romper 
                    la cuarta pared para entretener al público.`,
        duracion: 108,
        puntaje: 4,
    },
    {   
        img: 'images/warcraft.jpg',
        titulo: 'Warcraft',
        genero: 'Acción, Aventura, Fantasía',
        clasificacion: 'Mayores de 13 años',
        sinopsis: `La historia sigue a un grupo de humanos liderados por el rey Llane Wrynn y a un grupo de 
                   orcos liderados por el brujo Gul'dan. Los orcos buscan un nuevo hogar, y para hacerlo, usan 
                   una magia oscura que amenaza con destruir el mundo de Azeroth. Mientras tanto, los humanos 
                   luchan por defender su hogar y forman una alianza con los elfos y los enanos para detener a 
                   los orcos. La película cuenta con efectos especiales impresionantes y una historia emocionante
                    que atraerá tanto a los fanáticos del videojuego como a los amantes de la fantasía en general.`,
        duracion: 120,
        puntaje: 2,
    },
    {   
        img: 'images/batman.jpg',
        titulo: 'Batman',
        genero: 'Acción, Drama, Crimen',
        clasificacion: 'Mayores de 13 años',
        sinopsis: `"Batman" es una película de superhéroes que sigue al vigilante nocturno de Gotham City, 
                    Bruce Wayne, también conocido como Batman. Después de presenciar el asesinato de sus padres, 
                    Bruce se convierte en un justiciero enmascarado y lucha contra el crimen y la corrupción en 
                    su ciudad. Batman tiene un vasto arsenal de gadgets y un traje protector que lo hace imparable
                     en su misión de proteger a Gotham. La película presenta una emocionante historia de acción, 
                     drama y redención, y ha sido adaptada a varios medios, incluyendo cómics, series de televisión
                      y películas.`,
        duracion: 152,
        puntaje: 4,
    },
    {   
        img: 'images/4fantasticos.jpg',
        titulo: 'Los 4 fantasticos',
        genero: 'Acción, Aventura, Ciencia Ficción',
        clasificacion: 'Mayores de 13 años',
        sinopsis: `"Los 4 Fantásticos" es una película de superhéroes basada en el popular cómic de Marvel. La historia 
                   sigue a cuatro científicos que adquieren poderes sobrenaturales después de un accidente en el 
                   espacio: Reed Richards (Sr. Fantástico), Sue Storm (Mujer Invisible), Johnny Storm (Antorcha 
                    Humana) y Ben Grimm (La Cosa). Los cuatro utilizan sus habilidades para proteger al mundo de 
                    amenazas peligrosas y se enfrentan al villano Dr. Doom, quien también adquirió poderes en el 
                    mismo accidente. La película es una emocionante historia de acción y aventura que explora temas 
                    como la familia, el poder y la responsabilidad.`,
        duracion: 100,
        puntaje: 1,
    },
    {   
        img: 'images/simpsons.jpg',
        titulo: 'Los simpsons',
        genero: 'Comedia, Animación',
        clasificacion: 'Mayores de 13 años',
        sinopsis: `La historia sigue a la familia Simpson, liderada por Homer, quien se encuentra en el centro de un 
                   desastre ambiental después de arrojar una gran cantidad de residuos tóxicos en el lago local. La 
                   ciudad de Springfield se convierte en un caos mientras los residentes luchan por sobrevivir. 
                   Mientras tanto, los Simpson tratan de unirse y encontrar una manera de solucionar la situación. 
                   La película es divertida y emocionante, y cuenta con un elenco estelar de personajes conocidos y
                    queridos de la serie de televisión.`,
        duracion: 87,
        puntaje: 4,
    },
    
]