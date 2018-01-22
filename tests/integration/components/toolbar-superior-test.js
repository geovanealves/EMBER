import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('toolbar-superior', 'Integration | Component | toolbar superior', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{toolbar-superior}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#toolbar-superior}}
      template block text
    {{/toolbar-superior}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
