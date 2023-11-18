import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госЗнак: DS.attr('string'),
  марка: DS.attr('string'),
  модель: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-ot-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  госЗнак: {
    descriptionKey: 'models.i-i-s-ot-трансп-ср.validations.госЗнак.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-ot-трансп-ср.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-ot-трансп-ср.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-ot-трансп-ср.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранспСрE', 'i-i-s-ot-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    госЗнак: attr('Гос знак', { index: 1 }),
    модель: attr('Модель', { index: 2 })
  });

  modelClass.defineProjection('ТранспСрL', 'i-i-s-ot-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    госЗнак: attr('Гос знак', { index: 1 }),
    модель: attr('Модель', { index: 2 })
  });
};
