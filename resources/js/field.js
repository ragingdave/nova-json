Nova.booting((Vue, router) => {
  Vue.component('index-nova-json', require('./components/IndexField'));
  Vue.component('detail-nova-json', require('./components/DetailField'));
  Vue.component('form-nova-json', require('./components/FormField'));
});
