import React from 'react';

const APPNAME = 'Drum Machine'
const DESCR = [
  'flat-kick-drum',
  'steel-drum',
  'big-kick-drum',
  'african-wood-drum',
  'roller-drum',
  'lofi-drum',
  'electric-drum',
  'deep-drum',
  'talking-drum'
];
const URLS = [
  'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Khezie%20Hip%20Hop%20Kit/74[kb]khezie-Flat-Kick-Drum.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/83[kb]steeldrum.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/53[kb]big-v-kick-drum.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/African%20Wooden%20Drum/103[kb]African_Wooden_Drum_08_High_02.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/161%20to%20180%20bpm/130[kb]163_rollerdrum.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/611[kb]137_lofi-cheesy-drum-machine.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/121%20to%20130%20bpm/348[kb]126_silly-electrodrums.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/111%20to%20120%20bpm/344[kb]120_deep-drum-click.wav.mp3',
  'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/111%20to%20120%20bpm/182[kb]118_talking_drum.wav.mp3'
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keys: ['Q','W','E','A','S','D','Z','X','C'],
      ids: DESCR,
      urls: URLS
    };
    this.play = this.play.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event){
    let char = String.fromCharCode(event.keyCode)
    this.play(char);
  }
  play(id){
    console.log(this.state.keys);
    if(this.state.keys.includes(id)){
      let audio = document.getElementById(id);
      audio.play();
    }
  }
  render(){
    let drumPads = this.state.keys.map((key, index) => {
      return(
        <button id={this.state.ids[index]} className='drum-pad' onClick={() => this.play(key)}>
          {key}{index}
          <audio id={key} className='clip' src={this.state.urls[index]}></audio>
        </button>
      );
    });
    return (
      <div className="container-fluid">
        <h2 className='text-center'>{APPNAME}</h2>
        <div id='drum-machine' className='text-center'>
          <div id='display'>
          </div>
          {drumPads}
        </div>
      </div>
    );
  }
}

export default App;
