import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧЗаданВодMixin
} from '../mixins/regenerated/models/i-i-s-ot-т-ч-задан-вод';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧЗаданВодMixin, Validations, {
});

defineProjections(Model);

export default Model;
