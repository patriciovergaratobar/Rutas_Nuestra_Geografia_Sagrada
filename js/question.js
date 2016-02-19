var _ANSWERS = [];

var _QUESTION_GAME = {
	name : "Question",
	data : [
		{
      number: 1,
			question: "Año de llegada de pedro de Valdivia al cerro santa lucia",
			A: "11 de septiembre de 1541",
			B: "6 de diciembre de 1448",
			C: "13 de diciembre de 1540",
			D: "1 de enero de 1865",
			espond: "C",
		},
		{
      number: 2,
			question: "Fecha en que Michimalonco ataca e incendia Santiago",
			A: "11 de septiembre de 1541",
			B: "11 de septiembre de 1541",
			C: "13 de diciembre de 1540",
			D: "1 de enero de 1865",
			espond: "B",
		},
    {
      number: 3,
			question: "Que bordeaba el cerro santa lucia cuando pedro de Valdivia llego a la cuenca del actual Santiago",
			A: "2 esculturas de Poseidón",
			B: "El rio Mapocho",
			C: "Las calles",
			D: "Dos mástiles de los dioses indígenas.",
			espond: "A",
		},
    {
      number: 4,
			question: "Función principal del cerro Santa lucia en épocas primarias y anteriores a la llegada de los españoles.",
			A: "Proteger a la población de los desbordes del rio Mapocho",
			B: "Visualizar toda la ciudad en forma de estrategia militar.",
			C: "Centro astronómico",
			D: "Marcación de equinoccios de invierno y verano.",
			espond: "A",
		},
    {
      number: 5,
			question: "En qué año fue escavado por primera vez el Pucara de Chena por el Arqueólogo Rubén Stehberg",
			A: "1975 ",
			B: "1965",
			C: "1980",
			D: "1986",
			espond: "A",
		},
    {
      number: 6,
			question: "¿Qué encontró Pedro de Valdivia al llegar a Chile, luego de la estadía de Diego de Almagro?",
			A: "Orden cívico de los nativos, Diego de Almagro al mando del País.",
			B: "Ciudad sin mando alguno, Fin del entendimiento entre peninsulares y nativos. ",
			C: "Diego de Almagro fallecido por una rebelión de Michimalonco.",
			D: "Completo entendimiento entre peninsulares y nativos, con Diego de Almagro al Mando.",
			espond: "B",
		},
    {
      number: 7,
			question: "Primera mujer española en llegar a Chile.",
			A: "Inés de Suarez. ",
			B: "María Isabel Riquelme.",
			C: "Rosario Orrego y Amanda Labarca",
			D: "Todas las anteriores ",
			espond: "D",
		},
    {
      number: 8,
			question: "¿La plaza de Armas de Santiago de Chile, fue construida al centro de la ciudad?",
			A: "Si",
			B: "No",
			C: "Depende",
			D: "Ninguna de las anteriores",
			espond: "B",
		}
	]
};

/**
* Variable que contiene el indice del juego
*/
tempIndexGame = 0;

/**
* Funcion que entrega el resultado del juego jugado.
*/
function getResultsGame(){
	var data = totalAnswers();
	var templateResult = '<div id="resultsGameId">'+
	'<CENTER>'+
		'<h2>'+
		'<label id="titleNoteEnd" class="textNoteEnd"> Tu Nota es:</label>'+
		'</h2>'+
		'<h1>'+
		'<span class="label '+data.style+'" id="noteEnd">'+data.note+'</span>'+
		'</h1>'+
		'<br><br>'+
		'<h4>'+
		'<label id="msgNoteEnd" class="textNoteEnd">'+data.msg+'</label>'+
		'</h4>'+
		'<br><br>'+
		'<button type="button" class="btn btn-lg btn-success btn-block" onClick="location.reload();" >Finalizar</button>'+
		'</CENTER>'+
		'</div>';

	return templateResult;

}

/**
* Funcion que inserta respuestas
*/
function pushAnswers(a){
  this._ANSWERS.push(a);
}

function totalAnswers(){
	var i=0;
	var nota = 0;
	var respons = {
		note: 0,
		style: '',
		msg: ''
	};

	for (i=0;i<getQuestions().data.length;i++) {
		if (this._ANSWERS[i] === this._QUESTION_GAME.data[i].espond) {
				nota = nota + 70;
		}else{
				nota = nota + 10;
		}
	}
	nota = (nota / getQuestions().data.length);

	if (Math.floor(nota) === 70) {
		respons.note = Math.floor(nota);
		respons.style = 'label-info';
		respons.msg = 'Super bien';
	}
	if (Math.floor(nota) > 50 && Math.floor(nota) < 70) {
		respons.note = Math.floor(nota);
		respons.style = 'label-success';
		respons.msg = 'Vas bien pero debes estudiar';
	}
	if (Math.floor(nota) > 30 && Math.floor(nota) < 50) {
		respons.note = Math.floor(nota);
		respons.style = 'label-warning';
		respons.msg = 'Debes estudiar mas';
	}
	if (Math.floor(nota) > 0 && Math.floor(nota) < 30) {
		respons.note = Math.floor(nota);
		respons.style = 'label-danger';
		respons.msg = 'Super mal, debes estudiar mas';
	}
	return respons;
}


/**
*Funcion que entrega las preguntas
*/
function getQuestions(){
  return this._QUESTION_GAME;
}

/**
*Funcion que inserta las preguntas
*/
function setQuestions(question){
  this._QUESTION_GAME = question;
}
