//xiong 2018-11-21
(function (win, doc) {
  win.MergeObject = function (param) {
    this.data   = param.data;//需要合并的对象数组
    this.idProp = param.idProp;//某一个相同属性(具有相同的值)
    this.props  = param.props;//想要合并的属性(值)
    this.b = {};//将包含某一个相同属性的对象放入一个数组内
    this.reData = {};//合并后的对象
    this.data.forEach(function (v) {
      if(this.b[v[this.idProp]] == undefined){
        this.b[v[this.idProp]]=[];
      }
      this.b[v[this.idProp]].push(v);
    }.bind(this));

    for (var k in this.b) {
      this.reData[k] = {};
      if(this.b[k].length===1){
        this.reData[k] = this.b[k][0];
      }else{
        for(var i in this.b[k][0]){
          this.reData[k][i] = '';
        }
        this.b[k].forEach(function (v) {
          for(var i in v){
            if(this.props.indexOf(i) > -1){
              if(this.reData[k][i].indexOf(v[i]) < 0){
                this.reData[k][i]+=v[i]+'、';
              }
            }else{
              this.reData[k][i] = v[i];
            }
          }
        }.bind(this));

        for(var i in this.reData[k]){
          if(this.props.indexOf(i) > -1){
            this.reData[k][i] = this.reData[k][i].slice(0,-1);
          }
        }
      }
    }
  }
})(window,document);
