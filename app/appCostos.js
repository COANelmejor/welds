app.controller('contentCostos'), function(){
	this.n1 = costo;
}

var costo = {
	"titulo": "Costos",
	"contenidos":[
		{
			"titulo": "Inscripsión",
			"precios":[
				{
					"grados":"Grado 1 al 5",
					"costo": "450",
					"moneda": "*Dolares Americanos"
				},{
					"grados":"Grado 6 al 8",
					"costo": "550",
					"moneda": "*Dolares Americanos"	
				},{
					"grados":"Grado 9 al 12",
					"costo": "675",
					"moneda": "*Dolares Americanos"
				}
			]
		},
		
		{
			"titulo":"Colegiaturas",
			"precios":[
				{
					"grados":"De 1ro a 5to Grado",
					"precios":[
						{
							"contado:":"2550"
						},{
							"3 Pagos:": "920"
						},{
							"6 Pagos:":"500"
						}
					]

				},{
					"grados":"De 6to a 8vo Grado",
					"precios":[
						{
							"contado:":"3060"
						},{
							"3 Pagos:": "1104"
						},{
							"6 Pagos:":"600"
						}
					]

				},{
					"grados":"De 9no a 12vo Grado",
					"precios":[
						{
							"contado:":"3570"
						},{
							"3 Pagos:": "1288"
						},{
							"6 Pagos:":"700"
						}
					]

				}

			]
		},
		{
			"titulo": "Tutoría presencial adicional Q150.00 la hora."
		}
	]
}