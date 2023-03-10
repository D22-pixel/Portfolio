<!--Colocar dark mode no código html -->

<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.3.4/lib/darkmode-js.min.js"></script>

<script>
  var options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓' // default: ''
}
const darkmode = new Darkmode(options);
darkmode.showWidget();
</script>