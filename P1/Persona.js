/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit since 2019    */                        
/*          ver 1.1, 02/2020               */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Anthoine Walker",
				Photo: "fato_homem.jpg",
				Quote: "Knowledge is king",
				Age: 24,
				Occupation: "Consultor",
				Family: "Soltero",
				Location: "Lyon - Francia",
				Character: "Le gusta disfrutar del tiempo y conocer nuevos países y personas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Cambiar a un trabajo más estable"],
				Frustrations: ["Me gusta la tecnología, pero las personas estan siempre en su móvil", "Quiero leer más y ir a más jardines"],
				Bio: "Soy de Lyon y he venido a Granada para estudiar administración de empresas, pero el trabajo es muy cansativo. Quiero hacer ahora una pausa en mi trabajo y descubrir el mundo de una forma barata y que pueda conocer nuevas personas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "LLevo un tiempo preocupado y quiero desconectar de todo lo que sea ligado a redes sociales",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Monica Gaztambide",
				Photo: "rapariga.jpeg",
				Quote: "A picture is worth a thousand words",
				Age: 21,
				Occupation: "Escritora",
				Family: "No estoy muy conectada con mi familia",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Quiero aprovechar para probar couchsurfing pues creo que es una buena forma de conocer nuevas histórias de personas para después escribir sobre eso y también para alejarme de mi introvertidad"],
				Frustrations: ["Conocer personas falsas", "Ser robada por personas que voy a dormir en su piso."],
				Bio: "Empezando a escribir mi primer libro que es basado en mis experiencias por todo el mundo, por eso quiero aprovechar la vida al maximo para tener las mejores experiencias para tener un best-seller",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos:   "Conocer personas amables y con buenas historias de vida" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])