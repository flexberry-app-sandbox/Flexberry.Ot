import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчДвижГСМMixin
} from '../mixins/regenerated/models/i-i-s-ot-тч-движ-г-с-м';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчДвижГСМMixin, Validations, {
});

defineProjections(Model);

export default Model;
