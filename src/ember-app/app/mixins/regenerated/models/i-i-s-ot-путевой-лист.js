import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выдатьТоплива: DS.attr('number'),
  гаражНомер: DS.attr('number'),
  номер: DS.attr('number'),
  сопровожЛица: DS.attr('string'),
  транспСр: DS.belongsTo('i-i-s-ot-трансп-ср', { inverse: null, async: false })
});

export let ValidationRules = {
  выдатьТоплива: {
    descriptionKey: 'models.i-i-s-ot-путевой-лист.validations.выдатьТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  гаражНомер: {
    descriptionKey: 'models.i-i-s-ot-путевой-лист.validations.гаражНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-ot-путевой-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сопровожЛица: {
    descriptionKey: 'models.i-i-s-ot-путевой-лист.validations.сопровожЛица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  транспСр: {
    descriptionKey: 'models.i-i-s-ot-путевой-лист.validations.транспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПутевойЛистE', 'i-i-s-ot-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 })
  });

  modelClass.defineProjection('ПутевойЛистL', 'i-i-s-ot-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 })
  });
};
