import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчРабВодАвтоMixin
} from '../mixins/regenerated/models/i-i-s-ot-тч-раб-вод-авто';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчРабВодАвтоMixin, Validations, {
});

defineProjections(Model);

export default Model;
