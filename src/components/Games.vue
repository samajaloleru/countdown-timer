<template>
  <div class="cf center mw8">
    <div class="w-100 pa4 dt vh-100 gold">
      <div class="dtc w-100 v-mid">
        <div class="flex items-center justify-between w-100 pa1">
          <router-link to="/" class="fl mt3 no-underline near-white hover-bg-gold hover-near-black w-auto pa3 b br2fl mt3 no-underline gold hover-bg-gold hover-near-black w-auto pa3 b br2">
            Go To Home
          </router-link>
  
          <span class="fr right-0">
            <img class="w4" src="../assets/img/logo.png"/>
          </span>
        </div>
        <div class="fl w-100 f5 tc gold">
          <div class="cf center w-20-l tc fw6 measure">
            <div class="f1 heartbeat gold">
              Tic Tac
            </div>
          </div>
          <div class="cf mw5 tc center">
            <div @click="resetGame" class="cf w-50-l f6 measure center pointer  hover-bg-black-30 hover-gold bg-gold navy b pa2 br2 mv4 tc">
              Reset Game
            </div>
            <div class="relative flex flex-wrap items-center justify-center">
              <div class="w-third br bb pa3 pointer hover-gold">
                <input type="text" @click="checkB1(), getWinner()" id="b1" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl br bb pa3 pointer hover-gold">
                <input type="text" @click="checkB2(), getWinner()" id="b2" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl bb pa3 pointer hover-gold">
                <input type="text" @click="checkB3(), getWinner()" id="b3" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              
              <div class="w-third br bb pa3 pointer hover-gold">
                <input type="text" @click="checkB4(), getWinner()" id="b4" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl br bb pa3 pointer hover-gold">
                <input type="text" @click="checkB5(), getWinner()" id="b5" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl bb pa3 pointer hover-gold">
                <input type="text" @click="checkB6(), getWinner()" id="b6" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              
              <div class="w-third br pa3 pointer hover-gold">
                <input type="text" @click="checkB7(), getWinner()" id="b7" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl br pa3 pointer hover-gold">
                <input type="text" @click="checkB8(), getWinner()" id="b8" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              <div class="w-third bl pa3 pointer hover-gold">
                <input type="text" @click="checkB9(), getWinner()" id="b9" readonly class="w2 h2 bg-transparent gold f2 inputfield2 tc" >
              </div> 
              
              
            </div>
          </div>
          <div id="print" class="cf w-50-l f6 measure center hover-bg-black-30 hover-gold bg-gold navy b pv3 ph2 br2 mv4 tc">
            Player X Start game
          </div>  
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games',
  data(){
    return{
      flag: 1,
    }
  },
  mounted(){
  },
  methods: {
    getWinner() {

      //setting DOM to all boxes or input field
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById('b1').value;
        b2 = document.getElementById('b2').value;
        b3 = document.getElementById('b3').value;
        b4 = document.getElementById('b4').value;
        b5 = document.getElementById('b5').value;
        b6 = document.getElementById('b6').value;
        b7 = document.getElementById('b7').value;
        b8 = document.getElementById('b8').value;
        b9 = document.getElementById('b9').value;


        // checking if Player X won or not and after that disabled all the other fields
        if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player X won ****Secret Question = What is Baba Bada fullname ?');
        } else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player X won ');
        } else if((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          window.alert('Player X won ****Secret Question = What secondary School did Baba Bada attend and within what year did he attend the school?');
        } else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          window.alert('Player X won');
        } else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          window.alert('Player X won');
        } else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player X won');
        } else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player X won ****Secret Question = In what order according is the procession into the Church During Baby Christening');
        } else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')){
          document.getElementById('print').innerHTML = 'Player X won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player X won');
        }

        // checking if Player O won or not and after that disabled all the other fields
        else if((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player O won ****Secret Question = Name Three(3) hymns Numbers that start with (Imole) ?');
        } else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player O won');
        } else if((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b6').disabled = true;
          window.alert('Player O won');
        } else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b5').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          window.alert('Player O won');
        } else if((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          window.alert('Player O won');
        } else if((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player O won ****Secret Question = Name the Materials Required for Baby Christening?');
        } else if((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b4').disabled = true;
          document.getElementById('b6').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player O won');
        } else if((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')){
          document.getElementById('print').innerHTML = 'Player O won';

          document.getElementById('b1').disabled = true;
          document.getElementById('b2').disabled = true;
          document.getElementById('b3').disabled = true;
          document.getElementById('b7').disabled = true;
          document.getElementById('b8').disabled = true;
          document.getElementById('b9').disabled = true;
          window.alert('Player O won');
        }
        // CHECKING FOR TIE
        else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
            || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
            (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
            (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
                document.getElementById('print')
                    .innerHTML = "Match Tie";
                window.alert('Match Tie');
        }
        else {
          if (this.flag == 1){
            document.getElementById('print').innerHTML = 'Player X Turn';
          }else {
            document.getElementById('print').innerHTML = 'Player O Turn';
          }
        }
    },

    // Function to reset game
    resetGame() {
      location.reload();
      document.getElementById('b1').value = '';
      document.getElementById("b2").value = '';
      document.getElementById("b3").value = '';
      document.getElementById("b4").value = '';
      document.getElementById("b5").value = '';
      document.getElementById("b6").value = '';
      document.getElementById("b7").value = '';
      document.getElementById("b8").value = '';
      document.getElementById("b9").value = '';
    },
    checkB1() {
      if (this.flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        this.flag = 1;
      }
    },
    checkB2() {
      if (this.flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        this.flag = 1;
      }
    },
    checkB3() {
      if (this.flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        this.flag = 1;
      }
    },
    checkB4() {
      if (this.flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        this.flag = 1;
      }
    },
    checkB5() {
      if (this.flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        this.flag = 1;
      }
    },
    checkB6() {
      if (this.flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        this.flag = 1;
      }
    },
    checkB7() {
      if (this.flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        this.flag = 1;
      }
    },
    checkB8() {
      if (this.flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        this.flag = 1;
      }
    },
    checkB9() {
      if (this.flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        this.flag = 0;
      }
      else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        this.flag = 1;
      }
    },

  }
}
</script>
