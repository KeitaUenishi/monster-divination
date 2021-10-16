
import React, {Component} from "react";

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      editing: true,
      imageFile: "",
      monsterName: "",
      fortuneStatus: "",
      message: "",
    }
    this.handleEditing = this.handleEditing.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  render() {
    const { editing } = this.state
    return (
      <div>
        <form>
          {editing ? (
            <div>
              <input placeholder="名前を入力" onChange={(e) => {
                this.setState({ input: e.target.value })
              }}
              type="text"
              value={this.state.input}
              />
              <button onClick={this.handleSubmit}>占う</button>
            </div>
          ) : (
            <div>
              <div>
                <span style={{"marginRight": "10px"}}>{this.state.input} さん の運勢は</span>
              </div>
              <br />
              <div>
                <div>{this.state.monsterName}</div>
                <div style={{"marginBottom": "10px"}}>{this.state.fortuneStatus}</div>
                <div style={{"marginBottom": "20px"}}>
                  {this.state.message.split("/n").map((i, key) => {
                    return <div key={key}>{i}</div>;
                  })}
                </div>
                <img style={{"width":"300px"}} src={`${process.env.PUBLIC_URL}/pic-${this.state.imageFile}.jpg`} alt="test" />
              </div>
              <button style={{"marginTop": "20px"}} onClick={this.handleEditing}>戻る</button>
            </div>
          )}
        </form>
      </div>
    )
  }

  handleEditing(e) {
    e.preventDefault()
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.input) {
      alert("名前を入力してください");
      return
    }

    this.setState({
      input: this.state.input,
      editing: !this.state.editing,
    })
    
    let key = 'input';
    let inputItem = this.state[key].toString().length;;

    this.displayImage(inputItem);

  }

  displayImage(inputItem) {
    let today = new Date();
    let judgeNumber = Math.floor(Math.random() * (inputItem * 10));
    let criterion = Math.floor(Math.random() * (today.getSeconds() + judgeNumber));

    if(criterion < 10){
      this.resultStateSet(
        "ojisan",
        "★☆☆☆☆☆☆☆☆☆",
        "【丸なったオッサン】",
        "主にガヤガヤとした居酒屋に出没。/n昔話が多めで、やんちゃしていたときの話をすることが多い/n口癖は「俺も昔はムチャクチャしとったけどなぁ！ 今は丸なってもうたもんやで！」"
      );
    }
    else if (criterion < 20){
      this.resultStateSet(
        "uekibachi", 
        "★★★★☆☆☆☆☆☆", 
        "【植木鉢おじさん】", 
        "ある日突然、頭の上で花を育てようと決心。/n10年がたったが、家に鏡がないためどんな花になっているかは/n知らない。草花は主に脳みそを養分として成長している"
      );
    }
    else if (criterion < 30){
      this.resultStateSet(
        "hekoki-mountain", 
        "★★★☆☆☆☆☆☆☆", 
        "【屁をし続けなければ死ぬ人】", 
        "突如として強力な「屁」のチカラを手に入れた人。/nしかし、はじめに使った屁によって1500mほど飛び上がってしまったため/n屁をこき続けて浮くことで、かろうじて生命を維持できている……"
      );
    }
    else if (criterion < 40){
      this.resultStateSet(
        "jouwan", 
        "★★☆☆☆☆☆☆☆☆", 
        "【上腕二頭筋三兄弟】", 
        "上腕二頭筋に突如宿った妖精。/n長男以外は上腕二頭筋ではないので、次男と三男はコンプレックスの塊。/n一番上（拳）が三男で、怒ると長男、次男を一方的に殴り始める。"
      );
    }
    else if (criterion < 50){
      this.resultStateSet(
        "hekoki", 
        "★★★★★☆☆☆☆☆", 
        "【屁こき歩き虫】", 
        "脚力が貧弱すぎて、放屁した時の推進力でしか前に進めない虫。/nサイズは平均12cmほどしか無いが、屁の匂いはかなり強烈で/n群れの長クラスになると時折爆撃機のような音を鳴らす"
      );
    }
    else if (criterion < 60){
      this.resultStateSet(
        "amechan", 
        "★★★★★★☆☆☆☆", 
        "【アメちゃんおじさん】", 
        "35年間口から飴を絶やしたことがない41歳。/nいつもチュッパチャップスをジャグリングしながら街を練り歩く。/nその凶悪に生い茂る胸毛に隠された乳首から「極上の水飴」が抽出されると噂されており、飴マニア界隈からは「桃源郷」と崇められている。"
      );
    }
    else if (criterion < 70){
      this.resultStateSet(
        "unexplored", 
        "★★★★★★★☆☆☆", 
        "【未練の屍】", 
        "未練が可視化された状態。/n残留思念のようなもの。特になにかがあるわけでもなく、ずっとその場にいる。"
      );
    }
    else if (criterion < 80){
      this.resultStateSet(
        "stare-wod", 
        "★★★★★★★★☆☆", 
        "【見つめる木】", 
        "そこにあるだけで何もしない。ただずーーーっと見ている。/nいつから生えているのかもわからないし、どこに生えているのかもわからない。/nただずーーっと見ている。"
      );
    }
    else if (criterion < 90){
      this.resultStateSet(
        "bijyo", 
        "★★★★★★★★★☆", 
        "【さまよう美女】", 
        "この世のありとあらゆる情報を受け止め、どこにゆくべきか、ひたすらにさまよっている。/n主体のない、概念のような存在。"
      );
    }
    else {
      this.resultStateSet(
        "curtain-back", 
        "★★★★★★★★★★", 
        "【カーテンの裏】", 
        "カーテンの裏側に住み着く亡霊。どんなところにも、どんな家庭にも存在しているかもしれない。/nふと、裏側を覗いてみると……？"
      );
    }
  }

  resultStateSet (image, fortune, name, message){
    this.setState({
      imageFile: image,
      fortuneStatus: fortune,
      monsterName: name,
      message: message
    });
  }
}

