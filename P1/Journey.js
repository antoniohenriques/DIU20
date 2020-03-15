/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2019/20";
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Anthoine Walker",
                Photo: "fato_homem.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere descansar de su empleo",
                touch1: "movil(notas)",
                feel1: "5",
                con1: "ver cuantos dias voy a viajar",
                ima1: "cartoon-crying.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Salir de su empleo",
                touch2: "Empleo",
                feel2: "2",
                con2: "voy a perder mi forma de ganar dinero",
                ima2: "cartoon-writting2.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento en couchsurfing para cada país que voy a quedar",
                touch3: "móvil (app de couchsurfing)",
                feel3: "3",
                con3: "No encontrar en uno o más países habitaciones que me guste ",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Creado una lista corta de habitaciónes en cada país",
                touch4: "móvil(app de couchsurfing)",
                feel4: "3",
                con4: "No conseguir decidirme por que habitación voy a escojer",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encontrado 4 habitaciones que me gusta en cada país",
                touch5: "móvil (app de couchsurfing/whatsapp)",
                feel5: "5",
                con5: "No conseguir decidir que habitación voy a escojer",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar el piso que queria!",
                touch6: "móvil(app de couchsurfing)",
                feel6: "5",
                con6: "Miedo de que las personas que lo van a recibir no sean las mas amables",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Monica Gaztambide",
                Photo: "rapariga.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere escribir su primer libro con las experiencias que va a tener",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais con cultura interesante",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decir a sus padres que planea hacer el viaje",
                touch2: "Casa de sus padres",
                feel2: "1",
                con2: "No conseguir hablar con sus padres",
                ima2: "cartoon-planning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento en couchsurfing",
                touch3: "móvil (app de couchsurfing)",
                feel3: "4",
                con3: "No encontrar informaciones suficientes sobre las personas que van a recibir y lo que le espera",
                ima3: "cartoon-phone-sitting.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "mirando alojamientos en couchsurfing",
                touch4: "móvil(app de couchsurfing)",
                feel4: "3",
                con4: "No encontrar una habitación en los países que me voy que me guste",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encontrado 2 habitaciones que me gusta en cada país",
                touch5: "móvil (app de couchsurfing/whatsapp)",
                feel5: "5",
                con5: "No conseguir decidirme sobre que habitación escojer",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar el piso que queria!",
                touch6: "móvil(app de couchsurfing)",
                feel6: "5",
                con6: "Que las habitaciónes que he escojido no sean como muestran las fotos",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



