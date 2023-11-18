import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяРаботы: DS.attr('decimal'),
  датаВремя: DS.attr('date'),
  нулевойПробег: DS.attr('decimal'),
  показСпидом: DS.attr('decimal')
});

export let ValidationRules = {
  времяРаботы: {
    descriptionKey: 'models.i-i-s-ot-тч-раб-вод-авто.validations.времяРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  датаВремя: {
    descriptionKey: 'models.i-i-s-ot-тч-раб-вод-авто.validations.датаВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  нулевойПробег: {
    descriptionKey: 'models.i-i-s-ot-тч-раб-вод-авто.validations.нулевойПробег.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  показСпидом: {
    descriptionKey: 'models.i-i-s-ot-тч-раб-вод-авто.validations.показСпидом.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчРабВодАвтоE', 'i-i-s-ot-тч-раб-вод-авто', {
    показСпидом: attr('Показ спидом', { index: 0 }),
    времяРаботы: attr('Время работы', { index: 1 }),
    нулевойПробег: attr('Нулевой пробег', { index: 2 }),
    датаВремя: attr('Дата время', { index: 3 })
  });

  modelClass.defineProjection('ТчРабВодАвтоL', 'i-i-s-ot-тч-раб-вод-авто', {
    показСпидом: attr('Показ спидом', { index: 0 }),
    времяРаботы: attr('Время работы', { index: 1 }),
    нулевойПробег: attr('Нулевой пробег', { index: 2 }),
    датаВремя: attr('Дата время', { index: 3 })
  });
};
