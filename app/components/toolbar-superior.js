import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    myService: Ember.inject.service(),
    actions: {
        abrirMenu: function () {
            this.get('myService').get('abrirPainelLateral') ? this.get('myService').set('abrirPainelLateral', false) : this.get('myService').set('abrirPainelLateral', true); 
        }
    }
});
