<template>
    <!-- <div id="vueapp">
        <div class="text-danger" v-if="jsonstr && jsonerror">{{ jsonerror }}</div>
        <div class="text-success" v-if="!jsonerror">Valid JSON ✔</div>
        <textarea v-model="jsonstr" rows="10" class="form-control" ref="jsonText"
            placeholder="paste or type JSON here..."></textarea>
        <pre>{{ prettyFormat }}</pre>
    </div> -->
    <div class="json-container">
        <div> Json Formatter</div>
        <el-input v-model="jsonstr" type="textarea" :autosize="{ minRows: 20, maxRows: 30 }" ref="textarea"></el-input>
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
    methods: {
        prettyFormat() {
            this.jsonerror = "ok"
            let jsonValue = ""
            this.fmtType = "success"
            try {
                jsonValue = JSON.parse(this.jsonstr)
                this.jsonstr = JSON.stringify(jsonValue, null, 2)
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
    // computed: {
    //     prettyFormat: function() {
    //         // reset error
    //         this.jsonerror = ""
    //         let jsonValue = ""
    //         try {
    //             // try to parse
    //             jsonValue = JSON.parse(this.jsonstr)
    //         }
    //         catch (e) {
    //             this.jsonerror = JSON.stringify(e.message)
    //             var textarea = this.$refs.jsonText
    //             if (this.jsonerror.indexOf('position') > -1) {
    //                 // highlight error position
    //                 var positionStr = this.jsonerror.lastIndexOf('position') + 8;
    //                 var posi = parseInt(this.jsonerror.substr(positionStr, this.jsonerror.lastIndexOf('"')))
    //                 if (posi >= 0) {
    //                     textarea.setSelectionRange(posi, posi + 1)
    //                 }
    //             }
    //             return ""
    //         }
    //         return JSON.stringify(jsonValue, null, 2)
    //     }
    // }
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