import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  количество: DS.attr('decimal'),
  маркаГСМ: DS.attr('string'),
  остаток: DS.attr('decimal')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-ot-тч-движ-г-с-м.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-ot-тч-движ-г-с-м.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  маркаГСМ: {
    descriptionKey: 'models.i-i-s-ot-тч-движ-г-с-м.validations.маркаГСМ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-ot-тч-движ-г-с-м.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчДвижГСМE', 'i-i-s-ot-тч-движ-г-с-м', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    остаток: attr('Остаток', { index: 2 }),
    маркаГСМ: attr('Марка ГСМ', { index: 3 })
  });

  modelClass.defineProjection('ТчДвижГСМL', 'i-i-s-ot-тч-движ-г-с-м', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    остаток: attr('Остаток', { index: 2 }),
    маркаГСМ: attr('Марка ГСМ', { index: 3 })
  });
};
