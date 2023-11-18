import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  допущен: DS.attr('boolean'),
  табелНомер: DS.attr('number'),
  персонал: DS.belongsTo('i-i-s-ot-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  допущен: {
    descriptionKey: 'models.i-i-s-ot-т-ч-водитель.validations.допущен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табелНомер: {
    descriptionKey: 'models.i-i-s-ot-т-ч-водитель.validations.табелНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-ot-т-ч-водитель.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧВодительE', 'i-i-s-ot-т-ч-водитель', {
    табелНомер: attr('Табел номер', { index: 0 }),
    допущен: attr('Допущен', { index: 1 })
  });

  modelClass.defineProjection('ТЧВодительL', 'i-i-s-ot-т-ч-водитель', {
    табелНомер: attr('Табел номер', { index: 0 }),
    допущен: attr('Допущен', { index: 1 })
  });
};
