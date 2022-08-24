<template>
    <div class="json-container">
        <div> Json Formatter</div>
        <el-input v-model="jsonstr" type="textarea" :autosize="{ minRows: 20, maxRows: 30 }" ref="textarea"
            placeholder="{}"></el-input>
        <el-button type="primary" @click="prettyFormat">格式化</el-button>
        <el-alert :title="jsonerror" :type="fmtType"></el-alert>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jsonstr: '',
            jsonerror: '',
            fmtType: "",
        }
    },
    mounted() {
        var st_str = window.localStorage.getItem('jsonstr')
        this.jsonstr = (st_str && st_str != '') ? st_str : ''
    },
    methods: {
        prettyFormat() {
            this.jsonerror = "ok"
            let jsonValue = ""
            this.fmtType = "success"
            window.localStorage.setItem('jsonstr', this.jsonstr)

            try {
                jsonValue = JSON.parse(this.jsonstr)
                this.jsonstr = JSON.stringify(jsonValue, null, 2)
                window.localStorage.setItem('jsonstr', this.jsonstr)
            } catch (e) {
                this.jsonerror = JSON.stringify(e.message)
                this.fmtType = "error"
                var arr = this.jsonerror.match(/position (\d+)/)
                if (arr != null && arr.length > 1) {
                    let bodyTextArea = this.$refs.textarea.$el.querySelector('textarea')
                    var pos = parseInt(arr[1])
                    this.$nextTick(() => {
                        bodyTextArea.focus()
                        bodyTextArea.setSelectionRange(pos, pos + 1)
                    })
                }
            }
        }
    }
}
</script>

<style>
.json-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0, 40px;
    align-items: center;
    justify-items: flex-start;
}

.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>