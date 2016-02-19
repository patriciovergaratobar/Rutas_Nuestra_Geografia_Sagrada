var initContainer = '<center><img id="logointid" src="img/logo.png" width="50%"></center><button id="playbtId" type="button" class="btn btn-lg btn-success btn-block">Iniciar Juego</button>';
var quizContainer;
var totalContatiner;

$( document ).ready(function() {
  initApp();
  loadControlle();
});



function initApp(){
  sound.play();
  quizContainer = $("#containerid").get(0).innerHTML;
  $("#containerid").get(0).innerHTML = initContainer;
}

  function loadControlle(){
  $( "#playbtId" ).click(function() {
    initPlayGame();
  });
}


function initPlayGame(){

  $("#containerid").get(0).innerHTML = quizContainer;

  $("#qid").get(0).innerText=getQuestions().data[0].number;
  $("#questionId").get(0).innerText=getQuestions().data[0].question;
  $("#aQuestionId").get(0).innerText=getQuestions().data[0].A;
  $("#bQuestionId").get(0).innerText=getQuestions().data[0].B;
  $("#cQuestionId").get(0).innerText=getQuestions().data[0].C;
  $("#dQuestionId").get(0).innerText=getQuestions().data[0].D;
  tempIndexGame = 1;
  StarPlayGame();

}

function StarPlayGame(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });

    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();

      console.dir(choice);

      //Se guarda la respuestas
      pushAnswers(choice);

    	setTimeout(function(){

        //Aqui se debe hacer la logica para ver si se continua con las preguntas
           //$( "#answer" ).html(  $(this).checking(choice) );

           if (tempIndexGame < getQuestions().data.length) {

             $("#qid").get(0).innerText=getQuestions().data[tempIndexGame].number;
             $("#questionId").get(0).innerText=getQuestions().data[tempIndexGame].question;
             $("#aQuestionId").get(0).innerText=getQuestions().data[tempIndexGame].A;
             $("#bQuestionId").get(0).innerText=getQuestions().data[tempIndexGame].B;
             $("#cQuestionId").get(0).innerText=getQuestions().data[tempIndexGame].C;
             $("#dQuestionId").get(0).innerText=getQuestions().data[tempIndexGame].D;
             tempIndexGame ++;


              $('#quiz').show();

              console.dir($('#dQuestionId'));

              $('#loadbar').fadeOut();

              console.dir($( "#answer" ));
           }else{
             $("#containerid").get(0).innerHTML = getResultsGame();
           }



    	}, 1500);
    });
/**
    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else
            return 'CORRECT';
    };
    */
};
