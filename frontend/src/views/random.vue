<template>
    <div class="mainContainer">
        <!-- <div class="random-main"> -->
        <div class="mainTitle">随机密码工具</div>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="lowercase">小写字母: a-z</el-checkbox>
            <el-checkbox label="uppercase">大写字母: A-Z</el-checkbox>
            <el-checkbox label="number">数字: 0-9</el-checkbox>
            <el-checkbox label="special">特殊字符: -_!@#$%^&*()</el-checkbox>
        </el-checkbox-group>
        <el-button type="primary" size="small" class="execBtn" @click="generatePassword">生成密码</el-button>
        <div class="resultDiv">
            <el-input v-model="result"></el-input>
            <el-button size="small" @click="handleCopyText">点击复制</el-button>
        </div>
        <!-- </div> -->
    </div>

</template>

<script>

export default {
    data() {
        return {
            checkList: ["lowercase", "uppercase", "number"],
            result: ""
        }
    },
    mounted() {
        this.result = window.localStorage.getItem('random-password')
    },
    methods: {
        generatePassword() {
            var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var ENGLISH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var special = ["-", "_", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
            var alpha = [];
            var arr = [];
            if (this.checkList.indexOf('number') >= 0) { // 包含数字
                alpha = alpha.concat(num);
                arr.push(this.getOne(num));
            }
            if (this.checkList.indexOf('lowercase') >= 0) {// 包含小写字母
                alpha = alpha.concat(english);
                arr.push(this.getOne(english));
            }
            if (this.checkList.indexOf('uppercase') >= 0) {
                alpha = alpha.concat(ENGLISH);
                arr.push(this.getOne(ENGLISH));
            }
            if (this.checkList.indexOf('special') >= 0) {
                alpha = alpha.concat(special);
                arr.push(this.getOne(special));
            }
            for (var i = 4; i < 16; i++) {
                arr.push(alpha[Math.floor(Math.random() * alpha.length)]);
            }
            var newArr = [];
            for (var j = 0; j < 16; j++) {
                newArr.push(arr.splice(Math.random() * arr.length, 1)[0]);
            }
            this.result = newArr.join("")
            window.localStorage.setItem('random-password', this.result)
        },
        getOne(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        handleCopyText() {
            const copyToClipboard = (text) => navigator.clipboard.writeText(text);
            copyToClipboard(this.result);
            this.$message.success("复制成功")
        }
    }
}

</script>

<style>
.el-checkbox-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
}

.el-checkbox-group>.el-checkbox {
    margin: 5px;
}

.resultDiv {
    display: flex;
}
</style>