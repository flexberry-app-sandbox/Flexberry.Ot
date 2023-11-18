import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ot-договор-l');
  this.route('i-i-s-ot-договор-e',
  { path: 'i-i-s-ot-договор-e/:id' });
  this.route('i-i-s-ot-договор-e.new',
  { path: 'i-i-s-ot-договор-e/new' });
  this.route('i-i-s-ot-должности-l');
  this.route('i-i-s-ot-должности-e',
  { path: 'i-i-s-ot-должности-e/:id' });
  this.route('i-i-s-ot-должности-e.new',
  { path: 'i-i-s-ot-должности-e/new' });
  this.route('i-i-s-ot-журнал-учета-l');
  this.route('i-i-s-ot-журнал-учета-e',
  { path: 'i-i-s-ot-журнал-учета-e/:id' });
  this.route('i-i-s-ot-журнал-учета-e.new',
  { path: 'i-i-s-ot-журнал-учета-e/new' });
  this.route('i-i-s-ot-контрагент-l');
  this.route('i-i-s-ot-контрагент-e',
  { path: 'i-i-s-ot-контрагент-e/:id' });
  this.route('i-i-s-ot-контрагент-e.new',
  { path: 'i-i-s-ot-контрагент-e/new' });
  this.route('i-i-s-ot-организация-l');
  this.route('i-i-s-ot-организация-e',
  { path: 'i-i-s-ot-организация-e/:id' });
  this.route('i-i-s-ot-организация-e.new',
  { path: 'i-i-s-ot-организация-e/new' });
  this.route('i-i-s-ot-персонал-l');
  this.route('i-i-s-ot-персонал-e',
  { path: 'i-i-s-ot-персонал-e/:id' });
  this.route('i-i-s-ot-персонал-e.new',
  { path: 'i-i-s-ot-персонал-e/new' });
  this.route('i-i-s-ot-путевой-лист-l');
  this.route('i-i-s-ot-путевой-лист-e',
  { path: 'i-i-s-ot-путевой-лист-e/:id' });
  this.route('i-i-s-ot-путевой-лист-e.new',
  { path: 'i-i-s-ot-путевой-лист-e/new' });
  this.route('i-i-s-ot-рук-отд-лог-l');
  this.route('i-i-s-ot-рук-отд-лог-e',
  { path: 'i-i-s-ot-рук-отд-лог-e/:id' });
  this.route('i-i-s-ot-рук-отд-лог-e.new',
  { path: 'i-i-s-ot-рук-отд-лог-e/new' });
  this.route('i-i-s-ot-т-ч-водитель-l');
  this.route('i-i-s-ot-т-ч-водитель-e',
  { path: 'i-i-s-ot-т-ч-водитель-e/:id' });
  this.route('i-i-s-ot-т-ч-водитель-e.new',
  { path: 'i-i-s-ot-т-ч-водитель-e/new' });
  this.route('i-i-s-ot-т-ч-задан-вод-l');
  this.route('i-i-s-ot-т-ч-задан-вод-e',
  { path: 'i-i-s-ot-т-ч-задан-вод-e/:id' });
  this.route('i-i-s-ot-т-ч-задан-вод-e.new',
  { path: 'i-i-s-ot-т-ч-задан-вод-e/new' });
  this.route('i-i-s-ot-трансп-ср-l');
  this.route('i-i-s-ot-трансп-ср-e',
  { path: 'i-i-s-ot-трансп-ср-e/:id' });
  this.route('i-i-s-ot-трансп-ср-e.new',
  { path: 'i-i-s-ot-трансп-ср-e/new' });
  this.route('i-i-s-ot-тч-движ-г-с-м-l');
  this.route('i-i-s-ot-тч-движ-г-с-м-e',
  { path: 'i-i-s-ot-тч-движ-г-с-м-e/:id' });
  this.route('i-i-s-ot-тч-движ-г-с-м-e.new',
  { path: 'i-i-s-ot-тч-движ-г-с-м-e/new' });
  this.route('i-i-s-ot-тч-раб-вод-авто-l');
  this.route('i-i-s-ot-тч-раб-вод-авто-e',
  { path: 'i-i-s-ot-тч-раб-вод-авто-e/:id' });
  this.route('i-i-s-ot-тч-раб-вод-авто-e.new',
  { path: 'i-i-s-ot-тч-раб-вод-авто-e/new' });
});

export default Router;
