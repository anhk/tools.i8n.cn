<template>
  <div class="mainContainer">
    <!-- <div class="random-main"> -->
    <div class="mainTitle">Calculator</div>
    <div class="calcBody">
      <div class="calculator">
        <div class="calcButtons">
          <h2 id="calcValue"></h2>
          <span id="calcClear">Clear</span>
          <span>/</span>
          <span>*</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>-</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span id="calcPlus">+</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>0</span>
          <span>00</span>
          <span>.</span>
          <span id="calcEqual">=</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  mounted() {
    let btn = document.querySelectorAll('span');
    let value = document.getElementById('calcValue');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {
        if (this.innerHTML === "=") {
          value.innerHTML = eval(value.innerHTML);
        } else if (this.innerHTML === "Clear") {
          value.innerHTML = "";
        } else {
          value.innerHTML += this.innerHTML;
        }
      })
    }
  }
}
</script>

<style scoped>

.calcBody {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  /*background: #edf1f4;*/
  width: 100%;
  height: 100%;
}

.calculator {
  position: relative;
  width: 340px;
  padding: 20px;
  border-radius: 20px;
  background: #edf1f4;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fffb;
}

.calculator .calcButtons {
  position: relative;
  display: grid;
}

.calculator .calcButtons #calcValue {
  position: relative;
  grid-column: span 4;
  user-select: none;
  overflow: unset;
  /*width: 100%;*/
  text-align: end;
  color: #5166d6;
  height: 100px;
  line-height: 100px;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 20px #fff;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 0 20px;
  font-size: 2em;
  font-weight: 500;
}

.calculator .calcButtons span {
  position: relative;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #666;
  border: 2px solid #edf1f4;
  border-radius: 10px;
}

.calculator .calcButtons span:active {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff;
  color: #f44336;
}

.calculator .calcButtons span#calcClear {
  grid-column: span 2;
  background: #f44336;
  color: #fff;
  border: 2px solid #edf1f4;
}

.calculator .calcButtons span#calcPlus {
  grid-row: span 2;
  background: #31a935;
  color: #fff;
  border: 2px solid #edf1f4;
}

.calculator .calcButtons span#calcEqual {
  grid-row: span 2;
  background: #2196f3;
  color: #fff;
  border: 2px solid #edf1f4;
}

.calculator .calcButtons span#calcClear:active,
.calculator .calcButtons span#calcPlus:active,
.calculator .calcButtons span#calcEqual:active {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1),
  -5px -5px 10px #fff,
  inset 5px 5px 10px rgba(0, 0, 0, 0.1);
}

</style>